"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Briefcase, User, BrainCircuit, Send, Home, Github, Linkedin, Mail } from 'lucide-react';
import { Hamburger } from '@/components/ui/hamburger';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { resumeData } from '@/config/resume-data';
import { playfairDisplay } from '@/lib/fonts';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { useTranslation } from '@/context/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { t } = useTranslation();

	const navItems = [
		{ label: t.navbar.home, href: '#hero', icon: Home },
		{ label: t.navbar.about, href: '#about', icon: User },
		{ label: t.navbar.skills, href: '#skills', icon: BrainCircuit },
		{ label: t.navbar.experience, href: '#experience', icon: Briefcase },
		{ label: t.navbar.contact, href: '#contact', icon: Send },
	];



	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link href="#hero" className="flex items-center gap-2" aria-label="Homepage">
					<img src="/images/blue logo.png" alt="Logo" className="h-8 w-8 mr-2" />
					<span className={`navbar-header fancy-header ${playfairDisplay.variable} animate-fade-in`}>{t.resume.name}</span>
				</Link>

				<div className="flex items-center gap-6">
					<nav className="hidden md:flex items-center space-x-1">
						{navItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
								aria-label={item.label}
							>
								<item.icon className="h-4 w-4" />
								{item.label}
							</Link>
						))}
					</nav>

					<LanguageSwitcher />

					<div className="flex items-center md:hidden">
						<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
							<SheetTrigger asChild>
								<Hamburger isOpen={mobileMenuOpen} aria-label="Open menu" />
							</SheetTrigger>
							<SheetContent side="right" className="w-full sm:max-w-sm bg-background/95 backdrop-blur-xl border-l border-border/40 p-6 flex flex-col h-full [&>button]:hidden">
								<SheetHeader className="mb-8 text-left flex flex-row items-center justify-between">
									<div className="flex items-center gap-2">
										<Link href="#hero" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)} aria-label="Homepage">
											<img src="/images/blue logo.png" alt="Logo" className="h-8 w-8 mr-2" />
											<span className={`navbar-header fancy-header ${playfairDisplay.variable} animate-fade-in`}>{t.resume.name}</span>
										</Link>
									</div>
									<div className="absolute right-4 sm:right-6 top-2">
										<Hamburger isOpen={true} onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" />
									</div>
									<SheetTitle className="sr-only">Mobile Menu</SheetTitle>
								</SheetHeader>
								<nav className="flex flex-col space-y-6 flex-1">
									{navItems.map((item) => (
										<Link
											key={item.label}
											href={item.href}
											onClick={() => setMobileMenuOpen(false)}
											className="group flex items-center gap-4 text-lg font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground p-3 rounded-lg transition-all duration-300 nav-item-animate"
											aria-label={item.label}
										>
											<item.icon className="h-5 w-5" />
											{item.label}
										</Link>
									))}
								</nav>
								<div className="mt-auto pt-8 border-t border-border/40">
									<div className="flex justify-center space-x-6 mb-6">
										{resumeData.contact.whatsapp && (
											<Link href={`https://wa.me/${resumeData.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform">
												<WhatsAppIcon className="h-6 w-6" />
											</Link>
										)}
										{resumeData.contact.github && (
											<Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform">
												<Github className="h-6 w-6" />
											</Link>
										)}
										{resumeData.contact.linkedin && (
											<Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform">
												<Linkedin className="h-6 w-6" />
											</Link>
										)}
										{resumeData.contact.email && (
											<Link href={`mailto:${resumeData.contact.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform">
												<Mail className="h-6 w-6" />
											</Link>
										)}
									</div>
									<p className="text-sm text-center text-muted-foreground">
										© {new Date().getFullYear()} {t.resume.name}. <br /> All rights reserved.
									</p>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
