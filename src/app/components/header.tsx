"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoPersonOutline,
  IoSearch,
  IoHeartOutline,
  IoCartOutline
} from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className={`w-full ${isHomePage ? "bg-amber-100" : "bg-white"} shadow-md`}>
      <header className="text-black text-4xl py-8">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          
          {/* ✅ Logo Section */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              MyStore
            </Link>
          </div>

          {/* ✅ Navigation Links - Centered */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-20">
            <Link className="hover:text-blue-500 transition" href="/">Home</Link>
            <Link className="hover:text-blue-500 transition" href="/shop">Shop</Link>
            <Link className="hover:text-blue-500 transition" href="/about">About</Link>
            <Link className="hover:text-blue-500 transition" href="/Contact">Contact</Link>
          </nav>

          {/* ✅ Icons Section */}
          <div className="flex items-center gap-8">
            <Link href="/account">
              <IoPersonOutline className="text-black text-5xl hover:text-gray-600 transition" />
            </Link>
            <Link href="/search">
              <IoSearch className="text-black text-5xl hover:text-gray-600 transition" />
            </Link>
            <Link href="/favorite">
              <IoHeartOutline className="text-black text-5xl hover:text-red-500 transition" />
            </Link>
            <Link href="/trolley">
              <IoCartOutline className="text-black text-5xl hover:text-gray-600 transition" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
