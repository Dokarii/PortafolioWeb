import ProjectCard from "./ProjectCard";
import "./Projects.css";

// Placeholder data - El usuario lo reemplazará con sus verdaderos proyectos de Vercel/Github
const projectsData = [
  {
    id: 1,
    title: "Generador de Comentarios",
    description:
      "Geneador de comentarios con la estetica de Twitch, perfectos para streamers y creadores de contenido. 100% personalizable y facil de usar. Con descarga directa y vista previa en tiempo real. \n\nFoto de ilgmyzin en Unsplash.",
    image:
      "https://images.unsplash.com/photo-1679065236532-09c4a500a025?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML5", "JavaScript", "CSS"],
    demoUrl: "https://commentgenerator.vercel.app/",
    repoUrl: "https://github.com/Dokarii/GeneradorComentarios",
  },
  {
    id: 2,
    title: "Jupyter Notebooks Projects",
    description:
      "Repositorio de GitHub con micro-proyectos que forman parte de un roadmap estructurado de autoaprendizaje para la especialización en Ciencia de Datos y Machine Learning. \n\nFoto de Chris Ried en Unsplash.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Jupyter", "Data Science", "Machine Learning"],
    demoUrl: "https://github.com/Dokarii/Python-Fundamentals-for-Data-Science",
    repoUrl: "https://github.com/Dokarii/Python-Fundamentals-for-Data-Science",
  },
  {
    id: 3,
    title: "VideoGrab",
    description:
      "Aplicación de escritorio para Windows que descarga videos de diferentes plataformas en máxima calidad.\n\nImagen de Mariia Shalabaieva en Unsplash",
    image:
      "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "CustomTkinter", "yt-dlp"],
    demoUrl: "https://github.com/Dokarii/VideoGrab",
    repoUrl: "https://github.com/Dokarii/VideoGrab",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section container">
      <div className="section-header">
        <h2 className="section-title">
          Proyectos <span className="text-accent">Destacados</span>
        </h2>
        <p className="section-subtitle">
          Una selección de mis mejores trabajos, así también los más recientes.
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
