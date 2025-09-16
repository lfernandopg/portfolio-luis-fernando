import { useState, useEffect } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { githubUrl, linkedinUrl } from "../../constants";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Detect scroll and change navbar background + progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section while scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['about', 'skills', 'experience', 'work', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Smooth scroll function with offset for navbar
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { id: "about", label: t("navbar.about") },
    { id: "skills", label: t("navbar.skills") },
    { id: "experience", label: t("navbar.experience") },
    { id: "work", label: t("navbar.works") },
    { id: "education", label: t("navbar.education") },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageDropdownOpen && !event.target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageDropdownOpen]);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#050414]/80 backdrop-blur-md shadow-lg z-50">
        <div 
          className="h-full bg-gradient-to-r from-color-primary to-color-secundary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-1 w-full z-40 transition-all duration-300 px-[5%] md:px-[7%] lg:px-[10%] ${
          isScrolled 
            ? "bg-[#050414]/80 backdrop-blur-md shadow-lg border-b border-color-primary/20" 
            : "bg-transparent"
        }`}
      >
        <div className="text-white py-4 flex items-center justify-between">
          {/* Logo mejorado */}
          <a href="/" className="group">
            <div className="text-lg font-semibold cursor-pointer flex items-center space-x-1 transition-all duration-300 group-hover:scale-105">
              <span className="text-purple-400 transition-all duration-300 group-hover:text-purple-300">&lt;</span>
              <span className="text-white transition-all duration-300 group-hover:text-gray-200">Luis Fernando</span>
              <span className="text-purple-400 transition-all duration-300 group-hover:text-purple-300">/</span>
              <span className="text-white transition-all duration-300 group-hover:text-gray-200">Peña</span>
              <span className="text-purple-400 transition-all duration-300 group-hover:text-purple-300">&gt;</span>
            </div>
          </a>

          {/* Desktop Menu and Controls */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Menu Items with active indicators */}
            <ul className="flex space-x-2 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="relative"
                >
                  <button 
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`cursor-pointer hover:text-purple-400 transition-colors duration-300 py-2 px-3 rounded-md relative group ${
                      activeSection === item.id ? "text-purple-400" : ""
                    }`}
                  >
                    {item.label}
                    
                    {/* Active indicator */}
                    <span className={`absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 transition-all duration-300 ${
                      activeSection === item.id ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`} />
                    
                    {/* Hover effect */}
                    <span className="absolute inset-0 bg-purple-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Language Selector mejorado */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-transparent border border-white/30 text-white rounded-full hover:bg-purple-400/20 hover:border-purple-400 transition-all duration-300 group"
              >
                <span className="text-sm font-medium">{i18n.language === 'en' ? 'EN' : 'ES'}</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12l-5-5h10l-5 5z"/>
                </svg>
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-20 bg-[#050414]/95 backdrop-blur-md rounded-lg shadow-lg border border-color-primary/20 overflow-hidden animate-fadeIn">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-400/20 transition-colors duration-200"
                  >
                    EN
                  </button>
                  <div className="h-px bg-gray-700"></div>
                  <button
                    onClick={() => changeLanguage('es')}
                    className="w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-400/20 transition-colors duration-200"
                  >
                    ES
                  </button>
                </div>
              )}
            </div>

            {/* Social Icons mejorados */}
            <div className="flex space-x-1">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 p-2 rounded-full hover:bg-purple-400/10 transition-all duration-300 group"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 p-2 rounded-full hover:bg-purple-400/10 transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-400 p-2 rounded-md hover:bg-purple-400/10 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <FiX className="text-2xl transition-transform duration-300 rotate-90" />
              ) : (
                <FiMenu className="text-2xl transition-transform duration-300 hover:rotate-3" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#050414]/95 backdrop-blur-md rounded-b-lg border border-t-0 border-color-primary/20 shadow-lg">
            <ul className="flex flex-col py-4 text-gray-300">
              {menuItems.map((item, index) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full text-left px-6 py-3 hover:text-white hover:bg-purple-400/10 transition-all duration-300 ${
                      activeSection === item.id ? "text-purple-400 bg-purple-400/5" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                        activeSection === item.id ? "bg-purple-400" : "bg-gray-600"
                      }`} />
                      {item.label}
                    </div>
                  </button>
                </li>
              ))}
              
              {/* Mobile Language Selector */}
              <li className="px-6 py-3 border-t border-gray-700 mt-2">
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                      i18n.language === 'en' 
                        ? 'bg-purple-400 text-white' 
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400/10'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage('es')}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                      i18n.language === 'es' 
                        ? 'bg-purple-400 text-white' 
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400/10'
                    }`}
                  >
                    ES
                  </button>
                </div>
              </li>
              
              {/* Mobile Social Icons */}
              <li className="px-6 py-3 border-t border-gray-700">
                <div className="flex justify-center space-x-6">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-purple-400/10 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-purple-400/10 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}

export default Navbar