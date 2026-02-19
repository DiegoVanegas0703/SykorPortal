import styles from './Footer.module.css'
// ⬇ Cambia la ruta por el nombre real de tu archivo
import logo from '../../assets/logo.png'

const NAV_LINKS = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    { id: 'enfoque', label: 'Enfoque' },
    { id: 'soluciones', label: 'Soluciones' },
    { id: 'filosofia', label: 'Filosofía' },
]

function smoothTo(id, e) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
}

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <img src={logo} alt="SYKOR" className={styles.footerLogo} />
                        <p className={styles.tagline}>Diseño inteligente. Seguridad real.</p>
                    </div>
                    <nav className={styles.nav} aria-label="Navegación pie de página">
                        {NAV_LINKS.map(({ id, label }) => (
                            <a key={id} href={`#${id}`} onClick={(e) => smoothTo(id, e)}>{label}</a>
                        ))}
                    </nav>
                    <div className={styles.contact}>
                        <a href="mailto:contacto@sykor.co">contacto@sykor.co</a>
                        <a href="https://www.sykor.co" target="_blank" rel="noopener noreferrer">www.sykor.co</a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copy}>&copy; {year} SYKOR. Todos los derechos reservados.</p>
                    <p className={styles.mono}>// SISTEMA ACTIVO — CONTROL TOTAL</p>
                </div>
            </div>
        </footer>
    )
}
