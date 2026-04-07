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
            <div className="section-grid" style={{ alignItems: 'start' }}>
                <div className="proceso-copy">
                    <div className="status-indicator"><span className="dot"></span> EL ECOSISTEMA</div>
                    <h2 className="terminal-title">Orquestación <span className="highlight">Sistémica.</span></h2>
                    <p className="terminal-desc">La potencia de FExIA reside en la interconexión de especialistas digitales bajo un mando coordinado.</p>

                    <div className="steps-list" style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} className="step-item" style={{ display: 'flex', gap: '1rem' }}>
                                <div className="feature-icon" style={{ width: '50px', height: '50px', flexShrink: 0, background: 'rgba(255,255,255,0.03)' }}>{s.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.35rem', margin: '0 0 10px 0' }}>{s.title}</h4>
                                    <p style={{ fontSize: '1.05rem', color: '#888', lineHeight: '1.6' }}>{s.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="proceso-visual" style={{ position: 'sticky', top: '150px' }}>
                    <div className="section-visual" style={{ height: '500px' }}>
                        <BabylonScene onSceneReady={initProceso} />
                    </div>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#555', fontStyle: 'italic', textAlign: 'center' }}>Visualización de flujo de datos en tiempo real entre sub-agentes.</p>
                </div>
            </div>
        </section>
    );
};

export default Orquestacion;
