import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TechIcon from '../tech-icon';
import { services } from '@/lib/data';

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                I provide a range of services to help you build and grow your online presence.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
                <Card key={service} className="text-center group transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex justify-center">
                          <TechIcon name={service} />
                        </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-xl font-semibold">{service}</h3>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
  );
};

export default Services;
