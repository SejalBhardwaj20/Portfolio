import { motion } from 'framer-motion';
import { Heart, Coffee } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-heading font-bold text-gradient mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            THANK YOU
          </motion.h2>
          
          <motion.p
            className="text-muted text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            For scrolling down all the way here
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="w-4 h-4 text-pop fill-current" />
            </motion.div>
            <span>and lots of</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Coffee className="w-4 h-4 text-accent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-primary origin-left"
        style={{
          scaleX: typeof window !== 'undefined' ? 
            window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </footer>
  );
};