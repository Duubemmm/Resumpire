import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Features = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const outerBoxesRef = useRef([]);

  // Debugging effect to log refs
  useEffect(() => {
    console.log("Container ref:", containerRef.current);
    console.log("Cards refs:", cardsRef.current);
    console.log("Outer boxes refs:", outerBoxesRef.current);
  }, []);

  useGSAP(
    () => {
      // First make sure cards are visible by default
      gsap.set(cardsRef.current, { opacity: 1, y: 0 });
      gsap.set(outerBoxesRef.current, { opacity: 0, scale: 0.95 });

      // Title animation with more subtle easing
      gsap.from("#features-title", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Enhanced card animations with more sophisticated stagger
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.9,
        rotation: 2,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: "start",
          ease: "power2.out",
        },
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Subtle floating animation for cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Floating effect
        gsap.to(card, {
          y: -8,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });

        // Number circle pulse animation
        const number = card.querySelector(".number-circle");
        if (number) {
          gsap.to(number, {
            scale: 1.08,
            repeat: -1,
            yoyo: true,
            duration: 2.5 + index * 0.4,
            ease: "sine.inOut",
            delay: index * 0.3,
          });
        }
      });

      // Hover animations for each card
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const outerBox = outerBoxesRef.current[index];
        const numberCircle = card.querySelector(".number-circle");

        // Mouse enter animation
        const handleMouseEnter = () => {
          // Outer box color pop animation
          gsap.to(outerBox, {
            opacity: 1,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
          });

          // Card lift and glow effect
          gsap.to(card, {
            y: -12,
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            duration: 0.4,
            ease: "power2.out",
          });

          // Number circle enhancement
          gsap.to(numberCircle, {
            scale: 1.15,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        };

        // Mouse leave animation
        const handleMouseLeave = () => {
          gsap.to(outerBox, {
            opacity: 0,
            scale: 0.95,
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            duration: 0.4,
            ease: "power2.out",
          });

          gsap.to(numberCircle, {
            scale: 1.08,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup function
        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
    },
    { scope: containerRef }
  );

  const cardColors = [
    { bg: "from-teal-400 via-cyan-500 to-blue-500", text: "teal" },
    { bg: "from-purple-400 via-pink-500 to-red-500", text: "purple" },
    { bg: "from-blue-400 via-indigo-500 to-purple-500", text: "blue" },
    { bg: "from-green-400 via-emerald-500 to-teal-500", text: "green" },
  ];

  const cardTitles = [
    "Select a template",
    "Fill in your details",
    "Customize your design",
    "Tailor & Download",
  ];

  return (
    <section
      ref={containerRef}
      className="container mx-auto px-4 py-20 bg-gradient-to-tl from-teal-900/90 to-blue-700/55"
    >
      <div className="mb-16">
        <h2
          id="features-title"
          className="text-5xl sm:text-6xl font-bold text-[whitesmoke] mb-4 text-center"
        >
          How It <span>Works</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8 text-left">
        {[1, 2, 3, 4].map((num, index) => (
          <div key={num} className="relative group">
            {/* Outer colorful box */}
            <div
              ref={(el) => {
                outerBoxesRef.current[index] = el;
              }}
              className={`absolute inset-0 bg-gradient-to-br ${cardColors[index].bg} rounded-3xl blur-sm opacity-0 scale-95 transition-all duration-300`}
              style={{ zIndex: -1 }}
            />

            {/* Main card */}
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
                console.log(`Card ${index} ref:`, el);
              }}
              className="feature-card relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 transition-all duration-300 hover:bg-white"
            >
              <div
                className={`number-circle bg-${cardColors[index].text}-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-${cardColors[index].text}-600 relative overflow-hidden`}
              >
                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="text-2xl font-bold relative z-10">{num}</span>
              </div>

              <h2 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-4 text-center leading-tight">
                {cardTitles[index]}
              </h2>

              {/* Subtle bottom accent */}
              <div
                className={`h-1 w-0 bg-gradient-to-r ${cardColors[index].bg} rounded-full mx-auto transition-all duration-500 group-hover:w-16`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
