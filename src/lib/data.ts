export type Project = {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  imageHint: string;
  liveUrl: string;
  category: 'all' | 'laravel' | 'wordpress' | 'other';
};

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce solution with a custom admin panel, built using Laravel and Vue.js.',
    tech: ['Laravel', 'PHP', 'Vue.js', 'MySQL'],
    imageUrl: 'https://picsum.photos/seed/3/600/400',
    imageHint: "online store",
    liveUrl: '#',
    category: 'laravel',
  },
  {
    title: 'Corporate Website',
    description: 'A modern, responsive corporate website built on WordPress with a custom theme and Elementor.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    imageUrl: 'https://picsum.photos/seed/2/600/400',
    imageHint: "corporate website",
    liveUrl: '#',
    category: 'wordpress',
  },
  {
    title: 'Custom CRM System',
    description: 'A bespoke CRM system to manage customer relationships, developed with Laravel and Livewire.',
    tech: ['Laravel', 'Livewire', 'PHP', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/4/600/400',
    imageHint: "data dashboard",
    liveUrl: '#',
    category: 'laravel',
  },
  {
    title: 'Booking System',
    description: 'A web application for booking appointments and services, built using PHP and JavaScript.',
    tech: ['PHP', 'JavaScript', 'MySQL', 'HTML'],
    imageUrl: 'https://picsum.photos/seed/1/600/400',
    imageHint: "web application",
    liveUrl: '#',
    category: 'other',
  },
  {
    title: 'Portfolio for Designer',
    description: 'A visually-rich portfolio website for a graphic designer, created with WordPress and ACF.',
    tech: ['WordPress', 'ACF', 'PHP', 'JavaScript'],
    imageUrl: 'https://picsum.photos/seed/5/600/400',
    imageHint: "creative portfolio",
    liveUrl: '#',
    category: 'wordpress',
  },
  {
    title: 'Blog Platform',
    description: 'A custom blog platform with markdown support and a clean, minimal interface, built with Laravel.',
    tech: ['Laravel', 'PHP', 'MySQL'],
    imageUrl: 'https://picsum.photos/seed/6/600/400',
    imageHint: "blog platform",
    liveUrl: '#',
    category: 'laravel',
  },
];

export const services = [
    'Web Development', 'WordPress Development', 'Website Optimization', 'Custom Web Solutions'
];
