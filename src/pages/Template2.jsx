import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Download, Eye, LogOut } from "lucide-react";
import { useAuth } from "../auth/AuthContext";

export default function Template2() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({
    fullName: currentUser?.displayName || "Ellen Johnson",
    email: currentUser?.email || "help@enhancv.com",
    phone: "",
    location: "San Francisco, California",
    summary: "Motivated Digital Marketing Manager with over 3 years of experience in driving user acquisition and growth through strategic paid campaigns. Expert in data analysis, creative optimization, and cross-functional collaboration to achieve business objectives. Proven track record of scaling campaigns and enhancing ROI.",
  });

  const [experiences, setExperiences] = useState([
    {
      id: "1",
      company: "Tech Innovate",
      position: "Senior Digital Marketing Specialist",
      startDate: "01/2022",
      endDate: "Present",
      location: "San Francisco, CA",
      description: `- Led the development and execution of comprehensive digital marketing campaigns across Meta, Google, and TikTok, increasing user acquisition by 45% within 12 months.
- Managed a $500K quarterly budget for paid acquisition channels, optimizing spend for a 30% improvement in ROAS.
- Implemented advanced targeting and retargeting strategies that reduced CPA by 20%, while increasing conversion rates by 15%.
- Conducted A/B testing on over 100 ad creatives, identifying top performers that led to a 25% increase in engagement.
- Collaborated with cross-functional teams to align marketing efforts with product launches, resulting in a 40% increase in product adoption.
- Analyzed campaign data to provide actionable insights, leading to a strategic pivot that captured a new user segment and contributed to a 35% increase in market share.`
    },
    {
      id: "2",
      company: "MarketGuru",
      position: "Digital Marketing Manager",
      startDate: "06/2019",
      endDate: "12/2021",
      location: "San Francisco, CA",
      description: `- Managed and scaled paid search and social campaigns across Snapchat and Apple Search Ads, achieving a 50% increase in leads.
- Designed and executed a landing page optimization strategy that lifted conversion rates by 18%.
- Utilized Looker and Google Analytics to monitor campaign performance, driving a 10% decrease in bounce rates.
- Orchestrated the creative testing process, enhancing ad performance and contributing to a 22% increase in CTR.
- Collaborated with engineering to integrate new tracking systems, improving data accuracy and campaign efficiency.`
    },
    {
      id: "3",
      company: "Advantage Media",
      position: "Performance Marketing Analyst",
      startDate: "03/2017",
      endDate: "05/2019",
      location: "San Francisco, CA",
      description: `- Analyzed performance data across multiple digital channels, identifying trends that informed strategic decisions.
- Supported the execution of campaigns that resulted in a 15% increase in user engagement.
- Developed and maintained reporting dashboards for real-time performance tracking, enhancing team responsiveness.
- Assisted in managing a portfolio of digital ads, optimizing for a 10% improvement in ad efficiency.`
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: "1",
      institution: "University of California, Berkeley",
      degree: "Master of Science in Marketing Analytics",
      graduationDate: "01/2015 - 01/2017",
      location: "Berkeley, CA"
    },
    {
      id: "2",
      institution: "San Francisco State University",
      degree: "Bachelor of Science in Business Administration",
      graduationDate: "01/2011 - 01/2015",
      location: "San Francisco, CA"
    }
  ]);
  
  const [skills, setSkills] = useState([
    { id: "1", name: "Data Analysis" },
    { id: "2", name: "Paid Acquisition" },
    { id: "3", name: "Retargeting" },
    { id: "4", name: "ROAS Optimization" },
    { id: "5", name: "Cross-Functional Collaboration" },
    { id: "6", name: "Google Analytics" },
    { id: "7", name: "Looker" },
    { id: "8", name: "Appsflyer" },
    { id: "9", name: "Meta Advertising" },
    { id: "10", name: "Google Ads" },
    { id: "11", name: "TikTok Ads" },
    { id: "12", name: "Snapchat Ads" },
    { id: "13", name: "SQL" }
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: "1",
      name: "Advanced Google Analytics",
      issuer: "Google",
      date: "",
      description: "Focused on mastering Google Analytics for deep insights into user behavior."
    },
    {
      id: "2",
      name: "Effective Creative Testing",
      issuer: "Coursera",
      date: "",
      description: "Specialized in evaluating ad creative performance to maximize engagement."
    }
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: "1",
      title: "45% User Acquisition Increase",
      description: "Spearheaded digital marketing initiatives at Tech Innovate that led to a 45% increase in user acquisition."
    },
    {
      id: "2",
      title: "30% ROAS Improvement",
      description: "Optimized ad spend across digital platforms at Tech Innovate, resulting in a 30% improvement in ROAS."
    },
    {
      id: "3",
      title: "Market Share Expansion",
      description: "Identified and captured a new user segment, contributing to a 35% increase in market share."
    },
    {
      id: "4",
      title: "Conversion Rate Optimization",
      description: "Implemented a successful landing page optimization strategy, lifting conversion rates by 18%."
    }
  ]);

  const [languages, setLanguages] = useState([
    { id: "1", name: "English", level: "Native" },
    { id: "2", name: "Spanish", level: "Advanced" }
  ]);

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
        location: "",
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
        location: ""
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
        description: ""
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

  const addAchievement = () => {
    setAchievements([
      ...achievements,
      {
        id: Date.now().toString(),
        title: "",
        description: ""
      },
    ]);
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

  const addLanguage = () => {
    setLanguages([
      ...languages,
      {
        id: Date.now().toString(),
        name: "",
        level: ""
      },
    ]);
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with navigation */}
      <div className="flex justify-between items-center bg-gray-100 p-4 shadow">
        <button
          onClick={() => navigate("/templates")}
          className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft size={18} /> Back to Templates
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrint}
            className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded flex items-center gap-1"
          >
            <Download size={16} /> Download
          </button>
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row container mx-auto px-4 py-6 gap-8">
        {/* Form Section */}
        <div className="lg:w-1/2 space-y-6">
          {/* Personal Information Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h2>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={personalInfo.fullName}
                    onChange={(e) => setPersonalInfo({...personalInfo, fullName: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={personalInfo.phone}
                    onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                  <input
                    type="text"
                    value={personalInfo.location}
                    onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Professional Summary</label>
                <textarea
                  value={personalInfo.summary}
                  onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[120px]"
                />
              </div>
            </div>
          </div>

          {/* Work Experience Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
              <button
                onClick={addExperience}
                className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-1.5" /> Add Experience
              </button>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="group relative p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      <h3 className="font-medium text-gray-800">Experience</h3>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description (bullet points, separate with new lines)</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[120px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Education</h2>
              <button
                onClick={addEducation}
                className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-1.5" /> Add Education
              </button>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={edu.id} className="group relative p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      <h3 className="font-medium text-gray-800">Education</h3>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Graduation Date</label>
                      <input
                        type="text"
                        value={edu.graduationDate}
                        onChange={(e) => updateEducation(edu.id, "graduationDate", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                    <input
                      type="text"
                      value={edu.location}
                      onChange={(e) => updateEducation(edu.id, "location", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
              <button
                onClick={addSkill}
                className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-1.5" /> Add Skill
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => updateSkill(skill.id, e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                  <button
                    onClick={() => removeSkill(skill.id)}
                    className="p-2.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Trash2 className="w-4.5 h-4.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Certifications</h2>
              <button
                onClick={addCertification}
                className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-1.5" /> Add Certification
              </button>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={cert.id} className="group relative p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      <h3 className="font-medium text-gray-800">Certification</h3>
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

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Certification Name</label>
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => updateCertification(cert.id, "name", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Issuing Organization</label>
                      <input
                        type="text"
                        value={cert.issuer}
                        onChange={(e) => updateCertification(cert.id, "issuer", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Date Earned</label>
                      <input
                        type="text"
                        value={cert.date}
                        onChange={(e) => updateCertification(cert.id, "date", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                    <textarea
                      value={cert.description}
                      onChange={(e) => updateCertification(cert.id, "description", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[80px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Key Achievements</h2>
              <button
                onClick={addAchievement}
                className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-1.5" /> Add Achievement
              </button>
            </div>

            <div className="space-y-6">
              {achievements.map((ach, index) => (
                <div key={ach.id} className="group relative p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      <h3 className="font-medium text-gray-800">Achievement</h3>
                    </div>
                    {achievements.length > 1 && (
                      <button
                        onClick={() => removeAchievement(ach.id)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-4.5 h-4.5" />
                      </button>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Title</label>
                    <input
                      type="text"
                      value={ach.title}
                      onChange={(e) => updateAchievement(ach.id, "title", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                    <textarea
                      value={ach.description}
                      onChange={(e) => updateAchievement(ach.id, "description", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[80px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
              <button
                onClick={addLanguage}
                className="flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 mr-1.5" /> Add Language
              </button>
            </div>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={lang.id} className="group relative p-5 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      <h3 className="font-medium text-gray-800">Language</h3>
                    </div>
                    {languages.length > 1 && (
                      <button
                        onClick={() => removeLanguage(lang.id)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-4.5 h-4.5" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Language</label>
                      <input
                        type="text"
                        value={lang.name}
                        onChange={(e) => updateLanguage(lang.id, "name", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Proficiency Level</label>
                      <input
                        type="text"
                        value={lang.level}
                        onChange={(e) => updateLanguage(lang.id, "level", e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="lg:w-1/2 sticky top-6 h-fit">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 print:shadow-none print:border-none">
            {/* Header */}
            <div className="bg-gray-50 p-8 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.fullName}</h1>
              <h2 className="text-lg text-gray-600 mb-4">Digital Marketing Manager | Growth Hacking | Data Analysis</h2>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                {personalInfo.email && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    {personalInfo.email}
                  </span>
                )}
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  linkedin.com
                </span>
                {personalInfo.location && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {personalInfo.location}
                  </span>
                )}
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Experience Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">EXPERIENCE</h2>
                <div className="space-y-6">
                  {experiences.filter(exp => exp.company || exp.position).map((exp) => (
                    <div key={exp.id} className="pl-4 border-l-2 border-gray-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h3 className="font-bold text-gray-900">{exp.position}</h3>
                          <p className="text-gray-700 font-medium">{exp.company}</p>
                        </div>
                        <div className="text-gray-600 text-sm mt-1 sm:mt-0">
                          {exp.startDate} - {exp.endDate} {exp.location && `| ${exp.location}`}
                        </div>
                      </div>
                      {exp.description && (
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {exp.description.split('\n').map((item, i) => (
                            item.trim() && <li key={i}>{item.replace(/^- /, '').trim()}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">EDUCATION</h2>
                <div className="space-y-5">
                  {education.filter(edu => edu.institution || edu.degree).map((edu) => (
                    <div key={edu.id} className="pl-4 border-l-2 border-gray-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                          <p className="text-gray-700 font-medium">{edu.institution}</p>
                        </div>
                        <div className="text-gray-600 text-sm">
                          {edu.graduationDate} {edu.location && `| ${edu.location}`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages Section */}
              {languages.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">LANGUAGES</h2>
                  <div className="flex flex-wrap gap-4">
                    {languages.map((lang) => (
                      <div key={lang.id} className="text-gray-700">
                        <span className="font-medium">{lang.name}</span> <span className="text-gray-500">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary Section */}
              {personalInfo.summary && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">SUMMARY</h2>
                  <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
                </div>
              )}

              {/* Key Achievements Section */}
              {achievements.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">KEY ACHIEVEMENTS</h2>
                  <div className="space-y-4">
                    {achievements.map((ach) => (
                      <div key={ach.id}>
                        <h3 className="font-bold text-gray-900">{ach.title}</h3>
                        <p className="text-gray-700">{ach.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Section */}
              {skills.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">SKILLS</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill) => (
                      <div key={skill.id} className="text-gray-700">{skill.name}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications Section */}
              {certifications.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">CERTIFICATION</h2>
                  <div className="space-y-4">
                    {certifications.map((cert) => (
                      <div key={cert.id}>
                        <h3 className="font-bold text-gray-900">{cert.name}</h3>
                        <p className="text-gray-700">{cert.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="pt-4 mt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                www.enhancv.com | Powered by Enhancv
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}