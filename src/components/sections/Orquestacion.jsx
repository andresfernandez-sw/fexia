import React from 'react';
import { initProceso } from '../../utils/BabylonLogic';
import BabylonScene from '../BabylonScene';
import { Network, Share2, ArrowRightLeft, RefreshCw } from 'lucide-react';

const Orquestacion = () => {
    const steps = [
        { icon: <Network />, title: 'Coordinación Multi-Agente', desc: 'Un orquestador central que delega y sintetiza tareas para resolver la alta complejidad.' },
        { icon: <Share2 />, title: 'Memoria Compartida', desc: 'Tejido conectivo de datos que permite a múltiples agentes compartir contextos sin duplicar esfuerzos.' },
        { icon: <ArrowRightLeft />, title: 'Handover Inteligente', desc: 'Flujos de trabajo donde la información fluye con precisión de un agente a otro.' },
        { icon: <RefreshCw />, title: 'Actualización Permanente', desc: 'Sistema diseñado para integrar constantemente nuevas capacidades, evitando la degradación.' }
    ];

    return (
        <section id="orquestacion" className="section container">
            <div className="section-grid align-start">
                <div className="proceso-copy">
                    <div className="status-indicator"><span className="dot"></span> EL ECOSISTEMA</div>
                    <h2 className="terminal-title">Orquestación <span className="highlight">Sistémica.</span></h2>
                    <p className="terminal-desc">La potencia de FExIA reside en la interconexión de especialistas digitales bajo un mando coordinado.</p>

                    <div className="steps-grid">
                        {steps.map((s, i) => (
                            <div key={i} className="step-card">
                                <div className="feature-icon">{s.icon}</div>
                                <div className="step-card-content">
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="proceso-visual sticky-visual">
                    <div className="section-visual-large">
                        <BabylonScene onSceneReady={initProceso} />
                    </div>
                    <p className="visual-caption">Visualización de flujo de datos en tiempo real entre sub-agentes.</p>
                </div>
            </div>
        </section>
    );
};

export default Orquestacion;
