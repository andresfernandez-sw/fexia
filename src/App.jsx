import React, { Suspense, useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import './App.css';

const Loader = () => (
    <div className="loader-container">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="loader-logo"
        >
            FLEXIA
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
        <div className="navbar-logo">FLEXIA</div>
        <div className="navbar-links">
            <a href="#soluciones">Soluciones</a>
            <a href="#tecnologia">Tecnología</a>
            <a href="#nosotros">Nosotros</a>
        </div>
        <button className="navbar-cta">Contactar <ChevronRight size={16} /></button>
        <div className="navbar-mobile-menu">
            <Menu />
        </div>
    </nav>
);

const Hero = ({ onSplineLoad }) => (
    <section className="hero">
        <div className="hero-content left-panel">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="ai-terminal"
            >
                <div className="status-indicator">
                    <span className="dot pulse"></span> SISTEMA ACTIVADO
                </div>

                <h1 className="terminal-title">
                    El sistema nervioso <br />
                    de tu empresa. <span className="highlight">Activado.</span>
                </h1>

                <p className="terminal-desc">
                    Una red de agentes de IA especializados que conocen tu empresa desde adentro.
                    <span className="sub-text">No una herramienta — una infraestructura cognitiva.</span>
                </p>

                <div className="terminal-buttons">
                    <button className="btn btn-primary glass-btn">Iniciar Handshake <ChevronRight size={18} /></button>
                    <button className="btn btn-outline terminal-btn-sub">Ver Nodos</button>
                </div>

                <div className="terminal-footer">
                    <div className="footer-line"></div>
                    <div className="footer-info">
                        <span>INFRAESTRUCTURA COGNITIVA v2.4</span>
                        <span>LATENCY: 12ms</span>
                    </div>
                </div>
            </motion.div>
        </div>



        <div className="hero-spline">
            <Suspense fallback={null}>
                <Spline
                    scene="https://prod.spline.design/JogrHLCxXLfOr0SG/scene.splinecode"
                    onLoad={onSplineLoad}
                    onMouseDown={(e) => {
                        console.log('Spline object clicked:', e.target.name);
                        // Aquí podremos añadir lógica para disparar modales o cambios de sección
                    }}
                />
            </Suspense>
        </div>
    </section>
);

const Features = () => (
    <section className="features">
        <div className="container">
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon"><Zap /></div>
                    <h3>Velocidad Extrema</h3>
                    <p>Optimizamos cada elemento para una carga instantánea y fluida.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><Shield /></div>
                    <h3>Seguridad Total</h3>
                    <p>Infraestructura diseñada para proteger tus activos digitales más críticos.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><Sparkles /></div>
                    <h3>Diseño Inmersivo</h3>
                    <p>Experiencias visuales que rompen la cuarta pared del navegador.</p>
                </div>
            </div>
        </div>
    </section>
);

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-main">
            <div className="noise-overlay"></div>
            <div className="gradient-bg"></div>
            <div className="glow" style={{ top: '20%', left: '30%' }}></div>
            <div className="glow" style={{ top: '60%', right: '10%', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)' }}></div>

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
                        <Hero onSplineLoad={(spline) => {
                            console.log('Spline Ready!', spline);
                            // Aquí podemos manipular objetos de la escena programáticamente
                            // Ejemplo: const obj = spline.findObjectByName('Lets create');
                        }} />
                        <Features />
                        <footer className="footer-simple">
                            <p>&copy; 2026 Flexia Web . Todos los derechos reservados.</p>
                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
