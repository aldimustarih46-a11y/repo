import { projects } from '../../data/project';

export default function ProjectDetail({ params }) {
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center mt-10">Project not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>

      <p className="text-sm text-gray-500 mb-4">
        Tech Stack: React, Next.js, Tailwind CSS
      </p>

      <a
        href="/project"
        className="text-blue-600 hover:underline"
      >
        ← Back to Projects
      </a>
    </div>
  );
}
