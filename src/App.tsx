import { ThemeProvider } from './context/ThemeContext.tsx';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import DevpostSection from './components/DevpostSection';
import ContactSection from './components/ContactSection';
// import SplashCursor from "@/components/SplashCursor";


function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen transition-colors duration-300 relative"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* <SplashCursor /> */}
        <div className="min-h-screen relative">
          <Navigation />

          <main className="relative z-10">
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <AchievementsSection />
            <DevpostSection />
            <AboutSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <footer className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/30 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  © 2025 Moinaktar Shaikh. Crafted with passion and precision.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;