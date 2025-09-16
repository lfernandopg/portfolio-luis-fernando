import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { projects as projectsDict } from "../../constants";

function Work() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState(new Set());

    // Simulación de métricas de GitHub para cada proyecto
    const [projectMetrics] = useState(() => {
        const metrics = {};
        projectsDict.forEach(project => {
            metrics[project.key] = {
                stars: Math.floor(Math.random() * 50) + 10,
                forks: Math.floor(Math.random() * 20) + 3,
                watchers: Math.floor(Math.random() * 15) + 5
            };
        });
        return metrics;
    });

    // Intersection Observer para animaciones
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const projectIndex = entry.target.getAttribute('data-project');
                        setVisibleProjects(prev => new Set([...prev, projectIndex]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const projectElements = document.querySelectorAll('[data-project]');
        projectElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    const projects = projectsDict.map(project => {
        project.title = t(`works.projects.${project.key}.title`);
        project.description = t(`works.projects.${project.key}.description`);
        return project;
    });

    // Filtros únicos basados en tags (opcional, si quieres implementar filtros)
    const uniqueTags = ['all', ...new Set(projects.flatMap(p => p.tags?.slice(0, 2) || []))];

    // Filtrado de proyectos
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.tags?.includes(filter));

    return (
        <section
            id="work"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
        >
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">{t("works.title")}</h2>
                <div className="w-32 h-1 bg-color-section mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    {t("works.subtitle")}
                </p>

                {/* Filtros sutiles (opcional)
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {uniqueTags.slice(0, 4).map(tag => ( // Limitar a 4 filtros para no sobrecargar
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                filter === tag 
                                    ? 'bg-color-primary text-white shadow-lg' 
                                    : 'bg-transparent border border-color-primary/50 text-color-primary hover:bg-color-primary/10'
                            }`}
                        >
                            {tag === 'all' ? t("works.all"): tag}
                        </button>
                    ))}
                </div>
                 */}
            </div>

            {/* Projects Grid */}
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.key}
                        data-project={index}
                        onClick={() => handleOpenModal(project)}
                        className={`group border border-white bg-gradient-dark-card backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-box-project-card hover:-translate-y-2 transition-all duration-500 transform ${
                            visibleProjects.has(index.toString()) 
                                ? 'translate-y-0 opacity-100' 
                                : 'translate-y-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div className="relative p-4 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Overlay con métricas 
                            <div className="absolute inset-4 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
                                <div className="flex space-x-3 p-4">
                                    <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-yellow-400">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-xs font-bold">{projectMetrics[project.key]?.stars}</span>
                                    </div>
                                    <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-blue-400">
                                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                        </svg>
                                        <span className="text-xs font-bold">{projectMetrics[project.key]?.forks}</span>
                                    </div>
                                </div>
                            </div>
                            */}

                            {/* Badge de estado */
                            project.active ?

                                (<div className="absolute top-6 left-6 bg-green-500/90 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                    { t("works.active") }
                                </div>)
                            : 
                                null
                            }
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-color-primary transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="mb-4">
                                {project.tags?.slice(0, 3).map((tag, index) => (
                                    <span
                                        key={index}
                                        className="inline-block bg-[#251f38] text-xs font-semibold text-color-primary rounded-full px-2 py-1 mr-2 mb-2 transition-transform duration-300 hover:scale-105"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {project.tags?.length > 3 && (
                                    <span className="inline-block bg-gray-700 text-gray-300 text-xs rounded-full px-2 py-1 mr-2 mb-2">
                                        +{project.tags.length - 3}
                                    </span>
                                )}
                            </div>

                            {/* Preview de botones */}
                            <div className="flex space-x-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex-1 bg-gray-800/50 text-center py-2 rounded text-sm text-gray-300">
                                    {t("works.options.seeMore")}
                                </div>
                            </div>
                        </div>

                        {/* Efecto de brillo en hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* Modal mejorado */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn">
                    <div className="bg-gradient-dark-card rounded-2xl shadow-2xl lg:w-[80%] w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto relative animate-slideUp">
                        
                        {/* Botón Cerrar mejorado */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={handleCloseModal}
                                className="text-white text-3xl font-bold hover:text-color-primary transition-all duration-300 hover:rotate-90 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
                            >
                               x
                            </button>
                        </div>

                        {/* Contenido del modal */}
                        <div className="flex flex-col lg:flex-row gap-6 px-6 pb-8">
                            
                            {/* Imagen con métricas */}
                            <div className="lg:w-1/2 flex flex-col items-center justify-center">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-2xl mb-4"
                                />
                                
                                {/* Métricas expandidas 
                                <div className="flex space-x-4 text-sm">
                                    <div className="flex items-center text-yellow-400">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="font-semibold">{projectMetrics[selectedProject.key]?.stars} estrellas</span>
                                    </div>
                                    <div className="flex items-center text-blue-400">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                        </svg>
                                        <span className="font-semibold">{projectMetrics[selectedProject.key]?.forks} forks</span>
                                    </div>
                                    <div className="flex items-center text-green-400">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <span className="font-semibold">{projectMetrics[selectedProject.key]?.watchers} watchers</span>
                                    </div>
                                </div>
                                */}

                                {/* Botones de acción mejorados */}
                                <div className="w-full flex mt-4 gap-4">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gray-800 hover:bg-color-primary text-gray-300 hover:text-white px-4 py-3 rounded-xl text-center font-semibold transition-all duration-300 group"
                                    >
                                        <div className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                            {t("works.options.code")}
                                        </div>
                                    </a>
                                    <a
                                        href={selectedProject.webapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-color-secundary hover:bg-color-primary text-white px-4 py-3 rounded-xl text-center font-semibold transition-all duration-300 group"
                                    >
                                        <div className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            {t("works.options.live")}
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Texto y detalles */}
                            <div className="lg:w-1/2 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 lg:text-base text-sm leading-relaxed">
                                        {selectedProject.description}
                                    </p>

                                    {/* Tags completos */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.tags?.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#251f38] text-xs font-semibold text-color-primary rounded-full px-3 py-1 border border-color-primary/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Características técnicas (simuladas) */}
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-3">{t("works.mainFeatures")}:</h4>
                                        <ul className="text-gray-400 text-sm space-y-1">
                                            {
                                                t(`works.projects.${selectedProject.key}.features`, { returnObjects: true }).map(feature => (
                                                    <li className="flex items-start">
                                                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-color-primary rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5"></div>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Call to action sutil al final */}
            <div className="text-center mt-16 py-12 bg-gradient-to-r from-color-primary/10 to-color-secundary/10 rounded-2xl border border-color-primary/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                    {t("works.likeProjects")}
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                   {t('works.callToAction')}
                </p>
                <a 
                    href="#contact" 
                    className="inline-flex items-center bg-gradient-to-r from-color-primary to-color-secundary text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                    <span>{t('works.action')}</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>

            {/* Estilos CSS para las animaciones */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.4s ease-out;
                }
            `}</style>
        </section>
    );
}

export default Work