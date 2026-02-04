import React from "react";

const steps = [
  "Share your box size & design",
  "Choose material & finishing",
  "We manufacture your packaging",
  "Fast delivery to your location",
];

export default function Process() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Our Simple Process
      </h2>

      <div className="grid md:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-8 rounded-2xl text-center"
          >
            <div className="text-5xl font-bold text-orange-600 mb-4">
              {i + 1}
            </div>
            <p className="text-gray-600">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
