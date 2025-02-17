import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const SkillSection = () => {

    return (
        <section id="skills" className="py-32 px-6 lg:px-20 relative" >
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-white mb-20 text-center"
                >
                    My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`} />
                            <div className="relative bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10 p-6 flex flex-col items-center hover:bg-white/10 transition-colors">
                                <skill.icon className={`text-5xl mb-4 text-white group-hover:scale-110 transition-transform`} />
                                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                                <p className="text-sm text-gray-400 mt-2">Expert</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default SkillSection;