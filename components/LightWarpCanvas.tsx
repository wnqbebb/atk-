import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  pz: number;
}

const LightWarpCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const numParticles = 300;
    particlesRef.current = [];
    for (let i = 0; i < numParticles; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
        pz: 0,
      });
    }

    const draw = () => {
      // Semi-transparent white for trail effect (light theme)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      particlesRef.current.forEach((particle) => {
        // Store previous z for trail
        particle.pz = particle.z;
        
        // Move particle closer
        particle.z -= 3;

        // Reset particle if it passes the screen
        if (particle.z <= 0) {
          particle.x = Math.random() * canvas.width - cx;
          particle.y = Math.random() * canvas.height - cy;
          particle.z = canvas.width;
          particle.pz = particle.z;
        }

        // Project 3D to 2D
        const sx = (particle.x / particle.z) * cx + cx;
        const sy = (particle.y / particle.z) * cy + cy;

        // Previous position for trail
        const px = (particle.x / particle.pz) * cx + cx;
        const py = (particle.y / particle.pz) * cy + cy;

        // Calculate size based on depth
        const r = (1 - particle.z / canvas.width) * 2.5;

        // Calculate color based on depth - light theme: grays and cyan
        const depth = 1 - particle.z / canvas.width;
        
        // Mix between gray and cyan based on position
        const isCyan = particle.x > 0;
        const hue = isCyan ? 187 : 220; // Cyan or blue-gray
        const saturation = isCyan ? 80 + depth * 20 : 10;
        const lightness = isCyan ? 50 + depth * 20 : 60 - depth * 20;

        // Draw particle trail
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${depth * 0.6})`;
        ctx.lineWidth = r;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Draw particle head
        ctx.beginPath();
        ctx.arc(sx, sy, r * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness + 10}%, ${depth * 0.8})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f4f4f5 100%)' }}
    />
  );
};

export default LightWarpCanvas;
