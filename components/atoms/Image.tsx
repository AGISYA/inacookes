"use client"
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-auto rounded-md" />;
};

export default Image;
