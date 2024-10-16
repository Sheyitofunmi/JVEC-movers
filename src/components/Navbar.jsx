// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faPhone,
//   faChevronUp,
//   faChevronDown,
// } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [isSticky, setSticky] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");
//   const [isOpen, setIsOpen] = useState(false); // State for mobile menu
//   const [isServicesOpen, setIsServicesOpen] = useState(false); // State for Services dropdown
//   const [isMoreOpen, setIsMoreOpen] = useState(false); // State for More dropdown

//   const menuLinks = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Services", href: "#services", dropdown: true },
//     { label: "More", href: "#more", dropdown: true },
//     { label: "Contact", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const sections = document.querySelectorAll("section");

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100;
//         const sectionId = section.getAttribute("id");

//         if (
//           scrollPosition >= sectionTop &&
//           scrollPosition < sectionTop + section.offsetHeight
//         ) {
//           setActiveLink(`#${sectionId}`);
//         }
//       });

//       if (scrollPosition > 0) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }

//       if (scrollPosition === 0) {
//         setActiveLink("#home");
//       }

//       if (scrollPosition + window.innerHeight === document.body.offsetHeight) {
//         setActiveLink("#contact");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleSetActiveLink = (link) => {
//     setActiveLink(link);
//     setIsOpen(false); // Close mobile menu when a link is clicked
//   };

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen); // Toggle mobile menu
//   };

//   const toggleServicesDropdown = () => {
//     setIsServicesOpen(!isServicesOpen);
//   };

//   const toggleMoreDropdown = () => {
//     setIsMoreOpen(!isMoreOpen);
//   };

//   return (
//     <nav
//       className={`${
//         isSticky
//           ? "bg-[#282B2E] shadow-lg fixed top-0 left-0 w-full z-50"
//           : "bg-[#282B2E] border-[1px] border-black"
//       } transition-all duration-300 ease-in-out`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="/" className="text-white text-2xl font-bold">
//               <img
//                 src="/logo.svg"
//                 alt="JVEC Movers Logo"
//                 className="h-8 w-auto"
//               />
//             </a>
//           </div>

//           {/* Desktop Menu Items */}
//           <div className="hidden md:flex items-center space-x-8">
//             {menuLinks.map((menuLink, index) =>
//               menuLink.label === "Services" ? (
//                 <div key={index} className="relative group">
//                   <a
//                     href={menuLink.href}
//                     className={`${
//                       activeLink === menuLink.href
//                         ? "text-white"
//                         : "text-gray-300"
//                     } hover:text-white flex items-center`}
//                     onClick={toggleServicesDropdown}
//                   >
//                     {menuLink.label}{" "}
//                     <FontAwesomeIcon
//                       icon={faChevronUp}
//                       className="ml-1 text-white text-xs mt-1"
//                     />
//                   </a>
//                   {/* Services Dropdown Menu */}
//                   {isServicesOpen && (
//                     <div className="absolute left-0 mt-2 w-32 bg-gray-800 text-gray-300">
//                       <a
//                         href="#web-design"
//                         className="block px-4 py-2 hover:bg-gray-700"
//                       >
//                         Web Design
//                       </a>
//                       <a
//                         href="#seo"
//                         className="block px-4 py-2 hover:bg-gray-700"
//                       >
//                         SEO
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               ) : menuLink.label === "More" ? (
//                 <div key={index} className="relative group">
//                   <a
//                     href={menuLink.href}
//                     className={`${
//                       activeLink === menuLink.href
//                         ? "text-white"
//                         : "text-gray-300"
//                     } hover:text-white flex items-center`}
//                     onClick={toggleMoreDropdown}
//                   >
//                     {menuLink.label}{" "}
//                     <FontAwesomeIcon
//                       icon={faChevronDown}
//                       className="ml-1 mt-1 text-[#6F7173] text-xs"
//                     />
//                   </a>
//                   {/* More Dropdown Menu */}
//                   {isMoreOpen && (
//                     <div className="absolute left-0 mt-2 w-32 bg-gray-800 text-gray-300">
//                       <a
//                         href="#blog"
//                         className="block px-4 py-2 hover:bg-gray-700"
//                       >
//                         Blog
//                       </a>
//                       <a
//                         href="#team"
//                         className="block px-4 py-2 hover:bg-gray-700"
//                       >
//                         Our Team
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <a
//                   key={index}
//                   href={menuLink.href}
//                   className={`${
//                     activeLink === menuLink.href
//                       ? "text-white"
//                       : "text-gray-300"
//                   } hover:text-white`}
//                   onClick={() => handleSetActiveLink(menuLink.href)}
//                 >
//                   {menuLink.label}
//                 </a>
//               )
//             )}
//           </div>

//           <div className="hidden md:flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <FontAwesomeIcon icon={faPhone} className="text-white" />
//               <span className="text-gray-300">0814-097-9054</span>
//             </div>
//             <a
//               href="#quote"
//               className="bg-[#FF3333] hover:bg-red-400 text-white px-4 py-2 rounded-xs "
//             >
//               Free Quote
//             </a>
//           </div>

//           <div className="md:hidden">
//             <a
//               href="#quote"
//               className="bg-[#FF3333] hover:bg-red-400 text-white px-4 py-2 rounded-xs "
//             >
//               Free Quote
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleNavbar}
//               className="text-gray-400 hover:text-white focus:outline-none"
//             >
//               <FontAwesomeIcon icon={faBars} size="lg" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 fixed z-50 w-full ">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {menuLinks.map((menuLink, index) => (
//               <a
//                 key={index}
//                 href={menuLink.href}
//                 className={`block px-3 py-2 rounded-md text-base font-medium ${
//                   activeLink === menuLink.href ? "text-white" : "text-gray-300"
//                 } hover:text-white hover:bg-gray-700`}
//                 onClick={() => handleSetActiveLink(menuLink.href)}
//               >
//                 {menuLink.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhone,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const menuLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services", dropdown: true },
    { label: "More", href: "#more", dropdown: true },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + section.offsetHeight
        ) {
          setActiveLink(`#${sectionId}`);
        }
      });

      if (scrollPosition > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (scrollPosition === 0) {
        setActiveLink("#home");
      }

      if (scrollPosition + window.innerHeight === document.body.offsetHeight) {
        setActiveLink("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMoreDropdown = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  return (
    <nav
      className={`${
        isSticky
          ? "bg-[#282B2E] shadow-lg fixed top-0 left-0 w-full z-50"
          : "bg-[#282B2E] "
      } transition-all duration-300 ease-in-out lg:border-[1px] border-b-2 border-black`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold">
              <img
                src="/logo.svg"
                alt="JVEC Movers Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuLinks.map((menuLink, index) =>
              menuLink.label === "Services" ? (
                <div key={index} className="relative group">
                  <a
                    href={menuLink.href}
                    className={`${
                      activeLink === menuLink.href
                        ? "text-white"
                        : "text-gray-300"
                    } hover:text-white flex items-center`}
                    onClick={toggleServicesDropdown}
                  >
                    {menuLink.label}{" "}
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="ml-1 text-white text-xs mt-1"
                    />
                  </a>
                  {/* Services Dropdown Menu */}
                  {isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-32 bg-gray-800 text-gray-300">
                      <a
                        href="#web-design"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Web Design
                      </a>
                      <a
                        href="#seo"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        SEO
                      </a>
                    </div>
                  )}
                </div>
              ) : menuLink.label === "More" ? (
                <div key={index} className="relative group">
                  <a
                    href={menuLink.href}
                    className={`${
                      activeLink === menuLink.href
                        ? "text-white"
                        : "text-gray-300"
                    } hover:text-white flex items-center`}
                    onClick={toggleMoreDropdown}
                  >
                    {menuLink.label}{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-1 mt-1 text-[#6F7173] text-xs"
                    />
                  </a>
                  {/* More Dropdown Menu */}
                  {isMoreOpen && (
                    <div className="absolute left-0 mt-2 w-32 bg-gray-800 text-gray-300">
                      <a
                        href="#blog"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Blog
                      </a>
                      <a
                        href="#team"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Our Team
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={menuLink.href}
                  className={`${
                    activeLink === menuLink.href
                      ? "text-white"
                      : "text-gray-300"
                  } hover:text-white`}
                  onClick={() => handleSetActiveLink(menuLink.href)}
                >
                  {menuLink.label}
                </a>
              )
            )}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-white" />
              <span className="text-gray-300">0814-097-9054</span>
            </div>
            <a
              href="#quote"
              className="bg-[#FF3333] hover:bg-red-400 text-white px-4 py-2 rounded-xs  transition duration-300 "
            >
              Free Quote
            </a>
          </div>

          <div className="md:hidden">
            <a
              href="#quote"
              className="bg-[#FF3333] hover:bg-red-400 text-white px-4 py-2 rounded-xs  transition duration-300 "
            >
              Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 fixed z-50 w-full ">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuLinks.map((menuLink, index) => (
              <a
                key={index}
                href={menuLink.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeLink === menuLink.href ? "text-white" : "text-gray-300"
                } hover:text-white hover:bg-gray-700`}
                onClick={() => handleSetActiveLink(menuLink.href)}
              >
                {menuLink.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
