import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 w-[250px] border border-gray-100">
      <div className="w-full h-[180px] overflow-hidden rounded-t-2xl bg-gray-50 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-3/4 h-3/4 object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-gray-600 mt-2 font-medium text-base">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
