"use client";
import React, { useRef } from 'react';
import styled from 'styled-components';

export default function Codefolio() {
  const scrollRef = useRef(null);
  const hoverIntervalRef = useRef(null); 

  const stats = [
    { title: "400+", subtitle: "Problems Solved", desc: "Across LeetCode & other coding platforms.", tag: "DSA" },
    { title: "DSA", subtitle: "Strong Foundation", desc: "Focused on graphs, DP, binary search, and patterns.", tag: "CORE" },
    { title: "1451", subtitle: "Max LC Rating", desc: "Consistently improving through contests.", tag: "RANK" },
    { title: "C++ ★★★★★", subtitle: "Primary Language", desc: "Primary language for DSA and competitive programming.", tag: "LANG" },
    { title: "GitHub", subtitle: "Active Contributor", desc: "Building full-stack and AI-integrated projects.", tag: "DEV" },
    { title: "100+", subtitle: "Contributions", desc: "Maintaining coding consistency and project activity.", tag: "STREAK" },
  ];




  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 270;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const startScroll = (direction) => {
    if (hoverIntervalRef.current) clearInterval(hoverIntervalRef.current);

    hoverIntervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        // Scroll a tiny amount every 16ms (approx 60fps) for buttery smooth movement
        const scrollAmount = direction === 'left' ? -5 : 5;
        // Notice behavior is 'auto' here, 'smooth' causes lag when fired repeatedly
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'auto' });
      }
    }, 16);
  };

  // Function to stop scrolling when mouse leaves
  const stopScroll = () => {
    if (hoverIntervalRef.current) {
      clearInterval(hoverIntervalRef.current);
      hoverIntervalRef.current = null;
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-[#080808] overflow-hidden flex flex-col py-24 font-display">

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] bg-[#8B1A2B]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#D1D1D1_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 z-10 flex flex-col gap-24">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[10vw] md:text-[80px] lg:text-[100px] font-black leading-none text-[#B82E3D] uppercase tracking-tighter drop-shadow-[0_0_25px_rgba(184,46,61,0.3)]">
            CODEFOLIO
          </h1>
          <p className="text-[#D1D1D1]/70 mt-4 text-lg font-light tracking-wide max-w-2xl">
            My programming journey, statistics, and live profiles across the competitive coding landscape.
          </p>
        </div>

        {/* PART 1: THE CARD CAROUSEL */}
        <div className="flex flex-col items-center w-full relative">
          <h3 className="text-white text-xl font-bold mb-6 tracking-widest uppercase">The Statistics</h3>

          <StyledCarouselWrapper>

            {/* Left Fade Zone */}
            <div
              className="hover-zone left-zone"
              onMouseEnter={() => startScroll('left')}
              onMouseLeave={stopScroll}
            >
              <div className="glow-line" />
            </div>

            {/* Scrollable Container  */}
            <div className="carousel-container" ref={scrollRef}>
              {stats.map((stat, idx) => (
                <div className="stat-card" key={idx}>

                  <div className="main-content">
                    <div className="header">
                      <span>Stat</span>
                      <span>Overview</span>
                    </div>
                    <p className="heading">{stat.title}</p>
                    <div className="categories">
                      <span>{stat.tag}</span>
                    </div>
                  </div>
                  <div className="footer">
                    <span className="subtitle">{stat.subtitle}</span>
                    <span className="desc">{stat.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Fade Zone */}
            <div
              className="hover-zone right-zone"
              onMouseEnter={() => startScroll('right')}
              onMouseLeave={stopScroll}
            >
              <div className="glow-line" />
            </div>

          </StyledCarouselWrapper>
        </div>

        {/* PART 2: GLOWING DASHBOARD WINDOW */}
        <div className="flex flex-col items-center w-full mt-10">
          <h3 className="text-white text-xl font-bold mb-12 tracking-widest uppercase">Live Profile</h3>
          <StyledGlowCard>
            <div className="embed-card">
              <div className="embed-content">

                {/* Live iFrame Embed for Codolio */}
                <iframe
                  src="https://codolio.com/profile/Joshitha%20Priya"
                  title="Codolio Profile"
                  className="w-full h-full border-none bg-[#0A0A0A]"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

              </div>
            </div>
          </StyledGlowCard>
        </div>

      </div>
    </main>
  );
}

// ==========================================
// CSS FOR PART 1: THE CARD CAROUSEL
// ==========================================

const StyledCarouselWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel-container {
    display: flex;
    gap: 30px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 40px 20px;
    width: 90%;
    max-width: 1200px;
    
    /* Hide native scrollbars for clean look */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }



  .left-arrow { left: 0; }
  .right-arrow { right: 0; }

/* The Card Design */
  .stat-card {
    flex-shrink: 0;
    width: 240px; 
    height: 220px; 
    padding: 20px 24px; 
    color: white;
    background: linear-gradient(#111, #111) padding-box,
                linear-gradient(145deg, transparent 35%, #cc2938, #FF4D5E) border-box;
    border: 2px solid transparent;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    cursor: default;
    transform-origin: right bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  }

  .stat-card .main-content {
    flex: 1;
  }

  .stat-card .header {
    display: flex;
    gap: 8px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .stat-card .header span:first-child {
    font-weight: 700;
    color: #cc2938;
  }
  .stat-card .header span:last-child {
    color: rgba(209, 209, 209, 0.5);
  }

  .stat-card .heading {
    font-size: 28px;
    margin: 16px 0 12px;
    font-weight: 900;
    color: #fff;
    line-height: 1.1;
  }

  .stat-card .categories {
    display: flex;
    gap: 8px;
  }

  .stat-card .categories span {
    background-color: rgba(204, 41, 56, 0.15);
    color: #FF4D5E;
    border: 1px solid rgba(255, 77, 94, 0.3);
    padding: 4px 12px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    border-radius: 50px;
  }

  .stat-card .footer {
    display: flex;
    flex-direction: column;
  }

  .stat-card .footer .subtitle {
    font-weight: 700;
    color: white;
    font-size: 14px;
  }

  .stat-card .footer .desc {
    font-weight: 500;
    color: rgba(209, 209, 209, 0.7);
    font-size: 12px;
    line-height: 1.4;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
  }

  .stat-card:hover {
    transform: rotate(6deg) translateY(-10px);
    box-shadow: 0 20px 40px rgba(204, 41, 56, 0.15);
  }

  .stat-card:hover .footer .desc {
    opacity: 1;
    max-height: 50px; 
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    .nav-arrow { display: none; }
    .carousel-container { width: 100%; padding: 20px; }
  }


  /* ========================================= */
  /* CINEMATIC FADE ZONES (Replaces Arrows)    */
  /* ========================================= */
  .hover-zone {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px; 
    z-index: 20;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: opacity 0.4s ease;
    opacity: 0.7;
  }

  .hover-zone:hover {
    opacity: 1; 
  }

  .glow-line {
    position: absolute;
    height: 40px;
    width: 3px;
    background: rgba(204, 41, 56, 0.3);
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .hover-zone:hover .glow-line {
    background: #FF4D5E;
    height: 60px;
    box-shadow: 0 0 15px #FF4D5E;
  }

  /* Left Shadow Gradient */
  .left-zone {
    left: 0;
    background: linear-gradient(to right, #080808 20%, transparent 100%);
    justify-content: flex-start;
  }
  .left-zone .glow-line {
    left: 20px; 
  }

  /* Right Shadow Gradient */
  .right-zone {
    right: 0;
    background: linear-gradient(to left, #080808 20%, transparent 100%);
    justify-content: flex-end;
  }
  .right-zone .glow-line {
    right: 20px; 
  }

  @media (max-width: 768px) {
    .hover-zone { display: none; }
  }
`;



// ==========================================
// CSS FOR PART 2: GLOWING DASHBOARD WINDOW
// ==========================================
const StyledGlowCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .embed-card {
    position: relative;
    width: 85vw;
    max-width: 1100px;
    height: 75vh;
    max-height: 700px;
    background-color: #080808;
    border-radius: 16px;
    padding: 12px;
    z-index: 1;
    border: 2px solid rgba(204, 41, 56, 0.4);
    box-shadow: 
      0 0 30px rgba(204, 41, 56, 0.3),
      inset 0 0 20px rgba(204, 41, 56, 0.1);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .embed-content {
    width: 100%;
    height: 100%;
    background: #0A0A0A;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    z-index: 5;
  }

  .embed-card:hover {
    border: 2px solid rgba(255, 77, 94, 0.8);
    box-shadow: 
      0 0 60px rgba(204, 41, 56, 0.6),
      inset 0 0 30px rgba(204, 41, 56, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    .embed-card {
       width: 92vw;
       height: 60vh;
       box-shadow: 0 0 20px rgba(204, 41, 56, 0.3);
    }
    .embed-card:hover {
       box-shadow: 0 0 40px rgba(204, 41, 56, 0.6);
    }
  }
`;