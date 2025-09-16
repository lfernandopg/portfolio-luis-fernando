import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { fullName, githubUrl, linkedinUrl, whatsappUrl, telegramUrl } from "../../constants";

function Footer() {
  const { t } = useTranslation();
// Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-color-primary">{fullName}</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { id: "about", name: t("navbar.about") },
            { id: "skills", name: t("navbar.skills") },
            { id: "experience", name: t("navbar.experience") },
            { id: "work", name: t("navbar.works") },
            { id: "education", name: t("navbar.education") },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-color-primary text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: linkedinUrl },
            { icon: <FaGithub />, link: githubUrl },
            { icon: <FaWhatsapp />, link: whatsappUrl },
            { icon: <FaTelegram />, link: telegramUrl },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-color-primary transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer
