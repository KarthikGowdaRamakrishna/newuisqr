import React from "react";

const TrustedBySection: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-4 bg-neutral-900">
      {/* Wavy Background Effect */}
      <svg
        className="absolute -bottom-20 left-1/2 w-[1900px] -translate-x-1/2 max-w-full"
        width="2745"
        height="488"
        viewBox="0 0 2745 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[330.864, 308.873, 286.882, 264.891, 242.9, 220.909, 198.918, 176.927, 154.937, 132.946, 110.955, 88.9639, 66.9729, 44.9819, 22.991, 1].map(
          (pos, index) => (
            <path
              key={index}
              d={`M0.5 ${pos}C232.505 ${pos + 72.937} 853.749 ${pos + 196.819} 1482.69 ${pos + 108.855}C2111.63 ${pos + 20.892} 2585.54 ${
                pos + 103.725
              } 2743.87 ${pos + 157.136}`}
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
          )
        )}
      </svg>

      {/* Trusted By Content */}
      <div className="relative z-10">
        <div className="max-w-5xl px-4 xl:px-0 mx-auto text-center">
          <h2 className="text-neutral-400 text-lg md:text-xl font-medium mb-6">
            Trusted by Open Source, enterprise, and more than{" "}
            <span className="font-bold text-white">99,000</span> of you
          </h2>

          {/* Logos */}
          <div className="flex justify-center items-center space-x-10 md:space-x-14 flex-wrap">
            <img src="/logos/ledger.svg" alt="Ledger" className="h-8 md:h-12 opacity-80" />
            <img src="/logos/openai.svg" alt="OpenAI" className="h-8 md:h-12 opacity-80" />
            <img src="/logos/xevo.svg" alt="Xevo" className="h-8 md:h-12 opacity-80" />
            <img src="/logos/fullview.svg" alt="Fullview" className="h-8 md:h-12 opacity-80" />
            <img src="/logos/clover.svg" alt="Clover" className="h-8 md:h-12 opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
