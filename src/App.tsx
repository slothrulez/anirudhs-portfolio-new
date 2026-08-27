import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Community } from './components/Community';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#e4e4e7] selection:bg-[#27272a] selection:text-[#fafafa]">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CurrentlyExploring />
        <Community />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
