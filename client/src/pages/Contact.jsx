import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800 pt-28">
      {/* ================= HEADER ================= */}
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get In Touch
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Have questions, custom packaging needs, or bulk orders? We’re here to
          help your brand with the right packaging solutions.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* -------- LEFT : CONTACT INFO -------- */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Contact Details</h2>

            <div className="space-y-6 text-gray-600">
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p>Birtamode, Jhapa, Nepal</p>
              </div>

              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p>+977 98XXXXXXXX</p>
              </div>

              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p>your@email.com</p>
              </div>

              <div>
                <p className="font-medium text-gray-800">Business Hours</p>
                <p>Sunday – Friday : 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* -------- RIGHT : CONTACT FORM -------- */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-semibold mb-8">Send a Message</h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= GOOGLE MAP ================= */}
      <section className="px-6 pb-24">
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            title="Birtamode Map"
            src="https://maps.google.com/maps?q=Birtamode%20Jhapa%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
