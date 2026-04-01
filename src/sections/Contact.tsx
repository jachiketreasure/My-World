import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jachiketreasure@gmail.com',
    href: 'mailto:jachiketreasure@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 913 566 3829',
    href: 'tel:+2349135663829',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nigeria',
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/jachiketreasure', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/treasure-jachike', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/treasurejachike', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/treasurejachike', label: 'Instagram' },
];

function ContactForm() {
  const [state, handleSubmit] = useForm("mqedlkab");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Thank you for reaching out. I'll get back to you soon!
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
            placeholder="john@example.com"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
          placeholder="Project Inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none resize-none"
          placeholder="Tell me about your project..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <motion.button
        type="submit"
        disabled={state.submitting}
        className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {state.submitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
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
              Get In Touch
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2"
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-300 mt-4 text-lg"
            >
              Have a project in mind? I'd love to hear about it. Send me a message
              and let's create something amazing together.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={slideInLeft} className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                      <item.icon className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                      <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={slideInRight}>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
