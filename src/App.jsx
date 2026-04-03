import React, { Suspense, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Menu } from 'lucide-react';
import './App.css';

// Sections
import Hero from './components/sections/Hero';
import Metodologia from './components/sections/Metodologia';
import AgenteCore from './components/sections/AgenteCore';
import Orquestacion from './components/sections/Orquestacion';
import EscudoGobernanza from './components/sections/EscudoGobernanza';
import ConsultoriaCierre from './components/sections/ConsultoriaCierre';

const Loader = () => (
    <div className="loader-container">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="loader-logo"
        >
            FExIA
        </motion.div>
        <div className="loader-progress-bar">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="loader-progress-fill"
            />
        </div>
    </div>
);

const Navbar = () => (
    <nav className="navbar">
        <a href="#hero" className="navbar-logo" style={{ textDecoration: 'none', color: 'inherit' }}>FExIA</a>
        <div className="navbar-links">
            <a href="#metodologia">Metodología</a>
            <a href="#agente-core">Agente Core</a>
            <a href="#orquestacion">Orquestación</a>
            <a href="#gobernanza">Gobernanza</a>
        </div>
        <button className="navbar-cta">Contactar <ChevronRight size={16} /></button>
        <div className="navbar-mobile-menu">
            <Menu />
        </div>
    </nav>
);

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-main">
            <div className="noise-overlay"></div>
            <div className="gradient-bg"></div>
            <div className="glow" style={{ top: '20%', left: '30%' }}></div>

            <AnimatePresence>
                {loading ? (
                    <motion.div key="loader" exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                        <Loader />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Navbar />
                        <Hero />
                        <Metodologia />
                        <AgenteCore />
                        <Orquestacion />
                        <EscudoGobernanza />
                        <ConsultoriaCierre />

                        <footer className="footer-simple" style={{ textAlign: 'center', marginTop: '4rem' }}>
                            <p>&copy; 2026 FExIA — Arquitectura y Orquestación Sistémica. Todos los derechos reservados.</p>
                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
