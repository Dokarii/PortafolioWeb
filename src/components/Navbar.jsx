import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#" className="nav-logo">
          <Code2 size={24} className="logo-icon" />
          <span className="logo-text">Ricardo<span className="text-accent">.</span></span>
        </a>
        
        <ul className="nav-links">
          <li><a href="#about" className="nav-item">Acerca de</a></li>
          <li><a href="#projects" className="nav-item">Proyectos</a></li>
        </ul>
        
        <div className="nav-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="social-button">
            <Mail size={18} />
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
