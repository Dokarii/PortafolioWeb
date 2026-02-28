import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            <Code2 size={28} className="logo-icon" />
            <span className="logo-text">Ricardo<span className="text-accent">.</span></span>
          </a>
          <p className="footer-description">
            Constructor de experiencias digitales, focalizado en código limpio, escalable y visualmente asombroso.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#projects">Proyectos</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h3>Contacto</h3>
          <div className="social-icons">
            <a href="https://github.com/Dokarii" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ricardo-tejedor-3812053b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:tejedoranayaricardo@gmail.com">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {year} Ricardo Tejedor Anaya. Todos los derechos reservados.</p>
        <p className="built-with">
          Construido con React & CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
