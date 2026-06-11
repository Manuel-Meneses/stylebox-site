import Link from "next/link"
import { Button } from "@/components/ui/button"
import Reveal from "./reveal"

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      
      {/* 1. CONTENEDOR DEL VIDEO DE FONDO */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#111111]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          disablePictureInPicture /* Bloquea el botón de minimizar pantalla */
          disableRemotePlayback /* Bloquea el ícono de transmitir a Smart TV */
          className="w-full h-full object-cover"
          poster="/bg-hero.jpg" 
        >
          <source src="/videos/hero-stylebox-master-1.mp4" type="video/mp4" />
        </video>
        
        {/* 2. OVERLAY MEJORADO: Usamos un gradiente horizontal. 
            Más oscuro a la izquierda para que el texto resalte a la perfección, 
            y más transparente a la derecha para dejar lucir el video de la fábrica. */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30 z-10"></div>
      </div>

      {/* 3. CONTENIDO ALINEADO A LA IZQUIERDA */}
      <div className="relative z-20 container mx-auto px-4 md:px-8">
        <div className="max-w-5xl flex flex-col items-start text-left mt-16 md:mt-0">
          
          {/* Etiqueta superior brutalista con línea integradora */}
          <Reveal type="fade-right" delay={0}>
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-[#F24424]"></div>
              <span className="text-[#F24424] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                Fabricantes Directos
              </span>
            </div>
          </Reveal>
          
          {/* Título Principal Nivel Agencia: Massive Scale + Text Stroke */}
          <Reveal type="fade-right" delay={150}>
            <h1 className="text-[1.5rem] md:text-7xl lg:text-[3.5rem] font-heading font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter mb-8">
              ARQUITECTURA
              <br />
              MODULAR
              <br />
              {/* MAGIA CSS: Texto transparente con borde del color de la marca */}
              <span className="text-transparent [-webkit-text-stroke:2px_#F24424] md:[-webkit-text-stroke:3px_#F24424]">
                PREMIUM
              </span>
              <span className="text-[#F24424]">.</span>
            </h1>
          </Reveal>

          {/* Subtítulo: Le agregamos un borde izquierdo para anclarlo visualmente a la grilla */}
          <Reveal type="fade-right" delay={300}>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-sans font-light leading-relaxed border-l-2 border-[#F24424]/40 pl-6">
              Diseñamos y construimos espacios eficientes, modernos y listos para habitar. 
              Respaldados por una planta de producción de 4.000 m² equipada con tecnología de punta.
            </p>
          </Reveal>

          {/* Call to Action: Botones gigantes y mecánicos */}
          <Reveal type="fade-right" delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-start">
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 text-sm font-bold uppercase tracking-widest rounded-none bg-[#F24424] hover:bg-[#d13a1e] text-white" 
                asChild
              >
                <Link href="#proyectos">
                  Ver Modelos
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto h-14 px-8 text-sm font-bold uppercase tracking-widest rounded-none text-white border-white hover:bg-white hover:text-black bg-transparent" 
                asChild
              >
                <Link href="https://wa.me/5491166085926" target="_blank" rel="noopener noreferrer">
                  Contactar Asesor
                </Link>
              </Button>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  )
}