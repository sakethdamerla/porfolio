import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: 'Enterprises', category: 'Web App', image: './image copy 2.png', link: 'https://sahithi-enterprises.vercel.app' },
    { id: 2, title: 'Car Bookings', category: 'Web App', image: './image copy.png', link: 'https://car-bookings.vercel.app' },
    { id: 3, title: 'Tech With Saketh', category: 'Promotional', image: '/image.png', link: 'https://techwithsaketh.vercel.app' },
];

const Portfolio = () => {
    return (
        <section id="projects" className="bg-transparent text-white py-8 md:py-12 px-4 md:px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-16 text-center tracking-tighter">PROJECTS</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden cursor-pointer block"
                        >
                            <div className="aspect-video bg-gray-800 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                            </div>
                            <div className="mt-4 flex justify-between items-end">
                                <div>
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-sm text-gray-400">{project.category}</p>
                                </div>
                                <span className="text-xs uppercase border border-white px-4 py-2 group-hover:bg-white group-hover:text-black transition-colors">
                                    View
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
