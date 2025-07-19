import { useState, useRef } from "react"
import { Download, MapPin, Mail, Globe, Calendar, Star, TrendingUp, Target, Heart, Upload, X } from "lucide-react"

export default function ResumeBuilder() {
  const fileInputRef = useRef(null)
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "ELLEN JOHNSON",
    title: "Digital Marketing Manager | Growth Hacking | Data Analysis",
    email: "help@enhancv.com",
    linkedin: "linkedin.com",
    location: "San Francisco, California",
    summary:
      "Motivated Digital Marketing Manager with over 3 years of experience in driving user acquisition and growth through strategic paid campaigns. Expert in data analysis, creative optimization, and cross-functional collaboration to achieve business objectives. Proven track record of scaling campaigns and enhancing ROI.",
    profileImage: "/placeholder.svg?height=120&width=120&text=Profile",
  })

  const [experiences, setExperiences] = useState([
    {
      id: "1",
      position: "Senior Digital Marketing Specialist",
      company: "Tech Innovate",
      duration: "01/2022 - Present",
      location: "San Francisco, CA",
      responsibilities: [
        "Led the development and execution of comprehensive digital marketing campaigns across Meta, Google, and TikTok, increasing user acquisition by 45% within 12 months.",
        "Managed a $500K quarterly budget for paid acquisition channels, optimizing spend for a 30% improvement in ROAS.",
        "Implemented advanced targeting and retargeting strategies that reduced CPA by 20%, while increasing conversion rates by 15%.",
        "Conducted A/B testing on over 100 ad creatives, identifying top performers that led to a 25% increase in engagement.",
        "Collaborated with cross-functional teams to align marketing efforts with product launches, resulting in a 40% increase in product adoption.",
        "Analyzed campaign data to provide actionable insights, leading to a strategic pivot that captured a new user segment and contributed to a 35% increase in market share.",
      ],
    },
    {
      id: "2",
      position: "Digital Marketing Manager",
      company: "MarketGuru",
      duration: "06/2019 - 12/2021",
      location: "San Francisco, CA",
      responsibilities: [
        "Managed and scaled paid search and social campaigns across Snapchat and Apple Search Ads, achieving a 50% increase in leads.",
        "Designed and executed a landing page optimization strategy that lifted conversion rates by 18%.",
        "Utilized Looker and Google Analytics to monitor campaign performance, driving a 10% decrease in bounce rates.",
        "Orchestrated the creative testing process, enhancing ad performance and contributing to a 22% increase in CTR.",
        "Collaborated with engineering to integrate new tracking systems, improving data accuracy and campaign efficiency.",
      ],
    },
    {
      id: "3",
      position: "Performance Marketing Analyst",
      company: "AdVantage Media",
      duration: "03/2017 - 05/2019",
      location: "San Francisco, CA",
      responsibilities: [
        "Analyzed performance data across multiple digital channels, identifying trends that informed strategic decisions.",
        "Supported the execution of campaigns that resulted in a 15% increase in user engagement.",
        "Developed and maintained reporting dashboards for real-time performance tracking, enhancing team responsiveness.",
        "Assisted in managing a portfolio of digital ads, optimizing for a 10% improvement in ad efficiency.",
      ],
    },
  ])

  const [education, setEducation] = useState([
    {
      id: "1",
      degree: "Master of Science in Marketing Analytics",
      institution: "University of California, Berkeley",
      duration: "01/2015 - 01/2017",
      location: "Berkeley, CA",
    },
    {
      id: "2",
      degree: "Bachelor of Science in Business Administration",
      institution: "San Francisco State University",
      duration: "01/2011 - 01/2015",
      location: "San Francisco, CA",
    },
  ])

  const [achievements, setAchievements] = useState([
    {
      id: "1",
      title: "45% User Acquisition Increase",
      description:
        "Spearheaded digital marketing initiatives at Tech Innovate that led to a 45% increase in user acquisition.",
      icon: "star",
    },
    {
      id: "2",
      title: "30% ROAS Improvement",
      description:
        "Optimized ad spend across digital platforms at Tech Innovate, resulting in a 30% improvement in ROAS.",
      icon: "trending-up",
    },
    {
      id: "3",
      title: "Market Share Expansion",
      description: "Identified and captured a new user segment, contributing to a 35% increase in market share.",
      icon: "target",
    },
    {
      id: "4",
      title: "Conversion Rate Optimization",
      description: "Implemented a successful landing page optimization strategy, lifting conversion rates by 18%.",
      icon: "heart",
    },
  ])

  const [skills] = useState([
    "Data Analysis",
    "Paid Acquisition",
    "Retargeting",
    "ROAS Optimization",
    "Cross-Functional Collaboration",
    "Google Analytics",
    "Looker",
    "Appsflyer",
    "Meta Advertising",
    "Google Ads",
    "TikTok Ads",
    "Snapchat Ads",
    "SQL",
  ])

  const [certifications, setCertifications] = useState([
    {
      id: "1",
      name: "Advanced Google Analytics",
      description: "Focused on mastering Google Analytics for deep insights into user behavior, provided by Google.",
    },
    {
      id: "2",
      name: "Effective Creative Testing",
      description: "Specialized in evaluating ad creative performance to maximize engagement, offered by Coursera.",
    },
  ])

  const [languages] = useState([
    { name: "English", level: "Native", proficiency: 5 },
    { name: "Spanish", level: "Advanced", proficiency: 3 },
  ])

  const [uploadError, setUploadError] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const handleDownloadPDF = () => {
    // Announce to screen readers
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = "Preparing PDF download..."
    document.body.appendChild(announcement)

    setTimeout(() => {
      window.print()
      document.body.removeChild(announcement)
    }, 100)
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    setUploadError("")

    if (!file) return

    // Validate file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
    if (!validTypes.includes(file.type)) {
      setUploadError("Please upload a valid image file (JPEG, PNG, or WebP)")
      return
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      setUploadError("Image size must be less than 5MB")
      return
    }

    setIsUploading(true)

    const reader = new FileReader()
    reader.onload = (e) => {
      setPersonalInfo({ ...personalInfo, profileImage: e.target.result })
      setIsUploading(false)

      // Announce success to screen readers
      const announcement = document.createElement("div")
      announcement.setAttribute("aria-live", "polite")
      announcement.className = "sr-only"
      announcement.textContent = "Profile image uploaded successfully"
      document.body.appendChild(announcement)
      setTimeout(() => document.body.removeChild(announcement), 1000)
    }
    reader.onerror = () => {
      setUploadError("Error reading file. Please try again.")
      setIsUploading(false)
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setPersonalInfo({ ...personalInfo, profileImage: "/placeholder.svg?height=120&width=120&text=Profile" })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }

    // Announce to screen readers
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.className = "sr-only"
    announcement.textContent = "Profile image removed"
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }

  const getIcon = (iconName) => {
    switch (iconName) {
      case "star":
        return <Star className="w-4 h-4" aria-hidden="true" />
      case "trending-up":
        return <TrendingUp className="w-4 h-4" aria-hidden="true" />
      case "target":
        return <Target className="w-4 h-4" aria-hidden="true" />
      case "heart":
        return <Heart className="w-4 h-4" aria-hidden="true" />
      default:
        return <Star className="w-4 h-4" aria-hidden="true" />
    }
  }

  const renderDots = (count, total = 5) => {
    return (
      <div className="flex gap-1" role="img" aria-label={`${count} out of ${total} proficiency level`}>
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i < count ? "bg-gray-800" : "bg-gray-300"}`}
            aria-hidden="true"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <div className="p-2 sm:p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Resume Builder</h1>
              <button
                onClick={handleDownloadPDF}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors w-full sm:w-auto"
                aria-label="Download resume as PDF"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download PDF
              </button>
            </div>
          </header>

          <main id="main-content">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Left Column - Form */}
              <div className="space-y-4 sm:space-y-6 order-2 xl:order-1">
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                  {/* Personal Information */}
                  <section className="bg-white p-4 sm:p-6 rounded-lg shadow mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4">Personal Information</h2>
                    <div className="space-y-4">
                      {/* Profile Image Upload */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <img
                              src={personalInfo.profileImage || "/placeholder.svg"}
                              alt="Profile preview"
                              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-gray-200"
                            />
                            {personalInfo.profileImage !== "/placeholder.svg?height=120&width=120&text=Profile" && (
                              <button
                                onClick={removeImage}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                aria-label="Remove profile image"
                              >
                                <X className="w-3 h-3" aria-hidden="true" />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/jpeg,image/jpg,image/png,image/webp"
                              onChange={handleImageUpload}
                              className="hidden"
                              id="profile-image-upload"
                              aria-describedby="image-upload-help"
                            />
                            <label
                              htmlFor="profile-image-upload"
                              className={`flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-colors ${
                                isUploading ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                            >
                              <Upload className="w-4 h-4" aria-hidden="true" />
                              {isUploading ? "Uploading..." : "Upload Image"}
                            </label>
                          </div>
                          <p id="image-upload-help" className="text-xs text-gray-500 mt-1">
                            JPEG, PNG, or WebP. Max 5MB. Recommended: 400x400px
                          </p>
                          {uploadError && (
                            <p className="text-red-600 text-sm mt-1" role="alert" aria-live="polite">
                              {uploadError}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={personalInfo.fullName}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          required
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                          Title/Specialties *
                        </label>
                        <input
                          id="title"
                          type="text"
                          value={personalInfo.title}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          required
                          aria-required="true"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={personalInfo.email}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            required
                            aria-required="true"
                          />
                        </div>
                        <div>
                          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                            LinkedIn
                          </label>
                          <input
                            id="linkedin"
                            type="text"
                            value={personalInfo.linkedin}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        <input
                          id="location"
                          type="text"
                          value={personalInfo.location}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
                          Professional Summary
                        </label>
                        <textarea
                          id="summary"
                          value={personalInfo.summary}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, summary: e.target.value })}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                          aria-describedby="summary-help"
                        />
                        <p id="summary-help" className="text-xs text-gray-500 mt-1">
                          Brief overview of your professional background and key strengths
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Experience Section */}
                  <section className="bg-white p-4 sm:p-6 rounded-lg shadow mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4">Work Experience</h2>
                    {experiences.map((exp, index) => (
                      <div key={exp.id} className="mb-6 p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-medium mb-3">Experience {index + 1}</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label
                              htmlFor={`position-${exp.id}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Position *
                            </label>
                            <input
                              id={`position-${exp.id}`}
                              type="text"
                              value={exp.position}
                              onChange={(e) => {
                                const updated = experiences.map((item) =>
                                  item.id === exp.id ? { ...item, position: e.target.value } : item,
                                )
                                setExperiences(updated)
                              }}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              required
                              aria-required="true"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor={`company-${exp.id}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Company *
                            </label>
                            <input
                              id={`company-${exp.id}`}
                              type="text"
                              value={exp.company}
                              onChange={(e) => {
                                const updated = experiences.map((item) =>
                                  item.id === exp.id ? { ...item, company: e.target.value } : item,
                                )
                                setExperiences(updated)
                              }}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              required
                              aria-required="true"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label
                              htmlFor={`duration-${exp.id}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Duration
                            </label>
                            <input
                              id={`duration-${exp.id}`}
                              type="text"
                              value={exp.duration}
                              onChange={(e) => {
                                const updated = experiences.map((item) =>
                                  item.id === exp.id ? { ...item, duration: e.target.value } : item,
                                )
                                setExperiences(updated)
                              }}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              placeholder="MM/YYYY - MM/YYYY"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor={`exp-location-${exp.id}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Location
                            </label>
                            <input
                              id={`exp-location-${exp.id}`}
                              type="text"
                              value={exp.location}
                              onChange={(e) => {
                                const updated = experiences.map((item) =>
                                  item.id === exp.id ? { ...item, location: e.target.value } : item,
                                )
                                setExperiences(updated)
                              }}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor={`responsibilities-${exp.id}`}
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Key Responsibilities
                          </label>
                          <textarea
                            id={`responsibilities-${exp.id}`}
                            value={exp.responsibilities.join("\n")}
                            onChange={(e) => {
                              const updated = experiences.map((item) =>
                                item.id === exp.id
                                  ? { ...item, responsibilities: e.target.value.split("\n").filter((r) => r.trim()) }
                                  : item,
                              )
                              setExperiences(updated)
                            }}
                            rows={6}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                            placeholder="Enter each responsibility on a new line"
                            aria-describedby={`responsibilities-help-${exp.id}`}
                          />
                          <p id={`responsibilities-help-${exp.id}`} className="text-xs text-gray-500 mt-1">
                            Enter each responsibility on a separate line
                          </p>
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Achievements Section */}
                  <section className="bg-white p-4 sm:p-6 rounded-lg shadow">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4">Key Achievements</h2>
                    {achievements.map((achievement, index) => (
                      <div key={achievement.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                        <h3 className="font-medium mb-3">Achievement {index + 1}</h3>
                        <div className="space-y-3">
                          <div>
                            <label
                              htmlFor={`achievement-title-${achievement.id}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Title *
                            </label>
                            <input
                              id={`achievement-title-${achievement.id}`}
                              type="text"
                              value={achievement.title}
                              onChange={(e) => {
                                const updated = achievements.map((item) =>
                                  item.id === achievement.id ? { ...item, title: e.target.value } : item,
                                )
                                setAchievements(updated)
                              }}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              required
                              aria-required="true"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor={`achievement-desc-${achievement.id}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Description
                            </label>
                            <textarea
                              id={`achievement-desc-${achievement.id}`}
                              value={achievement.description}
                              onChange={(e) => {
                                const updated = achievements.map((item) =>
                                  item.id === achievement.id ? { ...item, description: e.target.value } : item,
                                )
                                setAchievements(updated)
                              }}
                              rows={2}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              </div>

              {/* Right Column - Resume Preview */}
              <div className="order-1 xl:order-2 xl:sticky xl:top-6 xl:h-fit">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden" id="resume-preview">
                  <div
                    className="p-4 sm:p-6 lg:p-8 min-h-[600px] sm:min-h-[800px] lg:min-h-[1056px]"
                    style={{ maxWidth: "8.5in", margin: "0 auto" }}
                  >
                    {/* Header */}
                    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 sm:mb-8 gap-4">
                      <div className="flex-1 order-2 sm:order-1">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-wide break-words">
                          {personalInfo.fullName}
                        </h1>
                        <p className="text-base sm:text-lg text-teal-500 font-medium mb-3 sm:mb-4 break-words">
                          {personalInfo.title}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                          {personalInfo.email && (
                            <div className="flex items-center gap-1">
                              <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                              <span className="break-all">{personalInfo.email}</span>
                            </div>
                          )}
                          {personalInfo.linkedin && (
                            <div className="flex items-center gap-1">
                              <Globe className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                              <span className="break-all">{personalInfo.linkedin}</span>
                            </div>
                          )}
                          {personalInfo.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                              <span>{personalInfo.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0 order-1 sm:order-2 self-center sm:self-start sm:ml-4 lg:ml-8">
                        <img
                          src={personalInfo.profileImage || "/placeholder.svg"}
                          alt={`${personalInfo.fullName} profile picture`}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-gray-200"
                        />
                      </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                      {/* Left Column */}
                      <div className="lg:col-span-2 space-y-6 lg:space-y-8">
                        {/* Experience */}
                        <section>
                          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                            EXPERIENCE
                          </h2>
                          <div className="space-y-4 sm:space-y-6">
                            {experiences.map((exp) => (
                              <article key={exp.id}>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base break-words">
                                      {exp.position}
                                    </h3>
                                    <p className="text-teal-500 font-medium text-sm break-words">{exp.company}</p>
                                  </div>
                                  <div className="text-right text-xs sm:text-sm text-gray-600 flex-shrink-0">
                                    <div className="flex items-center gap-1 justify-end sm:justify-start">
                                      <Calendar className="w-3 h-3" aria-hidden="true" />
                                      <span>{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1 justify-end sm:justify-start">
                                      <MapPin className="w-3 h-3" aria-hidden="true" />
                                      <span>{exp.location}</span>
                                    </div>
                                  </div>
                                </div>
                                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-700 ml-2 sm:ml-4">
                                  {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="break-words">
                                      {resp}
                                    </li>
                                  ))}
                                </ul>
                              </article>
                            ))}
                          </div>
                        </section>

                        {/* Education */}
                        <section>
                          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                            EDUCATION
                          </h2>
                          <div className="space-y-3 sm:space-y-4">
                            {education.map((edu) => (
                              <article key={edu.id}>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base break-words">
                                      {edu.degree}
                                    </h3>
                                    <p className="text-teal-500 font-medium text-sm break-words">{edu.institution}</p>
                                  </div>
                                  <div className="text-right text-xs sm:text-sm text-gray-600 flex-shrink-0">
                                    <div className="flex items-center gap-1 justify-end sm:justify-start">
                                      <Calendar className="w-3 h-3" aria-hidden="true" />
                                      <span>{edu.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1 justify-end sm:justify-start">
                                      <MapPin className="w-3 h-3" aria-hidden="true" />
                                      <span>{edu.location}</span>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>
                        </section>

                        {/* Languages */}
                        <section>
                          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                            LANGUAGES
                          </h2>
                          <div className="space-y-2 sm:space-y-3">
                            {languages.map((lang, idx) => (
                              <div key={idx} className="flex justify-between items-center">
                                <div>
                                  <span className="font-medium text-gray-900 text-sm">{lang.name}</span>
                                  <span className="text-xs sm:text-sm text-gray-600 ml-2">{lang.level}</span>
                                </div>
                                {renderDots(lang.proficiency)}
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6 lg:space-y-8">
                        {/* Summary */}
                        <section>
                          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                            SUMMARY
                          </h2>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed break-words">
                            {personalInfo.summary}
                          </p>
                        </section>

                        {/* Key Achievements */}
                        <section>
                          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                            KEY ACHIEVEMENTS
                          </h2>
                          <div className="space-y-3 sm:space-y-4">
                            {achievements.map((achievement) => (
                              <article key={achievement.id} className="flex gap-3">
                                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-teal-100 rounded-full flex items-center justify-center">
                                  <div className="text-teal-600">{getIcon(achievement.icon)}</div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 break-words">
                                    {achievement.title}
                                  </h3>
                                  <p className="text-xs text-gray-600 leading-relaxed break-words">
                                    {achievement.description}
                                  </p>
                                </div>
                              </article>
                            ))}
                          </div>
                        </section>

                        {/* Skills */}
                        <section>
                          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                            SKILLS
                          </h2>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border break-words"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </section>

                        {/* Certifications */}
                        <section>
                          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                            CERTIFICATION
                          </h2>
                          <div className="space-y-3 sm:space-y-4">
                            {certifications.map((cert) => (
                              <article key={cert.id}>
                                <h3 className="font-semibold text-teal-500 text-xs sm:text-sm mb-1 break-words">
                                  {cert.name}
                                </h3>
                                <p className="text-xs text-gray-600 leading-relaxed break-words">{cert.description}</p>
                              </article>
                            ))}
                          </div>
                        </section>
                      </div>
                    </div>

                    {/* Footer */}
                    <footer className="mt-8 sm:mt-12 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-gray-500 gap-2">
                      <span>www.enhancv.com</span>
                      <div className="flex items-center gap-2">
                        <span>Powered by</span>
                        <span className="font-semibold">Enhancv</span>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Screen reader only styles */}
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        @media print {
          body * {
            visibility: hidden;
          }
          #resume-preview, #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100% !important;
            box-shadow: none !important;
          }
          
          /* Hide form elements during print */
          .order-2 {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
