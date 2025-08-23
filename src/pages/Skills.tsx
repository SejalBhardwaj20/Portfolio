import { motion } from 'framer-motion';
import { Code, Palette, Figma, Layers, TrendingUp, Target, Zap, Award, Sparkles, Star, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const categoryIcons = {
  'PROGRAMMING LANGUAGES': Code,
  'Designing': Palette,
  'UI Design': Figma,
  'Logo Designing': Layers
};

const categoryBackgrounds = {
  'PROGRAMMING LANGUAGES': 'from-blue-500/20 via-purple-500/20 to-indigo-500/20',
  'Designing': 'from-pink-500/20 via-rose-500/20 to-red-500/20',
  'UI Design': 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
  'Logo Designing': 'from-orange-500/20 via-yellow-500/20 to-amber-500/20'
};

const categoryColors = {
  'PROGRAMMING LANGUAGES': {
    text: 'text-primary',
    bg: 'bg-primary/10',
    glow: 'shadow-[0_0_30px_hsl(var(--primary)/0.3)]',
    border: 'border-primary/30'
  },
  'Designing': {
    text: 'text-accent',
    bg: 'bg-accent/10',
    glow: 'shadow-[0_0_30px_hsl(var(--accent)/0.3)]',
    border: 'border-accent/30'
  },
  'UI Design': {
    text: 'text-pop',
    bg: 'bg-pop/10',
    glow: 'shadow-[0_0_30px_hsl(var(--pop)/0.3)]',
    border: 'border-pop/30'
  },
  'Logo Designing': {
    text: 'text-primary',
    bg: 'bg-primary/10',
    glow: 'shadow-[0_0_30px_hsl(var(--primary)/0.3)]',
    border: 'border-primary/30'
  }
};

const skillLevels = [
  { name: 'Expert', icon: Award, percentage: 95 },
  { name: 'Advanced', icon: TrendingUp, percentage: 85 },
  { name: 'Intermediate', icon: Target, percentage: 70 },
  { name: 'Learning', icon: Zap, percentage: 50 }
];

export default function Skills() {
  const tools = [
    { name: 'Figma', level: 95, category: 'design', icon: '🎨' },
    { name: 'Adobe Creative Suite', level: 90, category: 'design', icon: '🖌️' },
    { name: 'React', level: 92, category: 'dev', icon: '⚛️' },
    { name: 'TypeScript', level: 88, category: 'dev', icon: '📘' },
    { name: 'Python', level: 85, category: 'dev', icon: '🐍' },
    { name: 'HTML/CSS', level: 95, category: 'dev', icon: '🌐' },
    { name: 'JavaScript', level: 90, category: 'dev', icon: '⚡' },
    { name: 'Node.js', level: 82, category: 'dev', icon: '🟢' },
    { name: 'Git', level: 87, category: 'dev', icon: '📝' },
    { name: 'Framer Motion', level: 85, category: 'dev', icon: '🎭' }
  ];

  return (
    <div className="min-h-screen pt-32 relative">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary)/0.3) 0%, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5"
          style={{
            background: `radial-gradient(circle, hsl(var(--accent)/0.3) 0%, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient mb-8">
              Skills & Expertise
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted max-w-4xl mx-auto leading-relaxed"
          >
            A comprehensive toolkit spanning design, development, and strategic problem-solving. 
            Crafting digital experiences with precision and creativity.
          </motion.p>
        </section>

        {/* Skill Level Legend */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50"
              >
                <level.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-ink font-medium">{level.name}</span>
                <div className="text-xs text-muted">({level.percentage}%+)</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Categories */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteData.skills.categories.map((category, index) => {
              const IconComponent = categoryIcons[category.title as keyof typeof categoryIcons];
              const colors = categoryColors[category.title as keyof typeof categoryColors];
              
              return (
                <motion.div
                  key={category.title}
                  variants={item}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className={`p-8 h-full hover-lift glass border ${colors.border} relative overflow-hidden transition-all duration-300`}>
                    {/* Subtle Background */}
                    <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`${colors.text} p-3 rounded-xl ${colors.bg} border ${colors.border} group-hover:scale-105 transition-all duration-300`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-ink">
                            {category.title}
                          </h3>
                          <div className="text-sm text-muted">
                            {category.items.length} skills
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {category.items.map((skill, skillIndex) => {
                          const skillLevel = Math.floor(Math.random() * 25) + 70; // Random between 70-95
                          return (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIndex * 0.1 }}
                              whileHover={{ x: 5 }}
                              className="group/skill p-4 rounded-lg bg-card/30 hover:bg-card/60 transition-all duration-300 border border-transparent hover:border-border/50"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-ink font-medium flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                                  {skill}
                                </span>
                                <span className="text-xs text-muted font-medium">
                                  {skillLevel}%
                                </span>
                              </div>
                              
                              {/* Skill Progress Bar */}
                              <div className="w-full bg-muted-bg/30 rounded-full h-1.5 overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r from-primary to-accent rounded-full`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skillLevel}%` }}
                                  transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                                />
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Tools & Technologies - Enhanced */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Tools & Technologies
            </h2>
            <p className="text-muted text-lg">
              Professional tools for exceptional results
            </p>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group"
              >
                <Card className="p-4 text-center hover-lift glass border-border/50 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded ${tool.category === 'design' ? 'bg-accent' : 'bg-primary'}`} />
                    </div>
                    <h3 className="font-medium text-ink text-sm mb-2">{tool.name}</h3>
                    
                    {/* Mini Progress Circle */}
                    <div className="relative w-8 h-8 mx-auto">
                      <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-muted-bg/30"
                          strokeWidth="4"
                          fill="none"
                          stroke="currentColor"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <motion.path
                          className="text-primary"
                          strokeWidth="4"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          initial={{ strokeDasharray: "0 100" }}
                          whileInView={{ strokeDasharray: `${tool.level} 100` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-ink">{tool.level}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Philosophy */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="p-12 glass border border-primary/20 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-8">
                  Continuous Learning Philosophy
                </h3>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-muted">
                    Technology evolves rapidly, and so do I. Every project is an opportunity to learn something new, 
                    whether it's mastering a cutting-edge framework, exploring innovative design patterns, 
                    or diving deep into user psychology.
                  </p>
                  
                  <blockquote className="text-xl text-gradient font-medium border-l-4 border-primary pl-6 py-4">
                    "The best skills are not just technical—they're the ability to adapt, learn, 
                    and create meaningful experiences that resonate with users."
                  </blockquote>
                  
                  <div className="flex justify-center gap-8 pt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2 mx-auto">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm text-muted">Focus</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-2 mx-auto">
                        <TrendingUp className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-sm text-muted">Growth</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pop/10 rounded-xl flex items-center justify-center mb-2 mx-auto">
                        <Award className="w-6 h-6 text-pop" />
                      </div>
                      <span className="text-sm text-muted">Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
}