import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Instagram, Download } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useState, useEffect } from 'react';
import cvFile from '../assets/cv/TREASURE JACHIKE  CV.pdf';

export function Hero() {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = "Treasure Jachike";
  const subtitle = 'I design, I code, I sip coffee';
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDeleting) {
        // Typing
        if (displayedName.length < fullName.length) {
          setDisplayedName(fullName.slice(0, displayedName.length + 1));
        } else {
          // Finished typing, start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedName.length > 0) {
          setDisplayedName(fullName.slice(0, displayedName.length - 1));
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 75 : 150);

    return () => clearInterval(timer);
  }, [displayedName, isDeleting]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-brand-dark dark:via-gray-900 dark:to-brand-dark"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary dark:text-brand-accent text-sm font-medium mb-4">
              Welcome to My World
            </span>
          </motion.div>

          {/* Main Title with Typing Effect */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
          >
            {displayedName}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-brand-primary ml-1 align-middle"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={fadeInUp} className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient">
              {subtitle.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.8 + index * 0.05,
                    ease: 'easeOut',
                  }}
                  className={char === ' ' ? 'inline' : 'inline-block'}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Building web applications that look great and work even better. 
            From concept to deployment, I bring ideas to life with clean code and thoughtful design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border-2 border-brand-primary text-brand-primary dark:text-brand-accent hover:bg-brand-primary hover:text-white font-semibold rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href={cvFile}
              download="TREASURE JACHIKE  CV.pdf"
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-6 pt-4"
          >
            {[
              { icon: Github, href: 'https://github.com/jachiketreasure', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/treasure-jachike-4ab12a223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/xoftie_4pf?s=21', label: 'X (Twitter)' },
              { icon: Instagram, href: 'https://instagram.com/jachike007', label: 'Instagram' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
