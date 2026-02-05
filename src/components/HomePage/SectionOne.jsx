import React from "react";

const SectionOne = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-dark bg-blend-multiply"
      style={{ backgroundImage: `url(/images/bg.jpg)` }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">
          Pure, Natural, and Additive-Free Food Products
        </h1>

        {/* Subheading */}
        <p className="mb-8 text-base font-normal text-white md:text-xl sm:px-16 lg:px-48">
          Enjoy the finest quality honey, grains, flours, and spices delivered
          straight to your doorstep. Healthy, fresh, and 100% natural for you
          and your family.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
          <a
            href="/collection"
            className="inline-flex items-center justify-center text-white bg-orange-600 hover:bg-orange-500 shadow-lg font-medium rounded-lg text-base px-6 py-3 transition transform hover:scale-105 focus:outline-none"
          >
            Shop Now
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6h10M10 12h10M10 18h10M4 6h.01M4 12h.01M4 18h.01"
              />
            </svg>
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center text-orange-600 bg-white hover:bg-gray-100 shadow font-medium rounded-lg text-base px-6 py-3 transition transform hover:scale-105 focus:outline-none"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
