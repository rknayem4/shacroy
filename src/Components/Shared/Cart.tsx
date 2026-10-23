"use client";

import { useEffect, useState } from "react";
import { HiShoppingCart, HiX } from "react-icons/hi";

interface CartProps {
  cartItemCount?: number;
}

export function Cart({ cartItemCount = 0 }: CartProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Open shopping cart${cartItemCount > 0 ? `, ${cartItemCount} items` : ""}`}
        aria-expanded={isOpen}
        className="relative flex cursor-pointer items-center gap-1 p-2 text-gray-700 transition-colors hover:text-[#176B45]"
      >
        <HiShoppingCart className="h-6 w-6" aria-hidden="true" />
        {cartItemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#176B45] text-xs font-semibold text-white shadow">
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Backdrop with 0.5s fade effect */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        {/* Right-side drawer container with a slide effect */}
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-drawer-title"
          className={`absolute right-0 top-0 flex h-full w-[85vw] max-w-md flex-col bg-white shadow-xl transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          {/* Header */}
          <header className="flex items-center justify-between border-b border-gray-100 p-5">
            <h2
              id="cart-drawer-title"
              className="text-lg font-semibold text-[#25332B]"
            >
              Your shopping cart
            </h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close shopping cart"
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
            >
              <HiX className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          {/* Cart Body */}
          <div className="flex flex-1 items-center justify-center p-6 text-center text-gray-600 overflow-y-auto">
            {cartItemCount > 0
              ? "Your selected products will appear here."
              : "Your cart is empty."}
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-100 p-5">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-xl bg-[#176B45] px-4 py-3 font-medium text-white transition-colors hover:bg-[#125638]"
            >
              Continue shopping
            </button>
          </footer>
        </section>
      </div>
    </>
  );
}