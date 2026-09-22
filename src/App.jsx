function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">
          Devansh<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <p className="eyebrow">FULL-STACK DEVELOPER</p>

          <h1>
            Hi, I'm <span>Devansh Tiwari.</span>
            <br />
            I build modern web applications.
          </h1>

          <p className="hero-text">
            Full-stack developer focused on building practical web
            applications, AI-powered products and scalable backend systems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>

            <a
              href="https://github.com/devanshtiwari856"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <p className="section-label">ABOUT ME</p>

          <h2>Building with code, learning by shipping.</h2>

          <p className="section-text">
            I'm a full-stack developer who enjoys turning ideas into working
            products. My current focus is React, Node.js, Express, MongoDB and
            AI-powered applications.
          </p>

          <p className="section-text">
            I recently built a full-stack AI SaaS platform with authentication,
            AI chat, code generation, image generation, PDF processing and
            persistent data.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <p className="section-label">TECH STACK</p>

          <h2>Technologies I work with</h2>

          <div className="skills-grid">
            <div>JavaScript</div>
            <div>React</div>
            <div>Vite</div>
            <div>Node.js</div>
            <div>Express.js</div>
            <div>MongoDB</div>
            <div>REST APIs</div>
            <div>JWT Authentication</div>
            <div>Gemini AI</div>
            <div>Git & GitHub</div>
            <div>Vercel</div>
            <div>Render</div>
          </div>
        </section>

        {/* PROJECT */}
        <section id="projects" className="section">
          <p className="section-label">FEATURED PROJECT</p>

          <h2>AI+ SaaS Platform</h2>

          <div className="project-card">
            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-status">Production Project</span>
            </div>

            <h3>AI+ SaaS Platform</h3>

            <p>
              A full-stack AI workspace built with React, Vite, Express,
              MongoDB and Gemini. The platform includes authentication,
              persistent AI chat history, AI code generation, image generation,
              PDF upload and document summarization.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Gemini AI</span>
            </div>

            <div className="project-links">
              <a
                href="https://ai-saa-s-platform-opu2.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo ↗
              </a>

              <a
                href="https://github.com/devanshtiwari856/AI-SaaS-Platform"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="certifications" id="certifications">
  <div className="section-container">

    <div className="section-heading">
      <span className="section-label">CERTIFICATION</span>

      <h2>Learning & Certifications</h2>

      <p>
        Continuous learning through practical development and full-stack web
        development training.
      </p>
    </div>

    <div className="certification-grid">
      <article className="certification-card">

        <div className="certificate-top">
          <div className="certificate-icon">
            🏆
          </div>

          <span className="certificate-badge">
            VERIFIED CERTIFICATE
          </span>
        </div>

        <div className="certificate-content">

          <h3>Free Full Stack Developer Course</h3>

          <p className="certificate-description">
            Successfully completed a Full Stack Developer course covering
            modern web development concepts and practical development skills.
          </p>

          <div className="certificate-details">

            <div>
              <span>Issued</span>
              <strong>22 September 2026</strong>
            </div>

            <div>
              <span>Credential ID</span>
              <strong>10767723</strong>
            </div>

          </div>

          <div className="certificate-skills">
            <span>Full Stack Development</span>
            <span>Web Development</span>
            <span>Programming</span>
            <span>Practical Learning</span>
          </div>

        </div>
      </article>
    </div>

  </div>
</section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <p className="section-label">CONTACT</p>

          <h2>Let's connect.</h2>

          <p className="section-text">
            I'm currently looking for opportunities where I can contribute,
            learn and grow as a full-stack developer.
          </p>

          <div className="contact-links">
            <a
              href="mailto:devanshtiwari856@gmail.com"
              className="contact-link"
            >
              Email ↗
            </a>

            <a
              href="https://github.com/devanshtiwari856"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Devansh Tiwari. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;