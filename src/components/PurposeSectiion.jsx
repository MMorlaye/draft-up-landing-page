import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="3" fill="#00d084"/>
          <circle cx="12" cy="6" r="3" fill="#00d084"/>
          <circle cx="18" cy="6" r="3" fill="#00d084"/>
          <circle cx="9" cy="12" r="3" fill="#00d084"/>
          <circle cx="15" cy="12" r="3" fill="#00d084"/>
        </svg>
      ),
      title: "Une équipe à votre service",
      description: "Nous recrutons et formons une équipe variée de rédacteurs, experts et formateurs pour maximiser l'impact de vos projets."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" stroke="#061E40" strokeWidth="2"/>
          <circle cx="18" cy="12" r="4" stroke="#061E40" strokeWidth="2" transform="rotate(30 18 12)"/>
        </svg>
      ),
      title: "En harmonie avec vous",
      description: "Nous nous adaptons à vos méthodes et rythmes pour une collaboration fluide et efficace."
    }
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <motion.div variants={fadeIn('right', 0.3)}>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              className="text-sm text-draftBlueDark font-medium mb-2"
            >
              Réalisez Plus d'Impact
            </motion.div>
            <motion.h2 
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900"
            >
              Notre leitmotiv : vous propulser vers de meilleurs résultats
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="flex items-start space-x-4"
              >
                <motion.div 
                  variants={fadeIn('right', 0.4 * (index + 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-lg" // Ajout d'un fond blanc et ombre pour les icônes
                >
                  {feature.icon}
                </motion.div>
                <motion.div variants={fadeIn('left', 0.4 * (index + 1))}>
                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="text-xl font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeIn('up', 0.4)}
                    className="text-gray-600"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;