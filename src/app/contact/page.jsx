export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <p className="text-gray-700 mb-6">
        If you would like to get in touch for academic purposes, collaboration,
        or discussions related to web development, feel free to reach out using
        the information below.
      </p>

      <div className="bg-black p-6 rounded-lg shadow space-y-3">
        <p>
          <strong>Name:</strong> Aldi
        </p>
        <p>
          <strong>Email:</strong> aldi@email.com
        </p>
        <p>
          <strong>Instagram:</strong> @aldi.dev
        </p>
        <p>
          <strong>GitHub:</strong> github.com/aldi
        </p>
      </div>

      <p className="text-gray-500 text-sm mt-6">
        *The information above is provided for demonstration purposes only.
      </p>
    </div>
  );
}
