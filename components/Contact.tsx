'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Instagram,
  MessageCircle,
  User,
  FileText,
  Sun
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { name, phone, email, service, message } = formData
    
    // Validação básica
    if (!name || !phone || !email || !message) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // 1. Enviar por email via FormSubmit
      const formSubmitData = new FormData()
      formSubmitData.append('name', name)
      formSubmitData.append('phone', phone)
      formSubmitData.append('email', email)
      formSubmitData.append('service', service || 'Não especificado')
      formSubmitData.append('message', message)
      formSubmitData.append('_subject', `Novo Lead Alfa Solar - ${name} - ${service || 'Serviço não especificado'}`)
      formSubmitData.append('_template', 'table')
      formSubmitData.append('_captcha', 'false')
      
      const response = await fetch('https://formsubmit.co/gustavocortezdev@gmail.com', {
        method: 'POST',
        body: formSubmitData
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        
        // 2. Abrir WhatsApp após envio bem-sucedido
        setTimeout(() => {
          let whatsappMessage = `Olá! Gostaria de solicitar informações sobre energia solar.\n\n`
          whatsappMessage += `*Nome:* ${name}\n`
          whatsappMessage += `*Telefone:* ${phone}\n`
          whatsappMessage += `*E-mail:* ${email}\n`
          if (service) {
            whatsappMessage += `*Serviço de Interesse:* ${service}\n`
          }
          whatsappMessage += `*Mensagem:* ${message}`
          
          const encodedMessage = encodeURIComponent(whatsappMessage)
          const whatsappUrl = `https://wa.me/5518996976413?text=${encodedMessage}`
          
          window.open(whatsappUrl, '_blank')
        }, 1000)
        
        // Limpar formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
        
      } else {
        throw new Error('Erro no envio')
      }
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
      
      // Mesmo com erro no email, ainda abre o WhatsApp
      let whatsappMessage = `Olá! Gostaria de solicitar informações sobre energia solar.\n\n`
      whatsappMessage += `*Nome:* ${name}\n`
      whatsappMessage += `*Telefone:* ${phone}\n`
      whatsappMessage += `*E-mail:* ${email}\n`
      if (service) {
        whatsappMessage += `*Serviço de Interesse:* ${service}\n`
      }
      whatsappMessage += `*Mensagem:* ${message}`
      
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/5518996976413?text=${encodedMessage}`
      
      window.open(whatsappUrl, '_blank')
    } finally {
      setIsSubmitting(false)
      
      // Reset status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone 1',
      info: '(18) 99697-6413',
      link: 'tel:+5518996976413',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'Telefone 2',
      info: '(18) 99671-8920',
      link: 'tel:+5518996718920',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(18) 99697-6413',
      link: 'https://wa.me/5518996976413',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'E-mail Atendimento',
      info: 'atendimentoalfasolar@gmail.com',
      link: 'mailto:atendimentoalfasolar@gmail.com',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Mail,
      title: 'E-mail Vendas',
      info: 'vendasalfasolar@gmail.com',
      link: 'mailto:vendasalfasolar@gmail.com',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      info: '@alfasolar',
      link: 'https://www.instagram.com/alfasolar/',
      color: 'from-pink-500 to-purple-500'
    }
  ]

  const businessHours = [
    { day: 'Segunda - Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: 'Fechado' },
    { day: 'Domingo', hours: 'Fechado' }
  ]

  const services = [
    'Orçamento Personalizado',
    'Projeto Técnico',
    'Fornecimento de Equipamentos',
    'Instalação Profissional',
    'Comissionamento',
    'Suporte Técnico',
    'Outro'
  ]

  return (
    <section id="contato" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-24 left-24 w-36 h-36 border border-amber-400/20 rotate-45"></div>
        <div className="absolute top-56 right-32 w-28 h-28 border border-yellow-400/20 -rotate-12"></div>
        <div className="absolute bottom-48 left-16 w-32 h-32 border border-amber-400/20 rotate-12"></div>
        <div className="absolute bottom-24 right-40 w-40 h-40 border border-yellow-400/20 -rotate-45"></div>
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-sm font-medium mb-8 shadow-lg"
          >
            <Sun className="w-4 h-4 mr-2" />
            Entre em Contato
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Vamos Conversar Sobre
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent mt-2">
              Seu Projeto Solar
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Estamos prontos para transformar sua energia em economia. Entre em contato 
            conosco e receba um orçamento personalizado de energia solar sem compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Solicite seu Orçamento Solar
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors text-slate-900 placeholder-slate-500"
                          placeholder="Seu nome completo"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        E-mail *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors text-slate-900 placeholder-slate-500"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Telefone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors text-slate-900 placeholder-slate-500"
                          placeholder="(18) 99999-9999"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                        Serviço de Interesse
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors appearance-none text-slate-900"
                        >
                          <option value="" className="bg-white text-slate-900">Selecione um serviço</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-white text-slate-900">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors resize-vertical text-slate-900 placeholder-slate-500"
                      placeholder="Descreva seu interesse em energia solar, consumo mensal, tipo de imóvel..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mb-4"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar por Email + WhatsApp</span>
                      </>
                    )}
                  </motion.button>

                  {/* Botão alternativo apenas WhatsApp */}
                  <motion.button
                    type="button"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const { name, phone, email, service, message } = formData
                      
                      if (!name || !phone || !message) {
                        alert('Por favor, preencha pelo menos Nome, Telefone e Mensagem.')
                        return
                      }
                      
                      let whatsappMessage = `Olá! Gostaria de solicitar informações sobre energia solar.\n\n`
                      whatsappMessage += `*Nome:* ${name}\n`
                      whatsappMessage += `*Telefone:* ${phone}\n`
                      if (email) {
                        whatsappMessage += `*E-mail:* ${email}\n`
                      }
                      if (service) {
                        whatsappMessage += `*Serviço de Interesse:* ${service}\n`
                      }
                      whatsappMessage += `*Mensagem:* ${message}`
                      
                      const encodedMessage = encodeURIComponent(whatsappMessage)
                      const whatsappUrl = `https://wa.me/5518996976413?text=${encodedMessage}`
                      
                      window.open(whatsappUrl, '_blank')
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Apenas WhatsApp</span>
                  </motion.button>
                </form>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl"
                  >
                    <p className="text-green-400 text-sm font-medium">
                      ✅ Mensagem enviada com sucesso! Redirecionando para WhatsApp...
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl"
                  >
                    <p className="text-yellow-400 text-sm font-medium">
                      ⚠️ Houve um problema com o email, mas você será redirecionado para WhatsApp.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-amber-500 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Horário de Funcionamento
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                      <span className="text-slate-700 font-medium text-sm">
                        {schedule.day}
                      </span>
                      <span className="text-slate-600 text-sm">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Fale Conosco
              </h3>
              
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center p-3 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all duration-300 group bg-slate-50 hover:bg-amber-50 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 text-sm mb-1">
                        {contact.title}
                      </div>
                      <div className="text-slate-600 text-xs break-all leading-relaxed">
                        {contact.info}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">
                  Localização
                </h3>
              </div>
              
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                <span className="hidden sm:inline">
                  Av. Joaquim Constantino, 1880<br />
                  Vila Nova Prudente<br />
                  Pres. Prudente - SP, 19050-220<br />
                  Atendemos toda a região
                </span>
                <span className="sm:hidden">
                  Av. J. Constantino, 1880<br />
                  V. N. Prudente<br />
                  Pres. Prudente - SP<br />
                  Atendemos toda a região
                </span>
              </p>
              
              {/* Google Maps Embed */}
              <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden shadow-inner border border-slate-200 mb-4">
                <iframe
                  src="https://maps.google.com/maps?q=Av.+Joaquim+Constantino,+1880+-+Vila+Nova+Prudente,+Pres.+Prudente+-+SP,+19050-220&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Alfa Solar - Av. Joaquim Constantino, 1880, Vila Nova Prudente, Presidente Prudente/SP"
                  className="rounded-lg"
                />
              </div>
              
              {/* Links para Google Maps */}
              <div className="flex flex-col gap-3">
                <motion.a
                  href="https://maps.app.goo.gl/F6hmnDNDgG3Jgw6g7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-4 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 font-medium text-sm transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </motion.a>
                <motion.a
                  href="https://www.google.com/maps/dir//Av.+Joaquim+Constantino,+1880+-+Vila+Nova+Prudente,+Pres.+Prudente+-+SP,+19050-220"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 font-medium text-sm transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Como Chegar
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}