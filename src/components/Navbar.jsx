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
          <a href="https://github.com/Dokarii" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ricardo-tejedor-3812053b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={20} />
          </a>
          <a href="mailto:tejedoranayaricardo@gmail.com" className="social-button">
            <Mail size={18} />
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
