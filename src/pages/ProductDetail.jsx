import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/productData";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [qty, setQty] = useState(1);

  if (!product) return <div className="pt-28 p-10">Product not found</div>;

  return (
    <main className="bg-white min-h-screen pt-24">
      {/* HERO */}
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center py-16 gap-16">
        {/* LEFT CONTENT */}
        <div className="lg:w-2/5 flex flex-col">
          <span className="w-20 h-2 bg-orange-600 mb-10"></span>

          <h1 className="uppercase text-5xl sm:text-7xl font-black leading-none text-gray-800">
            {product.name.split(" ")[0]}
            <span className="block text-4xl sm:text-6xl font-semibold">
              {product.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-orange-500"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.175 0l-3.37 2.45c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.014 9.38c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.335-3.954z" />
              </svg>
            ))}
            <span className="text-sm text-gray-500 ml-2">(124 reviews)</span>
          </div>

          <p className="mt-6 text-gray-600">{product.description}</p>

          {/* Price */}
          <h2 className="mt-8 text-4xl font-bold text-orange-600">
            Rs. {product.price}
          </h2>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-4 py-2 text-lg"
              >
                −
              </button>
              <span className="px-6">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2 text-lg"
              >
                +
              </button>
            </div>

            <button className="uppercase py-3 px-8 rounded-lg bg-orange-600 text-white hover:bg-orange-500 transition">
              Add to Cart
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 space-y-2 text-sm text-gray-500">
            <p>✔ Free delivery inside Kathmandu valley</p>
            <p>✔ Premium quality guaranteed</p>
            <p>✔ Cash on delivery available</p>
          </div>

          <Link to="/collection" className="mt-10 text-orange-600 underline">
            ← Back to Collection
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-3/5 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-xs md:max-w-md lg:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>

      {/* EXTRA DETAILS SECTION */}
      <div className="bg-gray-50 py-20 mt-10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Premium Material</h3>
            <p className="text-gray-600 text-sm">
              Crafted using high-grade materials ensuring durability and
              long-term usage for retail packaging.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Modern Design</h3>
            <p className="text-gray-600 text-sm">
              Minimal, clean and professional design that elevates your brand
              presentation.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Eco Friendly</h3>
            <p className="text-gray-600 text-sm">
              Sustainable and recyclable packaging solutions for environmentally
              conscious brands.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
