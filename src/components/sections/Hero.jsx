import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import VisualSplit from '../VisualSplit';

const Hero = () => (
    <section id="hero" className="hero">
        <VisualSplit
            isFullPage={true}
            splineScene="https://prod.spline.design/JogrHLCxXLfOr0SG/scene.splinecode"
        >
            <div className="hero-content-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text-pane"
                >
                    <span className="hero-eyebrow">FExIA: Inteligencia Interconectada. Gobernanza orquestada.</span>
                    <h1 className="hero-title">
                        El Manifiesto <br />
                        <em style={{ fontSize: '0.8em' }}>Arquitectura de razonamiento</em>
                    </h1>
                    <p className="hero-body">
                        Diseñamos la arquitectura de razonamiento que su organización necesita para operar a una escala superior.
                        Sustituimos los procesos aislados por un ecosistema vivo, capaz de evolucionar y resolver de forma autónoma.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">Iniciar Transformación <ChevronRight size={18} /></button>
                        <button className="btn btn-outline">Explorar Ecosistema <ArrowRight size={18} /></button>
                    </div>
                </motion.div>
            </div>
        </VisualSplit>
    </section>
);

export default Hero;
