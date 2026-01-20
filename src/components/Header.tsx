"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Bell } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Results", href: "#results" },
  { name: "Jobs", href: "#latest-jobs" },
  { name: "Admit Card", href: "#admit-card" },
  { name: "Admission", href: "#admission" },
  { name: "Yojana", href: "#yojana" },
  { name: "Answer Key", href: "#answer-key" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* TOP RED BANNER */}
      <div className="bg-gradient-to-r from-[#8b0f2f] via-[#a4163a] to-[#b91c3c] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-14 pb-28">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            SARKARI RESULT
          </h1>
          <p className="mt-2 text-sm md:text-base opacity-90">
            SarkariResultLatest.com.in
          </p>
        </div>
      </div>

      <nav className="bg-gradient-to-r from-[#1d1c1c] via-[#363334] to-[#1b1315] text-white text-center ">
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur">
                  <span className="text-xl font-black text-white">SR</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-white tracking-tight">
                    SarkariResult
                  </h1>
                  <p className="text-[10px] text-orange-100 -mt-1">
                    सरकारी नौकरी • रिजल्ट
                  </p>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-16px font-medium text-white/90 transition-all hover:bg-white/15 hover:text-yellow-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white transition-colors hover:bg-white/25">
                <Search className="h-4 w-4" />
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white transition-colors hover:bg-white/25 lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-white/20 py-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-16px font-medium text-white/90 transition-all hover:bg-white/15 hover:text-yellow-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
