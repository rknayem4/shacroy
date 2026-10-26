"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import type { ComponentType } from "react";

type SidebarLink = {
  name: string;
  href: string;
  icon?: ComponentType<{
    width?: number | string;
    height?: number | string;
    className?: string;
  }>;
};

type MobileSidebarProps = {
  links: SidebarLink[];
};

export default function MobileSidebar({ links }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Close drawer on ESC key press
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

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <div className="lg:hidden flex justify-between items-center px-4 py-3 bg-white border-b border-gray-100">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/assets/logo.png"
          alt="Shacroy Logo"
          className="h-12 w-auto object-contain"
        />
      </Link>

      {/* Menu Toggle Button */}
      <Button
        isIconOnly
        aria-label="Menu"
        variant="ghost"
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-700 hover:text-[#176B45]"
      >
        <Bars width={28} height={28} />
      </Button>

      {/* Side Drawer Modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {/* Drawer Container (Right side slide, 85vw on mobile, max-w-md on larger screens) */}
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="sidebar-drawer-title"
            className={`absolute right-0 top-0 flex h-full w-[85vw] max-w-md flex-col bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <header className="flex items-center justify-between border-b border-gray-100 p-5">
              <h2
                id="sidebar-drawer-title"
                className="text-lg font-bold text-[#25332B]"
              >
                Admin Menu
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
              >
                <Xmark className="h-6 w-6" />
              </button>
            </header>

            {/* Links List Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavigation(link.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-left ${
                      isActive
                        ? "bg-[#E8F5EC] text-[#176B45] font-semibold"
                        : "text-[#25332B] hover:bg-gray-100 hover:text-[#176B45]"
                    }`}
                  >
                    {Icon && <Icon width={22} height={22} className={isActive ? "text-[#176B45]" : "text-gray-500"} />}
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-100 p-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full rounded-xl bg-[#176B45] px-4 py-3 font-medium text-white transition-colors hover:bg-[#125638]"
              >
                Close Menu
              </button>
            </footer>
          </section>
        </div>
      )}
    </div>
  );
}