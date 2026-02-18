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
                    <h2 className="text-3xl md:text-6xl font-bold mb-8 tracking-tighter">ABOUT ME</h2>
                    <div className="text-gray-300 space-y-6 text-sm md:text-lg leading-relaxed">
                        <p>
                            I am a passionate <span className="text-white font-semibold">Software Developer</span> and <span className="text-white font-semibold">Tech Creator</span> based in Hyderabad.
                            I specialize in building high-quality websites and applications that are not only functional but also visually stunning.
                        </p>
                        <p>
                            With a strong foundation in modern web technologies, I love transforming ideas into reality through code.
                            My journey is driven by a curiosity to learn and a desire to create impactful digital experiences.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring the latest tech trends or sharing my knowledge with the community.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
