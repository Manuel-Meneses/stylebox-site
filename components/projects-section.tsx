import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Maximize, BedDouble, Bath, LayoutTemplate } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-32 bg-zinc-950 text-white relative border-t border-zinc-800 overflow-hidden">
      
      {/* Brillo de fondo sutil con el color de la marca para quitar la "opacidad" plana */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C2523A] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C2523A] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[#C2523A] font-bold tracking-widest uppercase text-sm mb-4 block">
              Línea Residencial
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold uppercase tracking-tight">
              Modelo <span className="text-zinc-500">60</span>
            </h2>
          </div>
          <p className="text-lg text-zinc-400 max-w-md font-sans">
            Un diseño que optimiza los metros cuadrados, elimina pasillos y prioriza un área social de concepto completamente abierto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Columna Izquierda: Imagen del Proyecto */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-zinc-800 bg-zinc-900 min-h-[400px] lg:min-h-[600px]">
            <Image 
              src="/ref-60.jpg" 
              alt="Modelo 60 Metros Cuadrados - Stylebox"
              fill
              className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-80 grayscale group-hover:grayscale-0"
            />
            
            {/* Acento decorativo lineal en la foto */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C2523A] to-transparent opacity-50"></div>

            <div className="absolute top-6 left-6 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-4">
              <p className="font-heading font-bold tracking-widest uppercase text-xs text-[#C2523A] mb-1">Configuración</p>
              <p className="font-sans text-sm text-white">2 Módulos 40ft HC Unidos</p>
            </div>
          </div>

          {/* Columna Derecha: Especificaciones Técnicas */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="group/card border border-zinc-800 p-6 flex flex-col items-start transition-all duration-300 hover:border-[#C2523A]/50 hover:bg-[#C2523A]/[0.02]">
                <Maximize className="w-6 h-6 text-zinc-500 group-hover/card:text-[#C2523A] transition-colors mb-4" strokeWidth={1.5} />
                <span className="text-2xl font-heading font-bold mb-1">12 x 4.8m</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Dimensiones</span>
              </div>
              
              <div className="group/card border border-zinc-800 p-6 flex flex-col items-start transition-all duration-300 hover:border-[#C2523A]/50 hover:bg-[#C2523A]/[0.02]">
                <BedDouble className="w-6 h-6 text-zinc-500 group-hover/card:text-[#C2523A] transition-colors mb-4" strokeWidth={1.5} />
                <span className="text-2xl font-heading font-bold mb-1">2 Dorm.</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">2.30 x 3.80m c/u</span>
              </div>
              
              <div className="group/card border border-zinc-800 p-6 flex flex-col items-start transition-all duration-300 hover:border-[#C2523A]/50 hover:bg-[#C2523A]/[0.02]">
                <Bath className="w-6 h-6 text-zinc-500 group-hover/card:text-[#C2523A] transition-colors mb-4" strokeWidth={1.5} />
                <span className="text-2xl font-heading font-bold mb-1">Baño Res.</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">2.40 x 2.20m</span>
              </div>
              
              <div className="group/card border border-zinc-800 p-6 flex flex-col items-start transition-all duration-300 hover:border-[#C2523A]/50 hover:bg-[#C2523A]/[0.02]">
                <LayoutTemplate className="w-6 h-6 text-zinc-500 group-hover/card:text-[#C2523A] transition-colors mb-4" strokeWidth={1.5} />
                <span className="text-2xl font-heading font-bold mb-1">Abierto</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Living/Comedor</span>
              </div>
            </div>

            {/* Bloque de Precio y CTAs */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col gap-6 mt-auto relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#C2523A] opacity-10 blur-2xl rounded-full"></div>
              
              <div className="relative z-10 mb-2">
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-2">Valor Referencial</p>
                <p className="text-4xl md:text-5xl font-heading font-bold text-white">$50.000.000 <span className="text-lg text-zinc-500 font-sans font-normal">ARS</span></p>
                <p className="text-xs text-zinc-500 mt-2">*Precio base sujeto a modificaciones. No incluye flete ni instalación.</p>
              </div>
              
              {/* MAGIA DE CONVERSIÓN: Dos botones complementarios */}
              <div className="relative z-10 flex flex-col xl:flex-row gap-4 w-full">
                <Button size="lg" className="w-full xl:w-1/2 text-sm uppercase tracking-widest rounded-none bg-[#C2523A] hover:bg-[#a3442f] text-white py-6 transition-colors" asChild>
                  <Link href="https://wa.me/5491166085926?text=Hola,%20quisiera%20consultar%20sobre%20el%20Modelo%2060%20de%20arquitectura%20modular." target="_blank" rel="noopener noreferrer">
                    Cotizar Modelo
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="w-full xl:w-1/2 text-sm uppercase tracking-widest rounded-none bg-transparent border-zinc-600 text-white hover:bg-white hover:text-black py-6 transition-colors" asChild>
                  <Link href="/modelos">
                    Ver Showroom
                  </Link>
                </Button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}