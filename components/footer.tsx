import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  { label: "Modelos Residenciales", href: "#proyectos" },
  { label: "La Fábrica", href: "#la-fabrica" },
  { label: "Sistema Constructivo", href: "#materiales" },
  { label: "Contacto", href: "#contacto" },
]

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/stylebox.modular/" },
  { label: "WhatsApp Directo", href: "https://wa.me/5491166085926" },
]

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO Y OVERLAY (Textura) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          // Podés cambiar esta URL por una foto de los contenedores en la fábrica
          src="/bg-footer.jpg" 
          alt="Textura Arquitectónica" 
          fill
          className="object-cover opacity-20 grayscale"
        />
        {/* Gradiente para fundir la imagen con el fondo y asegurar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/60"></div>
      </div>

      {/* 2. CONTENIDO DEL FOOTER */}
      <div className="relative z-10 px-6 py-16 md:px-12 lg:px-20 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Columna Izquierda: Marca y Descripción */}
          <div className="md:col-span-5">
          
            <Image
            src="/logo.svg"
            alt="Logo"
            width={130}   // ← ajustá al ancho de tu logo
            height={28}   // ← ajustá al alto de tu logo
            priority
            className={ "brightness-0 invert" }
          />
            <p className="text-sm leading-[1.75] text-zinc-400 mt-5 max-w-sm font-sans">
              Diseño y fabricación de arquitectura modular premium. 
              Respaldados por 4.000 m² de infraestructura y tecnología de punta.
            </p>
          </div>

          {/* Columna Central: Navegación */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-5">
              Navegación
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-[#C2523A] transition-colors duration-300 font-sans w-max"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Redes */}
          <div className="md:col-span-2 md:col-start-11">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-5">
              Social
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-[#C2523A] transition-colors duration-300 font-sans w-max"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Footer: Copyright y Legales */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-zinc-800/50 gap-4">
          <p className="text-[11px] tracking-[0.1em] text-zinc-500 font-sans uppercase">
            © {new Date().getFullYear()} Stylebox Arquitectura. Todos los derechos reservados.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <p className="text-[11px] tracking-[0.1em] text-zinc-500 font-sans uppercase">
              Córdoba, Argentina
            </p>
            {/* Si querés agregar links legales, descomentá esto:
            <Link href="#" className="text-[11px] tracking-[0.1em] text-zinc-500 hover:text-white uppercase transition-colors">Privacidad</Link>
            */}
          </div>
        </div>
      </div>
    </footer>
  )
}