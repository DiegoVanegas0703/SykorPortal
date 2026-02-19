import { useReveal } from '../../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
    const ref1 = useReveal()
    const ref2 = useReveal()

    return (
        <section id="quienes-somos" className={`section ${styles.about}`}>
            <div className="container">
                <div className="sectionLabel">
                    <span className="labelLine" />
                    <span className="labelMono">02 / QUIÉNES SOMOS</span>
                    <span className="labelLine" />
                </div>
                <div className={styles.grid}>
                    <div className={`reveal ${styles.text}`} ref={ref1}>
                        <h2 className="sectionTitle">
                            Una firma que opera donde{' '}
                            <span className="text-accent">el margen de error es cero.</span>
                        </h2>
                        <p className={styles.description}>
                            SYKOR es una firma de consultoría estratégica que acompaña a las organizaciones en la toma de decisiones críticas relacionadas con tecnología, seguridad y ciberresiliencia. No solo implementamos herramientas; diseñamos la arquitectura que permite operar en entornos de alta incertidumbre.
                        </p>
                        <div className={styles.features}>
                            {[
                                'Decisiones basadas en datos y riesgo real',
                                'Arquitectura de seguridad desde el diseño',
                                'Gobierno, trazabilidad y control total',
                            ].map((f) => (
                                <div key={f} className={styles.featureItem}>
                                    <span className={styles.featureIcon} aria-hidden="true">◈</span>
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`reveal ${styles.manifestoWrap}`} ref={ref2}>
                        <div className={styles.manifestoCard}>
                            <div className={styles.decoration} aria-hidden="true">
                                <span className={styles.decoLine} />
                                <span className={styles.decoHex}>⬡</span>
                                <span className={styles.decoLine} />
                            </div>
                            <blockquote className={styles.manifestoText}>
                                "Diseñamos estructuras tecnológicas para organizaciones que operan en entornos donde el error no es una opción."
                            </blockquote>
                            <footer className={styles.manifestoFooter}>
                                <span className={styles.manifestoBrand}>— SYKOR MANIFIESTO</span>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
