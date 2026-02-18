import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaYoutube, FaEdit, FaCamera, FaFilm } from 'react-icons/fa';

const activities = [
    { name: 'Video Editing', icon: <FaEdit size={40} className="text-purple-400" /> },
    { name: 'YouTube Creation', icon: <FaYoutube size={40} className="text-red-500" /> },
    { name: 'Cinematography', icon: <FaCamera size={40} className="text-blue-400" /> },
    { name: 'Post-Production', icon: <FaFilm size={40} className="text-green-400" /> },
];

const Activities = () => {
    return (
        <section id="activities" className="bg-transparent text-white py-8 md:py-12 px-4 md:px-6 justify-center items-center">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-16 text-center tracking-tighter uppercase">Activities</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, color: '#fff' }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-zinc-800 transition-colors border border-zinc-800"
                        >
                            {activity.icon}
                            <span className="font-medium text-gray-300 text-center">{activity.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;
