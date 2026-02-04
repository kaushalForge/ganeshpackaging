import React, { useState, useRef } from "react";

const AccordionItem = ({ id, title, children, open, setOpen }) => {
  const contentRef = useRef(null);
  const isOpen = open === id;

  const toggle = () => {
    setOpen(isOpen ? null : id);
  };

  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between p-5 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
      >
        <span className="text-lg">{title}</span>

        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m5 15 7-7 7 7"
          />
        </svg>
      </button>

      <div
        ref={contentRef}
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 text-gray-600">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Accordins = () => {
  const [open, setOpen] = useState(1);

  return (
    <section className="py-12 bg-gray-50">
      <div className="px-6">
        {/* ===== Modern Section Title ===== */}
        <div className="text-center mb-8">
          <span className="text-orange-600 font-semibold tracking-widest text-sm uppercase">
            Support
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our packaging solutions, process,
            and services. Still have questions? We’re here to help.
          </p>
        </div>

        {/* ===== Accordion Box ===== */}
        <div className="rounded-2xl border border-gray-200 shadow-sm bg-white overflow-hidden">
          <AccordionItem
            id={1}
            title="What is Flowbite?"
            open={open}
            setOpen={setOpen}
          >
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS.
          </AccordionItem>

          <AccordionItem
            id={2}
            title="Is there a Figma file available?"
            open={open}
            setOpen={setOpen}
          >
            Flowbite components are designed in Figma with Tailwind utility
            classes.
          </AccordionItem>

          <AccordionItem
            id={3}
            title="What are the differences between Flowbite and Tailwind UI?"
            open={open}
            setOpen={setOpen}
          >
            Flowbite is open-source while Tailwind UI is paid. Both can be used
            together.
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default Accordins;
