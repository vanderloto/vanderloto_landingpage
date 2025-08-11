import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Lightbulb, 
  Zap, 
  Settings, 
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import CalendlyWidget from '../CalendlyWidget';

const ApproachSection = ({ isVisible, fadeInUp, staggerContainer, isDark }) => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Redução de custos operacionais em até 70%",
      description: "Eliminação de processos desnecessários e otimização de recursos"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Prazos cortados de meses para semanas ou dias",
      description: "Aceleração através de automação inteligente e processos enxutos"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Processos prontos para escalar com segurança",
      description: "Governança integrada desde o design inicial"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Vantagem competitiva real, fora do benchmarking",
      description: "Soluções únicas baseadas em primeiros princípios"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Diagnóstico de Premissas",
      description: "Separar fatos de suposições",
      detail: "Análise profunda para identificar o que é realmente necessário versus o que é tradição"
    },
    {
      step: "02", 
      title: "Desafio às Regras Herdadas",
      description: "Testar cada premissa contra dados, economia e tecnologia",
      detail: "Questionamento sistemático de processos estabelecidos com base em evidências"
    },
    {
      step: "03",
      title: "Reconstrução Inteligente", 
      description: "Soluções enxutas com IA, automação adaptativa e arquitetura escalável",
      detail: "Design de soluções do zero, otimizadas para eficiência e crescimento"
    },
    {
      step: "04",
      title: "Validação Rápida",
      description: "Provas de conceito com resultados tangíveis antes do rollout",
      detail: "Testes práticos que comprovam valor antes do investimento total"
    }
  ];

  return (
    <section id="abordagem" className="py-20 bg-gradient-to-br from-background via-card/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.abordagem ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 mb-6">
            <Lightbulb className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Minha Abordagem</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Inovação por{' '}
            <span className="text-gradient">Primeiros Princípios</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Reprojetando o futuro do seu negócio a partir do que realmente importa
          </motion.p>
        </motion.div>

        {/* O que é */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible.abordagem ? "visible" : "hidden"}
          className="mb-16"
        >
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">O que é</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Uma forma de pensar que desmonta problemas complexos até os elementos essenciais — 
                e reconstrói soluções mais simples, rápidas e eficientes, eliminando custos, 
                prazos e barreiras herdadas.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* O que você ganha */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.abordagem ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold">O que você ganha</h3>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="approach-benefit-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-accent">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Como faço */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible.abordagem ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Como faço</h3>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="approach-methodology-card h-full group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full approach-step-number flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                    <p className="text-primary font-medium mb-3">{step.description}</p>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Para quem é */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible.abordagem ? "visible" : "hidden"}
          className="mb-12"
        >
          <Card className="glass-card border-accent/20">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Para quem é</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Organizações que querem mais do que otimizar processos — querem quebrar paradigmas 
                e criar novas formas de operar.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible.abordagem ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para transformar sua organização?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vamos conversar sobre como aplicar primeiros princípios no seu contexto específico 
              e criar soluções verdadeiramente inovadoras.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="glow-effect">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Diagnóstico Estratégico
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[80vh] p-4">
                <CalendlyWidget isDark={isDark} />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;