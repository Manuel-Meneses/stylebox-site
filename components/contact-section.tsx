"use client"

import Link from "next/link"
import { Instagram, ArrowRight, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contacto" className="relative bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden flex flex-col">
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C2523A] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[#C2523A] font-bold tracking-widest uppercase text-sm mb-6 block">
                Contacto Comercial
              </span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight leading-[0.9] mb-8">
                Hagamos <br />
                <span className="text-zinc-500">Tu Proyecto</span> <br />
                Realidad.
              </h2>
              <p className="text-xl text-zinc-400 font-sans max-w-md mb-12">
                Consultá por nuestros modelos estandarizados o desarrollos a medida. Nuestro equipo técnico está listo para asesorarte.
              </p>
            </div>

            <div className="flex flex-col gap-8 mt-8 lg:mt-0">
              <Link href="https://wa.me/5491166085926" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 w-max">
                <div className="w-16 h-16 rounded-none border border-zinc-800 flex items-center justify-center bg-zinc-900 group-hover:bg-[#C2523A] group-hover:border-[#C2523A] transition-all duration-300">
                  <Phone className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-1">WhatsApp Directo</p>
                  <p className="text-2xl font-heading font-bold group-hover:text-[#C2523A] transition-colors">+54 9 11 6608-5926</p>
                </div>
              </Link>

              <Link href="https://www.instagram.com/stylebox.modular/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 w-max">
                <div className="w-16 h-16 rounded-none border border-zinc-800 flex items-center justify-center bg-zinc-900 group-hover:bg-[#C2523A] group-hover:border-[#C2523A] transition-all duration-300">
                  <Instagram className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-1">Instagram Oficial</p>
                  <p className="text-2xl font-heading font-bold group-hover:text-[#C2523A] transition-colors">@stylebox.modular</p>
                </div>
              </Link>

              <div className="flex items-center gap-6 w-max mt-4">
                <div className="w-16 h-16 rounded-none border border-zinc-900 flex items-center justify-center bg-transparent">
                  <MapPin className="w-6 h-6 text-[#C2523A]" />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-1">Planta de Producción</p>
                  <p className="text-lg text-zinc-300 font-sans">Costasacate, Córdoba, Argentina<br/>(4.000 m² de infraestructura)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C2523A] to-transparent"></div>
            <h3 className="text-3xl font-heading font-bold mb-8 uppercase tracking-wide">
              Solicitar Cotización
            </h3>
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input type="text" id="nombre" placeholder="Nombre" className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-zinc-700 text-white font-sans text-lg appearance-none focus:outline-none focus:ring-0 focus:border-[#C2523A] peer transition-colors" />
                <label htmlFor="nombre" className="absolute text-zinc-500 text-lg font-sans duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C2523A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre Completo</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="tel" id="telefono" placeholder="+54 9 11...." className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-zinc-700 text-white font-sans text-lg appearance-none focus:outline-none focus:ring-0 focus:border-[#C2523A] peer transition-colors" />
                  <label htmlFor="telefono" className="absolute text-zinc-500 text-lg font-sans duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C2523A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono</label>
                </div>
                <div className="relative">
                  <input type="text" id="ubicacion" placeholder="Localidad" className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-zinc-700 text-white font-sans text-lg appearance-none focus:outline-none focus:ring-0 focus:border-[#C2523A] peer transition-colors" />
                  <label htmlFor="ubicacion" className="absolute text-zinc-500 text-lg font-sans duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C2523A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Localidad del Proyecto</label>
                </div>
              </div>
              <div className="relative mt-4">
                <textarea id="mensaje" rows={4} placeholder="Contanos sobre tu proyecto..." className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-zinc-700 text-white font-sans text-lg appearance-none focus:outline-none focus:ring-0 focus:border-[#C2523A] peer transition-colors resize-none"></textarea>
                <label htmlFor="mensaje" className="absolute text-zinc-500 text-lg font-sans duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C2523A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contanos sobre tu proyecto...</label>
              </div>
              <button type="button" className="group w-full flex items-center justify-between bg-[#C2523A] text-white px-8 py-6 uppercase tracking-widest font-bold text-sm hover:bg-[#a3442f] transition-colors mt-4">
                <span>Enviar Consulta</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>

     <div className="w-full h-[400px] border-t border-zinc-800 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
  <iframe 
    src="https://maps.google.com/maps?q=Costa%20Sacate,%20C%C3%B3rdoba,%20Argentina&t=&z=14&ie=UTF8&iwloc=&output=embed" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen={false} 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </section>
  )
}