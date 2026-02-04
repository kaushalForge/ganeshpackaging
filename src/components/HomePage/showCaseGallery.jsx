import React from "react";
import { Link } from "react-router";
import products from "../../data/productData.json"; // make sure this exports an array of products

export default function ShowcaseGallery() {
  // Take first 8 products for the gallery
  const galleryProducts = products.slice(0, 8);

  return (
    <section className="container mx-auto py-24 px-6 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mb-14">
        Product Showcase
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {galleryProducts.map((product) => (
          <Link
            to={`product/${product.id}`}
            key={product.id}
            className="relative overflow-hidden rounded-2xl group cursor-pointer bg-white shadow-md"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Name Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm text-white p-3 text-center">
              <h3 className="text-md font-semibold">{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
