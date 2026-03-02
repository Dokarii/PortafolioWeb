import ProjectCard from "./ProjectCard";
import "./Projects.css";

// Placeholder data - El usuario lo reemplazará con sus verdaderos proyectos de Vercel/Github
const projectsData = [
  {
    id: 1,
    title: "Generador de Comentarios",
    description:
      "Geneador de comentarios con la estetica de Twitch, perfectos para streamers y creadores de contenido. \n\nFoto de ilgmyzin en Unsplash.",
    image:
      "https://images.unsplash.com/photo-1679065236532-09c4a500a025?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML5", "JavaScript", "CSS"],
    demoUrl: "https://commentgenerator.vercel.app/",
    repoUrl: "https://github.com/Dokarii/GeneradorComentarios",
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
