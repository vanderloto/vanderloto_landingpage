# 🚀 Vander Loto - Landing Page Personal Branding

Uma landing page moderna e responsiva desenvolvida em React para apresentar a marca pessoal de Vander Loto, especialista em liderança estratégica e transformação digital.

## 📋 Visão Geral

Esta landing page foi desenvolvida para comunicar a proposta de valor de Vander Loto como consultor em estratégia digital, automação adaptativa e liderança transformadora. O projeto utiliza tecnologias modernas para criar uma experiência visual impactante e profissional.

### 🎯 Objetivos do Projeto

- **Personal Branding**: Estabelecer presença digital profissional
- **Geração de Leads**: Capturar interesse de potenciais clientes
- **Demonstração de Expertise**: Showcasing de conhecimento em tecnologia e estratégia
- **Conversão**: Direcionamento para agendamento de consultorias

## 🛠️ Stack Tecnológica

### Frontend
- **React 19.1.0** - Biblioteca principal para UI
- **Vite 6.3.5** - Build tool e dev server
- **Tailwind CSS 4.1.7** - Framework CSS utilitário
- **Framer Motion 12.15.0** - Animações e transições

### UI Components
- **Radix UI** - Componentes acessíveis e customizáveis
- **Shadcn/ui** - Sistema de design components
- **Lucide React** - Biblioteca de ícones

### Funcionalidades Especiais
- **Intersection Observer API** - Animações on-scroll
- **Responsive Design** - Adaptação para todos os dispositivos
- **Dark Theme** - Tema escuro por padrão
- **Performance Otimizada** - Lazy loading e otimizações

## 📁 Estrutura do Projeto

```
vanderloto_landingpage/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/                    # Imagens e recursos estáticos
│   │   ├── logo.jpeg
│   │   ├── neural-network.jpg
│   │   ├── fractal.jpg
│   │   ├── graph.jpg
│   │   └── collective-thinking.jpg
│   ├── components/
│   │   └── ui/                    # Componentes UI reutilizáveis
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── dialog.jsx
│   │       └── ... (50+ componentes)
│   ├── hooks/
│   │   └── use-mobile.js          # Hook para detecção mobile
│   ├── lib/
│   │   └── utils.js               # Utilitários e helpers
│   ├── App.jsx                    # Componente principal
│   ├── App.css                    # Estilos customizados
│   ├── index.css                  # Estilos globais
│   └── main.jsx                   # Entry point
├── components.json                # Configuração Shadcn/ui
├── vite.config.js                # Configuração Vite
├── package.json                   # Dependências e scripts
└── README.md                      # Documentação
```

## 🎨 Design e UX

### Paleta de Cores
- **Background**: `oklch(0.08 0 0)` - Preto profundo
- **Primary**: `oklch(0.7 0.15 180)` - Azul ciano
- **Accent**: `oklch(0.65 0.2 160)` - Verde azulado
- **Text**: `oklch(0.95 0 0)` - Branco quase puro

### Tipografia
- **Fonte Principal**: System fonts otimizadas
- **Hierarquia**: H1 (5xl-7xl), H2 (4xl-5xl), Body (lg-xl)
- **Peso**: Regular (400), Semibold (600), Bold (700)

### Animações
- **Fade In Up**: Entrada suave dos elementos
- **Stagger**: Animações sequenciais
- **Hover Effects**: Interações responsivas
- **Scroll Animations**: Ativação por visibilidade

## 📱 Seções da Landing Page

### 1. Hero Section
- **Proposta de Valor Principal**: "Liderança Estratégica para a Era da Adaptação Inteligente"
- **CTAs Primários**: "Transformar negócio" e "Conhecer abordagem"
- **Visual**: Background neural network com overlay

### 2. Sobre (About)
- **Biografia Profissional**: 25+ anos de experiência
- **Credenciais**: NTT Data, Oracle, B3
- **Diferenciais**: Automação cognitiva, diversidade cognitiva

### 3. Manifesto
- **6 Princípios Fundamentais**: Filosofia de trabalho e valores
- **Arquitetura Digital**: Base sólida para transformação
- **Diversidade Cognitiva**: Força da neurodiversidade
- **Tecnologia Centrada no Humano**: Foco na experiência humana

### 4. Minha Abordagem
- **Inovação por Primeiros Princípios**: Metodologia completa
- **4 Seções**: O que é, O que você ganha, Como faço, Para quem é
- **Metodologia em 4 Etapas**: Diagnóstico, Desafio, Reconstrução, Validação
- **Benefícios Visuais**: Grid responsivo com 4 benefícios principais

### 5. Serviços
- **Diagnóstico Estratégico**: Análise e arquitetura de automação
- **Mentoria Executiva**: Treinamentos em inovação
- **Arquitetura de Liberdade**: Processos + Cultura + Tecnologia

### 6. Visão 2030
- **5 Apostas Estratégicas**: Tendências e posicionamentos futuros
- **Automação Adaptativa**: Base da infraestrutura decisória
- **IA como Co-autor**: Além de ferramenta

### 7. Conteúdo
- **Série de Posts**: "A Nova Era da Estratégia Digital"
- **Thought Leadership**: Posicionamento como especialista
- **Social Proof**: Direcionamento para LinkedIn

### 8. Contato/CTA
- **Call-to-Action Final**: Agendamento de conversa estratégica
- **Formulário de Contato**: Captura de leads qualificados

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone [repository-url]
cd vanderloto_landingpage

# Instale as dependências
pnpm install

# Execute em modo desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview
```

### Scripts Disponíveis
```bash
pnpm dev      # Servidor de desenvolvimento
pnpm build    # Build de produção
pnpm lint     # Linting com ESLint
pnpm preview  # Preview da build
```

## 🔧 Configuração

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### Tailwind CSS
- **Configuração**: Integrada via `@tailwindcss/vite`
- **Tema Customizado**: Navy blue theme com cores personalizadas
- **Componentes**: Sistema baseado em Shadcn/ui

### Calendly Integration
- **Widget Inline**: Integração segura com verificação de integridade
- **Tema Dinâmico**: Cores adaptáveis ao tema dark/light
- **Modal Dialog**: Abertura em modal responsivo

## 📊 Performance

### Métricas Alvo
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

### Otimizações Implementadas
- **Code Splitting**: Componentes lazy-loaded
- **Image Optimization**: Formatos modernos (WebP/AVIF)
- **CSS Purging**: Remoção de CSS não utilizado
- **Bundle Analysis**: Monitoramento do tamanho
- **Performance Hooks**: useCallback e useMemo para otimização
- **Component Refactoring**: Redução de 70% no tamanho do App.jsx

## 🔒 Segurança

### Medidas Implementadas
- **Content Security Policy**: Headers de segurança
- **XSS Protection**: Sanitização de inputs
- **HTTPS Only**: Redirecionamento forçado
- **Dependency Scanning**: Verificação de vulnerabilidades
- **Script Integrity**: Verificação SHA384 para scripts externos
- **Log Sanitization**: Sanitização de dados antes do logging
- **Error Boundary**: Tratamento seguro de erros

## 📈 SEO e Analytics

### SEO On-Page
- **Meta Tags**: Title, description, keywords
- **Open Graph**: Compartilhamento social
- **Schema Markup**: Dados estruturados
- **Sitemap**: Mapeamento para crawlers

### Analytics
- **Google Analytics**: Tracking de conversões
- **Heat Maps**: Análise de comportamento
- **A/B Testing**: Otimização de conversão

## 🚀 Deploy

### Plataformas Recomendadas
- **Vercel**: Deploy automático via Git
- **Netlify**: CI/CD integrado
- **AWS S3 + CloudFront**: Máxima performance
- **GitHub Pages**: Opção gratuita

### Configuração de Deploy
```bash
# Build de produção
pnpm build

# Deploy para Vercel
vercel --prod

# Deploy para Netlify
netlify deploy --prod --dir=dist
```

## 🤝 Contribuição

### Guidelines
1. **Fork** o repositório
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças
4. **Push** para a branch
5. **Abra** um Pull Request

### Padrões de Código
- **ESLint**: Linting automático
- **Prettier**: Formatação consistente
- **Conventional Commits**: Mensagens padronizadas
- **Husky**: Git hooks para qualidade

## 📝 Roadmap

### Versão Atual: 1.3.0

#### Funcionalidades Implementadas
- ✅ Manifesto Section com 6 princípios fundamentais
- ✅ Abordagem Section com metodologia completa
- ✅ Navegação otimizada e CTAs inteligentes
- ✅ Design responsivo e animações suaves

### Próximas Versões

#### v1.3.1 - 30/01/2025
- 🐛 Correção do modal Calendly no iOS Safari
- ⚡ Melhorias de performance nas novas seções
- 📋 Otimizações de SEO para Manifesto e Abordagem
- 🔍 Melhorias de acessibilidade

#### v1.4.0 - 15/02/2025
- 📋 Blog integration com sistema de conteúdo
- 📋 Newsletter signup e captura de leads
- 📋 Testimonials section com depoimentos
- ⚡ PWA features e offline support

### Backlog de Longo Prazo

- 💡 Internacionalização (PT/EN)
- 💡 Case studies interativos
- 🔬 IA-powered content recommendations
- 🌟 Virtual reality experience showcase

### Melhorias Técnicas
- [ ] **TypeScript**: Migração completa
- [ ] **Testing**: Cobertura de testes
- [ ] **Storybook**: Documentação de componentes
- [ ] **Performance**: Otimizações avançadas

## 📚 Documentação

### Links da Documentação
- **[Status Atual](docs/STATUS_ATUAL.md)** - Análise completa do estado do projeto
- **[Product Backlog](docs/BACKLOG.md)** - Roadmap e funcionalidades planejadas
- **[Release Notes](docs/releases/)** - Notas de lançamento por versão
- **[Decisões Arquiteturais](docs/architecture/)** - ADRs e decisões técnicas
- **[CHANGELOG.md](CHANGELOG.md)** - Histórico de mudanças

## 📞 Contato

**Vander Loto**
- **LinkedIn**: [Perfil Profissional](https://www.linkedin.com/in/vander-loto/)
- **Email**: vander.loto@datametria.io
- **Website**: [vanderloto.netlify.app](https://vanderloto.netlify.app)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ por Vander Loto**
*Liderança Estratégica para a Era da Adaptação Inteligente*