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

    // Watch Dogs / Matrix style hacker stream
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*+<>_';
    const charArray = chars.split('');
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Start at different heights
    }

    let frame = 0;
    let animationFrameId: number;

    const draw = () => {
      frame++;
      
      // Background with trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width, height);

      // Main color
      ctx.fillStyle = 'rgba(0, 255, 255, 0.25)';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        // Occasional color glitch
        if (Math.random() > 0.98) {
          ctx.fillStyle = 'rgba(255, 0, 255, 0.4)'; // Magenta glitch
        } else {
          ctx.fillStyle = 'rgba(0, 255, 255, 0.25)'; // Cyan default
        }

        const text = charArray[Math.floor(Math.random() * charArray.length)];
        // Random horizontal glitch
        const xOffset = Math.random() > 0.99 ? (Math.random() - 0.5) * 30 : 0;
        
        ctx.fillText(text, i * fontSize + xOffset, drops[i] * fontSize);

        // Reset drop
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      // Random visual glitch horizontal lines
      if (Math.random() > 0.92) {
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0, 255, 255, 0.1)' : 'rgba(255, 0, 255, 0.1)';
        ctx.fillRect(0, Math.random() * height, width, Math.random() * 8 + 2);
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
      className="fixed inset-0 w-full h-full pointer-events-none z-[-2] opacity-40 dark:opacity-30 mix-blend-screen"
    />
  );
}
