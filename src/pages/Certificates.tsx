import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import siteData from '@/content/site.json';

export default function Certificates() {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <section className="py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-12"
          >
            Certificates
          </motion.h1>
        </section>

        <section className="pb-20">
          <div className="grid gap-6 max-w-2xl mx-auto">
            {siteData.certificates.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 hover-lift glass border-border">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                        <Award className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-ink mb-2">{cert}</h3>
                      <p className="text-muted mb-4">Professional certification in data science and methodology</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
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