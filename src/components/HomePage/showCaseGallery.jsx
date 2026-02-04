import React from "react";

const images = [
  "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
  "https://images.unsplash.com/photo-1585386959984-a41552262b7b",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
  "https://images.unsplash.com/photo-1593032465171-8f0a9c1d8f73",
  "https://images.unsplash.com/photo-1603575448368-9f8bdb2e6f2e",
];

export default function ShowcaseGallery() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-semibold text-center mb-14">
        Real Packaging Showcase
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl group cursor-pointer"
          >
            <img
              src={`${src}?auto=format&fit=crop&w=800&q=80`}
              alt="packaging"
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
