import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronRight, FiFacebook, FiInstagram } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

    return (
        <section className="h-screen flex items-center px-6 lg:px-20 relative">
            <div className="grid lg:grid-cols-2 items-center gap-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        Transforming Ideas Into
                        <TypeAnimation
                            sequence={[
                                'Digital Experiences',
                                2000,
                                'Web Solutions',
                                2000,
                                'Scalable Products',
                                2000
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                        />
                    </h1>

                    <p className="text-xl text-gray-300 font-light">
                        Full-stack developer specializing in modern web and mobile applications with focus on performance and user experience.
                    </p>

                    <div className="flex space-x-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-white font-semibold flex items-center"
                        >
                            View Work <FiChevronRight className="ml-2" />
                        </motion.button>

                        <div className="flex space-x-4 items-center">
                            <FiGithub className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                            <FiLinkedin className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                            <FiMail className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                            <FiFacebook className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                            <FiInstagram className="text-2xl text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </motion.div>

                {/* 3D Model Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center"
                >
                    <video
                        className="h-full w-full object-cover rounded-2xl"
                        src="/1111394629-preview.mp4" // Replace with your actual video file name
                        autoPlay
                        loop
                        muted
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;