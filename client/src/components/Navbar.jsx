import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'ABOUT', href: '#about' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300 hidden md:block">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-white text-xl md:text-2xl font-bold tracking-tighter">SD</div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white flex items-center p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black/98 z-40 flex flex-col items-center justify-center space-y-10 md:hidden overflow-hidden"
                    >
                        <button
                            className="absolute top-6 right-6 text-white p-2"
                            onClick={toggleMenu}
                        >
                            <HiX size={32} />
                        </button>
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={toggleMenu}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-3xl font-bold tracking-[0.3em] text-white hover:text-gray-400 transition-colors uppercase"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
