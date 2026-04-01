export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, checkout process, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://e-commerce-w645.onrender.com/',
    githubUrl: 'https://github.com/jachiketreasure',
    featured: true,
  },
  {
    id: 2,
    title: 'Expense Tracker',
    description: 'A personal finance management application for tracking expenses, income, and visualizing spending patterns with charts.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    tags: ['React', 'Chart.js', 'Local Storage', 'CSS3'],
    liveUrl: 'https://expense-tracker-p0a1.onrender.com/',
    githubUrl: 'https://github.com/jachiketreasure',
    featured: true,
  },
  {
    id: 3,
    title: 'Ambient Sound',
    description: 'A relaxing ambient sound player with multiple nature sounds, volume controls, and a beautiful, calming interface.',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&h=600&fit=crop',
    tags: ['JavaScript', 'Web Audio API', 'HTML5', 'CSS3'],
    liveUrl: 'https://ambient-sound.onrender.com/',
    githubUrl: 'https://github.com/jachiketreasure',
    featured: true,
  },
  {
    id: 4,
    title: 'Hangman Game',
    description: 'A classic word guessing game with multiple difficulty levels, score tracking, and an engaging user interface.',
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=600&fit=crop',
    tags: ['JavaScript', 'DOM Manipulation', 'HTML5', 'CSS3'],
    liveUrl: 'https://hangman-man-v5a5.onrender.com/',
    githubUrl: 'https://github.com/jachiketreasure',
    featured: false,
  },
  {
    id: 5,
    title: 'Breakout Arcade Game',
    description: 'A retro-style arcade brick breaker game with smooth animations, multiple levels, and high score tracking.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    tags: ['JavaScript', 'Canvas API', 'Game Development', 'HTML5'],
    liveUrl: 'https://breakout-game-ftw4.onrender.com/',
    githubUrl: 'https://github.com/jachiketreasure',
    featured: false,
  },
  {
    id: 6,
    title: 'Epic Speed Typer',
    description: 'A typing speed test game that measures WPM and accuracy with various difficulty levels and real-time feedback.',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop',
    tags: ['JavaScript', 'DOM Manipulation', 'Timer API', 'CSS3'],
    liveUrl: 'https://typing-game-iykj.onrender.com/',
    githubUrl: 'https://github.com/jachiketreasure',
    featured: false,
  },
];
