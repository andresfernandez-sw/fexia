import React from 'react';
import { motion } from 'framer-motion';
import { initTraditional, initFexia } from '../../utils/BabylonLogic';
import VisualSplit from '../VisualSplit';

const Problema = () => (
    <section id="problema" className="section">
        <div className="container">
            <div className="section-grid">
                <div className="problema-copy">
                    <div className="status-indicator">
                        <span className="dot"></span> EL PROBLEMA
                    </div>
                    <h2 className="terminal-title">La IA aislada <span className="highlight">ya no alcanza.</span></h2>
                    <p className="terminal-desc">Las herramientas desconectadas operan en silos, desconocen tus procesos internos y pierden vigencia rápidamente.
                        <strong>FEXIA</strong> despliega un ecosistema: agentes que se comunican, aprenden y evolucionan juntos.</p>
                </div>

                <div className="problema-visual-row" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="comparison-box">
                        <h4 style={{ marginBottom: '10px', fontSize: '12px', opacity: 0.6 }}>IA TRADICIONAL</h4>
                        <VisualSplit height="200px" babylonInit={initTraditional} />
                    </div>
                    <div className="comparison-box active">
                        <h4 style={{ marginBottom: '10px', fontSize: '12px', color: 'var(--primary)' }}>ECOSISTEMA FEXIA</h4>
                        <VisualSplit height="200px" babylonInit={initFexia} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Problema;
