/**
 * Utilitários para Google Analytics
 */

/**
 * Envia evento personalizado para o Google Analytics
 * @param {string} action - Ação do evento
 * @param {string} category - Categoria do evento
 * @param {string} label - Label do evento
 * @param {number} value - Valor do evento
 */
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

/**
 * Rastreia cliques em botões CTA
 * @param {string} buttonName - Nome do botão
 */
export const trackCTAClick = (buttonName) => {
  trackEvent('click', 'cta', buttonName);
};

/**
 * Rastreia abertura do Calendly
 */
export const trackCalendlyOpen = () => {
  trackEvent('calendly_open', 'conversion', 'scheduling');
};

/**
 * Rastreia cliques em links externos
 * @param {string} url - URL do link
 */
export const trackExternalLink = (url) => {
  trackEvent('click', 'external_link', url);
};