import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
  
      gsap.from("#hero-buttons", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.7,
    });

  }, []); 

  return (
    <section
      className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center text-center min-h-[80vh]"
      id="hero"
    >
      <h1
        className="text-4xl md:text-6xl font-bold text-blue-500 mb-6 leading-tight max-w-4xl"
        id="title"
      >
        Your Dream Job Starts with the <span className="text-gradient text-wrap">Perfect Resume</span>
      </h1>

      <p
        className="text-2xl text-blue-500 mb-8 max-w-2xl leading-relaxed"
        id="subtitle"
      >
        Stand Out. Get Noticed. Get Hired.
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0"
        id="hero-buttons"
      >
        <Link
          to="/signup"
          className="inline-block bg-gradient-to-br from-blue-500 to-teal-500 text-white font-medium text-lg px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 will-change-transform text-center"
        >
          Get Started
        </Link>
        {/* <Link
          to="/auth"
          className="inline-block border-2 border-blue-300 hover:border-blue-400 bg-white text-gray-700 hover:text-blue-600 font-medium text-lg px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 will-change-transform text-center"
        >
          Sign In
        </Link> */}
      </div>
    </section>
  );
};

export default Hero;
