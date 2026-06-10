import Image from "next/image"

export default function CompactModels() {
  return (
    <section className="py-32 bg-white text-foreground border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[#C2523A] font-bold tracking-widest uppercase text-sm mb-4 block">
              Inversión Inteligente
            </span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tight">
              Línea <span className="text-zinc-400">Compacta</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md font-sans">
            Módulos de 15m² (6 x 2.5m). La solución definitiva para renta temporaria, ampliaciones rápidas o espacios de trabajo modernos.
          </p>
        </div>

        {/* Grilla de Modelos Compactos (Image Hover Cards) */}
        <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 -mx-4 px-4 md:mx-0 md:px-0 mb-10 md:mb-32">
          
          {/* Módulo Oficina */}
          <div className="relative group h-[450px] w-[85vw] md:w-auto shrink-0 snap-center overflow-hidden bg-zinc-900 flex flex-col justify-end">
            <Image 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
              alt="Módulo Oficina Stylebox"
              fill
              className="object-cover transition-all duration-700 md:group-hover:scale-105 md:group-hover:opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
            <div className="relative z-10 p-6 md:p-12 transition-transform duration-500 md:group-hover:-translate-y-4">
              <span className="text-[#C2523A] font-bold tracking-widest text-xs uppercase mb-2 block">Workplace</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-2">Office Space</h3>
              <p className="text-zinc-300 font-sans text-sm md:text-base">Tu oficina, donde quieras y como quieras.</p>
              <div className="md:grid md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 transition-all duration-500 ease-out mt-4 block">
                <div className="overflow-hidden">
                  <ul className="space-y-2 font-sans text-xs md:text-sm text-zinc-300 border-l-2 border-[#C2523A] pl-4 mt-2">
                    <li>• Escritorio flotante XL.</li>
                    <li>• Piso vinílico símil madera.</li>
                    <li>• Ventanal de piso a techo.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Módulo C103 */}
          <div className="relative group h-[450px] w-[85vw] md:w-auto shrink-0 snap-center overflow-hidden bg-zinc-900 flex flex-col justify-end">
            <Image 
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
              alt="Módulo C103"
              fill
              className="object-cover transition-all duration-700 md:group-hover:scale-105 md:group-hover:opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
            <div className="relative z-10 p-6 md:p-12 transition-transform duration-500 md:group-hover:-translate-y-4">
              <span className="text-[#C2523A] font-bold tracking-widest text-xs uppercase mb-2 block">Monoambiente</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-2">Modelo C103</h3>
              <p className="text-zinc-300 font-sans text-sm md:text-base">Invertí en metros cuadrados inteligentes.</p>
              <div className="md:grid md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 transition-all duration-500 ease-out mt-4 block">
                <div className="overflow-hidden">
                  <ul className="space-y-2 font-sans text-xs md:text-sm text-zinc-300 border-l-2 border-[#C2523A] pl-4 mt-2">
                    <li>• Instalación inmediata.</li>
                    <li>• Aislación termoacústica extrema.</li>
                    <li>• Ideal renta temporaria.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sección de Interiorismo: Acordeón Desktop / Slider Móvil */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight text-center mb-4">Un Espacio. <br className="md:hidden"/><span className="text-[#C2523A]">Tres Visiones.</span></h3>
          <p className="text-center text-muted-foreground font-sans text-sm md:text-base max-w-2xl mx-auto mb-12">
            Desafiamos los límites de la construcción modular. Personalización interior de lujo.
          </p>

          <div className="flex flex-row h-[500px] md:h-[600px] w-full gap-2 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            
            {/* Panel 1 */}
            <div className="group relative w-[85vw] md:w-auto shrink-0 snap-center md:flex-1 md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden bg-zinc-950">
              {/* Contenido visual igual que antes */}
              <Image src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop" alt="Loft Black" fill className="object-cover opacity-80 md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 whitespace-nowrap">LOFT BLACK</h4>
                <p className="text-zinc-300 font-sans text-xs md:text-sm block md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 whitespace-normal pr-4">Vanguardia industrial y urbana. Tonos oscuros, metales a la vista y carácter fuerte.</p>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="group relative w-[85vw] md:w-auto shrink-0 snap-center md:flex-1 md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden bg-orange-950">
              <Image src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop" alt="Loft Caju" fill className="object-cover opacity-80 md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a2e1b]/90 via-[#4a2e1b]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 whitespace-nowrap">LOFT CAJU</h4>
                <p className="text-zinc-200 font-sans text-xs md:text-sm block md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 whitespace-normal pr-4">Calidez y paz minimalista. Maderas claras, texturas suaves y un ambiente acogedor.</p>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="group relative w-[85vw] md:w-auto shrink-0 snap-center md:flex-1 md:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden bg-green-950">
              <Image src="/loft-green.jpg" alt="Loft Green" fill className="object-cover opacity-80 md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a2a]/90 via-[#1b3a2a]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 whitespace-nowrap">LOFT GREEN</h4>
                <p className="text-zinc-200 font-sans text-xs md:text-sm block md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 whitespace-normal pr-4">Bienestar y conexión natural. Integración orgánica con el entorno mediante vegetación.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}