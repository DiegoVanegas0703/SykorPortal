import { useReveal } from '../../hooks/useReveal'
import styles from './Solutions.module.css'

const SOLUTIONS = [
    {
        id: 'estrategia',
        title: 'ESTRATEGIA Y ARQUITECTURA ORGANIZACIONAL',
        desc: 'Acompañamos a empresas y equipos directivos en decisiones sobre arquitectura tecnológica, procesos y modelos de operación.',
        tag: 'Estrategia',
        icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    },
    {
        id: 'ingenieria',
        title: 'INGENIERÍA DIGITAL Y ENTORNOS SEGUROS',
        desc: 'Diseñamos soluciones digitales a la medida, orientadas a entornos de trabajo eficientes y seguros.',
        tag: 'Ingeniería',
        icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
    },
    {
        id: 'ciberseguridad',
        title: 'CIBERSEGURIDAD, RIESGO Y CONTINUIDAD',
        desc: 'Protegemos información, sistemas y entornos laborales frente a incidentes, garantizando la continuidad operativa.',
        tag: 'Ciberseguridad',
        icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
    {
        id: 'transformacion',
        title: 'TRANSFORMACIÓN DIGITAL E IA',
        desc: 'Acompañamos la transformación digital desde una perspectiva humana, ética y organizacional.',
        tag: 'Innovación',
        icon: <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
    },
    {
        id: 'riesgo-humano',
        title: 'GESTIÓN DE RIESGO HUMANO E INSIDER THREAT',
        desc: 'El firewall más robusto puede fallar si el factor humano está comprometido. Integramos procesos avanzados de validación de confiabilidad para blindar su organización desde adentro.',
        tag: 'Factor Humano',
        wide: true,
        icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
    },
]

export default function Solutions() {
    const refs = SOLUTIONS.map(() => useReveal())

    return (
        <section id="soluciones" className={`section ${styles.solutions}`}>
            <div className="container">
                <div className="sectionLabel">
                    <span className="labelLine" />
                    <span className="labelMono">04 / NUESTRAS SOLUCIONES</span>
                    <span className="labelLine" />
                </div>
                <div className={`reveal ${styles.header}`} ref={refs[0]}>
                    <h2 className="sectionTitle centered">
                        Pilares de <span className="text-accent">control y resiliencia</span>
                    </h2>
                    <p className="sectionSubtitle centered">
                        Cada solución está diseñada para operar con precisión en entornos donde el fallo no es aceptable.
                    </p>
                </div>
                <div className={styles.grid}>
                    {SOLUTIONS.map((s, i) => (
                        <article
                            key={s.id}
                            className={`reveal ${styles.card} ${s.wide ? styles.wide : ''}`}
                            ref={refs[i]}
                            tabIndex={0}
                        >
                            <div className={styles.inner}>
                                <div className={styles.iconWrap} aria-hidden="true">
                                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        {s.icon}
                                    </svg>
                                </div>
                                <h3 className={styles.title}>{s.title}</h3>
                                <p className={styles.desc}>{s.desc}</p>
                                <span className={styles.tag}>{s.tag}</span>
                            </div>
                            <div className={styles.glow} aria-hidden="true" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
