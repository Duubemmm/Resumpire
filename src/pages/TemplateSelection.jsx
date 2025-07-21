import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { LogOut, X, Eye, Edit3 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Logo from "../assets/resumelogo.png";
import img3 from "../assets/resume3.webp";
import img4 from "../assets/resume4.webp";

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
];

const getColorClasses = (color) => {
  switch (color) {
    case "blue":
      return "border-blue-200 hover:border-blue-300 bg-blue-50";
    case "gray":
      return "border-gray-200 hover:border-gray-300 bg-gray-50";
    case "purple":
      return "border-purple-200 hover:border-purple-300 bg-purple-50";
    case "green":
      return "border-green-200 hover:border-green-300 bg-green-50";
    case "orange":
      return "border-orange-200 hover:border-orange-300 bg-orange-50";
    case "red":
      return "border-red-200 hover:border-red-300 bg-red-50";
    default:
      return "border-gray-200 hover:border-gray-300 bg-gray-50";
  }
};

export default function TemplateSelection() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  useGSAP(
    () => {
      // Set initial visibility
      gsap.set(cardsRef.current, { opacity: 1, y: 0 });

      // Header animation
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

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
      });
      // Add hover animations for cards
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
    },
    { scope: containerRef }
  );

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const openModal = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  const handleUseTemplate = (templateId) => {
    navigate(`/builder/${templateId}`);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        ref={headerRef}
        className="bg-white shadow-sm border-b border-teal-500"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={Logo} alt="ResumePire Logo" className="w-10 h-10" />
              <span className="text-xs font-bold text-blue-500 italic sm:text-2xl">
                ResumePire
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">
                Welcome, {currentUser?.displayName || currentUser?.email}!
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                type="button"
              >
                <LogOut className="w-4 h-4 mr-2" aria-label="Log out" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-4">
            Choose Your Resume Template
          </h1>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Select a template that matches your industry and professional style.
            Each template is optimized for ATS systems and designed by industry
            experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create new resume card */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            className="bg-white rounded-xl border-2 border-dashed border-gray-300 min-h-[300px] flex flex-col items-center justify-center cursor-pointer transition-all hover:border-gray-400 hover:shadow-md"
            onClick={() => navigate("/builder/new")}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-gray-700">
              Create New Resume
            </p>
            <p className="text-sm text-gray-500 mt-1">Start from scratch</p>
          </div>

          {/* Template Cards */}
          {Imagetemplates.map((template, index) => (
            <div
              key={template.id}
              ref={(el) => {
                if (el) cardsRef.current[index + 1] = el;
              }}
              className={`rounded-xl overflow-hidden shadow-sm transition-all border ${getColorClasses(
                template.color
              )} hover:shadow-md cursor-pointer`}
              onClick={(e) => {
                e.stopPropagation();
                handleUseTemplate(template.id);
              }}

              // onClick={() => openModal(template)}
            >
              {/* Template Image */}
              <div className="relative overflow-hidden">
                <img
                  src={template.image}
                  alt={`Resume Template ${template.id}`}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay with buttons on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(template);
                      }}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 $                       
                        
                  {colorClasses.preview}`}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className={`flex items-center px-4 py-2 rounded-lg text-white font-medium transition-all transform hover:scale-105 ${getColorClasses}`}
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      Customize
                    </button>
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-800 mb-1">
                    {template.name}
                  </h3>
                  <div
                    className={`w-3 h-3 rounded-full ${getColorClasses}`}
                  ></div>
                </div>

                <p className="text-sm text-gray-500 truncate">
                  {template.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => openModal(template)}
                    className={`flex-1 flex items-center justify-center px-3 py-2 rounded-lg font-medium transition-all ${getColorClasses}`}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className={`flex-1 flex items-center justify-center px-3 py-2 rounded-lg text-white font-medium transition-all ${getColorClasses}`}
                  >
                    <Edit3 className="w-4 h-4 mr-1" />
                    Customize
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedTemplate && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#e8ebec] to-[#e3e7f3] bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">{selectedTemplate.name}</h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedTemplate.image}
                alt={`Preview of ${selectedTemplate.name}`}
                className="w-full h-auto border rounded-lg"
              />
              <div className="mt-4">
                <p className="text-gray-700 mb-4">
                  {selectedTemplate.description}
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUseTemplate(selectedTemplate.id)}
                    className={`px-4 py-2 rounded-md text-white ${
                      selectedTemplate.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : selectedTemplate.color === "purple"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-gray-600 hover:bg-gray-700"
                    }`}
                  >
                    Use This Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* Modal for Template Preview */
}
//       {isModalOpen && selectedTemplate && (
//         <div className="fixed inset-0 bg-gradient-to-br from-[#e8ebec] to-[#e3e7f3] bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
//             <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
//               <h2 className="text-xl font-bold">{selectedTemplate.name}</h2>
//               <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="p-6">
//               <img
//                 src={selectedTemplate.image || "/placeholder.svg"}
//                 alt={`Preview of ${selectedTemplate.name}`}
//                 className="w-full h-auto border rounded-lg"
//               />
//               <div className="mt-4">
//                 <p className="text-gray-700 mb-4">{selectedTemplate.description}</p>
//                 <div className="flex justify-end space-x-3">
//                   <button onClick={closeModal} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
//                     Cancel
//                   </button>
//                   <button
//                     onClick={() => handlePreviewTemplate(selectedTemplate.id)}
//                     className={`flex items-center px-4 py-2 rounded-md font-medium transition-all ${
//                       getColorClasses(selectedTemplate.color).preview
//                     }`}
//                   >
//                     <Eye className="w-4 h-4 mr-2" />
//                     Preview Template
//                   </button>
//                   <button
//                     onClick={() => handleUseTemplate(selectedTemplate.id)}
//                     className={`flex items-center px-4 py-2 rounded-md text-white font-medium transition-all ${
//                       getColorClasses(selectedTemplate.color).button
//                     }`}
//                   >
//                     <Edit3 className="w-4 h-4 mr-2" />
//                     Customize Template
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
