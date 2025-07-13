import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Animated Book Icon for Search or Logo
const AnimatedBookIcon = ({ className = "", gradientId = "searchGrad" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} animate-wiggle`}
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <path
      stroke={`url(#${gradientId})`}
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
    ></path>
  </svg>
);

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "About Us", to: "#about" },
  { name: "How it Works", to: "#how-it-works" },
  { name: "Books", to: "#books" },
  { name: "Contact", to: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 150;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.querySelector(navLinks[i].to);
        if (el?.offsetTop && scrollPos >= el.offsetTop) {
          setActiveLink(navLinks[i].to);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "h-14 shadow-md" : "h-20"
      } bg-white/80 dark:bg-gray-900/80 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <AnimatedBookIcon className="w-7 h-7" gradientId="logoBook" />
          <div className="leading-tight">
            <span className="text-gray-800 dark:text-white">Pustak Daan</span>
            <span className="text-[10px] text-blue-500 block">महादान</span>
          </div>
        </a>

        {/* Right Side (Nav + Search + Toggle) */}
        <div className="flex items-center gap-4">
          {/* Nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                className={`text-sm font-medium transition relative pb-1 group ${
                  activeLink === link.to
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-blue-500 dark:hover:text-blue-400`}
              >
                {link.name}
                <span className="absolute left-0 -bottom-[2px] h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 w-0 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-[6px] rounded-md h-11">
            <AnimatedBookIcon className="w-5 h-5 mr-2" gradientId="searchGrad" />
            <input
              type="text"
              placeholder="Search for books..."
              className="bg-transparent outline-none text-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          {/* Dark Mode */}
          <div
            className="hidden md:flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 w-14 cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                darkMode ? "translate-x-8 bg-yellow-400" : "translate-x-0 bg-gray-800"
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-white" />}
            </div>
          </div>

          {/* Mobile: Book Icon + Menu */}
          <div className="md:hidden flex items-center gap-2">
            <a href="#books">
              <AnimatedBookIcon className="w-6 h-6" gradientId="mobileBook" />
            </a>
            <button onClick={() => setMobileMenu(true)}>
              <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-6 right-4 w-[90%] max-w-sm rounded-3xl z-50 shadow-2xl p-5 bg-gradient-to-br from-rose-100 via-blue-100 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-black animate-gradient-pulse"
          >
            {/* Floating Bubbles */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute w-5 h-5 bg-blue-300 rounded-full opacity-20 animate-bubble"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${10 + Math.random() * 10}s`,
                    bottom: `${Math.random() * 50}px`,
                  }}
                ></span>
              ))}
            </div>

            {/* Mobile Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">#PustakDaan</h2>
                <button onClick={() => setMobileMenu(false)}>
                  <X className="w-6 h-6 text-gray-700 dark:text-white" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.to}
                    onClick={() => setMobileMenu(false)}
                    className={`text-base font-medium ${
                      activeLink === link.to ? "text-blue-600" : "text-gray-700 dark:text-white"
                    } hover:text-blue-500 transition`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div
                className="mt-4 flex items-center justify-center cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              >
                <div className="w-14 h-6 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center p-1">
                  <div
                    className={`w-6 h-6 rounded-full transition-transform duration-300 ${
                      darkMode ? "translate-x-8 bg-yellow-400" : "translate-x-0 bg-gray-800"
                    } flex items-center justify-center`}
                  >
                    {darkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-white" />}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
