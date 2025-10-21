"use client";
import React, { useEffect } from "react";
import { Linkedin } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import TextType from "@/components/ui/TextType";

const HeroSection = () => {
  const controls = useAnimation(); // ← for controlling TextType

  const descriptiveText = [
    "Actively seeking opportunities In AI, Machine Learning, and Cloud domains.",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ opacity: 1 }); // ← trigger fade-in of TextType manually
    }, 1600); // wait till both h1 (0.3+0.8) and h2 (0.6+0.8)

    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

      {/* Responsive overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 sm:bg-black/15 md:bg-black/20 lg:bg-black/20" />

      <div className="relative z-10 text-center px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-16 text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight font-mono"
          style={{
            lineHeight: 1,
            letterSpacing: '-.04em',
            backgroundImage: 'radial-gradient(89.47% 51.04% at 44.27% 50%, #e2e3e9 0%, #d4d6de 52.73%, #3d3f4c 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 500,
            maxWidth: '100%',
            paddingBottom: '.625rem',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          Moinaktar Shaikh
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-700 mt-4"
        >
          Data & Cloud Enthusiast
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls} // ← controlled animation
          transition={{ duration: 0.6 }}
        >
          <TextType
            text={descriptiveText}
            initialDelay={1} // ← no delay, it waits for mount
            typingSpeed={60}
            pauseDuration={3000}
            className="mt-4 max-w-xl mx-auto text-gray-600 text-md md:text-lg leading-relaxed"
          />
        </motion.div>

        <div className="mt-11 flex flex-col items-start gap-y-3.5 sm:flex-row sm:items-center sm:gap-x-6 sm:gap-y-0 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/moinaktar-shaikh-7b3a33207/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-2 rounded-full px-8 text-white font-semibold cursor-pointer transition-all duration-300 group"
              style={{
                fontSize: '15px',
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: '-.02em',
                height: '36px',
                WebkitFontSmoothing: 'antialiased',
                background: '#000000',
              }}
            >
              {/* Border gradient overlay */}
              <span
                className="absolute rounded-full transition-opacity duration-300 pointer-events-none"
                style={{
                  inset: '-1px -1px -1.5px -1px',
                  backgroundImage: 'linear-gradient(180deg, #fcc171, #c17c56 55%, #362821)',
                }}
              />

              {/* Main black background */}
              <span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: '#000000',
                }}
              />

              {/* Top radial glow effect - inside the button */}
              <span
                className="absolute left-1/2 -translate-x-1/2 rounded-full transition-transform duration-300 pointer-events-none"
                style={{
                  top: '-6px',
                  bottom: '20%',
                  width: '90%',
                  backgroundImage: 'radial-gradient(ellipse 40% 40% at 50% 10%, rgba(255, 223, 150, 0.7) 10%, rgba(255, 195, 90, 0.4) 50%, rgba(255, 160, 60, 0.15) 80%, transparent 100%)',
                  mixBlendMode: 'screen',
                  filter: 'blur(1px)',
                }}
              />

              {/* Content */}
              <Linkedin className="w-4 h-4 relative z-10" />
              <span className="relative z-10">LinkedIn account</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;