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
              src="/photos/ugesh.jpg"
              width={400}
              height={400}
              alt="Ugesh"
              className="object-cover w-full h-full"
              data-ai-hint="professional developer portrait"
            />
          </Card>
        </div>
        <div className="lg:col-span-3">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
            I'm Ugesh, a passionate web developer with a focus on building elegant and efficient web solutions. With a strong background in Laravel, PHP, and WordPress, I develop custom websites, dynamic applications, and scalable e-commerce platforms.
          </p>
          <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
            I also have experience integrating AI-powered features into projects, adding smarter functionality and enhancing user experience. My focus is on writing clean, scalable code and using modern tools to deliver high-performance applications that create real value. I'm always eager to learn new technologies and take on challenging projects.
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
