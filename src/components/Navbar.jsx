import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between p-5 md:px-20 px-6 shadow-2xl fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/90 text-white" : "bg-(--color-white) text-black"
      }`}
    >
      <div>
        <h1
          className={`text-4xl text-(--color-primary) text-shadow-sm font-bold ${
            isScrolled ? "text-shadow-white" : "text-shadow-black/80"
          }`}
        >
          عربسات
        </h1>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="block md:hidden focus:outline-none cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <IoIosCloseCircleOutline className="text-(--color-primary) text-4xl" />
        ) : (
          <FiMenu className="text-3xl" />
        )}
      </button>

      {/* Menu Items */}
      <div
        className={`absolute top-20 left-0 w-full ${
          isScrolled ? "bg-black/90 text-white" : "bg-white text-black"
        } md:bg-transparent md:static md:w-auto md:flex md:items-center md:justify-center transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:max-h-screen md:opacity-100 overflow-hidden z-20`}
      >
        <ul className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center p-5 md:p-0">
          <li className="cursor-pointer transition-all ease-in-out hover:text-(--color-primary) text-xl font-semibold duration-200">
            <HashLink smooth to="#home">
              Home
            </HashLink>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:text-(--color-primary) text-xl font-semibold duration-200">
            <HashLink smooth to="#services">
              Services
            </HashLink>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:text-(--color-primary) text-xl font-semibold duration-200">
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:text-(--color-primary) text-xl font-semibold duration-200">
            <HashLink smooth to="#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
