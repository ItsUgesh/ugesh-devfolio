import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TechIcon from '@/components/tech-icon';
import { Separator } from '@/components/ui/separator';

const skills = {
  backend: ["Laravel", "PHP", "MySQL"],
  frontend: ["HTML", "CSS", "JavaScript"],
  cms: ["WordPress", "Elementor", "ACF"],
  tools: ["Git", "Figma", "REST APIs"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Technologies I use to build modern, high-performance web applications.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="hover:border-primary/50 hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">Backend</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            {skills.backend.map(skill => <TechIcon key={skill} name={skill} />)}
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">Frontend</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            {skills.frontend.map(skill => <TechIcon key={skill} name={skill} />)}
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">CMS</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            {skills.cms.map(skill => <TechIcon key={skill} name={skill} />)}
          </CardContent>
        </Card>

        <Card className="hover:border-primary/50 hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">Tools</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            {skills.tools.map(skill => <TechIcon key={skill} name={skill} />)}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
