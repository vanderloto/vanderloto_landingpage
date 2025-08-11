import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const VisionSection = ({ isVisible, fadeInUp, staggerContainer }) => {
  const visions = [
    "Automação adaptativa como base da infraestrutura decisória",
    "IA como co-autor dos negócios, não só ferramenta",
    "Diversidade cognitiva como core dos times de alta performance",
    "Descentralização operacional como fator de resiliência",
    "Inovação contínua como política interna, não iniciativa esporádica"
  ];

  return (
    <section id="visão" className="py-20 relative">
      <div className="neural-pattern absolute inset-0 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.visão ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">5 Apostas até 2030</h2>
            <p className="text-xl text-muted-foreground">Posicionamento visionário para o futuro</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {visions.map((vision, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-4 mb-8 p-6 rounded-lg bg-card/50 backdrop-blur-sm card-hover"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg leading-relaxed">{vision}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <ArrowRight className="w-5 h-5 mr-2" />
              Leia o conteúdo completo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;