"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 bg-white">
      <div className="flex flex-col items-center space-y-6">
        
        {/* Animated Brand Loader Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#E8F5EC]"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#176B45] border-t-transparent animate-spin"></div>
        </div>
        
        {/* Brand Title & Loading Message */}
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl font-bold text-[#25332B] tracking-tight">
            Shacroy <span className="text-sm font-normal text-[#176B45] bg-[#E8F5EC] px-2 py-0.5 rounded-md">সাশ্রয়</span>
          </h2>
          <p className="text-sm text-gray-500 font-medium animate-pulse">
            লোড হচ্ছে, একটু অপেক্ষা করুন...
          </p>
        </div>

      </div>
    </div>
  );
}