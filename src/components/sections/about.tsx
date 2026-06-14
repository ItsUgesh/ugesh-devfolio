import Image from 'next/image';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 flex justify-center">
          <Card className="rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-primary/20 shadow-lg">
            <Image
              src="/photos/Ugesh.jpg"
              width={400}
              height={400}
              alt="Ugesh simkhada"
              className="object-cover w-full h-full"
              data-ai-hint="professional developer portrait"
            />
          </Card>
        </div>
        <div className="lg:col-span-3">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-foreground/80 text-lg mb-4 leading-relaxed">
           Hi, I'm Ugesh, a web developer based in Berlin building clean, functional solutions across WordPress, PHP and Next.js, including custom WordPress themes built from scratch.
          </p>
          <p className="text-foreground/80 text-lg mb-4 leading-relaxed">
            One of my recent projects, a POS system is actively used by a real café in production. I also work with Figma for UI/UX design and Firebase for backend integration.
          </p>
          <p className="text-foreground/80 text-lg mb-4 leading-relaxed">
           Currently pursuing a Master's in Data Science while actively building and shipping projects.
          </p>

          <Button asChild size="lg">
            <a href="files/cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
