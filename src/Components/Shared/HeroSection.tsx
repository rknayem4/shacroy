"use client";

import React, { useState, useEffect } from "react";
import { getPublicSliders } from "@/lib/Action/publicAPI";

interface SliderItem {
  _id: string;
  title: string;
  imageUrl: string;
}

export default function HeroSection() {
  const [sliders, setSliders] = useState<SliderItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadSliders() {
      const data = await getPublicSliders();
      setSliders(data);
    }
    loadSliders();
  }, []);

  // Auto slide every 3 seconds (3000ms)
  useEffect(() => {
    if (sliders.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliders]);

  if (sliders.length === 0) {
    return (
      <div className="w-full aspect-[3/1] max-h-[400px] bg-[#E8F5EC] flex items-center justify-center rounded-2xl">
        <p className="text-[#176B45] font-medium animate-pulse">Hero section load hocche...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[3/1] max-h-[400px] overflow-hidden rounded-2xl shadow-md bg-gray-100">
      {sliders.map((slider, index) => (
        <div
          key={slider._id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image without text overlay, using alt as title */}
          <img
            src={slider.imageUrl}
            alt={slider.title || "Shacroy Banner"}
            className="w-full h-full object-cover sm:object-fill"
          />
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
        {sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-[#176B45] w-6" : "bg-white/70 w-2.5"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}