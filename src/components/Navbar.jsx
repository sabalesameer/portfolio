import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Building,
  Mail,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, path: "#home" },
    { name: "About", icon: User, path: "#about" },
    { name: "Skills", icon: Code, path: "#skills" },
    { name: "Projects", icon: Briefcase, path: "#projects" },
    { name: "Internships", icon: Building, path: "#internships" },
    { name: "Contact", icon: Mail, path: "#contact" },
  ];

  const [Show, setShow] = useState(true);
  const [lastScrolly, setLastScrolly] = useState(0);
  useEffect(() => {
    const handelScroll = () => {
      const currentScrolly = window.scrollY;
      if (currentScrolly > lastScrolly && currentScrolly > 40) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrolly(currentScrolly);
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [lastScrolly]);

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-4 ml-[30%] z-50 w-[92%] md:w-auto transition-transform duration-300 ease-in-out ${Show ? "translate-y-0" : "-translate-y-24"}`}>
        <div
          className="flex items-center justify-between
                     bg-transparent backdrop-blur-[5px]
                     rounded-full px-4 py-3 shadow-lg ">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                           text-gray-300 hover:text-white
                           hover:bg-white/10 hover:outline-dashed outline-offset-4 hover:outline-orange-500 transition-all duration-300"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center
                       w-11 h-11 rounded-full
                       bg-white/10 hover:bg-white/20
                       transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden mt-3 rounded-2xl
                     bg-black/95 backdrop-blur-xl
                     border border-white/10 shadow-xl
                     overflow-hidden transition-all duration-300
                     ${isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 px-6 py-4
                         text-gray-300 hover:text-white
                         hover:bg-white/10 transition"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-base">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
