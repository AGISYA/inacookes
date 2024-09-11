"use client";

import React from "react";
import ProductCard from "../molecules/ProductCard";

const products = [
  {
    title: "New Yorker",
    description: "Gluten free chocolate cake",
    price: "Rp.25.000",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
          onAddToCart={() => alert(`${product.title} added to cart!`)}
        />
      ))}
    </div>
  );
};

export default ProductList;
