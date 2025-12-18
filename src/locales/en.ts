import { Translations } from './types';
import { resumeData } from '@/config/resume-data';

export const en: Translations = {
    navbar: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        contact: 'Contact',
    },
    hero: {
        getInTouch: 'Get in Touch',
        viewMyWork: 'View My Work',
    },
    about: {
        title: 'About Me',
        summary: resumeData.summary,
        educationTitle: 'Education',
        certificationsTitle: 'Certifications',
        achievementsTitle: 'Achievements',
    },
    skills: {
        title: 'My Expertise',
        subtitle: 'Technologies and tools I work with to build modern, scalable applications',
    },
    education: {
        items: resumeData.education.map((edu) => ({
            degree: edu.degree,
            institution: edu.institution,
            period: edu.period,
        })),
    },
    certifications: {
        items: resumeData.certifications.map((cert) => ({
            name: cert.name,
            issuer: cert.issuer,
            year: cert.year,
        })),
    },
    achievements: {
        items: resumeData.achievements.map((ach) => ({
            title: ach.title,
            description: ach.description,
        })),
    },
    experience: {
        title: 'Experience & Projects',
        keyResponsibilities: 'Key Responsibilities:',
        technologiesUsed: 'Technologies Used:',
        visitWebsite: 'Visit Website',
        items: resumeData.experience.map((exp) => ({
            role: exp.role,
            company: exp.company,
            period: exp.period,
            description: exp.description,
            responsibilities: exp.responsibilities,
            technologies: exp.technologies,
            projectLinks: exp.projectLinks,
        })),
    },
    contact: {
        title: 'Get in Touch',
        getInTouch: "What's Next?",
        email: 'Send me an email',
        copyEmail: 'Copy email address',
        emailCopied: 'Email copied!',
        sendMessage: 'Send Me a Message',
        sending: 'Sending...',
        messageSent: 'Message Sent!',
        errorSending: 'Error Sending Message',
        fullName: 'Full Name',
        emailAddress: 'Email Address',
        message: 'Message',
        yourName: 'Your Name',
        yourEmailPlaceholder: 'your.email@example.com',
        yourMessage: 'Your message...',
        contactInfo: 'Contact Information',
        alternatively: 'Alternatively, you can reach me through the following channels:',
        preferredMethod: 'Preferred Contact Method:',
        preferredMethodText: 'Email is generally the quickest way to get a response for inquiries. For professional networking, LinkedIn is also a great option.',
        intro: "Have a project in mind, a question, or just want to connect? Feel free to reach out!",
        formDescription: "I'll do my best to respond as soon as possible.",
        validationName: "Name must be at least 2 characters.",
        validationEmail: "Please enter a valid email address.",
        validationMessage: "Message must be at least 10 characters.",
    },
    resume: {
        title: resumeData.title,
        name: resumeData.name,
    }
};
