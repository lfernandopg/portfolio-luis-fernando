import { useState, useEffect, useRef } from 'react';
import { education } from "../../constants";
import { useTranslation } from 'react-i18next';
import { calculateTotalYearsOfExperience } from '../../lib/helpers';


function Education() {
    const { t } = useTranslation();
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [activeItem, setActiveItem] = useState(0);
    const observerRef = useRef(null);

    // Intersection Observer para animaciones al hacer scroll
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemIndex = entry.target.getAttribute('data-education');
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
        const educationElements = document.querySelectorAll('[data-education]');
        if (observerRef.current) {
            educationElements.forEach(el => observerRef.current.observe(el));
        }

        return () => {
            if (observerRef.current) {
                educationElements.forEach(el => observerRef.current.unobserve(el));
            }
        };
    }, []);

    // Auto-change active item every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveItem(prev => (prev + 1) % education.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

        const totalYearsStudy = calculateTotalYearsOfExperience(education);
    return (
        <section
            id="education"
            className="py-12 sm:py-16 md:py-24 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-skills clip-path-custom-3"
        >
            {/* Section Title */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t("education.title")}</h2>
                <div className="w-20 sm:w-24 md:w-32 h-1 bg-color-section mx-auto mt-3 md:mt-4"></div>
                <p className="text-gray-400 mt-3 md:mt-4 text-base sm:text-lg font-semibold px-4">
                    {t("education.subtitle")}
                </p>
            </div>

            {/* Education Timeline - Completamente Responsive */}
            <div className="relative max-w-5xl mx-auto">
                {/* Timeline line - Responsive positioning */}
                <div className="absolute left-4 sm:left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-color-primary via-color-secundary to-color-primary opacity-60"></div>
                
                {/* Timeline dots animation - Responsive */}
                <div className="absolute left-3 sm:left-4 md:left-5 top-0 bottom-0">
                    <div className="animate-pulse w-2 h-2 bg-color-primary rounded-full absolute top-16 sm:top-20 animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="animate-pulse w-1 h-1 bg-color-secundary rounded-full absolute top-32 sm:top-40 animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="animate-pulse w-1 h-1 bg-color-primary rounded-full absolute top-48 sm:top-60 animate-bounce" style={{animationDelay: '2s'}}></div>
                </div>

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                    {education.map((edu, index) => (
                        <div
                            key={edu.key}
                            data-education={index}
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
                                <div className={`group bg-gradient-dark-card border-2 transition-all duration-500 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-box-education-card hover:shadow-2xl hover:shadow-color-primary/20 transform hover:scale-[1.02] ${
                                    activeItem === index 
                                        ? 'border-color-primary/50 bg-color-primary/5' 
                                        : 'border-white/20 hover:border-color-primary/30'
                                }`}>
                                    
                                    {/* Date badge - Responsive */}
                                    <div className="absolute -top-2 sm:-top-3 right-3 sm:right-4 bg-gradient-to-r from-color-primary to-color-secundary text-white px-2 sm:px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                                        {t(`education.institutions.${edu.key}.date`)}
                                    </div>

                                    {/* Academic level indicator - Responsive */}
                                    <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4 flex items-center space-x-1 sm:space-x-2">
                                        {
                                            edu.completed ? (   
                                                <>
                                                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-xs text-gray-300 bg-gray-800/80 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full hidden sm:inline">
                                                    {t("education.statusEdu.completed")}
                                                </span>
                                                </>
                                            ) : (       
                                                <>                               
                                                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                                                <span className="text-xs text-gray-300 bg-gray-800/80 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full hidden sm:inline">
                                                    {t("education.statusEdu.inProgress")}
                                                </span>
                                                </> 
                                            )
                                        }
                                    </div>

                                    {/* Header - Responsive layout */}
                                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4 pt-3 sm:pt-4">
                                        {/* School Logo - Responsive sizing */}
                                        <div className="relative flex-shrink-0">
                                            <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 p-1.5 sm:p-2 bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg group-hover:shadow-color-primary/30 transition-all duration-300">
                                                <img
                                                    src={edu.img}
                                                    alt={t(`education.institutions.${edu.key}.school`)}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                            {/* Floating icon - Hidden on mobile 
                                            <div className="hidden sm:block absolute -top-1 -right-1 w-5 sm:w-6 h-5 sm:h-6 bg-color-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                            </div>
                                            */}
                                        </div>

                                        {/* Degree and School Info - Responsive text */}
                                        <div className="flex-grow min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 transition-colors duration-300 leading-tight">
                                                {t(`education.institutions.${edu.key}.degree`)}
                                            </h3>
                                            <h4 className="text-color-secundary font-semibold text-base sm:text-lg mb-2 leading-tight">
                                                {t(`education.institutions.${edu.key}.school`)}
                                            </h4>
                                            
                                            {/* Academic status badge - Responsive */}
                                            <div className="inline-block bg-color-primary/20 text-color-primary px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-color-primary/30 mb-2 sm:mb-3">
                                                {t(`education.institutions.${edu.key}.type`)}
                                            </div>
                                        </div>

                                        {/* Duration indicator - Only on larger screens */}
                                        <div className="hidden md:block text-right">
                                            <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg px-3 py-2">
                                                <div className="text-xs text-gray-300 text-center">
                                                    <div className="text-color-primary font-bold">
                                                        {t(`education.institutions.${edu.key}.duration`)}
                                                    </div>
                                                    <div>{t(`education.duration`)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Grade with progress bar - Responsive */}
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-400">{t(`education.academicPerformance`)}:</span>
                                            {
                                            edu.completed ? null :
                                            
                                            (<div> 
                                                <span className="text-sm text-gray-400 mr-2">{t(`education.estimatedCompletionDate`)}:</span>                                    
                                                <span className="text-sm font-bold text-color-primary">
                                                    {t(`education.institutions.${edu.key}.estimatedCompletionDate`)}
                                                </span>
                                            </div>)
                                            }
                                        </div>
                                        <div className="w-1/3 bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                            <div 
                                                className={`h-full bg-gradient-to-r from-color-primary to-color-secundary rounded-full transition-all duration-1000 ease-out ${
                                                    visibleItems.has(index.toString()) 
                                                        ? index === 0 ? 'w-[95%]' : index === 1 ? 'w-[88%]' : 'w-[92%]'
                                                        : 'w-0'
                                                }`}
                                                style={{ transitionDelay: `${(index * 200) + 300}ms` }}
                                            >
                                                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description - Responsive text */}
                                    <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                                        {t(`education.institutions.${edu.key}.desc`)}
                                    </p>

                                    {/* Key achievements - Responsive */}
                                    <div className="mb-4 sm:mb-6">
                                        <h5 className="text-white font-semibold mb-2 sm:mb-3 text-sm">{t(`education.highlights`)}:</h5>
                                        <ul className="text-gray-400 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                                            {
                                                t(`education.institutions.${edu.key}.highlights`, { returnObjects: true }).map(highlight => (
                                                    <li className="flex items-start">
                                                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-color-primary rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5"></div>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    {/* Skills/subjects learned - Responsive */}
                                    <div className="mt-4 sm:mt-6">
                                        <h5 className="font-medium text-white text-sm mb-2 sm:mb-3">{t("education.skillsAcquired")}:</h5>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {t(`education.institutions.${edu.key}.skillsAcquired`, { returnObjects: true }).map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-color-primary/20 text-color-primary px-2 sm:px-3 py-1 text-xs font-medium rounded-full border border-color-primary/30 hover:bg-color-primary/30 transition-colors duration-300 cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Hover overlay effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-color-primary/5 to-color-secundary/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education Summary Stats - Responsive */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                <div className="text-center p-4 sm:p-6 bg-gradient-dark-card/50 rounded-xl border border-color-primary/20 backdrop-blur-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-color-primary mb-2">
                        {education.length}
                    </div>
                    <div className="text-gray-400 text-sm">{t(`education.totalInstitutions`)}</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-dark-card/50 rounded-xl border border-color-primary/20 backdrop-blur-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-color-primary mb-2">
                        {totalYearsStudy}+
                    </div>
                    <div className="text-gray-400 text-sm">{t(`education.totalStudyYears`)}</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-dark-card/50 rounded-xl border border-color-primary/20 backdrop-blur-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-color-primary mb-2">
                        {t(`education.excelent`)}
                    </div>
                    <div className="text-gray-400 text-sm">{t(`education.performance`)}</div>
                </div>
            </div>

            {/* Academic achievements showcase - Responsive 
            <div className="mt-8 sm:mt-12 bg-gradient-dark-card/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-color-primary/20 max-w-5xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Formación Académica</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center p-4 sm:p-6 bg-gradient-dark-card/50 rounded-xl border border-gray-700/50 hover:border-color-primary/50 transition-all duration-300 hover:scale-105 group">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 sm:mb-4 bg-color-primary/20 rounded-xl flex items-center justify-center group-hover:bg-color-primary/30 transition-colors">
                            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Innovación</h4>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Proyectos creativos y soluciones innovadoras</p>
                    </div>

                    <div className="text-center p-4 sm:p-6 bg-gradient-dark-card/50 rounded-xl border border-gray-700/50 hover:border-color-primary/50 transition-all duration-300 hover:scale-105 group">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 sm:mb-4 bg-color-primary/20 rounded-xl flex items-center justify-center group-hover:bg-color-primary/30 transition-colors">
                            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Excelencia</h4>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Altos estándares académicos mantenidos</p>
                    </div>

                    <div className="text-center p-4 sm:p-6 bg-gradient-dark-card/50 rounded-xl border border-gray-700/50 hover:border-color-primary/50 transition-all duration-300 hover:scale-105 group sm:col-span-2 lg:col-span-1">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-3 sm:mb-4 bg-color-primary/20 rounded-xl flex items-center justify-center group-hover:bg-color-primary/30 transition-colors">
                            <svg className="w-5 sm:w-6 h-5 sm:h-6 text-color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Aprendizaje Continuo</h4>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">Compromiso con la actualización constante</p>
                    </div>
                </div>
            </div>
            */}

            {/* Learning progression indicator - Responsive */}
            <div className="mt-8 sm:mt-12 text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-color-primary/10 to-color-secundary/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-color-primary/20">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-color-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-white font-semibold text-sm sm:text-base">{t(`education.specializedTraining`)}</span>
                    <div className="ml-3 sm:ml-4 flex space-x-1">
                        {[...Array(4)].map((_, i) => (
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
                    {t(`education.callToAction`)}
                </p>
                <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center text-color-primary hover:text-white transition-colors duration-300 group bg-color-primary/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-color-primary/20"
                >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm sm:text-base">{t(`education.action`)}</span>
                    <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}

export default Education