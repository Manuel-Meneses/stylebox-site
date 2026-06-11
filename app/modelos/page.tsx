"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Info, Lightbulb } from "lucide-react"

// 1. BASE DE DATOS ULTRA-ESCALABLE
// Ahora cada modelo contiene sus propias 'zonasPlano' adentro. Si un modelo no tiene zonas mapeadas, podés dejar el array vacío.
const modelos = [
  {
    id: "modelo-60",
    nombre: "Línea Residencial 60m²",
    tag: "Vivienda Premium",
    precio: "$50.000.000 ARS",
    descripcion: "Nuestro módulo insignia diseñado en concepto abierto. Ideal para compartir en familia con espacios inundados de luz natural.",
    specs: { area: "60 m²", dimensiones: "12 x 4.8 x 2.90m", dormitorios: "2 Dormitorios", baños: "1 Completo" },
    imagenes: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
    ],
    thumb: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=300&auto=format&fit=crop",
    // Mapa interactivo propio de este modelo
    planoImg: "/image-plane.png",
    zonasPlano: [
      {
        id: "living", titulo: "Living – Cocina – Comedor", area: { left: "21%", top: "10%", width: "45%", height: "80%" }, 
        detalles: ["Mueble de cocina compuesto por bajo mesada, alacena y barra.", "Mesada con alzada y barra con pié en piedra.", "Grifería monocomando y Anafe eléctrico.", "Espacio para heladera y lavarropas.", "Varillado de madera, sillón y rack para tv."]
      },
      {
        id: "hab-secundaria", titulo: "Habitación Secundaria", area: { left: "1%", top: "10%", width: "20%", height: "80%" },
        detalles: ["Cama con cajoneras.", "Respaldar varillado con estante."]
      },
      {
        id: "bano", titulo: "Baño Zonificado", area: { left: "66%", top: "10%", width: "13%", height: "80%" },
        detalles: ["Completamente revestido en porcelanato.", "Artefactos sanitarios de calidad.", "Plato de ducha con mampara de vidrio."]
      },
      {
        id: "descanso", titulo: "Zona de Descanso", area: { left: "79%", top: "10%", width: "20%", height: "80%" },
        detalles: ["Camas con cajoneras.", "Respaldar con mesa de luz.", "Placar a medida.", "Preinstalación p/aire acondicionado."]
      }
    ]
  },
  {
    id: "modelo-c103",
    nombre: "Módulo C103 Compacto",
    tag: "Renta Temporaria",
    precio: "Consultar",
    descripcion: "La máxima eficiencia espacial. Un monoambiente lleno de luz natural con instalación inmediata y aislación termoacústica extrema.",
    specs: { area: "15 m²", dimensiones: "6 x 2.5 x 2.90m", dormitorios: "Monoambiente", baños: "1 Completo" },
    imagenes: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
    ],
    thumb: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=300&auto=format&fit=crop",
    planoImg: "/image-plane.png", // Reutilizo la misma imagen para que no te rompa hasta que el cliente pase planos nuevos
    zonasPlano: [
      { id: "general", titulo: "Área Integrada", area: { left: "10%", top: "10%", width: "80%", height: "80%" }, detalles: ["Espacio optimizado para Airbnb.", "Kitchenette incorporada."] }
    ]
  },
  {
    id: "modelo-ele",
    nombre: "Modelo L-Shape 90m²",
    tag: "Familiar Expandida",
    precio: "$75.000.000 ARS",
    descripcion: "Arquitectura en formato 'L' unificando tres contenedores. Separa inteligentemente la zona social del área de descanso, generando una galería exterior natural.",
    specs: { area: "90 m²", dimensiones: "Formato L", dormitorios: "3 Dormitorios", baños: "2 Baños" },
    imagenes: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4ea0a?q=80&w=2000&auto=format&fit=crop"
    ],
    thumb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=300&auto=format&fit=crop",
    planoImg: "/image-plane.png",
    zonasPlano: [{ id: "general", titulo: "Master Suite", area: { left: "10%", top: "10%", width: "80%", height: "80%" }, detalles: ["Vestidor pasante.", "Baño en suite."] }]
  },
  {
    id: "modelo-oficina",
    nombre: "Workspace Modular 30m²",
    tag: "Corporativo",
    precio: "$28.000.000 ARS",
    descripcion: "Tu oficina corporativa instalada en el terreno de tu empresa en 48hs. Diseñada para 4 puestos de trabajo gerenciales con sala de reuniones.",
    specs: { area: "30 m²", dimensiones: "12 x 2.4 x 2.90m", dormitorios: "Planta Libre", baños: "1 Toilette" },
    imagenes: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758870836-07dfec219fdf?q=80&w=2000&auto=format&fit=crop"
    ],
    thumb: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=300&auto=format&fit=crop",
    planoImg: "/image-plane.png",
    zonasPlano: [{ id: "general", titulo: "Open Space", area: { left: "10%", top: "10%", width: "80%", height: "80%" }, detalles: ["Piso técnico para cableado.", "Piel de vidrio frontal."] }]
  },
  {
    id: "modelo-refugio",
    nombre: "Refugio Patagonia 45m²",
    tag: "Aislación Extrema",
    precio: "$42.000.000 ARS",
    descripcion: "Pensado para climas hostiles. Aislación térmica triplicada, cubierta a dos aguas para nieve y aberturas de PVC tricapa. El confort absoluto en la montaña.",
    specs: { area: "45 m²", dimensiones: "9 x 4.8 x 3.50m", dormitorios: "1 Dormitorio Master", baños: "1 Completo" },
    imagenes: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop"
    ],
    thumb: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=300&auto=format&fit=crop",
    planoImg: "/image-plane.png",
    zonasPlano: [{ id: "general", titulo: "Gran Estufa", area: { left: "10%", top: "10%", width: "80%", height: "80%" }, detalles: ["Salamandra Tromen incluida.", "Aislación Poliuretano 100mm."] }]
  }
]

export default function ModelosPage() {
  const [activeModelId, setActiveModelId] = useState(modelos[0].id)
  const activeModel = modelos.find(m => m.id === activeModelId)!

  // Estado del Slider 2D
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Estado del Plano Interactivo dinámico (toma la primera zona del modelo activo)
  const [zonaActiva, setZonaActiva] = useState(activeModel.zonasPlano[0])
  const [isHoveringMap, setIsHoveringMap] = useState(false)

  // Funciones de navegación
  const nextSlide = () => setCurrentImageIndex((prev) => (prev + 1) % activeModel.imagenes.length)
  const prevSlide = () => setCurrentImageIndex((prev) => (prev - 1 + activeModel.imagenes.length) % activeModel.imagenes.length)

  const handleModelChange = (id: string) => {
    const newModel = modelos.find(m => m.id === id)!;
    setActiveModelId(id);
    setCurrentImageIndex(0);
    // Resetea la zona activa a la primera del nuevo modelo
    setZonaActiva(newModel.zonasPlano[0]);
  }

  return (
    <main className="min-h-screen bg-[#F9F9F9] flex flex-col font-sans">
      
      {/* HEADER: Con las 5 miniaturas ahora */}
      <header className="sticky top-0 z-50 bg-[#F9F9F9]/90 backdrop-blur-xl border-b border-[#111111]/5">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#111111]/60 hover:text-[#111111] transition-colors text-xs font-bold uppercase tracking-widest shrink-0">
            <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Volver</span>
          </Link>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar justify-end flex-grow ml-4">
            {modelos.map((modelo) => (
              <button 
                key={modelo.id}
                onClick={() => handleModelChange(modelo.id)}
                className={`relative shrink-0 w-16 h-10 transition-all duration-300 ${
                  activeModelId === modelo.id ? 'border-b-4 border-[#F24424] opacity-100 scale-105' : 'border border-[#111111]/10 opacity-50 hover:opacity-100'
                }`}
              >
                <img src={modelo.thumb} alt={modelo.nombre} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* SECCIÓN 1: SHOWROOM Y SLIDER */}
      <section className="container mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-12 lg:gap-0 items-start">
        {/* SLIDER */}
        <div className="w-full lg:w-[60%] h-[400px] lg:h-[600px] relative overflow-hidden bg-[#111111] group">
          <div className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {activeModel.imagenes.map((img, idx) => (
              <div key={idx} className="w-full h-full flex-shrink-0 relative">
                <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.2)] pointer-events-none"></div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-[#F24424] text-[#111111] hover:text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg -translate-x-4 group-hover:translate-x-0">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-[#F24424] text-[#111111] hover:text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg translate-x-4 group-hover:translate-x-0">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
            {activeModel.imagenes.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`h-2 rounded-full transition-all duration-500 ${idx === currentImageIndex ? "w-6 bg-white" : "w-2 bg-white/50"}`} />
            ))}
          </div>
          <div className="absolute top-6 left-6 z-30">
            <span className="bg-[#F24424] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 shadow-lg">{activeModel.tag}</span>
          </div>
        </div>

        {/* CAJA INFO */}
        <div className="w-full lg:w-[45%] lg:-ml-[5%] relative z-40 lg:mt-16">
          <div className="bg-white p-8 md:p-12 shadow-[0_20px_60px_rgba(17,17,17,0.06)] border border-[#111111]/5">
            <h1 className="text-3xl md:text-4xl font-heading font-black text-[#111111] uppercase mb-4 leading-tight">{activeModel.nombre}</h1>
            <p className="text-[#F24424] font-bold text-xl mb-6">Valor: {activeModel.precio}</p>
            <p className="text-[#111111]/70 leading-relaxed mb-8">{activeModel.descripcion}</p>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#111111]/10">
              <div><span className="block text-xs uppercase text-[#111111]/40 mb-1">Superficie</span><span className="font-bold">{activeModel.specs.area}</span></div>
              <div><span className="block text-xs uppercase text-[#111111]/40 mb-1">Dimensión</span><span className="font-bold">{activeModel.specs.dimensiones}</span></div>
              <div><span className="block text-xs uppercase text-[#111111]/40 mb-1">Distribución</span><span className="font-bold">{activeModel.specs.dormitorios}</span></div>
              <div><span className="block text-xs uppercase text-[#111111]/40 mb-1">Sanitarios</span><span className="font-bold">{activeModel.specs.baños}</span></div>
            </div>
            <Link href="https://wa.me/5491166085926" target="_blank" className="mt-10 w-full flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#F24424] transition-colors text-white h-14 font-bold uppercase tracking-widest text-sm">
              Agendar Visita <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: PLANO INTERACTIVO SIN LAYOUT SHIFT */}
      <section className="bg-white border-t border-[#111111]/5 py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#F24424] text-xs font-bold uppercase tracking-widest mb-4 block">Ingeniería del Espacio</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-[#111111] uppercase mb-6">
              Plano Interactivo
            </h2>
            <p className="text-[#111111]/60 text-lg">
              Desglosá milímetro a milímetro la distribución de tu futuro {activeModel.nombre}.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* EL MAPA (Se ajusta al modelo activo) */}
            <div className="w-full lg:w-[60%]">
              <div className="w-full overflow-x-auto pb-4 no-scrollbar">
                <div 
                  className="relative min-w-[700px] w-full bg-[#F9F9F9] p-4 rounded-lg"
                  onMouseEnter={() => setIsHoveringMap(true)}
                  onMouseLeave={() => setIsHoveringMap(false)}
                >
                 <img 
                    src={activeModel.planoImg} 
                    alt="Plano Técnico" 
                    className="w-full h-auto object-contain border-2 border-[#111111]/5 shadow-sm mix-blend-multiply"
                  />

                  {/* Zonas de Clic (Hotspots Absolutos) */}
                  {activeModel.zonasPlano.map((zona) => {
                    const isActive = zona.id === zonaActiva.id;
                    return (
                      <div
                        key={zona.id}
                        // ELIMINAMOS EL onMouseEnter. Ahora la selección se bloquea solo con el clic.
                        onClick={() => setZonaActiva(zona)}
                        className={`absolute cursor-pointer transition-all duration-300 border-2 ${
                          isActive 
                            ? "bg-[#F24424]/30 border-[#F24424] shadow-[0_0_20px_rgba(242,68,36,0.4)] z-20 backdrop-blur-[1px]" 
                            : "bg-transparent border-transparent hover:bg-white/40 hover:border-white/80 z-10"
                        }`}
                        style={{ left: zona.area.left, top: zona.area.top, width: zona.area.width, height: zona.area.height }}
                      >
                        {/* Indicador sutil para invitar al clic en las zonas no activas */}
                        {!isActive && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#F24424] rounded-full animate-pulse opacity-60"></div>
                        )}
                      </div>
                    )
                  })} 
                </div>
              </div>
            </div>

            {/* LA SOLUCIÓN AL LAYOUT SHIFT: CAJA FIJA (h-[500px]) CON SCROLL INTERNO */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-[#111111] text-white p-8 shadow-2xl relative flex flex-col h-[450px] lg:h-[500px]">
                
                {/* Cabecera Fija */}
                <div className="border-b border-white/20 pb-4 mb-6 shrink-0">
                  <span className="flex items-center gap-2 text-[#F24424] text-xs font-bold uppercase tracking-widest mb-4">
                    <Info className="w-4 h-4" /> Detalle de Zona
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-black uppercase">
                    {zonaActiva?.titulo || "Seleccione una Zona"}
                  </h3>
                </div>

                {/* Contenido Dinámico con Scroll Oculto (Adiós saltos de pantalla) */}
                <div key={zonaActiva?.id} className="animate-in slide-in-from-right-4 fade-in duration-300 flex-grow overflow-y-auto no-scrollbar pr-2">
                  <ul className="space-y-4">
                    {zonaActiva?.detalles.map((detalle, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#F24424] rounded-full mt-1.5 shrink-0"></div>
                        <span className="leading-relaxed">{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pie Fijo */}
                <div className="shrink-0 mt-6 pt-6 border-t border-white/20 bg-[#1a1a1a] p-4 rounded-sm">
                  <span className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest mb-2">
                    <Lightbulb className="w-4 h-4 text-[#F24424]" /> Iluminación
                  </span>
                  <p className="text-xs text-gray-400">
                    Spots de iluminación LED instalados en todas las zonas.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clase utilitaria para matar la barra de scroll dentro del panel negro sin perder la función */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  )
}