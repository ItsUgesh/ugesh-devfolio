export type Project = {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  imageHint: string;
  liveUrl?: string;
  githubUrl?: string;
  buttonLabel?: string;
  category: 'all' | 'wordpress' | 'figma' | 'python' | 'other';
};

export const projects: Project[] = [
  {
    title: 'OrderFlow — POS System',
    description: 'A full-featured Restaurant POS and Management System. This is a demo of the same system actively used by a real café in production. Handles orders, menu management, staff accounts, and daily sales reporting with separate admin and staff dashboards.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    imageUrl: '/photos/orderflow.png',
    imageHint: "restaurant pos system",
    liveUrl: 'https://order-flow-red.vercel.app',
    githubUrl: 'https://github.com/ItsUgesh/Order-Flow',
    category: 'other',
  },
  {
    title: 'Arcline Studio — Custom WordPress Theme',
    description: 'A custom WordPress theme built entirely from scratch — no page builders, no CSS frameworks. Features custom post types, security hardening, performance optimization and SMTP email integration.',
    tech: ['WordPress', 'PHP', 'MySQL', 'Vanilla JS', 'CSS'],
    imageUrl: '/photos/arcline.png',
    imageHint: "custom wordpress theme agency",
    liveUrl: 'http://arclinestudio.uk',
    githubUrl: 'https://github.com/ItsUgesh/arcline-wp-theme',
    category: 'wordpress',
  },
  {
    title: 'ShopNepal — E-Commerce',
    description: 'A WooCommerce e-commerce store built from scratch using WordPress, Elementor and ACF with custom post types and product management.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'ACF'],
    imageUrl: '/photos/shopnepal.png',
    imageHint: "ecommerce website nepal",
    liveUrl: 'http://shopnepal.infinityfreeapp.com/?i=1',
    category: 'wordpress',
  },
  {
    title: 'AI powered Voice assistant',
    description: 'A Python-based voice assistant that can fetch news, play music, open websites, and answer questions using OpenAI GPT.',
    tech: ['Python', 'SpeechRecognition', 'OpenAI API'],
    imageUrl: '/photos/AI powered Voice assistant.png',
    imageHint: "corporate website",
    githubUrl: 'https://github.com/ItsUgesh/Luxy-Voice-Assistant-AI',
    category: 'python',
  },
  {
    title: 'Himalark — Travel Website UI/UX',
    description: 'Full UI/UX design process for a travel website. Includes wireframes, final UI with 9+ pages, tablet responsive layouts, and a complete design system.',
    tech: ['Figma', 'UI Design', 'UX Design', 'Prototyping'],
    imageUrl: '/photos/himalark.png',
    imageHint: "travel website design figma",
    buttonLabel: 'View Design',
    liveUrl: 'https://www.figma.com/design/3fvOmeCUhnzZAxbqXQ1YYO/Himalark?node-id=285-83&t=8ydpfe3uD1LJgsLv-1',
    category: 'figma',
  },
  {
    title: 'UI/UX Design Collection',
    description: 'A collection of web designs including landing pages, gym website, portfolio site and travel concepts. Showcases UI skills across different industries.',
    tech: ['Figma', 'UI Design', 'Wireframing'],
    imageUrl: '/photos/FigmaDesign.png',
    imageHint: "ui ux design collection",
    buttonLabel: 'View Design',
    liveUrl: 'https://www.figma.com/design/rJszWIc93M2J5ZW43ljqZ9/UI-UX-portfolio',
    category: 'figma',
  },
  {
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Next.js, TypeScript and Tailwind CSS. Features smooth animations, project showcase, and responsive design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/photos/portfolio.png',
    imageHint: "portfolio website",
    liveUrl: 'https://www.ugeshsimkhada.com.np',
    githubUrl: 'https://github.com/ItsUgesh/ugesh-devfolio',
    category: 'other',
  },
];

export const services = [
  'Problem Solving',
  'Clean Code',
  'Full Stack Thinking',
  'Fast Learner',
];

