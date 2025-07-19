import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const iconRef = useRef(null);
  const faqItemsRef = useRef([]);
  const answersRef = useRef([]);

  const faqs = [
    {
      question: "What is Resumpire?",
      answer:
        "Resumpire is an intuitive resume builder that helps you craft professional, ATS-friendly resumes using modern templates and real-time previews.",
    },
    {
      question: "Is Resumpire free to use?",
      answer:
        "Yes! You can build and preview resumes for free. Additional export or design features may be part of future premium plans.",
    },
    {
      question: "Can I download my resume as PDF or Word?",
      answer:
        "Absolutely. Resumpire supports exporting your resume as PDF, Word (.docx), or plain text.",
    },
    {
      question: "Will my resume work with ATS (Applicant Tracking Systems)?",
      answer:
        "Yes, our templates are optimized for ATS compatibility to increase your chances of getting noticed.",
    },
    {
      question: "Do I need to sign up to use Resumpire?",
      answer:
        "You can explore the builder, but signing up allows you to edit, and download resumes.",
    },
  ];

  useGSAP(
    () => {
      // Set initial states
      gsap.set(answersRef.current, { height: 0, opacity: 0 });
      gsap.set(faqItemsRef.current, { y: 50, opacity: 0 });

      // Header animation
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Icon floating animation
      gsap.to(iconRef.current, {
        y: -10,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // FAQ items entrance animation
      gsap.to(faqItemsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: "start",
        },
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Add hover animations for FAQ items
      faqItemsRef.current.forEach((item) => {
        if (!item) return;

        const handleMouseEnter = () => {
          gsap.to(item, {
            scale: 1.02,
            y: -5,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(item, {
            scale: 1,
            y: 0,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          item.removeEventListener("mouseenter", handleMouseEnter);
          item.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
    },
    { scope: containerRef }
  );

  const toggleFAQ = (index) => {
    const newOpenItems = new Set(openItems);
    const answerElement = answersRef.current[index];
    const questionElement =
      faqItemsRef.current[index]?.querySelector(".question-content");
    const chevron = faqItemsRef.current[index]?.querySelector(".chevron");

    if (openItems.has(index)) {
      // Close the item
      newOpenItems.delete(index);

      gsap.to(answerElement, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      gsap.to(chevron, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(questionElement, {
        color: "#1f2937",
        duration: 0.3,
      });
    } else {
      // Open the item
      newOpenItems.add(index);

      gsap.set(answerElement, { height: "auto" });
      const autoHeight = answerElement.offsetHeight;
      gsap.set(answerElement, { height: 0 });

      gsap.to(answerElement, {
        height: autoHeight,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(chevron, {
        rotation: 180,
        duration: 0.3,
        ease: "back.out(1.7)",
      });

      gsap.to(questionElement, {
        color: "#3b82f6",
        duration: 0.3,
      });

      // Add a subtle bounce to the entire item
      gsap.to(questionElement, {
        scale: 1.02,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    }

    setOpenItems(newOpenItems);
  };

  return (
    <section
      ref={containerRef}
      className="container mx-auto px-4 py-16 md:py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div ref={headerRef} className="text-center mb-12 md:mb-16 relative z-10">
        <div ref={iconRef} className="inline-block mb-4">
          <div className="h-16 w-16 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Got questions? We've got answers to help you get started with
          Resumpire.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={(el) => {
              faqItemsRef.current[index] = el;
            }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm overflow-hidden cursor-pointer transition-all duration-200"
            onClick={() => toggleFAQ(index)}
          >
            <div className="p-6 flex items-center justify-between">
              <div className="question-content flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 transition-colors duration-300">
                  {faq.question}
                </h3>
              </div>
              <div className="chevron ml-4 flex-shrink-0">
                <svg
                  className="h-6 w-6 text-gray-400 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div
              ref={(el) => {
                answersRef.current[index] = el;
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating action hint */}
      <div className="text-center mt-12 relative z-10">
        <p className="text-sm text-gray-500 animate-pulse">
          Click on any question to reveal the answer
        </p>
      </div>
    </section>
  );
};

export default FAQ;
