import React from "react";

const industries = [
  {
    name: "Clothing Brands",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53",
  },
  {
    name: "Cosmetic Brands",
    img: "https://images.unsplash.com/photo-1585386959984-a41552262b7b",
  },
  {
    name: "Jewelry Shops",
    img: "https://images.unsplash.com/photo-1617038260897-41a1f14a7fdf",
  },
  {
    name: "Gift Stores",
    img: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
  },
];

// duplicate for seamless loop
const items = [...industries, ...industries];

export default function Industries() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Industries We Serve
      </h2>

      <div className="relative overflow-hidden">
        <div className="marquee flex gap-8 w-max">
          {items.map((item, i) => (
            <div
              key={i}
              className="w-[300px] h-60 flex-shrink-0 rounded-2xl overflow-hidden relative group"
            >
              <img
                src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* internal styles (no css file needed) */}
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
