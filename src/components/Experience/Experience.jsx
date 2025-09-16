import { useState, useEffect, useRef } from 'react';
import { experiences, totalClients } from "../../constants";
import { useTranslation } from 'react-i18next';
import { calculateTotalYearsOfExperience } from '../../lib/helpers';

function Experience() {
    const { t } = useTranslation();
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [activeItem, setActiveItem] = useState(0);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const observerRef = useRef(null);

    // Intersection Observer para animaciones al hacer scroll
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemIndex = entry.target.getAttribute('data-experience');
                        setVisibleItems(prev => new Set([...prev, itemIndex]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        const experienceElements = document.querySelectorAll('[data-experience]');
        if (observerRef.current) {
            experienceElements.forEach(el => observerRef.current.observe(el));
        }

        return () => {
            if (observerRef.current) {
                experienceElements.forEach(el => observerRef.current.unobserve(el));
            }
        };
    }, []);

    // Auto-change active item every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveItem(prev => (prev + 1) % experiences.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Calcular años totales de experiencia
    const totalYearsExperience = calculateTotalYearsOfExperience(experiences);

    return (
        <section
            id="experience"
            className="py-12 sm:py-16 md:py-24 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-skills clip-path-custom-2"
        >
            {/* Section Title */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t("experience.title")}</h2>
                <div className="w-20 sm:w-24 md:w-32 h-1 bg-color-section mx-auto mt-3 md:mt-4"></div>
                <p className="text-gray-400 mt-3 md:mt-4 text-base sm:text-lg font-semibold px-4">
                    {t("experience.subtitle")}
                </p>
            </div>


            {/* Experience Timeline - Completamente Responsive */}
            <div className="relative max-w-5xl mx-auto">
                {/* Timeline line - Responsive positioning */}
                <div className="absolute left-4 sm:left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-color-primary via-color-secundary to-color-primary opacity-60"></div>
                
                {/* Animated timeline indicators - Responsive */}
                <div className="absolute left-3 sm:left-4 md:left-5 top-0 bottom-0">
                    <div className="animate-pulse w-2 h-2 bg-color-primary rounded-full absolute top-8 sm:top-10 animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="animate-pulse w-1 h-1 bg-color-secundary rounded-full absolute top-24 sm:top-32 animate-bounce" style={{animationDelay: '1.5s'}}></div>
                    <div className="animate-pulse w-1 h-1 bg-color-primary rounded-full absolute top-48 sm:top-64 animate-bounce" style={{animationDelay: '3s'}}></div>
                </div>

                <div className="space-y-8 sm:space-y-10 md:space-y-12 mb-8 sm:mb-12 md:mb-16">
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.key}
                            data-experience={index}
                            className={`relative flex items-start transition-all duration-700 transform ${
                                visibleItems.has(index.toString()) 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                            onMouseEnter={() => setActiveItem(index)}
                        >
                            {/* Timeline node - Responsive sizing */}
                            <div className={`absolute left-2.5 sm:left-3.5 md:left-4 w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 sm:border-4 transition-all duration-500 z-10 ${
                                activeItem === index || visibleItems.has(index.toString())
                                    ? 'bg-color-primary border-color-primary shadow-lg sm:shadow-xl shadow-color-primary/50 scale-125' 
                                    : 'bg-gray-800 border-gray-600 scale-100'
                            }`}>
                                {activeItem === index && (
                                    <div className="absolute inset-0 bg-color-primary rounded-full animate-ping opacity-75"></div>
                                )}
                                {/* Inner dot */}
                                <div className="absolute inset-0.5 sm:inset-1 bg-white rounded-full opacity-80"></div>
                            </div>

                            {/* Content Card - Responsive margins and padding */}
                            <div className="w-full ml-8 sm:ml-10 md:ml-12">
                                <div className={`group bg-gradient-experience-card border-2 transition-all duration-500 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-box-experience-card hover:shadow-2xl hover:shadow-color-primary/20 transform hover:scale-[1.02] ${
                                    activeItem === index 
                                        ? 'border-color-primary/50 bg-color-primary/5' 
                                        : 'border-white/20 hover:border-color-primary/30'
                                }`}>
                                    
                                    {/* Date badge - Responsive */}
                                    <div className="absolute -top-2 sm:-top-3 right-3 sm:right-4 bg-gradient-to-r from-color-primary to-color-secundary text-white px-2 sm:px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                                        {t(`experience.companies.${experience.key}.date`)}
                                    </div>

                                    {/* Status indicator - Responsive */}
                                    <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4 flex items-center space-x-1 sm:space-x-2">
                                        <div className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full animate-pulse ${index === 0 ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                                        <span className="text-xs text-gray-300 bg-gray-800/80 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full hidden sm:inline">
                                            {experience.current ? t(`experience.statusJob.current`) : t(`experience.statusJob.completed`)}
                                        </span>
                                    </div>

                                    {/* Header - Responsive layout */}
                                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4 pt-3 sm:pt-4">
                                        {/* Company Logo - Responsive sizing */}
                                        <div className="relative flex-shrink-0">
                                            <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg group-hover:shadow-color-primary/30 transition-all duration-300 p-1.5 sm:p-2">
                                                <img
                                                    src={experience.img}
                                                    alt={t(`experience.companies.${experience.key}.company`)}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                            
                                            {/* Floating work icon - Hidden on mobile 
                                            <div className="hidden sm:block absolute -top-1 -right-1 w-5 sm:w-6 h-5 sm:h-6 bg-color-secundary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
                                                <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                                </svg>
                                            </div>
                                            */}
                                        </div>

                                        {/* Role and Company Info - Responsive text */}
                                        <div className="flex-grow min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 transition-colors duration-300 leading-tight">
                                                {t(`experience.companies.${experience.key}.role`)}
                                            </h3>
                                            <h4 className="text-color-secundary font-semibold text-base sm:text-lg mb-2 leading-tight">
                                                {t(`experience.companies.${experience.key}.company`)}
                                            </h4>
                                            
                                            {/* Employment type badge - Responsive */}
                                            <div className="inline-block bg-color-primary/20 text-color-primary px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-color-primary/30 mb-2 sm:mb-3 mr-2 sm:mr-3">
                                                {t(`experience.jobTypes.${experience.jobType}`)}
                                            </div>
                                            <div className="inline-block bg-color-primary/20 text-color-primary px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-color-primary/30 mb-2 sm:mb-3">
                                                {t(`experience.jobModes.${experience.jobMode}`)}
                                            </div>
                                        </div>

                                        {/* Duration indicator - Only on larger screens */}
                                        <div className="hidden md:block text-right">
                                            <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg px-3 py-2">
                                                <div className="text-xs text-gray-300 text-center">
                                                    <div className="text-color-primary font-bold">{t(`experience.companies.${experience.key}.duration`)}</div>
                                                    <div>{t(`experience.duration`)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description - Responsive text */}
                                    <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                                        {t(`experience.companies.${experience.key}.desc`)}
                                    </p>

                                    {/* Key achievements - Responsive spacing */}
                                    <div className="mb-4 sm:mb-6">
                                        <h5 className="text-white font-semibold mb-2 sm:mb-3 text-sm">{t('experience.mainAchievements')}:</h5>
                                        <ul className="text-gray-400 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                                        {
                                            t(`experience.companies.${experience.key}.achievements`, { returnObjects: true }).map(achievement => (
                                                <li className="flex items-start">
                                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-color-primary rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5"></div>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))
                                        }
                                        </ul>
                                    </div>

                                    {/* Skills section - Responsive */}
                                    <div className="mt-4 sm:mt-6">
                                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                                            <h5 className="font-medium text-white text-sm">{t("skills.title")}:</h5>
                                            <span className="text-xs text-gray-500 hidden sm:inline">
                                                {experience.skills?.length} {t('experience.technologies')}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {experience.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className={`bg-color-experience-skill-tag text-gray-300 px-2 sm:px-3 py-1 text-xs rounded-lg border border-gray-400/30 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:bg-color-primary/20 hover:border-color-primary hover:text-white ${
                                                        hoveredSkill === `${index}-${skillIndex}` ? 'shadow-lg shadow-color-primary/30' : ''
                                                    }`}
                                                    onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                                                    onMouseLeave={() => setHoveredSkill(null)}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Experience Stats - Responsive Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
                <div className="text-center p-3 sm:p-4 bg-gradient-dark-card/50 rounded-lg sm:rounded-xl border border-color-primary/20 backdrop-blur-sm">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-color-primary mb-1 sm:mb-2">
                        { totalYearsExperience }+
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">{t('experience.totalExperienceYears')}</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-dark-card/50 rounded-lg sm:rounded-xl border border-color-primary/20 backdrop-blur-sm">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-color-primary mb-1 sm:mb-2">
                        {experiences.length}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">{t('experience.totalPositions')}</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-dark-card/50 rounded-lg sm:rounded-xl border border-color-primary/20 backdrop-blur-sm">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-color-primary mb-1 sm:mb-2">
                        {experiences.reduce((total, exp) => total + (exp.skills?.length || 0), 0)}+
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">{t('experience.totalTechnologies')}</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-dark-card/50 rounded-lg sm:rounded-xl border border-color-primary/20 backdrop-blur-sm">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-color-primary mb-1 sm:mb-2">
                        { totalClients }+
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">{t('experience.totalClients')}</div>
                </div>
            </div>


            {/* Career progression indicator - Responsive */}
            <div className="mt-8 sm:mt-12 text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-color-primary/10 to-color-secundary/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-color-primary/20">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-color-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-white font-semibold text-sm sm:text-base">{t('experience.growth')}</span>
                    <div className="ml-3 sm:ml-4 flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <div 
                                key={i} 
                                className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-color-primary rounded-full animate-pulse" 
                                style={{ animationDelay: `${i * 200}ms` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to action - Responsive */}
            <div className="text-center mt-8 sm:mt-12">
                <p className="text-gray-400 mb-4 text-sm sm:text-base px-4">
                    {t('experience.callToAction')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                    <a 
                        href="#work" 
                        className="inline-flex items-center justify-center text-color-primary hover:text-white transition-colors duration-300 group bg-color-primary/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-color-primary/20"
                    >
                        <svg className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span className="text-sm sm:text-base">{t('experience.action')}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Experience;