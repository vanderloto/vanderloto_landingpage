# ADR-001: Integração com Calendly para Agendamento

**Data**: 15/01/2025  
**Status**: Aceito  
**Autor**: Vander Loto

## Contexto

A landing page precisa de uma funcionalidade de agendamento de consultorias que seja:
- Fácil de usar para os visitantes
- Integrada com calendário pessoal
- Responsiva e acessível
- Sem necessidade de desenvolvimento backend complexo

## Decisão

Decidimos integrar com o Calendly através de widget inline em modal, implementando:
- Widget responsivo com tema dinâmico
- Integração segura com verificação de integridade (SHA384)
- Modal customizado usando Radix UI Dialog
- Cores adaptáveis ao tema dark/light da aplicação

## Alternativas Consideradas

1. **Calendly Widget**: ✅ Escolhida
   - Prós: Fácil integração, UX testada, sem backend
   - Contras: Dependência externa, limitações de customização

2. **Desenvolvimento Próprio**:
   - Prós: Controle total, customização completa
   - Contras: Complexidade alta, tempo de desenvolvimento, manutenção

3. **Cal.com (Open Source)**:
   - Prós: Open source, customizável
   - Contras: Requer hosting próprio, complexidade de setup

## Consequências

### Positivas
- ✅ Implementação rápida (2 dias vs 2 semanas)
- ✅ UX testada e otimizada
- ✅ Integração automática com Google Calendar
- ✅ Notificações e lembretes automáticos
- ✅ Sem custos de desenvolvimento backend

### Negativas
- ⚠️ Dependência de serviço externo
- ⚠️ Limitações de customização visual
- ⚠️ Possível vendor lock-in
- ⚠️ Necessidade de verificação de integridade para segurança

### Mitigações Implementadas
- Script integrity check com SHA384
- Fallback gracioso em caso de falha
- Tema dinâmico para consistência visual
- Monitoramento de disponibilidade

## Implementação

```javascript
// CalendlyWidget.jsx
const CalendlyWidget = ({ isDark = true }) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const loadCalendly = () => {
      if (window.Calendly && widgetRef.current) {
        const calendlyUrl = `https://calendly.com/vander-loto-datametria?background_color=${
          isDark ? '0f1419' : 'fafafa'
        }&text_color=${
          isDark ? 'f3f4f6' : '1e293b'
        }&primary_color=${
          isDark ? '4f46e5' : '1e40af'
        }`;

        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: widgetRef.current
        });
      }
    };

    if (window.Calendly) {
      loadCalendly();
    } else {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.integrity = 'sha384-WEEajIp6+kZvWGZBQlBkWmKFk/aPXRqckwSupPdxLgRtChphG3vSWED8ThgLq7xY';
      script.crossOrigin = 'anonymous';
      script.async = true;
      script.onload = loadCalendly;
      document.head.appendChild(script);
    }
  }, [isDark]);

  return (
    <div 
      ref={widgetRef}
      style={{ minWidth: '320px', height: '700px', width: '100%' }}
    />
  );
};
```

## Métricas de Sucesso

- Taxa de conversão: 15% visitantes → agendamentos
- Tempo de carregamento: < 2s
- Compatibilidade: 95% browsers modernos
- Disponibilidade: 99.9% uptime

## Revisão

Esta decisão será revisada em 6 meses (15/07/2025) ou se:
- Taxa de conversão cair abaixo de 10%
- Problemas de disponibilidade > 1% downtime
- Necessidades de customização não atendidas
- Custos se tornarem proibitivos

## Links Relacionados

- [Calendly Developer Docs](https://developer.calendly.com/)
- [Implementação no GitHub](https://github.com/vanderloto/landing-page/blob/main/src/components/CalendlyWidget.jsx)
- [Testes de Integração](../test/calendly-integration.test.js)