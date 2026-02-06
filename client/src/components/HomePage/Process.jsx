import React from "react";

const steps = ["Harvesting", "Packaging", "To your door step"];

export default function Process() {
  return (
    <section className="container mx-auto py-12 flex items-center justify-center flex-col w-full px-6">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Our Simple Process
      </h2>

      <div className="grid w-full items-center justify-center grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white flex items-center justify-center flex-col shadow-md p-8 rounded-2xl text-center"
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
