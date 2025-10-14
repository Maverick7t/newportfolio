"use client";
import React, { useEffect } from "react";
import { LucideGithub, ExternalLink } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import TextType from "@/components/ui/TextType";

const HeroSection = () => {
  const controls = useAnimation(); // ← for controlling TextType

  const descriptiveText = [
    "Building resilient, intelligent systems — where code scales, data flows, and reliability rules.",
    "Actively seeking opportunities where smart systems, automation, and impact meet — let’s build something that scales.",
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
      {/* Removed background image - now applied globally in App.tsx */}

      {/* Responsive overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 sm:bg-black/15 md:bg-black/20 lg:bg-black/20" />

      <div className="absolute inset-0">
        {/* Floating blobs */}
        {/* ... your existing animated blobs here ... */}
      </div>

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
            <a
              href="https://github.com/Maverick7t"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 rounded-full px-6 text-white font-semibold text-[15px] leading-none tracking-tight cursor-pointer outline-2 outline-transparent outline-offset-2 transition-all duration-300 hover:outline-none focus:outline-none"
              style={{
                fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
                WebkitFontSmoothing: 'antialiased',
                background: 'linear-gradient(to top, #000000 0%, #1a1a1a 50%, #000000 100%)',
                height: '36px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.7), 0 -6px 12px rgba(255,215,0,0.4)',
                letterSpacing: '-0.02em',
                boxSizing: 'border-box',
                border: '1px solid #ffd700'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to top, #1a1a1a 0%, #333333 50%, #1a1a1a 100%)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.6), 0 -8px 16px rgba(255,215,0,0.6)';
                e.currentTarget.style.border = '1px solid #ffed4a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to top, #000000 0%, #1a1a1a 50%, #000000 100%)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.7), 0 -6px 12px rgba(255,215,0,0.4)';
                e.currentTarget.style.border = '1px solid #ffd700';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.background = '#000000';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.7), 0 -4px 10px rgba(255,215,0,0.5)';
                e.currentTarget.style.border = '1px solid #ffc107';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to top, #1a1a1a 0%, #333333 50%, #1a1a1a 100%)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.6), 0 -8px 16px rgba(255,215,0,0.6)';
                e.currentTarget.style.border = '1px solid #ffed4a';
              }}
            >
              <LucideGithub className="w-4 h-4" />
              <span>Github account</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;