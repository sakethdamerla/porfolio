import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);
    const calendarScrollRef = useRef(null);

    useEffect(() => {
        const scrollToRight = () => {
            if (calendarScrollRef.current) {
                // Disable smooth scroll for initial jump
                calendarScrollRef.current.style.scrollBehavior = 'auto';
                calendarScrollRef.current.scrollLeft = calendarScrollRef.current.scrollWidth;
                // Re-enable smooth scroll after a tiny delay
                setTimeout(() => {
                    if (calendarScrollRef.current) {
                        calendarScrollRef.current.style.scrollBehavior = 'smooth';
                    }
                }, 100);
            }
        };

        // MutationObserver to watch for when the SVG actually enters the DOM
        const observer = new MutationObserver(() => {
            scrollToRight();
        });

        if (calendarScrollRef.current) {
            observer.observe(calendarScrollRef.current, { childList: true, subtree: true });
        }

        // Multiple timed backups for different load speeds
        const timer1 = setTimeout(scrollToRight, 500);
        const timer2 = setTimeout(scrollToRight, 1000);
        const timer3 = setTimeout(scrollToRight, 2000);

        scrollToRight();

        return () => {
            observer.disconnect();
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    const handleEmailClick = (e) => {
        e.preventDefault();
        const email = "sakethdamerla@gmail.com";
        const subject = "Collaboration Opportunity";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

        // Try to open mail client
        window.location.href = mailtoLink;

        // Also copy to clipboard as fallback/convenience
        navigator.clipboard.writeText(email).then(() => {
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000);
        });
    };

    return (
        <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center bg-transparent text-white relative overflow-hidden pt-0 md:pt-20">
            <div className="text-center z-10 flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm tracking-widest mb-4 text-gray-400"
                >
                    I AM
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-4xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-4 md:mb-4 text-center px-4"
                >
                    SAKETH DAMERLA
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-[10px] sm:text-sm md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-gray-400 uppercase mb-6 md:mb-8 text-center"
                >
                    Software Developer & Tech Creator
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-8 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 backdrop-blur-sm w-full max-w-[340px] md:max-w-none overflow-hidden"
                >
                    <div
                        ref={calendarScrollRef}
                        className="overflow-x-auto flex justify-start no-scrollbar"
                    >
                        <GitHubCalendar
                            username="sakethdamerla"
                            colorScheme="dark"
                            blockSize={12}
                            blockMargin={4}
                            fontSize={12}
                        />
                    </div>
                </motion.div>

                <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-3 bg-white text-black font-bold tracking-widest text-sm rounded-full hover:bg-gray-200 transition-colors uppercase"
                    >
                        Let's Collaborate
                    </motion.button>

                    <motion.a
                        href="/resume.pdf"
                        download="Saketh_Damerla_Resume.pdf"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="px-8 py-3 border border-white/20 text-white font-bold tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase flex items-center gap-2"
                    >
                        Download Resume
                    </motion.a>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-full max-w-md relative"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <IoClose size={24} />
                            </button>

                            <h3 className="text-2xl font-bold mb-6 text-center">Let's Work Together</h3>

                            <div className="space-y-4">
                                <button
                                    onClick={handleEmailClick}
                                    className="flex items-center justify-center gap-3 w-full p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors group"
                                >
                                    <FaEnvelope className="text-xl text-gray-400 group-hover:text-white" />
                                    <span>{emailCopied ? 'Email Copied!' : 'Send an Email'}</span>
                                </button>

                                <a
                                    href="https://wa.me/+918328251293"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors group"
                                >
                                    <FaWhatsapp className="text-xl text-green-500" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Social Icons */}
            <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 flex flex-row md:flex-col gap-6 z-20">
                <a
                    href="https://github.com/sakethdamerla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xl md:text-2xl"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/saisakethdamerla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xl md:text-2xl"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://instagram.com/heyitsaketh.x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xl md:text-2xl"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.youtube.com/@TechwithSaketh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xl md:text-2xl"
                    aria-label="YouTube"
                >
                    <FaYoutube />
                </a>
            </div>

            {/* Decorative vertical lines or elements can be added here */}
            <div className="absolute right-10 bottom-10 text-xs text-gray-600 rotate-90 origin-right tracking-widest hidden md:block">
                SCROLL
            </div>
        </section>
    );
};

export default Hero;
