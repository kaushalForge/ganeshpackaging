import { Link } from "react-router-dom";

import { useProducts } from "../context/ProductContext";

export default function Collection() {
  const { products } = useProducts();
  return (
    <section className="container mx-auto pt-28 pb-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Clothing Collections
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Stylish clothing pieces curated for modern fashion enthusiasts.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group block mb-6 overflow-hidden rounded-2xl break-inside-avoid"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex justify-center items-end p-4">
                <div className="text-white text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
