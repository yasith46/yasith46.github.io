import { Link } from 'react-router-dom'
import { projects } from '../data/projects-new'

export default function Home() {
  return (
    <>
      {/* Hero Section - 3 Columns */}
      <div className="centered-section" style={{ flexDirection: 'row' }}>
        {/* Column 1: Hero + Skills */}
        <div className="centered-sec-col" style={{ padding: '0 0.5vw 0 0' }}>
          <div className="card" style={{ height: '48vh', padding: 0 }}>
            <div className="card-bg-section">
              <img src="/img/bg_gradient.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Background" />
            </div>
            <div className="card-content-section">
              <h1 id="breathing-title" style={{ position: 'absolute', left: '2vw', textAlign: 'left', marginTop: '6vh' }}>
                Breathing Life into <br />Ideas...
              </h1>
            </div>
            <div className="profile-pic-container">
              <img src="/img/profilepic.jpeg" className="profile-pic" alt="Profile" />
            </div>
          </div>

          <div className="vfill" style={{ height: '2vh' }}></div>

          <div className="card simple-card" style={{ height: '35vh', textAlign: 'left', padding: '2vh', paddingLeft: '1.3vw' }}>
            <h3 style={{ margin: 0, marginBottom: '2vh', marginLeft: '0.25vw' }}>Skills</h3>
            <div className="card-divider"></div>
            <div>
              <div className="pill">Embedded Systems</div>
              <div className="pill">IoT</div>
              <div className="pill">Highspeed PCB</div>
            </div>
            <div>
              <div className="pill">Firmware</div>
              <div className="pill">Frontend</div>
              <div className="pill">Embedded ML</div>
            </div>
            <div>
              <div className="pill">C/C++</div>
              <div className="pill">Python</div>
              <div className="pill">JavaScript</div>
              <div className="pill">React</div>
            </div>
          </div>
        </div>

        {/* Column 2: About + Expansion */}
        <div className="centered-sec-col" style={{ padding: '0 0.5vw' }}>
          <div className="card simple-card" style={{ height: '29vh', textAlign: 'left', padding: '2vh', paddingLeft: '1.3vw' }}>
            <h3 style={{ margin: 0, marginBottom: '2vh', marginLeft: '0.25vw' }}>About Me</h3>
            <div className="card-divider"></div>
            <p style={{ fontSize: '2.1vh' }}>
              Hi, I'm Yasith. I am an Engineer trying to solve everyday problems with electronics. I also do frontend design.
              My passion is bringing things to life, from the idea to a product. And my goal, is to make tomorrow better, with what I know and learn. 
              <Link to="/about" style={{ color: '#333', fontWeight: 'bold', textDecoration: 'none', fontSize: '2.1vh' }}>
                Read More >>>
              </Link>
            </p>
          </div>
          <div className="vfill" style={{ height: '2vh' }}></div>
          {/* Slideshow 1 */}
          <div className="card" id="expansion-card" style={{ height: '55vh', padding: 0, overflow: 'hidden' }}>
            <img src="/img/expansion.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Expansion" />
          </div>
        </div>

        {/* Column 3: Article + CV + SportSense + Social */}
        <div className="centered-sec-col" style={{ padding: '0 0 0 0.5vw' }}>
          <div className="centered-sec-col" style={{ flexDirection: 'row', padding: 0, height: '30vh' }}>
            {/* What I would've done differently */}
            <div className="card" style={{ height: '30vh', marginLeft: 0, marginRight: '0.5vw', backgroundColor: '#FD7250', alignItems: 'left', padding: '2vh', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5vw' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '8vh', color: '#333', marginLeft: '-0.5vw' }}>article</span>
                  <h1 style={{ fontSize: '2.8vh', marginTop: '1vh', marginBottom: '0.5vh', color: '#333', margin: 0 }}>What I would've done differently...</h1>
                </div>
                <a style={{ fontSize: '2.1vh', margin: 0, marginTop: '2vh', color: '#333', textDecoration: 'none', fontWeight: 'bold' }} href="https://medium.com/@yasithudana3/what-would-i-have-done-differently-df5150539706" target="_blank" rel="noopener noreferrer">
                  Read the Article >>>
                </a>
              </div>
            </div>

            {/* CV Card */}
            <div className="card simple-card" style={{ height: '30vh', marginRight: 0, marginLeft: '0.5vw', textAlign: 'left', padding: '2vh', display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ marginTop: 0, marginBottom: 0, fontSize: '10vh' }}>CV</h1>
              <div className="vfill" style={{ height: '1vh' }}></div>
              <button className="button" style={{ marginTop: 'auto', width: '100%', display: 'flex', alignItems: 'center' }} onClick={() => window.location.href = 'https://raw.githubusercontent.com/yasith46/yasith46.github.io/main/resources/CV%20-%20Yasith%20Silva.pdf'}>
                <div style={{ textAlign: 'left' }}>Download CV</div>
                <div className="horizontal-fill"></div>
                <svg style={{ width: '3vh', height: '3vh', fill: '#E3E3E3' }} viewBox="0 0 24 24">
                  <path d="M12,18l-7.5-7.5,2.1-2.17,3.9,3.9V0h3V12.23l3.9-3.9,2.1,2.17ZM3,24a2.88,2.88,0,0,1-2.12-.88A2.88,2.88,0,0,1,0,21V16.5H3V21H21V16.5h3V21a3,3,0,0,1-3,3Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="vfill" style={{ height: '2vh' }}></div>

          {/* SportSense Card */}
          <div className="card" id="sportsense-card" style={{ height: '41vh', padding: 0, overflow: 'hidden' }}>
            <img src="/img/sportsense.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="SportSense" />
          </div>

          <div className="vfill" style={{ height: '2vh' }}></div>

          {/* Social Icons */}
          <div className="card" style={{ height: '10vh', backgroundColor: '#333', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '3vw', paddingLeft: '2vw', paddingRight: '2vw' }}>
            <a href="https://www.linkedin.com/in/yasithsilva/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: '5vh', height: '3.25vh', fill: '#E3E3E3' }} viewBox="0 0 24 24">
                <path d="M21.33,0H2.67A2.67,2.67,0,0,0,0,2.67V21.34A2.66,2.66,0,0,0,2.67,24H21.33A2.66,2.66,0,0,0,24,21.34V2.67A2.67,2.67,0,0,0,21.33,0ZM7.26,20.67H3.68V9.12H7.26ZM5.45,7.6A2.13,2.13,0,1,1,7.57,5.47,2.12,2.12,0,0,1,5.45,7.6ZM20.67,20.67H17.11V14.61c0-1.67-.64-2.6-1.95-2.6S13,13,13,14.61v6.06H9.54V9.12H13v1.55a4,4,0,0,1,3.48-1.91c2.45,0,4.21,1.5,4.21,4.59Z" />
              </svg>
            </a>
            <a href="https://github.com/yasith46" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: '5vh', height: '3.25vh', fill: '#E3E3E3' }} viewBox="0 0 24 24">
                <path d="M12,0A12.15,12.15,0,0,0,0,12.3,12.27,12.27,0,0,0,8.2,24c.6.1.83-.26.83-.59s0-1.26,0-2.29c-3,.57-3.8-.75-4-1.44a4.37,4.37,0,0,0-1.23-1.74c-.42-.23-1-.8,0-.82a2.42,2.42,0,0,1,1.84,1.26,2.54,2.54,0,0,0,3.5,1,2.58,2.58,0,0,1,.76-1.65c-2.67-.3-5.46-1.37-5.46-6.07A4.88,4.88,0,0,1,5.61,8.35a4.53,4.53,0,0,1,.12-3.26s1-.32,3.3,1.26a11.18,11.18,0,0,1,6,0c2.3-1.6,3.3-1.26,3.3-1.26a4.53,4.53,0,0,1,.12,3.26,4.8,4.8,0,0,1,1.23,3.31c0,4.72-2.81,5.77-5.47,6.07A3,3,0,0,1,15,20c0,1.64,0,3,0,3.38s.22.71.83.59A12.3,12.3,0,0,0,24,12.3,12.15,12.15,0,0,0,12,0Z" />
              </svg>
            </a>
            <a href="https://medium.com/@yasithudana3" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: '5vh', height: '3.25vh', fill: '#E3E3E3' }} viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.59 0-1.07-2.3-1.09-5.3h-.02c.02-3 .5-5.3 1.09-5.3.66 0 1.19 2.58 1.19 5.75z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@yasithsilva5513" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: '5vh', height: '3vh', fill: '#E3E3E3' }} viewBox="0 0 34.28 24">
                <path d="M33.57,3.75a4.29,4.29,0,0,0-3-3C27.86,0,17.14,0,17.14,0S6.42,0,3.75.72a4.26,4.26,0,0,0-3,3A44.36,44.36,0,0,0,0,12a44.36,44.36,0,0,0,.72,8.25,4.26,4.26,0,0,0,3,3C6.42,24,17.14,24,17.14,24s10.72,0,13.4-.72a4.29,4.29,0,0,0,3-3A45,45,0,0,0,34.28,12,45,45,0,0,0,33.57,3.75ZM13.71,17.14V6.86L22.62,12Z" />
              </svg>
            </a>
            <a href="mailto:yasithudana3@gmail.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: '5vh', height: '3vh', fill: '#E3E3E3' }} viewBox="0 0 30 24">
                <path d="M3,24a2.88,2.88,0,0,1-2.12-.88A2.88,2.88,0,0,1,0,21V3A2.89,2.89,0,0,1,.88.88,2.88,2.88,0,0,1,3,0H27a2.88,2.88,0,0,1,2.12.88A2.89,2.89,0,0,1,30,3V21a3,3,0,0,1-3,3ZM15,13.5,3,6V21H27V6Zm0-3L27,3H3ZM3,6V6Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Project Showcase Section */}
      <div className="navbar">
        <div style={{ display: 'flex' }}>
          <button className="button-outlined" style={{ marginTop: '1vh' }}>Project Showcase</button>
          <button className="button-outlined" style={{ marginLeft: '0.5vw', marginTop: '1vh', borderColor: 'transparent', cursor: 'pointer' }} onClick={() => window.location.href = '/projects'}>
            See More >>>
          </button>
        </div>
      </div>

      <div id="projects-section" className="centered-section" style={{ flexDirection: 'row', marginTop: 0 }}>
        <div className="centered-sec-col" style={{ padding: '0 0.5vw 0 0' }}>
          <div className="card" style={{ height: '75vh', padding: 0 }}>
            <div className="card-bg-section" style={{ flex: '0 0 75%' }}>
              <img src="/img/expansion1.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="CAI" />
            </div>
            <div className="card-content-section" style={{ flex: '0 0 25%', paddingTop: '1vh' }}>
              <h1 style={{ position: 'absolute', left: '2vw', textAlign: 'left', marginTop: 0 }}>Chip-Aware Instrument</h1>
              <p style={{ position: 'absolute', left: '2vw', textAlign: 'left', marginTop: '10vh', fontSize: '2.1vh', width: '80%' }}>
                Final Year Project -- A unified hardware/software platform for IC configuration and evaluation...
                <Link to="/project/cai" style={{ color: '#333', fontWeight: 'bold', textDecoration: 'none', fontSize: '2.1vh' }}>
                  Read More >>>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="centered-sec-col" style={{ padding: '0 0 0 0.5vw' }}>
          <div className="card" style={{ height: '75vh', padding: 0 }}>
            <div className="card-bg-section" style={{ flex: '0 0 75%' }}>
              <img src="/img/andon1.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Andon" />
            </div>
            <div className="card-content-section" style={{ flex: '0 0 25%', paddingTop: '1vh' }}>
              <h1 style={{ position: 'absolute', left: '2vw', textAlign: 'left', marginTop: 0 }}>Wireless Reconfigurable Andon</h1>
              <p style={{ position: 'absolute', left: '2vw', textAlign: 'left', marginTop: '10vh', fontSize: '2.1vh', width: '40vw' }}>
                A system to alert and document production issues, equipped with maintenance prediction...
                <Link to="/project/andon" style={{ color: '#333', fontWeight: 'bold', textDecoration: 'none', fontSize: '2.1vh' }}>
                  Read More >>>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What I Do Section */}
      <div id="what-i-do" className="navbar" style={{ backgroundColor: '#366177' }}>
        <button className="button-outlined" style={{ marginTop: '5vh', borderColor: '#ffffff', color: '#ffffff' }}>
          What I Do
        </button>
      </div>
      <div id="what-i-do-content" className="centered-section" style={{ flexDirection: 'row', marginTop: 0, height: 'auto', marginBottom: 0, backgroundColor: '#366177', padding: '2vh' }}>
        <div className="centered-sec-col" style={{ padding: '0 0.5vw 0 0' }}>
          <div className="card simple-card" style={{ height: '20vh', textAlign: 'left', padding: '2vh', paddingLeft: '1.3vw', backgroundColor: 'transparent', color: '#fff' }}>
            <h3 style={{ margin: 0, marginBottom: '2vh', marginLeft: '0.25vw' }}>01. PCB Design</h3>
            <div className="card-divider"></div>
            <p style={{ fontSize: '2.1vh' }}>I do multilayer PCB designs, including hierarchical schematic design, with capabilities of high-speed signals. Altium Designer and KiCad are my most used ECAD software.</p>
          </div>
          <div className="vfill" style={{ height: '2vh' }}></div>
          <div className="card simple-card" style={{ height: '20vh', textAlign: 'left', padding: '2vh', paddingLeft: '1.3vw', backgroundColor: 'transparent', color: '#fff' }}>
            <h3 style={{ margin: 0, marginBottom: '2vh', marginLeft: '0.25vw' }}>03. Firmware Development</h3>
            <div className="card-divider"></div>
            <p style={{ fontSize: '2.1vh' }}>I do Firmware development in C / C++, and Python. I have worked on frameworks such as Arduino, ESP-IDF, STM, and also have worked on Baremetal Projects.</p>
          </div>
        </div>
        <div className="centered-sec-col" style={{ padding: '0 0 0 0.5vw' }}>
          <div className="card simple-card" style={{ height: '20vh', textAlign: 'left', padding: '2vh', paddingLeft: '1.3vw', backgroundColor: 'transparent', color: '#fff' }}>
            <h3 style={{ margin: 0, marginBottom: '2vh', marginLeft: '0.25vw' }}>02. Internet of Things</h3>
            <div className="card-divider"></div>
            <p style={{ fontSize: '2.1vh' }}>I have worked on several Internet of Things projects including WiFi, Bluetooth, LoRA, and UWB. I have worked in both the hardware and firmware parts.</p>
          </div>
          <div className="vfill" style={{ height: '2vh' }}></div>
          <div className="card simple-card" style={{ height: '20vh', textAlign: 'left', padding: '2vh', paddingLeft: '1.3vw', backgroundColor: 'transparent', color: '#fff' }}>
            <h3 style={{ margin: 0, marginBottom: '2vh', marginLeft: '0.25vw' }}>04. Frontend Development</h3>
            <div className="card-divider"></div>
            <p style={{ fontSize: '2.1vh' }}>I have worked on frontend development and UI/UX design. I have experience with React, Typescript, and modern web technologies.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="centered-section" style={{ marginTop: 0, height: '30vh', marginBottom: 0, backgroundColor: '#184257', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '3vh' }}>
        <div style={{ textAlign: 'left', fontFamily: "'Courier New', Courier, monospace", width: '25%', paddingLeft: '1vw', color: '#fff' }}>
          <h1 style={{ marginTop: '5vh' }}>Contact Me</h1>
          <div>
            <p style={{ marginBottom: '1vh' }}>
              <b>Yasith Silva</b>
            </p>
            <p style={{ marginTop: 0 }}>
              <a href="mailto:yasithudana3@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '2.1vh' }}>
                yasithudana3@gmail.com
              </a>
              <br />
              <a href="tel:+94711495119" style={{ color: '#fff', textDecoration: 'none', fontSize: '2.1vh' }}>
                +94 71 149 5119
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
