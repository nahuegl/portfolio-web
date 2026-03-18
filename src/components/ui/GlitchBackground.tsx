import { useEffect, useRef } from 'react';

export default function GlitchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);

    // Watch Dogs / DedSec node network aesthetics
    const particles: {x: number, y: number, vx: number, vy: number, size: number}[] = [];
    const numParticles = Math.min(Math.floor((width * height) / 12000), 80);

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            size: Math.random() * 2 + 1
        });
    }

    let animationFrameId: number;

    const draw = () => {
      // Adaptive colors based on theme
      const isDark = document.documentElement.classList.contains('dark');
      const bgColor = isDark ? 'rgba(9, 9, 11, 0.15)' : 'rgba(226, 232, 240, 0.15)'; // Trail effect
      const particleColor = isDark ? 'rgba(0, 255, 255, 0.4)' : 'rgba(15, 23, 42, 0.4)';
      const lineColor = isDark ? 'rgba(0, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.08)';
      const glitchColorCyan = isDark ? 'rgba(0, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.1)';
      const glitchColorMagenta = isDark ? 'rgba(255, 0, 255, 0.15)' : 'rgba(226, 29, 72, 0.1)';

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 130) {
                  ctx.strokeStyle = lineColor;
                  ctx.lineWidth = 1 - dist / 130;
                  ctx.beginPath();
                  ctx.moveTo(particles[i].x, particles[i].y);
                  ctx.lineTo(particles[j].x, particles[j].y);
                  ctx.stroke();
              }
          }
      }

      // Random glitch effect scanlines
      if (Math.random() > 0.95) {
          ctx.fillStyle = Math.random() > 0.5 ? glitchColorCyan : glitchColorMagenta;
          ctx.fillRect(0, Math.random() * height, width, Math.random() * 4 + 1);
          
          if (Math.random() > 0.7) {
              const sliceY = Math.random() * height;
              const sliceH = Math.random() * 20 + 5;
              const imgData = ctx.getImageData(0, sliceY, width, sliceH);
              const shift = (Math.random() - 0.5) * 20;
              ctx.putImageData(imgData, shift, sliceY);
          }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1] opacity-100 mix-blend-normal transition-opacity duration-500"
    />
  );
}
