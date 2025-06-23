import { useEffect, useRef, useState } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null }); // Track mouse position
  const lastInteraction = useRef(Date.now()); // Track user activity
  const interactionActive = useRef(false); // Whether mouse interaction is active
  const meteors = useRef([]); // List of active meteors
  const lastMeteorTime = useRef(Date.now()); // Timestamp of last meteor
  const [burstPlayed, setBurstPlayed] = useState(false); // Initial "burst" animation trigger

  useEffect(() => {
    // Force dark mode for the effect
    document.documentElement.classList.add("dark");

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const STAR_COUNT = 100;
    const centerX = width / 2;
    const centerY = height / 2;

    // Initialize star positions radiating from center
    const stars = Array.from({ length: STAR_COUNT }, () => {
      const targetX = Math.random() * width;
      const targetY = Math.random() * height;
      const angle = Math.atan2(targetY - centerY, targetX - centerX);
      const speed = 7 + Math.random() * 3;

      return {
        x: centerX,
        y: centerY,
        originalX: targetX,
        originalY: targetY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 1.8 + Math.random() * 1.6,
        hue: Math.floor(Math.random() * 60 + 180),
        trail: [],
        layer: Math.floor(Math.random() * 3) + 1,
      };
    });

    const magneticForce = 0.4;
    const magneticRadius = 200;
    let burstDuration = 60;
    let animationFrameId;

    // Create a new meteor at random position
    const spawnMeteor = () => {
      meteors.current.push({
        x: Math.random() * width,
        y: -50,
        vx: -4 - Math.random() * 3,
        vy: 4 + Math.random() * 2,
        size: 3 + Math.random() * 2,
        life: 100,
      });
    };

    // Core animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      const now = Date.now();

      // Animate each star
      stars.forEach((s, i) => {
        // Apply magnetic pull if mouse nearby
        if (interactionActive.current && mouse.current.x !== null) {
          const dx = mouse.current.x - s.x;
          const dy = mouse.current.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < magneticRadius) {
            s.vx += (dx * magneticForce) / dist;
            s.vy += (dy * magneticForce) / dist;
          }
        }

        // Initial burst animation
        if (!burstPlayed && burstDuration > 0) {
          s.x += s.vx;
          s.y += s.vy;
          s.vx *= 0.9;
          s.vy *= 0.9;
          burstDuration--;
          if (burstDuration <= 0) setBurstPlayed(true);
        } else {
          // Drift stars back to original position
          const dx = s.originalX - s.x;
          const dy = s.originalY - s.y;
          s.vx += dx * 0.0015;
          s.vy += dy * 0.0015;
          s.x += s.vx;
          s.y += s.vy;
          s.vx *= 0.7;
          s.vy *= 0.7;
        }

        // Store recent positions for trail effect
        s.trail.unshift({ x: s.x, y: s.y });
        if (s.trail.length > 8) s.trail.pop();

        // Render fading trail
        ctx.globalAlpha = 0.2;
        s.trail.forEach((pos, idx) => {
          ctx.beginPath();
          ctx.arc(
            pos.x,
            pos.y,
            s.size * (1 - idx / s.trail.length),
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `hsla(${s.hue}, 100%, 70%, 0.2)`;
          ctx.fill();
        });

        // Pulsing and glowing main star body
        const pulse = 0.6 + 0.4 * Math.sin(now * 0.006 + i * 1.3);
        const hue = s.hue + Math.sin(now * 0.004 + i * 2) * 20;

        const gradient = ctx.createRadialGradient(
          s.x,
          s.y,
          0,
          s.x,
          s.y,
          s.size * 10
        );
        gradient.addColorStop(
          0,
          `hsla(${hue}, 100%, ${60 + 25 * pulse}%, 0.95)`
        );
        gradient.addColorStop(1, `hsla(${s.hue}, 100%, 70%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(
          s.x,
          s.y,
          s.size + Math.sin(now * 0.004 + i * 3.1) * 0.6,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Glow aura ring
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 224, 255, 0.08)`;
        ctx.fill();
      });

      // Animate meteors
      for (let i = meteors.current.length - 1; i >= 0; i--) {
        const m = meteors.current[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life--;

        const meteorGradient = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - 50,
          m.y + 50
        );
        meteorGradient.addColorStop(0, "rgba(0, 224, 255, 1)");
        meteorGradient.addColorStop(1, "rgba(0, 224, 255, 0)");

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - 50, m.y + 50);
        ctx.strokeStyle = meteorGradient;
        ctx.lineWidth = m.size;
        ctx.stroke();

        if (m.life <= 0) meteors.current.splice(i, 1);
      }

      // Meteor spawn timing
      if (now - lastMeteorTime.current > 6000) {
        spawnMeteor();
        lastMeteorTime.current = now;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Handle canvas resize on window change
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Track user interaction
    const handleMouseMove = (e) => {
      if (e.target.closest("nav")) return; // Avoid collisions with nav
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastInteraction.current = Date.now();
      interactionActive.current = true;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listeners and animation frame
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  });

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[100] block pointer-events-none"
    />
  );
};
