import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ConsultoriaCierre = () => (
    <section id="cierre" className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(5, 5, 20, 0.4))' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="status-indicator" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
                    <span className="dot"></span> INFRAESTRUCTURA DE ALTA CONSULTORÍA
                </div>
                <h2 className="terminal-title" style={{ fontSize: 'clamp(3rem, 5vw, 6rem)' }}>
                    FExIA: <span className="highlight">Construya su capacidad.</span>
                </h2>
                <p className="terminal-desc" style={{ fontSize: '1.4rem', margin: '3rem 0 4rem 0', fontStyle: 'italic', color: '#fff' }}>
                    "Orquestación de alto nivel para una escala global. Evolucione hacia una infraestructura de inteligencia interconectada bajo el máximo rigor normativo."
                </p>
                <div className="cta-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <button className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Agendar Diagnóstico <ChevronRight size={20} />
                    </button>
                    <button className="btn btn-outline" style={{ padding: '1.2rem 3rem' }}>
                        Descargar Presentación
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);

export default ConsultoriaCierre;
