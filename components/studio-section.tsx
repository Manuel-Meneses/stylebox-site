import { Factory, Zap, Ruler, ShieldCheck } from "lucide-react"
import Reveal from "./reveal"

const factoryFeatures = [
  {
    icon: <Factory className="w-10 h-10 mb-4 text-[#C2523A]" />,
    title: "Planta de 4.000 m²",
    description: "Operamos en una superficie cubierta propia equipada con tecnología de punta. Somos fabricantes directos, lo que nos permite controlar cada milímetro del proceso."
  },
  {
    icon: <Ruler className="w-10 h-10 mb-4 text-[#C2523A]" />,
    title: "Fabricación Integral",
    description: "No tercerizamos. Producimos nuestras propias aberturas de aluminio, PVC y amoblamientos con mano de obra altamente especializada en cada etapa."
  },
  {
    icon: <Zap className="w-10 h-10 mb-4 text-[#C2523A]" />,
    title: "Instalaciones Normalizadas",
    description: "Las redes eléctricas y de agua se ejecutan exclusivamente con materiales bajo norma. Todo el sistema es rigurosamente verificado y probado en fábrica antes de despachar."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-[#C2523A]" />,
    title: "Certificación y Seguridad",
    description: "Garantizamos la máxima durabilidad de tu espacio. Todas las instalaciones son ejecutadas por especialistas calificados y se entregan con sus respectivos certificados."
  }
]

export default function StudioSection() {
  return (
    <section id="la-fabrica" className="py-24 bg-white relative overflow-hidden">
      {/* Fondo con patrón de grilla arquitectónica muy sutil */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Columna Izquierda: Texto fijo (Sticky) */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <Reveal type="fade-right" delay={0}>
                <span className="text-[#C2523A] font-bold tracking-widest uppercase text-sm mb-4 block">
                  Infraestructura
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                  EL RESPALDO DE <br/>NUESTRA FÁBRICA.
                </h2>
              </Reveal>
              <Reveal type="fade-right" delay={150}>
                <p className="text-lg text-muted-foreground font-sans mb-8">
                  Un diseño moderno no es nada sin una ejecución impecable. Detrás de cada módulo Stylebox hay una cadena de producción estandarizada y materiales de calidad premium.
                </p>
              </Reveal>
              {/* Elemento visual decorativo de arquitectura */}
              <div className="w-20 h-2 bg-[#C2523A]"></div>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas */}
          <div className="lg:w-2/3">
            {/* CORRECCIÓN ACÁ: md:overflow-visible agregado para matar las barras de scroll en desktop */}
            <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0">
              
              {factoryFeatures.map((feature, index) => (
                <Reveal 
                  key={index} 
                  type="fade-up" 
                  delay={index * 150} 
                  className="w-[85vw] md:w-auto shrink-0 snap-center h-full"
                >
                  {/* CORRECCIÓN ACÁ: Eliminamos las clases redundantes de ancho y snap. Se mantiene la altura al 100% */}
                  <div className="group [perspective:1000px] h-full">
                    <div className="bg-white p-8 h-full border border-border transition-all duration-500 ease-out 
                                    md:group-hover:[transform:rotateX(5deg)_rotateY(-10deg)_translateY(-5px)_scale(1.02)] 
                                    md:group-hover:shadow-[20px_20px_0px_0px_rgba(194,82,58,0.08)]
                                    md:group-hover:border-[#C2523A]/30">
                      {feature.icon}
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 uppercase tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground font-sans leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}

            </div>
          </div> 

        </div>
      </div>
    </section>
  )
}