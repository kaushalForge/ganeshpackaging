import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingSingle, setLoadingSingle] = useState(false);
  const [error, setError] = useState(null);
  const [errorSingle, setErrorSingle] = useState(null);

  const API_URL = import.meta.env.VITE_PUBLIC_API_URL;
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/products`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [API_URL]);

  const fetchProductById = async (id) => {
    setLoadingSingle(true);
    setErrorSingle(null);
    try {
      const res = await fetch(`${API_URL}/api/products/${id}`);
      if (!res.ok) {
        if (res.status === 404) throw new Error("Product not found");
        throw new Error("Failed to fetch product");
      }
      const data = await res.json();
      setSingleProduct(data);
    } catch (err) {
      console.error(err);
      setErrorSingle(err.message || "Something went wrong");
    } finally {
      setLoadingSingle(false);
    }
  };

  const value = {
    products,
    singleProduct,
    fetchProductById,
    loading,
    loadingSingle,
    error,
    errorSingle,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

// Custom hook to use products context
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProducts must be used inside <ProductProvider>. You are calling it outside a component.",
    );
  }
  return context;
};
