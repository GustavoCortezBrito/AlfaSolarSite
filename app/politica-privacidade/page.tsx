'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield } from 'lucide-react'

export default function PoliticaPrivacidade() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Política de Privacidade
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Política de Privacidade
              </h1>
              <p className="text-lg text-slate-600">
                Última atualização: Janeiro de 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Informações Gerais</h2>
                <p className="text-slate-600 leading-relaxed">
                  A Alfa Solar está comprometida em proteger a privacidade e os dados pessoais de nossos clientes e visitantes do site.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}