import { Link } from "react-router-dom";
import products from "../data/productData";

export default function Collection() {
  // split products into 4 columns for masonry feel
  const columns = [[], [], [], []];
  products.forEach((p, i) => columns[i % 4].push(p));

  return (
    <section className="container mx-auto pt-28 pb-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Packaging Collections
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Premium garment packaging solutions crafted for modern brands.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="grid gap-6">
            {col.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block overflow-hidden rounded-2xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-200">
                        Rs. {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
