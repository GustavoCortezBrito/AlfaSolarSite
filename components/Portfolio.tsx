'use client'

import { motion } from 'framer-motion'
import { 
  Sun, 
  Home, 
  Building, 
  Factory,
  ArrowRight,
  Zap,
  TrendingDown
} from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      icon: Home,
      title: 'Residencial - Casa 150m²',
      location: 'Presidente Prudente/SP',
      power: '5,4 kWp',
      savings: '85%',
      description: 'Sistema residencial com 12 painéis solares, proporcionando economia significativa na conta de luz.',
      features: ['12 painéis de 450W', 'Inversor string 5kW', 'Economia mensal R$ 450']
    },
    {
      icon: Building,
      title: 'Comercial - Escritório',
      location: 'Presidente Prudente/SP',
      power: '15,8 kWp',
      savings: '90%',
      description: 'Instalação comercial com sistema de alta eficiência para redução de custos operacionais.',
      features: ['36 painéis de 440W', 'Inversor trifásico 15kW', 'Economia mensal R$ 1.200']
    },
    {
      icon: Factory,
      title: 'Industrial - Fábrica',
      location: 'Região de Presidente Prudente',
      power: '50,0 kWp',
      savings: '95%',
      description: 'Grande sistema industrial com monitoramento remoto e máxima eficiência energética.',
      features: ['110 painéis de 455W', 'Inversores trifásicos', 'Economia mensal R$ 4.500']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-orange-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-28 h-28 border border-orange-400/30 rotate-45"></div>
        <div className="absolute top-64 right-24 w-36 h-36 border border-orange-400/30 -rotate-12"></div>
        <div className="absolute bottom-40 left-40 w-32 h-32 border border-orange-400/30 rotate-12"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 border border-orange-400/30 -rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-medium mb-6"
          >
            <Sun className="w-4 h-4 mr-2" />
            Nossos Projetos
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Projetos que
            <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Transformam Vidas
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Conheça alguns dos nossos projetos de energia solar que estão gerando 
            economia e sustentabilidade para nossos clientes.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 cursor-pointer"
            >
              {/* Project Type Icon */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25"
              >
                <project.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Project Info */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-orange-600 text-sm font-medium mb-4">
                  {project.location}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {project.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <Zap className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-slate-800">{project.power}</div>
                  <div className="text-xs text-slate-600">Potência</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-green-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-slate-800">{project.savings}</div>
                  <div className="text-xs text-slate-600">Economia</div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => {
                  const element = document.querySelector('#contato')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group/btn flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors cursor-pointer"
              >
                Ver mais detalhes
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 lg:p-12 text-white shadow-2xl shadow-orange-500/25">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Seu Projeto Pode Ser o Próximo!
            </h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Faça parte da revolução da energia solar. Solicite seu orçamento 
              personalizado e comece a economizar hoje mesmo.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contato')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Solicitar Meu Orçamento
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}