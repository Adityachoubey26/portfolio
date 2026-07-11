import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  // Follower spring physics state
  const followerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    width: 24,
    height: 24,
    targetWidth: 24,
    targetHeight: 24,
    borderRadius: 12,
    targetBorderRadius: 12,
    opacity: 0.6,
    targetOpacity: 0.6,
  });

  // Active hover element tracking
  const hoverStateRef = useRef({
    element: null,
    type: null, // 'button' | 'card' | 'text'
    rect: null,
  });

  // Click ripples, sparks, trails
  const ripplesRef = useRef([]);
  const sparksRef = useRef([]);
  const trailRef = useRef([]);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window);
      setIsMobile(mobile);
      if (!mobile) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ----------------------------------------------------
    // Event Listeners
    // ----------------------------------------------------
    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Add coordinate to trail
      trailRef.current.push({ x: e.clientX, y: e.clientY, alpha: 0.5 });
      if (trailRef.current.length > 15) {
        trailRef.current.shift();
      }

      // If hovering magnetic item, calculate and apply pull force
      const hover = hoverStateRef.current;
      if (hover.element && hover.type === 'button') {
        const rect = hover.rect || hover.element.getBoundingClientRect();
        const center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
        const dx = e.clientX - center.x;
        const dy = e.clientY - center.y;
        
        // Push the element slightly towards the cursor (magnetic feel)
        const maxDist = 80;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist; // 0 to 1
          hover.element.style.transform = `translate(${dx * 0.25 * force}px, ${dy * 0.25 * force}px)`;
        } else {
          hover.element.style.transform = 'translate(0px, 0px)';
        }
      }
    };

    const onClick = (e) => {
      // Create ripple
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 40,
        opacity: 0.8
      });

      // Spawn spark burst (soft particles)
      const count = 16;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        sparksRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 1,
          life: 1.0,
          decay: Math.random() * 0.03 + 0.02,
          color: Math.random() > 0.5 ? 'rgba(59, 130, 246,' : 'rgba(168, 85, 247,' // blue/purple spark
        });
      }
    };

    // Global MouseOver / MouseOut delegates for automatic hover styles
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactive = target.closest('a, button, .btn-primary, .btn-secondary, [role="button"], .cursor-pointer');
      const card = target.closest('.glass-card, [onClick]');
      const text = target.closest('h1, h2, h3, h4, p, span, li');

      if (interactive) {
        hoverStateRef.current = {
          element: interactive,
          type: 'button',
          rect: interactive.getBoundingClientRect()
        };
        interactive.classList.add('magnetic-item');
      } else if (card) {
        hoverStateRef.current = {
          element: card,
          type: 'card',
          rect: card.getBoundingClientRect()
        };
      } else if (text && !text.closest('a, button')) {
        // Just text hover
        hoverStateRef.current = {
          element: text,
          type: 'text',
          rect: text.getBoundingClientRect()
        };
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      const hover = hoverStateRef.current;

      if (hover.element && (target === hover.element || !hover.element.contains(target))) {
        // Reset transform on magnetic target
        if (hover.type === 'button') {
          hover.element.style.transform = 'translate(0px, 0px)';
        }
        hoverStateRef.current = { element: null, type: null, rect: null };
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // ----------------------------------------------------
    // Loop
    // ----------------------------------------------------
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const follower = followerRef.current;
      const hover = hoverStateRef.current;

      // Draw Cursor Trail (fading dots)
      trailRef.current.forEach((t, index) => {
        t.alpha -= 0.02;
        if (t.alpha > 0) {
          ctx.beginPath();
          ctx.arc(t.x, t.y, 2 * (index / trailRef.current.length), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99, 102, 241, ${t.alpha * 0.25})`;
          ctx.fill();
        }
      });

      // Target bounds logic for follower
      let targetX = mouse.x;
      let targetY = mouse.y;

      if (hover.element) {
        const rect = hover.element.getBoundingClientRect();
        hover.rect = rect; // Update actual rect position in scroll

        if (hover.type === 'button') {
          // Snap outer ring perfectly around button borders (Apple snapping effect)
          targetX = rect.left + rect.width / 2;
          targetY = rect.top + rect.height / 2;
          follower.targetWidth = rect.width + 12;
          follower.targetHeight = rect.height + 12;
          // Extract border radius
          const style = window.getComputedStyle(hover.element);
          const rad = parseFloat(style.borderRadius) || 8;
          follower.targetBorderRadius = rad + 6;
          follower.targetOpacity = 0.25;
        } else if (hover.type === 'card') {
          // Slightly scale outer ring on card hover
          follower.targetWidth = 60;
          follower.targetHeight = 60;
          follower.targetBorderRadius = 30;
          follower.targetOpacity = 0.4;
        } else if (hover.type === 'text') {
          // Scale down or invert focus
          follower.targetWidth = 10;
          follower.targetHeight = 10;
          follower.targetBorderRadius = 5;
          follower.targetOpacity = 0.8;
        }
      } else {
        // Standard cursor ring
        follower.targetWidth = 28;
        follower.targetHeight = 28;
        follower.targetBorderRadius = 14;
        follower.targetOpacity = 0.55;
      }

      // Spring physics calculation for smooth follower motion
      const k = 0.16; // stiffness
      const d = 0.55; // damping
      const ax = (targetX - follower.x) * k;
      const ay = (targetY - follower.y) * k;

      follower.vx += ax;
      follower.vy += ay;
      follower.vx *= d;
      follower.vy *= d;
      
      follower.x += follower.vx;
      follower.y += follower.vy;

      // Linear interpolation for shape sizing/opacity
      follower.width += (follower.targetWidth - follower.width) * 0.2;
      follower.height += (follower.targetHeight - follower.height) * 0.2;
      follower.borderRadius += (follower.targetBorderRadius - follower.borderRadius) * 0.2;
      follower.opacity += (follower.targetOpacity - follower.opacity) * 0.2;

      // Draw Follower (Snapping or hovering ring)
      ctx.save();
      ctx.beginPath();
      // Draw rounded rectangle to wrap magnetic buttons, or circle otherwise
      const x = follower.x - follower.width / 2;
      const y = follower.y - follower.height / 2;
      const w = follower.width;
      const h = follower.height;
      const r = follower.borderRadius;

      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();

      // If hovering text, invert the cursor drawing color
      if (hover.type === 'text') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
      } else {
        ctx.strokeStyle = `rgba(99, 102, 241, ${follower.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Subtly draw gradient glow around the follower
        const ringGlow = ctx.createRadialGradient(
          follower.x, follower.y, 0,
          follower.x, follower.y, Math.max(w, h)
        );
        ringGlow.addColorStop(0, `rgba(99, 102, 241, ${follower.opacity * 0.15})`);
        ringGlow.addColorStop(1, 'rgba(99, 102, 241, 0)');
        ctx.fillStyle = ringGlow;
        ctx.fill();
      }
      ctx.restore();

      // Draw click ripples
      ripplesRef.current.forEach((r, idx) => {
        r.radius += (r.maxRadius - r.radius) * 0.15;
        r.opacity -= 0.05;
        if (r.opacity <= 0) {
          ripplesRef.current.splice(idx, 1);
        } else {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${r.opacity})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      });

      // Draw sparks
      sparksRef.current.forEach((s, idx) => {
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.04; // gravity drift
        s.life -= s.decay;
        if (s.life <= 0) {
          sparksRef.current.splice(idx, 1);
        } else {
          ctx.fillStyle = `${s.color}${s.life * 0.85})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw Pointer Dot
      if (hover.type !== 'text') {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animId = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[99999]"
    />
  );
};

export default CustomCursor;
