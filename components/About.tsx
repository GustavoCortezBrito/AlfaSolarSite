'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Users, 
  Award, 
  Clock, 
  MapPin,
  CheckCircle,
  Star,
  Target,
  Heart,
  Sun
} from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: Users,
      number: '200+',
      label: 'Sistemas Instalados',
      description: 'Projetos de energia solar entregues'
    },
    {
      icon: Clock,
      number: '3+',
      label: 'Anos de Experiência',
      description: 'Especialização em energia solar'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Satisfação Garantida',
      description: 'Compromisso com a excelência'
    },
    {
      icon: MapPin,
      number: '30+',
      label: 'Cidades Atendidas',
      description: 'Cobertura em toda região'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Eficiência',
      description: 'Sistemas dimensionados com máxima eficiência energética e retorno do investimento.'
    },
    {
      icon: Heart,
      title: 'Sustentabilidade',
      description: 'Compromisso com o meio ambiente através de energia limpa e renovável.'
    },
    {
      icon: Star,
      title: 'Qualidade',
      description: 'Equipamentos de primeira linha e instalação com os mais altos padrões de qualidade.'
    }
  ]

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
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
            Sobre a Alfa Solar
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Pioneiros em Energia Solar
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent mt-2">
              em Presidente Prudente
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            A Alfa Solar nasceu da visão de democratizar o acesso à energia limpa e renovável, 
            oferecendo soluções personalizadas em energia solar fotovoltaica.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Nossa Missão
            </h3>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Como braço especializado da Alfa Esquadrias, a Alfa Solar combina a experiência 
                consolidada em projetos e instalações com a expertise específica em energia solar 
                fotovoltaica.
              </p>
              
              <p>
                Nosso objetivo é tornar a energia solar acessível para residências, comércios e 
                indústrias, proporcionando economia significativa na conta de luz e contribuindo 
                para um futuro mais sustentável.
              </p>
              
              <p>
                Utilizamos apenas equipamentos de primeira linha, com certificações internacionais, 
                e nossa equipe técnica é constantemente capacitada nas mais modernas tecnologias 
                do setor fotovoltaico.
              </p>
            </div>

            {/* Features List */}
            <div className="mt-8 space-y-4">
              {[
                'Equipamentos com certificação internacional',
                'Equipe técnica especializada e certificada',
                'Projetos personalizados para cada necessidade',
                'Garantia estendida e suporte técnico completo'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Solar Installation Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative bg-gradient-to-br from-amber-50 to-yellow-50">
              {/* Placeholder for solar installation image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Sun className="w-24 h-24 text-amber-500 mx-auto mb-4" />
                  <p className="text-slate-800 font-semibold text-xl mb-2">
                    Instalação Solar
                  </p>
                  <p className="text-slate-600">
                    Sistemas fotovoltaicos de alta eficiência
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="text-center group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-slate-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-100 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Os princípios que guiam nosso trabalho na transição para energia limpa e sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-200 group-hover:bg-gradient-to-br group-hover:from-amber-200 group-hover:to-yellow-200 transition-all duration-300 shadow-sm"
                >
                  <value.icon className="w-8 h-8 text-amber-600" />
                </motion.div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}