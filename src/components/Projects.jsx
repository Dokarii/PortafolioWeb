import ProjectCard from './ProjectCard';
import './Projects.css';

// Placeholder data - El usuario lo reemplazará con sus verdaderos proyectos de Vercel/Github
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'Panel de administración completo con gráficos en tiempo real, gestión de inventario y análisis de ventas. Construido para alto rendimiento.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Chart.js'],
    demoUrl: 'https://vercel.com',
    repoUrl: 'https://github.com'
  },
  {
    id: 2,
    title: 'Aplicación de Tareas IA',
    description: 'Gestor de tareas inteligente que categoriza y prioriza automáticamente usando procesamiento de lenguaje natural.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
    demoUrl: 'https://vercel.com',
    repoUrl: 'https://github.com'
  },
  {
    id: 3,
    title: 'Plataforma FinTech',
    description: 'Aplicación bancaria moderna enfocada en la experiencia de usuario con transacciones seguras y visualización de presupuesto.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'TypeScript', 'Express', 'MongoDB'],
    demoUrl: 'https://vercel.com',
    repoUrl: 'https://github.com'
  },
  {
    id: 4,
    title: 'Portafolio Creativo',
    description: 'Plantilla de portafolio ultra rápida con animaciones fluidas y soporte para modo oscuro nativo.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Framer Motion', 'Vite', 'CSS Modules'],
    demoUrl: 'https://vercel.com',
    repoUrl: 'https://github.com'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects section container">
      <div className="section-header">
        <h2 className="section-title">Proyectos <span className="text-accent">Destacados</span></h2>
        <p className="section-subtitle">
          Una selección los trabajos más significativos para mí, así tambien los más recientes.
        </p>
      </div>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
