export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      portfolio: "Portfólio",
      home: "Início",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato",
    },
    home: {
      greeting: "Olá, meu nome é",
      bio: "Sou um desenvolvedor front-end que constrói aplicações web e mobile modernas com foco em performance, acessibilidade e código limpo.",
      viewProjects: "Ver Projetos",
      getInTouch: "Entrar em Contato",
      featuredProjects: "Projetos em Destaque",
      featuredSubtitle: "Uma seleção de trabalhos recentes",
      viewAllProjects: "Ver Todos os Projetos",
      aboutMe: "Sobre Mim",
      aboutSnippet:
        "Sou apaixonado por construir software que resolve problemas reais. Com experiência em todas as camadas de desenvolvimento, gosto de trabalhar em tudo, desde arquitetura de sistemas até interfaces pixel-perfect.",
      readMore: "Saiba Mais",
    },
    about: {
      title: "Sobre Mim",
      bio1: "Sou um desenvolvedor front-end apaixonado por criar aplicações web e mobile que são rápidas, acessíveis e agradáveis de usar. Gosto de transformar problemas complexos em soluções simples e elegantes.",
      bio2: "Com mais de 5 anos de experiência em desenvolvimento frontend, trabalhei em projetos que vão desde simples interfaces até grandes e escaláveis plataformas SaaS. Me importo profundamente com qualidade de código, experiência do usuário e aprendizado contínuo.",
      bio3: "Quando não estou programando, você me encontrará lendo sobre tecnologia, contribuindo para projetos open-source ou explorando novas ferramentas e frameworks.",
      skillsTitle: "Habilidades & Tecnologias",
      skillsSubtitle: "Ferramentas com as quais trabalho regularmente",
    },
    projects: {
      title: "Projetos",
      subtitle: "Tudo em que tenho trabalhado",
    },
    contact: {
      title: "Contato",
      subtitle:
        "Gostaria de contar comigo no seu time? Mande uma mensagem.",
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "voce@exemplo.com",
      message: "Mensagem",
      messagePlaceholder: "Sua mensagem...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada! Responderei em breve.",
      error: "Algo deu errado. Por favor, tente novamente.",
      nameRequired: "Nome é obrigatório.",
      emailRequired: "E-mail é obrigatório.",
      emailInvalid: "Por favor, insira um endereço de e-mail válido.",
      messageRequired: "Mensagem é obrigatória.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
    langToggle: "EN",
  },
  en: {
    nav: {
      portfolio: "Portfolio",
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    home: {
      greeting: "Hi, my name is",
      bio: "I'm a front-end developer who builds modern web and mobile applications with a focus on performance, accessibility, and clean code.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      featuredProjects: "Featured Projects",
      featuredSubtitle: "A selection of recent work",
      viewAllProjects: "View All Projects",
      aboutMe: "About Me",
      aboutSnippet:
        "I'm passionate about building software that solves real problems. With experience across all layers of development, I enjoy working on everything from system design to pixel-perfect UIs.",
      readMore: "Read More",
    },
    about: {
      title: "About Me",
      bio1: "I'm a front-end developer with a passion for building web and mobile applications that are fast, accessible, and delightful to use. I enjoy turning complex problems into simple, elegant solutions.",
      bio2: "With several years of experience across both frontend and backend development, I've worked on projects ranging from small business sites to large-scale SaaS platforms. I care deeply about code quality, user experience, and continuous learning.",
      bio3: "When I'm not coding, you'll find me reading about technology, contributing to open-source projects, or exploring new tools and frameworks.",
      skillsTitle: "Skills & Technologies",
      skillsSubtitle: "Tools I work with regularly",
    },
    projects: {
      title: "Projects",
      subtitle: "Everything I've been working on",
    },
    contact: {
      title: "Contact",
      subtitle: "Would you like to have me on your team? Send me a message.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
      nameRequired: "Name is required.",
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email address.",
      messageRequired: "Message is required.",
    },
    footer: {
      rights: "All rights reserved",
    },
    langToggle: "PT",
  },
};

export type Translations = (typeof translations)["pt"];
