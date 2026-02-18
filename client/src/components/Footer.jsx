import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-500 py-8 text-center text-xs tracking-widest uppercase">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Harun. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
