import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-2">
                <Image
                  src="/image/logo.png"
                  alt="ByteSpace logo"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <span className="text-gray-900 text-2xl font-bold tracking-tight font-clash">
                  ByteSpace
                </span>
              </Link>

              <p className="mt-4 text-xs md:text-sm text-gray-500 max-w-sm leading-relaxed">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full max-w-[260px] bg-white border border-gray-200 rounded-full px-5 py-3 text-xs md:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400 transition"
                />
                <button className="bg-[#C8F000] hover:bg-[#b8de00] text-gray-900 text-xs md:text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer shrink-0">
                  Search
                </button>
              </div>

              <p className="mt-4 text-[11px] text-gray-400 max-w-xs leading-normal">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Featured Courses
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Featured Categories
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Business
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                IT
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Design
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Development
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Marketing
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Photography
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Finance
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Become a Creator
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Affiliate Program
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                Help
              </Link>
              <Link
                href="#"
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 font-medium transition"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-normal">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500 font-normal">
            <Link href="#" className="hover:text-gray-800 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-800 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-800 transition">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
