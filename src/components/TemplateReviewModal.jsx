import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  Code,
  Briefcase,
  Palette,
  Heart,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const TemplatePreviewModal = ({ template, onClose }) => {
  const modalRef = useRef();
  const contentRef = useRef();
  const [currentVariant, setCurrentVariant] = useState(0);

  useEffect(() => {
    gsap.from(modalRef.current, {
      duration: 0.4,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });

    gsap.from(contentRef.current, {
      duration: 0.3,
      opacity: 0,
      delay: 0.2,
      ease: "sine.inOut",
    });

    return () => {
      gsap.killTweensOf(modalRef.current);
      gsap.killTweensOf(contentRef.current);
    };
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      duration: 0.3,
      y: 50,
      opacity: 0,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  const handleVariantChange = (newVariant) => {
    gsap.to(contentRef.current, {
      duration: 0.2,
      opacity: 0,
      y: 10,
      ease: "power1.in",
      onComplete: () => {
        setCurrentVariant(newVariant);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: -10 },
          { duration: 0.3, opacity: 1, y: 0, ease: "power1.out" }
        );
      },
    });
  };

  const totalVariants = template?.variants?.length || 1;

  const handleNextVariant = () => {
    const nextVariant = (currentVariant + 1) % totalVariants;
    handleVariantChange(nextVariant);
  };

  const handlePrevVariant = () => {
    const prevVariant = (currentVariant - 1 + totalVariants) % totalVariants;
    handleVariantChange(prevVariant);
  };

  const sampleResumes = {
    tech: {
      fullName: "Alex Johnson",
      title: "Senior Software Engineer",
      email: "alex.johnson@example.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      summary: "Full-stack developer with 8+ years of experience building scalable web applications. Specialized in JavaScript frameworks and cloud architecture.",
      experiences: [{
        position: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        startDate: "06/2018",
        endDate: "Present",
        description: "Lead development team building enterprise SaaS solutions. Reduced deployment times by 40% through CI/CD implementation.",
      }],
      education: [{
        degree: "M.S. Computer Science",
        institution: "Stanford University",
        graduationDate: "05/2014",
      }],
      skills: ["JavaScript", "React", "Node.js", "AWS", "Python"],
      certifications: [{
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "03/2020",
      }],
    },
    business: {
      fullName: "Michael Chen",
      title: "Senior Business Analyst",
      email: "michael.chen@example.com",
      phone: "(555) 987-6543",
      location: "New York, NY",
      summary: "Results-driven business analyst with 7 years of experience in improving operational efficiency and driving revenue growth.",
      experiences: [{
        position: "Senior Business Analyst",
        company: "Global Finance Corp",
        startDate: "05/2017",
        endDate: "Present",
        description: "Led cross-functional teams to implement process improvements that increased operational efficiency by 35%.",
      }],
      education: [{
        degree: "MBA",
        institution: "Harvard Business School",
        graduationDate: "05/2015",
      }],
      skills: ["Data Analysis", "Process Improvement", "SQL", "Tableau", "Project Management"],
      certifications: [{
        name: "PMP Certification",
        issuer: "Project Management Institute",
        date: "08/2018",
      }],
    },
    creative: {
      fullName: "Sarah Williams",
      title: "Creative Director",
      email: "sarah.williams@example.com",
      phone: "(555) 456-7890",
      location: "Los Angeles, CA",
      summary: "Award-winning creative director with 10+ years of experience in branding and visual storytelling.",
      experiences: [{
        position: "Creative Director",
        company: "Design Innovations",
        startDate: "01/2016",
        endDate: "Present",
        description: "Lead creative team delivering innovative designs for Fortune 500 clients. Won 3 industry awards in 2022.",
      }],
      education: [{
        degree: "BFA in Graphic Design",
        institution: "Rhode Island School of Design",
        graduationDate: "05/2012",
      }],
      skills: ["Adobe Creative Suite", "Branding", "Art Direction", "UI/UX Design", "Photography"],
      certifications: [{
        name: "Adobe Certified Expert",
        issuer: "Adobe",
        date: "06/2019",
      }],
    },
    healthcare: {
      fullName: "Dr. James Wilson",
      title: "Cardiologist",
      email: "j.wilson@example.com",
      phone: "(555) 789-0123",
      location: "Chicago, IL",
      summary: "Board-certified cardiologist with 12 years of clinical experience specializing in interventional cardiology.",
      experiences: [{
        position: "Senior Cardiologist",
        company: "Metropolitan Hospital",
        startDate: "07/2014",
        endDate: "Present",
        description: "Performed over 1,000 successful cardiac procedures. Lead researcher in clinical trials for new treatments.",
      }],
      education: [{
        degree: "MD",
        institution: "Johns Hopkins University",
        graduationDate: "05/2008",
      }],
      skills: ["Interventional Cardiology", "Patient Care", "Clinical Research", "Echocardiography", "Team Leadership"],
      certifications: [{
        name: "Board Certified Cardiologist",
        issuer: "American Board of Internal Medicine",
        date: "06/2012",
      }],
    },
    education: {
      fullName: "Emily Rodriguez",
      title: "High School Principal",
      email: "e.rodriguez@example.com",
      phone: "(555) 234-5678",
      location: "Austin, TX",
      summary: "Dedicated education professional with 15 years of experience fostering academic excellence and student development.",
      experiences: [{
        position: "High School Principal",
        company: "Central High School",
        startDate: "08/2015",
        endDate: "Present",
        description: "Implemented programs that increased graduation rates by 20% and college acceptance by 15%.",
      }],
      education: [{
        degree: "Ed.D in Educational Leadership",
        institution: "University of Texas",
        graduationDate: "05/2014",
      }],
      skills: ["Curriculum Development", "Staff Management", "Budget Planning", "Student Counseling", "Educational Policy"],
      certifications: [{
        name: "Texas Principal Certification",
        issuer: "Texas Education Agency",
        date: "06/2015",
      }],
    },
    sales: {
      fullName: "David Kim",
      title: "Regional Sales Manager",
      email: "d.kim@example.com",
      phone: "(555) 345-6789",
      location: "Miami, FL",
      summary: "Top-performing sales professional with a proven track record of exceeding targets and building high-performing teams.",
      experiences: [{
        position: "Regional Sales Manager",
        company: "Enterprise Solutions Inc.",
        startDate: "03/2018",
        endDate: "Present",
        description: "Grew regional sales by 150% over 3 years. Managed team of 12 account executives.",
      }],
      education: [{
        degree: "B.S. in Business Administration",
        institution: "University of Florida",
        graduationDate: "05/2014",
      }],
      skills: ["Sales Strategy", "CRM Software", "Negotiation", "Team Leadership", "Market Analysis"],
      certifications: [{
        name: "Certified Sales Professional",
        issuer: "National Association of Sales Professionals",
        date: "03/2019",
      }],
    },
  };

  const resumeData = sampleResumes[template?.id] || sampleResumes.tech;

  const colorClasses = {
    blue: "bg-blue-600",
    gray: "bg-gray-800",
    purple: "bg-purple-600",
    green: "bg-green-600",
    orange: "bg-orange-600",
    red: "bg-red-600",
  };

  const getIcon = (niche) => {
    switch (niche) {
      case "Technology": return <Code className="h-5 w-5" />;
      case "Business": return <Briefcase className="h-5 w-5" />;
      case "Design & Creative": return <Palette className="h-5 w-5" />;
      case "Healthcare": return <Heart className="h-5 w-5" />;
      case "Education": return <GraduationCap className="h-5 w-5" />;
      case "Sales": return <TrendingUp className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center shadow-sm">
          <div className="flex items-center space-x-3">
            {getIcon(template?.niche)}
            <h3 className="text-xl font-semibold text-gray-800">
              {template?.name} Preview
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close preview"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div ref={contentRef} className="p-8">
          <div className={`${colorClasses[template?.color] || "bg-blue-600"} text-white p-8 -mx-8 -mt-8 mb-8 rounded-t-lg`}>
            <h1 className="text-3xl font-bold mb-2">{resumeData.fullName}</h1>
            <p className="text-lg opacity-90 mb-4">{resumeData.title}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm opacity-90">
              {resumeData.email && <span>{resumeData.email}</span>}
              {resumeData.phone && <span>{resumeData.phone}</span>}
              {resumeData.location && <span>{resumeData.location}</span>}
            </div>
          </div>

          {resumeData.summary && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-1 border-b border-gray-200">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
            </div>
          )}

          {totalVariants > 1 && (
            <div className="flex justify-between mt-6 space-x-4">
              <button onClick={handlePrevVariant} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
                Previous
              </button>
              <button onClick={handleNextVariant} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewModal;
