import React from 'react';
import { ShieldCheck, Database, FileSearch } from 'lucide-react';
import { initSeguridad } from '../../utils/BabylonLogic';
import BabylonScene from '../BabylonScene';

const EscudoGobernanza = () => {
    const items = [
        { icon: <ShieldCheck />, title: "Cumplimiento Normativo", desc: "Garantía de alineación total con las regulaciones legales vigentes en el mercado." },
        { icon: <Database />, title: "Gobernanza de Datos", desc: "Control granular de acceso, anonimización de datos sensibles y soberanía sobre la información." },
        { icon: <FileSearch />, title: "Trazabilidad y Auditoría", desc: "Registro exhaustivo de cada decisión tomada por el ecosistema para asegurar transparencia total." },
    ];

    return (
        <section id="gobernanza" className="section container">
            <div className="section-grid" style={{ gap: '8rem' }}>
                <div className="seguridad-visual">
                    <div className="section-visual" style={{ height: '550px', background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 60%)' }}>
                        <BabylonScene onSceneReady={initSeguridad} />
                    </div>
                </div>

                <div className="seguridad-copy">
                    <div className="status-indicator"><span className="dot"></span> ESCUDO DE GOBERNANZA</div>
                    <h2 className="terminal-title">Gobernanza y <br /><span className="highlight">Compliance.</span></h2>
                    <p className="terminal-desc">Arquitectura operativa blindada por el rigor normativo y la seguridad absoluta de la información.</p>

                    <div className="seg-items" style={{ marginTop: '3.5rem', display: 'grid', gap: '3rem' }}>
                        {items.map((it, idx) => (
                            <div key={idx} className="seg-item" style={{ display: 'flex', gap: '1.5rem' }}>
                                <div className="feature-icon" style={{ width: '64px', height: '64px', flexShrink: 0, borderRadius: '12px' }}>{it.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.45rem' }}>{it.title}</h4>
                                    <p style={{ fontSize: '1.1rem', color: '#888', marginTop: '8px', lineHeight: '1.6' }}>{it.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EscudoGobernanza;
