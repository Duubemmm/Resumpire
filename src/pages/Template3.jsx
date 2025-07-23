import { useState, useRef } from "react";
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
  Upload,
  X,
  Plus,
  Trash2,
  Palette,
  Eye,
  Edit3,
  Award,
  Briefcase,
  GraduationCap,
  User,
  Phone,
  Github,
} from "lucide-react";

const themes = {
  violet: {
    primary: "text-violet-600",
    primaryBg: "bg-violet-100",
    primaryText: "text-violet-700",
    primaryHover: "hover:bg-violet-200",
    border: "border-violet-200",
    accent: "bg-violet-600",
    accentHover: "hover:bg-violet-700",
  },
  blue: {
    primary: "text-blue-600",
    primaryBg: "bg-blue-100",
    primaryText: "text-blue-700",
    primaryHover: "hover:bg-blue-200",
    border: "border-blue-200",
    accent: "bg-blue-600",
    accentHover: "hover:bg-blue-700",
  },
  emerald: {
    primary: "text-emerald-600",
    primaryBg: "bg-emerald-100",
    primaryText: "text-emerald-700",
    primaryHover: "hover:bg-emerald-200",
    border: "border-emerald-200",
    accent: "bg-emerald-600",
    accentHover: "hover:bg-emerald-700",
  },
  rose: {
    primary: "text-rose-600",
    primaryBg: "bg-rose-100",
    primaryText: "text-rose-700",
    primaryHover: "hover:bg-rose-200",
    border: "border-rose-200",
    accent: "bg-rose-600",
    accentHover: "hover:bg-rose-700",
  },
  amber: {
    primary: "text-amber-600",
    primaryBg: "bg-amber-100",
    primaryText: "text-amber-700",
    primaryHover: "hover:bg-amber-200",
    border: "border-amber-200",
    accent: "bg-amber-600",
    accentHover: "hover:bg-amber-700",
  },
  indigo: {
    primary: "text-indigo-600",
    primaryBg: "bg-indigo-100",
    primaryText: "text-indigo-700",
    primaryHover: "hover:bg-indigo-200",
    border: "border-indigo-200",
    accent: "bg-indigo-600",
    accentHover: "hover:bg-indigo-700",
  },
};

const skillCategories = [
  "Technical",
  "Programming",
  "Design",
  "Marketing",
  "Management",
  "Communication",
  "Other",
];

export default function ResumeBuilder() {
  const fileInputRef = useRef(null);

  // State
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "ELLEN JOHNSON",
    title: "Digital Marketing Manager | Growth Hacking | Data Analysis",
    email: "help@enhancv.com",
    phone: "+1-(234)-555-1234",
    linkedin: "linkedin.com/in/ellenjohnson",
    github: "github.com/ellenjohnson",
    location: "San Francisco, California",
    summary:
      "Motivated Digital Marketing Manager with over 3 years of experience in driving user acquisition and growth through strategic paid campaigns. Expert in data analysis, creative optimization, and cross-functional collaboration to achieve business objectives. Proven track record of scaling campaigns and enhancing ROI.",
    profileImage: "/placeholder.svg?height=120&width=120&text=Profile",
  });

  const [experiences, setExperiences] = useState([
    {
      id: "1",
      position: "Senior Digital Marketing Specialist",
      company: "Tech Innovate",
      duration: "01/2022 - Present",
      location: "San Francisco, CA",
      isCurrentRole: true,
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
      isCurrentRole: false,
      responsibilities: [
        "Managed and scaled paid search and social campaigns across Snapchat and Apple Search Ads, achieving a 50% increase in leads.",
        "Designed and executed a landing page optimization strategy that lifted conversion rates by 18%.",
        "Utilized Looker and Google Analytics to monitor campaign performance, driving a 10% decrease in bounce rates.",
        "Orchestrated the creative testing process, enhancing ad performance and contributing to a 22% increase in CTR.",
        "Collaborated with engineering to integrate new tracking systems, improving data accuracy and campaign efficiency.",
      ],
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: "1",
      degree: "Master of Science in Marketing Analytics",
      institution: "University of California, Berkeley",
      duration: "01/2015 - 01/2017",
      location: "Berkeley, CA",
      gpa: "3.8",
      honors: "Magna Cum Laude",
    },
    {
      id: "2",
      degree: "Bachelor of Science in Business Administration",
      institution: "San Francisco State University",
      duration: "01/2011 - 01/2015",
      location: "San Francisco, CA",
      gpa: "3.6",
    },
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: "1",
      title: "45% User Acquisition Increase",
      description:
        "Spearheaded digital marketing initiatives at Tech Innovate that led to a 45% increase in user acquisition.",
      icon: "star",
      date: "2023",
      impact: "Generated $2M additional revenue",
    },
    {
      id: "2",
      title: "30% ROAS Improvement",
      description:
        "Optimized ad spend across digital platforms at Tech Innovate, resulting in a 30% improvement in ROAS.",
      icon: "trending-up",
      date: "2023",
      impact: "Saved $150K in ad spend",
    },
    {
      id: "3",
      title: "Market Share Expansion",
      description:
        "Identified and captured a new user segment, contributing to a 35% increase in market share.",
      icon: "target",
      date: "2022",
      impact: "Expanded customer base by 10,000 users",
    },
    {
      id: "4",
      title: "Conversion Rate Optimization",
      description:
        "Implemented a successful landing page optimization strategy, lifting conversion rates by 18%.",
      icon: "heart",
      date: "2022",
      impact: "Increased monthly conversions by 500",
    },
  ]);

  const [skills, setSkills] = useState([
    { id: "1", name: "Data Analysis", category: "Technical" },
    { id: "2", name: "Paid Acquisition", category: "Marketing"},
    { id: "3", name: "Retargeting", category: "Marketing"},
    { id: "4", name: "ROAS Optimization", category: "Marketing" },
    {
      id: "5",
      name: "Cross-Functional Collaboration",
      category: "Management",
      level: 4,
    },
    { id: "6", name: "Google Analytics", category: "Technical" },
    { id: "7", name: "Looker", category: "Technical" },
    { id: "8", name: "Appsflyer", category: "Technical" },
    { id: "9", name: "Meta Advertising", category: "Marketing" },
    { id: "10", name: "Google Ads", category: "Marketing" },
    { id: "11", name: "TikTok Ads", category: "Marketing" },
    { id: "12", name: "SQL", category: "Programming" },
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: "1",
      name: "Advanced Google Analytics",
      description:
        "Focused on mastering Google Analytics for deep insights into user behavior, provided by Google.",
      issuer: "Google",
      date: "2023",
      expiryDate: "2025",
      credentialId: "GA-2023-001",
    },
    {
      id: "2",
      name: "Effective Creative Testing",
      description:
        "Specialized in evaluating ad creative performance to maximize engagement, offered by Coursera.",
      issuer: "Coursera",
      date: "2022",
      credentialId: "COURSERA-2022-002",
    },
  ]);

  const [languages, setLanguages] = useState([
    { id: "1", name: "English", level: "Native", proficiency: 5 },
    { id: "2", name: "Spanish", level: "Advanced", proficiency: 4 },
  ]);

  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "Marketing Automation Platform",
      description:
        "Built comprehensive marketing automation system that increased lead conversion by 40%",
      technologies: ["Python", "SQL", "Tableau"],
      url: "https://github.com/example",
      status: "Completed",
    },
  ]);

  // UI State
  const [uploadError, setUploadError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [theme, setTheme] = useState("green");
  const [previewMode, setPreviewMode] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors = {};

    if (!personalInfo.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!personalInfo.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(personalInfo.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!personalInfo.title.trim()) {
      errors.title = "Title is required";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handlers
  const handleDownloadPDF = () => {
    if (!validateForm()) {
      alert("Please fix the validation errors before downloading");
      return;
    }

    // Create a new window with just the resume content
    const resumeContent = document.getElementById("resume-preview").innerHTML;
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
              body { margin: 0; padding: 20px; }
              .no-print { display: none !important; }
            }
            body { font-family: system-ui, -apple-system, sans-serif; }
          </style>
        </head>
        <body>
          <div class="max-w-4xl mx-auto">
            ${resumeContent}
          </div>
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              }
            }
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    setUploadError("");
    if (!file) return;

    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setUploadError("Please upload a valid image file (JPEG, PNG, or WebP)");
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setUploadError("Image size must be less than 5MB");
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPersonalInfo({ ...personalInfo, profileImage: e.target?.result });
      setIsUploading(false);
    };
    reader.onerror = () => {
      setUploadError("Error reading file. Please try again.");
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setPersonalInfo({
      ...personalInfo,
      profileImage: "/placeholder.svg?height=120&width=120&text=Profile",
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Experience handlers
  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      position: "",
      company: "",
      duration: "",
      location: "",
      responsibilities: [""],
      isCurrentRole: false,
    };
    setExperiences([...experiences, newExp]);
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const updateExperience = (id, field, value) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  // Education handlers
  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      degree: "",
      institution: "",
      duration: "",
      location: "",
    };
    setEducation([...education, newEdu]);
  };

  const removeEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const updateEducation = (id, field, value) => {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  // Achievement handlers
  const addAchievement = () => {
    const newAchievement = {
      id: Date.now().toString(),
      title: "",
      description: "",
      icon: "star",
    };
    setAchievements([...achievements, newAchievement]);
  };

  const removeAchievement = (id) => {
    setAchievements(achievements.filter((ach) => ach.id !== id));
  };

  const updateAchievement = (id, field, value) => {
    setAchievements(
      achievements.map((ach) =>
        ach.id === id ? { ...ach, [field]: value } : ach
      )
    );
  };

  // Skill handlers
  const addSkill = () => {
    const newSkill = {
      id: Date.now().toString(),
      name: "",
      category: "Technical",
    };
    setSkills([...skills, newSkill]);
  };

  const removeSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const updateSkill = (id, field, value) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  // Certification handlers
  const addCertification = () => {
    const newCert = {
      id: Date.now().toString(),
      name: "",
      description: "",
      issuer: "",
      date: "",
    };
    setCertifications([...certifications, newCert]);
  };

  const removeCertification = (id) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
  };

  const updateCertification = (id, field, value) => {
    setCertifications(
      certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    );
  };

  // Language handlers
  const addLanguage = () => {
    const newLang = {
      id: Date.now().toString(),
      name: "",
      level: "Beginner",
      proficiency: 1,
    };
    setLanguages([...languages, newLang]);
  };

  const removeLanguage = (id) => {
    setLanguages(languages.filter((lang) => lang.id !== id));
  };

  const updateLanguage = (id, field, value) => {
    setLanguages(
      languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    );
  };

  // Project handlers
  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      status: "In Progress",
    };
    setProjects([...projects, newProject]);
  };

  const removeProject = (id) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  const updateProject = (id, field, value) => {
    setProjects(
      projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    );
  };

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

  const renderDots = (count, total = 5) => {
    return (
      <div
        className="flex gap-1"
        role="img"
        aria-label={`${count} out of ${total} proficiency level`}
      >
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < count ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  const currentTheme = themes[theme] || themes.violet;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-2 sm:p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-4 sm:mb-6 no-print">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="sm:flex items-center hidden ">
               <img src={Logo} alt="ResumePire Logo" className="w-10 h-10" />
                                            <span className="text-xs font-bold text-blue-500 italic sm:text-2xl">
                                              ResumePire
                                            </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {/* Theme Selector */}
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-gray-600" />
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="violet">Violet</option>
                    <option value="blue">Blue</option>
                    <option value="emerald">Emerald</option>
                    <option value="rose">Rose</option>
                    <option value="amber">Amber</option>
                    <option value="indigo">Indigo</option>
                  </select>
                </div>

                {/* Preview Mode Toggle */}
                <button
                  onClick={() => setPreviewMode(!previewMode)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    previewMode
                      ? "bg-gray-600 text-white hover:bg-gray-700"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {previewMode ? (
                    <Edit3 className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                  {previewMode ? "Edit" : "Preview"}
                </button>

                {/* Download PDF */}
                <button
                  onClick={handleDownloadPDF}
                  className={`flex items-center justify-center gap-2 ${currentTheme.accent} text-white px-4 py-2 rounded-lg ${currentTheme.accentHover} focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
                  aria-label="Download resume as PDF"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download PDF
                </button>
              </div>
            </div>
          </header>

          <main id="main-content">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Left Column - Form */}
              {!previewMode && (
                <div className="space-y-4 sm:space-y-6 order-2 xl:order-1 no-print">
                  <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                    {/* Personal Information */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <User className={`w-5 h-5 ${currentTheme.primary}`} />
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Personal Information
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {/* Profile Image Upload */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <img
                                src={
                                  personalInfo.profileImage ||
                                  "/placeholder.svg"
                                }
                                alt="Profile preview"
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-gray-200"
                              />
                              {personalInfo.profileImage !==
                                "/placeholder.svg?height=120&width=120&text=Profile" && (
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Profile Picture
                            </label>
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
                                  isUploading
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                              >
                                <Upload
                                  className="w-4 h-4"
                                  aria-hidden="true"
                                />
                                {isUploading ? "Uploading..." : "Upload Image"}
                              </label>
                            </div>
                            <p
                              id="image-upload-help"
                              className="text-xs text-gray-500 mt-1"
                            >
                              JPEG, PNG, or WebP. Max 5MB. Recommended:
                              400x400px
                            </p>
                            {uploadError && (
                              <p
                                className="text-red-600 text-sm mt-1"
                                role="alert"
                                aria-live="polite"
                              >
                                {uploadError}
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
                            onChange={(e) => {
                              setPersonalInfo({
                                ...personalInfo,
                                fullName: e.target.value,
                              });
                              if (validationErrors.fullName) {
                                setValidationErrors({
                                  ...validationErrors,
                                  fullName: "",
                                });
                              }
                            }}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                              validationErrors.fullName
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            required
                            aria-required="true"
                          />
                          {validationErrors.fullName && (
                            <p className="text-red-600 text-sm mt-1">
                              {validationErrors.fullName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Title/Specialties *
                          </label>
                          <input
                            id="title"
                            type="text"
                            value={personalInfo.title}
                            onChange={(e) => {
                              setPersonalInfo({
                                ...personalInfo,
                                title: e.target.value,
                              });
                              if (validationErrors.title) {
                                setValidationErrors({
                                  ...validationErrors,
                                  title: "",
                                });
                              }
                            }}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                              validationErrors.title
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            required
                            aria-required="true"
                          />
                          {validationErrors.title && (
                            <p className="text-red-600 text-sm mt-1">
                              {validationErrors.title}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                              onChange={(e) => {
                                setPersonalInfo({
                                  ...personalInfo,
                                  email: e.target.value,
                                });
                                if (validationErrors.email) {
                                  setValidationErrors({
                                    ...validationErrors,
                                    email: "",
                                  });
                                }
                              }}
                              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                                validationErrors.email
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              required
                              aria-required="true"
                            />
                            {validationErrors.email && (
                              <p className="text-red-600 text-sm mt-1">
                                {validationErrors.email}
                              </p>
                            )}
                          </div>
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
                                setPersonalInfo({
                                  ...personalInfo,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
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
                                setPersonalInfo({
                                  ...personalInfo,
                                  linkedin: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                                setPersonalInfo({
                                  ...personalInfo,
                                  github: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                              setPersonalInfo({
                                ...personalInfo,
                                location: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                              setPersonalInfo({
                                ...personalInfo,
                                summary: e.target.value,
                              })
                            }
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                            aria-describedby="summary-help"
                          />
                          <p
                            id="summary-help"
                            className="text-xs text-gray-500 mt-1"
                          >
                            Brief overview of your professional background and
                            key strengths
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* Experience Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase
                            className={`w-5 h-5 ${currentTheme.primary}`}
                          />
                          <h2 className="text-lg sm:text-xl font-semibold">
                            Work Experience
                          </h2>
                        </div>
                        <button
                          onClick={addExperience}
                          className={`flex items-center gap-2 px-3 py-2 ${currentTheme.accent} text-white rounded-lg ${currentTheme.accentHover} transition-colors`}
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">
                              Experience {index + 1}
                            </h3>
                            {experiences.length > 1 && (
                              <button
                                onClick={() => removeExperience(exp.id)}
                                className="flex items-center gap-1 px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                                Remove
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
                                  updateExperience(
                                    exp.id,
                                    "position",
                                    e.target.value
                                  )
                                }
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
                                onChange={(e) =>
                                  updateExperience(
                                    exp.id,
                                    "company",
                                    e.target.value
                                  )
                                }
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
                                onChange={(e) =>
                                  updateExperience(
                                    exp.id,
                                    "duration",
                                    e.target.value
                                  )
                                }
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
                                onChange={(e) =>
                                  updateExperience(
                                    exp.id,
                                    "location",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="flex items-center gap-2">
                              <input
                                id={`current-role-${exp.id}`}
                                type="checkbox"
                                checked={exp.isCurrentRole}
                                onChange={(e) =>
                                  updateExperience(
                                    exp.id,
                                    "isCurrentRole",
                                    e.target.checked
                                  )
                                }
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <label
                                htmlFor={`current-role-${exp.id}`}
                                className="text-sm text-gray-700"
                              >
                                This is my current role
                              </label>
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
                                const responsibilities = e.target.value
                                  .split("\n")
                                  .filter((r) => r.trim());
                                updateExperience(
                                  exp.id,
                                  "responsibilities",
                                  responsibilities
                                );
                              }}
                              rows={6}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                              placeholder="Enter each responsibility on a new line"
                              aria-describedby={`responsibilities-help-${exp.id}`}
                            />
                            <p
                              id={`responsibilities-help-${exp.id}`}
                              className="text-xs text-gray-500 mt-1"
                            >
                              Enter each responsibility on a separate line
                            </p>
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Education Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <GraduationCap
                            className={`w-5 h-5 ${currentTheme.primary}`}
                          />
                          <h2 className="text-lg sm:text-xl font-semibold">
                            Education
                          </h2>
                        </div>
                        <button
                          onClick={addEducation}
                          className={`flex items-center gap-2 px-3 py-2 ${currentTheme.accent} text-white rounded-lg ${currentTheme.accentHover} transition-colors`}
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">
                              Education {index + 1}
                            </h3>
                            {education.length > 1 && (
                              <button
                                onClick={() => removeEducation(edu.id)}
                                className="flex items-center gap-1 px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                                Remove
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
                                  updateEducation(
                                    edu.id,
                                    "degree",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                                  updateEducation(
                                    edu.id,
                                    "institution",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                                  updateEducation(
                                    edu.id,
                                    "duration",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                                  updateEducation(
                                    edu.id,
                                    "location",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor={`gpa-${edu.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                GPA (Optional)
                              </label>
                              <input
                                id={`gpa-${edu.id}`}
                                type="text"
                                value={edu.gpa || ""}
                                onChange={(e) =>
                                  updateEducation(edu.id, "gpa", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="3.8"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Skills Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Skills
                        </h2>
                        <button
                          onClick={addSkill}
                          className={`flex items-center gap-2 px-3 py-2 ${currentTheme.accent} text-white rounded-lg ${currentTheme.accentHover} transition-colors`}
                        >
                          <Plus className="w-4 h-4" />
                          Add Skill
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skills.map((skill) => (
                          <div
                            key={skill.id}
                            className="p-3 border border-gray-200 rounded-lg"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Skill</span>
                              {skills.length > 1 && (
                                <button
                                  onClick={() => removeSkill(skill.id)}
                                  className="text-red-600 hover:bg-red-50 p-1 rounded"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                            <input
                              type="text"
                              value={skill.name}
                              onChange={(e) =>
                                updateSkill(skill.id, "name", e.target.value)
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                              placeholder="Skill name"
                            />
                            <select
                              value={skill.category}
                              onChange={(e) =>
                                updateSkill(
                                  skill.id,
                                  "category",
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                            >
                              {skillCategories.map((cat) => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Achievements Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Award
                            className={`w-5 h-5 ${currentTheme.primary}`}
                          />
                          <h2 className="text-lg sm:text-xl font-semibold">
                            Key Achievements
                          </h2>
                        </div>
                        <button
                          onClick={addAchievement}
                          className={`flex items-center gap-2 px-3 py-2 ${currentTheme.accent} text-white rounded-lg ${currentTheme.accentHover} transition-colors`}
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">
                              Achievement {index + 1}
                            </h3>
                            {achievements.length > 1 && (
                              <button
                                onClick={() =>
                                  removeAchievement(achievement.id)
                                }
                                className="flex items-center gap-1 px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                                Remove
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
                                  updateAchievement(
                                    achievement.id,
                                    "title",
                                    e.target.value
                                  )
                                }
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
                                onChange={(e) =>
                                  updateAchievement(
                                    achievement.id,
                                    "description",
                                    e.target.value
                                  )
                                }
                                rows={2}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                                    updateAchievement(
                                      achievement.id,
                                      "icon",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                  value={achievement.date || ""}
                                  onChange={(e) =>
                                    updateAchievement(
                                      achievement.id,
                                      "date",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                  value={achievement.impact || ""}
                                  onChange={(e) =>
                                    updateAchievement(
                                      achievement.id,
                                      "impact",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="$2M revenue"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Certifications Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Certifications
                        </h2>
                        <button
                          onClick={addCertification}
                          className={`flex items-center gap-2 px-3 py-2 ${currentTheme.accent} text-white rounded-lg ${currentTheme.accentHover} transition-colors`}
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">
                              Certification {index + 1}
                            </h3>
                            {certifications.length > 1 && (
                              <button
                                onClick={() => removeCertification(cert.id)}
                                className="flex items-center gap-1 px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                                Remove
                              </button>
                            )}
                          </div>
                          <div className="space-y-3">
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
                                  updateCertification(
                                    cert.id,
                                    "name",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., AWS Certified Solutions Architect"
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
                                  updateCertification(
                                    cert.id,
                                    "issuer",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., Amazon Web Services"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor={`cert-description-${cert.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Description
                              </label>
                              <textarea
                                id={`cert-description-${cert.id}`}
                                value={cert.description}
                                onChange={(e) =>
                                  updateCertification(
                                    cert.id,
                                    "description",
                                    e.target.value
                                  )
                                }
                                rows={2}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                                placeholder="Brief description of the certification"
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                                    updateCertification(
                                      cert.id,
                                      "date",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                  value={cert.expiryDate || ""}
                                  onChange={(e) =>
                                    updateCertification(
                                      cert.id,
                                      "expiryDate",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                  value={cert.credentialId || ""}
                                  onChange={(e) =>
                                    updateCertification(
                                      cert.id,
                                      "credentialId",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="Credential ID"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Languages Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border mb-4 sm:mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Languages
                        </h2>
                        <button
                          onClick={addLanguage}
                          className={`flex items-center gap-2 px-3 py-2 ${currentTheme.accent} text-white rounded-lg ${currentTheme.accentHover} transition-colors`}
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
                                  onClick={() => removeLanguage(lang.id)}
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
                                updateLanguage(lang.id, "name", e.target.value)
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                              placeholder="Language name"
                            />
                            <select
                              value={lang.level}
                              onChange={(e) => {
                                const level = e.target.value;
                                const proficiencyMap = {
                                  Beginner: 1,
                                  Elementary: 2,
                                  Intermediate: 3,
                                  Advanced: 4,
                                  Native: 5,
                                };
                                updateLanguage(lang.id, "level", level);
                                updateLanguage(
                                  lang.id,
                                  "proficiency",
                                  proficiencyMap[level] || 1
                                );
                              }}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                            >
                              <option value="Beginner">Beginner</option>
                              <option value="Elementary">Elementary</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Advanced">Advanced</option>
                              <option value="Native">Native</option>
                            </select>
                            <div className="flex items-center justify-center">
                              {renderDots(lang.proficiency)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Projects Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold">
                          Projects
                        </h2>
                        <button
                          onClick={addProject}
                          className={`flex items-center gap-2 px-3 py-2 ${currentTheme.accent} text-white rounded-lg ${currentTheme.accentHover} transition-colors`}
                        >
                          <Plus className="w-4 h-4" />
                          Add Project
                        </button>
                      </div>
                      {projects.map((project, index) => (
                        <div
                          key={project.id}
                          className="mb-4 p-4 border border-gray-200 rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium">Project {index + 1}</h3>
                            {projects.length > 1 && (
                              <button
                                onClick={() => removeProject(project.id)}
                                className="flex items-center gap-1 px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                                Remove
                              </button>
                            )}
                          </div>
                          <div className="space-y-3">
                            <div>
                              <label
                                htmlFor={`project-name-${project.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Project Name *
                              </label>
                              <input
                                id={`project-name-${project.id}`}
                                type="text"
                                value={project.name}
                                onChange={(e) =>
                                  updateProject(
                                    project.id,
                                    "name",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Project name"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor={`project-description-${project.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Description
                              </label>
                              <textarea
                                id={`project-description-${project.id}`}
                                value={project.description}
                                onChange={(e) =>
                                  updateProject(
                                    project.id,
                                    "description",
                                    e.target.value
                                  )
                                }
                                rows={2}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                                placeholder="Brief description of the project"
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div>
                                <label
                                  htmlFor={`project-technologies-${project.id}`}
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Technologies
                                </label>
                                <input
                                  id={`project-technologies-${project.id}`}
                                  type="text"
                                  value={project.technologies.join(", ")}
                                  onChange={(e) => {
                                    const technologies = e.target.value
                                      .split(",")
                                      .map((t) => t.trim())
                                      .filter((t) => t);
                                    updateProject(
                                      project.id,
                                      "technologies",
                                      technologies
                                    );
                                  }}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="React, Node.js, MongoDB"
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
                                    updateProject(
                                      project.id,
                                      "status",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                  <option value="Completed">Completed</option>
                                  <option value="In Progress">
                                    In Progress
                                  </option>
                                  <option value="On Hold">On Hold</option>
                                </select>
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor={`project-url-${project.id}`}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Project URL (Optional)
                              </label>
                              <input
                                id={`project-url-${project.id}`}
                                type="url"
                                value={project.url || ""}
                                onChange={(e) =>
                                  updateProject(
                                    project.id,
                                    "url",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://github.com/username/project"
                              />
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
                  previewMode ? "col-span-1" : "order-1 xl:order-2"
                } xl:sticky xl:top-6 xl:h-fit`}
              >
                <div
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                  id="resume-preview"
                >
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
                        <p
                          className={`text-base sm:text-lg ${currentTheme.primary} font-medium mb-3 sm:mb-4 break-words`}
                        >
                          {personalInfo.title}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                          {personalInfo.email && (
                            <div className="flex items-center gap-1">
                              <Mail
                                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="break-all">
                                {personalInfo.email}
                              </span>
                            </div>
                          )}
                          {personalInfo.phone && (
                            <div className="flex items-center gap-1">
                              <Phone
                                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span>{personalInfo.phone}</span>
                            </div>
                          )}
                          {personalInfo.linkedin && (
                            <div className="flex items-center gap-1">
                              <Globe
                                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="break-all">
                                {personalInfo.linkedin}
                              </span>
                            </div>
                          )}
                          {personalInfo.github && (
                            <div className="flex items-center gap-1">
                              <Github
                                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="break-all">
                                {personalInfo.github}
                              </span>
                            </div>
                          )}
                          {personalInfo.location && (
                            <div className="flex items-center gap-1">
                              <MapPin
                                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                                aria-hidden="true"
                              />
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
                        {experiences.some(
                          (exp) => exp.position || exp.company
                        ) && (
                          <section>
                            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                              EXPERIENCE
                            </h2>
                            <div className="space-y-4 sm:space-y-6">
                              {experiences
                                .filter((exp) => exp.position || exp.company)
                                .map((exp) => (
                                  <article key={exp.id}>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                                      <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base break-words">
                                          {exp.position}
                                          {exp.isCurrentRole && (
                                            <span
                                              className={`ml-2 px-2 py-1 text-xs ${currentTheme.primaryBg} ${currentTheme.primaryText} rounded-full`}
                                            >
                                              Current
                                            </span>
                                          )}
                                        </h3>
                                        <p
                                          className={`${currentTheme.primary} font-medium text-sm break-words`}
                                        >
                                          {exp.company}
                                        </p>
                                      </div>
                                      <div className="text-right text-xs sm:text-sm text-gray-600 flex-shrink-0">
                                        <div className="flex items-center gap-1 justify-end sm:justify-start">
                                          <Calendar
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                          />
                                          <span>{exp.duration}</span>
                                        </div>
                                        {exp.location && (
                                          <div className="flex items-center gap-1 mt-1 justify-end sm:justify-start">
                                            <MapPin
                                              className="w-3 h-3"
                                              aria-hidden="true"
                                            />
                                            <span>{exp.location}</span>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    {exp.responsibilities.length > 0 && (
                                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-700 ml-2 sm:ml-4">
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
                          (edu) => edu.degree || edu.institution
                        ) && (
                          <section>
                            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                              EDUCATION
                            </h2>
                            <div className="space-y-3 sm:space-y-4">
                              {education
                                .filter((edu) => edu.degree || edu.institution)
                                .map((edu) => (
                                  <article key={edu.id}>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                                      <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base break-words">
                                          {edu.degree}
                                          {edu.gpa && (
                                            <span className="ml-2 text-gray-600 font-normal">
                                              (GPA: {edu.gpa})
                                            </span>
                                          )}
                                        </h3>
                                        <p
                                          className={`${currentTheme.primary} font-medium text-sm break-words`}
                                        >
                                          {edu.institution}
                                        </p>
                                        {edu.honors && (
                                          <p className="text-xs text-gray-600 italic">
                                            {edu.honors}
                                          </p>
                                        )}
                                      </div>
                                      <div className="text-right text-xs sm:text-sm text-gray-600 flex-shrink-0">
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

                        {/* Projects */}
                        {projects.some((proj) => proj.name) && (
                          <section>
                            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                              PROJECTS
                            </h2>
                            <div className="space-y-4">
                              {projects
                                .filter((proj) => proj.name)
                                .map((project) => (
                                  <article key={project.id}>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                      <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base break-words">
                                          {project.url ? (
                                            <a
                                              href={project.url}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className={`${currentTheme.primary} hover:underline`}
                                            >
                                              {project.name}
                                            </a>
                                          ) : (
                                            project.name
                                          )}
                                        </h3>
                                        {project.description && (
                                          <p className="text-xs sm:text-sm text-gray-700 mt-1 break-words">
                                            {project.description}
                                          </p>
                                        )}
                                        {project.technologies.length > 0 && (
                                          <div className="flex flex-wrap gap-1 mt-2">
                                            {project.technologies.map(
                                              (tech, idx) => (
                                                <span
                                                  key={idx}
                                                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                                >
                                                  {tech}
                                                </span>
                                              )
                                            )}
                                          </div>
                                        )}
                                      </div>
                                      <div className="text-right text-xs text-gray-600 flex-shrink-0 mt-1 sm:mt-0">
                                        <span
                                          className={`px-2 py-1 ${currentTheme.primaryBg} ${currentTheme.primaryText} rounded-full`}
                                        >
                                          {project.status}
                                        </span>
                                      </div>
                                    </div>
                                  </article>
                                ))}
                            </div>
                          </section>
                        )}

                        {/* Languages */}
                        {languages.some((lang) => lang.name) && (
                          <section>
                            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                              LANGUAGES
                            </h2>
                            <div className="space-y-2 sm:space-y-3">
                              {languages
                                .filter((lang) => lang.name)
                                .map((lang) => (
                                  <div
                                    key={lang.id}
                                    className="flex justify-between items-center"
                                  >
                                    <div>
                                      <span className="font-medium text-gray-900 text-sm">
                                        {lang.name}
                                      </span>
                                      <span className="text-xs sm:text-sm text-gray-600 ml-2">
                                        {lang.level}
                                      </span>
                                    </div>
                                    {renderDots(lang.proficiency)}
                                  </div>
                                ))}
                            </div>
                          </section>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6 lg:space-y-8">
                        {/* Summary */}
                        {personalInfo.summary && (
                          <section>
                            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                              SUMMARY
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed break-words">
                              {personalInfo.summary}
                            </p>
                          </section>
                        )}

                        {/* Key Achievements */}
                        {achievements.some((ach) => ach.title) && (
                          <section>
                            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                              KEY ACHIEVEMENTS
                            </h2>
                            <div className="space-y-3 sm:space-y-4">
                              {achievements
                                .filter((ach) => ach.title)
                                .map((achievement) => (
                                  <article
                                    key={achievement.id}
                                    className="flex gap-3"
                                  >
                                    <div
                                      className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 ${currentTheme.primaryBg} rounded-full flex items-center justify-center`}
                                    >
                                      <div className={currentTheme.primaryText}>
                                        {getIcon(achievement.icon)}
                                      </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm break-words">
                                          {achievement.title}
                                        </h3>
                                        {achievement.date && (
                                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                                            {achievement.date}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-600 leading-relaxed break-words">
                                        {achievement.description}
                                      </p>
                                      {achievement.impact && (
                                        <p
                                          className={`text-xs ${currentTheme.primaryText} font-medium mt-1`}
                                        >
                                          Impact: {achievement.impact}
                                        </p>
                                      )}
                                    </div>
                                  </article>
                                ))}
                            </div>
                          </section>
                        )}

                        {/* Skills */}
                        {skills.some((skill) => skill.name) && (
                          <section>
                            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                              SKILLS
                            </h2>
                            {skillCategories.map((category) => {
                              const categorySkills = skills.filter(
                                (skill) =>
                                  skill.category === category && skill.name
                              );
                              if (categorySkills.length === 0) return null;

                              return (
                                <div key={category} className="mb-4">
                                  <h3 className="text-sm font-medium text-gray-800 mb-2">
                                    {category}
                                  </h3>
                                  <div className="flex flex-wrap gap-1 sm:gap-2">
                                    {categorySkills.map((skill) => (
                                      <span
                                        key={skill.id}
                                        className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border break-words flex items-center gap-1"
                                      >
                                        {skill.name}
                                        
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </section>
                        )}

                        {/* Certifications */}
                        {certifications.some((cert) => cert.name) && (
                          <section>
                            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 border-b border-gray-300">
                              CERTIFICATIONS
                            </h2>
                            <div className="space-y-3 sm:space-y-4">
                              {certifications
                                .filter((cert) => cert.name)
                                .map((cert) => (
                                  <article key={cert.id}>
                                    <div className="flex items-start justify-between mb-1">
                                      <h3
                                        className={`font-semibold ${currentTheme.primary} text-xs sm:text-sm break-words flex-1`}
                                      >
                                        {cert.name}
                                      </h3>
                                      {cert.date && (
                                        <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                                          {cert.date}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-600 font-medium mb-1">
                                      {cert.issuer}
                                    </p>
                                    {cert.description && (
                                      <p className="text-xs text-gray-600 leading-relaxed break-words mb-1">
                                        {cert.description}
                                      </p>
                                    )}
                                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                                      {cert.credentialId && (
                                        <span>ID: {cert.credentialId}</span>
                                      )}
                                      {cert.expiryDate && (
                                        <span>Expires: {cert.expiryDate}</span>
                                      )}
                                    </div>
                                  </article>
                                ))}
                            </div>
                          </section>
                        )}
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
        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
