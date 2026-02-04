import React from "react";
import products from "../../data/productData";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Carousel from "./Carousel";

export default function Page() {
  const featured = products.slice(0, 6);

  return (
    <div className="bg-white text-gray-800">
      <Hero />

      <p className="h-2 w-full border-t-2 mt-18"></p>
      {/* ================= CATEGORIES ================= */}
      <section className="py-12 sm:py-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center tracking-tight mb-14">
          Packaging Categories
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {["T-Shirt Boxes", "Luxury Garment Boxes", "Eco Kraft Packaging"].map(
            (cat, i) => (
              <div
                key={i}
                className="group relative p-8 sm:p-10 rounded-3xl bg-white shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-100/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <h4 className="text-xl sm:text-2xl font-semibold mb-3 relative z-10">
                  {cat}
                </h4>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed relative z-10">
                  Premium packaging designed for garment brands that enhances
                  presentation and brand value.
                </p>

                <div className="mt-6 text-orange-600 font-medium relative z-10 text-sm sm:text-base">
                  Explore category →
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <Carousel />

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="px-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            Featured Products
          </h3>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="group block">
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 space-y-2">
                  <h4 className="text-lg sm:text-xl font-medium text-gray-900">
                    {p.name}
                  </h4>

                  <p className="text-gray-500 text-sm sm:text-base line-clamp-2">
                    {p.short}
                  </p>

                  <span className="text-sm text-orange-600 font-medium">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-8 sm:py-4 bg-white">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-orange-50 to-white p-10 sm:p-14 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Strong Packaging Builds Strong Brands
          </h3>
          <p className="mt-4 sm:mt-5 text-gray-600 text-sm sm:text-lg">
            Let’s create packaging that truly represents your brand identity.
          </p>

          <button className="mt-8 px-7 py-3 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-500 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
