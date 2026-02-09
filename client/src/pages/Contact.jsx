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
          Reach us directly through the contact options below. We’re always
          ready to help you.
        </p>
      </section>

      {/* ================= CONTACT DETAILS ONLY ================= */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Contact Details
          </h2>

          <div className="space-y-8 text-gray-700 text-center">
            {/* Phone */}
            <div className="p-6 rounded-2xl border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">Phone</p>
              <a
                href="tel:+97798XXXXXXXX"
                className="text-orange-600 font-medium"
              >
                +977 98XXXXXXXX
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-2xl border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">WhatsApp</p>
              <a
                href="https://wa.me/97798XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-medium"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Messenger */}
            <div className="p-6 rounded-2xl border border-gray-200">
              <p className="font-medium text-gray-900 mb-2">Messenger</p>
              <a
                href="https://m.me/yourpageusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-medium"
              >
                Message us on Messenger
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOOGLE MAP (unchanged) ================= */}
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
