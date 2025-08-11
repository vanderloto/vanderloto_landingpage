import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

/**
 * Seção de conteúdo e publicações
 * @param {Object} props - Props do componente
 * @param {Object} props.isVisible - Estado de visibilidade das seções
 * @param {Object} props.fadeInUp - Variante de animação fade in up
 * @param {Object} props.staggerContainer - Variante de animação stagger
 * @returns {JSX.Element} Componente ContentSection
 */
const ContentSection = ({ isVisible, fadeInUp, staggerContainer }) => {
  const posts = [
    "Post #1: A transformação digital morreu. Ainda bem.",
    "Post #2: Automação que aprende: o fim dos sistemas burros",
    "Post #3: Por que líderes neurodiversos criam estruturas melhores?"
  ];

  return (
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
                {posts.map((post, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-lg">{post}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <motion.div variants={fadeInUp} className="text-center mt-8">
              <Button 
                className="glow-effect"
                onClick={() => window.open('https://www.linkedin.com/in/vander-loto/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Siga no LinkedIn
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;