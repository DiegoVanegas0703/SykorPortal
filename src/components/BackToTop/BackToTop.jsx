import { useEffect, useState } from 'react'
import styles from './BackToTop.module.css'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 350)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      className={styles.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  )
}

export default BackToTop