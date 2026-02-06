import React from "react";
import { useProducts } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Carousel from "./Carousel";

export default function Page() {
  const { products } = useProducts();
  const featured = products.slice(0, 6);

  return (
    <div className="bg-white text-gray-800">
      <Hero />

      <p className="h-2 w-full border-t-2 mt-18"></p>
      {/* ================= CATEGORIES ================= */}

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
    </div>
  );
}
