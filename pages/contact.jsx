import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Kontak Saya</h2>
      <p>
        Jika Anda tertarik bekerja sama atau ingin berdiskusi,
        silakan hubungi saya melalui form di bawah ini.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Nama" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Pesan"></textarea>
        <button>Kirim Pesan</button>
      </form>
    </section>
  );
}
