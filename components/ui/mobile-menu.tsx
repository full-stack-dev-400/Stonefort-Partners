"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="md:hidden flex items-center ml-4 pr-4">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex w-8 h-8 text-slate-300 hover:text-white text-center items-center justify-center transition`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-4 h-4 fill-current pointer-events-none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
            y="7"
            width="16"
            height="2"
            rx="1"
          />
        </svg>
      </button>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="rounded-lg bg-black border border-white/10 px-4 py-3 space-y-2">
          {/* Home + submenu (IB / CPA / PAMM) */}
          <li className="border-b border-white/10 pb-2 mb-1">
            <Link
              href="/"
              className="block py-2 text-[18px] font-normal text-white"
              onClick={() => setMobileNavOpen(false)}
            >
              Home
            </Link>
            <div className="mt-1 space-y-1">
              <Link
                href="/become-an-ib"
                className={`block rounded-md px-3 py-2 text-[16px] font-normal transition-colors ${
                  pathname === "/become-an-ib"
                    ? "bg-teal-500 text-white"
                    : "text-white/90 hover:bg-teal-500 hover:text-white"
                }`}
                onClick={() => setMobileNavOpen(false)}
              >
                Become an Introducer (IB)
              </Link>

              <Link
                href="/cpa"
                className={`block rounded-md px-3 py-2 text-[16px] font-normal transition-colors ${
                  pathname === "/cpa"
                    ? "bg-teal-500 text-white"
                    : "text-white/90 hover:bg-teal-500 hover:text-white"
                }`}
                onClick={() => setMobileNavOpen(false)}
              >
                Become a CPA Affiliate
              </Link>

              <Link
                href="/pamm"
                className={`block rounded-md px-3 py-2 text-[16px] font-normal transition-colors ${
                  pathname === "/pamm"
                    ? "bg-teal-500 text-white"
                    : "text-white/90 hover:bg-teal-500 hover:text-white"
                }`}
                onClick={() => setMobileNavOpen(false)}
              >
                Become a Money Manager (PAMM)
              </Link>
            </div>
          </li>

          {/* Loyalty Programme */}
          <li>
            <Link
              href="/loyalty-programme"
              className={`block py-2 text-[18px] font-normal transition-colors ${
                pathname === "/loyalty-programme"
                  ? "text-teal-300"
                  : "text-white/90 hover:text-teal-300"
              }`}
              onClick={() => setMobileNavOpen(false)}
            >
              Loyalty Programme
            </Link>
          </li>

          {/* About Us */}
          <li>
            <Link
              href="/about"
              className={`block py-2 text-[18px] font-normal transition-colors ${
                pathname === "/about"
                  ? "text-teal-300"
                  : "text-white/90 hover:text-teal-300"
              }`}
              onClick={() => setMobileNavOpen(false)}
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
