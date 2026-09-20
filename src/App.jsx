function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">Devansh<span>.</span></div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <p className="eyebrow">FULL-STACK DEVELOPER</p>

          <h1>
            Hi, I'm <span>Devansh Tiwari.</span>
            <br />
            I build modern web applications.
          </h1>

          <p className="hero-text">
            Full-stack developer focused on building practical web applications,
            AI-powered products and scalable backend systems.
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

            <a
              href="https://github.com/devanshtiwari856/AI-SaaS-Platform"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Source on GitHub →
            </a>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="section-label">CONTACT</p>
          <h2>Let's connect.</h2>

          <p className="section-text">
            I'm currently looking for opportunities where I can contribute,
            learn and grow as a full-stack developer.
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/devanshtiwari856"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=devanshtiwari856@gmail.com"
  target="_blank"
  rel="noreferrer"
>
              Email
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