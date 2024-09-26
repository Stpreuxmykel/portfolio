"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Manage nav visibility

  // Toggle navigation menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu after clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Toggle button for mobile */}
      <button
        className="text-white md:hidden" // Only show on mobile
        onClick={toggleMenu}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`flex flex-col gap-8 text-white md:flex md:flex-row md:gap-8 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
            onClick={closeMenu} // Close menu on link click
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
