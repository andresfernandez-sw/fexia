import React from 'react';
import { motion } from 'framer-motion';
import { initTraditional, initFexia } from '../../utils/BabylonLogic';
import BabylonScene from '../BabylonScene';

const Metodologia = () => {
    const items = [
        { title: "Análisis de Requerimientos", desc: "Investigación profunda de la demanda específica y los objetivos estratégicos de la compañía." },
        { title: "Inmersión Sectorial", desc: "Estudio de cada área operativa para localizar y neutralizar los puntos de dolor que frenan el crecimiento." },
        { title: "Ingeniería de Procesos", desc: "Adaptación del flujo interno para integrar una arquitectura agéntica diseñada a medida." }
    ];

    return (
        <section id="metodologia" className="section container">
            <div className="section-grid">
                <div className="problema-copy">
                    <div className="status-indicator">
                        <span className="dot"></span> INTERVENCIÓN ESTRATÉGICA
                    </div>
                    <h2 className="terminal-title">Metodología de <span className="highlight">Intervención.</span></h2>
                    <p className="terminal-desc">FExIA no es un producto; es un modelo de transformación operativa basado en el rigor analítico.</p>

                    <div className="steps-list">
                        {items.map((it, idx) => (
                            <div key={idx} className="step-item">
                                <div className="step-dot" />
                                <div className="step-content">
                                    <h4>{it.title}</h4>
                                    <p>{it.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="problema-visual-row">
                    <div className="comparison-box">
                        <h4 className="label-top">RIGOR ANALÍTICO</h4>
                        <div className="section-visual-small">
                            <BabylonScene onSceneReady={initTraditional} />
                        </div>
                    </div>
                    <div className="comparison-box active">
                        <h4 className="label-top active">TRANSFORMACIÓN OPERATIVA</h4>
                        <div className="section-visual-small">
                            <BabylonScene onSceneReady={initFexia} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metodologia;
