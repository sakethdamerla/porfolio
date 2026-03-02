import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-500 py-8 text-center text-xs tracking-widest uppercase">
            <div className="container mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} SAKETH DAMERLA. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="https://instagram.com/heyitsaketh.x" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                    <a href="https://www.linkedin.com/in/saisakethdamerla/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
