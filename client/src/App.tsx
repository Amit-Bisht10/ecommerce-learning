import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./pages/ProductDetail";
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

function App() {
  const [user, setUser] = useState<any>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // 🔹 Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
      alert("Login failed.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // 🔹 Fetch products from server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/products");
        const data = await res.json();
        const localImages = [
          "/images/redTshirt.jpg",
          "/images/laptop.jpg",
          "/images/phone.jpg",
        ];
        const updated = data.map((p: any, i: number) => ({
          ...p,
          image: localImages[i % localImages.length],
        }));
        setProducts(updated);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // 🔹 Routing simulation
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      </div>
    );
  }

  // 🔹 Home Page
  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Enhanced Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
          Featured Products
        </h2>
        {/* Grid with better vertical spacing (gap-y-10) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
          {products.map((product, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProduct(product)}
              // Apply the hover effect to the clickable wrapper
              className="cursor-pointer w-full max-w-xs transition duration-300 transform hover:scale-[1.03]" 
            >
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;