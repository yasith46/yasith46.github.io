export default function About() {
  return (
    <div className="centered-section" style={{ height: 'auto', padding: '5vh 1vw' }}>
      <div className="card simple-card" style={{ height: 'auto', textAlign: 'left', padding: '3vh 2vw', maxWidth: '80vw', marginBottom: '3vh' }}>
        <h1 style={{ margin: '0 0 2vh 0', textAlign: 'center', fontSize: '4vh' }}>About Me</h1>
        <div className="card-divider"></div>

        <div className="about-content">
          <div className="about-section">
            <div className="about-header">
              <div className="about-image">
                <img src="/img/profilepic.jpeg" className="profile-pic-about" alt="Profile" />
              </div>
              <div className="about-name">
                <h2 style={{ marginTop: 0, marginBottom: '1vh' }}>Yasith Silva</h2>
                <p style={{ fontSize: '1.9vh', margin: 0, color: '#666' }}>Electronics Engineer & Full-Stack Developer</p>
              </div>
            </div>

            <p style={{ fontSize: '2.1vh', marginTop: '2vh', marginBottom: '2vh' }}>
              Passionate about solving everyday problems with innovative hardware and software solutions. I specialize in embedded systems, IoT, and frontend development, bringing ideas to life from concept to product.
            </p>

            <h3 style={{ marginTop: '3vh', marginBottom: '1.5vh' }}>Skills</h3>
            <div className="skills-container">
              <div className="skill-category">
                <h4 style={{ margin: '0 0 1vh 0', fontSize: '1.8vh' }}>Hardware</h4>
                <div className="pill">PCB Design</div>
                <div className="pill">Schematic Design</div>
                <div className="pill">High-Speed Design</div>
                <div className="pill">Altium Designer</div>
                <div className="pill">KiCad</div>
              </div>
              <div className="skill-category">
                <h4 style={{ margin: '0 0 1vh 0', fontSize: '1.8vh' }}>Firmware</h4>
                <div className="pill">C/C++</div>
                <div className="pill">Python</div>
                <div className="pill">Arduino</div>
                <div className="pill">ESP-IDF</div>
                <div className="pill">STM</div>
                <div className="pill">Embedded Linux</div>
              </div>
              <div className="skill-category">
                <h4 style={{ margin: '0 0 1vh 0', fontSize: '1.8vh' }}>Frontend</h4>
                <div className="pill">JavaScript</div>
                <div className="pill">React</div>
                <div className="pill">TypeScript</div>
                <div className="pill">UI/UX Design</div>
              </div>
              <div className="skill-category">
                <h4 style={{ margin: '0 0 1vh 0', fontSize: '1.8vh' }}>IoT</h4>
                <div className="pill">WiFi</div>
                <div className="pill">Bluetooth</div>
                <div className="pill">LoRA</div>
                <div className="pill">UWB</div>
              </div>
            </div>
          </div>

          <div className="about-timeline">
            <div className="timeline-section">
              <h3 style={{ marginTop: 0 }}>Education</h3>
              <div className="timeline-item">
                <h4 style={{ margin: '0 0 0.5vh 0' }}>University of Moratuwa - Sri Lanka / BSc. (Hons.) Electronic and Telecommunication Engineering</h4>
                <p style={{ margin: '0 0 1vh 0', fontSize: '1.8vh', color: '#666' }}>Graduation: 2026</p>
                <p style={{ margin: 0, fontSize: '1.8vh' }}>CGPA: 3.67/4.00, Study area - Embedded Systems, Digital Electronics</p>
              </div>

              <div className="timeline-item">
                <h4 style={{ margin: '0 0 0.5vh 0' }}>D.S. Senanayake College - Colombo 07 Sri Lanka</h4>
                <p style={{ margin: '0 0 1vh 0', fontSize: '1.8vh', color: '#666' }}>Graduation: 2020</p>
                <p style={{ margin: 0, fontSize: '1.8vh' }}>G.C.E. A/L in Physical Stream - 3As (z-score: 2.21)</p>
              </div>
            </div>

            <div className="timeline-section">
              <h3>Experience</h3>
              <div className="timeline-item">
                <h4 style={{ margin: '0 0 0.5vh 0' }}>Trainee Associate Electronic Engineer</h4>
                <p style={{ margin: '0 0 1vh 0', fontSize: '1.8vh', color: '#666' }}>Zone24x7 (Pvt.) Ltd.</p>
                <p style={{ margin: 0, fontSize: '1.8vh' }}>Dec 2024 - Jun 2025: Worked in embedded systems, UWB, IoT projects</p>
              </div>
              <div className="timeline-item">
                <h4 style={{ margin: '0 0 0.5vh 0' }}>Freelance PCB Designer</h4>
                <p style={{ margin: 0, fontSize: '1.8vh' }}>May 2024 - Present</p>
              </div>
              <div className="timeline-item">
                <h4 style={{ margin: '0 0 0.5vh 0' }}>Visiting Instructor</h4>
                <p style={{ margin: '0 0 1vh 0', fontSize: '1.8vh', color: '#666' }}>Skillsurf</p>
                <p style={{ margin: 0, fontSize: '1.8vh' }}>Dec 2025 - May 2026: For Telecommunications laborotaries</p>
              </div>
              <div className="timeline-item">
                <h4 style={{ margin: '0 0 0.5vh 0' }}>Course Instructor</h4>
                <p style={{ margin: '0 0 1vh 0', fontSize: '1.8vh', color: '#666' }}>Skillsurf</p>
                <p style={{ margin: 0, fontSize: '1.8vh' }}>Dec 2024 - May 2025: Embedded Product Design for IoT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
