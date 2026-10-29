import { useState } from "react";
import {
ArrowDown,
ArrowRight,
ArrowUpRight,
BarChart3,
BriefcaseBusiness,
CheckCircle2,
Code2,
Database,
Mail,
Menu,
Workflow,
X
} from "lucide-react";


const skills = [
  { name: "Python", group: "Analytics" },
  { name: "Pandas", group: "Analytics" },
  { name: "SQL", group: "Analytics" },
  { name: "Excel", group: "Analytics" },
  { name: "Power BI", group: "Analytics" },
  { name: "Data visualization", group: "Analytics" },
  { name: "ETL pipelines", group: "Engineering" },
  { name: "Data cleaning", group: "Engineering" },
  { name: "Database design", group: "Engineering" },
  { name: "Streamlit", group: "Engineering" },
  { name: "Git & GitHub", group: "Tools" },
  { name: "React", group: "Tools" },
];

const projects = [
  {
    number: "01",
    category: "DATA ENGINEERING",
    title: "Local Sales Store ETL Pipeline",
    description: "An end-to-end data pipeline that extracts sales records, cleans and transforms data, removes duplicate records, and loads the results into a database for analysis.",
    tools: ["Python", "Pandas", "SQLite"],
    icon: Workflow,
    status: "Built",
    link: "",
  },
  {
    number: "02",
    category: "DATA ENGINEERING",
    title: "Retail Sales Data Warehouse",
    description: "A sales data warehouse project featuring structured analytical tables, a fact table, and SQL queries for exploring retail performance.",
    tools: ["Python", "SQL", "SQLite"],
    icon: Database,
    status: "Built",
    link: "",
  },
  {
    number: "03",
    category: "DATA PREPARATION",
    title: "Wesley's Data Prep Suite",
    description: "My first data preparation project. Upload CSV or Excel files, preview datasets, automatically or manually clean data, handle missing values, remove duplicates, review data quality reports, and download cleaned results.",
    tools: ["Python", "Streamlit", "Pandas"],
    icon: Database,
    status: "Live",
    link: "https://wesleys-data-prep-suite.streamlit.app/",
    github: "https://github.com/mr-wes/wesleys-data-prep-suite"
  },
  {
    number: "04",
    category: "DATA ANALYTICS",
    title: "Sales Performance Analytics Dashboard",
    description: "An interactive dashboard for exploring sales trends, comparing product performance, and communicating business insights through visual analytics.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly"],
    icon: BarChart3,
    status: "Built",
    link: "",
  },
];

function SectionLabel({ children }) {
  return <p className="section-label"><span />{children}</p>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Analytics", "Engineering", "Tools"];
  const filteredSkills = activeFilter === "All" ? skills : skills.filter((skill) => skill.group === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Joshua Wesley Obaigwa home">
          <span className="brand-mark">JW</span>
          <span className="brand-name">Joshua Wesley <b>Obaigwa</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero dark-section" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="availability"><span className="status-dot" /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <p className="hero-kicker">DATA ANALYTICS <span>+</span> DATA ENGINEERING</p>
            <h1>Turning raw data into <em>meaningful</em> outcomes.</h1>
            <p className="hero-copy">
              Hi, I'm <strong>Joshua Wesley Obaigwa</strong> â€” an aspiring data professional interested in uncovering insights, building reliable data workflows, and solving real-world problems with data.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="#about">More about me <ArrowDown size={16} /></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Curious mind. Practical projects. Continuous growth.</div>
          </div>
          <div className="hero-visual" aria-label="Abstract data visualization illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-card main-data-card">
              <div className="card-topline"><span className="mini-dot" /><span className="mini-dot" /><span className="mini-dot" /><span className="card-window-label">DATA OVERVIEW</span></div>
              <div className="chart-heading">From data to decisions</div>
              <div className="chart-subheading">A process built on curiosity</div>
              <div className="chart-bars">
                {[35, 54, 43, 70, 58, 82, 65, 94, 76, 100, 84, 112].map((height, i) => (
                  <span key={i} style={{ height: `${height}px` }} className={i === 9 ? "bar-highlight" : ""} />
                ))}
              </div>
              <div className="chart-axis"><span>COLLECT</span><span>TRANSFORM</span><span>ANALYZE</span></div>
            </div>
            <div className="floating-chip chip-python"><Code2 size={16} /> Python</div>
            <div className="floating-chip chip-sql"><Database size={16} /> SQL</div>
            <div className="floating-chip chip-insight"><BarChart3 size={16} /> Insights</div>
            <div className="visual-caption">Curiosity â†’ clean data â†’ clearer decisions</div>
          </div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div><span className="strip-number">01</span><span>Explore the data</span></div>
          <div><span className="strip-number">02</span><span>Build the workflow</span></div>
          <div><span className="strip-number">03</span><span>Share the insight</span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-aside"><SectionLabel>ABOUT ME</SectionLabel><span className="aside-index">01 / 04</span></div>
          <div className="section-main about-main">
            <h2>Analytical thinking.<br /><span>Engineering mindset.</span></h2>
            <div className="about-columns">
              <p className="lead-copy">I'm building my skills across data analytics and data engineering, with a focus on turning messy, raw information into something useful.</p>
              <div className="about-detail">
                <p>I enjoy exploring datasets, finding patterns, and learning how data moves from its source through cleaning and transformation to the point where it can support better decisions.</p>
                <p>I'm growing through hands-on projects and continuous learning. This portfolio is a living record of that journey â€” what I'm building, what I'm learning, and how I'm improving.</p>
                <a className="text-link" href="#contact">Have an opportunity in mind? <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="focus-cards">
              <article className="focus-card"><span className="focus-icon"><BarChart3 size={20} /></span><h3>Data Analytics</h3><p>Explore data, find patterns, and communicate insights clearly.</p></article>
              <article className="focus-card"><span className="focus-icon"><Workflow size={20} /></span><h3>Data Engineering</h3><p>Clean, transform, and organize data for dependable analysis.</p></article>
              <article className="focus-card"><span className="focus-icon"><BriefcaseBusiness size={20} /></span><h3>Business Thinking</h3><p>Connect technical work to questions that matter in practice.</p></article>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-aside"><SectionLabel>MY TOOLKIT</SectionLabel><span className="aside-index">02 / 04</span></div>
          <div className="section-main">
            <div className="section-heading-row">
              <div><h2>Tools I'm learning<br />to put to work.</h2><p className="section-intro">A growing toolkit for analysis, data preparation, and building useful solutions.</p></div>
              <span className="heading-decoration">SKILLS / STACK</span>
            </div>
            <div className="filter-row" role="group" aria-label="Filter skills">
              {filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter-button active" : "filter-button"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
            <div className="skills-grid">
              {filteredSkills.map((skill, index) => <div className="skill-item" key={skill.name}><span className="skill-index">{String(index + 1).padStart(2, "0")}</span><span>{skill.name}</span><ArrowUpRight size={15} /></div>)}
            </div>
            <p className="skills-note"><CheckCircle2 size={16} /> Skills shown reflect my current learning and project interests; this list will grow with practical experience.</p>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="projects-inner">
            <div className="projects-top">
              <div><SectionLabel>SELECTED WORK</SectionLabel><h2>Projects with a<br /><span>purpose.</span></h2></div>
              <p>Practical work is where learning becomes visible. These projects represent my current focus and the work I'm developing next.</p>
            </div>
            <div className="project-list">
  {projects.map((project) => {
    const ProjectIcon = project.icon;

    return (
      <article className="project-card" key={project.number}>
        <div className="project-number">{project.number}</div>

        <div className="project-icon">
          <ProjectIcon size={23} />
        </div>

        <div className="project-details">
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="tag-row">
            {project.tools.map((tool) => (
              <span className="tool-tag" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="project-end">
          <span className="project-status">
            <span />
            {project.status}
          </span>

          <div className="project-actions">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title}`}
                title="Open live project"
              >
                <ArrowUpRight size={20} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                title="View source code on GitHub"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </article>
    );
  })}
</div>
            <div className="projects-footnote"><span className="footnote-mark">*</span> Some projects are still in development. Links and results will be added as each project is completed and published.</div>
          </div>
        </section>

        <section className="section journey-section">
          <div className="section-aside"><SectionLabel>WHAT'S NEXT</SectionLabel><span className="aside-index">03 / 04</span></div>
          <div className="section-main journey-main">
            <h2>Always learning.<br /><span>Always building.</span></h2>
            <p className="section-intro">My next step is to turn each learning milestone into a clear, documented project â€” with code, methodology, and lessons learned.</p>
            <div className="journey-steps">
              <div><span className="journey-step-number">01</span><div><h3>Build</h3><p>Develop practical projects with real datasets and clear goals.</p></div></div>
              <div><span className="journey-step-number">02</span><div><h3>Document</h3><p>Explain the process, tools, decisions, and outcomes in each project.</p></div></div>
              <div><span className="journey-step-number">03</span><div><h3>Improve</h3><p>Use feedback to strengthen technical skills and project quality.</p></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section dark-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-content">
            <SectionLabel>LET'S CONNECT</SectionLabel>
            <h2>Good things happen<br />when we <em>connect.</em></h2>
            <p>Interested in data, collaboration, internships, or an opportunity to learn and contribute? I'd be glad to connect.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:your.email@example.com"><Mail size={17} /> Email me <ArrowUpRight size={16} /></a>
             <a className="button button-ghost" href="https://github.com/" target="_blank" rel="noreferrer">
  GitHub <ArrowUpRight size={16} />
</a>
<a className="button button-ghost" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
  LinkedIn <ArrowUpRight size={16} />
</a>
              <a className="button button-ghost" href="https://www.LinkedinIcon.com/" target="_blank" rel="noreferrer"><span size={17} /> LinkedinIcon <ArrowUpRight size={16} /></a>
            </div>
            <p className="contact-edit-note">Before publishing: replace the sample email and social links with your own profiles.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">JW</span><span className="brand-name">Joshua Wesley <b>Obaigwa</b></span></a>
        <p>Designed with curiosity. Built for what's next.</p>
        <a href="#home" className="back-top">BACK TO TOP â†‘</a>
        <span className="copyright">Â© {new Date().getFullYear()} Joshua Wesley Obaigwa</span>
      </footer>
    </div>
  );
}

export default App;

