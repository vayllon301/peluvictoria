'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  };

  const services = [
    {
      category: "Servicios de Peluquería",
      items: [
        { name: "Cortes", desc: "Cortes personalizados para todas las edades con recomendaciones expertas" },
        { name: "Color", desc: "Coloración profesional con resultados naturales y técnicas de tendencia" },
        { name: "Mechas y Reflejos", desc: "Diversos métodos de aplicación: papel aluminio, gorro, mechas californianas" },
        { name: "Ondas y Rizos", desc: "Peinados con volumen siguiendo las últimas tendencias de moda" },
        { name: "Ocasiones Especiales", desc: "Recogidos elegantes para bodas, comuniones y eventos" },
        { name: "Extensiones", desc: "Extensiones de cabello natural en diversos niveles de calidad" },
        { name: "Alisado Permanente", desc: "Tratamientos personalizados que producen cabello sedoso y reconstruido" },
        { name: "Tratamientos Capilares", desc: "Rituales Kerastase y programas de diagnóstico para problemas del cabello" },
        { name: "Prótesis Capilares", desc: "Soluciones capilares naturales personalizadas con programas de mantenimiento" },
      ]
    },
    {
      category: "Servicios de Spa",
      items: [
        { name: "Circuitos de Agua", desc: "Experiencias terapéuticas de agua para relajación completa" },
        { name: "Masajes", desc: "Tratamientos de masaje profesional adaptados a tus necesidades" },
        { name: "Zonas de Agua", desc: "Espacios acuáticos diseñados para tu bienestar" },
        { name: "Tratamientos Corporales", desc: "Cuidado corporal lujoso y rituales de rejuvenecimiento" },
        { name: "Tratamientos Faciales", desc: "Tratamientos avanzados de cuidado de la piel para una tez radiante" },
        { name: "Rituales Spa", desc: "Experiencias completas de bienestar que combinan múltiples tratamientos" },
      ]
    }
  ];

  return (
    <div className="relative bg-cream">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-md border-b border-soft-gray"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-display text-3xl font-bold text-forest-green"
          >
            Victòria
          </motion.div>
          <div className="hidden md:flex gap-8 font-sans text-sm tracking-wide">
            <a href="#services" className="text-charcoal hover:text-warm-gold transition-colors duration-300">Servicios</a>
            <a href="#about" className="text-charcoal hover:text-warm-gold transition-colors duration-300">Nosotros</a>
            <a href="#contact" className="text-charcoal hover:text-warm-gold transition-colors duration-300">Contacto</a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-forest-green text-cream text-sm tracking-wider hover:bg-deep-forest transition-colors duration-300"
          >
            Reservar Cita
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 gradient-overlay opacity-95" />

        {/* Image placeholder */}
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 flex items-center justify-center text-soft-gray/20 font-sans text-sm">
            [Imagen de Fondo Hero]
          </div>
        </div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-warm-gold font-sans text-sm tracking-[0.3em] uppercase">Peluquería y Spa de Lujo</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-7xl md:text-8xl lg:text-9xl font-light text-cream mb-8 leading-[0.95]"
          >
            Victòria
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-display text-2xl md:text-3xl text-cream/90 mb-12 max-w-2xl mx-auto font-light italic"
          >
            Donde la elegancia se encuentra con la excelencia
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gold-gradient text-white font-sans text-sm tracking-wider hover:shadow-lg transition-shadow duration-300"
            >
              Explorar Servicios
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-cream text-cream font-sans text-sm tracking-wider hover:bg-cream hover:text-forest-green transition-colors duration-300"
            >
              Reservar Cita
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-cream/60 font-sans text-xs tracking-widest uppercase">Desliza</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-cream/40"
          />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 lg:px-12 bg-light-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-warm-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Nuestros Servicios</span>
            <h2 className="font-display text-6xl md:text-7xl font-light text-forest-green mb-6">
              Experiencias Exclusivas
            </h2>
            <p className="font-sans text-lg text-charcoal/70 max-w-2xl mx-auto">
              Desde cortes de precisión hasta rituales de spa rejuvenecedores, cada servicio está diseñado para elevar tu bienestar
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {services.map((service, idx) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="mb-12">
                  <div className="w-16 h-px bg-warm-gold mb-6" />
                  <h3 className="font-display text-4xl font-light text-forest-green mb-4">
                    {service.category}
                  </h3>
                </div>

                <div className="space-y-8">
                  {service.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: itemIdx * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-warm-gold text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                        <div className="flex-1">
                          <h4 className="font-display text-2xl font-light text-charcoal mb-2 group-hover:text-warm-gold transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="font-sans text-sm text-charcoal/60 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Image Section */}
      <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-deep-forest">
          <div className="absolute inset-0 flex items-center justify-center text-soft-gray/10 font-sans text-sm">
            [Imagen Interior del Salón]
          </div>
        </div>
        <div className="absolute inset-0 bg-forest-green/60 backdrop-blur-[2px]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-full flex items-center justify-center text-center px-6"
        >
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-light text-cream mb-6 italic">
              Creado con Precisión
            </h2>
            <p className="font-sans text-lg text-cream/80 max-w-xl mx-auto">
              Cada detalle importa. Cada momento está diseñado para tu transformación.
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-3/4 bg-soft-gray">
                <div className="absolute inset-0 flex items-center justify-center text-charcoal/20 font-sans text-sm">
                  [Imagen Sobre Nosotros]
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pl-12"
            >
              <span className="text-warm-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Casi 40 Años de Historia</span>
              <h2 className="font-display text-5xl md:text-6xl font-light text-forest-green mb-8">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-charcoal/70 font-sans leading-relaxed">
                <p>
                  Situada en la pequeña población de Valldoreix, la peluquería Victoria inició su recorrido hace casi 40 años. Una pequeña pero entrañable estancia con un lavacabezas y poco más, fue creciendo poco a poco gracias a la confianza y fidelidad de nuestros clientes.
                </p>
                <p>
                  Con el tiempo, aquella pequeña estancia se hizo grande y para satisfacer las necesidades de todos vosotros se comenzaron a introducir nuevos servicios. De esta manera, en el año 2003 se inauguró el Spa Victoria con una marcada filosofía por los productos naturales y tradicionales.
                </p>
                <p>
                  Actualmente, el Centro de Salud y Belleza Victoria continúa creciendo y mirando hacia adelante para dar lo mejor que tenemos a todos vosotros. Eso sí, sin olvidarnos de aquella pequeña estancia donde todo comenzó.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-forest-green/20">
                <h3 className="font-display text-3xl font-light text-forest-green mb-6">Nuestra Filosofía</h3>
                <div className="space-y-4 text-charcoal/70 font-sans leading-relaxed">
                  <p>
                    En el Centro de Salud y Belleza Victoria sentimos que lo más importante es vuestra confianza y satisfacción. Por eso hacemos una clara apuesta por ofreceros la mejor calidad tanto en el servicio especializado como en los productos.
                  </p>
                  <p>
                    Para hacerlo posible, creemos en una atención individualizada, en la cual podamos atender cada cliente teniendo presentes sus características particulares, y en la colaboración de las mejores marcas del mercado, que garantizan los mejores resultados.
                  </p>
                  <p className="text-forest-green/90 font-medium">
                    Tenemos mucho para ofrecerte, por eso te invitamos a nuestro centro, para asesorarte y darte toda aquella información que necesites sin ningún compromiso.
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-forest-green text-cream font-sans text-sm tracking-wider hover:bg-deep-forest transition-colors duration-300"
              >
                Conocer Más
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-forest-green text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-warm-gold font-sans text-sm tracking-[0.3em] uppercase mb-6 block">Contáctanos</span>
            <h2 className="font-display text-6xl md:text-7xl font-light mb-8">
              Comienza Tu Viaje
            </h2>
            <p className="font-sans text-lg text-cream/80 mb-12 max-w-2xl mx-auto">
              Reserva tu cita hoy y experimenta la combinación perfecta de arte capilar y lujo spa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-12 mb-16"
          >
            <div>
              <div className="w-12 h-12 border border-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-warm-gold text-xl">📍</span>
              </div>
              <h4 className="font-display text-xl mb-2">Ubicación</h4>
              <p className="font-sans text-sm text-cream/70 leading-relaxed">
                Avinguda Mas Fuster 113<br />
                08197 Valldoreix
              </p>
            </div>
            <div>
              <div className="w-12 h-12 border border-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-warm-gold text-xl">📞</span>
              </div>
              <h4 className="font-display text-xl mb-2">Teléfono</h4>
              <p className="font-sans text-sm text-cream/70">
                <a href="tel:+34936743721" className="hover:text-warm-gold transition-colors">
                  93 674 37 21
                </a>
              </p>
            </div>
            <div>
              <div className="w-12 h-12 border border-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-warm-gold text-xl">✉️</span>
              </div>
              <h4 className="font-display text-xl mb-2">Email</h4>
              <p className="font-sans text-sm text-cream/70">
                <a href="mailto:info@spavictoria.com" className="hover:text-warm-gold transition-colors">
                  info@spavictoria.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Horarios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16 bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-lg p-8 max-w-2xl mx-auto"
          >
            <h3 className="font-display text-3xl font-light text-center mb-8">Horarios</h3>
            <div className="space-y-4 font-sans text-sm">
              <div className="flex justify-between items-center border-b border-cream/10 pb-3">
                <span className="text-cream/70">Lunes</span>
                <span className="text-cream font-medium">15:00h – 21:00h</span>
              </div>
              <div className="flex justify-between items-center border-b border-cream/10 pb-3">
                <span className="text-cream/70">Martes – Viernes</span>
                <span className="text-cream font-medium">10:00h – 21:00h</span>
              </div>
              <div className="flex justify-between items-center border-b border-cream/10 pb-3">
                <span className="text-cream/70">Sábados</span>
                <span className="text-cream font-medium">10:00h – 14:00h</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-cream/70">Domingos</span>
                <span className="text-cream/50 italic">Cerrado</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gold-gradient text-white font-sans text-sm tracking-wider hover:shadow-lg transition-shadow duration-300"
            >
              Reservar Cita
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-cream text-cream font-sans text-sm tracking-wider hover:bg-cream hover:text-forest-green transition-colors duration-300"
            >
              Suscríbete al Newsletter
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-deep-forest text-cream/60 border-t border-cream/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-display text-2xl text-cream">Victòria</div>
            <div className="flex gap-8 font-sans text-sm">
              <a href="https://perruqueriavictoria.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-gold transition-colors">
                Sitio Web
              </a>
              <a href="https://www.facebook.com/perruqueriavictoria/" target="_blank" rel="noopener noreferrer" className="hover:text-warm-gold transition-colors">Facebook</a>
              <a href="#" className="hover:text-warm-gold transition-colors">Instagram</a>
            </div>
            <div className="font-sans text-sm">
              © 2026 Victòria Spa & Perruqueria
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
