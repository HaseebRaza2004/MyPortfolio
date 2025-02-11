import { motion } from 'framer-motion';

const ContactSection = () => {

    return (
        <section id="contact" className="py-32 px-6 lg:px-20 relative">
            <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/5 rounded-3xl border border-white/10 p-12">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-white mb-12 text-center"
                >
                    Let's Collaborate
                </motion.h2>

                <form className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        ></textarea>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center"
                    >
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-12 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                            Send Message
                        </button>
                    </motion.div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;