import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="bg-transparent text-white py-8 md:py-12 px-4 md:px-6 flex items-center">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-xl md:text-6xl font-bold mb-4 md:mb-8 tracking-tighter">ABOUT ME</h2>
                    <div className="text-gray-300 space-y-4 md:space-y-6 text-xs md:text-lg leading-relaxed">
                       <p>
    I am a passionate <span className="text-white font-semibold">Computer Science Student</span> and <span className="text-white font-semibold">Tech Creator</span> based in Hyderabad.
    I focus on building practical websites and digital solutions that are clean, efficient, and user-friendly.
</p>
<p>
    With a strong interest in web development, I enjoy turning ideas into real-world projects through consistent learning and hands-on experience.
    My journey is driven by discipline, curiosity, and a commitment to improving every single day.
</p>
<p>
    Beyond academics, I run a tech-focused YouTube channel where I share tips, tools, and updates to help others stay ahead in the ever-evolving tech world.
    When I'm not coding, I’m exploring new technologies and finding better ways to solve problems.
</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
