"use client";

import React from 'react';
import { motion } from "framer-motion";
import { GiTrail } from 'react-icons/gi';
import { PiGraduationCapFill } from 'react-icons/pi';
import { Calendar, MapPin } from 'lucide-react';

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
          {/* <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Engineering student with a strong foundation in AI, Machine Learning
          </p> */}
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

                <p className="text-gray-700 dark:text-gray-300">
                  I’m an AI Backend Engineer focused on building scalable systems that bring machine learning models into real world applications.
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  My interest started with understanding the layers behind technology <br />
                  hardware, processors and how machines execute ideas. That curiosity evolved into building software systems powered by data, cloud infrastructure and artificial intelligence.
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  Today, I focus on AI backend engineering and full stack AI development designing scalable APIs, data pipelines and infrastructure to model integration.
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  I enjoy working at the intersection of software engineering and AI, building systems where algorithms, infrastructure and product thinking come together.
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

        

      </div>
    </section>
  );
};

export default AboutSection;