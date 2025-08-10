# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Documentação completa do projeto (README.md)
- Arquivo de status atual (STATUS_ATUAL.md)
- Análise de código com Amazon Q Code Review
- Estrutura inicial do changelog

### Changed
- Atualização da documentação existente para refletir o estado atual

### Fixed
- Identificação de issues de performance e legibilidade via code review

## [0.0.0] - 2025-01-XX

### Added
- **Estrutura Inicial do Projeto**
  - Configuração do Vite com React 19
  - Setup do Tailwind CSS 4.1.7
  - Integração com Shadcn/ui components
  - Configuração do ESLint

- **Design System**
  - Paleta de cores dark theme
  - Tipografia responsiva
  - Sistema de componentes UI (50+ componentes)
  - Animações com Framer Motion

- **Landing Page Sections**
  - Hero section com proposta de valor principal
  - About section com biografia profissional
  - Services section com 3 ofertas principais
  - Vision section com 5 apostas para 2030
  - Content section com série de posts
  - Contact/CTA section para conversão
  - Footer com links sociais

- **Funcionalidades Técnicas**
  - Navegação suave entre seções
  - Animações on-scroll com Intersection Observer
  - Layout totalmente responsivo
  - Otimização de imagens e assets
  - Alias paths para importações organizadas

- **Assets e Recursos**
  - Logo personalizado
  - Imagens temáticas (neural network, fractal, graph)
  - Ícones da biblioteca Lucide React
  - Favicon customizado

### Technical Details
- **React**: 19.1.0
- **Vite**: 6.3.5  
- **Tailwind CSS**: 4.1.7
- **Framer Motion**: 12.15.0
- **Radix UI**: Múltiplos componentes
- **Package Manager**: pnpm 10.4.1

### Performance
- Bundle inicial configurado
- Lazy loading preparado
- Otimizações de desenvolvimento implementadas

### Known Issues
- Textos não internacionalizados
- Performance do IntersectionObserver pode ser otimizada
- Componentes sem documentação JSDoc
- Falta de type safety (JavaScript puro)
- Tratamento de erros inadequado em alguns componentes

---

## Tipos de Mudanças

- `Added` para novas funcionalidades
- `Changed` para mudanças em funcionalidades existentes
- `Deprecated` para funcionalidades que serão removidas
- `Removed` para funcionalidades removidas
- `Fixed` para correções de bugs
- `Security` para correções de vulnerabilidades