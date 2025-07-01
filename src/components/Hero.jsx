import { Link } from "react-router-dom";
import ResumeImage from "../assets/resume2.png";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText("#title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText("#subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duratioon: 1,
      ease: "expo.out",
      stagger: 0.05,
    });

    // Scroll-triggered animations
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    scrollTl
      .to("#title .char", {
        yPercent: -20,
        opacity: 0.7,
        stagger: 0.02,
        duration: 2,
      })
      .to(
        "#subtitle .line",
        {
          yPercent: -30,
          opacity: 0.5,
          stagger: 0.05,
        },
        0
      )
      .to(
        "#hero-buttons",
        {
          yPercent: -20,
          opacity: 0.8,
        },
        0
      );

    // Cleanup
    return () => {
      heroSplit.revert();
      paragraphSplit.revert();
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 md:py-20" id="hero">
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto"
        id="hero-content"
      >
        {/* Text Content - Left Side */}
        <div className="md:w-1/2" id="hero-text">
          <h1 className="text-4xl md:text-5xl font-bold text-[whitesmoke] mb-6 leading-tight">
            Craft Resumes That{" "}
            <span className="text-gradient">Get Interviews</span>
          </h1>

          <p className="text-xl text-gray-100 mb-8 max-w-lg">
            Create professional, recruiter-approved resumes in minutes with our
            easy-to-use builder and AI-powered suggestions.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0"
            id="hero-buttons"
          >
            <Link
              to="/auth"
              className="inline-block bg-gradient-to-br from-blue-500 to-green-500 text-white font-medium text-lg px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 will-change-transform text-center"
            >
              Start Building Free
            </Link>
            <Link
              to="/auth"
              className="inline-block border-2 border-teal-600 hover:border-blue-400 bg-white text-gray-700 hover:text-blue-600 font-medium text-lg px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 will-change-transform text-center"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="md:w-1/2" id="resume-image">
          <img
            src={ResumeImage}
            alt="Professional Resume Example"
            className="w-full h-auto rounded-xl shadow-xl border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300"
            style={{ maxWidth: "600px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
