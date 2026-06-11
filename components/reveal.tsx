"use client"

import { useEffect, useRef, useState } from "react"

interface RevealProps {
  children: React.ReactNode
  type?: "fade-up" | "fade-right" | "fade-left" | "mask"
  delay?: number // en milisegundos
  className?: string
  width?: "fit-content" | "100%"
}

export default function Reveal({ 
  children, 
  type = "fade-up", 
  delay = 0, 
  className = "",
  width = "100%"
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Una vez que aparece, dejamos de observar para que no se vuelva a animar al subir
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1, // Dispara la animación cuando el 10% del elemento entra en pantalla
        rootMargin: "0px 0px -50px 0px" // Le da un pequeño margen para que se anime un poco después de entrar
      }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Estilo Base: La curva matemática "pesada" y arquitectónica
  let baseClasses = "transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
  let hiddenClasses = ""
  let visibleClasses = ""

  // Tipos de animación
  switch (type) {
    case "fade-up":
      hiddenClasses = "opacity-0 translate-y-12"
      visibleClasses = "opacity-100 translate-y-0"
      break
    case "fade-right":
      hiddenClasses = "opacity-0 -translate-x-12"
      visibleClasses = "opacity-100 translate-x-0"
      break
    case "fade-left":
      hiddenClasses = "opacity-0 translate-x-12"
      visibleClasses = "opacity-100 translate-x-0"
      break
    case "mask":
      // Efecto "Cortina" revelando un plano
      hiddenClasses = "opacity-0 [clip-path:inset(100%_0_0_0)] translate-y-4"
      visibleClasses = "opacity-100 [clip-path:inset(0_0_0_0)] translate-y-0"
      break
  }

  return (
    <div 
      ref={ref} 
      className={`${baseClasses} ${isVisible ? visibleClasses : hiddenClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms`, width }}
    >
      {children}
    </div>
  )
}