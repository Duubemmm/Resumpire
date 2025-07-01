import { useState } from "react";
import { TbFileCv } from "react-icons/tb";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    const headerTween = gsap.timeline({
      scrollTrigger: {
        trigger: "header",
        start: "bottom top",
      },
    });
    headerTween.fromTo(
      "header",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "transparent",
        duration: 1,
        ease: "power1.inOut",
        backgroundFilter: "blur(10px)",
      }
    );
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="relative z-50 shadow-sm">
      <header className="sticky top-0 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-teal-600" />
          <span className="text-2xl font-bold text-white">Resumpire</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6">
          <Link
            to="/auth"
            className="px-8 py-2 bg-white text-gray-700 font-medium border-2 border-teal-600 rounded-full hover:bg-blue-50 transition-colors"
          >
            Login
          </Link>
          <Link
  to="/auth"
  className="px-6 py-2 text-white bg-gradient-to-br from-blue-500 to-green-500 rounded-full transition-all font-medium"
>
  Sign Up
</Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <IoClose className="text-2xl text-gray-700" />
          ) : (
            <IoMenu className="text-2xl text-gray-500" />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-40 sm:hidden">
          <div className="absolute top-0 right-0 h-full w-4/5 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <IoClose className="text-2xl text-gray-700" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-6 flex-grow">
                <Link
                  to="/auth"
                  onClick={closeMenu}
                  className="px-6 py-3 border-2 border-teal-600 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors font-medium w-1/4"
                >
                  Login
                </Link>
                <Link
                  to="/auth"
                  onClick={closeMenu}
                  className="px-6 py-3 bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-lg hover:shadow-md transition-all font-medium text-left"
                >
                  Sign Up
                </Link>
              </div>

              {/* Footer in Mobile Menu */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <TbFileCv className="text-xl" />
                  <span className="text-sm">Build your perfect resume</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
