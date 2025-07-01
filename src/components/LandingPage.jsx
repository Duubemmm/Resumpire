import { FileText } from "lucide-react"
import Header from "./Header"
import Hero from "./Hero"
import Features from "./Features"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(9,63,87)] to-[#323333] z-50">
      <Header />
      <Hero />
      <Features />
      {/* Footer */}
      <footer className=" text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="h-6 w-6" />
            <span className="text-xl font-bold">Resumpire</span>
          </div>
          <p className="text-gray-400">© 2025 Resumepire</p>
        </div>
      </footer>
      </div>
  )
}
