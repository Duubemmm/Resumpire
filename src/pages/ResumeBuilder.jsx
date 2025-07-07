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
  const [certifications, setCertifications] = useState([
    {
      id: "1",
      name: "",
      issuer: "",
      date: "",
    },
  ]);
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
  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        id: Date.now().toString(),
        name: "",
        issuer: "",
        date: "",
      },
    ]);
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

  const handlePrint = () => {
    window.print();
  };

  const getTemplateStyles = () => {
    switch (templateId) {
      case "tech":
        return {
          headerBg: "bg-gradient-to-r from-blue-500 to-cyan-600",
          headerText: "text-white",
          accentColor: "text-cyan-600",
          borderColor: "border-cyan-100",
          skillBg: "bg-cyan-100 text-cyan-800",
          sectionBg: "bg-gray-50",
          buttonBg:
            "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700",
        };
      case "business":
        return {
          headerBg: "bg-gradient-to-r from-gray-700 to-gray-900",
          headerText: "text-white",
          accentColor: "text-gray-800",
          borderColor: "border-gray-200",
          skillBg: "bg-gray-100 text-gray-800",
          buttonBg:
            "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900",
        };
      case "creative":
        return {
          headerBg: "bg-gradient-to-r from-purple-800 to-indigo-800",
          headerText: "text-white",
          accentColor: "text-purple-600",
          borderColor: "border-purple-200",
          skillBg: "bg-purple-100 text-purple-800",
          buttonBg:
            "bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700",
        };
      case "healthcare":
        return {
          headerBg: "bg-gradient-to-r from-green-600 to-emerald-600",
          headerText: "text-white",
          accentColor: "text-green-600",
          borderColor: "border-green-200",
          skillBg: "bg-green-100 text-green-800",
          buttonBg:
            "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
        };
      case "education":
        return {
          headerBg: "bg-gradient-to-r from-orange-500 to-amber-600",
          headerText: "text-white",
          accentColor: "text-orange-600",
          borderColor: "border-orange-200",
          skillBg: "bg-orange-100 text-orange-800",
          buttonBg:
            "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700",
        };
      case "sales":
        return {
          headerBg: "bg-gradient-to-r from-red-600 to-pink-600",
          headerText: "text-white",
          accentColor: "text-red-600",
          borderColor: "border-red-200",
          skillBg: "bg-red-100 text-red-800",
          buttonBg:
            "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700",
        };
      default:
        return {
          headerBg: "bg-gradient-to-r from-blue-500 to-indigo-600",
          headerText: "text-white",
          accentColor: "text-blue-600",
          borderColor: "border-blue-200",
          skillBg: "bg-blue-100 text-blue-800",
          buttonBg:
            "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
        };
    }
  };

  const styles = getTemplateStyles();

  if (!template) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/templates")}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-1 group-hover:-translate-x-0.5 transition-transform" />
                <span className="hidden sm:inline">Back to Templates</span>
              </button>
              <div className="border-l border-gray-300 h-6"></div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {template.name}
                </h1>
                <p className="text-sm text-gray-600">
                  {template.niche} Template
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className={`flex items-center border ${
                  showPreview
                    ? "border-gray-400 bg-gray-100"
                    : "border-gray-300 hover:border-gray-400"
                } text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg transition-all duration-200`}
              >
                <Eye className="w-4 h-4 mr-2" />
                {showPreview ? "Edit Resume" : "Preview Resume"}
              </button>

              <button
                onClick={handlePrint}
                className={`flex items-center ${styles.buttonBg} text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200`}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>

              <button
                onClick={handleLogout}
                className="p-2 text-gray-500 hover:text-red-600 transition-colors rounded-full hover:bg-gray-100"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section - Enhanced UI */}
          <div className={`space-y-6 ${showPreview ? "hidden lg:block" : ""}`}>
            {/* Personal Information Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-1 h-8 ${styles.accentColor} bg-current mr-3 rounded-full`}
                  ></div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Personal Information
                    </h2>
                    <p className="text-sm text-gray-500">
                      Basic contact details and professional summary
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={personalInfo.fullName}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            fullName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Location
                      </label>
                      <input
                        type="text"
                        value={personalInfo.location}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            location: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="New York, NY"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Professional Summary
                    </label>
                    <textarea
                      value={personalInfo.summary}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          summary: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[120px]"
                      placeholder="Brief summary of your professional background and goals..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div
                      className={`w-1 h-8 ${styles.accentColor} bg-current mr-3 rounded-full`}
                    ></div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Work Experience
                      </h2>
                      <p className="text-sm text-gray-500">
                        Your professional work history
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={addExperience}
                    className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    Add Experience
                  </button>
                </div>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className="group relative p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                            {index + 1}
                          </span>
                          <h3 className="font-medium text-gray-800">
                            Experience
                          </h3>
                        </div>
                        {experiences.length > 1 && (
                          <button
                            onClick={() => removeExperience(exp.id)}
                            className="text-gray-400 hover:text-red-600 p-1 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Company
                          </label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) =>
                              updateExperience(
                                exp.id,
                                "company",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Position
                          </label>
                          <input
                            type="text"
                            value={exp.position}
                            onChange={(e) =>
                              updateExperience(
                                exp.id,
                                "position",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="Job Title"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
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
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="MM/YYYY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            End Date
                          </label>
                          <input
                            type="text"
                            value={exp.endDate}
                            onChange={(e) =>
                              updateExperience(
                                exp.id,
                                "endDate",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="MM/YYYY or Present"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
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
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[100px]"
                          placeholder="Describe your responsibilities and achievements..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div
                      className={`w-1 h-8 ${styles.accentColor} bg-current mr-3 rounded-full`}
                    ></div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Education
                      </h2>
                      <p className="text-sm text-gray-500">
                        Your academic background
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={addEducation}
                    className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    Add Education
                  </button>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={edu.id}
                      className="group relative p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                            {index + 1}
                          </span>
                          <h3 className="font-medium text-gray-800">
                            Education
                          </h3>
                        </div>
                        {education.length > 1 && (
                          <button
                            onClick={() => removeEducation(edu.id)}
                            className="text-gray-400 hover:text-red-600 p-1 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Institution
                        </label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) =>
                            updateEducation(
                              edu.id,
                              "institution",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          placeholder="University Name"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Degree
                          </label>
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) =>
                              updateEducation(edu.id, "degree", e.target.value)
                            }
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="Bachelor of Science"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
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
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="MM/YYYY"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div
                      className={`w-1 h-8 ${styles.accentColor} bg-current mr-3 rounded-full`}
                    ></div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Skills
                      </h2>
                      <p className="text-sm text-gray-500">
                        Your key skills and competencies
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={addSkill}
                    className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    Add Skill
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-3">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => updateSkill(skill.id, e.target.value)}
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Skill name"
                      />
                      {skills.length > 1 && (
                        <button
                          onClick={() => removeSkill(skill.id)}
                          className="p-2.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div
                      className={`w-1 h-8 ${styles.accentColor} bg-current mr-3 rounded-full`}
                    ></div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Certifications
                      </h2>
                      <p className="text-sm text-gray-500">
                        Your professional certifications
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={addCertification}
                    className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    Add Certification
                  </button>
                </div>

                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={cert.id}
                      className="group relative p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                            {index + 1}
                          </span>
                          <h3 className="font-medium text-gray-800">
                            Certification
                          </h3>
                        </div>
                        {certifications.length > 1 && (
                          <button
                            onClick={() => removeCertification(cert.id)}
                            className="text-gray-400 hover:text-red-600 p-1 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Certification Name
                          </label>
                          <input
                            type="text"
                            value={cert.name}
                            onChange={(e) =>
                              updateCertification(
                                cert.id,
                                "name",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            placeholder="e.g., AWS Certified Solutions Architect"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Issuing Organization
                            </label>
                            <input
                              type="text"
                              value={cert.issuer}
                              onChange={(e) =>
                                updateCertification(
                                  cert.id,
                                  "issuer",
                                  e.target.value
                                )
                              }
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              placeholder="e.g., Amazon Web Services"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Date Earned
                            </label>
                            <input
                              type="text"
                              value={cert.date}
                              onChange={(e) =>
                                updateCertification(
                                  cert.id,
                                  "date",
                                  e.target.value
                                )
                              }
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                              placeholder="MM/YYYY"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section - Enhanced Design */}
          <div className={`${showPreview ? "" : "hidden lg:block"}`}>
            <div className="sticky top-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 print:shadow-none print:border-none">
                {/* Header with template-specific styling */}
                <div className={`${styles.headerBg} ${styles.headerText} p-8`}>
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl font-bold mb-2 tracking-tight">
                      {personalInfo.fullName || "Your Name"}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm opacity-90">
                      {personalInfo.email && (
                        <span className="flex items-center">
                          <svg
                            className="w-3.5 h-3.5 mr-1.5 opacity-70"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                          </svg>
                          {personalInfo.email}
                        </span>
                      )}
                      {personalInfo.phone && (
                        <span className="flex items-center">
                          <svg
                            className="w-3.5 h-3.5 mr-1.5 opacity-70"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            ></path>
                          </svg>
                          {personalInfo.phone}
                        </span>
                      )}
                      {personalInfo.location && (
                        <span className="flex items-center">
                          <svg
                            className="w-3.5 h-3.5 mr-1.5 opacity-70"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          {personalInfo.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Summary Section */}
                  {personalInfo.summary && (
                    <div>
                      <h2
                        className={`text-xl font-semibold ${styles.accentColor} mb-3 pb-1 border-b ${styles.borderColor}`}
                      >
                        Professional Summary
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {personalInfo.summary}
                      </p>
                    </div>
                  )}

                  {/* Experience Section */}
                  {experiences.some((exp) => exp.company || exp.position) && (
                    <div>
                      <h2
                        className={`text-xl font-semibold ${styles.accentColor} mb-3 pb-1 border-b ${styles.borderColor}`}
                      >
                        Work Experience
                      </h2>
                      <div className="space-y-6">
                        {experiences
                          .filter((exp) => exp.company || exp.position)
                          .map((exp) => (
                            <div
                              key={exp.id}
                              className="pl-4 border-l-2 border-gray-200"
                            >
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                <div>
                                  <h3 className="font-semibold text-gray-900 text-lg">
                                    {exp.position || "Position"}
                                  </h3>
                                  <p className="text-gray-700 font-medium">
                                    {exp.company || "Company"}
                                  </p>
                                </div>
                                <div className="text-gray-600 text-sm mt-1 sm:mt-0">
                                  {exp.startDate} — {exp.endDate || "Present"}
                                </div>
                              </div>
                              {exp.description && (
                                <p className="text-gray-700 leading-relaxed">
                                  {exp.description}
                                </p>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Education Section */}
                  {education.some((edu) => edu.institution || edu.degree) && (
                    <div>
                      <h2
                        className={`text-xl font-semibold ${styles.accentColor} mb-3 pb-1 border-b ${styles.borderColor}`}
                      >
                        Education
                      </h2>
                      <div className="space-y-5">
                        {education
                          .filter((edu) => edu.institution || edu.degree)
                          .map((edu) => (
                            <div
                              key={edu.id}
                              className="pl-4 border-l-2 border-gray-200"
                            >
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                <div>
                                  <h3 className="font-semibold text-gray-900 text-lg">
                                    {edu.degree || "Degree"}
                                  </h3>
                                  <p className="text-gray-700 font-medium">
                                    {edu.institution || "Institution"}
                                  </p>
                                </div>
                                <div className="text-gray-600 text-sm">
                                  {edu.graduationDate}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Certifications Section */}
                  {certifications.some((cert) => cert.name || cert.issuer) && (
                    <div>
                      <h2
                        className={`text-xl font-semibold ${styles.accentColor} mb-3 pb-1 border-b ${styles.borderColor}`}
                      >
                        Certifications
                      </h2>
                      <div className="space-y-5">
                        {certifications
                          .filter((cert) => cert.name || cert.issuer)
                          .map((cert) => (
                            <div
                              key={cert.id}
                              className="pl-4 border-l-2 border-gray-200"
                            >
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                <div>
                                  <h3 className="font-semibold text-gray-900 text-lg">
                                    {cert.name || "Certification Name"}
                                  </h3>
                                  <p className="text-gray-700 font-medium">
                                    {cert.issuer || "Issuing Organization"}
                                  </p>
                                </div>
                                <div className="text-gray-600 text-sm">
                                  {cert.date}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Skills Section */}
                  {skills.some((skill) => skill.name) && (
                    <div>
                      <h2
                        className={`text-xl font-semibold ${styles.accentColor} mb-3 pb-1 border-b ${styles.borderColor}`}
                      >
                        Skills
                      </h2>
                      <div className="flex flex-wrap gap-3">
                        {skills
                          .filter((skill) => skill.name)
                          .map((skill) => (
                            <span
                              key={skill.id}
                              className={`px-3 py-1.5 ${styles.skillBg} rounded-full text-sm font-medium`}
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
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
