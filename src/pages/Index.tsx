import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import PortfolioSection from '@/components/PortfolioSection';
import VisionSection from '@/components/VisionSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PortfolioSection />
        <VisionSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Kalakoti Jagadeesh. Built with passion and curiosity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;