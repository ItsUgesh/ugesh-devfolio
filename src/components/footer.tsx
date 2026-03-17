import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-foreground/60 text-center sm:text-left">
                    &copy; {currentYear} Ugesh. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <Button asChild variant="ghost" size="icon">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" />
                        </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5 text-foreground/60 hover:text-primary transition-colors" />
                        </a>
                    </Button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
