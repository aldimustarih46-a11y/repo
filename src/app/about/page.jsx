export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        I am an Informatics student with a strong interest in web development,
        especially in building modern, responsive, and user-friendly web
        applications.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I am currently learning and working with modern web technologies such as
        <strong> React.js</strong>, <strong>Next.js</strong>, and
        <strong> Tailwind CSS</strong>. I also have a solid understanding of
        HTML, CSS, JavaScript, and the concepts of Single Page Applications (SPA)
        and Server-Side Rendering (SSR).
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        This portfolio website was created as part of a practical assignment to
        understand the fundamentals of <strong>Next.js App Router</strong>,
        file-based routing, and global layouts.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Skills</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>HTML, CSS, and JavaScript</li>
        <li>React.js & Next.js</li>
        <li>Tailwind CSS</li>
        <li>Basic UI/UX Design</li>
        <li>Git & GitHub</li>
      </ul>
    </div>
  );
}
