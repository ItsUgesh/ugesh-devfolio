import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Lightbulb, Code2, Layers, Rocket } from 'lucide-react';

const serviceData = [
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Problem Solving",
    description: "I build practical solutions that work in real environments including a POS system actively used by a café in production."
  },
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: "Clean Code",
    description: "Maintainable, well-structured WordPress and JavaScript code that scales and is easy to hand off."
  },
  {
    icon: <Layers className="h-12 w-12 text-primary" />,
    title: "Full Stack Thinking",
    description: "From database to UI, I understand the whole picture whether it's WordPress, PHP, or a Next.js app with Firebase."
  },
  {
    icon: <Rocket className="h-12 w-12 text-primary" />,
    title: "Fast Learner",
    description: "Currently pursuing a Master's in Data Science in Berlin while actively building and shipping real projects."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">What I Bring</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          What you get when you work with me.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceData.map(service => (
          <Card key={service.title} className="text-center group transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <div className="flex justify-center">
                {service.icon}
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/70 text-sm">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;