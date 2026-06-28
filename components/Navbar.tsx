"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/compare", label: "Compare" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black" style={{ height: 44 }}>
      <div className="max-w-[980px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bebas text-lg tracking-widest text-white leading-none"
        >
          Petz Insurance<span className="text-[#0066cc]"> Compare</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] tracking-[-0.12px] transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-[#a1a1a6] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/compare"
            className="text-[12px] bg-[#0066cc] text-white px-4 py-1.5 rounded-full tracking-[-0.12px] hover:bg-[#0071e3] transition-colors active:scale-95"
          >
            Compare Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="max-w-[980px] mx-auto px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-[14px] tracking-[-0.224px] ${
                    pathname === link.href ? "text-white" : "text-[#a1a1a6]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/compare"
                onClick={() => setMenuOpen(false)}
                className="text-[14px] bg-[#0066cc] text-white px-5 py-2 rounded-full text-center hover:bg-[#0071e3] transition-colors"
              >
                Compare Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
