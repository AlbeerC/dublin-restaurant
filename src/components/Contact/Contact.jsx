import { useState } from 'react'
import Button from '../Button/Button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import './Contact.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="bg-white contact container" id='contact'>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contactanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-bold text-gray-700 mb-3">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-bold text-gray-700 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-bold text-gray-700 mb-3">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">Enviar mensaje</Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Información del lugar</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>San martín 123, Buenos Aires</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-2" />
                  <span>(222) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-2" />
                  <span>info@dublin.com</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mr-2 mt-1" />
                  <div>
                    <p>Mar-Dom: 11:00 - 15:00 y 20:00 - 23:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635266078194!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}