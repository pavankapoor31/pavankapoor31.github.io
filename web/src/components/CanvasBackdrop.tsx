"use client";

import { useEffect, useRef } from "react";

type Circle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  minradius: number;
  color: string;
};

const COLORS = [
  "#BD2A2E",
  "#3B3936",
  "#330000",
  "#1a0000",
  "#889C9B",
  "#486966",
  "#520120",
  "#08403E",
];

export default function CanvasBackdrop({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const MAXRADIUS = 50;
    const distanceFromMouse = 40;
    let numOfCircles = 1000;

    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (window.innerWidth < 800) numOfCircles = Math.floor(window.innerWidth);
      init();
    };

    const rand = (max?: number) => (max ? Math.random() * max : Math.random());

    let circles: Circle[] = [];

    const createCircle = (): Circle => {
      const radius = rand(9);
      const x = rand(canvas.width) - 2 * radius + radius;
      const y = rand(canvas.height);
      const dy = rand(4) - 0.5;
      const dx = rand(4) - 0.5;
      const color = COLORS[Math.floor(rand(COLORS.length))] || COLORS[0];
      return { x, y, dx, dy, radius, minradius: radius, color };
    };

    const init = () => {
      circles = [];
      for (let i = 0; i < numOfCircles; i++) circles.push(createCircle());
    };

    const draw = (c: Circle) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = c.color;
      ctx.fill();
    };

    const update = (c: Circle) => {
      if (c.y >= canvas.height - c.radius * 2) c.dy = -rand(2);
      if (c.y <= c.radius) c.dy = rand(2);
      if (c.x >= canvas.width - c.radius * 2) c.dx = -rand(2);
      if (c.x <= c.radius) c.dx = rand(2);
      c.x += c.dx;
      c.y += c.dy;

      if (
        mouse.x - c.x < distanceFromMouse &&
        mouse.x - c.x > -distanceFromMouse &&
        mouse.y - c.y < distanceFromMouse &&
        mouse.y - c.y > -distanceFromMouse
      ) {
        if (c.radius <= MAXRADIUS) c.radius += 2;
      } else if (c.radius > c.minradius && c.radius > 2) {
        c.radius -= 1;
      }
      draw(c);
    };

    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      for (let i = 0; i < circles.length; i++) update(circles[i]);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className || "absolute inset-0 h-full w-full opacity-30"}
      aria-hidden
    />
  );
}



