"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { ScrollReveal } from "../scroll-reveal";

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(81,153,224,0.15),rgba(255,255,255,0))] " />

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Ugesh</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-4 font-headline text-2xl md:text-3xl text-foreground/80">
            A Full Stack Web Developer from Nepal
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/60">
            I build fast, scalable, and user-focused web solutions.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects">
              <Button size="lg" variant="default">
                <ArrowDown className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
