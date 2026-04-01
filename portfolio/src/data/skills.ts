export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'Redux', level: 75, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'Python', level: 70, category: 'backend' },
  { name: 'REST APIs', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },
  { name: 'JWT Auth', level: 80, category: 'backend' },
  
  // Database
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  { name: 'MySQL', level: 70, category: 'backend' },
  { name: 'Redis', level: 65, category: 'backend' },
  { name: 'Firebase', level: 75, category: 'backend' },
  
  // Tools
  { name: 'Git & GitHub', level: 90, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Figma', level: 80, category: 'tools' },
  { name: 'Webpack', level: 75, category: 'tools' },
  { name: 'Jest', level: 70, category: 'tools' },
  { name: 'Docker', level: 65, category: 'tools' },
  { name: 'AWS', level: 60, category: 'tools' },
  { name: 'Vercel/Render', level: 85, category: 'tools' },
];

export const skillCategories = [
  { id: 'frontend', name: 'Frontend Development', color: 'bg-brand-primary' },
  { id: 'backend', name: 'Backend Development', color: 'bg-brand-secondary' },
  { id: 'tools', name: 'Tools & Others', color: 'bg-brand-accent' },
] as const;
