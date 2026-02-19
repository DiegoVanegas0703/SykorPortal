import { useReveal } from '../../hooks/useReveal'
import styles from './CTA.module.css'

export default function CTA() {
    const ref = useReveal()

    return (
        <section id="contacto" className={`section ${styles.cta}`}>
            <div className={styles.bgOverlay} aria-hidden="true" />
            <div className="container">
                <div className={`reveal ${styles.content}`} ref={ref}>
                    <div className="badge">
                        <span className="badgeDot" />
                        <span className="badgeMono">[ SESIÓN DE DIAGNÓSTICO ]</span>
                    </div>

                    <h2 className={styles.title}>
                        Transformamos la incertidumbre{' '}
                        <span className="text-accent">en control.</span>
                    </h2>

                    <p className={styles.text}>
                        En SYKOR transformamos la incertidumbre en control. Agendemos una sesión de diagnóstico inicial para evaluar la resiliencia de su infraestructura crítica.
                    </p>

                    <div className={styles.actions}>
                        <a href="mailto:contacto@sykor.co" className="btn btnPrimary btnLg">Agendar Sesión</a>
                        <a href="https://www.sykor.co" target="_blank" rel="noopener noreferrer" className="btn btnGhost btnLg">Visitar sykor.co</a>
                    </div>

                    <div className={styles.contactInfo}>
                        <a href="mailto:contacto@sykor.co" className={styles.contactLink}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.contactIcon} aria-hidden="true">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>contacto@sykor.co</span>
                        </a>
                        <span className={styles.sep} aria-hidden="true">|</span>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.contactIcon} aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span>www.sykor.co/LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
