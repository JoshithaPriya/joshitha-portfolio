"use client";
import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#080808] overflow-hidden font-display select-none flex justify-center">

      {/* CRIMSON GLOW: Matching the red ambient glow of the terminal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-gradient-to-br from-[#8B1A2B] to-[#FF4D5E] opacity-20 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* MASTER GRID CONTAINER - Layout Unchanged */}
      <div className="relative w-full max-w-[1440px] h-full px-6 md:px-12 lg:px-16">

        {/* 1. Top Navigation */}
        <nav className="absolute top-0 left-0 w-full px-6 md:px-12 lg:px-16 py-6 flex justify-between items-center z-30 pointer-events-auto ">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-widest">
            {/* Glowing Crimson Dot */}
            <div className="w-4 h-4 bg-[#FF4D5E] rounded-sm shadow-[0_0_12px_rgba(255,77,94,0.6)]"></div>
            JP.
          </div>
          
          {/* Muted Nav Links with Crimson Glow on Hover */}
          <div className="hidden md:flex gap-10 text-[#D1D1D1] text-xs tracking-widest uppercase font-medium">
            <span className="hover:text-[#FF4D5E] hover:drop-shadow-[0_0_8px_rgba(255,77,94,0.5)] cursor-pointer transition-all duration-300">Services</span>
            <span className="hover:text-[#FF4D5E] hover:drop-shadow-[0_0_8px_rgba(255,77,94,0.5)] cursor-pointer transition-all duration-300">Portfolio</span>
            <span className="hover:text-[#FF4D5E] hover:drop-shadow-[0_0_8px_rgba(255,77,94,0.5)] cursor-pointer transition-all duration-300">Contact</span>
            <Link href="/codefolio" className="hover:text-[#FF4D5E] hover:drop-shadow-[0_0_8px_rgba(255,77,94,0.5)] transition-all duration-300">
  Codefolio
</Link>
          </div>
          
          {/* Crimson Outline Button */}
          <button className="px-6 py-2.5 border border-[#B82E3D]/50 text-[#FF4D5E] rounded-full text-xs uppercase tracking-widest hover:bg-[#FF4D5E] hover:text-white hover:shadow-[0_0_15px_rgba(255,77,94,0.4)] transition-all duration-300">
            View Resume
          </button>
        </nav>

        {/* 2. Main Name */}
        <div className="absolute top-[14%] left-0 w-full flex justify-center z-20 pointer-events-none px-4">
          <h1
            className="font-black whitespace-nowrap tracking-tighter leading-none text-center text-white drop-shadow-[0_0_35px_rgba(184,46,61,0.5)]"
            style={{ fontSize: 'clamp(2.5rem, 7.5vw, 130px)' }}
          >
            JOSHITHA PRIYA
          </h1>
        </div>

        {/* 3. B.TECH / [photo spacer] / STUDENT  */}
        <div className="absolute top-[50%] left-0 -translate-y-[45%] w-full flex justify-center items-center z-0 pointer-events-none gap-0">

          {/* LEFT: B.TECH */}
          <div className="flex-1 flex justify-end pr-4 md:pr-8">
            <span
              className="font-normal uppercase tracking-[0.05em] whitespace-nowrap transition-all duration-500"
              style={{
                fontSize: 'clamp(1.8rem, 6vw, 88px)',
                WebkitTextStroke: '1.5px rgba(184, 46, 61, 0.6)', 
                color: 'transparent',
              }}
            >
              B.tech
            </span>
          </div>

          {/* CENTER spacer */}
          <div className="w-[260px] sm:w-[360px] lg:w-[440px] shrink-0" />

          {/* RIGHT: STUDENT */}
          <div className="flex-1 flex justify-start pl-4 md:pl-8">
            <span
              className="font-normal uppercase tracking-[0.05em] whitespace-nowrap transition-all duration-500"
              style={{
                fontSize: 'clamp(1.8rem, 6vw, 88px)',
                WebkitTextStroke: '1.5px rgba(184, 46, 61, 0.6)', 
                color: 'transparent',
              }}
            >
              STUDENT
            </span>
          </div>
        </div>

        {/* 4. Bottom Left Info Panel */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 lg:left-16 z-20 flex flex-col items-start gap-5 max-w-[340px] pointer-events-auto">

          {/* Glassmorphic Dark Badge with Red Accents */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B82E3D]/30 bg-[#14080A]/80 backdrop-blur-md shadow-[0_0_15px_rgba(184,46,61,0.2)]">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
            <span className="text-[11px] font-medium text-[#06ba30] tracking-wide uppercase">Open for Internships</span>
          </div>

          {/* Paragraph Text matching About Me */}
          <p className="text-[#D1D1D1] text-[15px] leading-relaxed font-light">
            Hey there! I'm an IT & Data Science{' '}
            <span className="font-bold text-[#FF4D5E] drop-shadow-[0_0_8px_rgba(255,77,94,0.4)]">Student</span> working in the global marketplace.
          </p>

          {/* Premium Solid Crimson Button */}
          <button className="px-8 py-3.5 bg-[#B82E3D] text-white rounded-full font-bold text-sm tracking-wide hover:bg-[#FF4D5E] hover:shadow-[0_0_20px_rgba(255,77,94,0.5)] hover:scale-[1.02] transition-all duration-300 mt-2">
            Schedule Call
          </button>
        </div>

      </div>

      {/* 5. Profile Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] sm:w-[360px] lg:w-[440px] h-[58vh] md:h-[72vh] z-10 pointer-events-none">
        <Image
          src="/joshi_photo.png"
          alt="Joshitha Priya"
          fill
          priority
          className="object-contain object-bottom contrast-[1.05] saturate-[1.1]"
          sizes="(max-width: 640px) 260px, (max-width: 1024px) 360px, 440px"
        />
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />
      </div>

    </section>
  );
}