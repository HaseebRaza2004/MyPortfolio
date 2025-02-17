import { motion } from 'framer-motion';
import { services } from '../data/services';

const ServiceSection = () => {

    return (
        <section id="services" className="py-32 px-6 lg:px-20 relative bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-white mb-16 text-center"
                >
                    Specialized <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: service.delay, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative group h-full"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />

                            <div className="relative bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all h-full flex flex-col">
                                <div className="text-5xl mb-6 animate-float">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-300 flex-grow">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;