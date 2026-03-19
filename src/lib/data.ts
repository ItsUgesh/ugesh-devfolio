export type Project = {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  imageHint: string;
  liveUrl: string;
  category: 'all' | 'laravel' | 'wordpress' | 'python' | 'other';
};

export const projects: Project[] = [
  {
    title: 'Manaslu Expert',
    description: 'A full-featured travel website with a custom admin panel, built using wordpress and elementer.',
    tech: ['Wordpress', 'Elementor', 'ACF', 'MySQL'],
    imageUrl: '/photos/ManasluExpert.jpeg',
    imageHint: "travel website",
    liveUrl: 'https://manasluexpert.com/',
    category: 'wordpress',
  },
  {
    title: 'AI powered Voice assistant',
    description: 'It is a Python-based voice assistant that can fetch news, play music, open websites, and answer questions using AI.',
    tech: ['python', 'SpeechRecognition', 'OpenAI API'],
    imageUrl: '/photos/AI powered Voice assistant.png',
    imageHint: "corporate website",
    liveUrl: 'https://github.com/ItsUgesh/Luxy-Voice-Assistant-AI',
    category: 'python',
  },
  {
    title: 'Cargo Website',
    description: 'A dynamic cargo management platform built with WordPress, featuring integrated tracking systems and streamlined logistics tools for efficient shipment handling.',
    tech: ['Wordpress', 'CSS', 'ACF', 'MySQL'],
    imageUrl: '/photos/cargo.jpg',
    imageHint: "cargo website",
    liveUrl: 'https://reliablecargo.com.np/',
    category: 'wordpress',
  },
  {
    title: 'E-commerce Site',
    description: 'A WordPress-based e-commerce website with a user-friendly interface, secure checkout, and efficient product management system.',
    tech: ['PHP', 'Wordpress', 'MySQL', 'Woo-Commerce'],
    imageUrl: '/photos/Ecommerce.jpg',
    imageHint: "E-commerce website",
    liveUrl: 'https://github.com/ItsUgesh/ShopNepal-E-commerce',
    category: 'wordpress',
  },
  {
    title: 'FunnyNepal Travel',
    description: 'A custom-coded WordPress website built with PHP for Funny Nepal Travels, featuring travel package listings and a seamless user experience.',
    tech: ['MySQL', 'CSS', 'PHP', 'JavaScript'],
    imageUrl: '/photos/TravelSite.jpg',
    imageHint: "creative portfolio",
    liveUrl: 'https://github.com/ItsUgesh/Funny-Nepal-Travel-and-Tours',
    category: 'other',
  },
  {
    title: 'Figma design',
    description: 'A modern landing page design created in Figma, focused on clean layout, intuitive navigation, and a visually engaging user experience.',
    tech: ['Figma'],
    imageUrl: '/photos/FigmaDesign.png',
    imageHint: "figma dsign",
    liveUrl: 'https://www.figma.com/proto/JuOa2PPdI8kKlOMLBQf0Ky/LANDING-PAGE-JUICE-?node-id=1-2&p=f&t=FJxsKTA8SAZpfeu4-1&scaling=contain&content-scaling=fixed&page-id=0%3A1',
    category: 'other',
  },
];

export const services = [
  'Web Development', 'WordPress Development', 'Website Optimization', 'Custom Web Solutions'
];
