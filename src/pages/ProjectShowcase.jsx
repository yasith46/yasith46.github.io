import { Link } from 'react-router-dom'
import { projects } from '../data/projects-new'

export default function ProjectShowcase() {
  return (
    <div className="projects-grid-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project-card">
              <div className="project-card-image">
                <img src={project.image} alt={project.name} onError={(e) => { e.target.style.display = 'none' }} />
              </div>
              <div className="project-card-content">
                <h3>{project.name}</h3>
                <p>
                  {project.description}
                  <Link to={`/project/${project.id}`} style={{ color: '#333', fontWeight: 'bold', textDecoration: 'none' }}>
                    {project.description.length > 0 ? ' Read More >>>' : 'Read More >>>'}
                  </Link>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
