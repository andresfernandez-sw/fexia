import React from 'react';
import { Brain, Database, Shield, Zap } from 'lucide-react';
import { initPilar } from '../../utils/BabylonLogic';
import BabylonScene from '../BabylonScene';

const AgenteCore = () => {
    const pillars = [
        {
            title: 'Razonamiento (Cerebro)',
            desc: 'Motor de toma de decisiones lógicas mediante modelos de lenguaje de gran escala.',
            icon: <Brain />,
            init: (engine, canvas) => initPilar(engine, canvas, 'agents')
        },
        {
            title: 'Memoria Multidimensional',
            desc: 'Almacenamiento de contexto, reglas de negocio y aprendizaje procedimental para una ejecución persistente.',
            icon: <Database />,
            init: (engine, canvas) => initPilar(engine, canvas, 'data')
        },
        {
            title: 'Perfil y Mandato',
            desc: 'Identidad y restricciones claras que aseguran una alineación total con los objetivos corporativos.',
            icon: <Shield />,
            init: (engine, canvas) => initPilar(engine, canvas, 'shield')
        },
        {
            title: 'Capacidades Integradas',
            desc: 'Unión de habilidades de análisis con interfaces externas para interactuar con sistemas reales en tiempo real.',
            icon: <Zap />,
            init: (engine, canvas) => initPilar(engine, canvas, 'agents')
        },
    ];

    return (
        <section id="agente-core" className="section container">
            <div className="section-header" style={{ marginBottom: '4rem' }}>
                <div className="status-indicator"><span className="dot"></span> LA UNIDAD DE EJECUCIÓN</div>
                <h2 className="terminal-title">El Agente <span className="highlight">Core.</span></h2>
            </div>

            <div className="pilares-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {pillars.map((p, idx) => (
                    <div key={idx} className="feature-card" style={{ padding: '2.5rem' }}>
                        <div className="pilar-visual-container" style={{ height: '200px', marginBottom: '2rem', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <BabylonScene onSceneReady={p.init} />
                        </div>
                        <div className="feature-icon" style={{ width: '45px', height: '45px', borderRadius: '8px' }}>{p.icon}</div>
                        <h3 style={{ fontSize: '1.7rem' }}>{p.title}</h3>
                        <p style={{ fontSize: '1.15rem' }}>{p.desc}</p>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default AgenteCore;
