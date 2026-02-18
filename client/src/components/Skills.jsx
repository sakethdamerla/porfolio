import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={40} className="text-cyan-300" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: 'Express', icon: <SiExpress size={40} className="text-white" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-white" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-transparent text-white py-8 md:py-12 px-4 md:px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-16 text-center tracking-tighter">SKILLS</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, color: '#fff' }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-zinc-800 transition-colors border border-zinc-800"
                        >
                            {skill.icon}
                            <span className="font-medium text-gray-300">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
