import { useParams, Link, useLocation } from 'react-router-dom'
import { projects } from '../data/projects-new'

export default function ProjectDetail() {
  const { id } = useParams()
  const location = useLocation()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="project-detail-container">
        <h1>Project not found</h1>
        <Link to="/projects">Back to Projects</Link>
      </div>
    )
  }

  return (
    <>
      <div className="project-detail-container">
        {/* Hero Section */}
        <div className="project-hero">
          <div className="hero-left">
            <img src={project.heroImages?.left || project.image} alt={project.name} />
          </div>
          <div className="hero-right">
            <div className="hero-right-top">
              <img src={project.heroImages?.topRight || project.image} alt={`${project.name} detail 1`} />
            </div>
            <div className="hero-right-bottom">
              <img src={project.heroImages?.bottomRight || project.image} alt={`${project.name} detail 2`} />
            </div>
          </div>
        </div>

        {/* Title and Metadata */}
        <h1 className="project-title">{project.name}</h1>
        <div className="project-metadata">
          <span>📅 {project.year}</span>
          <span>👥 {project.type}</span>
          {project.category && <span>🏷️ {project.category}</span>}
        </div>

        {/* Skills Section */}
        {project.skills && project.skills.length > 0 && (
          <div className="project-skills-inline">
            {project.skills.map((skill, idx) => (
              <div key={idx} className="pill">{skill}</div>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="project-description">
          {project.fullDescription ? (
            project.fullDescription.map((para, idx) => <p key={idx}>{para}</p>)
          ) : (
            <p>{project.description}</p>
          )}
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="project-gallery">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="project-gallery-item">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="gallery-description">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
