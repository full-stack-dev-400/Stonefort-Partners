"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import TranslateWidget from "@/components/TranslateWidget";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Only start hiding after some scroll so it doesn't flicker at top
      const threshold = 80;

      if (currentY > lastScrollY && currentY > threshold) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-40 w-full text-white bg-black/95 backdrop-blur-sm transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* ===== Top utility bar ===== */}
      <div className="bg-black">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex h-14 items-center justify-end gap-6">
            <Link
              href="/contact"
              className="text-[18px] font-normal tracking-[0.2px] hover:text-teal-300 transition-colors"
            >
              Contact Us
            </Link>

            <TranslateWidget />
          </div>
        </div>
      </div>

      {/* divider line */}
      <div className="h-px w-full bg-white/10" />

      {/* ===== Bottom main bar ===== */}
      <div className="bg-black">
        <div className="mx-auto max-w-[1280px] px-[15px] lg:px-0">
          <div className="flex h-[120px] items-center">
            <div className="shrink-0 scale-110">
              <Logo />
            </div>

            <div className="flex-1" />
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-[56px]">
                {/* Home + dropdown */}
                <li className="relative group">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[18px] leading-none font-normal tracking-[0.2px] hover:text-teal-300 transition-colors"
                  >
                    Home
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      className="opacity-90"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown */}
<div
  className="
    absolute left-1/2 top-full -translate-x-1/2 z-50 mt-3
    invisible opacity-0 translate-y-1 transition
    group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
    pointer-events-none group-hover:pointer-events-auto
    before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-['']
  "
>
  <div className="w-[380px] rounded-md bg-white py-2 text-black shadow-2xl">
    <Link
      href="/become-an-ib"
      className="
        block px-6 py-4 text-[18px] font-normal transition-colors
        group-hover:bg-teal-400 group-hover:text-white
        hover:bg-teal-400 hover:text-white
      "
    >
      Become an Introducer (IB)
    </Link>

    <Link
      href="/cpa"
      className="
        block px-6 py-4 text-[18px] font-normal transition-colors
        hover:bg-teal-400 hover:text-white
      "
    >
      Become a CPA Affiliate
    </Link>

    <Link
      href="/pamm"
      className="
        block px-6 py-4 text-[18px] font-normal transition-colors
        hover:bg-teal-400 hover:text-white
      "
    >
      Become a Money Manager (PAMM)
    </Link>
  </div>
</div>

                </li>

                <li>
                  <Link
                    href="/loyalty-programme"
                    className="text-[18px] leading-none font-normal tracking-[0.2px] hover:text-teal-300 transition-colors"
                  >
                    Loyalty Programme
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="text-[18px] leading-none font-normal tracking-[0.2px] hover:text-teal-300 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex-1" />

            <div className="lg:hidden ml-auto">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/10" />
    </header>
  );
}
