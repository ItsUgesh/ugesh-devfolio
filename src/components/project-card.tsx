import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <ScrollReveal delay={index * 100}>
      <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
        <div className="relative w-full aspect-[3/2] overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-foreground/80 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </ScrollReveal>
  );
};

export default ProjectCard;
