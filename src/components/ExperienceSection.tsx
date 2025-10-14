import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experience = {
    title: "ML Intern",
    company: "IIT Dharwad",
    duration: "2nd Feb 2024 - 2 Sep 2024",
    location: "IIT Dharwad",
    highlights: [
      "Designed and implemented scalable ETL pipelines to process over 1 million multilingual audio records, ensuring data.",
      "Automated end-to-end data workflows using Python and Bash scripts, streamlining extraction, transformation, and loading from raw audio files into structured formats optimized for machine learning model training.",
      "Managed and troubleshot development environments across 10 Ubuntu Linux machines, ensuring consistent tooling, dependencies, and seamless team collaboration.",
      "Containerized data processing workflows using Docker, enabling reproducible deployments and following DevOps best practices for scalable data operations.",
    ]
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional journey and key contributions in AI and machine learning projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, ease: "easeOut" }} // smoother & snappier
            whileHover={{ scale: 1.03, rotateX: 1 }} // subtle tilt effect
            className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/40 transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Company Logo/Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="mb-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    {experience.company}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                    Recent Work
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Achievements & Responsibilities
              </h4>
              <div className="space-y-4">
                {experience.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Pytorch', 'TensorFlow', 'Jupyter', 'Google Colab'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;