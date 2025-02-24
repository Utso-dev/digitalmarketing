"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {/* Outer Ring */}
      <motion.div
        className="fixed w-12 h-12 border-[1px] border-blue-600 rounded-full"
        style={{ left: position.x - 24, top: position.y - 24 }}
        animate={{ left: position.x - 24, top: position.y - 24 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      />

      {/* Inner Dot (Perfectly Centered) */}
      <motion.div
        className="fixed w-2 h-2 bg-blue-600 rounded-full"
        style={{ left: position.x - 4, top: position.y - 4 }}
        animate={{ left: position.x - 4, top: position.y - 4 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      />
    </div>
  );
}
