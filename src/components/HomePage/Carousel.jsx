import React, { useEffect, useState } from "react";

const slides = [
  {
    img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(123).jpg",
    title: "First slide label",
    desc: "Some representative placeholder content for the first slide.",
  },
  {
    img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(124).jpg",
    title: "Second slide label",
    desc: "Some representative placeholder content for the second slide.",
  },
  {
    img: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(125).jpg",
    title: "Third slide label",
    desc: "Some representative placeholder content for the third slide.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
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
            <div className="absolute inset-0 bg-black/50" />

            {/* Caption */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white max-w-2xl px-6">
              <h5 className="text-2xl font-semibold">{slide.title}</h5>
              <p className="mt-2 text-sm opacity-90">{slide.desc}</p>
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
        className="absolute left-0 top-0 h-full w-[15%] flex items-center justify-center text-white opacity-60 hover:opacity-100 transition"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-0 h-full w-[15%] flex items-center justify-center text-white opacity-60 hover:opacity-100 transition"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
