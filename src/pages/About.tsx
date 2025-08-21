import { motion } from 'framer-motion';
import { Coffee, Heart, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import siteData from '@/content/site.json';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Usability First",
      description: "Every design decision is made with the user in mind, ensuring intuitive and accessible experiences."
    },
    {
      icon: Zap,
      title: "Performance Matters",
      description: "Fast, efficient, and optimized solutions that deliver exceptional performance across all devices."
    },
    {
      icon: Coffee,
      title: "Delightful Motion",
      description: "Thoughtful animations and micro-interactions that enhance user engagement and understanding."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Working closely with teams to transform ideas into reality through open communication and shared vision."
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-6">
        {/* Hero Quote */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-3xl md:text-5xl font-heading font-bold text-gradient leading-tight">
              "{siteData.quote}"
            </blockquote>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-primary mx-auto mt-8 rounded-full"
            />
          </motion.div>
        </section>

        {/* What I Care About */}
        <section className="py-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
            >
              What I Care About
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-8 h-full hover-lift glass border-border">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-ink mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Coffee Transition Scene */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-heading font-semibold mb-8 text-ink">
              Fueled by Creativity & Coffee
            </h3>
            
            <div className="relative w-32 h-32 mx-auto">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg">
                  <Coffee className="w-10 h-10 text-amber-100" />
                </div>
              </motion.div>

              {/* Steam Animation */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-8 bg-gradient-to-t from-gray-300 to-transparent rounded-full opacity-60"
                  style={{
                    left: `${45 + i * 8}%`,
                    top: '10%'
                  }}
                  animate={{
                    y: [-20, -40, -20],
                    opacity: [0.6, 0.2, 0.6],
                    scaleY: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Coffee Beans */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-amber-700 rounded-full"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    bottom: '10%'
                  }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted mt-6 italic"
            >
              "Great ideas brew with the perfect blend of inspiration and caffeine"
            </motion.p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}