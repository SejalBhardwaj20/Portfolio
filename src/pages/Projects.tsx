import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Figma, ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProjectModal } from '@/components/ProjectModal';
import { Project } from '@/types';
import projectsData from '@/content/projects.json';

const categories = ['All', 'Web Apps', 'Prototypes', 'Logos', 'Animations', 'Concepts'];

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <section className="py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted max-w-3xl mx-auto"
          >
            A collection of creative solutions, interactive prototypes, and design innovations
          </motion.p>
        </section>

        {/* Filters */}
        <section className="pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </section>

        {/* Projects Grid */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          key={activeFilter} // Re-animate when filter changes
          className="pb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group overflow-hidden glass border-border hover-lift h-full cursor-pointer">
                  <div onClick={() => openProjectModal(project as Project)}>
                    <div className="aspect-video bg-muted-bg/50 relative overflow-hidden">
                      <img
                        src={project.cover}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {(project as any).comingSoon && (
                        <div className="absolute inset-0 bg-bg/80 flex items-center justify-center">
                          <Badge variant="secondary" className="text-sm font-medium">
                            Coming Soon
                          </Badge>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <Eye className="w-8 h-8 text-white mx-auto mb-2" />
                          <span className="text-white font-medium">View Details</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-heading font-semibold text-xl text-ink group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      
                      {project.subtitle && (
                        <p className="text-accent font-medium mb-2">
                          {project.subtitle}
                        </p>
                      )}
                      
                      <p className="text-muted text-sm mb-4 line-clamp-2">
                        {project.summary}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Links placeholder for future enhancement */}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </motion.section>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
}