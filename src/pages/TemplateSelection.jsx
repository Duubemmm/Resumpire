import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import { LogOut, X, Eye, Edit3, Plus } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Logo from "../assets/resumelogo.png"
import img3 from "../assets/resume3.webp"
import img4 from "../assets/resume4.webp"

const Imagetemplates = [
  {
    id: 3,
    image: img3,
    color: "purple",
    name: "Stylish",
    description:
      "Are you a software engineer or a data scientist with a lot of skills and projects to list on your resume? This template allows you to create a perfect one-page resume",
  },
  {
    id: 4,
    image: img4,
    color: "orange",
    name: "Creative",
    description:
      "A creative template that accents your header and makes recruiters want to read the rest. Built for any industry",
  },
]

const getColorClasses = (color) => {
  switch (color) {
    case "blue":
      return {
        card: "border-blue-200 hover:border-blue-300 bg-blue-50",
        button: "bg-blue-600 hover:bg-blue-700 text-white",
        preview: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
        dot: "bg-blue-500",
      }
    case "gray":
      return {
        card: "border-gray-200 hover:border-gray-300 bg-gray-50",
        button: "bg-gray-600 hover:bg-gray-700 text-white",
        preview: "bg-white text-gray-600 border border-gray-600 hover:bg-gray-50",
        dot: "bg-gray-500",
      }
    case "purple":
      return {
        card: "border-purple-200 hover:border-purple-300 bg-purple-50",
        button: "bg-purple-600 hover:bg-purple-700 text-white",
        preview: "bg-white text-purple-600 border border-purple-600 hover:bg-purple-50",
        dot: "bg-purple-500",
      }
    case "green":
      return {
        card: "border-green-200 hover:border-green-300 bg-green-50",
        button: "bg-green-600 hover:bg-green-700 text-white",
        preview: "bg-white text-green-600 border border-green-600 hover:bg-green-50",
        dot: "bg-green-500",
      }
    case "orange":
      return {
        card: "border-orange-200 hover:border-orange-300 bg-orange-50",
        button: "bg-orange-600 hover:bg-orange-700 text-white",
        preview: "bg-white text-orange-600 border border-orange-600 hover:bg-orange-50",
        dot: "bg-orange-500",
      }
    case "red":
      return {
        card: "border-red-200 hover:border-red-300 bg-red-50",
        button: "bg-red-600 hover:bg-red-700 text-white",
        preview: "bg-white text-red-600 border border-red-600 hover:bg-red-50",
        dot: "bg-red-500",
      }
    default:
      return {
        card: "border-gray-200 hover:border-gray-300 bg-gray-50",
        button: "bg-gray-600 hover:bg-gray-700 text-white",
        preview: "bg-white text-gray-600 border border-gray-600 hover:bg-gray-50",
        dot: "bg-gray-500",
      }
  }
}

export default function TemplateSelection() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const containerRef = useRef(null)
  const cardsRef = useRef([])
  const headerRef = useRef(null)

  useGSAP(
    () => {
      // Set initial visibility
      gsap.set(cardsRef.current, { opacity: 1, y: 0 })

      // Header animation
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // Cards entrance animation
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: "start",
        },
        ease: "back.out(1.2)",
        delay: 0.3,
      })

      // Add hover animations for cards
      cardsRef.current.forEach((card) => {
        if (!card) return

        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            duration: 0.3,
            ease: "power2.out",
          })
        }

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            duration: 0.3,
            ease: "power2.out",
          })
        }

        card.addEventListener("mouseenter", handleMouseEnter)
        card.addEventListener("mouseleave", handleMouseLeave)

        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter)
          card.removeEventListener("mouseleave", handleMouseLeave)
        }
      })
    },
    { scope: containerRef },
  )

  const handleLogout = async () => {
    try {
      await logout()
      navigate("/")
    } catch (error) {
      console.error("Failed to log out", error)
    }
  }

  const openModal = (template) => {
    setSelectedTemplate(template)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTemplate(null)
  }

  const handleUseTemplate = (templateId) => {
    navigate(`/builder/${templateId}`)
  }

  const handlePreviewTemplate = (templateId) => {
    navigate(`/preview/${templateId}`)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header ref={headerRef} className="bg-white shadow-sm border-b border-teal-500">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={Logo || "/placeholder.svg"} alt="ResumePire Logo" className="w-10 h-10" />
              <span className="text-xl sm:text-2xl font-bold text-blue-600 italic">ResumePire</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block">
                <span className="text-gray-600 text-sm">
                  Welcome, <span className="font-medium">{currentUser?.displayName || currentUser?.email}</span>!
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                type="button"
                aria-label="Log out"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Choose Your Resume Template
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Select a template that matches your industry and professional style. Each template is optimized for ATS
            systems and designed by industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Create new resume card */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el
            }}
            className="group bg-white rounded-xl border-2 border-dashed border-gray-300 min-h-[400px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:bg-blue-50"
            onClick={() => navigate("/builder/new")}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Plus className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Create New Resume</h3>
            <p className="text-gray-500 text-center px-4">Start from scratch and build your perfect resume</p>
          </div>

          {/* Template Cards */}
          {Imagetemplates.map((template, index) => {
            const colorClasses = getColorClasses(template.color)
            return (
              <div
                key={template.id}
                ref={(el) => {
                  if (el) cardsRef.current[index + 1] = el
                }}
                className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 border-2 cursor-pointer ${colorClasses.card}`}
              >
                {/* Template Image */}
                <div className="relative bg-white">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={`${template.name} Resume Template`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay with buttons on hover */}
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          openModal(template)
                        }}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${colorClasses.preview}`}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleUseTemplate(template.id)
                        }}
                        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${colorClasses.button}`}
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        Use Template
                      </button>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{template.name}</h3>
                    <div className={`w-4 h-4 rounded-full ${colorClasses.dot}`}></div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{template.description}</p>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        openModal(template)
                      }}
                      className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all ${colorClasses.preview}`}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleUseTemplate(template.id)
                      }}
                      className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all ${colorClasses.button}`}
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-sm border p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Templates?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">ATS Optimized</h3>
                <p className="text-gray-600 text-sm">All templates are designed to pass Applicant Tracking Systems</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2h-4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Professional Design</h3>
                <p className="text-gray-600 text-sm">Created by industry experts and hiring managers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Easy Customization</h3>
                <p className="text-gray-600 text-sm">Fully customizable colors, fonts, and layouts</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Template Preview */}
      {isModalOpen && selectedTemplate && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#e8ebec] to-[#e3e7f3] bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedTemplate.name} Template</h2>
                <p className="text-gray-600 text-sm mt-1">Preview and customize this template</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="mb-6">
                <img
                  src={selectedTemplate.image || "/placeholder.svg"}
                  alt={`Preview of ${selectedTemplate.name} template`}
                  className="w-full h-auto border rounded-lg shadow-sm"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">About This Template</h3>
                <p className="text-gray-700 leading-relaxed">{selectedTemplate.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handlePreviewTemplate(selectedTemplate.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    getColorClasses(selectedTemplate.color).preview
                  }`}
                >
                  <Eye className="w-4 h-4 mr-2 inline" />
                  Live Preview
                </button>
                <button
                  type="button"
                  onClick={() => handleUseTemplate(selectedTemplate.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    getColorClasses(selectedTemplate.color).button
                  }`}
                >
                  <Edit3 className="w-4 h-4 mr-2 inline" />
                  Use This Template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
