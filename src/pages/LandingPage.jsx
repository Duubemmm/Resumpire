import { FileText } from "lucide-react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ResumeLogo from "../assets/resumelogo.png";
import Features from "../components/Features";
import FAQ from "../components/FAQ";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8ebec] to-[#e3e7f3] z-50">
      <Header />
      <Hero />
      <Features />
      <FAQ />
      {/* Footer */}
      <footer className=" text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src={ResumeLogo} alt="Resumepire Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-blue-500">Resumpire</span>
          </div>
          <p className="text-gray-400">© 2025 Resumepire</p>
        </div>
      </footer>
    </div>
  );
}
