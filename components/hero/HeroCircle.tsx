"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Globe, Smartphone, Rocket } from "lucide-react";

const floatingIcons = [
  {
    icon: Code2,
    label: "Code",
    position: "-left-2 xs:-left-6 sm:-left-12 top-1/2 -translate-y-1/2",
    delay: 0,
    size: "w-10 h-10 sm:w-14 sm:h-14",
    iconSize: "w-4 h-4 sm:w-6 sm:h-6",
  },
  {
    icon: Globe,
    label: "Web",
    position: "-right-2 xs:-right-4 sm:-right-10 top-4 sm:top-8",
    delay: 1.5,
    size: "w-10 h-10 sm:w-14 sm:h-14",
    iconSize: "w-4 h-4 sm:w-6 sm:h-6",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    position: "left-2 xs:left-6 -bottom-4 sm:-bottom-10",
    delay: 0.8,
    size: "w-10 h-10 sm:w-14 sm:h-14",
    iconSize: "w-4 h-4 sm:w-6 sm:h-6",
  },
  {
    icon: Rocket,
    label: "Launch",
    position: "-right-2 xs:-right-4 sm:-right-8 bottom-2 sm:bottom-4",
    delay: 2.2,
    size: "w-10 h-10 sm:w-14 sm:h-14",
    iconSize: "w-4 h-4 sm:w-6 sm:h-6",
  },
];

export function HeroCircle() {
  return (
    <div className="relative w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center mx-auto max-w-full">
      {/* Outermost ambient glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,191,255,0.08) 0%, rgba(0,255,136,0.04) 50%, transparent 70%)",
        }}
      />

      {/* Outer spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-3 sm:inset-4 rounded-full"
        style={{
          border: "1px solid rgba(0, 191, 255, 0.15)",
        }}
      >
        {/* Ring dots */}
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const r = 48; // percentage radius within the ring div
          const x = 50 + r * Math.cos(rad - Math.PI / 2);
          const y = 50 + r * Math.sin(rad - Math.PI / 2);
          return (
            <div
              key={deg}
              className="absolute w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{
                background: deg % 120 === 0 ? "#00BFFF" : "rgba(0,191,255,0.4)",
                top: `${y}%`,
                left: `${x}%`,
                boxShadow: deg % 120 === 0 ? "0 0 6px #00BFFF" : "none",
              }}
            />
          );
        })}
      </motion.div>

      {/* Middle reverse ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          inset: "20px",
          border: "1.5px solid transparent",
          borderRadius: "50%",
          background:
            "linear-gradient(#020407, #020407) padding-box, linear-gradient(135deg, rgba(0,191,255,0.6) 0%, rgba(0,229,255,0.4) 40%, rgba(0,255,136,0.6) 100%) border-box",
          boxShadow:
            "0 0 40px rgba(0,191,255,0.15), inset 0 0 40px rgba(0,255,136,0.05)",
        }}
      />

      {/* Inner glow ring */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full"
        style={{
          inset: "36px",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.08) 0%, rgba(0,255,136,0.04) 60%, transparent 100%)",
          border: "1px solid rgba(0,229,255,0.12)",
        }}
      />

      {/* Logo container */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex items-center justify-center p-2"
      >
        <Image
          src="/logo/bytecodx-logo.png"
          alt="ByteCodX"
          width={200}
          height={70}
          className="w-36 xs:w-44 sm:w-52 h-auto object-contain"
          priority
        />
      </motion.div>

      {/* Floating Technology Icons */}
      {floatingIcons.map(({ icon: Icon, label, position, delay, size, iconSize }) => (
        <motion.div
          key={label}
          className={`absolute ${position} z-20`}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <div
            className={`${size} rounded-xl flex items-center justify-center backdrop-blur-sm`}
            style={{
              background: "rgba(10, 15, 26, 0.9)",
              border: "1px solid rgba(0, 191, 255, 0.3)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.5), 0 0 12px rgba(0,191,255,0.15)",
            }}
          >
            <Icon
              className={iconSize}
              style={{ color: "#00BFFF" }}
              aria-label={label}
            />
          </div>
        </motion.div>
      ))}

      {/* Particle dots */}
      {[
        { x: "20%", y: "15%", size: 4, delay: 0 },
        { x: "80%", y: "30%", size: 3, delay: 1 },
        { x: "10%", y: "70%", size: 5, delay: 2 },
        { x: "85%", y: "75%", size: 3, delay: 0.5 },
        { x: "50%", y: "5%", size: 4, delay: 1.5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            background: i % 2 === 0 ? "#00BFFF" : "#00FF88",
            boxShadow: `0 0 ${dot.size * 2}px ${i % 2 === 0 ? "#00BFFF" : "#00FF88"}`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}
