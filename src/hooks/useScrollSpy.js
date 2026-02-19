import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, offset = 120) {
    const [activeId, setActiveId] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            let current = ''
            sectionIds.forEach(id => {
                const el = document.getElementById(id)
                if (el && scrollY >= el.offsetTop - offset) current = id
            })
            setActiveId(current)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sectionIds, offset])

    return activeId
}
