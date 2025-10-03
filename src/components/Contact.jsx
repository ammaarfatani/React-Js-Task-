import React from 'react'
import ContactForm from './ContactForm'
import ContactSection from './ContactInfo'

const Contact = () => {
  return (
     <div className="min-h-screen bg-gray-100 font-sans">
  <main className="grid grid-cols-1 lg:grid-cols-2 shadow-lg">
    <ContactForm />
    <ContactSection />
  </main>
</div>

  )
}

export default Contact