'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Como funciona a energia solar fotovoltaica?',
      answer: 'A energia solar fotovoltaica converte a luz do sol em energia elétrica através de painéis solares. Os painéis captam a radiação solar e a transformam em corrente contínua, que é convertida em corrente alternada pelo inversor para uso em sua residência ou empresa.'
    },
    {
      question: 'Quanto posso economizar com energia solar?',
      answer: 'A economia pode chegar até 95% da sua conta de luz. O valor exato depende do seu consumo atual, localização, orientação do telhado e dimensionamento do sistema. Fazemos uma análise personalizada para calcular sua economia específica.'
    },
    {
      question: 'Qual é o tempo de retorno do investimento?',
      answer: 'O payback médio de um sistema de energia solar é de 4 a 6 anos. Considerando que os painéis têm garantia de 25 anos, você terá mais de 20 anos de energia praticamente gratuita após o retorno do investimento.'
    },
    {
      question: 'O sistema funciona em dias nublados ou chuvosos?',
      answer: 'Sim, o sistema continua gerando energia mesmo em dias nublados, porém com menor eficiência. Em dias chuvosos a geração é reduzida, mas não para completamente. O sistema de compensação elétrica garante que você use os créditos gerados em dias ensolarados.'
    },
    {
      question: 'Preciso trocar meu relógio de energia?',
      answer: 'Sim, é necessário instalar um relógio bidirecional que mede tanto a energia consumida quanto a energia injetada na rede. A concessionária faz essa troca gratuitamente após a aprovação do projeto.'
    },
    {
      question: 'Qual a garantia dos equipamentos?',
      answer: 'Os painéis solares têm garantia de 25 anos para performance e 12 anos para defeitos de fabricação. Os inversores têm garantia de 5 a 12 anos dependendo do modelo. Oferecemos também garantia de instalação.'
    },
    {
      question: 'É necessário fazer manutenção no sistema?',
      answer: 'A manutenção é mínima. Recomendamos limpeza dos painéis a cada 6 meses e inspeção anual do sistema. Os equipamentos são projetados para funcionar por décadas com manutenção mínima.'
    },
    {
      question: 'Posso instalar energia solar em apartamento?',
      answer: 'Sim, é possível através do sistema de geração compartilhada ou condomínio solar. Também existe a opção de energia solar por assinatura. Analisamos cada caso para encontrar a melhor solução.'
    }
  ]

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-28 h-28 border border-amber-400/20 rotate-45"></div>
        <div className="absolute top-64 right-24 w-36 h-36 border border-yellow-400/20 -rotate-12"></div>
        <div className="absolute bottom-40 left-40 w-32 h-32 border border-amber-400/20 rotate-12"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 border border-yellow-400/20 -rotate-45"></div>
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Tire Suas Dúvidas Sobre
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Energia Solar
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Respondemos as principais dúvidas sobre energia solar fotovoltaica 
            para ajudar você a tomar a melhor decisão.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  whileHover={{ backgroundColor: "rgba(248, 250, 252, 1)" }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-amber-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-amber-500" />
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-8 lg:p-12 text-white shadow-2xl shadow-amber-500/25">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Nossa equipe técnica está pronta para esclarecer todas as suas dúvidas 
              sobre energia solar e ajudar você a fazer a melhor escolha.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contato')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              Falar com Especialista
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}