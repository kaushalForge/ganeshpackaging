import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const product = products.find((p) => p._id === id);

  const [mainImage, setMainImage] = useState(product?.images?.[0]);

  useEffect(() => {
    if (product?.images?.length) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (loading) return <div className="pt-28 p-10">Loading product...</div>;
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
        {/* Product Images */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          {/* Main Image */}
          <div className="overflow-hidden rounded-3xl shadow-2xl w-full max-w-lg mx-auto">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Thumbnail gallery */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto mt-4">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all ${
                    img === mainImage
                      ? "ring-4 ring-orange-500"
                      : "hover:scale-105"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
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
                href={`https://wa.me/<YOUR_NUMBER>?text=I%20would%20like%20to%20order%20${encodeURIComponent(
                  product.name,
                )}`}
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
