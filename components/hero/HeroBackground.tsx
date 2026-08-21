"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
  color: i % 3 === 0 ? "#00BFFF" : i % 3 === 1 ? "#00FF88" : "#00E5FF",
}));

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base radial glow — left */}
      <div
        className="absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0,191,255,0.35) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Base radial glow — right */}
      <div
        className="absolute -right-40 top-1/3 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(0,191,255,0.6) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,191,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,191,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wave lines at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full"
          style={{ opacity: 0.15 }}
        >
          <motion.path
            d="M0,100 C180,140 360,60 540,100 C720,140 900,60 1080,100 C1260,140 1350,80 1440,100 L1440,200 L0,200 Z"
            fill="url(#waveGrad1)"
            animate={{ d: [
              "M0,100 C180,140 360,60 540,100 C720,140 900,60 1080,100 C1260,140 1350,80 1440,100 L1440,200 L0,200 Z",
              "M0,80 C180,120 360,80 540,80 C720,80 900,80 1080,80 C1260,80 1350,100 1440,80 L1440,200 L0,200 Z",
              "M0,100 C180,140 360,60 540,100 C720,140 900,60 1080,100 C1260,140 1350,80 1440,100 L1440,200 L0,200 Z",
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,120 C200,80 400,140 600,120 C800,100 1000,140 1200,110 C1350,90 1400,120 1440,110 L1440,200 L0,200 Z"
            fill="url(#waveGrad2)"
            animate={{ d: [
              "M0,120 C200,80 400,140 600,120 C800,100 1000,140 1200,110 C1350,90 1400,120 1440,110 L1440,200 L0,200 Z",
              "M0,110 C200,140 400,100 600,130 C800,140 1000,100 1200,120 C1350,130 1400,100 1440,120 L1440,200 L0,200 Z",
              "M0,120 C200,80 400,140 600,120 C800,100 1000,140 1200,110 C1350,90 1400,120 1440,110 L1440,200 L0,200 Z",
            ]}}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00FF88" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FF88" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
