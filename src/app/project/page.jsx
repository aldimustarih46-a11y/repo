import { projects } from '../data/project';

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      <p className="text-gray-700 mb-8">
        Below are some projects that I have worked on as part of my learning
        journey in web development.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-gray-500">
              Tech Stack: React, Next.js, Tailwind CSS
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
