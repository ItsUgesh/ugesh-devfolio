import { cn } from '@/lib/utils';
import { Code, Database, Figma as FigmaIcon, GitBranch, Globe, Server, Smartphone, Wind, Brush, Settings } from 'lucide-react';

const TechIcon = ({ name, className }: { name: string; className?: string }) => {
  const iconClassName = cn("h-12 w-12 text-primary", className);
  const iconContainerClassName = "flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300";

  const icons: { [key: string]: React.ReactNode } = {
    'Laravel': (
      <svg role="img" viewBox="0 0 26 26" className={iconClassName} fill="currentColor">
        <path d="m13.01 4.81-6.42 3.69v7.38l6.42 3.69 6.42-3.69V8.5l-6.42-3.69zm-4.32 4.49 4.32-2.5v5.03l-4.32 2.49v-5.02zm8.64 0v5.02l-4.32 2.49V6.8l4.32 2.5zM3.48 7.33v3.69l-1.39.81v3.42l1.39.81v3.69l3.21 1.85V7.12l-3.21.21zm19.04 0-.01 14.13 3.21-1.85v-3.69l1.39-.81V9.52l-1.39-.81V7.33l-3.2.21z" />
      </svg>
    ),
    'PHP': (
      <svg role="img" viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
        <path d="M6.71 14.105c-1.334 0-2.433-.94-2.433-2.541 0-1.6.99-2.541 2.378-2.541.657 0 1.25.21 1.704.577.299-.54.54-1.223.54-1.872 0-2.18-1.703-3.65-4.14-3.65H0v14h5.28c2.617 0 4.67-1.474 4.67-4.14 0-1.638-.93-2.91-2.24-3.358zM4.777 10.3c-.567 0-.9.375-.9.99 0 .645.333 1.02.9 1.02.538 0 .87-.375.87-1.02 0-.615-.332-.99-.87-.99zm-.255 4.8c-.628 0-1.05-.435-1.05-1.11 0-.675.422-1.14 1.05-1.14.6 0 1.02.465 1.02 1.14 0 .675-.42 1.11-1.02 1.11zm15.178-7.98c-2.438 0-4.14 1.47-4.14 3.65 0 .65.24 1.332.54 1.872.454-.367 1.047-.577 1.704-.577 1.388 0 2.378.941 2.378 2.541 0 1.601-1.1 2.541-2.434 2.541-.832 0-1.552-.39-2.01-1.005h-.06v.87c0 .495-.315.75-.72.75-.435 0-.75-.24-.75-.75V8.125c0-.495.315-.75.75-.75.405 0 .72.255.72.75v1.2h.06c.465-.615 1.178-1.005 2.01-1.005 2.437 0 4.14 1.47 4.14 3.65 0-2.18-1.703-3.65-4.14-3.65zm-1.95 6.78c.627 0 1.05-.465 1.05-1.14 0-.675-.423-1.11-1.05-1.11-.6 0-1.02.435-1.02 1.11 0 .675.42 1.14 1.02 1.14zm.255-4.8c.567 0 .9-.375.9-.99 0-.645-.333-1.02-.9-1.02-.538 0-.87.375-.87-1.02 0-.615.332-.99.87-.99z" />
      </svg>
    ),
    'MySQL': <Database className={iconClassName} />,
    'HTML': <Code className={iconClassName} />,
    'CSS': <Brush className={iconClassName} />,
    'JavaScript': <Code className={iconClassName} />,
    'WordPress': (
      <svg role="img" viewBox="0 0 24 24" className={iconClassName} fill="currentColor">
        <path d="M2.43 12.013c0-4.05 2.8-7.531 6.643-8.495l.504 2.222c-2.33.805-3.95 2.94-3.95 5.43 0 2.03.95 3.86 2.47 5.105l.06-.036.12-.073c1.52-1.245 3.56-2.022 5.72-2.022v-3.32l-2.48 2.42c-.22.21-.58.21-.8 0-.22-.22-.22-.58 0-.8l3.43-3.35c.1-.1.25-.15.4-.15s.3.05.4.15l3.43 3.35c.22.22.22.58 0 .8-.22.22-.58.22-.8 0l-2.48-2.42v6.62c-2.82 0-5.46 1.1-7.44 2.99C4.58 17.653 2.43 15.043 2.43 12.013zm15.71-8.23l-.53-2.22C21.8 2.81 24 5.92 24 9.483c0 3.3-1.92 6.18-4.66 7.535l-1.03-2.05c1.68-1 2.89-2.79 2.89-4.865 0-2.3-1.39-4.3-3.46-5.28zm-4.22 8.16l-3.36-3.29c-.1-.1-.25-.14-.4-.14s-.3.04-.4.14l-3.36 3.29c-.22.21-.22.58 0 .79.22.21.58.21.8 0l2.96-2.92 2.96 2.92c.1.1.25.16.4.16s.3-.06.4-.16c.22-.21.22-.58 0-.79z" />
      </svg>
    ),
    'Elementor': <Brush className={iconClassName} />,
    'ACF': <Settings className={iconClassName} />,
    'Git': <GitBranch className={iconClassName} />,
    'Figma': <FigmaIcon className={iconClassName} />,
    'REST APIs': <Globe className={iconClassName} />,
    'Web Development': <Code className={iconClassName}/>,
    'WordPress Development': <svg role="img" viewBox="0 0 24 24" className={iconClassName} fill="currentColor"><path d="M2.43 12.013c0-4.05 2.8-7.531 6.643-8.495l.504 2.222c-2.33.805-3.95 2.94-3.95 5.43 0 2.03.95 3.86 2.47 5.105l.06-.036.12-.073c1.52-1.245 3.56-2.022 5.72-2.022v-3.32l-2.48 2.42c-.22.21-.58.21-.8 0-.22-.22-.22-.58 0-.8l3.43-3.35c.1-.1.25-.15.4-.15s.3.05.4.15l3.43 3.35c.22.22.22.58 0 .8-.22.22-.58.22-.8 0l-2.48-2.42v6.62c-2.82 0-5.46 1.1-7.44 2.99C4.58 17.653 2.43 15.043 2.43 12.013zm15.71-8.23l-.53-2.22C21.8 2.81 24 5.92 24 9.483c0 3.3-1.92 6.18-4.66 7.535l-1.03-2.05c1.68-1 2.89-2.79 2.89-4.865 0-2.3-1.39-4.3-3.46-5.28zm-4.22 8.16l-3.36-3.29c-.1-.1-.25-.14-.4-.14s-.3.04-.4.14l-3.36 3.29c-.22.21-.22.58 0 .79.22.21.58.21.8 0l2.96-2.92 2.96 2.92c.1.1.25.16.4.16s.3-.06.4-.16c.22-.21.22-.58 0-.79z" /></svg>,
    'Website Optimization': <Wind className={iconClassName} />,
    'Custom Web Solutions': <Server className={iconClassName} />,
  };

  const icon = icons[name];

  if (!icon) {
    return (
      <div className={iconContainerClassName}>
        <Code className={iconClassName} />
        <span className="font-medium text-foreground/80">{name}</span>
      </div>
    );
  }

  return (
    <div className={iconContainerClassName}>
      {icon}
      <span className="font-medium text-foreground/80">{name}</span>
    </div>
  );
};

export default TechIcon;
