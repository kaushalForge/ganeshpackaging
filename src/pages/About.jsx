import React from "react";

export default function About() {
  return (
    <div className="bg-white text-gray-800">
      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-orange-600 font-semibold tracking-widest uppercase text-sm">
            About Us
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            We Create Packaging That
            <span className="block text-orange-600">Elevates Brands</span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Our mission is simple — to help businesses present their products in
            packaging that speaks quality, trust, and brand identity. Because
            strong packaging builds strong brands.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42c4f43e2c?auto=format&fit=crop&w=1200&q=80"
            alt="Packaging process"
            className="rounded-3xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We started with a vision to improve how brands present their
              products. In a market filled with ordinary packaging, we decided
              to create solutions that combine durability, elegance, and
              branding power.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve clothing brands, cosmetic companies, jewelry
              stores, and many growing businesses with packaging that leaves a
              lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">What We Believe In</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Premium Quality",
                desc: "We never compromise on the strength, durability, and finishing of our packaging products.",
              },
              {
                title: "Brand Identity",
                desc: "Packaging is the first impression. We design solutions that reflect your brand’s personality.",
              },
              {
                title: "Eco-Friendly Approach",
                desc: "We promote sustainable materials like kraft paper and recyclable packaging solutions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Let’s Build Packaging That Speaks for Your Brand
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Whether you’re a startup or an established brand, we’re here to help
            you create packaging that stands out.
          </p>

          <button className="mt-10 px-8 py-3 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-500 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
