import React from 'react';
import { Shield, Lock, Eye, Activity } from 'lucide-react';
import { initSeguridad } from '../../utils/BabylonLogic';
import VisualSplit from '../VisualSplit';

const Seguridad = () => {
    const items = [
        { icon: <Shield />, title: "Gobernanza de datos", desc: "Políticas estrictas de acceso. La IA interactúa exclusivamente con información autorizada." },
        { icon: <Lock />, title: "Logs de auditoría", desc: "Registro inmutable de cada decisión, paso y razonamiento ejecutado por cualquier agente." },
        { icon: <Eye />, title: "Permisos granulares", desc: "Control de acceso basado en roles define qué agente tiene visibilidad sobre qué datos." },
        { icon: <Activity />, title: "Privacidad PII", desc: "Protocolos de anonimización activa de datos sensibles antes de cualquier procesamiento." },
    ];

    return (
        <section id="seguridad" className="section container">
            <div className="section-grid">
                <div className="seguridad-visual">
                    <VisualSplit height="500px" babylonInit={initSeguridad} />
                </div>

                <div className="seguridad-copy">
                    <div className="status-indicator"><span className="dot"></span> ENTERPRISE-READY</div>
                    <h2 className="terminal-title">Seguridad por diseño.<br /><span className="highlight">Desde el día cero.</span></h2>

                    <div className="seg-items" style={{ marginTop: '3rem', display: 'grid', gap: '2rem' }}>
                        {items.map((it, idx) => (
                            <div key={idx} className="seg-item" style={{ display: 'flex', gap: '1.5rem' }}>
                                <div className="feature-icon" style={{ width: '60px', height: '60px', flexShrink: 0 }}>{it.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem' }}>{it.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '5px' }}>{it.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Seguridad;
