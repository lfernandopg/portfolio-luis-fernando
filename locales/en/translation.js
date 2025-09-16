import { experiences, education } from "../../constants";
import { getConvertedDate, getDurationByKey } from "../../lib/helpers";

const enTranslation = {
  "navbar": {
    "about": "About Me",
    "skills": "Skills",
    "experience": "Experience",
    "works": "Projects",
    "education": "Education",
    "contact": "Contact"
  },
  "about": {
    "greeting": "Hi, I am",
    "heading": {
      "introduce" : "I am a ",
      "skills" : ["Fullstack Developer", "AI Engineer"]
    }, 
    "description": "I am a full-stack developer with over 2 years of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.",
    "cvUrl": "https://docs.google.com/document/d/18iuE5EYUa96mnuMMLbIPUXln-GFmtpQTkLuLkf9CX50/edit?usp=sharing",
    "downloadCv": "DOWNLOAD CV",
    "stats": {
      "projects": "Proyectos",
      "experience": "Años",
      "technologies": "Tecnologías",
      "clients": "Clientes"
    }
  },
  "skills": {
    "title": "SKILLS",
    "subtitle" : "A collection of my technical skills and expertise honed through various projects and experiences",
    "categories": {
      "frontend": "Frontend",
      "backend": "Backend",
      "languages": "Languages",
      "tools": "Tools & Cloud",
      "ai": "AI & Data Science"
    },
    "callToAction" : "Do you have a project in mind?",
    "action" : "Let's talk",
  },
  "experience": {
    "title": "EXPERIENCE",
    "subtitle": "A collection of my work experience and the roles I have taken in various organizations",
    "companies": {
      "tpotgroup": {
        "role": "AI Engineer",
        "company": "Tpot Group",
        "date": getConvertedDate(experiences, "tpotgroup", "en"),
        "duration": getDurationByKey(experiences, "tpotgroup", "en"),
        "desc": "As an AI Developer, I specialize in designing and implementing artificial intelligence solutions for creative content automation and customer interaction optimization. I also develop and fine-tune machine learning models for specific natural language processing (NLP) tasks. I work within an agile team, focusing on optimizing the performance and scalability of our AI platforms.",
        "achievements": [
          "Led the integration of AI APIs (ChatGPT, Eleven Labs) into 4 web applications for generating stories and videos using my backend skills with Django, FastAPI, and Express.js. I designed custom prompts and used techniques like RAG, which improved the quality of the results and reduced the need for manual intervention by 30%.",
          "Developed and fine-tuned a machine learning model (GPT-2) for generating song lyrics, integrating it with the Suno API for automated music production. This system achieved a 20% cost reduction in the creative process.",
          "Created a prototype of an intelligent support chatbot using LangChain and RAG, capable of handling over 1,000 daily queries and achieving a 70% automatic resolution rate, significantly improving customer support efficiency."
        ]
      },
      "nucleoenii": {
        "role": "Fullstack Engineer",
        "company": "Nucleo ENII",
        "date": getConvertedDate(experiences, "nucleoenii", "en"),
        "duration": getDurationByKey(experiences, "nucleoenii", "en"),
        "desc": "As a Full-Stack Developer at Núcleo ENII, I led and contributed to the development of comprehensive solutions for three key clients, applying my expertise in SpringBoot for the backend while expanding my skills with Django, FastAPI and frontend technologies. I was responsible for the full software development life cycle, from designing the architecture and implementing robust RESTful APIs to creating dynamic and intuitive user interfaces. I collaborated within agile teams, integrating CI/CD pipelines and improving project delivery efficiency.",
        "achievements" : [
          "Led the development of a new payment processing module for an e-commerce platform, designing a microservices architecture with Spring Boot. This resulted in a 30% increase in transaction processing efficiency and a 40% reduction in operational costs.",
          "Implemented responsive frontend interfaces in React and Angular, increasing client retention by 20%.",
          "Led the refactoring of key modules, improving code modularity and reducing production errors by 15%."
        ]
      },
      "nucleoenii-intern": {
        "role": "Intern",
        "company": "Nucleo ENII",
        "date": getConvertedDate(experiences, "nucleoenii-intern", "en"),
        "duration": getDurationByKey(experiences, "nucleoenii-intern", "en"),
        "desc": "As a Junior Developer Intern at Nucleo ENII, I participated in the development of a condominium management system, focusing on backend solutions with Spring Boot. I designed and implemented RESTful APIs using a hexagonal and microservices architecture, improving the system's modularity and scalability.",
        "achievements": [
          "The implementation of the hexagonal and microservices architecture reduced the development time for new features by 20% and increased system resilience.",
          "I optimized database queries and integrated third-party APIs, improving data retrieval efficiency by 15% and ensuring robust system interoperability.",
          "I collaborated in an agile SCRUM team, contributing to a 10% reduction in error-related delays through rigorous unit testing."
        ]
      },
    },
    "statusJob" : {
      "current" : "Current",
      "completed" : "Completed",
    },
    "jobTypes" : {
      "fullTime" : "Full-Time", 
      "partTime" : "Part-Time", 
      "freelance": "Freelance"
    },
    "jobModes" : {
      "inPerson" : "In Person", 
      "remote" : "Remote", 
      "hybrid" : "Hydrid"
    },
    "duration" : "duration",
    "mainAchievements" : "Main achievements",
    "technologies": "technologies",
    "totalTechnologies": "Technologies",
    "totalClients": "Clients",
    "totalPositions": "Positions",
    "totalExperienceYears": "Years of Experience",
    "growth" : "Continuous professional growth",
    "callToAction" : "Interested in my professional experience?",
    "action" : "See my projects",
  },
  "education": {
    "title": "EDUCATION",
    "subtitle": "My education has been a journey of learning and development. Here are the details of my academic background.",
    "institutions": {
      "ucv": {
        "school": "Central University of Venezuela (UCV)",
        "date": getConvertedDate(education, "ucv", "en"),
        "duration": getDurationByKey(education, "ucv", "en"),
        "estimatedCompletionDate": "Dec - 2025",
        "type" : "Professional Degree",
        "desc": "I am currently pursuing a Bachelor's degree in Computer Science at the Faculty of Sciences, Central University of Venezuela, finalizing my thesis. My academic journey has provided a strong foundation in programming, algorithms, data structures, databases, software engineering, and operating systems, with a focus on emerging technologies. My thesis, centered on detecting hate speech in Spanish using Machine Learning techniques such as Transformers (BERT), bridges academic research with practical applications to address social and technological challenges.",
        "degree": "Bachelor's in Computer Science",
        "highlights": [
          "Specialization in Artificial Intelligence and Machine Learning",
          "Thesis: Hate Speech Detection in Spanish Using Transformer Models",
          "Applied research in cutting-edge technologies",
          "Collaboration in interdisciplinary projects with real-world impact"
        ],
        "skillsAcquired": [
          "Artificial Intelligence and Machine Learning",
          "Advanced Programming (Python, Java, C++)",
          "Algorithm Design and Optimization",
          "Database Management (SQL, NoSQL)",
          "Software Engineering and Agile Methodologies",
          "Applied Mathematics for Computing",
          "Natural Language Processing (NLP)"
        ]
      },
    },
    "duration" : "duration",
    "statusEdu" : {
      "completed": "Completed",
      "inProgress" : "In progress"
    },
    "academicPerformance" : "Academic Performance",
    "estimatedCompletionDate" : "Estimated Completion Date",
    "highlights" : "Highlights",
    "skillsAcquired" : "Skills acquired",
    "totalInstitutions" : "Institutions",
    "totalStudyYears": "Years of Study",
    "performance" : "Performance",
    "excelent" : "Excelent",
    "specializedTraining" : "Solid and specialized training",
    "callToAction" : "Would you like to know more about my academic background?",
    "action" : "Let's talk",
  },
  "works": {
    "title": "PROJECTS",
    "subtitle": "A showcase of the projects I have worked on, highlighting my skills and experience in various technologies",
    "projects": {
      "pdfchat": {
        "title": "PDF Chat",
        "description":
          "Built a RAG-based ChatBot application enabling users to query custom documents in natural language. Integrated LangChain, FAISS vector stores, and FastAPI backend, achieving fast and scalable document search with a smooth conversational interface.",
        "features" : [
          "Responsive and optimized design",
          "Integration with REST APIs",
          "Authentication and authorization",
          "Optimized performance"
        ]  
      },
    },
    "options": {
      "live" : "View Live",
      "code" : "View Code",
      "seeMore" : "See More",
    },
    "active" : "Active",
    "all" : "All",
    "mainFeatures" : "Main Features",
    "likeProjects" : "Do you like what you see?",
    "callToAction" : "These are just a few of my projects. I have many more ideas and I'm ready to create something amazing with you.",
    "action" : "Let's work together",
  },
  "contact": {
    "title": "CONTACT",
    "subtitle": "Feel free to reach out to me for any questions or opportunities!",
    "form-title": "Contact Me! ",
    "placeholderName": "Your Name",
    "placeholderEmail": "Your Email",
    "placeholderSubject": "Subject of the message",
    "placeholderMessage": "Your Message",
    "name": "Name",
    "email": "Email",
    "subject": "Subject",
    "message": "Message",
    "send": "Send Message",
    "responseTime" : "Response Time",
    "satisfaction" : "Satisfaction",
    "availability" : "Available",
    "sendYourMessage": "Send me your Message",
    "contactInfo": "Contact Information",
    "myLocation" : "My Location",
    "myEmail" : "My Email",
    "myPhone" : "My Phone",
    "errorMessage": "Error sending message. Please try again.",
    "sending" : "Sending...",
    "sucessMessage": "Message sent successfully!",
    "responseMessage" : "I will get back to you soon. Thank you for contacting me!",
  },
  "footer": {
    "copyright" : "© 2025 Luis Fernando Peña. All rights reserved."
  },
  "language_selector": {
    "select_language": "Select Language"
  }
}


export default enTranslation;