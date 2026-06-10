import Hero from "@/components/hero"
import PressBanner from "@/components/press-banner"
import StudioSection from "@/components/studio-section"
import ProjectsSection from "@/components/projects-section"
import CompactModels from "@/components/compact-models"
import ApproachSection from "@/components/approach-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* 1. Impacto visual y venta emocional */}
      <Hero />
      
      {/* 2. Prueba Social y FOMO inmediatamente después */}
      <PressBanner />
      
      {/* 3. Infraestructura y seriedad de la empresa */}
      <StudioSection />
      
      {/* 4. El Producto Estrella (60m2) */}
      <ProjectsSection />
      
      {/* 5. Versatilidad (15m2) e Interiorismo sacado de Instagram */}
      <CompactModels />
      
      {/* 6. Especificaciones técnicas y Cubo 3D interactivo */}
      <ApproachSection />
      
      {/* 7. Cierre de venta, Formulario, Mapa y Redes */}
      <ContactSection />

      <Footer />
    </main>
  )
}