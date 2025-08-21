import { motion } from 'framer-motion';
import { Cloud, Brain, Palette } from 'lucide-react';
import { Card } from '@/components/ui/card';
import siteData from '@/content/site.json';

export default function Experience() {
  const experiences = [
    {
      title: "Nexus Teacher ERP",
      description: "IBM Cloud services with facial recognition attendance system",
      tags: ["IBM Cloud", "Python", "ML", "Image Processing"],
      icon: Cloud
    },
    {
      title: "Digital Dynamics",
      description: "Dynamic tech website prototype with fluid animations",
      tags: ["Prototype", "Animation", "Motion Design"],
      icon: Palette
    },
    {
      title: "Spotify Card Recreation",
      description: "Interactive music card micro-interactions",
      tags: ["Animation", "Interaction", "UX"],
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <section className="py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-12"
          >
            Work Experience
          </motion.h1>
          
          <blockquote className="text-2xl md:text-3xl font-heading text-ink leading-tight max-w-4xl mx-auto mb-16">
            "{siteData.quote}"
          </blockquote>
        </section>

        <section className="pb-20">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 hover-lift glass border-border">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                        <exp.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-ink mb-2">{exp.title}</h3>
                      <p className="text-muted mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-muted-bg/30 rounded-full text-xs text-ink">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}