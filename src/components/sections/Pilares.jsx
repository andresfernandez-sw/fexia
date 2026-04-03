import React from 'react';
import { Shield, Zap, Sparkles } from 'lucide-react';
import { initPilar } from '../../utils/BabylonLogic';
import VisualSplit from '../VisualSplit';

const Pilares = () => {
    const pillars = [
        {
            id: 'agents',
            name: 'Pilar 1',
            title: 'Ecosistema agéntico',
            desc: 'Agentes orquestados, colaborativos y altamente especializados que superan las limitaciones de los chatbots aislados.',
            icon: <Zap />,
            init: (engine, canvas) => initPilar(engine, canvas, 'agents')
        },
        {
            id: 'shield',
            name: 'Pilar 2',
            title: 'Seguridad por diseño',
            desc: 'SDK modular inquebrantable con gobernanza de datos y compliance absoluto desde el día cero.',
            icon: <Shield />,
            init: (engine, canvas) => initPilar(engine, canvas, 'shield')
        },
        {
            id: 'data',
            name: 'Pilar 3',
            title: 'Contexto insuperable',
            desc: 'Arquitectura de conocimiento construida sobre 10 pilares que capturan el ADN exacto de tu empresa.',
            icon: <Sparkles />,
            init: (engine, canvas) => initPilar(engine, canvas, 'data')
        },
    ];

    return (
        <section id="pilares" className="section container">
            <div className="section-header" style={{ marginBottom: '4rem' }}>
                <div className="status-indicator"><span className="dot"></span> LA SOLUCIÓN</div>
                <h2 className="terminal-title">No es una herramienta.<br /><span className="highlight">Es una infraestructura.</span></h2>
            </div>

            <div className="pilares-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {pillars.map((p, idx) => (
                    <div key={idx} className="feature-card">
                        <div className="pilar-visual-container" style={{ height: '250px', marginBottom: '2rem', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <VisualSplit height="250px" babylonInit={p.init} />
                        </div>
                        <div className="feature-icon">{p.icon}</div>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pilares;
