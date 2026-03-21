import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    description: string;
    thumbnail?: string;
}

const BlogSection: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMediumPosts = async () => {
            try {
                // Try using a CORS-enabled proxy
                const feedUrl = 'https://medium.com/@moinaktarshaikh/feed';
                const proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(feedUrl);

                const response = await fetch(proxyUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();

                if (data.items && Array.isArray(data.items)) {
                    const blogPosts: BlogPost[] = data.items.slice(0, 3).map((item: any) => ({
                        title: item.title || '',
                        link: item.link || '',
                        pubDate: item.pubDate || item.published || new Date().toISOString(),
                        description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) || item.summary?.replace(/<[^>]*>/g, '').substring(0, 150) || '',
                        thumbnail: item.thumbnail || '',
                    }));

                    setPosts(blogPosts);
                } else {
                    throw new Error('No items found');
                }
            } catch (err) {
                console.error('Error fetching Medium posts:', err);
                setError('Unable to load posts');
            } finally {
                setLoading(false);
            }
        };

        fetchMediumPosts();
    }, []);

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            });
        } catch {
            return '';
        }
    };

    return (
        <section id="blog" className="py-20 relative overflow-hidden">
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
                        Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog Posts</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Insights on AI, engineering, and building impactful projects
                    </p>
                </motion.div>

                {/* Blog Cards Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="text-gray-600 dark:text-gray-400">Loading posts...</div>
                    </div>
                ) : error ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
                        <a
                            href="https://medium.com/@moinaktarshaikh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                        >
                            Read on Medium
                        </a>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {posts.map((post, index) => (
                            <motion.a
                                key={index}
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2 } }}
                                className="group bg-white/20 dark:bg-gray-800/20 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/40 flex flex-col h-full hover:shadow-[0_0_25px_rgba(13,148,136,0.4)]"
                            >
                                {/* Thumbnail */}
                                {post.thumbnail && (
                                    <div className="mb-4 overflow-hidden rounded-xl h-40 bg-gradient-to-br from-blue-500 to-purple-600">
                                        <motion.img
                                            src={post.thumbnail}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-xl flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                                    {post.description}
                                </p>

                                {/* Date and Link */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/20 dark:border-gray-700/30">
                                    <span className="text-xs text-gray-500 dark:text-gray-500">
                                        {formatDate(post.pubDate)}
                                    </span>
                                    <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}

                {/* CTA */}
                {!error && posts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <motion.a
                            href="https://medium.com/@moinaktarshaikh"
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
                            <BookOpen className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-200" />
                            <span className="relative z-10">View All Articles</span>
                            <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                        </motion.a>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
