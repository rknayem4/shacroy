"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiTag,
  HiViewGrid,
  HiCollection,
  HiClipboardList,
  HiUser,
  HiMenu,
  HiX,
} from "react-icons/hi";
import Image from "next/image";
import { Cart } from "./Cart";

interface NavBerProps {
  cartItemCount?: number;
  isLoggedIn?: boolean;
  userName?: string;
  onLogout?: () => void;
}

const NavBer: React.FC<NavBerProps> = ({
  cartItemCount = 0,
  isLoggedIn = false,
  userName = "Customer",
  onLogout,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState<boolean>(false);
  
  const pathname = usePathname();
  const profileMenuRef = useRef<HTMLDivElement | null>(null);

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    setProfileDropdownOpen(false);
    if (onLogout) {
      onLogout();
    }
  };

  // Handle sticky navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProfileDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* Top Desktop & Tablet Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
          isScrolled ? "shadow-md py-3" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="Shacroy Logo"
              width={200}
              height={200}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-gray-700">
            <Link
              href="/"
              className={`transition-colors flex items-center gap-1.5 hover:text-[#176B45] ${
                isActive("/")
                  ? "border-b-2 border-[#176B45] text-[#176B45] pb-1 font-semibold"
                  : ""
              }`}
            >
              <HiHome className="w-4 h-4 text-[#176B45]" /> Home
            </Link>
            <Link
              href="/offers"
              className={`transition-colors flex items-center gap-1.5 hover:text-[#176B45] ${
                isActive("/offers")
                  ? "border-b-2 border-[#176B45] text-[#176B45] pb-1 font-semibold"
                  : ""
              }`}
            >
              <HiTag className="w-4 h-4 text-[#176B45]" /> Offers
            </Link>
            <Link
              href="/categories"
              className={`transition-colors flex items-center gap-1.5 hover:text-[#176B45] ${
                isActive("/categories")
                  ? "border-b-2 border-[#176B45] text-[#176B45] pb-1 font-semibold"
                  : ""
              }`}
            >
              <HiViewGrid className="w-4 h-4 text-[#176B45]" /> Categories
            </Link>
            <Link
              href="/brands"
              className={`transition-colors flex items-center gap-1.5 hover:text-[#176B45] ${
                isActive("/brands")
                  ? "border-b-2 border-[#176B45] text-[#176B45] pb-1 font-semibold"
                  : ""
              }`}
            >
              <HiCollection className="w-4 h-4 text-[#176B45]" /> Brands
            </Link>
            <Link
              href="/order"
              className={`transition-colors flex items-center gap-1.5 hover:text-[#176B45] ${
                isActive("/order")
                  ? "border-b-2 border-[#176B45] text-[#176B45] pb-1 font-semibold"
                  : ""
              }`}
            >
              <HiClipboardList className="w-4 h-4 text-[#176B45]" /> Order
            </Link>
            <Link
              href="/dashboard/admin"
              className={`transition-colors flex items-center gap-1.5 hover:text-[#176B45] ${
                isActive("/dashboard/admin")
                  ? "border-b-2 border-[#176B45] text-[#176B45] pb-1 font-semibold"
                  : ""
              }`}
            >
              <HiClipboardList className="w-4 h-4 text-[#176B45]" /> admin
            </Link>
          </nav>

          {/* Right Side Actions (Cart & Profile) */}
          <div className="flex items-center gap-4">
            <Cart cartItemCount={cartItemCount} />

            {/* Profile Dropdown (Desktop) */}
            <div ref={profileMenuRef} className="relative hidden md:block">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#E8F5EC] text-[#176B45] flex items-center justify-center font-bold">
                  <HiUser className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-[#25332B]">
                  {isLoggedIn ? userName : "Account"}
                </span>
              </button>

              {/* Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {isLoggedIn ? (
                    <>
                      <Link
                        href="/profile"
                        className={`block px-4 py-2 text-sm text-[#25332B] hover:bg-[#E8F5EC] hover:text-[#176B45] ${
                          isActive("/profile") ? "font-bold text-[#176B45]" : ""
                        }`}
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/profile/orders"
                        className={`block px-4 py-2 text-sm text-[#25332B] hover:bg-[#E8F5EC] hover:text-[#176B45] ${
                          isActive("/profile/orders") ? "font-bold text-[#176B45]" : ""
                        }`}
                      >
                        My Orders
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className={`block px-4 py-2 text-sm text-[#25332B] hover:bg-[#E8F5EC] hover:text-[#176B45] ${
                          isActive("/login") ? "font-bold text-[#176B45]" : ""
                        }`}
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className={`block px-4 py-2 text-sm text-[#25332B] hover:bg-[#E8F5EC] hover:text-[#176B45] ${
                          isActive("/register") ? "font-bold text-[#176B45]" : ""
                        }`}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#176B45]"
            >
              {mobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-xl font-bold text-[#176B45]">
                  Shacroy (সাশ্রয়)
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-4 mt-6 font-medium text-[#25332B]">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 py-2 hover:text-[#176B45] ${
                    isActive("/") ? "text-[#176B45] font-bold border-b-2 border-[#176B45]" : ""
                  }`}
                >
                  <HiHome className="w-5 h-5 text-[#176B45]" /> Home
                </Link>
                <Link
                  href="/offers"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 py-2 hover:text-[#176B45] ${
                    isActive("/offers") ? "text-[#176B45] font-bold border-b-2 border-[#176B45]" : ""
                  }`}
                >
                  <HiTag className="w-5 h-5 text-[#176B45]" /> Offers
                </Link>
                <Link
                  href="/categories"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 py-2 hover:text-[#176B45] ${
                    isActive("/categories") ? "text-[#176B45] font-bold border-b-2 border-[#176B45]" : ""
                  }`}
                >
                  <HiViewGrid className="w-5 h-5 text-[#176B45]" /> Categories
                </Link>
                <Link
                  href="/brands"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 py-2 hover:text-[#176B45] ${
                    isActive("/brands") ? "text-[#176B45] font-bold border-b-2 border-[#176B45]" : ""
                  }`}
                >
                  <HiCollection className="w-5 h-5 text-[#176B45]" /> Brands
                </Link>
                <Link
                  href="/order"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 py-2 hover:text-[#176B45] ${
                    isActive("/order") ? "text-[#176B45] font-bold border-b-2 border-[#176B45]" : ""
                  }`}
                >
                  <HiClipboardList className="w-5 h-5 text-[#176B45]" /> Order Request
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              {isLoggedIn ? (
                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center bg-[#E8F5EC] text-[#176B45] font-medium rounded-xl"
                >
                  My Profile
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 text-center bg-[#176B45] text-white font-medium rounded-xl shadow"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 text-center bg-gray-100 text-[#25332B] font-medium rounded-xl"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg">
        <div className="grid grid-cols-4 h-16 items-center text-center">
          <Link
            href="/"
            className={`flex flex-col items-center justify-center hover:text-[#176B45] ${
              isActive("/") ? "text-[#176B45] font-bold" : "text-gray-600"
            }`}
          >
            <HiHome className="w-5 h-5" />
            <span className="text-[11px] mt-1">Home</span>
          </Link>
          <Link
            href="/offers"
            className={`flex flex-col items-center justify-center hover:text-[#176B45] ${
              isActive("/offers") ? "text-[#176B45] font-bold" : "text-gray-600"
            }`}
          >
            <HiTag className="w-5 h-5" />
            <span className="text-[11px] mt-1">Offers</span>
          </Link>
          <Link
            href="/order"
            className={`flex flex-col items-center justify-center relative hover:text-[#176B45] ${
              isActive("/order") ? "text-[#176B45] font-bold" : "text-gray-600"
            }`}
          >
            <HiClipboardList className="w-5 h-5" />
            <span className="text-[11px] mt-1">Order</span>
            {cartItemCount > 0 && (
              <span className="absolute top-1 right-5 bg-[#176B45] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link
            href={isLoggedIn ? "/profile" : "/login"}
            className={`flex flex-col items-center justify-center hover:text-[#176B45] ${
              isActive("/profile") || isActive("/login") ? "text-[#176B45] font-bold" : "text-gray-600"
            }`}
          >
            <HiUser className="w-5 h-5" />
            <span className="text-[11px] mt-1">
              {isLoggedIn ? "Profile" : "Login"}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBer;