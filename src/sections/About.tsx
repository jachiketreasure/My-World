import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Sparkles, Zap, Download } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Maintainable, scalable, and well-documented.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that users love.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Fast, efficient, and optimized apps.',
  },
  {
    icon: Sparkles,
    title: 'Modern Stack',
    description: 'Latest technologies and best practices.',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white dark:bg-brand-dark transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image Column */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent rounded-3xl transform rotate-6 opacity-20" />
              
              {/* Main image container */}
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./imgs/hero-shot.jpg"
                  alt="Treasure Jachike"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x400/2563EB/ffffff?text=TJ';
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Treasure Jachike</p>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">5+</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div variants={slideInRight} className="space-y-6">
            <div>
              <motion.span
                variants={fadeInUp}
                className="text-brand-primary dark:text-brand-accent font-medium text-sm uppercase tracking-wider"
              >
                About Me
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2"
              >
                Full Stack Developer
              </motion.h2>
            </div>

            <motion.div variants={fadeInUp} className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm Treasure Jachike, a full stack developer who loves building web applications 
                that solve real problems. With 5+ years of experience, I've worked with everything 
                from HTML/CSS fundamentals to complex backend architectures.
              </p>
              <p>
                My toolkit includes React.js, Node.js, Express, and various database technologies. 
                I enjoy the full development process - from designing clean user interfaces to 
                architecting robust server-side solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or experimenting with side projects. I believe in writing 
                code that's not just functional, but also maintainable and elegant.
              </p>
              
              {/* CV Download Button */}
              <motion.a
                href="src/assets/cv/TREASURE JACHIKE  CV.pdf" download="TREASURE JACHIKE  CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download My CV
              </motion.a>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  whileHover={{ y: -4 }}
                >
                  <item.icon className="w-6 h-6 text-brand-primary dark:text-brand-accent mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
