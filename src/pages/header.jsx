import { motion } from 'framer-motion';

const Header = () => {
    return (
        <nav className="fixed w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-black/30">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                   MHR DevPortfolio<span className="text-blue-400">.</span>
                </h1>
            </motion.div>

            <div className="hidden md:flex space-x-8">
                {['About', 'Skills', 'Services', 'Work', 'Contact'].map((item, i) => (
                    <motion.a
                        key={item}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2 }}
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-300 hover:text-cyan-400 transition-all flex items-center group"
                    >
                        <span className="mr-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all">↳</span>
                        {item}
                    </motion.a>
                ))}
            </div>
        </nav>
    );
};

export default Header;