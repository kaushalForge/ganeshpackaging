import React, { useEffect, useState } from "react";

const slides = [
  {
    img: "/images/banner1.jpg",
    title: "Organic Grains & Flours",
    desc: "From wholesome wheat to nutrient-rich flours, enjoy quality that nurtures your family.",
  },
  {
    img: "/images/banner2.jpg",
    title: "Pure Honey & Natural Goodness",
    desc: "Discover our premium, additive-free honey, sourced directly from the finest farms.",
  },
  {
    img: "/images/banner3.jpg",
    title: "Add Flavours with Us",
    desc: "Fresh, aromatic, and natural masala items to make every dish flavorful and healthy.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Caption */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white max-w-2xl px-6">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {slide.title}
              </h5>
              <p className="mt-2 text-sm sm:text-base opacity-90">
                {slide.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] w-[30px] transition-opacity duration-300 ${
              current === i ? "bg-white opacity-100" : "bg-white opacity-40"
            }`}
          />
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-0 h-full w-[15%] flex items-center justify-center text-white opacity-60 hover:opacity-100 transition text-3xl"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-0 h-full w-[15%] flex items-center justify-center text-white opacity-60 hover:opacity-100 transition text-3xl"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
