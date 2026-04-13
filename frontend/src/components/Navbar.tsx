import { Languages, Menu, X, User } from "lucide-react";
import React, { useState, useEffect } from "react";
import { redYellowLogo } from "../assets";
import { useNavigate, useLocation } from "react-router-dom";

type NavBarTypes = "home" | "menu" | "aboutUs";

const navItems: { label: string; value: NavBarTypes }[] = [
  { label: "Home", value: "home" },
  { label: "Our Food", value: "menu" },
  { label: "About Us", value: "aboutUs" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState<NavBarTypes>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync active nav with current route
  useEffect(() => {
    const path = location.pathname.slice(1) as NavBarTypes;
    if (path && navItems.some(item => item.value === path)) {
      setActiveNav(path);
    } else if (location.pathname === "/") {
      setActiveNav("home");
    }
  }, [location]);

  // Set navigate features
  const setRoutes = (route: NavBarTypes) => {
    setActiveNav(route);
    navigate(`/${route === "home" ? "" : route}`);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setRoutes("home")}
            >
              <div className="relative">
                <img
                  src={redYellowLogo}
                  alt="Restaurant Logo"
                  className="h-12 w-12 object-contain rounded-full transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <span className="hidden sm:block text-xl font-bold bg-mcdRed bg-clip-text text-transparent">
                Mc Donald's
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setRoutes(item.value)}
                  className={`relative px-4 py-2 font-semibold transition-all duration-300 rounded-lg ${
                    activeNav === item.value
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  }`}
                  aria-current={activeNav === item.value ? "page" : undefined}
                >
                  {item.label}
                  {activeNav === item.value && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Right Section - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Selector */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
                <Languages size={20} className="text-gray-600 group-hover:text-red-600 transition-colors" />
                <select className="bg-transparent outline-none cursor-pointer text-sm font-medium text-gray-700 hover:text-red-600">
                  <option value="english">EN</option>
                  <option value="malay">BM</option>
                  <option value="chinese">中文</option>
                </select>
              </div>

              {/* Auth Buttons */}
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-gray-700">
                    <User size={18} />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="px-4 py-2 rounded-lg border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigate("/register")}
                    className="px-4 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white border-t">
            {/* Mobile Navigation */}
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setRoutes(item.value)}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                  activeNav === item.value
                    ? "bg-gradient-to-r from-red-50 to-yellow-50 text-red-600 border-l-4 border-red-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Language Selector */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-50">
              <Languages size={20} className="text-gray-600" />
              <select className="bg-transparent outline-none flex-1 font-medium text-gray-700">
                <option value="english">English</option>
                <option value="malay">Bahasa Melayu</option>
                <option value="chinese">中文</option>
              </select>
            </div>

            {/* Mobile Auth Buttons */}
            {isLoggedIn ? (
              <div className="space-y-2 pt-2">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 font-semibold text-gray-700">
                  <User size={18} />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-red-600 text-red-600 font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => navigate("/register")}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold shadow-md"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;