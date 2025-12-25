export default function HomePage() {
  return (
    <section className="text-center mt-20">
      <h1 className="text-5xl font-bold mb-4">
        Halo, Saya <span className="text-blue-600">Aldi</span>
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Mahasiswa Informasi yang tertarik pada Web Development,
        UI/UX, dan teknologi modern seperti Next.js & React.
      </p>
      <a
        href="/projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Lihat Project
      </a>
    </section>
  );
}
