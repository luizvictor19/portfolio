export interface LocalizedString {
  pt: string;
  en: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  techStack: string[];
  image: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: {
      pt: "Quatro em Linha (Lig-4)",
      en: "Connect Four Game (Lig-4)",
    },
    slug: "ecommerce-platform",
    description: {
      pt: "Clássico jogo Lig-4 interativo, onde dois jogadores se alternam para encaixar quatro peças consecutivas na vertical, horizontal ou diagonal. Possui temática dos Guardiões da Galáxia e conta com detecção automática de vitória ou empate.",
      en: "Classic interactive Connect Four game where two players take turns dropping pieces to align four in a row — vertically, horizontally, or diagonally. Features a Guardians of the Galaxy theme and automatic win/draw detection.",
    },
    techStack: ["HTML", "CSS", "Javascript"],
    image: "/images/lig-4.png",
    link: "https://lig-4-dusky.vercel.app/",
  },
  {
    id: "2",
    title: {
      pt: "Desafio das Jarras d'Água",
      en: "Water Jug Challenge",
    },
    slug: "water-jug-challenge",
    description: {
      pt: "Um solucionador interativo do clássico problema dos jarros d'água (popularizado por Duro de Matar 3). O usuário define as capacidades dos jarros e o volume alvo, e o sistema encontra a sequência de passos mais curta usando BFS (busca em largura).",
      en: "An interactive solver for the classic water jug problem (popularized by Die Hard with a Vengeance). The user sets the jug capacities and target volume, and the system finds the shortest sequence of steps using BFS (breadth-first search).",
    },
    techStack: ["HTML", "CSS", "React", "Typescript", "Styled Components"],
    image: "/images/water-jug-challenge.png",
    link: "https://water-jug-challenge.vercel.app/",
  },
  {
    id: "3",
    title: {
      pt: "Loja Yumi",
      en: "Yumi Store",
    },
    slug: "weather-dashboard",
    description: {
      pt: "E-commerce de produtos para animais de estimação inspirado no Petz, com catálogo de produtos, carrinho de compras, barra de pesquisa, cadastro, login, seção de favoritos e finalização de pedido. Interface amigável e responsiva.",
      en: "A pet supply e-commerce inspired by Petz, featuring a product catalogue, shopping cart, search bar, user registration, login, favourites section, and checkout. Friendly and responsive interface.",
    },
    techStack: ["HTML", "CSS", "Typescript", "Styled Components", "Context API", "Node.js", "Express.js"],
    image: "/images/yumi-store-updated.png",
    link: "https://yumi-store.vercel.app/",
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count: number): Project[] {
  return projects.slice(0, count);
}
