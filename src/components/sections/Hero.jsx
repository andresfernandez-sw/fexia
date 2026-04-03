import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import VisualSplit from '../VisualSplit';
import { initHero } from '../../utils/BabylonLogic';

const Hero = ({ onSplineLoad }) => (
    <section className="hero">
        <VisualSplit
            isFullPage={true}
            babylonInit={initHero}
            splineScene="https://prod.spline.design/JogrHLCxXLfOr0SG/scene.splinecode"
        />

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
    </section>
);

export default Hero;
