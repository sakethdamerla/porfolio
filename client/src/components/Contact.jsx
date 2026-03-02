import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    // --- GOOGLE FORM CONFIGURATION ---
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfGalyDC44roWgeGR1gon1DY5D2JRdmR4L_7Y0i976BhdgppA/formResponse";

    // Derived from your screenshot, assuming order: Name, Email, Message
    const ENTRY_NAME = "entry.830194960";
    const ENTRY_EMAIL = "entry.633077006";
    const ENTRY_MESSAGE = "entry.1953141332";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const formBody = new FormData();
        formBody.append(ENTRY_NAME, formData.name);
        formBody.append(ENTRY_EMAIL, formData.email);
        formBody.append(ENTRY_MESSAGE, formData.message);

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors', // Google Forms doesn't support CORS for direct browser submission
                body: formBody
            });

            setStatus('Message sent!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);

        } catch (error) {
            console.error('Error:', error);
            setStatus('Error sending message. Please try again.');
        }
    };

    return (
        <section id="contact" className="bg-transparent text-white py-8 md:py-12 px-4 md:px-6 flex items-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div>
                    <h2 className="text-xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tighter uppercase font-outline-2">GET IN TOUCH</h2>
                    <p className="text-gray-400 mb-6 md:mb-8 max-w-md text-xs md:text-base">
                        Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
                    </p>

                    <div className="space-y-4 text-[10px] md:text-base text-gray-300">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-gray-500" />
                            <p>sakethdamerla@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-gray-500" />
                            <p>+91 8328251293</p>
                        </div>
                    </div>
                </div>

                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6 bg-gray-900/50 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl"
                >
                    {GOOGLE_FORM_ACTION_URL === "YOUR_GOOGLE_FORM_ACTION_URL" && (
                        <div className="p-4 bg-yellow-500/20 text-yellow-200 text-xs rounded border border-yellow-500/50 mb-4">
                            Setup Required: Create a Google Form and update the IDs in Contact.jsx
                        </div>
                    )}
                    <div>
                        <label htmlFor="name" className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'Sending...'}
                        className="bg-white text-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status || 'Send Message'}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
