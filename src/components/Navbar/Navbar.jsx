import { useState, useEffect } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import styles from './Navbar.module.css'
// ⬇ Cambia la ruta por el nombre real de tu archivo
import logo from '../../assets/logo.png'

const NAV_IDS = ['inicio', 'quienes-somos', 'enfoque', 'soluciones', 'filosofia', 'contacto']

function smoothTo(id, e) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const activeId = useScrollSpy(NAV_IDS)

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', fn, { passive: true })
        return () => window.removeEventListener('scroll', fn)
    }, [])

    const handleLink = (id) => (e) => {
        smoothTo(id, e)
        setOpen(false)
    }

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation">
            <div className={styles.container}>
                <a href="#inicio" className={styles.brand} onClick={handleLink('inicio')}>
                    <img
                        src={logo}
                        alt="SYKOR"
                        className={styles.logoImg}
                    />
                </a>

                <button
                    className={`${styles.toggle} ${open ? styles.open : ''}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                    aria-expanded={open}
                >
                    <span /><span /><span />
                </button>

                <ul className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
                    {[
                        { id: 'inicio', label: 'Inicio' },
                        { id: 'quienes-somos', label: 'Quiénes Somos' },
                        { id: 'enfoque', label: 'Enfoque' },
                        { id: 'soluciones', label: 'Soluciones' },
                        { id: 'filosofia', label: 'Filosofía' },
                    ].map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                                onClick={handleLink(id)}
                            >{label}</a>
                        </li>
                    ))}
                    <li>
                        <a href="#contacto" className={`${styles.link} ${styles.ctaLink}`} onClick={handleLink('contacto')}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
