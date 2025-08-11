import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './components/ui/dialog';
import CalendlyWidget from './components/CalendlyWidget';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ManifestoSection from './components/sections/ManifestoSection';
import ApproachSection from './components/sections/ApproachSection';
import ServicesSection from './components/sections/ServicesSection';
import VisionSection from './components/sections/VisionSection';
import ContentSection from './components/sections/ContentSection';
import ContactSection from './components/sections/ContactSection';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Users, 
  Target, 
  TrendingUp,
  ArrowRight,
  Linkedin,
  Mail,
  Calendar,
  Star,
  Network,
  Lightbulb,
  Shield
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import './App-navy.css';

// Import images
import logoImage from './assets/logo.png';
import neuralNetworkImage from './assets/neural-network.jpg';
import fractalImage from './assets/fractal.jpg';
import graphImage from './assets/graph.jpg';
import collectiveThinkingImage from './assets/collective-thinking.jpg';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [isDark, setIsDark] = useState(true);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      setIsVisible(prev => ({
        ...prev,
        [entry.target.id]: entry.isIntersecting
      }));
    });
  }, []);

  const observerOptions = useMemo(() => ({ threshold: 0.1 }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = document.querySelectorAll('[id]');
    
    sections.forEach((section) => observer.observe(section));
    

    
    // Check theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    const themeObserver = new MutationObserver(checkTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, [handleIntersection, observerOptions]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logoImage} alt="VL Logo" className="w-12 h-12 rounded-lg" />
            <span className="text-xl font-bold text-gradient">Vander Loto</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Sobre', 'Manifesto', 'Abordagem', 'Serviços', 'Visão', 'Conteúdo', 'Contato'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button className="glow-effect">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Conversa
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[80vh] p-4">
                <CalendlyWidget isDark={isDark} />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </header>

      <HeroSection />
      <AboutSection isVisible={isVisible} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <ManifestoSection isVisible={isVisible} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <ApproachSection isVisible={isVisible} fadeInUp={fadeInUp} staggerContainer={staggerContainer} isDark={isDark} />
      <ServicesSection isVisible={isVisible} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <VisionSection isVisible={isVisible} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <ContentSection isVisible={isVisible} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <ContactSection isVisible={isVisible} fadeInUp={fadeInUp} staggerContainer={staggerContainer} isDark={isDark} />

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={logoImage} alt="VL Logo" className="w-10 h-10 rounded-lg" />
              <span className="text-lg font-bold text-gradient">Vander Loto</span>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/vander-loto/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:vander.loto@datametria.io" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="section-divider my-8"></div>
          
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Vander Loto. Liderança Estratégica para a Era da Adaptação Inteligente.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

