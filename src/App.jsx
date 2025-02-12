import { motion } from 'framer-motion';
import ProjectsSection from './pages/swiper';
import SkillSection from './pages/skills';
import ServiceSection from './pages/services';
import Footer from './pages/footer';
import ContactSection from './pages/contact';
import AboutMe from './pages/about';
import HeroSection from './pages/heroSection';
import Header from './pages/header';

const App = () => {

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
      <HeroSection />

      {/* About Me Section */}
      <AboutMe />

      {/* Skills Section */}
      <SkillSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;