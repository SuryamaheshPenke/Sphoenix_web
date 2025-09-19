import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
  if (path === '/services') {
      navigate('/');
      setTimeout(() => {
        const servicesSection = document.getElementById('career-services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (path === '/contact') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Careers', path: '/careers/open-positions' },
    { label: 'Contact', path: '/contact' },
  ];

  const careerServices = [
    { label: 'Technology Training', path: '/career-services/technology-training' },
    { label: 'Resume Enhancement', path: '/career-services/resume-enhancement' },
    { label: 'Interview Guidance', path: '/career-services/interview-guidance' },
    { label: 'Job Placement', path: '/career-services/job-placement' },
  ];

  const consultingServices = [
    { label: 'Digital Transformation', path: '/it-consulting/digital-transformation' },
    { label: 'Cloud Infrastructure', path: '/it-consulting/cloud-infrastructure' },
    { label: 'Technology Strategy', path: '/it-consulting/technology-strategy' },
    { label: 'Software Architecture', path: '/it-consulting/software-architecture' },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/share/1FG9JrqCpL/', label: 'Facebook' },
    { icon: Twitter, url: 'https://x.com/sphoenixit', label: 'Twitter' },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/sphoenix-it-solutions/', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/sphoenixitsol/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6 animate-fade-in-up">
              <img src="/src/assets/phoenix-logo-blue.png" alt="Sphoenix" className="w-8 h-8" />
              <span className="font-poppins font-bold text-xl text-background">
                Sphoenix
              </span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed animate-fade-in-up">
              At Sphoenix, we simplify talent discovery and deliver excellence with integrity, innovation, and impact. Empowering careers and transforming businesses through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="secondary"
                    size="sm"
                    className="w-10 h-10 p-0 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none transition-smooth hover-scale shadow-glow"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6 text-background">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-background/80 hover:text-background transition-smooth flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6 text-background">Services</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-background/90 mb-2">Career Services</h4>
                <ul className="space-y-2">
                  {careerServices.slice(0, 2).map((service, index) => (
                    <li key={index}>
                      <button
                        onClick={() => navigate(service.path)}
                        className="text-background/70 hover:text-background transition-smooth text-sm"
                      >
                        {service.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-background/90 mb-2">IT Consulting</h4>
                <ul className="space-y-2">
                  {consultingServices.slice(0, 2).map((service, index) => (
                    <li key={index}>
                      <button
                        onClick={() => navigate(service.path)}
                        className="text-background/70 hover:text-background transition-smooth text-sm"
                      >
                        {service.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6 text-background">Contact Info</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-background/90 font-medium mb-1">USA Office</div>
                  <div className="text-background/70 text-sm">New York, NY, USA</div>
                  <div className="text-background/90 font-medium mb-1 mt-3">India Office</div>
                  <div className="text-background/70 text-sm">Cyber Gateway, Hi-tech City, Hyderabad</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+917673949165" className="text-background/80 hover:text-background transition-smooth block">
                    +91 7673949165
                  </a>
                  <a href="tel:+917396257590" className="text-background/80 hover:text-background transition-smooth block">
                    +91 7396257590
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a href="mailto:info@sphoenixit.com" className="text-background/80 hover:text-background transition-smooth">
                    info@sphoenixit.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/70 text-sm">
              © 2020 Sphoenix. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-background/70 hover:text-background transition-smooth">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-background/70 hover:text-background transition-smooth">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-background/70 hover:text-background transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;