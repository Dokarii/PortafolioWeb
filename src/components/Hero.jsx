import { ArrowRight, Terminal } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section id="about" className="hero section container">
      <div className="hero-content">
        <div className="badge">
          <span className="pulse-dot"></span>
          Disponible para nuevos proyectos
        </div>
        
        <h1 className="hero-title">
          Hola, soy <br />
          <span className="text-gradient">Ricardo Tejedor Anaya</span>
        </h1>
        
        <div className="hero-role">
          <Terminal className="role-icon" size={24} />
          <h2>Desarrollador de Software</h2>
        </div>
        
        <p className="hero-description">
          Creo experiencias digitales de alto impacto. Especializado en construir aplicaciones web rápidas, accesibles y estéticamente atractivas con las mejores tecnologías modernas.
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            Ver Proyectos
            <ArrowRight size={18} />
          </a>
          <a href="mailto:tejedoranayaricardo@gmail.com" className="btn-secondary">
            Contáctame
          </a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="glow-sphere main-sphere"></div>
        <div className="glow-sphere secondary-sphere"></div>
        <div className="glass-card">
          <pre className="code-snippet">
            <code>
{`class Developer {
  constructor() {
    this.name = 'Ricardo';
    this.role = 'Software Engineer';
    this.passion = 'Building great UX';
  }

  code() {
    return 'Transforming ideas into reality';
  }
}`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;
