import { Translations } from './types';

export const pt: Translations = {
    navbar: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        experience: 'Experiência',
        contact: 'Contato',
    },
    hero: {
        getInTouch: 'Entre em Contato',
        viewMyWork: 'Ver Projetos',
    },
    about: {
        title: 'Sobre Mim',
        summary: 'Sou um Engenheiro de Software especializado em desenvolvimento full stack e IA. Projeto, construo e implemento aplicativos web e móveis escaláveis, desenvolvo soluções impulsionadas por IA e otimizo modelos de machine learning para desempenho no mundo real. Minha experiência abrange arquitetura de sistemas de ponta a ponta, prototipagem rápida, desenvolvimento de APIs, implantação em nuvem e implementação de fluxos de IA da experimentação à produção.',
        educationTitle: 'Educação',
        certificationsTitle: 'Certificações',
        achievementsTitle: 'Conquistas',
    },
    skills: {
        title: 'Minha Expertise',
        subtitle: 'Tecnologias e ferramentas com as quais trabalho para construir aplicativos modernos e escaláveis',
    },
    education: {
        items: [
            {
                id: "ads",
                degree: "Bacharelado em Análise e Desenvolvimento de Sistemas",
                institution: "Universidade Estácio",
                period: "Previsto para 2026",
            }
        ]
    },
    certifications: {
        items: [
            { id: "cs50x", name: "CS50x: Introdução à Ciência da Computação", issuer: "Universidade Harvard" },
            { id: "cs50ai", name: "CS50AI: Introdução à Inteligência Artificial com Python", issuer: "Universidade Harvard" },
            { id: "cs50c", name: "CS50C: Introdução à Cibersegurança", issuer: "Universidade Harvard" },
            { id: "fcc-frontend", name: "Certificação em Desenvolvimento Front End", issuer: "freeCodeCamp" },
            { id: "dio", name: "100+ horas de treinamento", issuer: "DIO (desenvolvimento web, nuvem, engenharia de software)" },
        ]
    },
    achievements: {
        items: [
            {
                id: "hackathon-vox",
                title: "Vencedor do Hackathon VOX ASTRA",
                description: "Pool de prêmios de patrocinadores de US$ 300 mil, destaque em artigo, selecionado entre mais de 500 equipes.",
            }
        ]
    },
    experience: {
        title: 'Experiência e Projetos',
        keyResponsibilities: 'Principais Responsabilidades:',
        technologiesUsed: 'Tecnologias Utilizadas:',
        visitWebsite: 'Visitar Site',
        items: [
            {
                id: "outlier",
                role: "Especialista em Machine Learning",
                company: "Outlier",
                period: "Remoto • 2025 – Presente",
                description: "Como Especialista em Machine Learning na Outlier, analiso e refino prompts de IA para aprimorar o desempenho do modelo. Minhas responsabilidades incluem treinar sistemas de IA, analisar seus resultados e melhorar a qualidade do conteúdo gerado por IA. Também identifico e corrijo erros em prompts de usuários para garantir a maior precisão e eficiência.",
                responsibilities: [
                    "Analisei e avaliei saídas de LLM em tarefas de raciocínio, código e baseadas em prompts para melhorar o desempenho do modelo.",
                    "Refinei e corrigi prompts de IA para aumentar a clareza, reduzir erros do modelo e garantir saídas de alta qualidade.",
                    "Identifiquei padrões em falhas de modelo e casos extremos, fornecendo insights que melhoraram a precisão geral da avaliação.",
                    "Apliquei um método de revisão estruturado para manter a consistência entre as tarefas e aprimorar o alinhamento com as diretrizes do projeto."
                ],
                technologies: ["LLMs (GPT-4, Gemini)", "Prompt Engineering", "Python", "Data Analysis", "RLHF"],
                projectLinks: [],
            },
            {
                id: "studyshield",
                role: "Engenheiro Full Stack",
                company: "StudyShield",
                period: "2025",
                description: "Arquitetei e implementei o StudyShield, um PWA impulsionado por IA usando React 18, TypeScript e Vite; entregué um aplicativo web responsivo e instalável com suporte offline e versionamento de service worker.",
                responsibilities: [
                    "Projetei e lancei uma plataforma de IA de modo duplo integrando Google Gemini (Flash online + Nano offline) com respostas em streaming e failover automático para garantir baixa latência e resiliência offline.",
                    "Integrei Supabase para Auth, PostgreSQL e Storage; criei migrações de DB e políticas de Segurança em Nível de Linha e projetei esquemas de perfis de usuário e conversas para impor isolamento de dados por usuário.",
                    "Construí chat multimodal seguro: anexos de arquivos (imagens/PDFs via pdfjs), entrada de voz (Web Speech API), sanitização de conteúdo (DOMPurify) e filtragem de conteúdo de IA para proteger os usuários.",
                    "Implementei o Modo Foco e UX de bloqueio de distrações para aumentar a produtividade nas sessões de estudo; adicionei rastreamento de progresso gamificado e painéis de análise (Recharts) para aumentar o engajamento.",
                    "Impus qualidade de engenharia: TypeScript rigoroso, ESLint, layout de projeto estruturado (services/integrations/hooks), prontidão para CI/deploy (Vercel) e otimização de desempenho visando Lighthouse/Core Web Vitals.",
                    "Implementei internacionalização (react-i18next), primitivos de UI acessíveis (Radix) e interações suaves (Framer Motion) para entregar uma experiência frontend inclusiva e de nível de produção.",
                    "Automatizei melhorias no pipeline de build (script de pré-build para atualizar versão do service worker, code-splitting otimizado) para reduzir o tamanho do bundle e melhorar o desempenho percebido."
                ],
                technologies: ["React 18", "TypeScript", "Vite", "Google Gemini AI", "Supabase", "PWA", "PostgreSQL", "TailwindCSS"],
                projectLinks: [
                    { name: "Ver Código no GitHub", url: "https://github.com/PedroAugusto2004/StudyShield" },
                    { name: "Visitar Site", url: "https://www.studyshield.site/" }
                ],
            },
            {
                id: "megaphoton",
                role: "Desenvolvedor Full Stack",
                company: "Megaphoton – Energia Solar",
                period: "Remoto • 2025",
                description: "Assistente de conversação bilíngue impulsionado pelo Google Gemini 2.5-Flash com pipeline RAG e escalonamento para WhatsApp para empresa de energia solar.",
                responsibilities: [
                    "Implementei um assistente de conversação bilíngue (PT/EN) impulsionado pelo Google Gemini 2.5-Flash, com detecção de idioma e contexto persistente.",
                    "Construí um pipeline RAG + base de conhecimento e camadas de verificação para minimizar alucinações e garantir a correção dos dados da empresa.",
                    "Implementei escalonamento para WhatsApp para transferência humana e fluxos de ação rápida para solicitações comuns; melhorei o autoatendimento ao cliente em 25%.",
                    "Implantação em produção: funções serverless da Vercel, integração de API segura por env, planejamento de rate-limit, tratamento robusto de fallback/erros, UX otimizada para dispositivos móveis (React + TypeScript + Framer Motion + Tailwind)."
                ],
                technologies: ["React", "TypeScript", "Google Gemini AI", "RAG", "Vercel AI SDK", "TailwindCSS", "Node.js"],
                projectLinks: [
                    { name: "Ver Código no GitHub", url: "https://github.com/PedroAugusto2004/megaphoton" },
                    { name: "Visitar Site", url: "https://www.megaphoton.com.br/" }
                ]
            },
            {
                id: "medimentor",
                role: "Desenvolvedor Full Stack",
                company: "MediMentor",
                period: "Remoto • 2024 – 2025",
                description: "Plataforma médica impulsionada por IA fornecendo análise de sintomas e diagnóstico diferencial com fontes de dados de nível clínico.",
                responsibilities: [
                    "Integrei a API Isabel Healthcare para alimentar a análise de sintomas impulsionada por IA e diagnóstico diferencial, garantindo fontes de dados de nível clínico.",
                    "Arquitetei backend serverless (AWS Lambda, API Gateway) com auth segura (Cognito) e monitoramento de produção (CloudWatch), permitindo interações confiáveis em tempo real.",
                    "Implementei hospedagem frontend e CI/CD via AWS Amplify e CloudFront para entrega rápida e distribuída globalmente.",
                    "Construí painéis de análise e monitoramento para rastrear a saúde e o desempenho do sistema (telemetria e log)."
                ],
                technologies: ["React", "AWS Lambda", "API Gateway", "Cognito", "DynamoDB", "Isabel Healthcare API", "AWS Amplify"],
                projectLinks: [
                    { name: "Ver Código no GitHub", url: "https://github.com/PedroAugusto2004/MediMentor" },
                    { name: "Visitar Site", url: "https://main.do8zwgfpt20yc.amplifyapp.com" }
                ]
            },
            {
                id: "muscles",
                role: "Desenvolvedor Full Stack",
                company: "Muscles & Balance",
                period: "Remoto • 2023 – 2025",
                description: "Plataforma full-stack de saúde e fitness com autenticação segura, rastreamento de exercícios e painéis de análise interativos.",
                responsibilities: [
                    "Construí a primeira plataforma full-stack de saúde e fitness com autenticação segura, rastreamento de exercícios e painéis de análise interativos; estabeleci pipelines de CI/CD (AWS Amplify, GitHub Actions) para lançamentos rápidos e confiáveis.",
                    "Implementei recursos de UX em tempo real (rastreamento de progresso e painéis) e telemetria para medir o desempenho e os fluxos de usuários.",
                    "Liderei o desenvolvimento de ponta a ponta de um aplicativo de fitness: design de produto → auth → painéis em tempo real → CI/CD e implantações. Este projeto passou pelo MLH Fellowship, o que valida su maturidade."
                ],
                technologies: ["React", "Node.js", "Express", "MongoDB", "AWS Amplify", "Chart.js", "Framer Motion"],
                projectLinks: [
                    { name: "Ver Código no GitHub", url: "https://github.com/PedroAugusto2004/Muscles-e-Balance" },
                    { name: "Visitar Site", url: "https://muscles-and-balance-7.web.app" }
                ]
            },
        ],
    },
    contact: {
        title: 'Entre em Contato',
        getInTouch: "O Que Vem a Seguir?",
        email: 'Envie-me um email',
        copyEmail: 'Copiar endereço de email',
        emailCopied: 'Email copiado!',
        sendMessage: 'Envie-me uma Mensagem',
        sending: 'Enviando...',
        messageSent: 'Mensagem Enviada!',
        errorSending: 'Erro ao Enviar Mensagem',
        fullName: 'Nome Completo',
        emailAddress: 'Endereço de Email',
        message: 'Mensagem',
        yourName: 'Seu Nome',
        yourEmailPlaceholder: 'seu.email@exemplo.com',
        yourMessage: 'Sua mensagem...',
        contactInfo: 'Informações de Contato',
        alternatively: 'Alternativamente, você pode me contatar através dos seguintes canais:',
        preferredMethod: 'Método de Contato Preferido:',
        preferredMethodText: 'O email é geralmente a maneira mais rápida de obter uma resposta para consultas. Para networking profissional, o LinkedIn também é uma ótima opção.',
        intro: "Tem um projeto em mente, uma pergunta ou apenas quer se conectar? Sinta-se à vontade para entrar em contato!",
        formDescription: "Farei o meu melhor para responder o mais breve possível.",
        validationName: "O nome deve ter pelo menos 2 caracteres.",
        validationEmail: "Por favor, insira um endereço de email válido.",
        validationMessage: "A mensagem deve ter pelo menos 10 caracteres.",
    },
    resume: {
        title: "Engenheiro de Software | Especialista em Desenvolvimento Web e App",
        name: "Pedro Augusto",
    }
};
