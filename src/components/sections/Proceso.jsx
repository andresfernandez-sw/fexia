import React from 'react';
import { initProceso } from '../../utils/BabylonLogic';
import VisualSplit from '../VisualSplit';

const Proceso = () => {
    const steps = [
        { num: '01', title: 'Relevamiento', desc: 'Extraemos el ADN operativo de tu empresa en 10 dimensiones estructuradas.' },
        { num: '02', title: 'Vectorización RAG', desc: 'Construimos la memoria semántica compartida. La IA entiende tu empresa desde adentro.' },
        { num: '03', title: 'Despliegue de agentes', desc: 'Orquestamos los agentes especializados sobre el ecosistema técnico de FEXIA.' },
        { num: '04', title: 'Operación autónoma', desc: 'El ecosistema opera, aprende y evoluciona. Tu equipo recupera tiempo estratégico.' }
    ];

    return (
        <section id="proceso" className="section container">
            <div className="section-grid">
                <div className="proceso-copy">
                    <div className="status-indicator"><span className="dot"></span> CÓMO FUNCIONA</div>
                    <h2 className="terminal-title">Del relevamiento a la <span className="highlight">inteligencia autónoma.</span></h2>

                    <div className="steps-list" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} className="step-item">
                                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>{s.num}</span>
                                <h4 style={{ margin: '10px 0' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#888' }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="proceso-visual">
                    <VisualSplit height="500px" babylonInit={initProceso} />
                </div>
            </div>
        </section>
    );
};

export default Proceso;
