'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="5518996976413"
      accountName="Alfa Solar"
      avatar="/alfa-avatar-whatsapp.svg"
      statusMessage="Normalmente responde em 1 hora"
      chatMessage="Olá! ☀️ Como podemos ajudá-lo com energia solar?"
      placeholder="Digite uma mensagem..."
      allowEsc={false}
      allowClickAway={false}
      notification
      notificationDelay={60}
      darkMode={false}
    />
  )
}