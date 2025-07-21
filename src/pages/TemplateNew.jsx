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
} from "lucide-react";

export default function TemplateNew() {
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
  });

  const [skills, setSkills] = useState([
    { id: "1", name: "HTML" },
    { id: "2", name: "CSS" },
    { id: "3", name: "JavaScript" },
    { id: "4", name: "React" },
    { id: "5", name: "TypeScript" },
    { id: "6", name: "Java" },
    { id: "7", name: "AWS S3" },
    { id: "8", name: "Lambda" },
    { id: "9", name: "Docker" },
    { id: "10", name: "Jenkins" },
    { id: "11", name: "Node.js" },
    { id: "12", name: "Angular" },
    { id: "13", name: "SQL" },
    { id: "14", name: "NoSQL" },
    { id: "15", name: "CloudFront" },
  ]);

  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Open Source Contribution to ChatEngine",
      description:
        "Enhanced real-time chat engine capabilities by integrating WebSockets for broader browser support.",
      githubLink: "github.com/ChatEngine",
    },
    {
      id: "2",
      title: "Development of MiniCRM System",
      description:
        "Built a lightweight CRM platform for small businesses using Node.js and MongoDB.",
      githubLink: "github.com/MiniCRM",
    },
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: "1",
      title: "Lead Project to Boost Engagement",
      description:
        "Sole responsibility for a key project that resulted in a 20% upsurge in user engagement through intuitive feature enhancements.",
      icon: "heart",
    },
    {
      id: "2",
      title: "Recognized for Optimizing Costs",
      description:
        "Drove a cloud migration initiative that cut hosting expenses by 25%, earning recognition for cost-saving measures.",
      icon: "trending-up",
    },
    {
      id: "3",
      title: "Mentorship Excellence Award",
      description:
        "Awarded for dedication to mentoring junior staff, significantly boosting code quality and team performance.",
      icon: "star",
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
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: "1",
      degree: "Master's in Computer Science",
      institution: "Stanford University",
      duration: "01/2014 - 01/2016",
      location: "Stanford, CA",
    },
    {
      id: "2",
      degree: "Bachelor's in Software Engineering",
      institution: "San Jose State University",
      duration: "01/2010 - 01/2014",
      location: "San Jose, CA",
    },
  ]);

  const [errors, setErrors] = useState({});

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-$$$$]/g, "");
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

  const handleDownloadPDF = () => {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = "Preparing PDF download...";
    document.body.appendChild(announcement);

    setTimeout(() => {
      window.print();
      document.body.removeChild(announcement);
    }, 100);
  };

  // Skills functions
  const addSkill = () => {
    const newSkill = {
      id: Date.now().toString(),
      name: "",
    };
    setSkills([...skills, newSkill]);
  };

  const removeSkill = (id) => {
    if (skills.length > 1) {
      setSkills(skills.filter((skill) => skill.id !== id));
    }
  };

  const updateSkill = (id, value) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, name: value } : skill
      )
    );
  };

  // Projects functions
  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "",
      description: "",
      githubLink: "",
    };
    setProjects([...projects, newProject]);
  };

  const removeProject = (id) => {
    if (projects.length > 1) {
      setProjects(projects.filter((project) => project.id !== id));
    }
  };

  const updateProject = (id, field, value) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  // Achievements functions
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
    if (achievements.length > 1) {
      setAchievements(
        achievements.filter((achievement) => achievement.id !== id)
      );
    }
  };

  const updateAchievement = (id, field, value) => {
    setAchievements(
      achievements.map((achievement) =>
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      )
    );
  };

  // Experience functions
  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      position: "",
      company: "",
      duration: "",
      location: "",
      responsibilities: [],
    };
    setExperiences([...experiences, newExperience]);
  };

  const removeExperience = (id) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter((experience) => experience.id !== id));
    }
  };

  const updateExperience = (id, field, value) => {
    setExperiences(
      experiences.map((experience) =>
        experience.id === id ? { ...experience, [field]: value } : experience
      )
    );
  };

  // Education functions
  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      degree: "",
      institution: "",
      duration: "",
      location: "",
    };
    setEducation([...education, newEducation]);
  };

  const removeEducation = (id) => {
    if (education.length > 1) {
      setEducation(education.filter((edu) => edu.id !== id));
    }
  };

  const updateEducation = (id, field, value) => {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
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

  // Handle textarea key events for new lines
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        // Shift + Enter: allow new line (default behavior)
        return;
      } else {
        // Just Enter: allow new line (default behavior)
        return;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-2 sm:p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Resume Template
                </h1>
                <p className="text-sm text-gray-600">
                  Professional software engineer resume
                </p>
              </div>
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
              <div className="space-y-4 sm:space-y-6 order-2 xl:order-1 min-h-screen">
                <div className="h-[calc(100vh-200px)] pr-2 space-y-4 sm:space-y-6 grid grow grid-cols-[1fr_min(1200px, _100%)_1fr]">
                  {/* Personal Information */}
                  <section className="bg-white p-4 sm:p-6 rounded-lg shadow">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4">
                      Personal Information
                    </h2>
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
                            handlePersonalInfoChange("fullName", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                            handlePersonalInfoChange("title", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                              handlePersonalInfoChange("phone", e.target.value)
                            }
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
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
                              handlePersonalInfoChange("email", e.target.value)
                            }
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
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
                              handlePersonalInfoChange("github", e.target.value)
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
                            handlePersonalInfoChange("location", e.target.value)
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
                            handlePersonalInfoChange("summary", e.target.value)
                          }
                          onKeyDown={handleKeyDown}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                          aria-describedby="summary-help"
                        />
                        <p
                          id="summary-help"
                          className="text-xs text-gray-500 mt-1"
                        >
                          Brief overview of your professional background. Press
                          Enter for new line.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Skills Section */}
                  <section className="bg-white p-4 sm:p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg sm:text-xl font-semibold">
                        Skills
                      </h2>
                      <button
                        onClick={addSkill}
                        className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm"
                      >
                        <Plus className="w-4 h-4" />
                        Add Skill
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {skills.map((skill) => (
                        <div key={skill.id} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={skill.name}
                            onChange={(e) =>
                              updateSkill(skill.id, e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Skill name"
                          />
                          {skills.length > 1 && (
                            <button
                              onClick={() => removeSkill(skill.id)}
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
                  <section className="bg-white p-4 sm:p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg sm:text-xl font-semibold">
                        My Projects
                      </h2>
                      <button
                        onClick={addProject}
                        className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm"
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
                              onClick={() => removeProject(project.id)}
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
                                updateProject(
                                  project.id,
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
                              htmlFor={`project-desc-${project.id}`}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Description
                            </label>
                            <textarea
                              id={`project-desc-${project.id}`}
                              value={project.description}
                              onChange={(e) =>
                                updateProject(
                                  project.id,
                                  "description",
                                  e.target.value
                                )
                              }
                              onKeyDown={handleKeyDown}
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                            />
                          </div>
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
                                updateProject(
                                  project.id,
                                  "githubLink",
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Achievements Section */}
                  <section className="bg-white p-4 sm:p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg sm:text-xl font-semibold">
                        Key Achievements
                      </h2>
                      <button
                        onClick={addAchievement}
                        className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm"
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
                              onClick={() => removeAchievement(achievement.id)}
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
                              onKeyDown={handleKeyDown}
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Experience Section */}
                  <section className="bg-white p-4 sm:p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg sm:text-xl font-semibold">
                        Work Experience
                      </h2>
                      <button
                        onClick={addExperience}
                        className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm"
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
                              onClick={() => removeExperience(exp.id)}
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
                              updateExperience(
                                exp.id,
                                "responsibilities",
                                e.target.value
                                  .split("\n")
                                  .filter((r) => r.trim())
                              )
                            }
                            onKeyDown={handleKeyDown}
                            rows={6}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                            placeholder="Enter each responsibility on a new line"
                            aria-describedby={`responsibilities-help-${exp.id}`}
                          />
                          <p
                            id={`responsibilities-help-${exp.id}`}
                            className="text-xs text-gray-500 mt-1"
                          >
                            Enter each responsibility on a separate line. Press
                            Enter for new line.
                          </p>
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Education Section */}
                  <section className="bg-white p-4 sm:p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg sm:text-xl font-semibold">
                        Education
                      </h2>
                      <button
                        onClick={addEducation}
                        className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm"
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
                          <h3 className="font-medium">Education {index + 1}</h3>
                          {education.length > 1 && (
                            <button
                              onClick={() => removeEducation(edu.id)}
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
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              </div>

              {/* Right Column - Resume Preview */}
              <div className="order-1 xl:order-2 xl:sticky xl:top-6 xl:h-fit">
                <div
                  className="bg-white shadow-lg rounded-lg h-[calc(100vh-200px)] min-h-screen"
                  id="resume-preview"
                >
                  <div
                    className="p-6 sm:p-8 min-h-[600px] sm:min-h-[800px] lg:min-h-[1056px] grid grow grid-cols-[1fr_min(1200px, _100%)_1fr]"
                    style={{ maxWidth: "8.5in", margin: "0 auto" }}
                  >
                    {/* Header */}
                    <header className="mb-8">
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 break-words">
                        {personalInfo.fullName}
                      </h1>
                      <p className="text-lg text-blue-500 font-medium mb-4 break-words">
                        {personalInfo.title}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border break-words"
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
                                      <p className="text-sm text-gray-600 break-all">
                                        GitHub link: {project.githubLink}
                                      </p>
                                    )}
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
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                      <div className="text-blue-600">
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
                                        </h3>
                                      )}
                                      {exp.company && (
                                        <p className="text-blue-500 font-medium break-words">
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
                                          <p className="text-blue-500 font-medium break-words">
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

        @media print {
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

          .order-2 {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
