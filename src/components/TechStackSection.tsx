"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";


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
  SiGooglecloud,
} from "react-icons/si";

import { VscMcp, VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import {
  SiLangchaincorporate,
  SiMlflow,
  SiPytorch,
  SiHelix,
} from "react-icons/si";

import { TbBrandElastic } from "react-icons/tb";

// ─── Skill groups ────────────────────────────────────────────────────────────

const skillGroups = [
  {
    tools: [
      { icon: SiPython, name: "Python" },
      { icon: SiFastapi, name: "FastAPI" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiFlask, name: "Flask" },
      { icon: SiDjango, name: "Django" },
      { icon: SiMysql, name: "MySQL" },
    ],

    capability:
      "Backend services and API driven applications with structured application logic, database design, authentication, asynchronous processing & secure data access.",

    reverse: false,
  },

  {
    tools: [
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiCplusplus, name: "C++" },
      { icon: SiGnubash, name: "Bash" },
    ],

    capability:
      "Complete application interfaces and supporting services, integrate frontend applications with APIs & work across application & system level code using TypeScript, Node.js, C++ & Bash.",

    reverse: true,
  },

  {
    tools: [
      { icon: SiPytorch, name: "PyTorch" },
      { icon: VscMcp, name: "MCP" },
      { icon: SiLangchaincorporate, name: "LangChain" },
      { icon: SiMlflow, name: "MLflow" },
      { icon: TbBrandElastic, name: "Elasticsearch" },
      { icon: SiHelix, name: "Strands SDK" },
    ],

    capability:
      "AI and agentic applications with model inference, agent orchestration, tool integration, retrieval workflows, model tracking & ML prediction pipelines.",

    reverse: false,
  },

  {
    tools: [
      { icon: FaAws, name: "AWS" },
      { icon: SiDocker, name: "Docker" },
      { icon: SiKubernetes, name: "Kubernetes" },
      { icon: SiGit, name: "Git" },
      { icon: VscAzure, name: "Azure" },
      { icon: SiGooglecloud, name: "GCP" },
    ],

    capability:
      "Deploy cloud based applications using containerized services, cloud infrastructure, orchestration, version controlled workflows & scalable deployment environments.",

    reverse: true,
  },
];

// ─── Tool Card ───────────────────────────────────────────────────────────────

const ToolCard: React.FC<{
  icon: React.ElementType;
  name: string;
  index: number;
}> = ({ icon: Icon, name, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.06,
        y: -4,
      }}
      className="
        w-24 h-24
        rounded-2xl
        flex flex-col
        items-center
        justify-center
        bg-gradient-to-br
        from-zinc-900/90
        to-black/90
        border border-white/10
        backdrop-blur-xl
        shadow-[0_0_20px_rgba(255,255,255,0.04)]
        hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
        hover:border-white/20
        transition-all duration-300
        cursor-default
      "
    >
      <Icon className="w-8 h-8 mb-2 text-zinc-200" />

      <span className="text-xs font-medium text-gray-200 text-center leading-tight px-1">
        {name}
      </span>
    </motion.div>
  );
};

// ─── Tech Stack Section ─────────────────────────────────────────────────────

const TechStackSection: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="py-20 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              &amp; Skills
            </span>
          </h2>
        </motion.div>

        {/* ── Main Tech Stack Card ── */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            w-full
            bg-white/20
            dark:bg-gray-800/20
            backdrop-blur-md
            border border-white/30
            dark:border-gray-700/40
            rounded-3xl
            p-6 sm:p-8 lg:p-10
            shadow-xl
          "
        >

          {/* ── Card Header ── */}

          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-900 via-teal-900 to-black rounded-xl flex items-center justify-center shadow-inner border border-cyan-700/50">
              <FaTools className="w-6 h-6 text-white" />
            </div>

            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Tech Stack
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Tools &amp; Technologies I Use
              </p>
            </div>
          </div>

          {/* ── Four Zig-Zag Skill Cards ── */}

          <div className="space-y-6">

            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: groupIndex * 0.1,
                }}
                className="
                  rounded-3xl
                  bg-black/20
                  dark:bg-black/20
                  border border-white/10
                  backdrop-blur-md
                  p-5 sm:p-6
                  hover:border-white/20
                  transition-all duration-300
                "
              >

                <div
                  className={`
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    gap-6
                    ${group.reverse ? "lg:flex-row-reverse" : ""}
                  `}
                >

                  {/* ── Tools ── */}

                  <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-3 gap-3 justify-items-center">

                      {group.tools.map((tool, toolIndex) => (
                        <ToolCard
                          key={tool.name}
                          icon={tool.icon}
                          name={tool.name}
                          index={toolIndex}
                        />
                      ))}

                    </div>
                  </div>

                  {/* ── Center Divider ── */}

                  <div className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                  {/* ── Capability ── */}

                  <div className="w-full lg:w-1/2 flex items-center">

                    <div className="px-2 sm:px-4 lg:px-6">

                      <div className="flex items-start gap-3 mb-4">

                        {/* <div className="flex-shrink-0 mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" /> */}

                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                          What I Can Build
                        </h4>

                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        {group.capability}
                      </p>

                    </div>

                  </div>

                </div>

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
            download="Moinaktar_Shaikh.pdf"
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

            <FaDownload className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Resume</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStackSection;