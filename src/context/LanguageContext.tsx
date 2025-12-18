"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from '@/locales/en';
import { pt } from '@/locales/pt';
import { es } from '@/locales/es';
import { Translations } from '@/locales/types';

type Language = 'en' | 'pt' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
    en,
    pt,
    es,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'pt' || savedLang === 'es')) {
            setLanguage(savedLang);
        } else {
            // Optional: Detect browser language
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'pt') setLanguage('pt');
            else if (browserLang === 'es') setLanguage('es');
        }
        setMounted(true);
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    // Prevent hydration mismatch by rendering children only after mount (or just render default language)
    // For SEO purposes, it's better to render default, but for avoiding flash of wrong text, we wait or use default.
    // Since we use 'en' as default, it matches the server render usually.

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
}
