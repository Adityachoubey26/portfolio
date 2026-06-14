import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, smoothX: 0, smoothY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Track Mouse
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize Particles (Multi-layer depth system)
    const particleCount = 120;
    const particles = [];
    const focus = 400; // perspective focus distance

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 2.5,
        y: (Math.random() - 0.5) * height * 2.5,
        z: Math.random() * 1000 + 50, // depth layer
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.4 ? 'rgba(59, 130, 246,' : 'rgba(168, 85, 247,', // blue or purple base
        opacity: Math.random() * 0.4 + 0.2,
      });
    }

    // Glow Orbs settings
    const orbs = [
      { x: width * 0.2, y: height * 0.3, targetX: width * 0.2, targetY: height * 0.3, radius: 250, color: 'rgba(59, 130, 246, 0.04)', speed: 0.005 },
      { x: width * 0.8, y: height * 0.7, targetX: width * 0.8, targetY: height * 0.7, radius: 300, color: 'rgba(168, 85, 247, 0.03)', speed: 0.003 },
      { x: width * 0.5, y: height * 0.5, targetX: width * 0.5, targetY: height * 0.5, radius: 350, color: 'rgba(99, 102, 241, 0.03)', speed: 0.004 },
    ];

    let gridSpeed = 0;
    const render = () => {
      ctx.fillStyle = '#020617'; // Match theme background
      ctx.fillRect(0, 0, width, height);

      const mouse = mouseRef.current;
      // Smooth interpolation for mouse movements (lag-free, jitter-free)
      mouse.smoothX += (mouse.x - mouse.smoothX) * 0.06;
      mouse.smoothY += (mouse.y - mouse.smoothY) * 0.06;

      // Dynamic Vanishing Point reacting to mouse
      const vanishingX = width / 2 + (mouse.smoothX - width / 2) * 0.08;
      const vanishingY = height * 0.55 + (mouse.smoothY - height / 2) * 0.08;

      // ----------------------------------------------------
      // Draw Spotlight (Cursor-reactive radial spotlight)
      // ----------------------------------------------------
      const spotlightGrad = ctx.createRadialGradient(
        mouse.smoothX, mouse.smoothY, 0,
        mouse.smoothX, mouse.smoothY, 450
      );
      spotlightGrad.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
      spotlightGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
      spotlightGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = spotlightGrad;
      ctx.fillRect(0, 0, width, height);

      // ----------------------------------------------------
      // Draw Dynamic Ambient Glow Orbs
      // ----------------------------------------------------
      orbs.forEach((orb) => {
        // Drift orbs slightly
        orb.x += (orb.targetX - orb.x) * 0.01;
        orb.y += (orb.targetY - orb.y) * 0.01;

        if (Math.random() < 0.005) {
          orb.targetX = width * (Math.random() * 0.8 + 0.1);
          orb.targetY = height * (Math.random() * 0.8 + 0.1);
        }

        const orbGrad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        orbGrad.addColorStop(0, orb.color);
        orbGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = orbGrad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // ----------------------------------------------------
      // Draw 3D Perspective Grid
      // ----------------------------------------------------
      ctx.lineWidth = 1.0;
      gridSpeed -= 0.6; // Moves grid lines forward (translating in Z-axis)
      if (gridSpeed <= -40) gridSpeed = 0;

      const gridY = height * 0.5; // Grid starts from horizon
      const horizonY = gridY;

      // Draw Perspective (Vertical/Perspective grid lines)
      const lineCount = 36;
      ctx.beginPath();
      for (let i = 0; i <= lineCount; i++) {
        const angle = (i / lineCount) * Math.PI - Math.PI; // semi-circle sweep
        const startX = vanishingX;
        const startY = vanishingY;
        
        // Project outer boundaries
        const targetX = vanishingX + Math.cos(angle) * width * 3;
        const targetY = vanishingY + Math.sin(angle) * height * 3;

        // Clip lines so they only draw on the bottom half (under horizon)
        if (targetY > horizonY) {
          ctx.strokeStyle = `rgba(59, 130, 246, ${Math.max(0, 0.09 - Math.abs((i - lineCount / 2) * 0.005))})`;
          ctx.moveTo(startX, horizonY);
          // Calculate intersection with the bottom edge of screen
          const intersectX = startX + (targetX - startX) * ((height - horizonY) / (targetY - horizonY));
          ctx.lineTo(intersectX, height);
        }
      }
      ctx.stroke();

      // Draw Horizontal lines (spaced exponentially to simulate depth)
      ctx.beginPath();
      const horizLineCount = 18;
      for (let i = 0; i < horizLineCount; i++) {
        // Exponential distribution for depth illusion
        const ratio = (i + gridSpeed / 40) / horizLineCount;
        const z = Math.pow(ratio, 2.5); // non-linear scaling
        const lineY = horizonY + z * (height - horizonY);

        if (lineY > horizonY) {
          const opacity = Math.max(0, z * 0.15); // Fade lines closer to the horizon
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          
          // Width of grid extends outwards at the bottom
          const gridHalfWidth = width * 1.5 * z;
          ctx.moveTo(vanishingX - gridHalfWidth, lineY);
          ctx.lineTo(vanishingX + gridHalfWidth, lineY);
        }
      }
      ctx.stroke();

      // ----------------------------------------------------
      // Draw 3D Floating Particles (Layered Depth System)
      // ----------------------------------------------------
      // Parallax shifts from mouse
      const mouseParallaxX = (mouse.smoothX - width / 2) * 0.15;
      const mouseParallaxY = (mouse.smoothY - height / 2) * 0.15;

      particles.forEach((p) => {
        // Drift particle towards viewer in depth
        p.z -= 0.45;
        if (p.z <= 0) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 2.5;
          p.y = (Math.random() - 0.5) * height * 2.5;
        }

        // Project 3D coordinates to 2D screen with parallax adjustment
        // Layer speed depends on Z-depth: closer particles move faster
        const depthFactor = focus / p.z;
        const offsetX = p.x - mouseParallaxX * (1 - p.z / 1000);
        const offsetY = p.y - mouseParallaxY * (1 - p.z / 1000);

        const screenX = vanishingX + offsetX * depthFactor;
        const screenY = vanishingY + offsetY * depthFactor;

        // Draw if within bounds
        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          // Scale size and opacity based on proximity (closer = larger & brighter)
          const size = p.size * (1.5 - p.z / 1000) * 1.2;
          const opacity = p.opacity * (1.2 - p.z / 1000);

          ctx.fillStyle = `${p.color}${opacity})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-30 w-full h-full block"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveBackground;
