"use client";

import React from "react";
import Link from "next/link";
import { HiHome, HiClipboardList, HiExclamationCircle } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50/50 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Icon / Illustration Badge */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#E8F5EC] text-[#176B45] shadow-inner mb-2">
          <HiExclamationCircle className="w-14 h-14" />
        </div>

        {/* Error Code & Title */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#176B45] uppercase bg-[#E8F5EC] px-3 py-1 rounded-full">
            404 Error
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#25332B] tracking-tight">
            পেজটি খুঁজে পাওয়া যায়নি!
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            দুঃখিত, আপনি যে পেইজটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে অথবা লিংকটি ভুল ছিল। Shacroy (সাশ্রয়)-এর হোম পেজে ফিরে যান।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#176B45] hover:bg-[#125638] text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-200"
          >
            <HiHome className="w-5 h-5" /> হোম পেজে যান
          </Link>
          <Link
            href="/order"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E8F5EC] hover:bg-[#d5ebd9] text-[#176B45] font-medium px-6 py-3 rounded-xl transition-all duration-200"
          >
            <HiClipboardList className="w-5 h-5" /> অর্ডার রিকোয়েস্ট
          </Link>
        </div>

        {/* Footer help note */}
        <p className="text-xs text-gray-400 pt-6 border-t border-gray-200">
          কোনো সহায়তার প্রয়োজন হলে আমাদের সাথে যোগাযোগ করুন: <a href="mailto:support@shacroy.com" className="text-[#176B45] font-medium hover:underline">support@shacroy.com</a>
        </p>

      </div>
    </div>
  );
}