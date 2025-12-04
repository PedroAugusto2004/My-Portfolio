
import { resumeData, type SkillCategory } from '@/config/resume-data';
import SectionTitle from '@/components/ui/section-title-component';
import AnimatedScrollWrapper from '@/components/ui/animated-scroll-wrapper';

// React Icons - Technology logos
import {
  SiPython, SiJavascript, SiTypescript, SiDotnet,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiHtml5, SiBootstrap,
  SiNodedotjs, SiExpress, SiVercel, SiGraphql,
  SiPostgresql, SiScikitlearn, SiOpenai,
  SiGithubactions, SiSupabase, SiFirebase, SiDocker, SiKubernetes,
  SiGooglecloud
} from 'react-icons/si';
import { FaAws, FaDatabase, FaCloud, FaRobot, FaCode, FaServer, FaBrain, FaLanguage, FaGlobe, FaRocket, FaLock, FaKey, FaMobile } from 'react-icons/fa';
import { TbBrandCpp, TbApi } from 'react-icons/tb';

// Mapping skill names to their corresponding icons
const skillIconMap: { [key: string]: React.ElementType } = {
  // Languages
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "SQL": FaDatabase,
  "C# / .NET": SiDotnet,
  "C": TbBrandCpp,

  // Frontend
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind": SiTailwindcss,
  "Framer Motion": SiFramer,
  "HTML/CSS": SiHtml5,
  "Bootstrap": SiBootstrap,
  "Responsive & Mobile-First Design": FaMobile,
  "UI/UX Optimization": FaCode,

  // Backend / Infra
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "AWS Lambda": FaAws,
  "AWS API Gateway": FaAws,
  "AWS Amplify": FaAws,
  "AWS CloudFront": FaAws,
  "AWS Cognito": FaAws,
  "AWS IAM": FaAws,
  "AWS CloudFormation": FaAws,
  "AWS Elastic Beanstalk": FaAws,
  "AWS Key Management Service (KMS)": FaKey,
  "Vercel": SiVercel,
  "Serverless": FaCloud,
  "REST APIs": TbApi,
  "GraphQL APIs": SiGraphql,
  "Authentication & Security (JWT, OAuth)": FaLock,

  // Data & ML
  "RAG pipelines": FaBrain,
  "LLM prompt engineering": FaRobot,
  "Google Gemini": SiGooglecloud,
  "ChatGPT": SiOpenai,
  "Claude-Sonnet": FaRobot,
  "Amazon Q": FaAws,
  "scikit-learn": SiScikitlearn,
  "PostgreSQL": SiPostgresql,
  "telemetry & monitoring": FaServer,

  // Tools
  "GitHub Actions": SiGithubactions,
  "Supabase": SiSupabase,
  "Firebase": SiFirebase,
  "Firebase Authentication": SiFirebase,
  "Firebase Firestore": SiFirebase,
  "Firebase Realtime Database": SiFirebase,
  "Firebase Hosting": SiFirebase,
  "Firebase Cloud Functions": SiFirebase,
  "Firebase Cloud Messaging (FCM)": SiFirebase,
  "CloudWatch": FaAws,
  "CI/CD": FaRocket,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Serverless Framework": FaCloud,

  // Other / Soft skills
  "Product → deploy ownership": FaRocket,
  "rapid prototyping": FaCode,
  "bilingual (PT/EN)": FaLanguage,
  "Spanish": FaGlobe,
  "English": FaGlobe,
  "Portuguese": FaGlobe,
};

// Get icon color based on skill name
const getIconColor = (skillName: string): string => {
  const colorMap: { [key: string]: string } = {
    "Python": "#3776AB",
    "JavaScript": "#F7DF1E",
    "TypeScript": "#3178C6",
    "C# / .NET": "#512BD4",
    "C": "#A8B9CC",
    "React": "#61DAFB",
    "Next.js": "currentColor",
    "Tailwind": "#06B6D4",
    "Framer Motion": "#0055FF",
    "HTML/CSS": "#E34F26",
    "Bootstrap": "#7952B3",
    "Node.js": "#339933",
    "Express.js": "currentColor",
    "Vercel": "currentColor",
    "GraphQL APIs": "#E10098",
    "PostgreSQL": "#4169E1",
    "scikit-learn": "#F7931E",
    "ChatGPT": "#10A37F",
    "GitHub Actions": "#2088FF",
    "Supabase": "#3ECF8E",
    "Firebase": "#FFCA28",
    "Docker": "#2496ED",
    "Kubernetes": "#326CE5",
    "Google Gemini": "#4285F4",
  };
  return colorMap[skillName] || "currentColor";
};

// Flatten all skills into a single array for the marquee
const getAllSkills = () => {
  return resumeData.skills.flatMap(category =>
    category.skills.map(skill => ({
      ...skill,
      category: category.category
    }))
  );
};

// Split skills into rows for alternating scroll directions
const getSkillRows = () => {
  const allSkills = getAllSkills();
  const midpoint = Math.ceil(allSkills.length / 2);
  return [
    allSkills.slice(0, midpoint),
    allSkills.slice(midpoint)
  ];
};

const MarqueeRow = ({
  skills,
  direction = 'left',
  speed = 30
}: {
  skills: Array<{ name: string; category: string }>;
  direction?: 'left' | 'right';
  speed?: number;
}) => {
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative flex overflow-hidden py-4 group">

      <div
        className={`flex gap-8 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover:[animation-play-state:paused]`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          const SkillIcon = skillIconMap[skill.name] || FaCode;
          const iconColor = getIconColor(skill.name);

          return (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-3 px-4 py-2 rounded-full 
                        bg-foreground/5 hover:bg-foreground/10
                        transition-all duration-300 cursor-default
                        whitespace-nowrap shrink-0"
            >
              <SkillIcon
                className="h-5 w-5 shrink-0 transition-transform duration-300 hover:scale-110"
                style={{ color: iconColor }}
              />
              <span className="text-sm font-medium text-foreground/80">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const skillRows = getSkillRows();

  return (
    <section id="skills" className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-4">
        <AnimatedScrollWrapper>
          <SectionTitle>My Expertise</SectionTitle>
        </AnimatedScrollWrapper>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Technologies and tools I work with to build modern, scalable applications
        </p>
      </div>

      {/* Full-width marquee section */}
      <div className="mt-8 space-y-2">
        <MarqueeRow skills={skillRows[0]} direction="left" speed={60} />
        <MarqueeRow skills={skillRows[1]} direction="right" speed={70} />
      </div>
    </section>
  );
}
