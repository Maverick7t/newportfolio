import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Code2 } from 'lucide-react';

const DevpostSection: React.FC = () => {
    const hackathonProjects = [
        {
            title: "Devpost Profile",
            description: "Active on Devpost, always chasing the next win open to team up and build something bold. Have a look on my submission.",
            icon: Trophy,
            gradient: "from-blue-500 to-cyan-600",
            link: "https://devpost.com/aktar?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
        },
        {
            title: "Opuna Contribution",
            description: "Actively contributing to Optuna, an open-source framework for automated hyperparameter optimization that accelerates model performance tuning across PyTorch, TensorFlow, and Scikit-Learn.",
            icon: Code2,
            gradient: "from-purple-500 to-pink-600",
            link: "https://github.com/optuna/optuna"
        }
    ];

    return (
        <section id="devpost" className="py-20 relative overflow-hidden">
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
                        Hackathons & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Open Source</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Experimenting, building, and competing to create smarter solutions.
                    </p>
                </motion.div>

                <div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {hackathonProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.1, ease: "easeOut" }}
                                whileHover={{ scale: 1.03, rotateX: 1 }}
                                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform-gpu"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <project.icon className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                                {project.title}
                                            </h4>
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, rotate: 12 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="flex-shrink-0 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </motion.a>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevpostSection;
