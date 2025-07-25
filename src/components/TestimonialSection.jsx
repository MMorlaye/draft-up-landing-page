import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
      id: 1,
      name: "Mamadou Diallo",
      image: "https://images.pexels.com/photos/2330118/pexels-photo-2330118.jpeg?_gl=1*1wdsu8q*_ga*MTgyMDMzODI0Ny4xNzQyNjAxMDg1*_ga_8JE65Q40S6*czE3NTMzNTY1NjkkbzIkZzEkdDE3NTMzNTY1OTckajMyJGwwJGgw",
      text: "L’accompagnement de Draft Up a transformé mon projet grâce à une rédaction stratégique claire et adaptée aux ODD.",
    },
    {
      id: 2,
      name: "Fatoumata Camara",
      image: "https://images.pexels.com/photos/13056460/pexels-photo-13056460.png?_gl=1*dz9zsy*_ga*MTgyMDMzODI0Ny4xNzQyNjAxMDg1*_ga_8JE65Q40S6*czE3NTMzNTY1NjkkbzIkZzEkdDE3NTMzNTY4NTgkajI5JGwwJGgw",
      text: "Grâce à leur veille au financement, j’ai sécurisé des fonds pour mon initiative en Guinée en un temps record.",
    },
    {
      id: 3,
      name: "Ibrahima Bah",
      image: "https://images.pexels.com/photos/13116391/pexels-photo-13116391.jpeg?_gl=1*1kft3xe*_ga*MTgyMDMzODI0Ny4xNzQyNjAxMDg1*_ga_8JE65Q40S6*czE3NTMzNTY1NjkkbzIkZzEkdDE3NTMzNTY5NzYkajUwJGwwJGgw",
      text: "La formation dispensée par Draft Up a renforcé mes compétences et boosté l’impact de mon organisation locale.",
    },
    {
      id: 4,
      name: "Aminata Sow",
      image: "https://images.pexels.com/photos/20362477/pexels-photo-20362477.jpeg?_gl=1*1bmp5g*_ga*MTgyMDMzODI0Ny4xNzQyNjAxMDg1*_ga_8JE65Q40S6*czE3NTMzNTY1NjkkbzIkZzEkdDE3NTMzNTY3NTAkajQ4JGwwJGgw",
      text: "Le service client est exceptionnel. Ils ont dépassé mes attentes pour structurer mon projet avec rigueur.",
    },
    {
      id: 5,
      name: "Amadou Keita",
      image: "https://images.pexels.com/photos/19355360/pexels-photo-19355360.jpeg?_gl=1*iwxpsu*_ga*MTgyMDMzODI0Ny4xNzQyNjAxMDg1*_ga_8JE65Q40S6*czE3NTMzNTY1NjkkbzIkZzEkdDE3NTMzNTcwNDYkajU5JGwwJGgw",
      text: "Depuis un an, leurs services innovants soutiennent mon entreprise avec des solutions sur mesure en Afrique.",
    },
    {
      id: 6,
      name: "Mariama Touré",
      image: "https://images.pexels.com/photos/16012596/pexels-photo-16012596.jpeg?_gl=1*bnccpk*_ga*MTgyMDMzODI0Ny4xNzQyNjAxMDg1*_ga_8JE65Q40S6*czE3NTMzNTY1NjkkbzIkZzEkdDE3NTMzNTcxNTMkajE5JGwwJGgw",
      text: "J’ai été impressionnée par leur rapidité à répondre et leur engagement pour le succès de mes initiatives.",
    },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ce que nos clients satisfaits disent
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          Témoignages qui font de Draft Up l’allié idéal pour vos projets
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div 
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeIn('up', 0.4 * (index + 1))}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span 
                      key={starIndex} 
                      variants={fadeIn('up', 0.1 * starIndex)}
                      className="text-yellow-500"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h3 
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-600"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-draftBlueDark hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-draftBlueDark hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
