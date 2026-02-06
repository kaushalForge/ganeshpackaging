import React from "react";
import { useProducts } from "../../context/ProductContext";
import { Link } from "react-router";


export default function Industries() {
  // Duplicate for seamless scroll
  const { products } = useProducts();
  const items = products.slice(0, 8);
  const marqueeItems = [...items, ...items];

  return (
    <section className="container mx-auto py-24 bg-gray-50 overflow-hidden">
      <h2 className="text-4xl font-semibold text-center mb-16">Gallery</h2>

      <div className="relative overflow-hidden">
        <div className="marquee flex gap-8 w-max mx-auto">
          {marqueeItems.map((item, i) => (
            <Link
              to={`/product/${item.id}`}
              key={i}
              className="w-[300px] h-60 flex-shrink-0 rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-2">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Inline styles for marquee */}
      <style>{`
        .marquee {
          animation: scroll 28s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
