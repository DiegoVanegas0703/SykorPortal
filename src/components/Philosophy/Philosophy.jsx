import { useReveal } from '../../hooks/useReveal'
import styles from './Philosophy.module.css'

const QUOTES = [
    '"La seguridad no es una función técnica. Es una condición para seguir operando."',
    '"No trabajamos para eliminar el riesgo. Trabajamos para anticiparlo y que su organización sepa operar con él."',
]

function QuoteItem({ quote }) {
    const ref = useReveal()

    return (
        <figure className={`reveal ${styles.quote}`} ref={ref}>
            <blockquote><p>{quote}</p></blockquote>
            <figcaption>— SYKOR</figcaption>
        </figure>
    )
}

export default function Philosophy() {
    return (
        <section id="filosofia" className={`section dark-section ${styles.philosophy}`}>
            <div className="container">
                <div className="sectionLabel">
                    <span className="labelLine" />
                    <span className="labelMono">05 / FILOSOFÍA</span>
                    <span className="labelLine" />
                </div>
                <h2 className="sr-only">Filosofía SYKOR</h2>
                <div className={styles.quotes}>
                    {QUOTES.map((quote, index) => (
                        <QuoteItem key={index} quote={quote} />
                    ))}
                </div>
            </div>
        </section>
    )
}
