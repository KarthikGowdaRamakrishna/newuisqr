import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-neutral-900">
      <svg className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2" width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[330.864, 308.873, 286.882, 264.891, 242.9, 220.909, 198.918, 176.927, 154.937, 132.946, 110.955, 88.9639, 66.9729, 44.9819, 22.991, 1].map((d, index) => (
          <path
            key={index}
            d={`M0.5 ${d}C232.505 ${d + 72.937} 853.749 ${d + 196.819} 1482.69 ${d + 108.855}C2111.63 ${d + 20.8914} 2585.54 ${d + 103.724} 2743.87 ${d + 156.136}`}
            className="stroke-neutral-700/50"
            stroke="currentColor"
          />
        ))}
      </svg>

      <div className="relative z-10">
        <div className="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
          <div className="inline-flex items-center">
            {/* Logo */}
            <svg className="w-24 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696Z"
                className="fill-white"
                fill="currentColor"
              />
              <path d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12" className="stroke-white" stroke="currentColor" strokeWidth="2" />
              <path d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12" className="stroke-white" stroke="currentColor" strokeWidth="2" />
              <circle cx="13" cy="16.5214" r="5" className="fill-white" fill="currentColor" />
            </svg>
            {/* End Logo */}

            <div className="border-s border-neutral-700 ps-5 ms-5">
              <p className="text-sm text-neutral-400">2024 Preline Co.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
