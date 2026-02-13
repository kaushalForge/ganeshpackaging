import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Collection() {
  const { products, loading } = useProducts();

  const IMAGE_CHANGE_INTERVAL = 6000;

  const [imageIndexes, setImageIndexes] = useState({});
  const batchRef = useRef("odd");

  useEffect(() => {
    if (!products || products.length === 0) return;

    const initialIndexes = {};
    products.forEach((p) => (initialIndexes[p._id] = 0));
    setImageIndexes(initialIndexes);

    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) => {
        const nextIndexes = { ...prevIndexes };

        products.forEach((p, idx) => {
          const isOdd = idx % 2 === 0;
          const shouldUpdate =
            (batchRef.current === "odd" && isOdd) ||
            (batchRef.current === "even" && !isOdd);

          if (shouldUpdate && p.images && p.images.length > 1) {
            nextIndexes[p._id] = (nextIndexes[p._id] + 1) % p.images.length;
          }
        });

        return nextIndexes;
      });

      batchRef.current = batchRef.current === "odd" ? "even" : "odd";
    }, IMAGE_CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, [products]);

  if (loading)
    return (
      <div className="pt-28 flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-t-orange-500 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );

  return (
    <section className="container mx-auto pt-28 pb-20 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Clothing Collections
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Stylish clothing pieces curated for modern fashion enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => {
          const currentIndex = imageIndexes[product._id] || 0;
          const currentImage =
            product.images && product.images.length > 0
              ? product.images[currentIndex]
              : "/placeholder.jpg";

          return (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                {product.images && product.images.length > 0 && (
                  <AnimatePresence>
                    <motion.img
                      key={currentImage}
                      src={currentImage}
                      alt={product.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute top-0 left-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                )}

                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition flex justify-center items-end p-4">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
