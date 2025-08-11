import React from 'react';
import { motion } from 'framer-motion';
import { Network, Lightbulb, Shield, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import graphImage from '../../assets/graph.jpg';
import neuralNetworkImage from '../../assets/neural-network.jpg';
import fractalImage from '../../assets/fractal.jpg';

/**
 * Seção de serviços oferecidos por Vander Loto
 * @param {Object} props - Props do componente
 * @param {Object} props.isVisible - Estado de visibilidade das seções
 * @param {Object} props.fadeInUp - Variante de animação fade in up
 * @param {Object} props.staggerContainer - Variante de animação stagger
 * @returns {JSX.Element} Componente ServicesSection
 */
const ServicesSection = ({ isVisible, fadeInUp, staggerContainer }) => {
  const services = [
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
  ];

  return (
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
            {services.map((service, index) => (
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
  );
};

export default ServicesSection;