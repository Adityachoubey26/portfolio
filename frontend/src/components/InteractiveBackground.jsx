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
    let time = 0;

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

    // Initialize Particles (Small ambient stars/sparks)
    const particleCount = 60;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
      });
    }

    // Perspective focus variables
    const focus = 400;

    // 3D Floating wireframe shapes (Cubes and Pyramids)
    // Vertices are local to each shape center
    const shapes = [
      {
        x: -width * 0.35, y: -height * 0.25, z: 350,
        size: 30, type: 'pyramid',
        rx: Math.random(), ry: Math.random(), rz: Math.random(),
        speedX: 0.005, speedY: 0.008, speedZ: 0.003,
        color: 'rgba(59, 130, 246, 0.45)' // Cyan/Blue
      },
      {
        x: width * 0.38, y: -height * 0.3, z: 400,
        size: 25, type: 'pyramid',
        rx: Math.random(), ry: Math.random(), rz: Math.random(),
        speedX: 0.004, speedY: 0.006, speedZ: 0.005,
        color: 'rgba(168, 85, 247, 0.45)' // Purple
      },
      {
        x: -width * 0.28, y: height * 0.25, z: 300,
        size: 20, type: 'cube',
        rx: Math.random(), ry: Math.random(), rz: Math.random(),
        speedX: 0.006, speedY: 0.004, speedZ: 0.007,
        color: 'rgba(99, 102, 241, 0.4)' // Indigo
      },
      {
        x: width * 0.35, y: height * 0.2, z: 450,
        size: 35, type: 'cube',
        rx: Math.random(), ry: Math.random(), rz: Math.random(),
        speedX: 0.003, speedY: 0.005, speedZ: 0.004,
        color: 'rgba(59, 130, 246, 0.4)'
      }
    ];

    // Helper: 3D point local rotation
    const rotate3D = (x, y, z, rx, ry, rz) => {
      // Rotate X
      const cosX = Math.cos(rx), sinX = Math.sin(rx);
      let y1 = y * cosX - z * sinX;
      let z1 = y * sinX + z * cosX;

      // Rotate Y
      const cosY = Math.cos(ry), sinY = Math.sin(ry);
      let x2 = x * cosY + z1 * sinY;
      let z2 = -x * sinY + z1 * cosY;

      // Rotate Z
      const cosZ = Math.cos(rz), sinZ = Math.sin(rz);
      let x3 = x2 * cosZ - y1 * sinZ;
      let y3 = x2 * sinZ + y1 * cosZ;

      return { x: x3, y: y3, z: z2 };
    };

    const render = () => {
      // Theme background fill
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);

      time += 1.0;

      const mouse = mouseRef.current;
      mouse.smoothX += (mouse.x - mouse.smoothX) * 0.05;
      mouse.smoothY += (mouse.y - mouse.smoothY) * 0.05;

      const vanishingX = width / 2 + (mouse.smoothX - width / 2) * 0.06;
      const vanishingY = height * 0.55 + (mouse.smoothY - height / 2) * 0.06;

      // ----------------------------------------------------
      // Draw Central Subtle Circular Neon Rings (as in screenshot)
      // ----------------------------------------------------
      ctx.save();
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.arc(vanishingX - width * 0.05, vanishingY - 40, 280, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)';
      ctx.beginPath();
      ctx.arc(vanishingX - width * 0.05, vanishingY - 40, 360, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // ----------------------------------------------------
      // Draw 3D Side Terrain wireframes (Wavy Mountains)
      // ----------------------------------------------------
      const drawTerrain = (side) => {
        const numCols = 10;
        const numRows = 12;
        const startZ = 120;
        const endZ = 950;
        
        const gridPoints = [];

        for (let r = 0; r <= numRows; r++) {
          const ratioZ = r / numRows;
          const z = startZ + ratioZ * (endZ - startZ);
          gridPoints[r] = [];

          for (let c = 0; c <= numCols; c++) {
            const ratioX = c / numCols;
            
            // X positioning
            let x;
            if (side === 'left') {
              x = -width * 1.5 + ratioX * width * 1.1;
            } else {
              x = width * 0.4 + ratioX * width * 1.1;
            }

            // Height offset function with dynamic wave movements
            const d = Math.sqrt(x * x + z * z);
            const wave = Math.sin(d * 0.005 - time * 0.02) * Math.cos(z * 0.003 - time * 0.01);
            const heightMultiplier = (side === 'left' ? (1 - ratioX) : ratioX) * 110;
            const y = -60 - (wave * heightMultiplier);

            // Project point
            const depthFactor = focus / z;
            const screenX = vanishingX + x * depthFactor;
            const screenY = vanishingY + y * depthFactor;

            gridPoints[r][c] = { x: screenX, y: screenY, z: z };
          }
        }

        // Draw side wireframe line meshes
        ctx.save();
        for (let r = 0; r < numRows; r++) {
          for (let c = 0; c < numCols; c++) {
            const p1 = gridPoints[r][c];
            const p2 = gridPoints[r][c + 1];
            const p3 = gridPoints[r + 1][c];

            const maxZ = 950;
            const op1 = Math.max(0, (1 - p1.z / maxZ) * 0.2);
            
            // Neon violet/purple color profile for landscape
            ctx.strokeStyle = `rgba(168, 85, 247, ${op1})`;
            ctx.lineWidth = 0.8;

            // Connect columns
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Connect rows
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.stroke();
          }
        }
        ctx.restore();
      };

      drawTerrain('left');
      drawTerrain('right');

      // ----------------------------------------------------
      // Draw floor perspective grid (Cyan floor grid)
      // ----------------------------------------------------
      ctx.save();
      const horizonY = vanishingY;
      const lineCount = 30;
      ctx.lineWidth = 0.85;

      // Perspective longitudinal lines
      for (let i = 0; i <= lineCount; i++) {
        const ratio = i / lineCount;
        const angle = ratio * Math.PI - Math.PI; // bottom hemisphere
        const targetX = vanishingX + Math.cos(angle) * width * 3;
        const targetY = vanishingY + Math.sin(angle) * height * 3;

        if (targetY > horizonY) {
          // Glow intensity fades out away from the center
          const opacity = Math.max(0, 0.22 - Math.abs(ratio - 0.5) * 0.35);
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`; // Cyan/Blue glow grid
          
          const intersectX = vanishingX + (targetX - vanishingX) * ((height - horizonY) / (targetY - horizonY));
          ctx.beginPath();
          ctx.moveTo(vanishingX, horizonY);
          ctx.lineTo(intersectX, height);
          ctx.stroke();
        }
      }

      // Horizontal latitude lines
      const horizCount = 16;
      const gridShift = (time * 0.4) % 40;
      for (let i = 0; i < horizCount; i++) {
        const ratio = (i + gridShift / 40) / horizCount;
        const z = Math.pow(ratio, 2.5); // exponential distribution for depth
        const lineY = horizonY + z * (height - horizonY);

        if (lineY > horizonY) {
          const opacity = z * 0.22;
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          const halfWidth = width * 1.5 * z;
          
          ctx.beginPath();
          ctx.moveTo(vanishingX - halfWidth, lineY);
          ctx.lineTo(vanishingX + halfWidth, lineY);
          ctx.stroke();
        }
      }
      ctx.restore();

      // ----------------------------------------------------
      // Draw 3D Floating Geometry (Cubes & Pyramids)
      // ----------------------------------------------------
      ctx.save();
      shapes.forEach((shape) => {
        // Rotate local angles
        shape.rx += shape.speedX;
        shape.ry += shape.speedY;
        shape.rz += shape.speedZ;

        // Vertices
        let vertices = [];
        let edges = [];

        if (shape.type === 'pyramid') {
          // Tetrahedron
          const size = shape.size;
          vertices = [
            { x: 0, y: -size * 1.1, z: 0 },
            { x: -size, y: size * 0.6, z: -size * 0.8 },
            { x: size, y: size * 0.6, z: -size * 0.8 },
            { x: 0, y: size * 0.6, z: size }
          ];
          edges = [
            [0, 1], [0, 2], [0, 3],
            [1, 2], [2, 3], [3, 1]
          ];
        } else {
          // Cube
          const s = shape.size;
          vertices = [
            { x: -s, y: -s, z: -s },
            { x: s, y: -s, z: -s },
            { x: s, y: s, z: -s },
            { x: -s, y: s, z: -s },
            { x: -s, y: -s, z: s },
            { x: s, y: -s, z: s },
            { x: s, y: s, z: s },
            { x: -s, y: s, z: s }
          ];
          edges = [
            [0, 1], [1, 2], [2, 3], [3, 0], // front
            [4, 5], [5, 6], [6, 7], [7, 4], // back
            [0, 4], [1, 5], [2, 6], [3, 7]  // links
          ];
        }

        // Project and rotate vertices
        const projected = vertices.map((v) => {
          const rot = rotate3D(v.x, v.y, v.z, shape.rx, shape.ry, shape.rz);
          
          // Translate to global coordinates with mouse parallax offsets
          const mouseParallaxX = (mouse.smoothX - width / 2) * 0.08;
          const mouseParallaxY = (mouse.smoothY - height / 2) * 0.08;

          const gx = shape.x + rot.x - mouseParallaxX;
          const gy = shape.y + rot.y - mouseParallaxY;
          const gz = shape.z + rot.z;

          const depthFactor = focus / gz;
          const sx = vanishingX + gx * depthFactor;
          const sy = vanishingY + gy * depthFactor;

          return { x: sx, y: sy };
        });

        // Draw wireframe edges
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 1.0;
        
        edges.forEach(([u, v]) => {
          ctx.beginPath();
          ctx.moveTo(projected[u].x, projected[u].y);
          ctx.lineTo(projected[v].x, projected[v].y);
          ctx.stroke();
        });
      });
      ctx.restore();

      // ----------------------------------------------------
      // Draw Ambient Particle Starfield
      // ----------------------------------------------------
      ctx.save();
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Spotlight glow Overlay
      const spotlightGrad = ctx.createRadialGradient(
        mouse.smoothX, mouse.smoothY, 0,
        mouse.smoothX, mouse.smoothY, 450
      );
      spotlightGrad.addColorStop(0, 'rgba(59, 130, 246, 0.07)');
      spotlightGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
      spotlightGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = spotlightGrad;
      ctx.fillRect(0, 0, width, height);

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
