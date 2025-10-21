import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github as LucideGithub, Code2, Bot, Sparkles } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "AWS AI Agent Global Hackathon 2025",
      description: "Raven AI, an agentic AI assistant that helps users make informed career decisions by aligning job insights with their goals.",
      highlights: [
        "Built Using AWS Lambda, DynamoDB, Bedrock, and the Gmail API connected through a serverless pipeline that automates email parsing and AI analysis.",
        "Fully serverless and automated architecture that’s secure, fast, and actually usable for real job alerts.",
      ],
      technologies: [" Python", "React", "Fast API", "Lambda", "DynamoDB", "Bedrock"],
      icon: Bot,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-600/10",
      link: "https://devpost.com/software/raven-ai-sjm47o?ref_content=user-portfolio&ref_feature=in_progress"
    },
    {
      id: 2,
      name: "Google AI Accelerate Hackathon 2025",
      description: "DevInsight, AI powered RAG based system that turn raw data into Insight.",
      highlights: [
        "I used a Retrieval-Augmented Generation (RAG) pipeline powered by LangChain, Elasticsearch, and Vertex AI to analyze GitHub data.",
        "Implemented semantic search and AI summarization for real-time Q&A",
      ],
      technologies: ["Python", "LangChain", "Flask", "BigQuery", "Elasticsearch", "React"],
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      link: "https://devpost.com/software/devinsight-j2qnd9"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background overlay removed - using global background from App.tsx */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge technologies, showcasing expertise in AI, automation, and full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, ease: "easeOut" }} // smoother & snappier
              whileHover={{ scale: 1.03, rotateX: 1 }} // subtle tilt effect
              className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/40 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Icon */}
              <div className="absolute -top-6 left-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 pt-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full group-hover/item:scale-125 transition-transform duration-200`} />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 bg-gradient-to-r ${project.bgGradient} border border-current rounded-full text-sm font-medium cursor-default`}
                        style={{
                          background: `linear-gradient(to right, ${project.gradient.includes('emerald') ? 'rgb(16 185 129 / 0.1)' : 'rgb(168 85 247 / 0.1)'}, ${project.gradient.includes('emerald') ? 'rgb(13 148 136 / 0.1)' : 'rgb(236 72 153 / 0.1)'})`,
                          color: project.gradient.includes('emerald') ? 'rgb(5 150 105)' : 'rgb(147 51 234)'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corrected View Details Button */}
                <div className="flex space-x-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      <Code2 className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                  </a>
                </div>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${project.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Maverick7t"
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
            <LucideGithub className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-200" />
            <span className="relative z-10">More on GitHub</span>
            <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
