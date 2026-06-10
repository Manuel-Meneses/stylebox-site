"use client"

import { useState } from "react"
import { Layers, Wind, Grid2x2, SquareDashedBottom, Ruler } from "lucide-react"

const materials = [
  {
    id: "01",
    title: "Estructura Base",
    description: "Revestimiento en MDF de 5mm sobre rígida estructura de Steel Framing. Escuadras perfectas.",
    icon: <Layers className="w-8 h-8" strokeWidth={1.5} />
  },
  {
    id: "02",
    title: "Control Térmico",
    description: "Aislación absoluta con lana de vidrio de alta densidad y barrera de vapor de aluminio.",
    icon: <Wind className="w-8 h-8" strokeWidth={1.5} />
  },
  {
    id: "03",
    title: "Aberturas DVH",
    description: "Aluminio Línea Módena con Doble Vidrio Hermético. Hermetismo total de fábrica propia.",
    icon: <Grid2x2 className="w-8 h-8" strokeWidth={1.5} />
  },
  {
    id: "04",
    title: "Pisos Premium",
    description: "Piso flotante de 9mm sobre manta acústica y niveladora para un confort residencial.",
    icon: <SquareDashedBottom className="w-8 h-8" strokeWidth={1.5} />
  },
  {
    id: "05",
    title: "Amoblamiento",
    description: "Muebles de diseño propio en MDF 18mm con cantos PVC integrados a la arquitectura.",
    icon: <Ruler className="w-8 h-8" strokeWidth={1.5} />
  }
]

// CORRECCIÓN 1: El componente extraído afuera para evitar re-renders destructivos.
// Ahora recibe activeStep y setActiveStep como propiedades (props).
const ConceptCard = ({ item, index, align, activeStep, setActiveStep }: { item: any, index: number, align: 'left' | 'right', activeStep: number | null, setActiveStep: (val: number | null) => void }) => (
  <div 
    onMouseEnter={() => setActiveStep(index)}
    onMouseLeave={() => setActiveStep(null)}
    className={`group relative p-8 transition-all duration-500 ease-out cursor-default overflow-hidden
      ${activeStep === index ? 'bg-white shadow-2xl scale-[1.02] z-10' : 'hover:bg-white/40'}
      ${align === 'right' ? 'text-left lg:text-left' : 'text-left lg:text-right'}
    `}
  >
    <div className={`absolute top-0 w-1 h-full bg-[#C2523A] transition-transform duration-500 origin-top
      ${activeStep === index ? 'scale-y-100' : 'scale-y-0'}
      ${align === 'right' ? 'left-0' : 'right-0 hidden lg:block'}
    `}></div>
    <div className={`absolute top-0 left-0 w-1 h-full bg-[#C2523A] transition-transform duration-500 origin-top lg:hidden
      ${activeStep === index ? 'scale-y-100' : 'scale-y-0'}
    `}></div>

    <div className={`flex items-center gap-4 mb-4 ${align === 'left' ? 'lg:flex-row-reverse' : ''}`}>
      <span className={`text-4xl font-heading font-bold transition-colors duration-300 ${activeStep === index ? 'text-[#C2523A]' : 'text-muted-foreground/30'}`}>
        {item.id}
      </span>
      <div className={`transition-colors duration-300 ${activeStep === index ? 'text-[#C2523A]' : 'text-muted-foreground/50'}`}>
        {item.icon}
      </div>
    </div>
    
    <h3 className={`text-xl font-heading font-bold mb-2 uppercase tracking-wide transition-colors duration-300 ${activeStep === index ? 'text-foreground' : 'text-foreground/80'}`}>
      {item.title}
    </h3>
    <p className="text-muted-foreground font-sans leading-relaxed text-sm">
      {item.description}
    </p>
  </div>
)

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  // CORRECCIÓN 2: Eliminación de backdrop-blur en elementos 3D. 
  // Uso de opacidades y gradientes puros para simular el cristal sin destruir la GPU.
  const getCubeState = () => {
    switch (activeStep) {
      case 0:
        return {
          rotation: "rotateX(-15deg) rotateY(25deg)",
          faceClass: "border-4 border-[#C2523A] bg-transparent",
          innerScale: "scale-0"
        }
      case 1: 
        return {
          rotation: "rotateX(0deg) rotateY(45deg)",
          faceClass: "border border-[#C2523A]/30 bg-gradient-to-br from-red-500/60 via-white/10 to-blue-500/60",
          innerScale: "scale-0"
        }
      case 2: 
        return {
          rotation: "rotateX(-10deg) rotateY(35deg)",
          faceClass: "border border-white/60 bg-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]",
          innerScale: "scale-0"
        }
      case 3: 
        return {
          rotation: "rotateX(-60deg) rotateY(45deg)",
          faceClass: "border border-border/50 bg-black/5",
          innerScale: "scale-0",
          bottomHighlight: true
        }
      case 4: 
        return {
          rotation: "rotateX(-20deg) rotateY(-45deg)",
          faceClass: "border border-border bg-white/30",
          innerScale: "scale-100"
        }
      default: 
        return {
          rotation: "rotateX(-20deg) rotateY(45deg)",
          faceClass: "border-2 border-[#C2523A] bg-white/95 shadow-[0_0_30px_rgba(194,82,58,0.15)]",
          innerScale: "scale-0"
        }
    }
  }

  const cubeState = getCubeState()
  const gap = 112 

  return (
    <section id="materiales" className="py-32 bg-[#F9F9F9] text-foreground border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#C2523A] font-bold tracking-widest uppercase text-sm mb-4 block">
            Ingeniería de Producto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight text-foreground mb-6">
            Anatomía del Módulo.
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Interactuá con cada componente para entender cómo construimos espacios diseñados para durar toda la vida.
          </p>
        </div>

       <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* EL CUBO 3D (Arriba en móvil, Centro en Desktop) */}
          <div className="flex justify-center items-center w-full h-64 lg:h-[500px] order-1 lg:order-2 lg:col-span-4 [perspective:800px] lg:[perspective:1200px]">
            {/* Aplicamos un scale para que entre perfecto en el celular sin tocar la matemática 3D */}
            <div className="scale-[0.6] sm:scale-[0.8] lg:scale-100">
              <div 
                className="relative w-56 h-56 [transform-style:preserve-3d] transition-transform duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
                style={{ transform: cubeState.rotation }}
              >
                <div className={`absolute inset-0 m-auto w-32 h-32 bg-[#C2523A] shadow-[0_0_50px_#C2523A] transition-transform duration-[800ms] ease-out will-change-transform ${cubeState.innerScale}`}></div>

                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${cubeState.faceClass}`} style={{ transform: `rotateY(0deg) translateZ(${gap}px)` }}></div>
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${cubeState.faceClass}`} style={{ transform: `rotateY(90deg) translateZ(${gap}px)` }}></div>
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${cubeState.faceClass}`} style={{ transform: `rotateY(180deg) translateZ(${gap}px)` }}></div>
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${cubeState.faceClass}`} style={{ transform: `rotateY(-90deg) translateZ(${gap}px)` }}></div>
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${cubeState.faceClass}`} style={{ transform: `rotateX(90deg) translateZ(${gap}px)` }}></div>
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out 
                  ${activeStep === 3 ? 'bg-[#C2523A] shadow-[0_0_60px_#C2523A] border-none' : cubeState.faceClass}`} 
                  style={{ transform: `rotateX(-90deg) translateZ(${gap}px)` }}>
                </div>
              </div>
            </div>
          </div>

          {/* TARJETAS MÓVIL (Slider Horizontal) */}
          <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 w-screen pb-8 order-2 gap-4">
            {materials.map((item, index) => (
              <div key={index} className="w-[85vw] shrink-0 snap-center" onClick={() => setActiveStep(index)}>
                {/* Reutilizamos el ConceptCard, pero forzamos el clic para móviles */}
                <ConceptCard item={item} index={index} align="left" activeStep={activeStep} setActiveStep={setActiveStep} />
              </div>
            ))}
          </div>

          {/* TARJETAS DESKTOP (Grilla 3 izq / 2 der) */}
          <div className="hidden lg:flex flex-col gap-6 order-2 lg:order-1 lg:col-span-4">
            <ConceptCard item={materials[0]} index={0} align="left" activeStep={activeStep} setActiveStep={setActiveStep} />
            <ConceptCard item={materials[1]} index={1} align="left" activeStep={activeStep} setActiveStep={setActiveStep} />
            <ConceptCard item={materials[2]} index={2} align="left" activeStep={activeStep} setActiveStep={setActiveStep} />
          </div>
          <div className="hidden lg:flex flex-col gap-6 justify-center order-3 lg:col-span-4 h-full">
            <ConceptCard item={materials[3]} index={3} align="right" activeStep={activeStep} setActiveStep={setActiveStep} />
            <ConceptCard item={materials[4]} index={4} align="right" activeStep={activeStep} setActiveStep={setActiveStep} />
          </div>

        </div> 
      </div>
    </section>
  )
}