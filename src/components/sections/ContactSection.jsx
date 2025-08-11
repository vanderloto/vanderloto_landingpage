import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { trackCalendlyOpen } from '../../utils/analytics';
import CalendlyWidget from '../CalendlyWidget';

/**
 * Seção de contato com CTA para agendamento
 * @param {Object} props - Props do componente
 * @param {Object} props.isVisible - Estado de visibilidade das seções
 * @param {Object} props.fadeInUp - Variante de animação fade in up
 * @param {Object} props.staggerContainer - Variante de animação stagger
 * @param {boolean} props.isDark - Estado do tema escuro
 * @returns {JSX.Element} Componente ContactSection
 */
const ContactSection = ({ isVisible, fadeInUp, staggerContainer, isDark }) => {
  return (
    <section id="contato" className="py-20 relative">
      <div className="neural-pattern absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.contato ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Vamos conversar?
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Se você lidera uma operação e quer torná-la mais inteligente, flexível e alinhada com o futuro, este é o momento.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="glow-effect text-lg px-12 py-6"
                  onClick={() => trackCalendlyOpen()}
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Agendar conversa estratégica
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[80vh] p-4">
                <CalendlyWidget isDark={isDark} />
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;