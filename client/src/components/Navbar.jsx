import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-white text-2xl font-bold">SD</div>
                <div className="hidden md:flex space-x-8 text-white">
                    <a href="#home" className="hover:text-gray-300 transition-colors">HOME</a>
                    <a href="#about" className="hover:text-gray-300 transition-colors">ABOUT</a>
                    <a href="#skills" className="hover:text-gray-300 transition-colors">SKILLS</a>
                    <a href="#projects" className="hover:text-gray-300 transition-colors">PROJECTS</a>
                    <a href="#contact" className="hover:text-gray-300 transition-colors">CONTACT</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
