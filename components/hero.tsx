import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      
      {/* 1. CONTENEDOR DEL VIDEO DE FONDO */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="/bg-hero.jpg" 
        >
          <source src="https://videos.pexels.com/video-files/3206014/3206014-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* 2. OVERLAY (Filtro oscuro para contraste) */}
        <div className="absolute inset-0 bg-black/65 z-10"></div>
      </div>

      {/* 3. CONTENIDO (Por encima del video, alineado a la izquierda) */}
      <div className="relative z-20 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl flex flex-col items-start text-left">
          
          {/* Etiqueta superior */}
          <span className="text-[#C2523A] font-bold tracking-widest uppercase text-sm mb-4 block">
            Fabricantes Directos
          </span>
          
          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            ARQUITECTURA MODULAR <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C2523A]">PREMIUM</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-sans">
            Diseñamos y construimos espacios eficientes, modernos y listos para habitar. 
            Respaldados por una planta de producción de 4.000 m² equipada con tecnología de punta.
          </p>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-start">
            <Button size="lg" className="w-full sm:w-auto text-md uppercase tracking-wider rounded-none" asChild>
              <Link href="#proyectos">
                Ver Modelos
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-md uppercase tracking-wider rounded-none text-white border-white hover:bg-white hover:text-black bg-transparent" asChild>
              <Link href="https://wa.me/5491166085926" target="_blank" rel="noopener noreferrer">
                Contactar Asesor
              </Link>
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  )
}