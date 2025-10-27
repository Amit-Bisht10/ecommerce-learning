import React from "react";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    // Wrapper for detail view
    <div className="flex flex-col items-center py-12 px-4 bg-gray-50"> 
      
      {/* Back Button */}
      <button
        onClick={onBack}
        className="text-lg text-blue-600 hover:text-blue-700 font-medium self-start ml-4 sm:ml-6 md:ml-10 mb-8 flex items-center transition duration-150"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Products
      </button>

      {/* Product Card - Larger, more substantial feel */}
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg text-center"> 
        
        {/* Image */}
        <div className="w-full h-[300px] flex justify-center items-center mb-6 overflow-hidden rounded-xl bg-gray-100"> 
          <img
            src={product.image}
            alt={product.name}
            className="h-[280px] w-auto object-contain"
          />
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          {product.name}
        </h2>
        <p className="text-2xl text-red-600 mb-6 font-bold">₹{product.price}</p>
        
        {/* Placeholder Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
            A premium product crafted for durability and style. Experience the difference in quality and design.
        </p>

        {/* Add to Cart Button - more prominent */}
        <button
          onClick={() => console.log("Added to cart:", product.name)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-4 rounded-xl shadow-md transition duration-200"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;