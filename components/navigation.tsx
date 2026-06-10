"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

// Links reales mapeados a los IDs de nuestras secciones
const navLinks = [
  { label: "Modelos", href: "#proyectos" },
  { label: "La Fábrica", href: "#la-fabrica" },
  { label: "Ingeniería", href: "#materiales" },
  { label: "Contacto", href: "#contacto" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Lógica impecable de scroll: se esconde al bajar, aparece al subir
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 60)
      setHidden(currentY > lastScrollY && currentY > 400)
      setLastScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-12 container mx-auto">

        {/* Logo de Stylebox */}
        <Link href="/" className="block">
          <Image
            src="/logo.svg"
            alt="Stylebox Arquitectura Modular"
            width={140} 
            height={40} 
            priority
            className={`transition-all duration-500 ${
              scrolled
                ? "brightness-100 invert-0"   // Color original (oscuro/rojo) en el fondo blanco
                : "brightness-0 invert"       // Blanco puro cuando está sobre el video oscuro del Hero
            }`}
          />
        </Link>

        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-zinc-600 hover:text-[#C2523A]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Botón CTA directo en el navbar para no perder conversiones */}
          <Link 
            href="https://wa.me/5491166085926" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`hidden lg:flex px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 border ${
              scrolled
                ? "border-[#C2523A] text-white bg-[#C2523A] hover:bg-[#a3442f]"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Cotizar
          </Link>
        </div>

        {/* Botón Menú Hamburguesa (Móvil) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors duration-500 ${
            scrolled || isOpen ? "text-zinc-900 hover:text-[#C2523A]" : "text-white hover:text-zinc-300"
          }`}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menú Desplegable (Móvil) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          isOpen ? "max-h-[500px] opacity-100 border-b border-border" : "max-h-0 opacity-0"
        } bg-white`}
      >
        <div className="flex flex-col px-6 py-10 gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-heading font-bold uppercase tracking-tight text-zinc-900 hover:text-[#C2523A] transition-colors duration-300 flex items-center gap-4 group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="w-0 h-1 bg-[#C2523A] transition-all duration-300 group-hover:w-8"></span>
              {link.label}
            </Link>
          ))}
          
          {/* CTA en el menú móvil */}
          <Link 
            href="https://wa.me/5491166085926" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 w-full py-4 text-center text-sm font-bold tracking-widest uppercase text-white bg-[#C2523A] hover:bg-[#a3442f] transition-colors"
          >
            Contactar Asesor
          </Link>
        </div>
      </div>
    </header>
  )
}