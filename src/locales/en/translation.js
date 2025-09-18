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
    "description": "Passionate about transforming ideas into smart products. Experienced in designing scalable applications and automating processes. My focus is on building robust software solutions, from the backend to the frontend, integrating AI to enhance efficiency and generate measurable value.",
    "cvUrl": "https://drive.google.com/file/d/1lO01WyQZ8kRRwbYjTAslIM1icidgSJ6y/view?usp=sharing",
    "downloadCv": "DOWNLOAD RESUME",
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
        "role": "Artificial Intelligence Engineer",
        "company": "Tpot Group",
        "date": getConvertedDate(experiences, "tpotgroup", "en"),
        "duration": getDurationByKey(experiences, "tpotgroup", "en"),
        "desc": "Designed and implemented AI solutions to automate creative content and optimize customer interactions. Utilized ML and NLP within agile teams to enhance performance and scalability.",
        "achievements": [
          "Integrated AI APIs (ChatGPT, Eleven Labs, Replicate) into 4 web applications using Django, FastAPI, and Express.js to automate content generation, reducing manual intervention by 60%.",
          "Developed an ETL pipeline with Spark for real-time data analysis, integrated with AWS S3.",
          "Fine-tuned a GPT-2 model to generate song lyrics, integrated with Suno: lowered creative costs by 20%.",
          "Developed a chatbot with LangChain and RAG: manages 500+ queries/day with a 70% automatic resolution rate, boosting support efficiency."
        ]
      },
      "nucleoenii": {
        "role": "Fullstack Developer",
        "company": "Núcleo ENII",
        "date": getConvertedDate(experiences, "nucleoenii", "en"),
        "duration": getDurationByKey(experiences, "nucleoenii", "en"),
        "desc": "Led full-stack development for key clients using SpringBoot, Django/FastAPI on the backend and React/Angular for the frontend. Managed the complete software lifecycle in agile teams, integrating CI/CD.",
        "achievements": [
          "Developed a microservices payment module with Spring Boot: increased transaction efficiency by 30% and decreased operational costs by 40%.",
          "Implemented responsive interfaces in React and Angular: increased client retention by 20%.",
          "Refactored key modules: boosted modularity by 15% and reduced production errors by 15%."
        ]
      },
      "nucleoenii-intern": {
        "role": "Intern",
        "company": "Núcleo ENII",
        "date": getConvertedDate(experiences, "nucleoenii-intern", "en"),
        "duration": getDurationByKey(experiences, "nucleoenii-intern", "en"),
        "desc": "Developed a backend for a condominium management system using Spring Boot, leveraging hexagonal architecture and microservices for greater scalability.",
        "achievements": [
          "Implemented a hexagonal architecture with microservices: reduced development time by 20% and increased resilience by 15%.",
          "Optimized database queries and integrated APIs: improved data efficiency by 15%.",
          "Collaborated in SCRUM with unit tests: reduced delays from errors by 10%."
        ]
      }
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
        "desc": "Currently pursuing a Bachelor's degree in Computer Science with a focus on AI and ML. Thesis focuses on detecting hate speech in Spanish using Transformers (BERT), combining research with practical applications to address social challenges.",
          "degree": "Bachelor's Degree in Computer Science",
          "highlights": [
            "Specialization in AI and ML with an emphasis on NLP.",
            "Research in emerging technologies with real-world applications.",
            "Interdisciplinary projects: collaboration on technology solutions with social relevance."
          ],
          "skillsAcquired": [
            "AI and Machine Learning",
            "Advanced Programming",
            "Algorithms and Data Structures",
            "Databases (SQL, NoSQL)",
            "Agile Software Engineering",
            "Computational Mathematics"
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
        "description": "Developed a RAG-based ChatBot that allows natural language queries on custom PDF documents. I integrated LangChain for processing chains, FAISS for efficient vector storage, FastAPI on the backend for scalability, and Streamlit for a fluid and responsive conversational interface.",
        "features": [
          "Loading and processing of PDFs with automatic text extraction and embeddings.",
          "RAG to retrieve relevant information and generate accurate responses, reducing hallucinations by 50%.",
          "Intuitive interface with a conversational Chat using Streamlit.",
          "FastAPI to handle concurrent queries and integration with vector databases."
        ]
      },
      "storymaker": {
        "title": "StoryMaker AI",
        "description": "Developed an innovative application that uses AI to create immersive and personalized narrative experiences, integrating story, image, and voice generation for users in Spanish and English.",
        "features": [
          "Personalized story generation with Google Gemini AI.",
          "Creation of immersive cinematic images that complement the story.",
          "Professional voice narration with Amazon Polly.",
          "Mobile-optimized interface with React and Tailwind CSS.",
          "Multi-language support for global accessibility.",
          "Vercel Serverless Functions to handle AI APIs without dedicated servers."
        ]
      }
    },
    "options": {
      "live" : "View Live",
      "code" : "View Code",
      "seeMore" : "View More",
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
