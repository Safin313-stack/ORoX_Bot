import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThemeStudio } from './components/ThemeStudio';
import { TalkSimulator } from './components/TalkSimulator';
import { FaceStudio } from './components/FaceStudio';
import { LifestyleGallery } from './components/LifestyleGallery';
import { BentoFeatures } from './components/BentoFeatures';
import { SuggestionBox } from './components/SuggestionBox';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ROBOT_THEMES, RobotTheme } from './types/robotCustomizer';

export function App() {
  const [selectedTheme, setSelectedTheme] = useState<RobotTheme>(ROBOT_THEMES[0]);

  return (
    <div className="min-h-screen bg-orox-dark text-slate-100 bg-ambient-radial selection:bg-orox-orange selection:text-black overflow-x-hidden w-full">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col w-full overflow-x-hidden">
        {/* Hero Landing Stage with Interactive 3D Cursor Tracking Robot */}
        <Hero />

        {/* 3D Theme & Emotion Reactions Studio */}
        <ThemeStudio onSelectThemeForWaitlist={(theme) => setSelectedTheme(theme)} />

        {/* Live Interactive Talking Robot Simulator */}
        <TalkSimulator />

        {/* Interactive OLED Screen Face & Emotions Playground */}
        <FaceStudio />

        {/* Industrial Design & Real-Life Showcase */}
        <LifestyleGallery />

        {/* Bento Grid: 6 Pillars of Innovation */}
        <BentoFeatures />

        {/* Community Suggestion Box & Priority Access */}
        <SuggestionBox preselectedTheme={selectedTheme} />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
