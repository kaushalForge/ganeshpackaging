import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/productData.json";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [qty, setQty] = useState(1);

  if (!product) return <div className="pt-28 p-10">Product not found</div>;

  // WhatsApp business link with prefilled message
  const whatsappLink = `https://wa.me/<YOUR_NUMBER>?text=I%20would%20like%20to%20order%20${qty}%20${encodeURIComponent(
    product.name
  )}`;

  return (
    <main className="bg-white min-h-screen pt-24 px-6 lg:px-20">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link to="/collection" className="hover:underline">
          Shop
        </Link>{" "}
        &gt; <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Hero Section */}
      <div className="lg:flex lg:gap-16">
        {/* Product Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-3xl shadow-2xl w-full object-cover max-w-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info Panel */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-orange-600">
              Rs. {product.price}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Quantity & WhatsApp Button */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded-lg overflow-hidden bg-gray-100">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-4 py-2 hover:bg-gray-200 transition"
              >
                −
              </button>
              <span className="px-6">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2 hover:bg-gray-200 transition"
              >
                +
              </button>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase py-3 px-8 bg-green-500 text-white rounded-lg hover:bg-green-400 shadow-lg transition transform hover:scale-105 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.672.149-.198.297-.767.966-.939 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.149-.672-1.611-.921-2.205-.243-.579-.491-.5-.672-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.571-.347z" />
                <path d="M12 2C6.486 2 2 6.486 2 12c0 2.124.554 4.106 1.52 5.82L2 22l4.27-1.416C8.894 21.445 10.922 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
