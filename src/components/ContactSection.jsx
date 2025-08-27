export default function ContactSection() {
  return (
    <section id="contacto" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* Información de contacto */}
        <div className="md:w-1/2 bg-gray-800 text-white p-8 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-xl font-semibold">Let´s get in touch!.</h3>

          <div className="space-y-3">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:fjaviermelero@hotmail.com" className="text-blue-400 hover:underline">
                fjaviermelero@hotmail.com
              </a>
            </p>
            <p>
              <strong>Phone Number:</strong>{" "}
              <a href="tel:+34606877844" className="text-blue-400 hover:underline">
                +34 606 877 844
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/francisco-javier-melero-bb4337147/" target="_blank" className="text-blue-400 hover:underline">
                https://www.linkedin.com/in/francisco-javier-melero-bb4337147/
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/fjaviermelero" target="_blank" className="text-blue-400 hover:underline">
                https://github.com/fjaviermelero
              </a>
            </p>
          </div>
        </div>

        {/* Formulario */}
        <form className="md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-4">
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="Email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
