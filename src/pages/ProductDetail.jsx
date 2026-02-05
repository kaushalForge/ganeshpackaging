import { useParams, Link } from "react-router-dom";
import products from "../data/productData.json";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="pt-28 p-10">Product not found</div>;

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

      <div className="lg:flex lg:gap-16">
        {/* Product Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl w-full max-w-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
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

          {/* Contact / Order Section */}
          <div className="mt-6 flex flex-col gap-4">
            <p className="text-gray-700">
              You can order this product directly through our social channels:
            </p>

            <div className="flex flex-wrap gap-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/<YOUR_NUMBER>?text=I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg shadow-md hover:scale-105 transform transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>

              {/* Facebook Page */}
              <a
                href="https://www.facebook.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:scale-105 transform transition-all"
              >
                <FaFacebookF className="w-5 h-5" />
                Facebook Page
              </a>

              {/* Messenger */}
              <a
                href="https://m.me/YourPage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-400 text-white px-5 py-3 rounded-lg shadow-md hover:scale-105 transform transition-all"
              >
                <FaFacebookMessenger className="w-5 h-5" />
                Messenger
              </a>

              {/* Email */}
              <a
                href="mailto:info@freshfoods.com"
                className="flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-lg shadow-md hover:scale-105 transform transition-all"
              >
                <FaEnvelope className="w-5 h-5" />
                Email
              </a>
            </div>

            <p className="text-gray-500 mt-2">
              Click any of the buttons above to place your order instantly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
