import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-neutral-900 text-white py-24 lg:py-32 px-4 xl:px-0">
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="font-semibold text-5xl md:text-6xl leading-tight">
          <span className="text-[#9CCF6A]">Square Results:</span> Recruitment Done right!
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 text-neutral-400 text-lg max-w-4xl mx-auto">
        SquareResults is a specialized recruitment company with a vision to redefine the hiring process through cutting-edge technology and personalized service. We aim to bridge the gap between top-tier talent and forward-thinking organizations, enabling mutual growth and success. 
                  </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-neutral-800 font-medium text-lg bg-[#9CCF6A] rounded-full hover:bg-yellow-400 transition"
          >
            Get Started
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
