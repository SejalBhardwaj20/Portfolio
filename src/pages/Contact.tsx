import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:sejal@example.com',
      color: 'text-primary'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/sejal',
      color: 'text-ink'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/sejal',
      color: 'text-accent'
    }
  ];

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
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Let's chat about your next project or just say hello!
          </motion.p>
        </section>

        <div className="max-w-6xl mx-auto pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item}>
                <Card className="p-8 glass border-border">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-heading font-bold text-ink">
                      Send a Message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={item}>
                      <Label htmlFor="name" className="text-ink">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <Label htmlFor="email" className="text-ink">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="your@email.com"
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <Label htmlFor="message" className="text-ink">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Send className="w-4 h-4 mr-2" />
                          </motion.div>
                        ) : (
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        )}
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <motion.div variants={item}>
                <Card className="p-8 glass border-border">
                  <h3 className="text-xl font-heading font-bold text-ink mb-6">
                    Let's Start a Conversation
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    Whether you have a project in mind, want to collaborate, or just want to chat about design and technology, I'd love to hear from you.
                  </p>
                  <p className="text-muted leading-relaxed">
                    I typically respond within 24 hours and am always excited to discuss new opportunities and creative challenges.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="p-8 glass border-border">
                  <h3 className="text-xl font-heading font-bold text-ink mb-6">
                    Connect on Social
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted-bg/30 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <div className={`${social.color} group-hover:scale-110 transition-transform`}>
                          <social.icon className="w-5 h-5" />
                        </div>
                        <span className="text-ink font-medium">
                          {social.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="p-8 glass border-border text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center"
                  >
                    <MessageCircle className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h4 className="font-heading font-semibold text-ink mb-2">
                    Quick Response
                  </h4>
                  <p className="text-sm text-muted">
                    I aim to respond to all messages within 24 hours
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}