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
            Hi, I'm Ugesh. A web developer based in Berlin with a passion for building clean, functional web solutions.
          </p>
          <p className="text-foreground/80 text-lg mb-4 leading-relaxed">
            I specialise in WordPress, PHP, and modern JavaScript (Next.js), developing everything from custom e-commerce platforms to full-stack web applications. One of my recent projects i.e a POS system I built is actively being used by a real café in production.
          </p>
          <p className="text-foreground/80 text-lg mb-4 leading-relaxed">
            I also have experience with UI/UX design in Figma and integrating backend services like Firebase. My focus is always on writing clean, maintainable code that solves real problems and delivers real value.
          </p>
          <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
            Currently pursuing a Master's in Data Science in Berlin while actively building and shipping projects.
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
