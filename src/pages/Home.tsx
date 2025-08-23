import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Briefcase, Code, Sparkles, Award, Coffee, Github, Palette, Monitor, Layers, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import siteData from '@/content/site.json';
import projectsData from '@/content/projects.json';

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

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-6 py-32 relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={item} className="mb-6">
              <motion.span
                className="inline-block text-2xl md:text-3xl font-heading font-bold text-accent mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                {siteData.hero.greeting}
              </motion.span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-gradient mb-6"
            >
              {siteData.hero.name}
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-xl md:text-2xl font-heading font-semibold text-ink mb-8"
            >
              {siteData.hero.role}
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed italic"
            >
              {siteData.hero.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/projects">
                  <span>View Projects</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group border-border hover:bg-accent-bg hover:text-accent-foreground"
                onClick={() => window.open('/Resume.pdf', '_blank')}
              >
                <Download className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Hero Section Floating Doodles */}
      <section className="relative">
        {/* Floating Doodles - Distributed across entire page */}
        <motion.div
          className="absolute top-12 left-8 text-purple-400"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(147,51,234,0.6))" }}
        >
          <Coffee className="w-5 h-5" />
        </motion.div>
        
        <motion.div
          className="absolute top-16 right-24 text-emerald-400"
          animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(52,211,153,0.6))" }}
        >
          <Code className="w-6 h-6" />
        </motion.div>

        <motion.div
          className="absolute top-24 left-1/4 text-blue-400"
          animate={{ x: [0, 12, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, delay: 1 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(59,130,246,0.6))" }}
        >
          <Github className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-12 text-pink-400"
          animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3.5, delay: 1.5 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(236,72,153,0.6))" }}
        >
          <Palette className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute top-40 left-12 text-orange-400"
          animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, delay: 2 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(251,146,60,0.6))" }}
        >
          <Monitor className="w-6 h-6" />
        </motion.div>

        <motion.div
          className="absolute top-48 right-1/3 text-cyan-400"
          animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 6, delay: 0.8 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.6))" }}
        >
          <Layers className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute top-56 left-1/3 text-red-400"
          animate={{ y: [0, -8, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3.8, delay: 2.5 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(248,113,113,0.6))" }}
        >
          <Camera className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute top-64 right-20 text-yellow-400"
          animate={{ y: [0, 10, 0], rotate: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 1.2 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(250,204,21,0.6))" }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        <motion.div
          className="absolute top-72 left-20 text-indigo-400"
          animate={{ x: [0, -10, 0], y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, delay: 3 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(129,140,248,0.6))" }}
        >
          <Code className="w-4 h-4" />
        </motion.div>

        <motion.div
          className="absolute top-80 right-1/4 text-teal-400"
          animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 4.2, delay: 1.8 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(45,212,191,0.6))" }}
        >
          <Coffee className="w-4 h-4" />
        </motion.div>

        {/* Additional doodles for better distribution */}
        <motion.div
          className="absolute bottom-80 left-16 text-purple-500"
          animate={{ y: [0, 8, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3.2, delay: 0.3 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(168,85,247,0.6))" }}
        >
          <Github className="w-4 h-4" />
        </motion.div>

        <motion.div
          className="absolute bottom-72 right-32 text-green-400"
          animate={{ x: [0, -8, 0], y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4.8, delay: 1.5 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(34,197,94,0.6))" }}
        >
          <Palette className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute bottom-64 left-1/4 text-rose-400"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3.8, delay: 2.2 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(251,113,133,0.6))" }}
        >
          <Monitor className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute bottom-56 right-16 text-violet-400"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, delay: 0.8 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(139,92,246,0.6))" }}
        >
          <Layers className="w-6 h-6" />
        </motion.div>

        <motion.div
          className="absolute bottom-48 left-8 text-amber-400"
          animate={{ rotate: [0, 25, 0], y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 5.2, delay: 1.8 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(251,191,36,0.6))" }}
        >
          <Camera className="w-4 h-4" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-1/3 text-lime-400"
          animate={{ y: [0, 10, 0], scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 3.6, delay: 2.8 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(163,230,53,0.6))" }}
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/3 text-sky-400"
          animate={{ x: [0, -6, 0], y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4.3, delay: 1.1 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(56,189,248,0.6))" }}
        >
          <Code className="w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute bottom-24 right-8 text-fuchsia-400"
          animate={{ rotate: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4.7, delay: 0.6 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(232,121,249,0.6))" }}
        >
          <Coffee className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-gradient"
          >
            Explore My Journey
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Work Experience",
                description: "Journey of growth and learning",
                icon: Briefcase,
                path: "/experience",
                color: "text-primary"
              },
              {
                title: "Skills",
                description: "Technical & creative expertise",
                icon: Code,
                path: "/skills",
                color: "text-accent"
              },
              {
                title: "Projects",
                description: "Creative solutions & innovations",
                icon: Sparkles,
                path: "/projects",
                color: "text-pop"
              },
              {
                title: "Certificates",
                description: "Continuous learning achievements",
                icon: Award,
                path: "/certificates",
                color: "text-primary"
              }
            ].map((tile, index) => (
              <motion.div
                key={tile.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group p-6 h-full hover-lift glass border-border cursor-pointer">
                  <Link to={tile.path} className="block">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${tile.color} group-hover:scale-110 transition-transform`}>
                        <tile.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-ink">
                        {tile.title}
                      </h3>
                    </div>
                    <p className="text-muted text-sm">
                      {tile.description}
                    </p>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-muted">
              <span>Building Projects — a never ending loop</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-primary"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-muted">
              <span>Building Projects — a never ending loop</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-primary"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover-lift glass border-border">
                  <Link to={`/projects/${project.slug}`}>
                    <div className="aspect-square bg-muted-bg/50 relative overflow-hidden">
                      <img
                        src={project.cover}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-ink mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="overflow-hidden relative">
        <div className="relative py-3 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-emerald-400/15 via-blue-400/10 to-purple-400/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)]"></div>
          <motion.div
            className="flex whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-emerald-300 via-blue-300 to-purple-300 font-heading font-bold text-xl md:text-2xl tracking-[0.3em] relative z-10"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              filter: "drop-shadow(0 0 12px rgba(147,51,234,0.8)) drop-shadow(0 0 24px rgba(52,211,153,0.6)) drop-shadow(0 0 36px rgba(59,130,246,0.4)) drop-shadow(0 0 48px rgba(147,51,234,0.2))"
            }}
          >
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
            <span className="mr-8">MY PORTFOLIO</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}