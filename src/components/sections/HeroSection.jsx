import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Brain, Target } from 'lucide-react';
import { Button } from '../ui/button';
import neuralNetworkImage from '../../assets/neural-network.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient neural-pattern overflow-hidden pt-16 md:pt-0">
      <div className="absolute inset-0 opacity-10">
        <img src={neuralNetworkImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Liderança Estratégica para a Era da Adaptação Inteligente
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Automação adaptativa, inovação contínua e diversidade cognitiva como motores de transformação real.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="glow-effect text-lg px-8 py-4">
              <Target className="w-5 h-5 mr-2" />
              Quero transformar meu negócio
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10"
              onClick={() => document.getElementById('abordagem')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Brain className="w-5 h-5 mr-2" />
              Conheça minha abordagem
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;