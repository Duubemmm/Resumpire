import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { ArrowLeft, Plus, Trash2, Download, Eye, LogOut } from "lucide-react";

const templates = {
  tech: { id: "tech", name: "Tech Professional", niche: "Technology" },
  business: { id: "business", name: "Corporate Executive", niche: "Business" },
  creative: {
    id: "creative",
    name: "Creative Professional",
    niche: "Design & Creative",
  },
  healthcare: {
    id: "healthcare",
    name: "Healthcare Professional",
    niche: "Healthcare",
  },
  education: {
    id: "education",
    name: "Education Professional",
    niche: "Education",
  },
  sales: { id: "sales", name: "Sales & Marketing", niche: "Sales" },
};

export default function ResumeBuilder() {
  const { templateId } = useParams();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const template = templateId ? templates[templateId] : null;

  const [personalInfo, setPersonalInfo] = useState({
    fullName: currentUser?.displayName || "",
    email: currentUser?.email || "",
    phone: "",
    location: "",
    summary: "",
  });

  const [experiences, setExperiences] = useState([
    {
      id: "1",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: "1",
      institution: "",
      degree: "",
      graduationDate: "",
    },
  ]);

  const [skills, setSkills] = useState([{ id: "1", name: "" }]);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (!template) {
      navigate("/templates");
    }
  }, [template, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now().toString(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
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

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: Date.now().toString(),
        institution: "",
        degree: "",
        graduationDate: "",
      },
    ]);
  };

  const removeEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const updateEducation = (id, field, value) => {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const addSkill = () => {
    setSkills([...skills, { id: Date.now().toString(), name: "" }]);
  };

  const removeSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const updateSkill = (id, value) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, name: value } : skill
      )
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const getTemplateStyles = () => {
    switch (templateId) {
      case "tech":
        return {
          headerBg: "bg-blue-600",
          headerText: "text-white",
          accentColor: "text-blue-600",
          borderColor: "border-blue-200",
        };
      case "business":
        return {
          headerBg: "bg-gray-800",
          headerText: "text-white",
          accentColor: "text-gray-800",
          borderColor: "border-gray-200",
        };
      case "creative":
        return {
          headerBg: "bg-purple-600",
          headerText: "text-white",
          accentColor: "text-purple-600",
          borderColor: "border-purple-200",
        };
      case "healthcare":
        return {
          headerBg: "bg-green-600",
          headerText: "text-white",
          accentColor: "text-green-600",
          borderColor: "border-green-200",
        };
      case "education":
        return {
          headerBg: "bg-orange-600",
          headerText: "text-white",
          accentColor: "text-orange-600",
          borderColor: "border-orange-200",
        };
      case "sales":
        return {
          headerBg: "bg-red-600",
          headerText: "text-white",
          accentColor: "text-red-600",
          borderColor: "border-red-200",
        };
      default:
        return {
          headerBg: "bg-blue-600",
          headerText: "text-white",
          accentColor: "text-blue-600",
          borderColor: "border-blue-200",
        };
    }
  };

  const styles = getTemplateStyles();

  if (!template) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/templates")}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {/* Back to Templates */}
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {template.name}
                </h1>
                <p className="text-sm text-gray-600">
                  {template.niche} Template
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md transition-colors"
              >
                <Eye className="w-4 h-4 mr-2" />
                {showPreview ? "Edit" : "Preview"}
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                {/* Logout */}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className={`space-y-6 ${showPreview ? "hidden lg:block" : ""}`}>
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                <p className="text-gray-600">
                  Enter your basic contact details
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={personalInfo.fullName}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="New York, NY"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief summary of your professional background and goals..."
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Work Experience</h2>
                  <p className="text-gray-600">Add your work history</p>
                </div>
                <button
                  onClick={addExperience}
                  className="flex items-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-3 py-1 rounded-md text-sm transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </button>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="space-y-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Experience {index + 1}</h4>
                      {experiences.length > 1 && (
                        <button
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-600 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) =>
                            updateExperience(exp.id, "company", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Position
                        </label>
                        <input
                          type="text"
                          value={exp.position}
                          onChange={(e) =>
                            updateExperience(exp.id, "position", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Job Title"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Start Date
                        </label>
                        <input
                          type="text"
                          value={exp.startDate}
                          onChange={(e) =>
                            updateExperience(
                              exp.id,
                              "startDate",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="MM/YYYY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          End Date
                        </label>
                        <input
                          type="text"
                          value={exp.endDate}
                          onChange={(e) =>
                            updateExperience(exp.id, "endDate", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="MM/YYYY or Present"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        value={exp.description}
                        onChange={(e) =>
                          updateExperience(
                            exp.id,
                            "description",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe your responsibilities and achievements..."
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Education</h2>
                  <p className="text-gray-600">
                    Add your educational background
                  </p>
                </div>
                <button
                  onClick={addEducation}
                  className="flex items-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-3 py-1 rounded-md text-sm transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </button>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="space-y-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Education {index + 1}</h4>
                      {education.length > 1 && (
                        <button
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-600 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Institution
                      </label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) =>
                          updateEducation(edu.id, "institution", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="University Name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Degree
                        </label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) =>
                            updateEducation(edu.id, "degree", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Bachelor of Science"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Graduation Date
                        </label>
                        <input
                          type="text"
                          value={edu.graduationDate}
                          onChange={(e) =>
                            updateEducation(
                              edu.id,
                              "graduationDate",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="MM/YYYY"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Skills</h2>
                  <p className="text-gray-600">List your key skills</p>
                </div>
                <button
                  onClick={addSkill}
                  className="flex items-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-3 py-1 rounded-md text-sm transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex gap-2">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => updateSkill(skill.id, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Skill name"
                    />
                    {skills.length > 1 && (
                      <button
                        onClick={() => removeSkill(skill.id)}
                        className="text-red-600 hover:text-red-700 p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className={`${showPreview ? "" : "hidden lg:block"}`}>
            <div className="bg-white rounded-lg shadow-md sticky top-4">
              <div className="p-8 print:shadow-none print:border-none">
                {/* Header with template-specific styling */}
                <div
                  className={`${styles.headerBg} ${styles.headerText} p-6 -m-8 mb-6 rounded-t-lg`}
                >
                  <h1 className="text-3xl font-bold mb-2">
                    {personalInfo.fullName || "Your Name"}
                  </h1>
                  <div className="space-y-1 opacity-90">
                    {personalInfo.email && <div>{personalInfo.email}</div>}
                    {personalInfo.phone && <div>{personalInfo.phone}</div>}
                    {personalInfo.location && (
                      <div>{personalInfo.location}</div>
                    )}
                  </div>
                </div>

                {/* Summary */}
                {personalInfo.summary && (
                  <div className="mb-6">
                    <h2
                      className={`text-xl font-semibold ${styles.accentColor} mb-3 border-b ${styles.borderColor} pb-1`}
                    >
                      Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {personalInfo.summary}
                    </p>
                  </div>
                )}

                {/* Experience */}
                {experiences.some((exp) => exp.company || exp.position) && (
                  <div className="mb-6">
                    <h2
                      className={`text-xl font-semibold ${styles.accentColor} mb-3 border-b ${styles.borderColor} pb-1`}
                    >
                      Work Experience
                    </h2>
                    <div className="space-y-4">
                      {experiences
                        .filter((exp) => exp.company || exp.position)
                        .map((exp) => (
                          <div key={exp.id}>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {exp.position || "Position"}
                                </h3>
                                <p className="text-gray-700">
                                  {exp.company || "Company"}
                                </p>
                              </div>
                              <div className="text-gray-600 text-sm">
                                {exp.startDate} - {exp.endDate || "Present"}
                              </div>
                            </div>
                            {exp.description && (
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {exp.description}
                              </p>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Education */}
                {education.some((edu) => edu.institution || edu.degree) && (
                  <div className="mb-6">
                    <h2
                      className={`text-xl font-semibold ${styles.accentColor} mb-3 border-b ${styles.borderColor} pb-1`}
                    >
                      Education
                    </h2>
                    <div className="space-y-3">
                      {education
                        .filter((edu) => edu.institution || edu.degree)
                        .map((edu) => (
                          <div
                            key={edu.id}
                            className="flex justify-between items-start"
                          >
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {edu.degree || "Degree"}
                              </h3>
                              <p className="text-gray-700">
                                {edu.institution || "Institution"}
                              </p>
                            </div>
                            <div className="text-gray-600 text-sm">
                              {edu.graduationDate}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                {skills.some((skill) => skill.name) && (
                  <div>
                    <h2
                      className={`text-xl font-semibold ${styles.accentColor} mb-3 border-b ${styles.borderColor} pb-1`}
                    >
                      Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.name)
                        .map((skill) => (
                          <span
                            key={skill.id}
                            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                          >
                            {skill.name}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:shadow-none,
          .print\\:shadow-none * {
            visibility: visible;
          }
          .print\\:shadow-none {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
