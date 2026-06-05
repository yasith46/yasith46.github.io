import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project/')
  const isHomePage = location.pathname === '/'
  const isAboutPage = location.pathname === '/about'
  const isContactPage = location.pathname === '/contact'
  const isProjectsPage = location.pathname === '/projects'

  return (
    <>
      <div className="navbar">
        <Link to="/" className="button-outlined" id="first-button">
          Yasith Silva / Electronico
        </Link>
        <div className="horizontal-fill"></div>
        {!isHomePage && (
          <Link to="/" className="button">
            Home
          </Link>
        )}
        {!isProjectsPage && !isProjectPage && (
          <Link to="/projects" className="button" style={{ marginLeft: isHomePage ? 0 : '0.5vw' }}>
            Projects
          </Link>
        )}
        {!isAboutPage && (
          <Link to="/about" className="button" style={{ marginLeft: '0.5vw' }}>
            About
          </Link>
        )}
        {!isContactPage && (
          <Link to="/contact" className="button" style={{ marginLeft: '0.5vw' }}>
            Contact
          </Link>
        )}
      </div>
      <div className="divider"></div>

      {isProjectPage && (
        <>
          <div className="navbar" style={{ marginBottom: 0, paddingBottom: 0, paddingTop: 0 }}>
            <div style={{ display: 'flex' }}>
              <Link
                to="/projects"
                className="button-outlined"
                style={{ marginTop: '1vh', border: 0, display: 'flex', alignItems: 'center', gap: '0.5vw' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '2.5vh' }}>chevron_left</span>
                Back to Projects
              </Link>
            </div>
          </div>
        </>
      )}

      {location.pathname === '/projects' && (
        <>
          <div className="navbar" style={{ marginBottom: 0, paddingBottom: 0, paddingTop: 0 }}>
            <div style={{ display: 'flex' }}>
              <button className="button-outlined" style={{ marginTop: '1vh', border: 0 }}>
                Project Showcase
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
