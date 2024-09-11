"use client"
import React from "react";

type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  onAddToCart: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="font-bold mb-2">{price}</p>
      <button
        onClick={onAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
