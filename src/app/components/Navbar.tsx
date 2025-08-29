"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CloudSync
        </Link>

        {/* Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="#features" className="text-gray-700 hover:text-blue-600">
            Features
          </Link>
          <Link href="#upload" className="text-gray-700 hover:text-blue-600">
            Upload
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/signup"
          className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
