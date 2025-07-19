import { Link } from "react-router-dom";
import Logo from "../assets/resumelogo.png";

const Header = () => {
  return (
    <section className="shadow-sm">
      <header
        className="sticky top-0 flex flex-col sm:flex-row justify-between items-center px-6 py-4 max-w-7xl mx-auto"
        aria-label="Website Header"
      >
        {/* Logo & Text */}
        <div
          className="flex items-center justify-center sm:justify-start"
          aria-label="ResumPire Logo and brand name"
        >
          <img
            src={Logo}
            className="w-16 h-16"
            alt="Resumpire Logo"
            aria-label="Resumpire Logo"
          />
          <p
            className="text-2xl font-bold text-blue-500 italic"
            aria-label="Resumpire brand name"
          >
            ResumPire
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center space-x-6 mt-4 sm:mt-0">
          <Link
            to="/auth"
            className="px-8 py-2 bg-white text-gray-700 font-medium border-2 border-blue-300 rounded-full hover:bg-blue-50 transition-colors"
            aria-label="Sign In To Resumpire"
          >
            Sign In
          </Link>
          <Link
            to="/SignUp"
            className="px-6 py-2 text-white bg-gradient-to-br from-blue-500 to-teal-500 rounded-full transition-all font-medium"
            aria-label="Get Started with Resumpire"
          >
            Get Started
          </Link>
        </nav>
      </header>
    </section>
  );
};
export default Header;

