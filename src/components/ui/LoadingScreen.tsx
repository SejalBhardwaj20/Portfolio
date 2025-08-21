import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [percentage, setPercentage] = useState(0);
  const [trails, setTrails] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const increment = 1; // Increment by 1 each time for smooth counting
    
    const interval = setInterval(() => {
      setPercentage(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small delay before completing
          return 100;
        }
        return next;
      });
    }, 30); // Update every 30ms for smooth animation

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Bomb with Glowing Trail */}
        <div className="relative mb-8">
          {/* Glowing Trail Effects */}
          <AnimatePresence>
            {trails.map((trail) => (
              <motion.div
                key={trail.id}
                className="absolute w-8 h-8 pointer-events-none"
                style={{
                  left: `calc(50% + ${trail.x}px)`,
                  top: `calc(50% + ${trail.y}px)`,
                }}
                initial={{ 
                  scale: 1, 
                  opacity: 0.8,
                  filter: "blur(0px)"
                }}
                animate={{ 
                  scale: 0.3, 
                  opacity: 0,
                  filter: "blur(4px)"
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary via-accent to-pop shadow-[0_0_20px_hsl(var(--primary)/0.8),_0_0_40px_hsl(var(--accent)/0.6),_0_0_60px_hsl(var(--pop)/0.4)]" />
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div
            className="relative"
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -5, 0, -3, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onUpdate={(latest) => {
              // Add trail effect occasionally to avoid performance issues
              if (Math.random() > 0.7) {
                const x = typeof latest.x === 'number' ? latest.x : 0;
                const y = typeof latest.y === 'number' ? latest.y : 0;
                
                setTrails(prev => {
                  const newTrail = { id: Date.now() + Math.random(), x: x - 14, y: y + 14 };
                  const filtered = prev.filter(trail => Date.now() - trail.id < 1000);
                  return [...filtered, newTrail].slice(-5); // Keep only 5 trails
                });
              }
            }}
          >
            {/* Bomb Body */}
            <div className="relative w-28 h-28 mx-auto">
              {/* Main bomb body */}
              <motion.div
                className="w-24 h-24 bg-foreground rounded-full relative shadow-lg"
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotate: [0, 2, -2, 0],
                  boxShadow: [
                    "0 0 20px hsl(var(--primary)/0.5), 0 0 40px hsl(var(--accent)/0.3)",
                    "0 0 30px hsl(var(--accent)/0.6), 0 0 50px hsl(var(--primary)/0.4)",
                    "0 0 20px hsl(var(--primary)/0.5), 0 0 40px hsl(var(--accent)/0.3)"
                  ]
                }}
                transition={{ 
                  scale: { duration: 0.8, repeat: Infinity },
                  rotate: { duration: 0.8, repeat: Infinity },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                {/* Bomb highlight */}
                <div className="absolute top-2 left-4 w-6 h-6 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                
                {/* Bomb Eyes */}
                <motion.div 
                  className="absolute top-7 left-7 w-3 h-3 bg-background rounded-full"
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-7 right-7 w-3 h-3 bg-background rounded-full"
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.1 }}
                />
                
                {/* Wind-up Key */}
                <motion.div
                  className="absolute -left-4 top-10 w-8 h-6 border-3 border-foreground rounded-md bg-background/20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute -left-2 top-1/2 w-3 h-2 bg-foreground rounded-sm transform -translate-y-1/2" />
                  <div className="absolute left-1/2 -top-1 w-1 h-2 bg-foreground transform -translate-x-1/2" />
                </motion.div>
                
                {/* Running legs animation */}
                <motion.div
                  className="absolute -bottom-3 left-7 w-3 h-6 bg-foreground rounded-full origin-top"
                  animate={{ 
                    rotate: [0, 20, -20, 0],
                    scaleY: [1, 0.8, 1.2, 1]
                  }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-3 right-7 w-3 h-6 bg-foreground rounded-full origin-top"
                  animate={{ 
                    rotate: [0, -20, 20, 0],
                    scaleY: [1, 1.2, 0.8, 1]
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                />
                
                {/* Running arms */}
                <motion.div
                  className="absolute -left-2 top-12 w-2 h-8 bg-foreground rounded-full origin-top"
                  animate={{ rotate: [10, -30, 10] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -right-2 top-12 w-2 h-8 bg-foreground rounded-full origin-top"
                  animate={{ rotate: [-10, 30, -10] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                />
              </motion.div>
              
              {/* Fuse with improved spark */}
              <motion.div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.4, repeat: Infinity }}
              >
                <div className="w-2 h-8 bg-gradient-to-t from-foreground to-accent rounded-full" />
                {/* Enhanced spark */}
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                >
                  <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_hsl(var(--accent))]" />
                  <div className="absolute inset-0 w-3 h-3 bg-primary/50 rounded-full animate-ping" />
                </motion.div>
              </motion.div>
              
              {/* Running dust clouds */}
              <motion.div
                className="absolute -bottom-4 -left-2"
                animate={{
                  scale: [0, 1, 0],
                  x: [-10, 10, -10],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <div className="w-4 h-2 bg-muted/30 rounded-full" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-2"
                animate={{
                  scale: [0, 1, 0],
                  x: [10, -10, 10],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
              >
                <div className="w-4 h-2 bg-muted/30 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-heading font-bold text-foreground mb-4"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.h2>

        {/* Clean, Readable Percentage Counter */}
        <div className="relative mb-6">
          <motion.div
            className="relative px-6 py-3 bg-card border border-border rounded-xl"
            key={percentage} // Re-render on each percentage change for smooth updates
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {/* Main Counter - Clean and readable */}
            <div className="text-center">
              <span className="text-4xl font-heading font-bold text-gradient">
                {percentage}
              </span>
              <span className="text-xl font-heading font-medium text-muted ml-1">%</span>
            </div>
            
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl opacity-50"
              animate={{ 
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Clean Progress Bar */}
        <div className="relative w-72 h-2 bg-border/30 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          />
        </div>

        {/* Running Effect */}
        <div className="mt-4 flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}