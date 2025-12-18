export interface Translations {
    navbar: {
        home: string;
        about: string;
        skills: string;
        experience: string;
        contact: string;
    };
    hero: {
        getInTouch: string;
        viewMyWork: string;
    };
    about: {
        title: string;
        summary: string;
        educationTitle: string;
        certificationsTitle: string;
        achievementsTitle: string;
    };
    skills: {
        title: string;
        subtitle: string;
    };
    education: {
        items: {
            degree: string;
            institution: string;
            period: string;
        }[];
    };
    certifications: {
        items: {
            name: string;
            issuer: string;
            year?: string | number;
        }[];
    };
    achievements: {
        items: {
            title: string;
            description: string;
        }[];
    };
    experience: {
        title: string;
        keyResponsibilities: string;
        technologiesUsed: string;
        visitWebsite: string;
        items: {
            role: string;
            company: string;
            period: string;
            description: string;
            responsibilities: string[];
            technologies?: string[];
            projectLinks?: {
                name: string;
                url: string;
            }[];
        }[];
    };
    contact: {
        title: string;
        getInTouch: string;
        email: string;
        copyEmail: string;
        emailCopied: string;
        sendMessage: string;
        sending: string;
        messageSent: string;
        errorSending: string;
        fullName: string;
        emailAddress: string;
        message: string;
        yourName: string;
        yourEmailPlaceholder: string;
        yourMessage: string;
        contactInfo: string;
        alternatively: string;
        preferredMethod: string;
        preferredMethodText: string;
        intro: string;
        formDescription: string;
        validationName: string;
        validationEmail: string;
        validationMessage: string;
    };
    resume: {
        title: string;
        name: string;
    };
}
