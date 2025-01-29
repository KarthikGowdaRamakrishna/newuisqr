// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";

// const Navbar: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();

//   // Function to toggle mobile menu
//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   // Function to toggle dropdown
//   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Check active link
//   const isActive = (path: string) => (pathname === path ? "border-yellow-400 font-bold" : "");


//   return (
//     <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
//       <nav
//         className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto"
//         aria-label="Global"
//       >
//         <div className="flex items-center justify-between w-full">
//           {/* Logo */}
//           <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="Preline">
//             <img src="/logo.png" alt="Preline Logo" className="w-28 h-auto" loading="lazy" />
//           </a>
//           {/* End Logo */}

//           {/* Mobile Menu Toggle */}
//           <button
//             type="button"
//             className="md:hidden size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white"
//             onClick={toggleMenu}
//             aria-expanded={menuOpen}
//             aria-controls="navbar-collapse"
//           >
//             <svg className={`size-4 transition-transform ${menuOpen ? "rotate-90" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="3" x2="21" y1="6" y2="6" />
//               <line x1="3" x2="21" y1="12" y2="12" />
//               <line x1="3" x2="21" y1="18" y2="18" />
//             </svg>
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div id="navbar-collapse" className={`hs-collapse transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:block`}>
//           <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
//             <a className={`text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300 ${isActive("/")}`} href="/">
//               Home
//             </a>
//             <a className={`text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300 ${isActive("/stories")}`} href="/stories">
//               Stories
//             </a>
//             <a className={`text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300 ${isActive("/reviews")}`} href="/reviews">
//               Reviews
//             </a>
//             <a className={`text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300 ${isActive("/approach")}`} href="/approach">
//               Approach
//             </a>

//             {/* Dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 type="button"
//                 className="flex items-center text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
//                 onClick={toggleDropdown}
//                 aria-expanded={dropdownOpen}
//               >
//                 About
//                 <svg className="flex-shrink-0 ms-1 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </button>

//               <div className={`absolute mt-2 bg-neutral-800 md:shadow-md rounded-lg p-2 transition-opacity duration-200 ${dropdownOpen ? "opacity-100 block" : "opacity-0 hidden"}`}>
//                 <a className="block py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium" href="/about">
//                   About
//                 </a>
//                 <a className="block py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium" href="/downloads">
//                   Downloads
//                 </a>
//                 <a className="block py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium" href="/team">
//                   Team Account
//                 </a>
//               </div>
//             </div>
//             {/* End Dropdown */}

//             <div>
//                <a
//                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#9CCF6A] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
//                  href="#contact"
//                >
//                  Contact us
//                </a>
//            </div>
//           </div>
//         </div>
//         {/* End Navigation Links */}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav
        className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
        <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../../templates/agency/index.html" aria-label="Preline">
        
<img alt="logo" loading="lazy" width="94" height="49" decoding="async" data-nimg="1" style={{color:"transparent"}} src="./SQRlogo.jpg"></img>

        </a>

          {/* End Logo */}

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="navbar-collapse"
              aria-label="Toggle navigation"
            >
              <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Collapse */}
        <div id="navbar-collapse" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <a className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href="/">
              Home
            </a>
            <a className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href="#">
              Stories
            </a>
            <a className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href="#">
              Reviews
            </a>
            <a className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href="#">
              Approach
            </a>

            {/* Dropdown */}
            <div className="hs-dropdown md:py-4">
              <button
                type="button"
                className="flex items-center w-full text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
              >
                About
                <svg
                  className="flex-shrink-0 ms-1 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className="hs-dropdown-menu transition-opacity opacity-0 md:w-48 hidden z-10 bg-neutral-800 md:shadow-md rounded-lg p-2">
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium" href="#">
                  About
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium" href="#">
                  Downloads
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 font-medium" href="#">
                  Team Account
                </a>
              </div>
            </div>
            {/* End Dropdown */}

            <div>
              <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#9CCF6A] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                href="#contact"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
};

export default Navbar;
  