"use client";

import { useState } from 'react';
import { projects, type Project } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'laravel' | 'wordpress' |'python'| 'other';

const categories: { name: string, value: Category }[] = [
  { name: 'All', value: 'all' },
  { name: 'Laravel', value: 'laravel' },
  { name: 'WordPress', value: 'wordpress' },
  { name: 'python', value: 'python' },
  { name: 'Other', value: 'other' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">My Work</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          A selection of projects I've done.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mt-12 mb-16">
        {categories.map(category => (
          <Button
            key={category.value}
            variant={activeCategory === category.value ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category.value)}
            className="capitalize"
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
