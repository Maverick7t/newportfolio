"use client";

import React from 'react';
import { motion } from "framer-motion";
import { MapPin, Calendar, Download } from 'lucide-react';
import { GiTrail } from 'react-icons/gi';
import { PiGraduationCapFill } from 'react-icons/pi';
import { VscTools } from 'react-icons/vsc';

import {
  SiPython,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiCplusplus,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGnubash,
  SiTailwindcss,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
} from 'react-icons/si';

// ─── Mobile grid data ────────────────────────────────────────────────────────
const techIcons = [
  { icon: SiPython, name: 'Python' },
  { icon: SiFlask, name: 'Flask' },
  { icon: SiFastapi, name: 'FastAPI' },
  { icon: SiDjango, name: 'Django' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiCplusplus, name: 'C++' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiReact, name: 'React' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiKubernetes, name: 'Kubernetes' },
  { icon: SiGit, name: 'Git' },
  { icon: SiGnubash, name: 'Bash' },
  { icon: SiAmazonaws, name: 'AWS' },
  { icon: SiMicrosoftazure, name: 'Azure' },
  { icon: SiGooglecloud, name: 'GCP' },
];

// ─── Desktop scattered layout ─────────────────────────────────────────────────
// top / left are pixel offsets inside the 550 px tall relative container.
// rotate is the resting tilt in degrees; on hover it snaps to 0.
const techLayout = [
  // Backend
  { icon: SiPython, name: 'Python', top: 40, left: 20, rotate: -8 },
  { icon: SiFastapi, name: 'FastAPI', top: 20, left: 150, rotate: 5 },
  { icon: SiDjango, name: 'Django', top: 25, left: 270, rotate: 7 },
  { icon: SiFlask, name: 'Flask', top: 50, left: 390, rotate: -3 },
  { icon: SiTypescript, name: 'TypeScript', top: 45, left: 510, rotate: 2 },
  { icon: SiNodedotjs, name: 'Node.js', top: 40, left: 630, rotate: 2 },
  { icon: SiCplusplus, name: 'C++', top: 45, left: 750, rotate: -2 },

  // Cloud & DevOps

  { icon: SiDocker, name: 'Docker', top: 40, left: 880, rotate: 0 },
  { icon: SiKubernetes, name: 'K8s', top: 20, left: 1000, rotate: -8 },
  { icon: SiGit, name: 'Git', top: 80, left: 1140, rotate: 10 },

  // Database
  { icon: SiPostgresql, name: 'PostgreSQL', top: 180, left: 470, rotate: 3 },
  { icon: SiMysql, name: 'MySQL', top: 170, left: 340, rotate: 5 },

  // Systems
  { icon: SiGnubash, name: 'Bash', top: 150, left: 600, rotate: -8 },
  { icon: SiAmazonaws, name: 'AWS', top: 150, left: 720, rotate: 8 },

  // Multi Cloud
  { icon: SiMicrosoftazure, name: 'Azure', top: 150, left: 1010, rotate: -3 },
  { icon: SiGooglecloud, name: 'GCP', top: 170, left: 860, rotate: 7 },

  // Frontend
  { icon: SiReact, name: 'React', top: 180, left: 60, rotate: -4 },
  { icon: SiTailwindcss, name: 'Tailwind', top: 150, left: 180, rotate: -7 },
];
// ─── Category label helper ────────────────────────────────────────────────────
interface LabelProps {
  children: React.ReactNode;
  className?: string;
}
const CategoryLabel: React.FC<LabelProps> = ({ children, className = '' }) => (
  <span
    className={`absolute text-xs font-semibold tracking-widest uppercase text-indigo-400/60 select-none pointer-events-none ${className}`}
  >
    {children}
  </span>
);

// ─── Component ────────────────────────────────────────────────────────────────
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Engineering student with a strong foundation in AI, Machine Learning
          </p>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* Left – Education cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* B.E */}
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/40 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-900 via-pink-900 to-black rounded-xl flex items-center justify-center shadow-inner border border-red-700/50">
                  <PiGraduationCapFill className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">B.E – Electronics &amp; Communication</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  KLE Technological University
                </h4>
                <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jun 2021 – May 2024</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>BVB Campus Vidyanagar, Hubli</span>
                </div>
              </div>
            </div>

            {/* Diploma */}
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/40 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-900 via-pink-900 to-black rounded-xl flex items-center justify-center shadow-inner border border-red-700/50">
                  <PiGraduationCapFill className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">Diploma – Electronics &amp; Communication</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">
                  K.H. Kabbur Institute of Engineering, Dharwad
                </h4>
                <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jun 2018 – May 2021</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Dharwad, Karnataka</span>
                </div>
              </div>
            </div>

            {/* PUC */}
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/40 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-900 via-pink-900 to-black rounded-xl flex items-center justify-center shadow-inner border border-red-700/50">
                  <PiGraduationCapFill className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">PUC – Science</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  R.S.H PU Science College, Dharwad
                </h4>
                <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jun 2016 – May 2018</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Dharwad, Karnataka</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – Journey card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div className="h-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/30 dark:border-gray-700/40 hover:scale-105 hover:shadow-[0_0_25px_rgba(13,148,136,0.4)] transition-all duration-300 flex flex-col justify-start">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-xl flex items-center justify-center shadow-inner border border-purple-700/50">
                  <GiTrail className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
                  <p className="text-gray-600 dark:text-gray-400">A Brief Story</p>
                </div>
              </div>
              <div className="space-y-6">
                {/* <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-600 dark:text-gray-300 italic">
                  <p>Didn't get IIT. Reappeared for JEE — nothing.</p>
                  <p>Took diploma. Finished engineering.</p>
                  <p>Didn't whine. Didn't settle.</p>
                  <p>I chose ambition over approval.</p>
                </blockquote> */}

                <p className="text-gray-700 dark:text-gray-300">
                  I’m an AI Backend Engineer focused on building scalable systems that bring machine learning models into real world applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  My interest started with understanding the layers behind technology <br />
                  hardware, processors, and how machines execute ideas. That curiosity evolved into building software systems powered by data, cloud infrastructure, and artificial intelligence.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Today, I focus on AI backend engineering and full stack AI development designing scalable APIs, data pipelines and infrastructure to model integration.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  I enjoy working at the intersection of software engineering and AI, building systems where algorithms, infrastructure, and product thinking come together.
                </p>
                <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-600 dark:text-gray-300 italic">
                  <p>Necessity is the mother of Invention and Greatness.</p>
                </blockquote>
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">
                    <strong>Hobbies &amp; Interests</strong>
                  </h4>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm marker:text-white dark:marker:text-white">
                    <li>
                      <strong className="text-gray-700 dark:text-gray-300">Into: </strong>
                      <span className="text-gray-700 dark:text-gray-300">Muay Thai 🤛🏻 | Karate 🥋 | Cooking 🍽</span>
                    </li>
                    <li>
                      <strong className="text-gray-700 dark:text-gray-300">Love to watch: </strong>
                      <span className="text-gray-700 dark:text-gray-300">F1 🏎 | MotoGP 🏍 | UFC 🥊 | Sci-Fi 🎬</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Debugs to Lo-fi &amp; Eminem</li>
                    <li className="text-gray-700 dark:text-gray-300">Off-road rides when tempted</li>
                    <li className="text-gray-700 dark:text-gray-300">Hardcore Gamer</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Tech Stack card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-12 w-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/40 rounded-3xl p-10 shadow-xl"
        >
          {/* Card header */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-900 via-teal-900 to-black rounded-xl flex items-center justify-center shadow-inner border border-cyan-700/50">
              <VscTools className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h3>
              <p className="text-gray-600 dark:text-gray-400">Tools &amp; Technologies I Use</p>
            </div>
          </div>

          {/* ── Desktop scattered layout ─────────────────────────────────── */}
          <div className="relative h-[300px] w-full hidden lg:block overflow-hidden">

            {/* Category labels */}
            {/* <CategoryLabel className="left-0 top-0">Backend →</CategoryLabel>
            <CategoryLabel className="right-40 top-0">← Cloud &amp; DevOps</CategoryLabel>
            <CategoryLabel className="left-0 top-[260px]">Database →</CategoryLabel>
            <CategoryLabel className="left-0 bottom-10">Frontend →</CategoryLabel>
            <CategoryLabel className="right-0 bottom-10">← Multi Cloud</CategoryLabel> */}

            {/* Tech icon cards */}
            {techLayout.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ rotate: tech.rotate, scale: 1, y: 0 }}
                whileHover={{ rotate: 0, scale: 1.08, y: -8, zIndex: 50 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="absolute cursor-default"
                style={{
                  top: tech.top,
                  left: tech.left,
                }}
              >
                <div
                  className="
                    w-28 h-28
                    rounded-3xl
                    flex flex-col items-center justify-center
                    bg-gradient-to-br from-slate-900/90 to-slate-950/90
                    border border-indigo-500/20
                    backdrop-blur-xl
                    shadow-[0_0_25px_rgba(99,102,241,0.15)]
                    hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]
                    hover:border-indigo-400/40
                    transition-shadow transition-[border-color] duration-300
                  "
                >
                  <tech.icon className="w-8 h-8 mb-3 text-indigo-300" />
                  <span className="text-xs font-medium text-gray-200 text-center leading-tight px-1">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Mobile grid (lg:hidden) ───────────────────────────────────── */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="
                  flex flex-col items-center justify-center
                  rounded-2xl py-5
                  bg-gradient-to-br from-slate-900/90 to-slate-950/90
                  border border-indigo-500/20
                  shadow-[0_0_15px_rgba(99,102,241,0.1)]
                  cursor-default
                "
              >
                <tech.icon className="w-8 h-8 mb-2 text-indigo-300" />
                <span className="text-xs font-medium text-gray-200 text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href="/Moinaktar_Shaikh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center gap-2 rounded-full px-8 text-white font-semibold cursor-pointer transition-all duration-300"
            style={{
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-.02em",
              height: "36px",
              WebkitFontSmoothing: "antialiased",
              background: "#000000",
            }}
          >
            <span
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "-1px -1px -1.5px -1px",
                backgroundImage:
                  "linear-gradient(180deg, #fcc171, #c17c56 55%, #362821)",
              }}
            />

            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "#000000" }}
            />

            <span
              className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
              style={{
                top: "-6px",
                bottom: "20%",
                width: "90%",
                backgroundImage:
                  "radial-gradient(ellipse 40% 40% at 50% 10%, rgba(255,223,150,0.7) 10%, rgba(255,195,90,0.4) 50%, rgba(255,160,60,0.15) 80%, transparent 100%)",
                mixBlendMode: "screen",
                filter: "blur(1px)",
              }}
            />

            <Download className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Resume</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;