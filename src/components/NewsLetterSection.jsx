import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const NewsLetterSection = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_vlf6mgd",   // ← remplace avec ton ID
        "template_hz7l57d",  // ← remplace avec ton ID
        formRef.current,
        "qpLxEjU6lZMi0r8Vn"    // ← remplace avec ta clé publique
      )
      .then(
        () => {
          setLoading(false)
          alert('Message envoyé avec succès !')
          formRef.current.reset()
        },
        (error) => {
          setLoading(false)
          alert('Une erreur est survenue, veuillez réessayer.')
          console.error(error)
        }
      )
  }

  return (
    <section id='newsletter' className="bg-draftBlueDark py-20 px-6">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10"
      >
        <motion.h2
          variants={textVariant(0.3)}
          className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Ask a Question
        </motion.h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="first_name"
              required
              placeholder="Nom"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              name="last_name"
              required
              placeholder="Prenom"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="user_email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            required
            placeholder="Rédiger votre message ici"
            rows="4"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-draftBlueDark hover:bg-yellow-600 text-white py-3 rounded-md font-semibold text-lg transition duration-200"
          >
            {loading ? 'Envoi en cours...' : 'Soumettre'}
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default NewsLetterSection

