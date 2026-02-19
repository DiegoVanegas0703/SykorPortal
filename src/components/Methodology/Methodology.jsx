import { useReveal } from '../../hooks/useReveal'
import styles from './Methodology.module.css'

const STEPS = [
    {
        num: '01', title: 'DECISIÓN ESTRATÉGICA',
        desc: 'Entendemos el contexto del negocio, el riesgo y los objetivos antes de proponer cualquier solución.',
        icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
    },
    {
        num: '02', title: 'DISEÑO Y ARQUITECTURA',
        desc: 'Definimos arquitecturas tecnológicas y de seguridad alineadas a la estrategia y a la operación.',
        icon: <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
    },
    {
        num: '03', title: 'SEGURIDAD POR DISEÑO',
        desc: 'La seguridad se valida mediante pruebas ofensivas, controladas y simulaciones como; pentesting, Red/Team, Blue/Team y ethical hacking como aprendizaje organizacional.',
        icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
    {
        num: '04', title: 'EJECUCIÓN DISCIPLINADA',
        desc: 'Acompañamos la implementación con control, trazabilidad y gobierno durante todo el ciclo.',
        icon: <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
    },
    {
        num: '05', title: 'RESILIENCIA Y CONTINUIDAD',
        desc: 'Preparamos a la organización para anticipar, resistir, responder y recuperarse ante un vector de ataque, que afecte la ICC.',
        icon: <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
    },
]

function StepCard({ step }) {
    const ref = useReveal()

    return (
        <article className={`reveal ${styles.card}`} ref={ref}>
            <div className={styles.num} aria-hidden="true">{step.num}</div>
            <div className={styles.iconWrap} aria-hidden="true">
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {step.icon}
                </svg>
            </div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.desc}>{step.desc}</p>
        </article>
    )
}

export default function Methodology() {
    const headerRef = useReveal()

    return (
        <section id="enfoque" className={`section dark-section ${styles.methodology}`}>
            <div className="container">
                <div className="sectionLabel">
                    <span className="labelLine" />
                    <span className="labelMono">03 / ENFOQUE SYKOR</span>
                    <span className="labelLine" />
                </div>
                <div className={`reveal ${styles.header}`} ref={headerRef}>
                    <h2 className="sectionTitle centered">
                        Metodología diseñada para{' '}
                        <span className="text-accent">entornos críticos</span>
                    </h2>
                    <p className="sectionSubtitle centered">Un proceso estructurado que convierte la complejidad en control sostenible.</p>
                </div>
                <div className={styles.timeline}>
                    {STEPS.map((step) => (
                        <StepCard key={step.num} step={step} />
                    ))}
                </div>
            </div>
        </section>
    )
}
