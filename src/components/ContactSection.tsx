import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MdOutlineMarkEmailUnread,
      label: 'Email',
      value: 'moinaktarshaikh@gmail.com',
      href: 'mailto:moinaktarshaikh@gmail.com',
      gradient: 'from-gray-300 via-gray-600 to-gray-800',
      description: 'Drop me a line anytime'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Bengaluru, karnataka',
      gradient: 'from-gray-300 via-gray-600 to-gray-800',
      description: 'BTM Layout. Madiwala'
    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/moinaktar-shaikh-7b3a33207/',
      gradient: 'from-gray-300 via-gray-600 to-gray-800',
      description: 'Professional network'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/manbrogj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitted(false), 5000);
  };


  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background overlay removed - using global background from App.tsx */}

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 left-10 w-12 h-12 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Open to exciting projects and new opportunities let’s collaborate and explore how we can create impact together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >


            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner border border-indigo-700/50`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {item.value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4 p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-gray-700/40 shadow-lg">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-inner border border-indigo-700/50`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {item.value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              <div className="text-center p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-2xl rounded-xl border border-white/30 dark:border-gray-700/40">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24h</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
              </div>
              <div className="text-center p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-2xl rounded-xl border border-white/30 dark:border-gray-700/40">
                <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Remote</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Work Ready</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            whileHover={{ scale: 1.04 }}
            className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/30 dark:border-gray-700/40 transition-transform duration-300 ease-in-out transform-gpu"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-300 via-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-inner border border-gray-400/50">
                <FiMessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send Message
              </h3>
            </div>

            {/* Conditional Message */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full flex items-center justify-center gap-2 rounded-full px-8 text-white font-semibold cursor-pointer transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: '-.02em',
                    height: '48px',
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
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full relative z-10"
                      />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <motion.div
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send className="w-5 h-5 relative z-10" />
                      </motion.div>
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
