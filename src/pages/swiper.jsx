import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { TfiWorld } from "react-icons/tfi";
import { projects } from '../data/project';

const ProjectsSection = () => {
    return (
        <section id="work" className="py-32 px-6 lg:px-20 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-white mb-20 text-center"
                >
                    Featured Projects
                </motion.h2>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        1280: {
                            slidesPerView: 2,
                            spaceBetween: 150,
                        },
                    }}
                >
                    {projects.map((project, i) => (
                        <SwiperSlide key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                                className="min-w-[90vw] md:min-w-[50vw] snap-center px-4"
                            >
                                <div className="relative h-96 bg-gray-800 rounded-3xl overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 group-hover:bg-black/50 transition-all duration-300"></div>
                                    <div className="absolute bottom-0 left-0 p-8 z-20">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-white mb-4">{project.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map(tech => (
                                                <span key={tech} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-gray-300 text-xs md:text-sm lg:text-base xl:text-base">{project.description}</p>
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white rounded-full p-4">
                                            <TfiWorld className="h-8 w-8 text-gray-800" />
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProjectsSection;