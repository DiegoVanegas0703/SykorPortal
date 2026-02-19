import { useEffect, useRef } from 'react'
import { useReveal } from '../../hooks/useReveal'
import styles from './Hero.module.css'

function spawnParticles(container) {
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('span')
        p.className = 'particle'
        p.style.cssText = `
      left:${Math.random() * 100}%;top:${Math.random() * 100}%;
      animation-delay:${Math.random() * 8}s;
      animation-duration:${6 + Math.random() * 6}s;
    `
        container.appendChild(p)
    }
}

export default function Hero() {
    const particlesRef = useRef(null)
    const ref1 = useReveal()

    useEffect(() => {
        if (particlesRef.current) spawnParticles(particlesRef.current)
    }, [])

    const scrollTo = (id) => (e) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (!el) return
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
    }

    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.bgGrid} aria-hidden="true" />
            <div className={styles.scanLine} aria-hidden="true" />
            <div ref={particlesRef} className={styles.particles} aria-hidden="true" />

            <div className={`${styles.content} reveal`} ref={ref1}>
                <div className="badge">
                    <span className="badgeDot" />
                    <span className="badgeMono">[ SISTEMA OPERATIVO ]</span>
                </div>

                <h1 className={styles.title}>
                    EL PROBLEMA NO ES LA TECNOLOGÍA
                    <span className={styles.ellipsis}>......</span>
                    <span className={styles.titleBreak}> ES LA FALTA DE CONTROL!</span>
                </h1>

                <p className={styles.subtitle}>
                    Trabajamos donde la improvisación es un riesgo, la complejidad es constante y el control no es negociable.
                </p>

                <div className={styles.actions}>
                    <a href="#soluciones" className="btn btnPrimary" onClick={scrollTo('soluciones')}>Ver Soluciones</a>
                    <a href="#quienes-somos" className="btn btnGhost" onClick={scrollTo('quienes-somos')}>Conocer SYKOR</a>
                </div>

                <div className={styles.stats} aria-label="Métricas">
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>100<span className={styles.statSymbol}>%</span></span>
                        <span className={styles.statLabel}>Compromiso</span>
                    </div>
                    <div className={styles.statDivider} aria-hidden="true" />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>0<span className={styles.statSymbol}>%</span></span>
                        <span className={styles.statLabel}>Improvisación</span>
                    </div>
                    <div className={styles.statDivider} aria-hidden="true" />
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>∞</span>
                        <span className={styles.statLabel}>Control</span>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator} aria-hidden="true">
                <span className={styles.scrollLabel}>SCROLL</span>
                <div className={styles.scrollLine} />
            </div>
        </section>
    )
}
