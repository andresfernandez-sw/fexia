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
            <div className="section-header">
                <div className="status-indicator"><span className="dot"></span> LA UNIDAD DE EJECUCIÓN</div>
                <h2 className="terminal-title">El Agente <span className="highlight">Core.</span></h2>
            </div>

            <div className="pilares-grid">
                {pillars.map((p, idx) => (
                    <div key={idx} className="feature-card">
                        <div className="pilar-visual-container">
                            <BabylonScene onSceneReady={p.init} />
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

export default AgenteCore;
