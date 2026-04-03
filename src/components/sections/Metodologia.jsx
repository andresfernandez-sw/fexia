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

                    <div className="steps-list" style={{ marginTop: '3rem', display: 'grid', gap: '2rem' }}>
                        {items.map((it, idx) => (
                            <div key={idx} className="step-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                                <div>
                                    <h4 style={{ fontSize: '1.2rem' }}>{it.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '5px' }}>{it.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="problema-visual-row" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="comparison-box">
                        <h4 style={{ marginBottom: '10px', fontSize: '10px', opacity: 0.6 }}>RIGOR ANALÍTICO</h4>
                        <div className="section-visual" style={{ height: '250px' }}>
                            <BabylonScene onSceneReady={initTraditional} />
                        </div>
                    </div>
                    <div className="comparison-box active">
                        <h4 style={{ marginBottom: '10px', fontSize: '10px', color: 'var(--primary)' }}>TRANSFORMACIÓN OPERATIVA</h4>
                        <div className="section-visual" style={{ height: '250px' }}>
                            <BabylonScene onSceneReady={initFexia} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metodologia;
