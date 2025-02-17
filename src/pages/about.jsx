import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const AboutMe = () => {

    const handleDownload = () => {
        // 1. Create a link element dynamically
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Path to your PDF in the public directory
        link.download = 'haseeb_raza_resume.pdf'; // Filename for the downloaded file
        link.style.display = 'none'; // Hide the link
        document.body.appendChild(link); // Add to the DOM
        link.click(); // Simulate click
        document.body.removeChild(link); // Remove the link
    };

    return (
        <section id="about" className="pb-32 px-6 lg:px-20 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-white mb-12 text-center"
                >
                    About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                            <img
                                src="/images/WhatsApp Image 2025-01-30 at 12.34.05 PM.jpeg" // Replace with your profile picture
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm" /> */}
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Hi, I'm Muhammad Haseeb Raza
                            <TypeAnimation
                                sequence={[
                                    'Web App Developer',
                                    2000,
                                    'Mobile App Developer',
                                    2000,
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                            />
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            I'm a passionate full-stack developer  with expertise in building modern, responsive, and user-friendly web and mobile applications.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Proficient in <span className="text-cyan-400">React</span>, <span className="text-blue-400">Next.js</span>, and <span className="text-green-400">Node.js</span> for web development, and React Native for mobile. I enjoy creating efficient and user-friendly solutions.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of tea.
                        </p>
                        <button
                            onClick={handleDownload}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform cursor-pointer">
                            Download Resume
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;