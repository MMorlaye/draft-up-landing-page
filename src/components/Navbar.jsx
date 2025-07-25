import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "framer-motion"
import { fadeIn} from "../utils/motion";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')


    const navLinks = [
        {href: "#home", label: "Accueil"},
        {href: "#about", label: "A Propos"},
        {href: "#services", label: "Nos Services"},
        {href: "#testimonials", label: "Témoignages"},
        {href: "#newsletter", label: ""}
    ]
  return (
    <motion.nav 
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'> 
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
            {/* Logo */}
            <motion.div className='flex items-center gap-1 cursor-pointer'>
                <img
                    src="/draft.png"
                    alt="Draft Up Consulting" // Mis à jour pour refléter le nouveau logo
                    className="w-[124px] h-[140px]" // Ajustez si nécessaire
                />
            </motion.div>
            
            {/* Mobile menu item */}
            <motion.button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} >
                {isMenuOpen ? (
                    <HiX className="h-6 w-6" />
                    ) : (
                    <HiMenu className="h-6 w-6" />
                )}
            </motion.button>

            {/* Desktop nav items */}
            <motion.div className="hidden md:flex items-center gap-10">
                {
                    navLinks.map((link, index) => (
                        <a key={index} href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-600 after:transition-all
                             ${activeLink === link.href ? 'text-draftBlueDark after:w-full  ' : 'text-draftBlueDark hover:text-yellow-600'}`}
                        >
                            {link.label}
                        </a>
                    ))
                }
            </motion.div>

            {/* Get in touch btn */}
            <motion.button className="hidden md:block bg-draftBlueDark text-white px-6 py-2.5 rounded-lg hover:bg-yellow-600 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                <motion.a href="#newsletter">Prendre Contact</motion.a>
            </motion.button>
        </div>
        {isMenuOpen && (
                <motion.div 
                  className="md:hidden bg-white border-t border-gray-100 py-4"
                >
                  <motion.div 

                    className="container mx-auto px-4 space-y-4"
                  >
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        onClick={() => {
                          setActiveLink(link.href);
                          setIsMenuOpen(false);
                        }}
                        className={`block text-sm font-medium py-2
                          ${activeLink === link.href ? 'text-yellow-600' : 'text-gray-600 hover:text-gray-900'}`}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                    <motion.button 
                      className="w-full bg-yellow-600 text-white px-6 py-2.5 rounded-lg hover:bg-yellow-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
                    >
                      Get in touch
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
    </motion.nav>
  );
};
export default Navbar;