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
            All you need to know about our pure and additive-free food products.
            Still have questions? We're happy to help!
          </p>
        </div>

        {/* ===== Accordion Box ===== */}
        <div className="rounded-2xl border border-gray-200 shadow-sm bg-white overflow-hidden">
          <AccordionItem
            id={2}
            title="How do I place an order?"
            open={open}
            setOpen={setOpen}
          >
            You can place your order directly via WhatsApp, Messenger, Facebook
            Page, or email. Simply click on the contact buttons on the product
            page and send us your request.
          </AccordionItem>

          <AccordionItem
            id={3}
            title="Do you offer home delivery?"
            open={open}
            setOpen={setOpen}
          >
            Absolutely! We deliver fresh products to your doorstep within Nepal.
            Delivery times may vary depending on your location.
          </AccordionItem>

          <AccordionItem
            id={4}
            title="How should I store the products?"
            open={open}
            setOpen={setOpen}
          >
            Most of our products should be stored in a cool, dry place. For
            items like honey, grains, or flours, make sure to keep them sealed
            properly to maintain freshness.
          </AccordionItem>

          <AccordionItem
            id={5}
            title="Are your products suitable for all diets?"
            open={open}
            setOpen={setOpen}
          >
            Yes! Our products are natural and safe for most diets, including
            vegetarian and gluten-free options. Always check the product
            description for specifics.
          </AccordionItem>

          <AccordionItem
            id={6}
            title="Can I order in bulk for businesses or events?"
            open={open}
            setOpen={setOpen}
          >
            Definitely! We offer bulk ordering options for events, restaurants,
            and retailers. Contact us through our social channels to get a
            custom quote.
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default Accordins;
