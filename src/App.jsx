import React from "react";

const experiences = [
  {
    role: "Autumn Intern",
    organization: "Aunwesha Academy",
    period: "2025",
    description:
      "Worked on data science and machine learning task on Diabetes Analysis and Prediction as part of Autumn Internship Program.",
  },
  {
    role: "Summer Intern",
    organization: "IDEAS Technical Innovation Hub, Indian Statistical Institute, Kolkata",
    period: "2026",
    description:
      "Worked on data science and machine learning task on Used Car Price Prediction as part of the IDEAS-TIH @ ISI Kolkata Summer Internship Program.",
  },
  {
    role: "Private Computer Science Tutor",
    organization: "Independent",
    period: "2024 – Present",
    description:
      "Teaching computer science concepts and helping learners build programming and problem-solving skills.",
  },
];

const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "West Bengal State University",
    period: "2025 – 2027",
    detail: "Currently pursuing",
  },
  {
    degree: "B.Sc. Computer Science (Hons.)",
    institution: "Dum Dum Motijheel College, WBSU",
    period: "2022 – 2025",
    detail: "CGPA: 9.57 / 10",
  },
];

const skills = [
  "Web Development",
  "Python",
  "Pandas",
  "NumPy",
  "SQL",
  "Scikit-learn",
  "Data Analysis",
  "Machine Learning",
];

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

function ExperienceItem({ item }) {
  return (
    <article className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <div className="item-heading">
          <div>
            <h3>{item.role}</h3>
            <p className="item-place">{item.organization}</p>
          </div>
          <span className="item-period">{item.period}</span>
        </div>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

function EducationItem({ item }) {
  return (
    <article className="education-card">
      <div>
        <h3>{item.degree}</h3>
        <p className="item-place">{item.institution}</p>
      </div>
      <div className="education-meta">
        <span>{item.period}</span>
        <small>{item.detail}</small>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home">
          Arik Mukherjee.
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Computer Science Student • Developer</p>
            <h1>
              Hi, I'm <span>Arik Mukherjee.</span>
            </h1>

            <p className="intro">
              I am an M.Sc. Computer Science student interested in web
              development, artificial intelligence, data science, and building
              useful software systems.
            </p>

            <div className="quick-links">
              <a href="mailto:arikmukherjee2022@gmail.com">✉ Email</a>
              <span>•</span>
              <a href="/Arik-Mukherjee-CV.pdf" target="_blank" rel="noreferrer">
                ▣ CV
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/arik-mukherjee/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/arikmukherjee"
                target="_blank"
                rel="noreferrer"
              >
                ◉ GitHub
              </a>
            </div>
          </div>

          <div className="profile-wrap">
            <div
              className="profile-circle"
              aria-label="Profile photo placeholder"
            >
              {/* <span>AM</span> */}
              <img src="/profile.jpg" alt="Arik Mukherjee" />
            </div>
            {/* <p className="photo-note">Replace “AM” with your photo</p> */}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle>Experience</SectionTitle>
          <div className="timeline">
            {experiences.map((item) => (
              <ExperienceItem key={`${item.role}-${item.period}`} item={item} />
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <SectionTitle>Education</SectionTitle>
          <div className="education-list">
            {education.map((item) => (
              <EducationItem key={item.degree} item={item} />
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle>Major Projects</SectionTitle>

          <div className="project-grid">
            <article className="project-card">
              <span className="project-number">01</span>

              <div className="project-header">
                <h3>Sundarban Forest Restoration</h3>
                <span className="project-status">Under Development</span>
              </div>

              <p>
                A Research project on Forest image analysis and species recommendation system for
                suggesting suitable planting choices.
              </p>

              <div className="tags">
                <span>React</span>
                <span>Python</span>
                <span>ML</span>
                <span>OpenCV</span>
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">02</span>
              <h3>Eudify</h3>
              <p>
                A E-learning platform that provides a comprehensive solution for
                online education, including course management, student
                engagement, and assessment tools.
              </p>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section skills-section">
          <SectionTitle>Skills</SectionTitle>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <SectionTitle>Contact</SectionTitle>
          <p>
            Interested in collaborating, discussing a project, or connecting
            about opportunities?
          </p>
          <a className="contact-button" href="mailto:your-email@example.com">
            Get in touch →
          </a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Arik Mukherjee. All rights reserved.</p>
        <p>Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
