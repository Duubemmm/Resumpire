import { useNavigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import { FileText, LogOut, Code, Briefcase, Palette, Heart, GraduationCap, TrendingUp } from "lucide-react"
import Logo from "../assets/resumelogo.png"

const templates = [
  {
    id: "tech",
    name: "Tech Professional",
    niche: "Technology",
    description: "Perfect for software developers, engineers, and IT professionals",
    preview: "Clean, modern design with emphasis on technical skills",
    color: "blue",
  },
  {
    id: "business",
    name: "Corporate Executive",
    niche: "Business",
    description: "Ideal for business professionals, managers, and executives",
    preview: "Professional layout highlighting leadership and achievements",
    color: "gray",
  },
  {
    id: "creative",
    name: "Creative Professional",
    niche: "Design & Creative",
    description: "Great for designers, artists, and creative professionals",
    preview: "Visually appealing design that showcases creativity",
    color: "purple",
  },
  {
    id: "healthcare",
    name: "Healthcare Professional",
    niche: "Healthcare",
    description: "Designed for doctors, nurses, and healthcare workers",
    preview: "Clean, trustworthy design emphasizing certifications",
    color: "green",
  },
  {
    id: "education",
    name: "Education Professional",
    niche: "Education",
    description: "Perfect for teachers, professors, and education administrators",
    preview: "Academic-focused layout highlighting education and research",
    color: "orange",
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    niche: "Sales",
    description: "Ideal for sales professionals and marketing specialists",
    preview: "Results-driven design emphasizing achievements and metrics",
    color: "red",
  },
]

const getIcon = (niche) => {
  switch (niche) {
    case "Technology":
      return <Code className="h-6 w-6" />
    case "Business":
      return <Briefcase className="h-6 w-6" />
    case "Design & Creative":
      return <Palette className="h-6 w-6" />
    case "Healthcare":
      return <Heart className="h-6 w-6" />
    case "Education":
      return <GraduationCap className="h-6 w-6" />
    case "Sales":
      return <TrendingUp className="h-6 w-6" />
    default:
      return <FileText className="h-6 w-6" />
  }
}

const getColorClasses = (color) => {
  switch (color) {
    case "blue":
      return "border-blue-200 hover:border-blue-300 bg-blue-50"
    case "gray":
      return "border-gray-200 hover:border-gray-300 bg-gray-50"
    case "purple":
      return "border-purple-200 hover:border-purple-300 bg-purple-50"
    case "green":
      return "border-green-200 hover:border-green-300 bg-green-50"
    case "orange":
      return "border-orange-200 hover:border-orange-300 bg-orange-50"
    case "red":
      return "border-red-200 hover:border-red-300 bg-red-50"
    default:
      return "border-gray-200 hover:border-gray-300 bg-gray-50"
  }
}

export default function TemplateSelection() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate("/")
    } catch (error) {
      console.error("Failed to log out", error)
    }
  }

  const handleTemplateSelect = (templateId) => {
    navigate(`/builder/${templateId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="ResumePire Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold text-blue-500 italic">ResumePire</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {currentUser?.displayName || currentUser?.email}!</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-4">Choose Your Resume Template</h1>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Select a template that matches your industry and professional style. Each template is optimized for ATS
            systems and designed by industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`bg-white rounded-lg shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${getColorClasses(template.color)}`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getIcon(template.niche)}
                    <h3 className="text-xl font-semibold">{template.name}</h3>
                  </div>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{template.niche}</span>
                </div>
                <p className="text-gray-600 mb-4">{template.description}</p>

                <div className="space-y-4">
                  <div className="h-32 bg-white rounded border-2 border-dashed border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Template Preview</span>
                  </div>
                  <p className="text-sm text-gray-600">{template.preview}</p>
                  <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-2 px-4 rounded-md transition-colors">
                    Use This Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Templates Include</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">ATS Optimized</h3>
              <p className="text-gray-600 text-sm">Passes through Applicant Tracking Systems</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">HR Approved</h3>
              <p className="text-gray-600 text-sm">Designed by hiring managers and HR experts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">Easy to customize colors and sections</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
