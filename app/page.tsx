import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import TrustedBySection from './components/TrustedBySection';
import CaseStories from './components/caseStudies';
import Testimonials from './components/testimonials';
import Stats from './components/Stats';
import Approach from './components/Approach';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      {/* Hero Section */}
      {/* <section className="relative bg-gray-900">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 h-[64rem] bg-gradient-to-t from-black via-gray-800 to-transparent opacity-90"></div>
          <div className="relative z-10 flex justify-center items-center h-screen">
            <div className="text-center">
              <h1 className="text-white text-5xl font-bold">Welcome to Agency</h1>
              <p className="text-gray-300 mt-4">
                We build creative solutions for your brand
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <HeroSection/>
      <TrustedBySection/>
      <CaseStories/>
      <Testimonials/>
      <Stats/>
      <Approach/>
      <Contact/>



      <Footer />
    </div>
  );
}
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-neutral-900 text-white font-sans">
//       {/* Header */}
//       <header className="sticky top-0 bg-neutral-800 py-4 shadow-md">
//         <nav className="container mx-auto flex items-center justify-between px-6">
//           <div className="text-lg font-bold">Agency</div>
//           <div className="flex space-x-6">
//             <a href="#services" className="hover:text-neutral-400">
//               Services
//             </a>
//             <a href="#portfolio" className="hover:text-neutral-400">
//               Portfolio
//             </a>
//             <a href="#contact" className="hover:text-neutral-400">
//               Contact
//             </a>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="flex items-center justify-center h-[80vh] bg-gradient-to-r from-blue-600 to-indigo-700">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Build Stunning Websites
//           </h1>
//           <p className="text-lg md:text-xl text-neutral-300 mb-8">
//             We bring your ideas to life with cutting-edge technology.
//           </p>
//           <a
//             href="#services"
//             className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition"
//           >
//             Get Started
//           </a>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 bg-neutral-900">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-2">Web Development</h3>
//               <p className="text-neutral-400">
//                 Modern, responsive, and scalable web applications.
//               </p>
//             </div>
//             <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
//               <p className="text-neutral-400">
//                 Crafting user experiences that delight and engage.
//               </p>
//             </div>
//             <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
//               <p className="text-neutral-400">
//                 Helping your brand stand out in a competitive market.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-neutral-800 py-6">
//         <div className="container mx-auto text-center text-neutral-400">
//           &copy; 2025 Agency. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }
