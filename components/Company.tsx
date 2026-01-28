'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Building2, 
  Users, 
  Award, 
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function Company() {
  const features = [
    {
      icon: Building2,
      title: 'Estrutura Completa',
      description: 'Escritório equipado e equipe técnica especializada para atender todos os tipos de projeto.'
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Profissionais certificados e em constante atualização com as tecnologias mais avançadas.'
    },
    {
      icon: Award,
      title: 'Certificações',
      description: 'Empresa certificada e credenciada junto aos principais fabricantes de equipamentos.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscando as melhores soluções e tecnologias mais eficientes do mercado.'
    }
  ]

  return (
    <section id="empresa" className="py-20 lg:py-32 bg-white relative overflow-hidden">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-medium mb-6"
          >
            <Building2 className="w-4 h-4 mr-2" />
            Nossa Empresa
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Conheça a
            <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Alfa Solar
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Uma empresa jovem e dinâmica, especializada em energia solar fotovoltaica, 
            com foco na excelência e satisfação do cliente.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Company Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-orange-200 shadow-2xl relative bg-gradient-to-br from-orange-50 to-yellow-50">
              {/* Placeholder for company image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-24 h-24 text-orange-500 mx-auto mb-4" />
                  <p className="text-slate-700 font-semibold text-lg mb-2">
                    Alfa Solar
                  </p>
                  <p className="text-slate-500 text-sm">
                    Nossa sede em Presidente Prudente/SP
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400/20 rounded-full"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400/20 rounded-full"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              Compromisso com a Excelência
            </h3>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base mb-8">
              <p>
                A Alfa Solar é uma empresa especializada em energia solar fotovoltaica, 
                nascida da experiência e tradição da Alfa Esquadrias no mercado de 
                projetos e instalações.
              </p>
              
              <p>
                Nossa missão é democratizar o acesso à energia limpa e renovável, 
                oferecendo soluções personalizadas que atendem desde residências 
                até grandes complexos industriais.
              </p>
              
              <p>
                Trabalhamos com os melhores equipamentos do mercado e nossa equipe 
                técnica é constantemente capacitada para oferecer sempre o melhor 
                serviço aos nossos clientes.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(251, 146, 60, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contato')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="text-center group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}