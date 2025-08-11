import { render, screen } from '@testing-library/react';
import HeroSection from '../components/sections/HeroSection';

describe('HeroSection', () => {
  test('renders hero title', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Liderança Estratégica/i)).toBeInTheDocument();
  });

  test('renders CTA buttons', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Quero transformar meu negócio/i)).toBeInTheDocument();
    expect(screen.getByText(/Conheça minha abordagem/i)).toBeInTheDocument();
  });
});