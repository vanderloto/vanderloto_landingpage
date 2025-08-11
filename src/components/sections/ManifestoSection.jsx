import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Users, 
  Shield, 
  Target, 
  Lightbulb,
  ArrowRight,
  Quote
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import fractalImage from '../../assets/fractal.jpg';

/**
 * Seção do Manifesto - filosofia e princípios de Vander Loto
 * @param {Object} props - Props do componente
 * @param {Object} props.isVisible - Estado de visibilidade das seções
 * @param {Object} props.fadeInUp - Variante de animação fade in up
 * @param {Object} props.staggerContainer - Variante de animação stagger
 * @returns {JSX.Element} Componente ManifestoSection
 */
const ManifestoSection = ({ isVisible, fadeInUp, staggerContainer }) => {
  const manifestoPrinciples = [
    {
      icon: Brain,
      title: "Arquiteto da nova era digital",
      description: "Tecnologia não é fim — é meio. O meio mais poderoso já criado para libertar tempo humano, simplificar processos, e acelerar impacto. Automação é inevitável. Mas automação adaptativa é escolha estratégica."
    },
    {
      icon: Zap,
      title: "Inovação contínua exige líderes incansáveis",
      description: "A mudança é exponencial. Não existe mais 'zona de conforto' digital. Vivo no inconformismo produtivo: duvido do status quo, questiono modelos prontos, e vejo na inovação um hábito — não um projeto."
    },
    {
      icon: Users,
      title: "Diversidade cognitiva é vantagem competitiva",
      description: "Minha mente não é linear. Sou neurodiverso. Isso me ensinou a encontrar padrões onde outros veem caos. A inteligência coletiva só floresce quando a diferença é cultivada, não reprimida."
    },
    {
      icon: Shield,
      title: "A liberdade não é negociável",
      description: "Todo projeto meu parte de um princípio: liberdade com responsabilidade. Liberdade para construir, experimentar, discordar, se expressar. No centro da transformação digital, está a liberdade de decidir."
    },
    {
      icon: Target,
      title: "Tecnologia deve servir ao humano",
      description: "Sou estrategista, não fanático por tecnologia. Não uso buzzwords. Uso frameworks. Não compro promessas. Testo hipóteses. A tecnologia deve amplificar capacidades humanas, não substituí-las cegamente."
    },
    {
      icon: Lightbulb,
      title: "Missão: provocar mudança estrategicamente",
      description: "Cada empresa que passo, cada time que lidero, cada solução que entrego carrega esse DNA: impacto real, sustentável e orientado por dados. Transformar exige coragem, mas também pragmatismo."
    }
  ];

  return (
    <section id="manifesto" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${fractalImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.manifesto ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">✊ Manifesto</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                "Liberdade com propósito. Inovação com método. Automação com consciência."
              </p>
              <p className="text-lg text-muted-foreground">
                Sou parte de uma geração que não aceita mais o "foi sempre assim". 
                Trabalho para construir sistemas mais inteligentes, ambientes mais livres, 
                times mais diversos e decisões mais conscientes.
              </p>
            </div>
          </motion.div>

          {/* Principles Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {manifestoPrinciples.map((principle, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full manifesto-card group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <principle.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3 text-foreground">
                          {index + 1}. {principle.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
                🧭 Em resumo
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Esse é o meu norte. E se for o seu também, vamos conversar.
              </p>
              <motion.div
                className="inline-flex items-center space-x-2 text-primary cursor-pointer group"
                whileHover={{ x: 5 }}
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="text-lg font-semibold">Vamos transformar juntos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;