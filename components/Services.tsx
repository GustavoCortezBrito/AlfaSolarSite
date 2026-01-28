'use client'

import { motion } from 'framer-motion'
import { 
  Sun, 
  Calculator, 
  FileText, 
  Wrench, 
  Settings, 
  HeadphonesIcon,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: 'Orçamento Personalizado',
      description: 'Análise detalhada do seu consumo e dimensionamento ideal do sistema solar.',
      features: ['Análise de consumo', 'Cálculo de economia', 'Proposta sem compromisso'],
      color: 'from-amber-400 to-yellow-400'
    },
    {
      icon: FileText,
      title: 'Projeto Técnico',
      description: 'Desenvolvimento de projeto técnico completo e documentação para aprovação.',
      features: ['Projeto elétrico', 'Memorial descritivo', 'Aprovação na concessionária'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Sun,
      title: 'Fornecimento de Equipamentos',
      description: 'Painéis solares, inversores e componentes de alta qualidade e eficiência.',
      features: ['Painéis de primeira linha', 'Inversores certificados', 'Garantia estendida'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Wrench,
      title: 'Instalação Profissional',
      description: 'Instalação completa realizada por equipe técnica especializada e certificada.',
      features: ['Equipe certificada', 'Instalação segura', 'Testes de funcionamento'],
      color: 'from-purple-400 to-violet-400'
    },
    {
      icon: Settings,
      title: 'Comissionamento',
      description: 'Configuração, testes e ativação do sistema junto à concessionária de energia.',
      features: ['Configuração completa', 'Testes de performance', 'Ativação do sistema'],
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: HeadphonesIcon,
      title: 'Suporte Técnico',
      description: 'Acompanhamento e suporte técnico especializado durante toda vida útil do sistema.',
      features: ['Monitoramento remoto', 'Manutenção preventiva', 'Suporte 24/7'],
      color: 'from-indigo-400 to-blue-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="servicos" className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200/50 text-amber-700 text-sm font-medium mb-8 shadow-lg"
          >
            <Sun className="w-4 h-4 mr-2" />
            Nossos Serviços
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Soluções Completas em
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent mt-2">
              Energia Solar Fotovoltaica
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Do orçamento à instalação, oferecemos um serviço completo e personalizado 
            para você começar a economizar com energia solar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200/50 cursor-pointer"
            >
              {/* Icon */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 shadow-lg`}
              >
                <service.icon className="w-full h-full text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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
                className="group/btn flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors cursor-pointer"
              >
                Saiba mais
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
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Pronto para Economizar com Energia Solar?
              </h3>
              <p className="text-amber-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Solicite uma simulação gratuita e descubra quanto você pode economizar 
                instalando energia solar na sua residência ou empresa.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contato')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-amber-50 transition-colors shadow-lg"
              >
                Solicitar Orçamento Gratuito
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}