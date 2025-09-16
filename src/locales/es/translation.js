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
    "description": "Apasionado por transformar ideas en productos inteligentes. Con experiencia en el diseño de aplicaciones escalables y automatización de procesos. Mi enfoque es construir soluciones de software robustas, desde el backend hasta el frontend, integrando IA para potenciar la eficiencia y generar valor medible.",
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
        "desc": "Diseñé e implementé soluciones de IA para automatizar contenido creativo y optimizar interacciones con clientes, usando ML y NLP en equipos ágiles para mejorar rendimiento y escalabilidad.",
        "achievements": [
          "Integré APIs de IA (ChatGPT, Eleven Labs) en 4 apps web con Django, FastAPI y Express.js, usando RAG y prompts personalizados: reduje intervención manual en 30%.",
          "Ajusté modelo GPT-2 para generar letras de canciones integrado con Suno: bajó costos creativos en 20%.",
          "Creé chatbot con LangChain y RAG: gestiona 1,000+ consultas/día con 70% de resolución automática, elevando eficiencia en soporte."
        ]
      },
      "nucleoenii": {
        "role": "Desarrollador Fullstack",
        "company": "Núcleo ENII",
        "date": getConvertedDate(experiences, "nucleoenii", "es"),
        "duration": getDurationByKey(experiences, "nucleoenii", "es"),
        "desc": "Lideré desarrollo integral para clientes clave, con SpringBoot, Django/FastAPI en backend, y frontend en React/Angular. Gestioné ciclo completo de software en equipos ágiles, integrando CI/CD.",
        "achievements": [
          "Desarrollé módulo de pagos en microservicios con Spring Boot: +30% eficiencia en transacciones y -40% costos operativos.",
          "Implementé interfaces responsivas en React y Angular: +20% retención de clientes.",
          "Refactoricé módulos clave: +15% modularidad y -15% errores en producción."
        ]
      },
      "nucleoenii-intern": {
        "role": "Pasante",
        "company": "Núcleo ENII",
        "date": getConvertedDate(experiences, "nucleoenii-intern", "es"),
        "duration": getDurationByKey(experiences, "nucleoenii-intern", "es"),
        "desc": "Desarrollé backend para sistema de gestión de condominios con Spring Boot, usando arquitectura hexagonal y microservicios para mayor escalabilidad.",
        "achievements": [
          "Implementé arquitectura hexagonal con microservicios: -20% tiempo de desarrollo y +15% resiliencia.",
          "Optimizé consultas BD e integré APIs: +15% eficiencia en datos.",
          "Colaboré en SCRUM con pruebas unitarias: -10% retrasos por errores."
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
        "type": "Título Profesional",
        "desc": "Cursando Licenciatura en Computación con enfoque en IA y ML. Tesis en detección de discurso de odio en español usando Transformers (BERT), combinando investigación y aplicaciones prácticas para resolver desafíos sociales.",
        "degree": "Licenciatura en Computación",
        "highlights": [
          "Especialización en IA y ML con énfasis en NLP.",
          "Investigación en tecnologías emergentes con aplicaciones reales.",
          "Proyectos interdisciplinarios: colaboración en soluciones tecnológicas con relevancia social."
        ],
        "skillsAcquired": [
          "IA y Machine Learning (incluyendo Transformers y NLP)",
          "Programación Avanzada (Python, Java, C++)",
          "Algoritmos y Estructuras de Datos",
          "Bases de Datos (SQL, NoSQL)",
          "Ingeniería de Software Ágil",
          "Matemáticas Computacionales"
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
        "description": "Desarrollé un ChatBot basado en RAG que permite consultas en lenguaje natural sobre documentos PDF personalizados. Integré LangChain para cadenas de procesamiento, FAISS para almacenamiento vectorial eficiente, FastAPI en el backend para escalabilidad, y Streamlit para una interfaz conversacional fluida y responsive.",
        "features": [
            "Carga y procesamiento de PDFs con extracción automática de texto y embeddings.",
            "RAG para recuperar información relevante y generar respuestas precisas, reduciendo alucinaciones en un 50%.",
            "Interfaz intuitiva con Chat conversacional en Streamlit",
            "FastAPI para manejar consultas concurrentes e integración con bases de datos vectoriales",
          ]
      },
      "storymaker": {
        "title": "StoryMaker AI",
        "description": "Desarrollé una aplicación innovadora que usa IA para crear experiencias narrativas inmersivas y personalizadas, integrando generación de historias, imágenes y voz para usuarios en español e inglés.",
        "features": [
          "Generación de historias personalizadas con Google Gemini AI.",
          "Creación de imágenes cinematográficas inmersivas que complementan la historia.",
          "Narración de voz profesional con Amazon Polly.",
          "Interfaz optimizada para móviles con React y Tailwind CSS.",
          "Soporte multiidioma para accesibilidad global.",
          "Vercel Serverless Functions para manejar APIs de IA sin servidores dedicados."
        ]
      }
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