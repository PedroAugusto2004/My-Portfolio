"use client";

import { useTranslation } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
    const { language, setLanguage } = useTranslation();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 hover:bg-transparent hover:text-primary transition-all duration-300 focus-visible:ring-0 focus-visible:ring-offset-0">
                    <Globe className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:rotate-180" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="animate-in fade-in zoom-in-95 duration-200">
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-accent font-medium' : ''}>
                    <img src="https://flagcdn.com/us.svg" alt="US Flag" className="mr-2 h-4 w-5 object-cover rounded-sm" /> English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('pt')} className={language === 'pt' ? 'bg-accent font-medium' : ''}>
                    <img src="https://flagcdn.com/br.svg" alt="Brazil Flag" className="mr-2 h-4 w-5 object-cover rounded-sm" /> Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')} className={language === 'es' ? 'bg-accent font-medium' : ''}>
                    <img src="https://flagcdn.com/es.svg" alt="Spain Flag" className="mr-2 h-4 w-5 object-cover rounded-sm" /> Español
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
