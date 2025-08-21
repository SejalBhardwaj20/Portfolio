import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useStore } from '@/store/useStore';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme, isMenuOpen, setMenuOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-heading font-bold text-xl text-ink">
                SEJAL
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <motion.span 
                    className={`
                      px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative block
                      ${isActive 
                        ? 'text-primary shadow-[0_0_20px_rgba(147,51,234,0.4)]' 
                        : 'text-ink hover:text-accent'
                      }
                      hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-emerald-400/10
                      hover:shadow-[0_0_25px_rgba(147,51,234,0.3),0_0_35px_rgba(52,211,153,0.2)]
                      active:shadow-[0_0_30px_rgba(147,51,234,0.6),0_0_40px_rgba(52,211,153,0.4)]
                      active:scale-95
                    `}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full"
                        initial={false}
                      />
                    )}
                    {/* Hover underline effect */}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: !isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="relative overflow-hidden"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                className="relative"
              >
                {theme === 'dark' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </motion.div>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass border-border">
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary'
                          : 'text-ink hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};