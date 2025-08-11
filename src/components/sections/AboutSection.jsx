import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Users, Star, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { trackExternalLink } from '../../utils/analytics';
import collectiveThinkingImage from '../../assets/collective-thinking.jpg';

/**
 * Seção sobre Vander Loto - biografia e experiência profissional
 * @param {Object} props - Props do componente
 * @param {Object} props.isVisible - Estado de visibilidade das seções
 * @param {Object} props.fadeInUp - Variante de animação fade in up
 * @param {Object} props.staggerContainer - Variante de animação stagger
 * @returns {JSX.Element} Componente AboutSection
 */
const AboutSection = ({ isVisible, fadeInUp, staggerContainer }) => {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="fractal-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.sobre ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Sobre mim!</h2>
            <p className="text-xl text-muted-foreground">Estratégia, execução e antecipação.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                Estrategista em transformação digital com mais de 25 anos liderando 
                iniciativas de alto impacto em empresas globais como Oracle, TCS, NTT DATA, B3, Lexmark.
                Minha mente é inquieta por natureza. Como neurodiverso (TDAH), fui treinado pela vida a 
                navegar o caos, conectar pontos invisíveis e buscar soluções que não seguem fórmulas prontas. 
                O que muitos viam como distração, virou diferencial: pensamento associativo veloz, hiperfoco 
                orientado a propósito e uma intolerância radical à inércia. 
                No epicentro da era da inteligência, não acredito em modelos lineares. Acredito em movimento. 
                Em autonomia. Em sistemas que aprendem. Em líderes que se adaptam.
                Minha missão é ajudar líderes a transformar suas operações em ecossistemas adaptativos,
                onde a diversidade cognitiva e a inovação contínua são os pilares da resiliência e
                crescimento exponencial.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Brain, text: "Pioneiro em automação cognitiva" },
                  { icon: TrendingUp, text: "Consultor de estratégia digital com visão exponencial" },
                  { icon: Users, text: "Defensor da diversidade cognitiva como diferencial competitivo" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    variants={fadeInUp}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="flex gap-4 mt-8">
                <Button 
                  className="glow-effect"
                  onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Star className="w-4 h-4 mr-2" />
                  Veja meu Manifesto
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/50 hover:bg-primary/10"
                  onClick={() => {
                    trackExternalLink('https://www.linkedin.com/in/vander-loto/');
                    window.open('https://www.linkedin.com/in/vander-loto/', '_blank');
                  }}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Conecte-se comigo
                </Button>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glow-effect">
                <img src={collectiveThinkingImage} alt="Collective Thinking" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;