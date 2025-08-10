import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
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
    return () => observer.disconnect();
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
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logoImage} alt="VL Logo" className="w-12 h-12 rounded-lg" />
            <span className="text-xl font-bold text-gradient">Vander Loto</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Sobre', 'Serviços', 'Visão', 'Conteúdo', 'Contato'].map((item, index) => (
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
            <Button className="glow-effect">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Conversa
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient neural-pattern overflow-hidden">
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
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10">
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

      {/* About Section */}
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
                  <Button className="glow-effect">
                    <Star className="w-4 h-4 mr-2" />
                    Veja meu manifesto
                  </Button>
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
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

      {/* Services Section */}
      <section id="serviços" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible.serviços ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">O Que Eu Entrego</h2>
              <p className="text-xl text-muted-foreground">Propostas de valor com diferencial executivo</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Network,
                  title: "Diagnóstico Estratégico + Arquitetura de Automação",
                  description: "Análise profunda do seu ecossistema digital e redesenho com foco em adaptabilidade e ROI real.",
                  image: graphImage
                },
                {
                  icon: Lightbulb,
                  title: "Mentoria Executiva em Inovação e Descentralização",
                  description: "Treinamentos sob demanda com foco em liderança transformadora, IA aplicada e cultura de decisão.",
                  image: neuralNetworkImage
                },
                {
                  icon: Shield,
                  title: "Arquitetura de Liberdade: Processos + Cultura + Tecnologia",
                  description: "Implementações digitais que respeitam o humano, alavancam talentos neurodiversos e tornam sua operação antifrágil.",
                  image: fractalImage
                }
              ].map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="card-hover h-full bg-card/80 backdrop-blur-sm">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Button size="lg" className="glow-effect">
                <Mail className="w-5 h-5 mr-2" />
                Quero conversar sobre meu desafio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
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
              {[
                "Automação adaptativa como base da infraestrutura decisória",
                "IA como co-autor dos negócios, não só ferramenta",
                "Diversidade cognitiva como core dos times de alta performance",
                "Descentralização operacional como fator de resiliência",
                "Inovação contínua como política interna, não iniciativa esporádica"
              ].map((vision, index) => (
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

      {/* Content Section */}
      <section id="conteúdo" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible.conteúdo ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Conteúdo e Publicações</h2>
              <p className="text-xl text-muted-foreground">Consistência de pensamento e produção</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <Card className="card-hover bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient">Série: A Nova Era da Estratégia Digital</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Post #1: A transformação digital morreu. Ainda bem.",
                    "Post #2: Automação que aprende: o fim dos sistemas burros",
                    "Post #3: Por que líderes neurodiversos criam estruturas melhores?"
                  ].map((post, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-lg">{post}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <motion.div variants={fadeInUp} className="text-center mt-8">
                <Button className="glow-effect">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Siga no LinkedIn
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              <Button size="lg" className="glow-effect text-lg px-12 py-6">
                <Calendar className="w-6 h-6 mr-3" />
                Agendar conversa estratégica
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={logoImage} alt="VL Logo" className="w-10 h-10 rounded-lg" />
              <span className="text-lg font-bold text-gradient">Vander Loto</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
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

