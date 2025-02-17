import { motion } from 'framer-motion';
import ProjectsSection from './pages/swiper';
import SkillSection from './pages/skills';
import ServiceSection from './pages/services';
import Footer from './pages/footer';
import ContactSection from './pages/contact';
import AboutMe from './pages/about';
import HeroSection from './pages/heroSection';
import Header from './pages/header';
import { useRef } from 'react';
import WhatsAppButton from './pages/WhatsAppBtn';

const App = () => {

  const projectsRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-slate-900 overflow-hidden">

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection
        scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* About Me Section */}
      <AboutMe />

      {/* Skills Section */}
      <SkillSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Projects Section */}
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;