import { useState, useEffect, useRef } from 'react';
import { SkillsInfo } from "../../constants";
import { useTranslation } from 'react-i18next';
import Tilt from "react-parallax-tilt";

function Skills() {
    const { t } = useTranslation();
    const [visibleCategories, setVisibleCategories] = useState(new Set());
    const observerRef = useRef(null);

    // Intersection Observer para animaciones al hacer scroll
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const categoryIndex = entry.target.getAttribute('data-category');
                        setVisibleCategories(prev => new Set([...prev, categoryIndex]));
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
        const categoryElements = document.querySelectorAll('[data-category]');
        if (observerRef.current) {
            categoryElements.forEach(el => observerRef.current.observe(el));
        }

        return () => {
            if (observerRef.current) {
                categoryElements.forEach(el => observerRef.current.unobserve(el));
            }
        };
    }, []);

    return (
        <section
            id="skills"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-gradient-skills clip-path-custom"
        >
            {/* Section Title */}
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">{t("skills.title")}</h2>
                <div className="w-24 h-1 bg-color-section mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    {t("skills.subtitle")}
                </p>
            </div>

            {/* Skill Categories */}
            <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
                {SkillsInfo.map((category, categoryIndex) => (
                    <div
                        key={category.key}
                        data-category={categoryIndex}
                        className={`bg-gradient-dark-card backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
                        shadow-box-skill-card transition-all duration-700 transform ${
                            visibleCategories.has(categoryIndex.toString()) 
                                ? 'translate-y-0 opacity-100' 
                                : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                            {t(`skills.categories.${category.key}`)}
                        </h3>

                        {/* Skill Items con animaciones escalonadas */}
                        <Tilt
                            key={category.title}
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            scale={1.02}
                            transitionSpeed={800}
                            gyroscope={true}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill.name}
                                        className={`group flex flex-col items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-1 sm:py-3 sm:px-2 text-center transition-all duration-500 hover:border-color-primary hover:bg-color-primary/10 hover:scale-105 transform ${
                                            visibleCategories.has(categoryIndex.toString()) 
                                                ? 'translate-y-0 opacity-100' 
                                                : 'translate-y-4 opacity-0'
                                        }`}
                                        style={{ 
                                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` 
                                        }}
                                    >
                                        <div className="relative">
                                            <img
                                                src={skill.logo}
                                                alt={`${skill.name} logo`}
                                                className="w-6 h-6 sm:w-8 sm:h-8 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            />
                                            {/* Subtle glow effect en hover */}
                                            <div className="absolute inset-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-color-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Tilt>

                        {/* Barra de progreso sutil para la categoría 
                        <div className="mt-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-400">Dominio</span>
                                <span className="text-sm text-color-primary font-semibold">
                                    {category.key === 'frontend' ? '95%' : 
                                     category.key === 'backend' ? '88%' : 
                                     category.key === 'database' ? '82%' : '90%'}
                                </span>
                            </div>
                            <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                <div 
                                    className={`h-full bg-gradient-to-r from-color-primary to-color-secundary rounded-full transition-all duration-1000 ease-out ${
                                        visibleCategories.has(categoryIndex.toString()) 
                                            ? category.key === 'frontend' ? 'w-[95%]' : 
                                              category.key === 'backend' ? 'w-[88%]' : 
                                              category.key === 'database' ? 'w-[82%]' : 'w-[90%]'
                                            : 'w-0'
                                    }`}
                                    style={{ transitionDelay: `${(categoryIndex * 200) + 500}ms` }}
                                >
                                    <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                        */}
                    </div>
                ))}
            </div>

            {/* Call to action sutil */}
            <div className="text-center mt-12">
                <p className="text-gray-400 mb-4">
                    {t("skills.callToAction")}
                </p>
                <a 
                    href="#contact" 
                    className="inline-flex items-center text-color-primary hover:text-white transition-colors duration-300 group"
                >
                    <span>{t("skills.action")}</span>
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
    )
}

export default Skills