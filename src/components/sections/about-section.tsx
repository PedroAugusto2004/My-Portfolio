"use client";

import { resumeData } from '@/config/resume-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import { GraduationCap, CircleCheckBig, Zap } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';
import { useTranslation } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-transparent">
      <div className="container mx-auto max-w-screen-lg px-4">
        <AnimatedScrollWrapper>
          <SectionTitle>{t.about.title}</SectionTitle>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper delay={0.1}>
          <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl">
            {t.about.summary}
          </p>
        </AnimatedScrollWrapper>

        <div className="grid md:grid-cols-1 gap-8">
          <AnimatedScrollWrapper as="div" className="w-full" delay={0.2}>
            <Accordion type="multiple" className="w-full rounded-lg p-2">
              {t.education.items.length > 0 && (
                <AccordionItem value="education">
                  <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline data-[state=open]:text-primary">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-6 w-6 text-primary" /> {t.about.educationTitle}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <ul className="space-y-3 text-muted-foreground">
                      {t.education.items.map((edu, index) => (
                        <li key={index} className="pl-2">
                          <div className="font-medium text-foreground">{edu.degree}</div>
                          <div>{edu.institution}</div>
                          <div className="text-sm">{edu.period}</div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}

              {t.certifications.items.length > 0 && (
                <AccordionItem value="certifications">
                  <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline data-[state=open]:text-primary">
                    <div className="flex items-center gap-3">
                      <CircleCheckBig className="h-6 w-6 text-primary" /> {t.about.certificationsTitle}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <ul className="space-y-4 text-muted-foreground">
                      {t.certifications.items.map((cert, index) => (
                        <li key={index} className="pl-2">
                          <div className="flex items-start gap-2">
                            <CircleCheckBig className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                            <span>
                              <span className="font-medium text-foreground">{cert.name}</span> - {cert.issuer}
                              {cert.year && <span className="text-sm"> ({cert.year})</span>}
                            </span>
                          </div>
                          {cert.id === "cs50x" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md overflow-hidden shadow-md max-w-[200px] border border-border/50 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                                    <Image
                                      src="/images/CS50x.png"
                                      alt={`${cert.name} Thumbnail`}
                                      width={200}
                                      height={120}
                                      className="w-full h-auto object-cover"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {t.resume.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/CS50x.png"
                                    alt={`${cert.name} - ${t.resume.name}`}
                                    width={1200}
                                    height={849}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                          {cert.id === "cs50ai" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md overflow-hidden shadow-md max-w-[200px] border border-border/50 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                                    <Image
                                      src="/images/CS50AI.png"
                                      alt={`${cert.name} Thumbnail`}
                                      width={200}
                                      height={120}
                                      className="w-full h-auto object-cover"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {t.resume.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/CS50AI.png"
                                    alt={`${cert.name} - ${t.resume.name}`}
                                    width={1200}
                                    height={849}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                          {cert.id === "cs50c" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md overflow-hidden shadow-md max-w-[200px] border border-border/50 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                                    <Image
                                      src="/images/CS50 Cybersecurity.png"
                                      alt={`${cert.name} Thumbnail`}
                                      width={200}
                                      height={120}
                                      className="w-full h-auto object-cover"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {t.resume.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/CS50 Cybersecurity.png"
                                    alt={`${cert.name} - ${t.resume.name}`}
                                    width={1200}
                                    height={849}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                          {cert.id === "fcc-frontend" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md overflow-hidden shadow-md max-w-[200px] border border-border/50 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                                    <Image
                                      src="/images/FrontEnd.png"
                                      alt={`${cert.name} Thumbnail`}
                                      width={200}
                                      height={120}
                                      className="w-full h-auto object-cover"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {t.resume.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/FrontEnd.png"
                                    alt={`${cert.name} - ${t.resume.name}`}
                                    width={1200}
                                    height={849}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                          {cert.id === "dio" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label={`View ${cert.name} Certificate`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md overflow-hidden shadow-md max-w-[200px] border border-border/50 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                                    <Image
                                      src="/images/DIO.png"
                                      alt={`${cert.name} Thumbnail`}
                                      width={200}
                                      height={120}
                                      className="w-full h-auto object-cover"
                                      data-ai-hint="certificate document"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{cert.name} Certificate</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {t.resume.name}'s {cert.name} Certificate of Completion from {cert.issuer}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/DIO.png"
                                    alt={`${cert.name} - ${t.resume.name}`}
                                    width={1200}
                                    height={849}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                          {/* Note: I am simplifying the image conditionals to match by string.
                              Ideally these should be IDs, but string matching works if translation matches exactly.
                              However, since I translated the names, the mapping logic might break if it relies on exact English strings.
                              I will relax the logic or assume the images are associated by index? No, index is risky.
                              I should probably duplicate the conditional blocks for each language OR check the English name.
                              But I don't have the English name in the translated object easily unless I include it as 'id'.
                              For now, I will keep the checks as is, which means images might ONLY show up for English or if I translated the names identically (I didn't for some).
                              To fix this properly, I should add an 'id' or 'imageKey' to the certification object.
                              I'll skip the image logic fix for a second and just get the text right. The images are nice-to-have.
                              Actually, looking at the code, it checks `cert.name === "CS50x..."`.
                              In PT, `cert.name` is "CS50x: Introdução...". So the check fails.
                              I should add `id` to the cert items.
                           */}
                          {/* For now, I will comment out the specific image logic or leave it as is (it will just not show images for other languages).
                               I'll proceed with text replacement. Fixing images for all languages requires adding IDs to the dictionary items.
                           */}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}

              {t.achievements.items.length > 0 && (
                <AccordionItem value="achievements" className="border-b-0">
                  <AccordionTrigger className="px-4 text-lg font-semibold hover:no-underline data-[state=open]:text-primary">
                    <div className="flex items-center gap-3">
                      <Zap className="h-6 w-6 text-primary" /> {t.about.achievementsTitle}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2">
                    <ul className="space-y-2 text-muted-foreground">
                      {t.achievements.items.map((ach, index) => (
                        <li key={index} className="pl-2">
                          <div className="flex items-start gap-2">
                            <Zap className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                            <span>
                              <span className="font-medium text-foreground">{ach.title}</span>: {ach.description}
                            </span>
                          </div>
                          {/* Same image logic issue here */}
                          {ach.id === "hackathon-vox" && (
                            <div className="mt-2 pl-7">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button aria-label="View MediMentor Hackathon Win" className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md overflow-hidden shadow-md max-w-[200px] border border-border/50 transition-transform duration-300 hover:scale-105 hover:opacity-90">
                                    <Image
                                      src="/images/MediMentor.jpg"
                                      alt="MediMentor Hackathon Win"
                                      width={200}
                                      height={120}
                                      className="w-full h-auto object-cover"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl p-1 sm:p-2 md:p-3 bg-background overflow-auto">
                                  <DialogHeader className="sr-only">
                                    <DialogTitle>{ach.title}</DialogTitle>
                                    <DialogDescription>
                                      Expanded view of {ach.title} achievement.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Image
                                    src="/images/MediMentor.jpg"
                                    alt="MediMentor Hackathon Win Full Size"
                                    width={1200}
                                    height={800}
                                    className="rounded-md w-full h-auto"
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </AnimatedScrollWrapper>
        </div>
      </div>
    </section>
  );
}

