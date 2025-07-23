import { useState } from "react";
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
  Eye,
  EyeOff,
  Settings,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  FileText,
  Languages,
  BadgeIcon as Certificate,
} from "lucide-react";

// Available sections that users can add/remove
const AVAILABLE_SECTIONS = {
  personalInfo: {
    id: "personalInfo",
    name: "Personal Information",
    icon: User,
    required: true,
    description: "Basic contact information and summary",
  },
  skills: {
    id: "skills",
    name: "Skills",
    icon: Code,
    required: false,
    description: "Technical and professional skills",
  },
  experience: {
    id: "experience",
    name: "Work Experience",
    icon: Briefcase,
    required: false,
    description: "Professional work history",
  },
  education: {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    required: false,
    description: "Academic background",
  },
  projects: {
    id: "projects",
    name: "Projects",
    icon: FileText,
    required: false,
    description: "Personal and professional projects",
  },
  achievements: {
    id: "achievements",
    name: "Achievements",
    icon: Award,
    required: false,
    description: "Key accomplishments and awards",
  },
  certifications: {
    id: "certifications",
    name: "Certifications",
    icon: Certificate,
    required: false,
    description: "Professional certifications",
  },
  languages: {
    id: "languages",
    name: "Languages",
    icon: Languages,
    required: false,
    description: "Language proficiencies",
  },
};

export default function TemplateNew() {
  // Section visibility state
  const [activeSections, setActiveSections] = useState({
    personalInfo: true,
    skills: true,
    experience: true,
    education: true,
    projects: true,
    achievements: true,
    certifications: false,
    languages: false,
  });

  // UI state
  const [showSectionManager, setShowSectionManager] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [errors, setErrors] = useState({});

  // Resume data
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    location: "",
    summary: "",
  });

  const [skills, setSkills] = useState([{ id: "1", name: "" }]);

  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "",
      description: "",
      githubLink: "",
    },
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: "1",
      title: "",
      description: "",
      icon: "star",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: "1",
      position: "",
      company: "",
      duration: "",
      location: "",
      responsibilities: [],
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: "1",
      degree: "",
      institution: "",
      duration: "",
      location: "",
    },
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: "1",
      name: "",
      issuer: "",
      date: "",
      credentialId: "",
    },
  ]);

  const [languages, setLanguages] = useState([
    {
      id: "1",
      name: "",
      level: "Beginner",
    },
  ]);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
  };

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo({ ...personalInfo, [field]: value });
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
    // Real-time validation
    if (field === "email" && value) {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "Please enter a valid email address" });
      }
    }
    if (field === "phone" && value) {
      if (!validatePhone(value)) {
        setErrors({
          ...errors,
          phone: "Please enter a valid phone number (10+ digits)",
        });
      }
    }
  };

  // Enhanced PDF download
  const handleDownloadPDF = () => {
    const resumeContent = document.getElementById("resume-preview").innerHTML;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - ${personalInfo.fullName || "Resume"}</title>
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
  };

  // Section management
  const toggleSection = (sectionId) => {
    if (AVAILABLE_SECTIONS[sectionId].required) return;
    setActiveSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Generic CRUD operations
  const createCRUDHandlers = (setState) => ({
    add: (newItem) =>
      setState((prev) => [...prev, { ...newItem, id: Date.now().toString() }]),
    remove: (id) => setState((prev) => prev.filter((item) => item.id !== id)),
    update: (id, field, value) =>
      setState((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        )
      ),
  });

  // CRUD handlers for each section
  const skillsHandlers = createCRUDHandlers(setSkills);
  const projectsHandlers = createCRUDHandlers(setProjects);
  const achievementsHandlers = createCRUDHandlers(setAchievements);
  const experiencesHandlers = createCRUDHandlers(setExperiences);
  const educationHandlers = createCRUDHandlers(setEducation);
  const certificationsHandlers = createCRUDHandlers(setCertifications);
  const languagesHandlers = createCRUDHandlers(setLanguages);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "star":
        return <Star className="w-4 h-4" aria-hidden="true" />;
      case "trending-up":
        return <TrendingUp className="w-4 h-4" aria-hidden="true" />;
      case "target":
        return <Target className="w-4 h-4" aria-hidden="true" />;
      case "heart":
        return <Heart className="w-4 h-4" aria-hidden="true" />;
      default:
        return <Star className="w-4 h-4" aria-hidden="true" />;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      return; // Allow default behavior
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
          <header className="mb-4 sm:mb-6 no-print">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Create New Resume
                </h1>
                <p className="text-sm text-gray-600">
                  Build your professional resume from scratch
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {/* Section Manager */}
                <div className="relative">
                  <button
                    onClick={() => setShowSectionManager(!showSectionManager)}
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-sm"
                  >
                    <Settings className="w-4 h-4" />
                    Manage Sections
                  </button>
                  {showSectionManager && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border p-4 z-10 min-w-[300px]">
                      <h3 className="font-semibold text-gray-800 mb-3">
                        Resume Sections
                      </h3>
                      <div className="space-y-3">
                        {Object.values(AVAILABLE_SECTIONS).map((section) => {
                          const IconComponent = section.icon;
                          return (
                            <div
                              key={section.id}
                              className="flex items-start gap-3"
                            >
                              <div className="flex items-center gap-2 flex-1">
                                <input
                                  type="checkbox"
                                  id={`section-${section.id}`}
                                  checked={activeSections[section.id]}
                                  onChange={() => toggleSection(section.id)}
                                  disabled={section.required}
                                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2 disabled:opacity-50"
                                />
                                <div className="flex items-center gap-2">
                                  <IconComponent className="w-4 h-4 text-gray-600" />
                                  <div>
                                    <label
                                      htmlFor={`section-${section.id}`}
                                      className={`text-sm font-medium ${
                                        section.required
                                          ? "text-gray-500"
                                          : "text-gray-700 cursor-pointer"
                                      }`}
                                    >
                                      {section.name}
                                      {section.required && (
                                        <span className="text-xs text-gray-400 ml-1">
                                          (Required)
                                        </span>
                                      )}
                                    </label>
                                    <p className="text-xs text-gray-500">
                                      {section.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <button
                          onClick={() => setShowSectionManager(false)}
                          className="w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm"
                        >
                          Done
                        </button>
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
                    {activeSections.personalInfo && (
                      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                        <div className="flex items-center gap-2 mb-4">
                          <User className="w-5 h-5 text-purple-600" />
                          <h2 className="text-lg sm:text-xl font-semibold">
                            Personal Information
                          </h2>
                        </div>
                        <div className="space-y-4">
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
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                              placeholder="Enter your full name"
                              required
                              aria-required="true"
                            />
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
                                handlePersonalInfoChange(
                                  "title",
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                              placeholder="e.g., Senior Software Engineer"
                              required
                              aria-required="true"
                            />
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
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
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
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                                  errors.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                                placeholder="your.email@example.com"
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
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                placeholder="linkedin.com/in/yourname"
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
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                placeholder="github.com/yourname"
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
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                              placeholder="City, State/Country"
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
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-vertical"
                              placeholder="Brief overview of your professional background and key strengths..."
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
                    )}

                    {/* Skills Section */}
                    {activeSections.skills && (
                      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <Code className="w-5 h-5 text-purple-600" />
                            <h2 className="text-lg sm:text-xl font-semibold">
                              Skills
                            </h2>
                          </div>
                          <button
                            onClick={() => skillsHandlers.add({ name: "" })}
                            className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-sm"
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
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                placeholder="e.g., JavaScript, React, Python"
                              />
                              {skills.length > 1 && (
                                <button
                                  onClick={() =>
                                    skillsHandlers.remove(skill.id)
                                  }
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
                    )}

                    {/* Experience Section */}
                    {activeSections.experience && (
                      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-purple-600" />
                            <h2 className="text-lg sm:text-xl font-semibold">
                              Work Experience
                            </h2>
                          </div>
                          <button
                            onClick={() =>
                              experiencesHandlers.add({
                                position: "",
                                company: "",
                                duration: "",
                                location: "",
                                responsibilities: [],
                              })
                            }
                            className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-sm"
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="e.g., Senior Software Engineer"
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="e.g., Tech Company Inc."
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="MM/YYYY - MM/YYYY or Present"
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="City, State/Country"
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
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-vertical"
                                placeholder="• Led development of key features&#10;• Collaborated with cross-functional teams&#10;• Improved system performance by 30%"
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
                    )}

                    {/* Education Section */}
                    {activeSections.education && (
                      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-purple-600" />
                            <h2 className="text-lg sm:text-xl font-semibold">
                              Education
                            </h2>
                          </div>
                          <button
                            onClick={() =>
                              educationHandlers.add({
                                degree: "",
                                institution: "",
                                duration: "",
                                location: "",
                              })
                            }
                            className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-sm"
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
                                  onClick={() =>
                                    educationHandlers.remove(edu.id)
                                  }
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="e.g., Bachelor of Science in Computer Science"
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="e.g., University of Technology"
                                  required
                                  aria-required="true"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="City, State/Country"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </section>
                    )}

                    {/* Projects Section */}
                    {activeSections.projects && (
                      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-purple-600" />
                            <h2 className="text-lg sm:text-xl font-semibold">
                              Projects
                            </h2>
                          </div>
                          <button
                            onClick={() =>
                              projectsHandlers.add({
                                title: "",
                                description: "",
                                githubLink: "",
                              })
                            }
                            className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-sm"
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
                              <h3 className="font-medium">
                                Project {index + 1}
                              </h3>
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="e.g., E-commerce Web Application"
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-vertical"
                                  placeholder="Brief description of the project, technologies used, and key achievements..."
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor={`project-github-${project.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  GitHub/Project Link
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="https://github.com/username/project"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </section>
                    )}

                    {/* Achievements Section */}
                    {activeSections.achievements && (
                      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-purple-600" />
                            <h2 className="text-lg sm:text-xl font-semibold">
                              Achievements
                            </h2>
                          </div>
                          <button
                            onClick={() =>
                              achievementsHandlers.add({
                                title: "",
                                description: "",
                                icon: "star",
                              })
                            }
                            className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-sm"
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                  placeholder="e.g., Employee of the Year Award"
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-vertical"
                                  placeholder="Description of the achievement and its impact..."
                                />
                              </div>
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
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                >
                                  <option value="star">Star</option>
                                  <option value="trending-up">
                                    Trending Up
                                  </option>
                                  <option value="target">Target</option>
                                  <option value="heart">Heart</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        ))}
                      </section>
                    )}

                    {/* Certifications Section */}
                    {activeSections.certifications && (
                      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <Certificate className="w-5 h-5 text-purple-600" />
                            <h2 className="text-lg sm:text-xl font-semibold">
                              Certifications
                            </h2>
                          </div>
                          <button
                            onClick={() =>
                              certificationsHandlers.add({
                                name: "",
                                issuer: "",
                                date: "",
                                credentialId: "",
                              })
                            }
                            className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-sm"
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                    placeholder="e.g., AWS Certified Solutions Architect"
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                    placeholder="e.g., Amazon Web Services"
                                    required
                                    aria-required="true"
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                    placeholder="ABC-123-XYZ"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </section>
                    )}

                    {/* Languages Section */}
                    {activeSections.languages && (
                      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <Languages className="w-5 h-5 text-purple-600" />
                            <h2 className="text-lg sm:text-xl font-semibold">
                              Languages
                            </h2>
                          </div>
                          <button
                            onClick={() =>
                              languagesHandlers.add({
                                name: "",
                                level: "Beginner",
                              })
                            }
                            className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors text-sm"
                          >
                            <Plus className="w-4 h-4" />
                            Add Language
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {languages.map((lang) => (
                            <div
                              key={lang.id}
                              className="p-3 border border-gray-200 rounded-lg"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">
                                  Language
                                </span>
                                {languages.length > 1 && (
                                  <button
                                    onClick={() =>
                                      languagesHandlers.remove(lang.id)
                                    }
                                    className="text-red-600 hover:bg-red-50 p-1 rounded"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                              <input
                                type="text"
                                value={lang.name}
                                onChange={(e) =>
                                  languagesHandlers.update(
                                    lang.id,
                                    "name",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
                                placeholder="e.g., Spanish, French, Mandarin"
                              />
                              <select
                                value={lang.level}
                                onChange={(e) =>
                                  languagesHandlers.update(
                                    lang.id,
                                    "level",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              >
                                <option value="Beginner">Beginner</option>
                                <option value="Elementary">Elementary</option>
                                <option value="Intermediate">
                                  Intermediate
                                </option>
                                <option value="Advanced">Advanced</option>
                                <option value="Native">Native</option>
                              </select>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
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
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 break-words text-center">
                        {personalInfo.fullName || "Your Name"}
                      </h1>
                      <p className="text-lg text-purple-600 font-medium mb-4 break-words text-center">
                        {personalInfo.title || "Your Professional Title"}
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
                        {activeSections.skills &&
                          skills.some((skill) => skill.name.trim()) && (
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
                                      className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full border break-words"
                                    >
                                      {skill.name}
                                    </span>
                                  ))}
                              </div>
                            </section>
                          )}

                        {/* Projects */}
                        {activeSections.projects &&
                          projects.some((project) => project.title.trim()) && (
                            <section>
                              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                                PROJECTS
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
                                        <p className="text-sm text-purple-600 break-all">
                                          Link: {project.githubLink}
                                        </p>
                                      )}
                                    </article>
                                  ))}
                              </div>
                            </section>
                          )}

                        {/* Achievements */}
                        {activeSections.achievements &&
                          achievements.some((achievement) =>
                            achievement.title.trim()
                          ) && (
                            <section>
                              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                                ACHIEVEMENTS
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
                                      <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <div className="text-purple-600">
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
                                      </div>
                                    </article>
                                  ))}
                              </div>
                            </section>
                          )}

                        {/* Certifications */}
                        {activeSections.certifications &&
                          certifications.some((cert) => cert.name.trim()) && (
                            <section>
                              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                                CERTIFICATIONS
                              </h2>
                              <div className="space-y-4">
                                {certifications
                                  .filter((cert) => cert.name.trim())
                                  .map((cert) => (
                                    <article key={cert.id}>
                                      <h3 className="font-semibold text-purple-600 text-sm break-words">
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

                        {/* Languages */}
                        {activeSections.languages &&
                          languages.some((lang) => lang.name.trim()) && (
                            <section>
                              <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                                LANGUAGES
                              </h2>
                              <div className="space-y-2">
                                {languages
                                  .filter((lang) => lang.name.trim())
                                  .map((lang) => (
                                    <div
                                      key={lang.id}
                                      className="flex justify-between items-center"
                                    >
                                      <span className="font-medium text-gray-900 text-sm">
                                        {lang.name}
                                      </span>
                                      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                                        {lang.level}
                                      </span>
                                    </div>
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
                        {activeSections.experience &&
                          experiences.some(
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
                                          </h3>
                                        )}
                                        {exp.company && (
                                          <p className="text-purple-600 font-medium break-words">
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
                        {activeSections.education &&
                          education.some(
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
                                      edu.degree.trim() ||
                                      edu.institution.trim()
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
                                            <p className="text-purple-600 font-medium break-words">
                                              {edu.institution}
                                            </p>
                                          )}
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

                    {/* Footer */}
                    <footer className="mt-12 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-gray-500 gap-2">
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
