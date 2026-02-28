import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const { title, description, image, tags, demoUrl, repoUrl } = project;

  return (
    <div className="project-card-wrapper">
      <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-card">
        <div className="project-image-container">
          <img src={image} alt={title} className="project-image" loading="lazy" />
          <div className="project-overlay">
            <span className="view-project-btn">
              Ver Proyecto <ExternalLink size={16} />
            </span>
          </div>
        </div>
        
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </a>
      
      {/* Optional GitHub Link outside the main card anchor to avoid nested anchors */}
      {repoUrl && (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-source" title="Ver código fuente">
          <Github size={20} />
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
