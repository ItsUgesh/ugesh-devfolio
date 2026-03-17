import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Services from '@/components/sections/services';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <About />
          </ScrollReveal>
          <ScrollReveal>
            <Skills />
          </ScrollReveal>
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
          <ScrollReveal>
            <Services />
          </ScrollReveal>
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
