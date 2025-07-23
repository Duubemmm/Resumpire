import { useState, useCallback, useRef } from "react";
import Logo from "../assets/resumelogo.png";
import {
  Download,
  MapPin,
  Mail,
  Globe,
  Calendar,
  Star,
  TrendingUp,
  Target,
  Heart,
  Phone,
  Github,
  Plus,
  Trash2,
  Upload,
  X,
  Eye,
  EyeOff,
  Palette,
} from "lucide-react";

// Validation utilities
const validators = {
  email: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  phone: (phone) => {
    const phoneRegex = /^[+]?[1-9][\d\s\-()]{8,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-()]/g, ""));
  },
  url: (url) => {
    try {
      new URL(url.startsWith("http") ? url : `https://${url}`);
      return true;
    } catch {
      return false;
    }
  },
};

// Enhanced theme configurations
const themes = {
  violet: {
    name: "Violet",
    primary: "text-violet-600",
    primaryHover: "hover:bg-violet-700",
    primaryLight: "bg-violet-100",
    primaryText: "text-violet-700",
    accent: "bg-violet-600",
    accentHover: "hover:bg-violet-700",
    border: "border-violet-200",
    ring: "focus:ring-violet-500",
  },
  blue: {
    name: "Blue",
    primary: "text-blue-600",
    primaryHover: "hover:bg-blue-700",
    primaryLight: "bg-blue-100",
    primaryText: "text-blue-700",
    accent: "bg-blue-600",
    accentHover: "hover:bg-blue-700",
    border: "border-blue-200",
    ring: "focus:ring-blue-500",
  },
  emerald: {
    name: "Emerald",
    primary: "text-emerald-600",
    primaryHover: "hover:bg-emerald-700",
    primaryLight: "bg-emerald-100",
    primaryText: "text-emerald-700",
    accent: "bg-emerald-600",
    accentHover: "hover:bg-emerald-700",
    border: "border-emerald-200",
    ring: "focus:ring-emerald-500",
  },
  rose: {
    name: "Rose",
    primary: "text-rose-600",
    primaryHover: "hover:bg-rose-700",
    primaryLight: "bg-rose-100",
    primaryText: "text-rose-700",
    accent: "bg-rose-600",
    accentHover: "hover:bg-rose-700",
    border: "border-rose-200",
    ring: "focus:ring-rose-500",
  },
  amber: {
    name: "Amber",
    primary: "text-amber-600",
    primaryHover: "hover:bg-amber-700",
    primaryLight: "bg-amber-100",
    primaryText: "text-amber-700",
    accent: "bg-amber-600",
    accentHover: "hover:bg-amber-700",
    border: "border-amber-200",
    ring: "focus:ring-amber-500",
  },
  indigo: {
    name: "Indigo",
    primary: "text-indigo-600",
    primaryHover: "hover:bg-indigo-700",
    primaryLight: "bg-indigo-100",
    primaryText: "text-indigo-700",
    accent: "bg-indigo-600",
    accentHover: "hover:bg-indigo-700",
    border: "border-indigo-200",
    ring: "focus:ring-indigo-500",
  },
};

export default function ResumeTemplate() {
  // Theme state
  const [currentTheme, setCurrentTheme] = useState("blue");
  const fileInputRef = useRef(null);

  // Resume data state
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "VIOLET RODRIGUEZ",
    title: "Sr. Software Engineer | Full-Stack Development | Cloud Solutions",
    email: "help@enhancv.com",
    phone: "+1-(234)-555-1234",
    linkedin: "linkedin.com",
    github: "github.com/",
    location: "San Jose, CA",
    summary:
      "With over 3 years of professional experience, I'm driven to leverage my expertise in full-stack development, front-end technologies, and cloud solutions to drive product innovation. My career highlight includes leading a project that boosted user engagement by 20%.",
    profileImage: null,
  });

  const [skills, setSkills] = useState([
    { id: "1", name: "HTML" },
    { id: "2", name: "CSS" },
    { id: "3", name: "JavaScript" },
    { id: "4", name: "React" },
    { id: "5", name: "TypeScript" },
  ]);

  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Open Source Contribution to ChatEngine",
      description:
        "Enhanced real-time chat engine capabilities by integrating WebSockets for broader browser support.",
      githubLink: "github.com/ChatEngine",
      technologies: ["WebSocket", "JavaScript", "React"],
      status: "Completed",
    },
    {
      id: "2",
      title: "Development of MiniCRM System",
      description:
        "Built a lightweight CRM platform for small businesses using Node.js and MongoDB.",
      githubLink: "github.com/MiniCRM",
      technologies: ["Node.js", "MongoDB", "Express"],
      status: "Completed",
    },
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: "1",
      title: "Lead Project to Boost Engagement",
      description:
        "Sole responsibility for a key project that resulted in a 20% upsurge in user engagement through intuitive feature enhancements.",
      icon: "heart",
      date: "2023",
      impact: "20% increase",
    },
    {
      id: "2",
      title: "Recognized for Optimizing Costs",
      description:
        "Drove a cloud migration initiative that cut hosting expenses by 25%, earning recognition for cost-saving measures.",
      icon: "trending-up",
      date: "2022",
      impact: "25% cost reduction",
    },
    {
      id: "3",
      title: "Mentorship Excellence Award",
      description:
        "Awarded for dedication to mentoring junior staff, significantly boosting code quality and team performance.",
      icon: "star",
      date: "2023",
      impact: "Team performance boost",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: "1",
      position: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "01/2021 - Present",
      location: "San Jose, CA",
      responsibilities: [
        "Spearheaded the development of a feature-rich analytics platform, integrating HTML5, CSS3, and React, boosting customer insights by 35%",
      ],
      isCurrentRole: true,
    },
    {
      id: "2",
      position: "Software Engineer II",
      company: "CodeCrafters International",
      duration: "09/2018 - 12/2020",
      location: "Mountain View, CA",
      responsibilities: [
        "Developed an e-commerce web application using React and TypeScript that handled over 10,000 transactions monthly",
      ],
      isCurrentRole: false,
    },
    {
      id: "3",
      position: "Software Developer",
      company: "NextGen Solutions",
      duration: "06/2016 - 08/2018",
      location: "Palo Alto, CA",
      responsibilities: [
        "Implemented new features for a cloud-based SaaS product, benefiting over 1,000 enterprise clients",
      ],
      isCurrentRole: false,
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: "1",
      degree: "Master's in Computer Science",
      institution: "Stanford University",
      duration: "01/2014 - 01/2016",
      location: "Stanford, CA",
      gpa: "3.8/4.0",
      honors: "Magna Cum Laude",
    },
    {
      id: "2",
      degree: "Bachelor's in Software Engineering",
      institution: "San Jose State University",
      duration: "01/2010 - 01/2014",
      location: "San Jose, CA",
      gpa: "3.6/4.0",
      honors: "Dean's List",
    },
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      expiryDate: "2026",
      credentialId: "AWS-SA-12345",
    },
    {
      id: "2",
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      expiryDate: "2025",
      credentialId: "GCP-PD-67890",
    },
  ]);

  // UI state
  const [errors, setErrors] = useState({});
  const [previewMode, setPreviewMode] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  // Get current theme configuration
  const theme = themes[currentTheme] || themes.blue;

  // Validation and error handling
  const validateField = useCallback((field, value, type = "text") => {
    let error = null;
    if (type === "email" && value && !validators.email(value)) {
      error = "Please enter a valid email address";
    } else if (type === "phone" && value && !validators.phone(value)) {
      error = "Please enter a valid phone number";
    } else if (type === "url" && value && !validators.url(value)) {
      error = "Please enter a valid URL";
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
    return !error;
  }, []);

  // Personal info handlers
  const handlePersonalInfoChange = useCallback(
    (field, value) => {
      setPersonalInfo((prev) => ({ ...prev, [field]: value }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: null }));
      }
      // Validate specific fields
      if (field === "email") {
        validateField(field, value, "email");
      } else if (field === "phone") {
        validateField(field, value, "phone");
      }
    },
    [errors, validateField]
  );

  // Generic CRUD operations
  const createCRUDHandlers = useCallback(
    (setState) => ({
      add: (newItem) =>
        setState((prev) => [
          ...prev,
          { ...newItem, id: Date.now().toString() },
        ]),
      remove: (id) => setState((prev) => prev.filter((item) => item.id !== id)),
      update: (id, field, value) =>
        setState((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          )
        ),
    }),
    []
  );

  // CRUD handlers for each section
  const skillsHandlers = createCRUDHandlers(setSkills);
  const projectsHandlers = createCRUDHandlers(setProjects);
  const achievementsHandlers = createCRUDHandlers(setAchievements);
  const experiencesHandlers = createCRUDHandlers(setExperiences);
  const educationHandlers = createCRUDHandlers(setEducation);
  const certificationsHandlers = createCRUDHandlers(setCertifications);

  // Image upload handler
  const handleImageUpload = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          profileImage: "Please upload a valid image file (JPEG, PNG, or WebP)",
        }));
        return;
      }

      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        setErrors((prev) => ({
          ...prev,
          profileImage: "Image size must be less than 5MB",
        }));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setPersonalInfo((prev) => ({ ...prev, profileImage: e.target.result }));
        setErrors((prev) => ({ ...prev, profileImage: null }));
      };
      reader.onerror = () => {
        setErrors((prev) => ({
          ...prev,
          profileImage: "Error reading file. Please try again.",
        }));
      };
      reader.readAsDataURL(file);
    },
    [setPersonalInfo]
  );

  // Enhanced PDF download handler
  const handleDownloadPDF = useCallback(() => {
    // Get the resume content
    const resumeContent = document.getElementById("resume-preview").innerHTML;

    // Create a new window for printing
    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - ${personalInfo.fullName}</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @media print {
              body { 
                margin: 0; 
                padding: 20px; 
                font-family: system-ui, -apple-system, sans-serif;
              }
              .no-print { display: none !important; }
              * { -webkit-print-color-adjust: exact !important; }
            }
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="max-w-4xl mx-auto bg-white">
            ${resumeContent}
          </div>
          <script>
            window.onload = function() {
              setTimeout(() => {
                window.print();
                window.onafterprint = function() {
                  window.close();
                }
              }, 500);
            }
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  }, [personalInfo.fullName]);

  // Icon mapping
  const getIcon = useCallback((iconName) => {
    const iconMap = {
      star: Star,
      "trending-up": TrendingUp,
      target: Target,
      heart: Heart,
    };
    const IconComponent = iconMap[iconName] || Star;
    return <IconComponent className="w-2 h-2" aria-hidden="true" />;
  }, []);

  // Keyboard event handler
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      return; // Allow default behavior
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-2 sm:p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-4 sm:mb-6 no-print">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="items-center hidden sm:flex">
               <img src={Logo} alt="ResumePire Logo" className="w-10 h-10" />
                             <span className="text-xs font-bold text-blue-500 italic sm:text-2xl">
                               ResumePire
                             </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {/* Theme selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowThemeSelector(!showThemeSelector)}
                    className={`flex items-center gap-2 ${theme.accent} text-white px-4 py-2 rounded-lg ${theme.primaryHover} focus:outline-none focus:ring-2 ${theme.ring} focus:ring-offset-2 transition-colors text-sm`}
                  >
                    <Palette className="w-4 h-4" />
                    {theme.name}
                  </button>
                  {showThemeSelector && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border p-3 z-10 min-w-[200px]">
                      <div className="space-y-2">
                        {Object.entries(themes).map(([key, themeConfig]) => (
                          <button
                            key={key}
                            onClick={() => {
                              setCurrentTheme(key);
                              setShowThemeSelector(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left hover:bg-gray-50 transition-colors ${
                              currentTheme === key
                                ? "bg-gray-100 ring-2 ring-gray-300"
                                : ""
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-full ${themeConfig.accent}`}
                            />
                            <span className="text-sm font-medium">
                              {themeConfig.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Preview toggle */}
                <button
                  onClick={() => setPreviewMode(!previewMode)}
                  className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-sm"
                >
                  {previewMode ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                  {previewMode ? "Edit" : "Preview"}
                </button>

                {/* Download PDF */}
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors text-sm"
                  aria-label="Download resume as PDF"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download PDF
                </button>
              </div>
            </div>
          </header>

          <main id="main-content">
            <div
              className={`grid ${
                previewMode ? "grid-cols-1" : "grid-cols-1 xl:grid-cols-2"
              } gap-4 sm:gap-6 lg:gap-8`}
            >
              {/* Left Column - Form */}
              {!previewMode && (
                <div className="space-y-4 sm:space-y-6 order-2 xl:order-1 no-print">
                  <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 space-y-4 sm:space-y-6">
                    {/* Personal Information */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                      <h2 className="text-lg sm:text-xl font-semibold mb-4">
                        Personal Information
                      </h2>
                      <div className="space-y-4">
                        {/* Profile Image Upload */}
                        <div className="flex flex-col items-center gap-4">
                          <div className="relative">
                            <img
                              src={
                                personalInfo.profileImage || "/placeholder.svg"
                              }
                              alt="Profile preview"
                              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-md"
                            />
                            {personalInfo.profileImage && (
                              <button
                                onClick={() =>
                                  setPersonalInfo((prev) => ({
                                    ...prev,
                                    profileImage: null,
                                  }))
                                }
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-lg"
                                aria-label="Remove profile image"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                          <div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/jpeg,image/jpg,image/png,image/webp"
                              onChange={handleImageUpload}
                              className="hidden"
                              id="profile-image-upload"
                            />
                            <label
                              htmlFor="profile-image-upload"
                              className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all"
                            >
                              <Upload className="w-4 h-4 text-gray-600" />
                              <span className="text-sm text-gray-600">
                                Upload Photo
                              </span>
                            </label>
                            {errors.profileImage && (
                              <p
                                className="text-red-600 text-xs mt-1"
                                role="alert"
                              >
                                {errors.profileImage}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Full Name *
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            value={personalInfo.fullName}
                            onChange={(e) =>
                              handlePersonalInfoChange(
                                "fullName",
                                e.target.value
                              )
                            }
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                              theme.ring
                            } transition-colors ${
                              errors.fullName
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            required
                            aria-required="true"
                          />
                          {errors.fullName && (
                            <p className="text-red-600 text-xs mt-1">
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Professional Title *
                          </label>
                          <input
                            id="title"
                            type="text"
                            value={personalInfo.title}
                            onChange={(e) =>
                              handlePersonalInfoChange("title", e.target.value)
                            }
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                              theme.ring
                            } transition-colors ${
                              errors.title
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            required
                            aria-required="true"
                          />
                          {errors.title && (
                            <p className="text-red-600 text-xs mt-1">
                              {errors.title}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Phone
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              value={personalInfo.phone}
                              onChange={(e) =>
                                handlePersonalInfoChange(
                                  "phone",
                                  e.target.value
                                )
                              }
                              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                theme.ring
                              } transition-colors ${
                                errors.phone
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              placeholder="+1-(234)-555-1234"
                            />
                            {errors.phone && (
                              <p
                                className="text-red-600 text-xs mt-1"
                                role="alert"
                              >
                                {errors.phone}
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Email *
                            </label>
                            <input
                              id="email"
                              type="email"
                              value={personalInfo.email}
                              onChange={(e) =>
                                handlePersonalInfoChange(
                                  "email",
                                  e.target.value
                                )
                              }
                              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                                theme.ring
                              } transition-colors ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              required
                              aria-required="true"
                            />
                            {errors.email && (
                              <p
                                className="text-red-600 text-xs mt-1"
                                role="alert"
                              >
                                {errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="linkedin"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              LinkedIn
                            </label>
                            <input
                              id="linkedin"
                              type="text"
                              value={personalInfo.linkedin}
                              onChange={(e) =>
                                handlePersonalInfoChange(
                                  "linkedin",
                                  e.target.value
                                )
                              }
                              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="github"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              GitHub
                            </label>
                            <input
                              id="github"
                              type="text"
                              value={personalInfo.github}
                              onChange={(e) =>
                                handlePersonalInfoChange(
                                  "github",
                                  e.target.value
                                )
                              }
                              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Location
                          </label>
                          <input
                            id="location"
                            type="text"
                            value={personalInfo.location}
                            onChange={(e) =>
                              handlePersonalInfoChange(
                                "location",
                                e.target.value
                              )
                            }
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="summary"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Professional Summary
                          </label>
                          <textarea
                            id="summary"
                            value={personalInfo.summary}
                            onChange={(e) =>
                              handlePersonalInfoChange(
                                "summary",
                                e.target.value
                              )
                            }
                            onKeyDown={handleKeyDown}
                            rows={4}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors resize-vertical`}
                            aria-describedby="summary-help"
                          />
                          <p
                            id="summary-help"
                            className="text-xs text-gray-500 mt-1"
                          >
                            Brief overview of your professional background.
                            Press Enter for new line.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* Skills Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Skills
                        </h2>
                        <button
                          onClick={() =>
                            skillsHandlers.add({ name: "", category: "Other" })
                          }
                          className={`flex items-center gap-2 ${theme.accent} text-white px-3 py-2 rounded-lg ${theme.accentHover} focus:outline-none focus:ring-2 ${theme.ring} focus:ring-offset-2 transition-colors text-sm`}
                        >
                          <Plus className="w-4 h-4" />
                          Add Skill
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {skills.map((skill) => (
                          <div
                            key={skill.id}
                            className="flex items-center gap-2"
                          >
                            <input
                              type="text"
                              value={skill.name}
                              onChange={(e) =>
                                skillsHandlers.update(
                                  skill.id,
                                  "name",
                                  e.target.value
                                )
                              }
                              className={`flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                              placeholder="Skill name"
                            />
                            {skills.length > 1 && (
                              <button
                                onClick={() => skillsHandlers.remove(skill.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                                aria-label="Remove skill"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Projects Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          My Projects
                        </h2>
                        <button
                          onClick={() =>
                            projectsHandlers.add({
                              title: "",
                              description: "",
                              githubLink: "",
                              technologies: [],
                              status: "In Progress",
                            })
                          }
                          className={`flex items-center gap-2 ${theme.accent} text-white px-3 py-2 rounded-lg ${theme.accentHover} focus:outline-none focus:ring-2 ${theme.ring} focus:ring-offset-2 transition-colors text-sm`}
                        >
                          <Plus className="w-4 h-4" />
                          Add Project
                        </button>
                      </div>
                      {projects.map((project, index) => (
                        <div
                          key={project.id}
                          className="mb-6 p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-medium">Project {index + 1}</h3>
                            {projects.length > 1 && (
                              <button
                                onClick={() =>
                                  projectsHandlers.remove(project.id)
                                }
                                className="p-1 text-red-600 hover:bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                                aria-label="Remove project"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          <div className="space-y-3">
                            <div>
                              <label
                                htmlFor={`project-title-${project.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Project Title *
                              </label>
                              <input
                                id={`project-title-${project.id}`}
                                type="text"
                                value={project.title}
                                onChange={(e) =>
                                  projectsHandlers.update(
                                    project.id,
                                    "title",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                required
                                aria-required="true"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor={`project-desc-${project.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Description
                              </label>
                              <textarea
                                id={`project-desc-${project.id}`}
                                value={project.description}
                                onChange={(e) =>
                                  projectsHandlers.update(
                                    project.id,
                                    "description",
                                    e.target.value
                                  )
                                }
                                onKeyDown={handleKeyDown}
                                rows={3}
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors resize-vertical`}
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label
                                  htmlFor={`project-github-${project.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  GitHub Link
                                </label>
                                <input
                                  id={`project-github-${project.id}`}
                                  type="text"
                                  value={project.githubLink}
                                  onChange={(e) =>
                                    projectsHandlers.update(
                                      project.id,
                                      "githubLink",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor={`project-status-${project.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Status
                                </label>
                                <select
                                  id={`project-status-${project.id}`}
                                  value={project.status}
                                  onChange={(e) =>
                                    projectsHandlers.update(
                                      project.id,
                                      "status",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                >
                                  <option value="Completed">Completed</option>
                                  <option value="In Progress">
                                    In Progress
                                  </option>
                                  <option value="Planned">Planned</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Achievements Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Key Achievements
                        </h2>
                        <button
                          onClick={() =>
                            achievementsHandlers.add({
                              title: "",
                              description: "",
                              icon: "star",
                              date: "",
                              impact: "",
                            })
                          }
                          className={`flex items-center gap-2 ${theme.accent} text-white px-3 py-2 rounded-lg ${theme.accentHover} focus:outline-none focus:ring-2 ${theme.ring} focus:ring-offset-2 transition-colors text-sm`}
                        >
                          <Plus className="w-4 h-4" />
                          Add Achievement
                        </button>
                      </div>
                      {achievements.map((achievement, index) => (
                        <div
                          key={achievement.id}
                          className="mb-4 p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-medium">
                              Achievement {index + 1}
                            </h3>
                            {achievements.length > 1 && (
                              <button
                                onClick={() =>
                                  achievementsHandlers.remove(achievement.id)
                                }
                                className="p-1 text-red-600 hover:bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                                aria-label="Remove achievement"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
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
                                onChange={(e) =>
                                  achievementsHandlers.update(
                                    achievement.id,
                                    "title",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
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
                                onChange={(e) =>
                                  achievementsHandlers.update(
                                    achievement.id,
                                    "description",
                                    e.target.value
                                  )
                                }
                                onKeyDown={handleKeyDown}
                                rows={3}
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors resize-vertical`}
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <div>
                                <label
                                  htmlFor={`achievement-icon-${achievement.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Icon
                                </label>
                                <select
                                  id={`achievement-icon-${achievement.id}`}
                                  value={achievement.icon}
                                  onChange={(e) =>
                                    achievementsHandlers.update(
                                      achievement.id,
                                      "icon",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                >
                                  <option value="star">Star</option>
                                  <option value="trending-up">
                                    Trending Up
                                  </option>
                                  <option value="target">Target</option>
                                  <option value="heart">Heart</option>
                                </select>
                              </div>
                              <div>
                                <label
                                  htmlFor={`achievement-date-${achievement.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Date
                                </label>
                                <input
                                  id={`achievement-date-${achievement.id}`}
                                  type="text"
                                  value={achievement.date}
                                  onChange={(e) =>
                                    achievementsHandlers.update(
                                      achievement.id,
                                      "date",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                  placeholder="2023"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor={`achievement-impact-${achievement.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Impact
                                </label>
                                <input
                                  id={`achievement-impact-${achievement.id}`}
                                  type="text"
                                  value={achievement.impact}
                                  onChange={(e) =>
                                    achievementsHandlers.update(
                                      achievement.id,
                                      "impact",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                  placeholder="20% increase"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Experience Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Work Experience
                        </h2>
                        <button
                          onClick={() =>
                            experiencesHandlers.add({
                              position: "",
                              company: "",
                              duration: "",
                              location: "",
                              responsibilities: [],
                              isCurrentRole: false,
                            })
                          }
                          className={`flex items-center gap-2 ${theme.accent} text-white px-3 py-2 rounded-lg ${theme.accentHover} focus:outline-none focus:ring-2 ${theme.ring} focus:ring-offset-2 transition-colors text-sm`}
                        >
                          <Plus className="w-4 h-4" />
                          Add Experience
                        </button>
                      </div>
                      {experiences.map((exp, index) => (
                        <div
                          key={exp.id}
                          className="mb-6 p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-medium">
                              Experience {index + 1}
                            </h3>
                            {experiences.length > 1 && (
                              <button
                                onClick={() =>
                                  experiencesHandlers.remove(exp.id)
                                }
                                className="p-1 text-red-600 hover:bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                                aria-label="Remove experience"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
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
                                onChange={(e) =>
                                  experiencesHandlers.update(
                                    exp.id,
                                    "position",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
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
                                onChange={(e) =>
                                  experiencesHandlers.update(
                                    exp.id,
                                    "company",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
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
                                onChange={(e) =>
                                  experiencesHandlers.update(
                                    exp.id,
                                    "duration",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
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
                                onChange={(e) =>
                                  experiencesHandlers.update(
                                    exp.id,
                                    "location",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <input
                              type="checkbox"
                              id={`current-role-${exp.id}`}
                              checked={exp.isCurrentRole}
                              onChange={(e) =>
                                experiencesHandlers.update(
                                  exp.id,
                                  "isCurrentRole",
                                  e.target.checked
                                )
                              }
                              className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 ${theme.ring}`}
                            />
                            <label
                              htmlFor={`current-role-${exp.id}`}
                              className="text-sm text-gray-700"
                            >
                              This is my current role
                            </label>
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
                              onChange={(e) =>
                                experiencesHandlers.update(
                                  exp.id,
                                  "responsibilities",
                                  e.target.value
                                    .split("\n")
                                    .filter((r) => r.trim())
                                )
                              }
                              onKeyDown={handleKeyDown}
                              rows={6}
                              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors resize-vertical`}
                              placeholder="Enter each responsibility on a new line"
                              aria-describedby={`responsibilities-help-${exp.id}`}
                            />
                            <p
                              id={`responsibilities-help-${exp.id}`}
                              className="text-xs text-gray-500 mt-1"
                            >
                              Enter each responsibility on a separate line.
                              Press Enter for new line.
                            </p>
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Education Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Education
                        </h2>
                        <button
                          onClick={() =>
                            educationHandlers.add({
                              degree: "",
                              institution: "",
                              duration: "",
                              location: "",
                              gpa: "",
                              honors: "",
                            })
                          }
                          className={`flex items-center gap-2 ${theme.accent} text-white px-3 py-2 rounded-lg ${theme.accentHover} focus:outline-none focus:ring-2 ${theme.ring} focus:ring-offset-2 transition-colors text-sm`}
                        >
                          <Plus className="w-4 h-4" />
                          Add Education
                        </button>
                      </div>
                      {education.map((edu, index) => (
                        <div
                          key={edu.id}
                          className="mb-6 p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-medium">
                              Education {index + 1}
                            </h3>
                            {education.length > 1 && (
                              <button
                                onClick={() => educationHandlers.remove(edu.id)}
                                className="p-1 text-red-600 hover:bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                                aria-label="Remove education"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label
                                htmlFor={`degree-${edu.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Degree *
                              </label>
                              <input
                                id={`degree-${edu.id}`}
                                type="text"
                                value={edu.degree}
                                onChange={(e) =>
                                  educationHandlers.update(
                                    edu.id,
                                    "degree",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                required
                                aria-required="true"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor={`institution-${edu.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Institution *
                              </label>
                              <input
                                id={`institution-${edu.id}`}
                                type="text"
                                value={edu.institution}
                                onChange={(e) =>
                                  educationHandlers.update(
                                    edu.id,
                                    "institution",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                required
                                aria-required="true"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div>
                              <label
                                htmlFor={`edu-duration-${edu.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Duration
                              </label>
                              <input
                                id={`edu-duration-${edu.id}`}
                                type="text"
                                value={edu.duration}
                                onChange={(e) =>
                                  educationHandlers.update(
                                    edu.id,
                                    "duration",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                placeholder="MM/YYYY - MM/YYYY"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor={`edu-location-${edu.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Location
                              </label>
                              <input
                                id={`edu-location-${edu.id}`}
                                type="text"
                                value={edu.location}
                                onChange={(e) =>
                                  educationHandlers.update(
                                    edu.id,
                                    "location",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor={`edu-gpa-${edu.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                GPA (Optional)
                              </label>
                              <input
                                id={`edu-gpa-${edu.id}`}
                                type="text"
                                value={edu.gpa}
                                onChange={(e) =>
                                  educationHandlers.update(
                                    edu.id,
                                    "gpa",
                                    e.target.value
                                  )
                                }
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                placeholder="3.8/4.0"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <label
                              htmlFor={`edu-honors-${edu.id}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Honors/Awards (Optional)
                            </label>
                            <input
                              id={`edu-honors-${edu.id}`}
                              type="text"
                              value={edu.honors}
                              onChange={(e) =>
                                educationHandlers.update(
                                  edu.id,
                                  "honors",
                                  e.target.value
                                )
                              }
                              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                              placeholder="Magna Cum Laude, Dean's List, etc."
                            />
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Certifications Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Certifications
                        </h2>
                        <button
                          onClick={() =>
                            certificationsHandlers.add({
                              name: "",
                              issuer: "",
                              date: "",
                              expiryDate: "",
                              credentialId: "",
                            })
                          }
                          className={`flex items-center gap-2 ${theme.accent} text-white px-3 py-2 rounded-lg ${theme.accentHover} focus:outline-none focus:ring-2 ${theme.ring} focus:ring-offset-2 transition-colors text-sm`}
                        >
                          <Plus className="w-4 h-4" />
                          Add Certification
                        </button>
                      </div>
                      {certifications.map((cert, index) => (
                        <div
                          key={cert.id}
                          className="mb-4 p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-medium">
                              Certification {index + 1}
                            </h3>
                            {certifications.length > 1 && (
                              <button
                                onClick={() =>
                                  certificationsHandlers.remove(cert.id)
                                }
                                className="p-1 text-red-600 hover:bg-red-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                                aria-label="Remove certification"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                              <div>
                                <label
                                  htmlFor={`cert-name-${cert.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Certification Name *
                                </label>
                                <input
                                  id={`cert-name-${cert.id}`}
                                  type="text"
                                  value={cert.name}
                                  onChange={(e) =>
                                    certificationsHandlers.update(
                                      cert.id,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                  required
                                  aria-required="true"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor={`cert-issuer-${cert.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Issuing Organization *
                                </label>
                                <input
                                  id={`cert-issuer-${cert.id}`}
                                  type="text"
                                  value={cert.issuer}
                                  onChange={(e) =>
                                    certificationsHandlers.update(
                                      cert.id,
                                      "issuer",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                  required
                                  aria-required="true"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                              <div>
                                <label
                                  htmlFor={`cert-date-${cert.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Date Earned
                                </label>
                                <input
                                  id={`cert-date-${cert.id}`}
                                  type="text"
                                  value={cert.date}
                                  onChange={(e) =>
                                    certificationsHandlers.update(
                                      cert.id,
                                      "date",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                  placeholder="MM/YYYY"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor={`cert-expiry-${cert.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Expiry Date
                                </label>
                                <input
                                  id={`cert-expiry-${cert.id}`}
                                  type="text"
                                  value={cert.expiryDate}
                                  onChange={(e) =>
                                    certificationsHandlers.update(
                                      cert.id,
                                      "expiryDate",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                  placeholder="MM/YYYY"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor={`cert-credential-${cert.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Credential ID
                                </label>
                                <input
                                  id={`cert-credential-${cert.id}`}
                                  type="text"
                                  value={cert.credentialId}
                                  onChange={(e) =>
                                    certificationsHandlers.update(
                                      cert.id,
                                      "credentialId",
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${theme.ring} transition-colors`}
                                  placeholder="ABC-123-XYZ"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>
                  </div>
                </div>
              )}

              {/* Right Column - Resume Preview */}
              <div
                className={`${
                  previewMode ? "order-1" : "order-1 xl:order-2"
                } xl:sticky xl:top-6 xl:h-fit`}
              >
                <div
                  className="bg-white shadow-lg rounded-lg overflow-hidden h-[calc(100vh-200px)] overflow-y-auto"
                  id="resume-preview"
                >
                  <div
                    className="p-6 sm:p-8 min-h-[600px] sm:min-h-[800px] lg:min-h-[1056px]"
                    style={{ maxWidth: "8.5in", margin: "0 auto" }}
                  >
                    {/* Header */}
                    <header className="mb-8">
                      {personalInfo.profileImage && (
                        <div className="flex justify-center mb-6">
                          <img
                            src={
                              personalInfo.profileImage || "/placeholder.svg"
                            }
                            alt={`${personalInfo.fullName} profile picture`}
                            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                          />
                        </div>
                      )}
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 break-words text-center">
                        {personalInfo.fullName}
                      </h1>
                      <p
                        className={`text-lg ${theme.primary} font-medium mb-4 break-words text-center`}
                      >
                        {personalInfo.title}
                      </p>
                      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                        {personalInfo.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" aria-hidden="true" />
                            <span>{personalInfo.phone}</span>
                          </div>
                        )}
                        {personalInfo.email && (
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" aria-hidden="true" />
                            <span className="break-all">
                              {personalInfo.email}
                            </span>
                          </div>
                        )}
                        {personalInfo.linkedin && (
                          <div className="flex items-center gap-1">
                            <Globe className="w-4 h-4" aria-hidden="true" />
                            <span className="break-all">
                              {personalInfo.linkedin}
                            </span>
                          </div>
                        )}
                        {personalInfo.github && (
                          <div className="flex items-center gap-1">
                            <Github className="w-4 h-4" aria-hidden="true" />
                            <span className="break-all">
                              {personalInfo.github}
                            </span>
                          </div>
                        )}
                        {personalInfo.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            <span>{personalInfo.location}</span>
                          </div>
                        )}
                      </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left Column */}
                      <div className="lg:col-span-1 space-y-8">
                        {/* Skills */}
                        {skills.some((skill) => skill.name.trim()) && (
                          <section>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                              SKILLS
                            </h2>
                            <div className="flex flex-wrap gap-2">
                              {skills
                                .filter((skill) => skill.name.trim())
                                .map((skill) => (
                                  <span
                                    key={skill.id}
                                    className={`px-3 py-1 ${theme.primaryLight} ${theme.primaryText} text-sm rounded-full border break-words`}
                                  >
                                    {skill.name}
                                  </span>
                                ))}
                            </div>
                          </section>
                        )}

                        {/* My Projects */}
                        {projects.some((project) => project.title.trim()) && (
                          <section>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                              MY PROJECTS
                            </h2>
                            <div className="space-y-6">
                              {projects
                                .filter((project) => project.title.trim())
                                .map((project) => (
                                  <article key={project.id}>
                                    <h3 className="font-semibold text-gray-900 text-base mb-2 break-words">
                                      {project.title}
                                    </h3>
                                    {project.description && (
                                      <p className="text-sm text-gray-700 leading-relaxed mb-2 break-words whitespace-pre-wrap">
                                        {project.description}
                                      </p>
                                    )}
                                    {project.githubLink && (
                                      <p
                                        className={`text-sm ${theme.primary} break-all`}
                                      >
                                        GitHub: {project.githubLink}
                                      </p>
                                    )}
                                    <div className="mt-2">
                                      <span
                                        className={`px-2 py-1 ${theme.primaryLight} ${theme.primaryText} text-xs rounded-full`}
                                      >
                                        {project.status}
                                      </span>
                                    </div>
                                  </article>
                                ))}
                            </div>
                          </section>
                        )}

                        {/* Key Achievements */}
                        {achievements.some((achievement) =>
                          achievement.title.trim()
                        ) && (
                          <section>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                              KEY ACHIEVEMENTS
                            </h2>
                            <div className="space-y-4">
                              {achievements
                                .filter((achievement) =>
                                  achievement.title.trim()
                                )
                                .map((achievement) => (
                                  <article
                                    key={achievement.id}
                                    className="flex gap-3"
                                  >
                                    <div
                                      className={`flex-shrink-0 w-8 h-8 ${theme.primaryLight} rounded-full flex items-center justify-center`}
                                    >
                                      <div className={theme.primaryText}>
                                        {getIcon(achievement.icon)}
                                      </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h3 className="font-semibold text-gray-900 text-sm mb-1 break-words">
                                        {achievement.title}
                                      </h3>
                                      {achievement.description && (
                                        <p className="text-xs text-gray-600 leading-relaxed break-words whitespace-pre-wrap">
                                          {achievement.description}
                                        </p>
                                      )}
                                      <div className="flex gap-2 mt-2 text-xs text-gray-500">
                                        {achievement.date && (
                                          <span>{achievement.date}</span>
                                        )}
                                        {achievement.impact && (
                                          <span
                                            className={`${theme.primaryText} font-medium`}
                                          >
                                            {achievement.impact}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </article>
                                ))}
                            </div>
                          </section>
                        )}

                        {/* Certifications */}
                        {certifications.some((cert) => cert.name.trim()) && (
                          <section>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                              CERTIFICATIONS
                            </h2>
                            <div className="space-y-4">
                              {certifications
                                .filter((cert) => cert.name.trim())
                                .map((cert) => (
                                  <article key={cert.id}>
                                    <h3
                                      className={`font-semibold ${theme.primary} text-sm break-words`}
                                    >
                                      {cert.name}
                                    </h3>
                                    {cert.issuer && (
                                      <p className="text-gray-700 text-sm break-words font-medium">
                                        {cert.issuer}
                                      </p>
                                    )}
                                    <div className="text-xs text-gray-600 mt-1">
                                      {cert.date && (
                                        <span>Earned: {cert.date}</span>
                                      )}
                                      {cert.expiryDate && (
                                        <span className="ml-2">
                                          Expires: {cert.expiryDate}
                                        </span>
                                      )}
                                    </div>
                                    {cert.credentialId && (
                                      <p className="text-xs text-gray-500 mt-1">
                                        ID: {cert.credentialId}
                                      </p>
                                    )}
                                  </article>
                                ))}
                            </div>
                          </section>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="lg:col-span-2 space-y-8">
                        {/* Summary */}
                        {personalInfo.summary && (
                          <section>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                              SUMMARY
                            </h2>
                            <p className="text-sm text-gray-700 leading-relaxed break-words whitespace-pre-wrap">
                              {personalInfo.summary}
                            </p>
                          </section>
                        )}

                        {/* Experience */}
                        {experiences.some(
                          (exp) => exp.position.trim() || exp.company.trim()
                        ) && (
                          <section>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                              EXPERIENCE
                            </h2>
                            <div className="space-y-6">
                              {experiences
                                .filter(
                                  (exp) =>
                                    exp.position.trim() || exp.company.trim()
                                )
                                .map((exp) => (
                                  <article key={exp.id}>
                                    <div className="mb-2">
                                      {exp.position && (
                                        <h3 className="font-semibold text-gray-900 text-base break-words">
                                          {exp.position}
                                          {exp.isCurrentRole && (
                                            <span
                                              className={`ml-2 px-2 py-1 ${theme.primaryLight} ${theme.primaryText} text-xs rounded-full`}
                                            >
                                              Current
                                            </span>
                                          )}
                                        </h3>
                                      )}
                                      {exp.company && (
                                        <p
                                          className={`${theme.primary} font-medium break-words`}
                                        >
                                          {exp.company}
                                        </p>
                                      )}
                                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                                        {exp.duration && (
                                          <span className="flex items-center gap-1">
                                            <Calendar
                                              className="w-3 h-3"
                                              aria-hidden="true"
                                            />
                                            {exp.duration}
                                          </span>
                                        )}
                                        {exp.location && (
                                          <span className="flex items-center gap-1">
                                            <MapPin
                                              className="w-3 h-3"
                                              aria-hidden="true"
                                            />
                                            {exp.location}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    {exp.responsibilities.length > 0 && (
                                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                                        {exp.responsibilities.map(
                                          (resp, idx) => (
                                            <li
                                              key={idx}
                                              className="break-words"
                                            >
                                              {resp}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                  </article>
                                ))}
                            </div>
                          </section>
                        )}

                        {/* Education */}
                        {education.some(
                          (edu) => edu.degree.trim() || edu.institution.trim()
                        ) && (
                          <section>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                              EDUCATION
                            </h2>
                            <div className="space-y-4">
                              {education
                                .filter(
                                  (edu) =>
                                    edu.degree.trim() || edu.institution.trim()
                                )
                                .map((edu) => (
                                  <article key={edu.id}>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                                      <div className="flex-1">
                                        {edu.degree && (
                                          <h3 className="font-semibold text-gray-900 text-base break-words">
                                            {edu.degree}
                                          </h3>
                                        )}
                                        {edu.institution && (
                                          <p
                                            className={`${theme.primary} font-medium break-words`}
                                          >
                                            {edu.institution}
                                          </p>
                                        )}
                                        <div className="flex gap-4 text-sm text-gray-600 mt-1">
                                          {edu.gpa && (
                                            <span>GPA: {edu.gpa}</span>
                                          )}
                                          {edu.honors && (
                                            <span className="italic">
                                              {edu.honors}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                      <div className="text-right text-sm text-gray-600 flex-shrink-0">
                                        {edu.duration && (
                                          <div className="flex items-center gap-1 justify-end sm:justify-start">
                                            <Calendar
                                              className="w-3 h-3"
                                              aria-hidden="true"
                                            />
                                            <span>{edu.duration}</span>
                                          </div>
                                        )}
                                        {edu.location && (
                                          <div className="flex items-center gap-1 mt-1 justify-end sm:justify-start">
                                            <MapPin
                                              className="w-3 h-3"
                                              aria-hidden="true"
                                            />
                                            <span>{edu.location}</span>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </article>
                                ))}
                            </div>
                          </section>
                        )}
                      </div>
                    </div>
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
        .no-print {
          display: block;
        }
        @media print {
          .no-print {
            display: none !important;
          }
          body * {
            visibility: hidden;
          }
          #resume-preview,
          #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100% !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
