"use client"
import React from "react";
import ProductList from "../organisms/ProductList";

const ProductPage: React.FC = () => {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Our Products</h1>
        <p className="text-sm text-gray-500">Your Location: Garut</p>
      </header>

      <ProductList />

      <footer className="fixed bottom-0 left-0 w-full p-4 bg-white shadow-lg flex justify-between items-center">
        <p>Keranjang (0 item)</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
          Checkout
        </button>
      </footer>
    </div>
  );
};

export default ProductPage;
