import { useState, useRef, useEffect } from 'react'

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    const toggleIsHovered = () => setIsHovered(prevState => !prevState)

    if (element) {
      element.addEventListener('mouseenter', toggleIsHovered)
      element.addEventListener('mouseleave', toggleIsHovered)
    }

    return () => {
      element.removeEventListener('mouseenter', toggleIsHovered)
      element.removeEventListener('mouseleave', toggleIsHovered)
    }
  }, [])

  return [isHovered, ref]
}

export { useHover }
