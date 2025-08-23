import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Figma, Calendar, Tag, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery || [project.cover];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl bg-background border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Image Section */}
              <div className="relative h-80 bg-muted-bg/50 overflow-hidden">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Image Navigation */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-white shadow-lg' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Project Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-heading font-bold text-white mb-2"
                  >
                    {project.title}
                  </motion.h1>
                  {project.subtitle && (
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg text-white/90"
                    >
                      {project.subtitle}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Project Description */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h2 className="text-2xl font-heading font-bold text-ink mb-4">About This Project</h2>
                      <p className="text-muted leading-relaxed text-lg">
                        {project.body || project.summary}
                      </p>
                    </motion.div>

                    {/* Technologies Used */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-xl font-heading font-semibold text-ink mb-4 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-primary" />
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>

                    {/* Project Links */}
                    {project.links && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                      >
                        {project.links.live && (
                          <Button asChild className="group">
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.links.repo && (
                          <Button variant="outline" asChild className="group">
                            <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                              Source Code
                            </a>
                          </Button>
                        )}
                        {project.links.figma && (
                          <Button variant="outline" asChild className="group">
                            <a href={project.links.figma} target="_blank" rel="noopener noreferrer">
                              <Figma className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                              Design File
                            </a>
                          </Button>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Project Info Card */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Card className="p-6 glass border-border">
                        <h3 className="text-lg font-heading font-semibold text-ink mb-4">Project Details</h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Tag className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted">Category</p>
                              <p className="font-medium text-ink">{project.category}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                              <Clock className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm text-muted">Status</p>
                              <p className="font-medium text-ink">
                                {(project as any).comingSoon ? 'Coming Soon' : 'Completed'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Card className="p-4 glass border-border bg-gradient-to-r from-primary/5 to-accent/5">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center">
                              <span className="text-xs text-primary-foreground">★</span>
                            </div>
                            <span className="font-medium text-ink">Featured Project</span>
                          </div>
                        </Card>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
