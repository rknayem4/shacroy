"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#25332B] text-gray-300 pt-16 pb-24 border-t border-gray-800 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-700/60">
          {/* Column 1: Brand Info & Story */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo_l.png"
                alt="Shacroy Logo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Shacroy (সাশ্রয়) হলো আপনার দৈনন্দিন প্রয়োজনীয় পণ্যের নির্ভরযোগ্য
              ব্র্যান্ড ডিসকভারি ও অর্ডার রিকোয়েস্ট প্ল্যাটফর্ম। সাশ্রয়ী মূল্যে
              সেরা পণ্যগুলো এখন আপনার হাতের মুঠোয়।
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#176B45] text-white flex items-center justify-center transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#176B45] text-white flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#176B45] text-white flex items-center justify-center transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#176B45] text-white flex items-center justify-center transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide uppercase">
              কুইক লিংকস
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#E8F5EC] transition-colors"
                >
                  আমাদের সম্পর্কে (About Us)
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="hover:text-[#E8F5EC] transition-colors"
                >
                  চলমান অফারসমূহ (Offers)
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-[#E8F5EC] transition-colors"
                >
                  পণ্যের ক্যাটাগরি (Categories)
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="hover:text-[#E8F5EC] transition-colors"
                >
                  ব্র্যান্ডসমূহ (Brands)
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#E8F5EC] transition-colors"
                >
                  যোগাযোগ করুন (Contact)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide uppercase">
              যোগাযোগ ও ঠিকানা
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                <span>
                  বাড়ি নং ১২, রোড নং ০৫, গুলশান-১, ঢাকা-১২১২, বাংলাদেশ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="w-5 h-5 text-[#176B45] shrink-0" />
                <a
                  href="tel:+8801700000000"
                  className="hover:text-white transition-colors"
                >
                  +৮৮০ ১৭০০-০০০০০০
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="w-5 h-5 text-[#176B45] shrink-0" />
                <a
                  href="mailto:support@shacroy.com"
                  className="hover:text-white transition-colors"
                >
                  support@shacroy.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map Location / Interactive Preview */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide uppercase">
              আমাদের লোকেশন
            </h3>
            <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-800 h-36 relative flex items-center justify-center group">
              <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-900/40 p-4 text-center transition-all group-hover:bg-gray-900/20">
                <HiLocationMarker className="relative z-10 mb-1 h-8 w-8 text-[#176B45] animate-bounce" />
                <span className="relative z-10 mb-2 text-xs font-medium text-white">
                  কাজীপাড়া, মিরপুর, ঢাকা
                </span>
                <iframe
                  title="Shacroy location map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.15841487960682!2d90.37425725120343!3d23.799580335856447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1792776674669!5m2!1sbn!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="pointer-events-auto absolute inset-0 z-0 h-full w-full opacity-60 transition-opacity hover:opacity-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © 2026 Shacroy (সাশ্রয়). সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-400 transition-colors"
            >
              গোপনীয়তা নীতি (Privacy Policy)
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-400 transition-colors"
            >
              শর্তাবলী (Terms & Conditions)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;