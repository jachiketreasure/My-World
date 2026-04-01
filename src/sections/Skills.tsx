import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills, skillCategories, type Skill } from '../data/skills';
import { fadeInUp, staggerContainer } from '../utils/animations';

function SkillCard({ skill }: { skill: Skill }) {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'from-brand-primary to-blue-400';
      case 'backend':
        return 'from-brand-secondary to-indigo-400';
      case 'tools':
        return 'from-brand-accent to-cyan-400';
      default:
        return 'from-brand-primary to-brand-accent';
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
          <span className="text-sm font-medium text-brand-primary dark:text-brand-accent">
            {skill.level}%
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? `${skill.level}%` : `${skill.level * 0.8}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              variants={fadeInUp}
              className="text-brand-primary dark:text-brand-accent font-medium text-sm uppercase tracking-wider"
            >
              My Skills
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2"
            >
              Technologies I Work With
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-300 mt-4 text-lg"
            >
              I've worked with a variety of technologies in the web development world.
              Here are the tools and frameworks I'm proficient in.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-brand-primary text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-brand-primary text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            {[
              { value: '20+', label: 'Technologies' },
              { value: '5+', label: 'Years Experience' },
              { value: '150+', label: 'Projects Completed' },
              { value: '100%', label: 'Commitment' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm"
              >
                <p className="text-3xl md:text-4xl font-bold text-brand-primary dark:text-brand-accent">
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
