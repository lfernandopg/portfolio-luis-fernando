import { experiences, education  } from "../../constants";
import { getConvertedDate, getDurationByKey } from "../../lib/helpers";

const esTranslation = {
  "navbar": {
    "home": "Inicio",
    "about": "Conoceme",
    "skills": "Habilidades",
    "experience": "Experiencia",
    "works": "Proyectos",
    "education": "Educación",
    "contact": "Contacto"
  },
  "about": {
    "greeting": "Hola, me llamo",
    "heading": {
      "introduce" : "Y soy un ",
      "skills" : ["Desarrollador Fullstack", "Ingeniero de IA"]
    }, 
    "description": "Soy un desarrollador full-stack con más de 2 años de experiencia en la creación de aplicaciones web escalables. Experto en desarrollo front-end y back-end, me especializo en el stack MERN y otras tecnologías modernas para crear experiencias de usuario fluidas y soluciones eficientes.",
    "cvUrl": "https://docs.google.com/document/d/1PZZuuXDW_RJsrh0ocegTQa-fEBGt_Fgd-H4Wd1ea_20/edit?usp=sharing",
    "downloadCv": "DESCARGAR CV"
  },
  "skills": {
    "title": "HABILIDADES",
    "subtitle" : "Una colección de mis habilidades técnicas y experiencia perfeccionada a través de varios proyectos y experiencias",
    "categories": {
      "frontend": "Frontend",
      "backend": "Backend",
      "languages": "Lenguajes",
      "tools": "Herramientas",
      "ai": "IA"
    },
    "callToAction" : "¿Tienes un proyecto en mente?",
    "action" : "Hablemos",
  },
  "experience": {
    "title": "EXPERIENCIA",
    "subtitle": "Una colección de mi experiencia laboral y los roles que he desempeñado en varias organizaciones",
    "companies": {
      "tpotgroup": {
        "role": "Ingeniero de Inteligencia Artificial",
        "company": "Tpot Group",
        "date": getConvertedDate(experiences, "tpotgroup", "es"),
        "duration": getDurationByKey(experiences, "tpotgroup", "es"),
        "desc": "Como AI Developer, me especializo en el diseño e implementación de soluciones de inteligencia artificial para la automatización de contenido creativo y la optimización de la interacción con el cliente. Además, desarrollo y ajusto modelos de machine learning para tareas específicas de procesamiento del lenguaje natural (NLP). Trabajo dentro de un equipo ágil, enfocándome en optimizar el rendimiento y la escalabilidad de nuestras plataformas de IA",
        "achievements" : [
          "Lideré la integración de APIs de IA (ChatGPT, Eleven Labs) en 4 aplicaciones web para la generación de historias y videos utilizando mis habilidades en backend con Django, FastAPI y Express.js. Diseñé prompts personalizados y uso de tecnicas como RAG que mejoraron la calidad de los resultados y redujeron la necesidad de intervención manual en un 30%.",
          "Desarrollé y ajusté un modelo de machine learning (GPT-2) para la generación de letras de canciones, integrándolo con la API de Suno para la producción musical automatizada. Este sistema logró una reducción de costos del 20% en el proceso creativo.",
          "Creé un prototipo de chatbot de soporte inteligente utilizando LangChain y RAG, capaz de gestionar más de 1,000 consultas diarias y alcanzar una tasa de resolución automática del 70%, mejorando significativamente la eficiencia del soporte al cliente"
        ]
      },
      "nucleoenii": {
        "role": "Desarrollador Fullstack",
        "company": "Núcleo ENII",
        "date": getConvertedDate(experiences, "nucleoenii", "es"),
        "duration": getDurationByKey(experiences, "nucleoenii", "es"),
        "desc": "Como Desarrollador FullStack en Núcleo ENII, lideré y contribuí al desarrollo de soluciones integrales para tres clientes clave, aplicando mi experiencia en SpringBoot para el backend y ampliando mis habilidades con Django, FastAPI y tecnologías frontend. Fui responsable del ciclo de vida completo del desarrollo de software, desde el diseño de la arquitectura y la implementación de APIs RESTful robustas hasta la creación de interfaces de usuario dinámicas e intuitivas. Colaboré en equipos ágiles, integrando pipelines CI/CD y mejorando la eficiencia en la entrega de proyectos.",
        "achievements" : [
          "Lideré el desarrollo de un nuevo módulo de procesamiento de pagos para un E-commerce, diseñando una arquitectura de microservicios con Spring Boot. Esto resultó en un aumento del 30% en la eficiencia del procesamiento de transacciones y una reducción del 40% en los costos operativos",
          "Implementé interfaces frontend responsivas en React y Angular, incrementando la retención de clientes en un 20%.",
          "Lideré la refactorización de módulos clave, mejorando la modularidad del código y reduciendo los errores en producción en un 15%"
        ]
      },
      "nucleoenii-intern": {
        "role": "Pasante",
        "company": "Núcleo ENII",
        "date": getConvertedDate(experiences, "nucleoenii-intern", "es"),
        "duration": getDurationByKey(experiences, "nucleoenii-intern", "es"),
        "desc": "Como pasante Desarrollador Junior en Núcleo ENII, participé en el desarrollo de un sistema de gestión de condominios, enfocándome en soluciones backend con Spring Boot. Diseñé e implementé APIs RESTful utilizando una arquitectura hexagonal y de microservicios, mejorando la modularidad y escalabilidad del sistema.",
        "achievements": [
          "La implementacion de la arquitectura hexagonal y de microservicios redujo el tiempo de desarrollo de nuevas funcionalidades en un 20% y aumentó la resiliencia del sistema.",
          "Optimizé consultas a bases de datos e integré APIs de terceros, mejorando la eficiencia de recuperación de datos en un 15% y asegurando una interoperabilidad robusta del sistema.",
          "Colaboré en un equipo ágil SCRUM, contribuyendo a una reducción del 10% en retrasos relacionados con errores mediante pruebas unitarias rigurosas."
        ]
      }
    },
    "statusJob" : {
      "current" : "Actual",
      "completed" : "Completado",
    },
    "jobTypes" : {
      "fullTime" : "Tiempo Completo", 
      "partTime" : "Tiempo Parcial", 
      "freelance": "Freelance"
    },
    "jobModes" : {
      "inPerson" : "Presencial", 
      "remote" : "Remote", 
      "hybrid" : "Hydrid"
    },
    "duration" : "duración",
    "mainAchievements" : "Logros principales",
    "technologies": "tecnologías",
    "totalTechnologies": "Tecnologías",
    "totalClients": "Clientes",
    "totalPositions": "Cargos",
    "totalExperienceYears": "Años de Experiencia",
    "growth" : "Crecimiento profesional continuo",
    "callToAction" : "¿Interesado en mi experiencia profesional?",
    "action" : "Ver mis proyectos",
  },
  "education": {
    "title": "EDUCACIÓN",
    "subtitle": "Mi educación ha sido un viaje de aprendizaje y desarrollo. Aquí están los detalles de mi formación académica.",
    "institutions": {
      "ucv": {
        "school": "Universidad Central de Venezuela (UCV)",
        "date": getConvertedDate(education, "ucv", "es"),
        "duration": getDurationByKey(education, "ucv", "es"),
        "estimatedCompletionDate": "Diciembre - 2025",
        "type" : "Título Profesional",
        "desc": "Actualmente curso la Licenciatura en Computación en la Facultad de Ciencias de la Universidad Central de Venezuela, culminando mi Trabajo Especial de Grado. Mi formación abarca una sólida base en programación, algoritmos, estructuras de datos, bases de datos, ingeniería de software y sistemas operativos, complementada con un enfoque en tecnologías emergentes. Mi tesis, centrada en la detección de discurso de odio en español mediante modelos de Aprendizaje Automático como Transformers (BERT), combina investigación académica con aplicaciones prácticas para abordar desafíos sociales y tecnológicos.",
        "degree": "Licenciatura en Computación",
        "highlights": [
          "Especialización en Inteligencia Artificial y Machine Learning",
          "Tesis: Detección de Discurso de Odio en Español con Modelos Transformer",
          "Investigación aplicada en tecnologías de vanguardia",
          "Participación en proyectos interdisciplinarios con impacto real"
        ],
        "skillsAcquired": [
          "Inteligencia Artificial y Machine Learning",
          "Programación Avanzada (Python, Java, C++)",
          "Diseño y Optimización de Algoritmos",
          "Gestión de Bases de Datos (SQL, NoSQL)",
          "Ingeniería de Software y Metodologías Ágiles",
          "Matemáticas Aplicadas a la Computación",
          "Procesamiento de Lenguaje Natural (NLP)"
        ]
      }
    },
    "duration" : "duración",
    "statusEdu" : {
      "completed": "Completado",
      "inProgress" : "En curso"
    },
    "academicPerformance" : "Rendimiento Académico",
    "estimatedCompletionDate" : "Fecha estimada de Finalizacion",
    "highlights" : "Aspectos Destacados",
    "skillsAcquired" : "Competencias adquiridas",
    "totalInstitutions" : "Institutiones",
    "totalStudyYears": "Años de Estudio",
    "performance" : "Rendimiento",
    "excelent" : "Excelente",
    "specializedTraining" : "Formación sólida y especializada",
    "callToAction" : "¿Quieres conocer más sobre mi formación académica?",
    "action" : "Conversemos",
  },
  "works": {
    "title": "PROYECTOS",
    "subtitle": "Una muestra de los proyectos en los que he trabajado, destacando mis habilidades y experiencia en varias tecnologías",
    "projects": {
      "pdfchat": {
        "title": "PDF Chat",
        "description":
          "Construí una aplicación tipo ChatBot basada en RAG que habilita consultas en lenguaje natural sobre documentos PDF. Integré LangChain, FAISS y FastAPI para ofrecer búsquedas rápidas y escalables, con una experiencia conversacional fluida para el usuario.",
      },
    },
    "options": {
      "live" : "Ver en Vivo",
      "code" : "Ver Codigo",
      "seeMore" : "Ver Mas",
    },
    "active" : "Activo",
    "all" : "Todos",
    "mainFeatures" : "Características principales",
    "likeProjects" : "¿Te gusta lo que ves?",
    "callToAction" : "Estos son solo algunos de mis proyectos. Tengo muchas más ideas y estoy listo para crear algo increíble contigo.",
    "action" : "Trabajemos juntos",
  },
  "contact": {
    "title": "CONTACTO",
    "subtitle": "¡No dudes en contactarme para cualquier pregunta u oportunidad!",
    "form-title": "¡Contáctame! ",
    "placeholderName": "Tu nombre completo",
    "placeholderEmail": "Tu correo electrónico",
    "placeholderSubject": "Asunto del mensaje",
    "placeholderMessage": "Tu Mensaje",
    "name": "Nombre",
    "email": "Correo electrónico",
    "subject": "Asunto",
    "message": "Mensaje",
    "send": "Enviar mensaje",
    "responseTime" : "Tiempo de respuesta",
    "satisfaction" : "Satisfacción",
    "availability" : "Disponible",
    "sendYourMessage": "Enviame tu mensaje",
    "contactInfo": "Informacion de Contacto",
    "myLocation" : "Mi Ubicación",
    "myEmail" : "Mi Correo Electrónico",
    "myPhone" : "Mi Teléfono Celular",
    "errorMessage": "Error al enviar el mensaje. Intenta de nuevo.",
    "sending" : "Enviando...",
    "sucessMessage": "¡Mensaje enviado exitosamente!",
    "responseMessage" : "Te responderé pronto. ¡Gracias por contactarme!",
  },
  "footer": {
    "copyright" : "© 2025 Luis Fernando Peña. Todos los derechos revervados."
  },
  "language_selector": {
    "select_language": "Seleccionar idioma"
  }
}

export default esTranslation;