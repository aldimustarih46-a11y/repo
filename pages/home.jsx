import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          ALDI<span>®</span>
        </h1>

        <p className="hero-role">
          Creative Developer & UI Designer
        </p>

        <p className="hero-desc">
          Saya adalah mahasiswa yang tertarik pada pengembangan web modern,
          khususnya React dan UI/UX Design. Fokus saya adalah membangun website
          yang tidak hanya berfungsi dengan baik, tetapi juga memiliki tampilan
          visual yang kuat dan pengalaman pengguna yang nyaman.
        </p>

        <div className="hero-actions">
          <a href="/projects" className="btn primary">
            Lihat Proyek
          </a>
          <a href="/contact" className="btn outline">
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}