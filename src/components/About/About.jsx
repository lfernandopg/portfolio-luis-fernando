import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpeg';
import { useTranslation } from 'react-i18next';
import { fullName } from '../../constants';

function About() {
    const { t, i18n } = useTranslation();
    
    return (
        <section
            id="about"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-16 lg:mt-24"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    {/* Greeting */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                        {t("about.greeting")}
                    </h1>
                    {/* Name */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        {fullName}
                    </h2>
                    {/* Skills Heading with Typing Effect */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-color-primary leading-tight min-h-[3rem] sm:min-h-[4rem] md:min-h-[4.5rem]">
                        <span className="text-white">{t("about.heading.introduce")}</span>{" "}
                        <TypeAnimation
                            key={i18n.language}
                            sequence={t("about.heading.skills", { returnObjects: true }).flatMap(
                            (skill, index) => [t(`about.heading.skills.${index}`), 1000]
                            )}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                            className="text-color-primary inline-block align-top"
                        />
                    </h3>
                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-6 mt-8 leading-relaxed">
                        {t("about.description")}
                    </p>

                    {/* Resume Button - Mejorado con micro-animación */}
                    <a
                        href={t("about.cvUrl")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-gradient-btn-cv shadow-box-btn-cv group"
                    >
                        <span className="inline-flex items-center">
                            {t("about.downloadCv")}
                            <svg 
                                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-y-[-2px]" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* Right Side - Profile con efecto mejorado */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative">
                        {/* Anillo de progreso sutil */}
                        <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] rounded-full border-2 border-color-primary/30 animate-pulse"></div>
                        
                        <Tilt
                            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 border-color-profile rounded-full relative z-10"
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <img
                                src={profileImage}
                                alt={fullName}
                                className="w-full h-full rounded-full object-cover drop-shadow-profile"
                            />
                            
                            {/* Indicator de disponibilidad */}
                            <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-4 border-white animate-pulse"></div>
                        </Tilt>
                        
                        {/* Floating elements sutiles */}
                        <div className="absolute top-0 right-0 w-3 h-3 bg-color-primary rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                        <div className="absolute bottom-10 left-0 w-2 h-2 bg-color-secundary rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                        <div className="absolute top-1/2 right-[-10px] w-2 h-2 bg-color-primary rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About