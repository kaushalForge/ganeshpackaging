import React from "react";
import heroBanner from "/public/images/HeroBanner.jpg";

const Hero = () => {
  return (
    <section className="pt-12 bg-white dark:bg-gray-900">
      <div className="grid px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 min-h-[70vh] lg:min-h-[80vh]">
        {/* Left Text */}
        <div className="mr-auto place-self-center lg:col-span-7 flex flex-col justify-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Discover Your Style with Our Trendy Clothes
          </h1>

          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Explore the latest fashion collections and premium clothing for men,
            women, and kids. Find your perfect outfit and elevate your style
            effortlessly.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Shop Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                />
              </svg>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block lg:col-span-5 h-full w-full">
          <img
            src={heroBanner}
            className="h-full w-full object-cover rounded-xl"
            alt="fashion collection"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
