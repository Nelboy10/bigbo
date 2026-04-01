"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-background">
      {/* Pink/Bordeaux blob 1 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 150, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px]"
      />
      {/* Bordeaux blob 2 */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 150, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[150px]"
      />
      {/* Accent dark blob 3 (to add depth) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 80, 0],
          y: [0, -120, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] bg-primary-dark/5 rounded-full blur-[100px]"
      />
      {/* Extra soft bordeaux accent */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -150, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] left-[20%] w-[35vw] h-[35vw] bg-tertiary/10 rounded-full blur-[130px]"
      />
      
      {/* Noise overly to make it premium and remove banding */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
    </div>
  );
}
