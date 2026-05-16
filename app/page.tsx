import Hero from './components/hero'; 
import About from './components/about';
import Education from './components/education';
export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-[#080808] scroll-smooth">
      
      {/* SECTION 1: HERO */}
      <div className="snap-start w-full h-screen shrink-0 relative">
        <Hero />
      </div>

      {/* SECTION 2: ABOUT */}
      <div className="snap-start w-full min-h-screen shrink-0 relative">
        <About />
      </div>

      {/* SECTION 3: EDUCATION */}
      <div className="snap-start w-full min-h-screen shrink-0 relative">
        <Education />
      </div>

    </main>
  );

}