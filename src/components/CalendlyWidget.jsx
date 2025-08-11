import React, { useEffect, useRef, useState } from 'react';

const CalendlyWidget = ({ isDark = true }) => {
  const widgetRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCalendly = () => {
      if (window.Calendly && widgetRef.current) {
        widgetRef.current.innerHTML = '';
        
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
        
        setIsLoading(false);
      }
    };

    if (window.Calendly) {
      loadCalendly();
    } else {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = loadCalendly;
      document.head.appendChild(script);
    }
  }, [isDark]);

  return (
    <div className="relative" style={{ minWidth: '320px', height: '700px', width: '100%' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      <div ref={widgetRef} style={{ minWidth: '320px', height: '700px', width: '100%' }} />
    </div>
  );
};

export default CalendlyWidget;