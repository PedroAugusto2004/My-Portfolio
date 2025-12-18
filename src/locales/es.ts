import { Translations } from './types';

export const es: Translations = {
    navbar: {
        home: 'Inicio',
        about: 'Sobre Mí',
        skills: 'Habilidades',
        experience: 'Experiencia',
        contact: 'Contacto',
    },
    hero: {
        getInTouch: 'Ponerse en Contacto',
        viewMyWork: 'Ver Mis Proyectos',
    },
    about: {
        title: 'Sobre Mí',
        summary: 'Soy un Ingeniero de Software especializado en desarrollo full stack e IA. Diseño, construyo e implemento aplicaciones web y móviles escalables, desarrollo soluciones impulsadas por IA y optimizo modelos de machine learning para el rendimiento en el mundo real. Mi experiencia abarca la arquitectura de sistemas de extremo a extremo, creación rápida de prototipos, desarrollo de API, implementación en la nube e implementación de flujos de IA desde la experimentación hasta la producción.',
        educationTitle: 'Educación',
        certificationsTitle: 'Certificaciones',
        achievementsTitle: 'Logros',
    },
    skills: {
        title: 'Mi Experiencia',
        subtitle: 'Tecnologías y herramientas con las que trabajo para construir aplicaciones modernas y escalables',
    },
    education: {
        items: [
            {
                degree: "Licenciatura en Análisis y Desarrollo de Sistemas",
                institution: "Universidad Estácio",
                period: "Esperado 2026",
            }
        ]
    },
    certifications: {
        items: [
            { name: "CS50x: Introducción a la Informática", issuer: "Universidad de Harvard" },
            { name: "CS50AI: Introducción a la Inteligencia Artificial con Python", issuer: "Universidad de Harvard" },
            { name: "CS50C: Introducción a la Ciberseguridad", issuer: "Universidad de Harvard" },
            { name: "Certificación de Desarrollo Front End", issuer: "freeCodeCamp" },
            { name: "100+ horas de capacitación", issuer: "DIO (desarrollo web, nube, ingeniería de software)" },
        ]
    },
    achievements: {
        items: [
            {
                title: "Ganador del Hackathon VOX ASTRA",
                description: "Beca de patrocinadores de $300k, presentado en artículo, seleccionado entre más de 500 equipos.",
            }
        ]
    },
    experience: {
        title: 'Experiencia y Proyectos',
        keyResponsibilities: 'Responsabilidades Clave:',
        technologiesUsed: 'Tecnologías Utilizadas:',
        visitWebsite: 'Visitar Sitio Web',
        items: [
            {
                role: "Especialista en Machine Learning",
                company: "Outlier",
                period: "Remoto • 2025 – Presente",
                description: "Como Especialista en Machine Learning en Outlier, analiso y refino prompts de IA para mejorar el rendimiento del modelo. Mis responsabilidades incluyen entrenar sistemas de IA, analizar sus resultados y mejorar la calidad del contenido generado por IA. También identifico y corrijo errores en los prompts de los usuarios para garantizar la mayor precisión y eficiencia.",
                responsibilities: [
                    "Analicé y evalué salidas de LLM en tareas de razonamiento, código y basadas en prompts para mejorar el rendimiento del modelo.",
                    "Refiné y corregí prompts de IA para aumentar la claridad, reducir errores del modelo y garantizar salidas de alta calidad.",
                    "Identifiqué patrones en fallas de modelos y casos extremos, proporcionando información que mejoró la precisión general de la evaluación.",
                    "Apliqué un método de revisión estructurado para mantener la coherencia entre las tareas y mejorar la alineación con las pautas del proyecto."
                ],
                technologies: ["LLMs (GPT-4, Gemini)", "Prompt Engineering", "Python", "Data Analysis", "RLHF"],
                projectLinks: [],
            },
            {
                role: "Ingeniero Full Stack",
                company: "StudyShield",
                period: "2025",
                description: "Arquitecté e implementé StudyShield, una PWA impulsada por IA usando React 18, TypeScript y Vite; entregué una aplicación web receptiva e instalable con soporte sin conexión y control de versiones de service worker.",
                responsibilities: [
                    "Diseñé y lancé una plataforma de IA de modo dual integrando Google Gemini (Flash en línea + Nano sin conexión) con respuestas en transmisión y conmutación por error automática para garantizar baja latencia y resistencia sin conexión.",
                    "Integré Supabase para Auth, PostgreSQL y Storage; creé migraciones de DB y políticas de Seguridad a Nivel de Fila y diseñé esquemas de perfiles de usuario y conversaciones para imponer el aislamiento de datos por usuario.",
                    "Construí chat multimodal seguro: adjuntos de archivos (imágenes/PDFs vía pdfjs), entrada de voz (Web Speech API), sanitización de contenido (DOMPurify) y filtrado de contenido de IA para proteger a los usuarios.",
                    "Implementé el Modo Enfoque y UX de bloqueo de distracciones para aumentar la productividad en las sesiones de estudio; agregué seguimiento de progreso gamificado y paneles de análisis (Recharts) para aumentar la participación.",
                    "Impuse calidad de ingeniería: TypeScript estricto, ESLint, diseño de proyecto estructurado (services/integrations/hooks), preparación para CI/deploy (Vercel) y optimización de rendimiento dirigida a Lighthouse/Core Web Vitals.",
                    "Implementé internacionalización (react-i18next), primitivos de UI accesibles (Radix) y interacciones fluidas (Framer Motion) para entregar una experiencia frontend inclusiva y de nivel de producción.",
                    "Automaticé mejoras en la canalización de compilación (script de precompilación para actualizar la versión del service worker, code-splitting optimizado) para reducir el tamaño del paquete y mejorar el rendimiento percibido."
                ],
                technologies: ["React 18", "TypeScript", "Vite", "Google Gemini AI", "Supabase", "PWA", "PostgreSQL", "TailwindCSS"],
                projectLinks: [
                    { name: "Ver Código en GitHub", url: "https://github.com/PedroAugusto2004/StudyShield" },
                    { name: "Visitar Sitio Web", url: "https://study-shield-gamma.vercel.app/" }
                ],
            },
            {
                role: "Desarrollador Full Stack",
                company: "Megaphoton – Energía Solar",
                period: "Remoto • 2025",
                description: "Asistente de conversación bilingüe impulsado por Google Gemini 2.5-Flash con canalización RAG y escalada a WhatsApp para empresa de energía solar.",
                responsibilities: [
                    "Implementé un asistente de conversación bilingüe (PT/EN) impulsado por Google Gemini 2.5-Flash, con detección de idioma y contexto persistente.",
                    "Construí una canalización RAG + base de conocimientos y capas de verificación para minimizar alucinaciones y garantizar la corrección de los datos de la empresa.",
                    "Implementé escalada a WhatsApp para transferencia humana y flujos de acción rápida para solicitudes comunes; mejoré el autoservicio al cliente en un 25%.",
                    "Implementación en producción: funciones serverless de Vercel, integración de API segura por env, planificación de límites de velocidad, manejo robusto de fallback/errores, UX optimizada para dispositivos móviles (React + TypeScript + Framer Motion + Tailwind)."
                ],
                technologies: ["React", "TypeScript", "Google Gemini AI", "RAG", "Vercel AI SDK", "TailwindCSS", "Node.js"],
                projectLinks: [
                    { name: "Ver Código en GitHub", url: "https://github.com/PedroAugusto2004/megaphoton-site" },
                    { name: "Visitar Sitio Web", url: "https://megaphoton.vercel.app/" }
                ]
            },
            {
                role: "Desarrollador Full Stack",
                company: "MediMentor",
                period: "Remoto • 2024 – 2025",
                description: "Plataforma médica impulsada por IA que proporciona análisis de síntomas y diagnóstico diferencial con fuentes de datos de grado clínico.",
                responsibilities: [
                    "Integré la API de Isabel Healthcare para potenciar el análisis de síntomas impulsado por IA y el diagnóstico diferencial, garantizando fuentes de datos de grado clínico.",
                    "Arquitecté backend serverless (AWS Lambda, API Gateway) con autenticación segura (Cognito) y monitoreo de producción (CloudWatch), permitiendo interacciones confiables en tiempo real.",
                    "Implementé alojamiento frontend y CI/CD vía AWS Amplify y CloudFront para una entrega rápida y distribuida globalmente.",
                    "Construí paneles de análisis y monitoreo para rastrear la salud y el rendimiento del sistema (telemetría y registro)."
                ],
                technologies: ["React", "AWS Lambda", "API Gateway", "Cognito", "DynamoDB", "Isabel Healthcare API", "AWS Amplify"],
                projectLinks: [
                    { name: "Visitar Sitio Web", url: "https://medimentor-health.vercel.app/" }
                ]
            },
            {
                role: "Desarrollador Full Stack",
                company: "Muscles & Balance",
                period: "Remoto • 2023 – 2025",
                description: "Plataforma full-stack de salud y fitness con autenticación segura, seguimiento de entrenamientos y paneles de análisis interactivos.",
                responsibilities: [
                    "Construí la primera plataforma full-stack de salud y fitness con autenticación segura, seguimiento de entrenamientos y paneles de análisis interactivos; establecí canalizaciones de CI/CD (AWS Amplify, GitHub Actions) para lanzamientos rápidos y confiables.",
                    "Implementé características de UX en tiempo real (seguimiento de progreso y paneles) y telemetría para medir el rendimiento y los flujos de usuarios.",
                    "Lideré el desarrollo de extremo a extremo de una aplicación de fitness: diseño de producto → auth → paneles en tiempo real → CI/CD e implementaciones. Este proyecto pasó por el MLH Fellowship, lo que valida su madurez."
                ],
                technologies: ["React", "Node.js", "Express", "MongoDB", "AWS Amplify", "Chart.js", "Framer Motion"],
                projectLinks: [
                    { name: "Visitar Sitio Web", url: "https://musclesandbalance.vercel.app/" }
                ]
            },
        ],
    },
    contact: {
        title: 'Ponerse en Contacto',
        getInTouch: "¿Qué Sigue?",
        email: 'Envíame un correo',
        copyEmail: 'Copiar dirección de correo',
        emailCopied: '¡Correo copiado!',
        sendMessage: 'Envíame un Mensaje',
        sending: 'Enviando...',
        messageSent: '¡Mensaje Enviado!',
        errorSending: 'Error al Enviar Mensaje',
        fullName: 'Nombre Completo',
        emailAddress: 'Dirección de Correo',
        message: 'Mensaje',
        yourName: 'Tu Nombre',
        yourEmailPlaceholder: 'tu.correo@ejemplo.com',
        yourMessage: 'Tu mensaje...',
        contactInfo: 'Información de Contacto',
        alternatively: 'Alternativamente, puedes contactarme a través de los siguientes canales:',
        preferredMethod: 'Método de Contacto Preferido:',
        preferredMethodText: 'El correo electrónico es generalmente la forma más rápida de obtener una respuesta para consultas. Para networking profesional, LinkedIn también es una gran opción.',
        intro: "¿Tienes un proyecto en mente, una pregunta o simplemente quieres conectarte? ¡No dudes en contactarme!",
        formDescription: "Haré todo lo posible para responder tan pronto como sea posible.",
        validationName: "El nombre debe tener al menos 2 caracteres.",
        validationEmail: "Por favor, introduce una dirección de correo válida.",
        validationMessage: "El mensaje debe tener al menos 10 caracteres.",
    },
    resume: {
        title: "Ingeniero de Software | Especialista en Desarrollo Web y App",
        name: "Pedro Augusto",
    }
};
