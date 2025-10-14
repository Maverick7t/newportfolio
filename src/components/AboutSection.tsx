"use client";

import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, User, Code2 } from 'lucide-react';

import {
  SiPython,
  SiMysql,
  SiApacheairflow,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiTerraform,
  SiNodedotjs,
  SiGnubash,
} from 'react-icons/si';

const techIcons = [
  { icon: SiPython, name: 'Python' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiApacheairflow, name: 'Apache Airflow' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiKubernetes, name: 'Kubernetes' },
  { icon: SiGit, name: 'Git' },
  { icon: SiTerraform, name: 'Terraform' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiGnubash, name: 'Bash' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background overlay removed - using global background from App.tsx */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Engineering student with a strong foundation in AI, Machine Learning
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Education Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Bachelor */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">B.E - Electronics & Communication</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    KLE Technological University
                  </h4>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jun 2021 - May 2024</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>BVB campus Vidyanagr, Hubli</span>
                </div>
              </div>
            </div>

            {/* Diploma */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">Diploma - Electronics & Communication</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">
                    K.H.Kabbur Institute of Engineering, Dharwad
                  </h4>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jun 2018 - May 2021</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Dharwad, Karnataka</span>
                </div>
              </div>
            </div>

            {/* PUC */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">PUC - Science</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    R.S.H PU Science College, Dharwad
                  </h4>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jun 2016 - May 2018</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Dharwad, Karnataka</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - My Journey Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/20 dark:border-gray-700/30 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(13,148,136,0.4)] transition-all duration-300 flex flex-col justify-start">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
                  <p className="text-gray-600 dark:text-gray-400">A Brief Story</p>
                </div>
              </div>
              <div className="space-y-6">
                <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-600 dark:text-gray-300 italic">
                  <p>Didn't get IIT. Reappeared JEE nothing.</p>
                  <p>Took diploma. Finished engineering.</p>
                  <p>Didn’t whine. Didn’t settle.</p>
                  <p>I chose ambition over approval.</p>
                </blockquote>
                <p className="text-gray-700 dark:text-gray-300">
                  In 2022, JARVIS stopped being fiction.<br />
                  AI became real and I knew: that’s <em>my</em> domain.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  No top-tier degree. No golden resume.<br />
                  Just obsession and grit.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  You don’t need another safe hire.<br />
                  You need someone who refuses to be<strong> AVERAGE</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Let’s build something worth bleeding for.
                </p>
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">
                    <strong>Hobbies & Interest</strong>
                  </h4>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm marker:text-white dark:marker:text-white">
                    <li><strong className="text-gray-700 dark:text-gray-300">Into :</strong> <span className="text-gray-700 dark:text-gray-300">Muay Thai 🤛🏻 | Karate 🥋 | Cooking 🍽</span></li>
                    <li><strong className="text-gray-700 dark:text-gray-300">Love to watch :</strong> <span className="text-gray-700 dark:text-gray-300">F1 🏎 | MotoGP 🏍 | UFC 🥊 | Sci-Fi 🎬</span></li>
                    <li className="text-gray-700 dark:text-gray-300">Debugs to Lo-fi &amp; Eminem</li>
                    <li className="text-gray-700 dark:text-gray-300">Off Road Ride when tempted</li>
                    <li className="text-gray-700 dark:text-gray-300">Hardcore Gamer</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Horizontal Tech Stack Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(13,148,136,0.4)"
          }}
          className="mt-16 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-3xl p-10 shadow-xl transform will-change-transform hover:scale-105"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tech Stack</h3>
              <p className="text-gray-600 dark:text-gray-400">Tools & Technologies I Use</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 0 25px rgba(99,102,241,0.9)",
                    "0 0 0 rgba(0,0,0,0)"
                  ]
                }}
                transition={{
                  delay: index * 1.5,
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: (techIcons.length - 1) * 1.5,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 flex flex-col items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white"
                title={tech.name}
              >
                <tech.icon className="w-8 h-8 mb-1" />
                <span className="text-xs text-center mt-1">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
