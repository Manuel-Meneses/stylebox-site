import Image from "next/image"

export default function PressBanner() {
  return (
    <div className="w-full bg-zinc-950 border-y border-zinc-900 flex flex-col md:flex-row">
      
      {/* Sección Izquierda: Prensa e Infobae con Humanidad */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900 transition-colors relative">
        <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F58220]"></span> Visión de Mercado
        </p>
        
        <p className="text-xl md:text-2xl text-zinc-300 font-sans italic leading-relaxed mb-8">
          "La construcción modular no es solo el futuro, es la solución inteligente, rápida y sustentable que el mercado demanda hoy."
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          {/* Perfil Humano de la Arquitecta */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-700">
              <Image 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop" 
                alt="Arq. Maleirin" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Arq. Maleirin</p>
              <p className="text-xs text-zinc-500">@maleirin</p>
            </div>
          </div>

          {/* Logo Simulado de Infobae (Podés cambiarlo por un <img> real después) */}
          <div className="text-right">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Destacado en</p>
            <span className="font-serif font-bold text-2xl tracking-tighter text-[#F58220]">infobae</span>
          </div>
        </div>
      </div>

      {/* Sección Derecha: Pre-Lanzamiento (Con imagen de fondo humana) */}
      <div className="w-full md:w-1/2 relative flex items-center p-8 md:p-12 group overflow-hidden">
        {/* Imagen de fondo de clientes/arquitectos reales */}
        <Image 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
          alt="Pre-lanzamiento Stylebox"
          fill
          className="object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-1000"
        />
        {/* Overlay con color de la marca */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C2523A]/90 to-zinc-950/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-zinc-950/40"></div>
        
        <div className="relative z-10">
          <p className="text-sm font-bold tracking-widest text-[#C2523A] bg-zinc-950/50 w-max px-3 py-1 mb-4 uppercase backdrop-blur-sm border border-[#C2523A]/30">
            Etapa de Pre-Lanzamiento
          </p>
          <p className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight mb-4">
            Sumate a la revolución habitacional.
          </p>
          <p className="text-lg text-zinc-200 font-sans leading-relaxed max-w-md">
            Estamos iniciando. Aprovechá beneficios comerciales exclusivos reservando tu módulo hoy.
          </p>
        </div>
      </div>

    </div>
  )
}