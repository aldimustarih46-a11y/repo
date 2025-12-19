import "./Projects.css";

const projects = [
  {
    title: "Website Portofolio",
    desc: "Website personal menggunakan React dan Vite dengan konsep SPA.",
    tech: "React, CSS, Vite",
  },
  {
    title: "UI Design Landing Page",
    desc: "Desain landing page modern dengan fokus visual dan UX.",
    tech: "Figma, UI/UX",
  },
  {
    title: "Mini Blog App",
    desc: "Aplikasi blog sederhana dengan routing client-side.",
    tech: "React Router",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Proyek Saya</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span>{p.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
