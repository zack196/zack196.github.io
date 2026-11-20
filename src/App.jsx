import { useEffect, useState } from "react";
import "./App.css";

const sections = ["about", "experience", "projects", "contact"];

const projects = [
  {
    name: "Inspection Workspace",
    status: "In development",
    description:
      "A personal desktop application for configuring measurement points, guiding inspections, and reviewing traceable results. Informed by my experience developing inspection software at Safran.",
    technologies: ["Python", "QtPy", "SQLite"],
  },
  {
    name: "Arena — ft_transcendence",
    description:
      "A real-time multiplayer game with server-side simulation, matchmaking, live spectators, and an algorithmic opponent. I built the gameplay feature, WebSocket communication, and match history across the frontend and backend.",
    technologies: ["React", "Node.js", "Fastify", "SQLite", "WebSockets"],
  },
  {
    name: "webserv",
    description:
      "An HTTP server built in C++. I implemented the server infrastructure, non-blocking connections with epoll, incremental request parsing, and HTTP response serialization and transmission.",
    technologies: ["C++", "Linux", "epoll", "HTTP"],
  },
  {
    name: "Reference Recognition",
    description:
      "A web application where administrators manage labeled reference photos and trigger model training, while operators upload images for recognition. Initial testing used Moroccan coins, with industrial-part validation pending.",
    technologies: ["Flask", "PostgreSQL", "PyTorch", "ResNet-18", "Docker"],
  },
  {
    name: "Inception",
    description:
      "A containerized WordPress stack. I wrote the Dockerfiles and Compose configuration, configured HTTPS and internal networking, and automated database initialization with persistent storage.",
    technologies: ["Docker Compose", "Nginx", "MariaDB", "Bash"],
  },
];

function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    function updateActiveSection() {
      let currentSection = sections[0];

      for (const id of sections) {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 180) {
          currentSection = id;
        }
      }

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      setActiveSection(reachedBottom ? "contact" : currentSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="portfolio">
        <header className="sidebar">
          <div>
            <a className="name" href="#about">
              Zakaria El Oirghi
            </a>

            <p className="role">Software Engineer</p>

            <p className="introduction">
              I build applications, real-time experiences, and systems software.
            </p>

            <p className="location">Casablanca, Morocco · Nationwide mobility</p>

            <nav className="navigation" aria-label="Main navigation">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                  aria-current={
                    activeSection === section ? "location" : undefined
                  }
                >
                  <span className="nav-line" aria-hidden="true" />
                  {section}
                </a>
              ))}
            </nav>
          </div>

          <div className="social-links">
            <a href="https://github.com/zack196">GitHub</a>
            <a href="https://www.linkedin.com/in/zakaria-el-oirghi">
              LinkedIn
            </a>
            <a href="mailto:eloirghi4200@gmail.com">Email</a>
          </div>
        </header>

        <main id="main" className="content">
          <section id="about" aria-labelledby="about-heading">
            <h1 id="about-heading" className="section-heading">
              About
            </h1>

            <p>
              My path into software engineering began with{" "}
              <strong>applied mathematics</strong>. At{" "}
              <strong>1337 Khouribga</strong>, I developed my programming
              foundations through projects in C, C++, networking, concurrency,
              and web development, completing the common core in May 2026.
            </p>

            <p>
              During my internship at <strong>Safran Nacelles</strong>, I
              developed tools for digital inspection and image-based reference
              recognition. Working with methods engineers and inspectors
              taught me how user feedback shapes application workflows and
              interface decisions.
            </p>

            <p>
              I enjoy understanding how software works across its layers, from
              processes and networking to interfaces and deployment. I’m seeking{" "}
              <strong>software engineering opportunities throughout Morocco</strong>.
            </p>
          </section>

          <section id="experience" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="section-heading">
              Experience
            </h2>

            <article className="experience-entry">
              <p className="date">Aug — Dec 2026</p>

              <div>
                <h3>Software Development Intern · Safran Nacelles</h3>
                <p className="subtitle">
                  Continuous Improvement · Nouaceur
                </p>

                <p>
                  Developed a desktop inspection application with role-based
                  workflows, tolerance checks, measurement traceability, and
                  PDF reporting. Incorporated feedback from methods engineers
                  and inspectors into a tablet-oriented interface.
                </p>

                <p>
                  Built a reference recognition web application with labeled
                  photo management and training in a dedicated container.
                </p>

                <Tags
                  items={[
                    "Python",
                    "QtPy",
                    "SQLite",
                    "Flask",
                    "PostgreSQL",
                    "Docker",
                  ]}
                />
              </div>
            </article>
          </section>

          <section id="projects" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="section-heading">
              Selected projects
            </h2>

            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.name}>
                  <div className="project-heading">
                    <h3>{project.name}</h3>
                    {project.status && (
                      <span className="project-status">{project.status}</span>
                    )}
                  </div>

                  <p>{project.description}</p>
                  <Tags items={project.technologies} />
                </article>
              ))}
            </div>

            <a className="text-link" href="https://github.com/zack196">
              Explore my GitHub <span aria-hidden="true">↗</span>
            </a>
          </section>

          <section id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="section-heading">
              Contact
            </h2>

            <h3>Let’s work together.</h3>

            <p>
              I’m looking for software engineering opportunities throughout
              Morocco. Get in touch to discuss my work or a role on your team.
            </p>

            <a className="contact-email" href="mailto:eloirghi4200@gmail.com">
              eloirghi4200@gmail.com
            </a>
          </section>

          <footer>
            Designed and built by Zakaria El Oirghi with React.
          </footer>
        </main>
      </div>
    </>
  );
}