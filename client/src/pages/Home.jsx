import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Activities from '../components/Activities';
import Contact from '../components/Contact';
import Beams from '../components/Beams';

const Home = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main className="relative min-h-screen w-full overflow-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={isMobile ? 6 : 12}
                    lightColor={isMobile ? "#aaaaaa" : "#ffffff"}
                    speed={2}
                    noiseIntensity={isMobile ? 1.0 : 1.75}
                    scale={0.2}
                    rotation={0}
                />
            </div>
            <div className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Activities />
                <Contact />
            </div>
        </main>
    );
};

export default Home;
