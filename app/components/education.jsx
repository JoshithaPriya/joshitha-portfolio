"use client";
import React from 'react';
import styled from 'styled-components';

export default function Education() {
    return (
        <section className="relative w-full min-h-screen bg-[#080808] overflow-hidden flex flex-col items-center py-24 font-display">

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#8B1A2B]/10 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#D1D1D1_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-7 lg:px-16 z-10">

                {/* Section Heading */}
                <div className="mb-8 md:mb-12 flex flex-col items-start"> 
                    <h2 className="text-[10vw] md:text-[80px] lg:text-[100px] font-black leading-none text-[#B82E3D] uppercase tracking-tighter drop-shadow-[0_0_25px_rgba(184,46,61,0.3)]">
                        EDUCATION
                    </h2>
                    <p className="text-[#D1D1D1]/70 mt-4 text-lg font-light tracking-wide max-w-xl">
                        Building a dual foundation in engineering and intelligent data systems.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-50 justify-center items-center flex-wrap">



                    {/* Card 1: CIT */}
                    <EduCard
                        title="B.Tech IT"
                        institution="Chennai Institute of Technology"
                        desc={<><span className="text-white font-medium tracking-wide">Status: Pre-final Year</span><br /><br /><span className="text-[#cc2938] font-medium">Current CGPA: 8.67/10</span><br /><br /><span className="text-[#cc2938] font-medium">Coursework:</span> DSA, DBMS, OOPs, Web Development, Operating Systems</>}
                        tag="2024 - 2028"
                        icon={<span className="text-[#cc2938] font-black text-xl tracking-tighter">&lt;&gt;</span>}
                    />
                    {/* Card 2: IIT Madras */}
                    <EduCard
                        title="B.S. Data Science"
                        institution="Indian Institute of Technology Madras"
                        desc={<><span className="text-white font-medium tracking-wide">Level: Diploma in Programming</span><br /><br /><span className="text-[#cc2938] font-medium">Current CGPA: 7.5/10</span><br /><br /><span className="text-[#cc2938] font-medium">Coursework:</span> Python, Statistics, Modern App Development, DSA, Database Systems</>}
                        tag="2024 - Present"
                        icon={<span className="text-[#cc2938] font-black text-l tracking-tighter">DS</span>}
                    />

                </div>

            </div>

        </section>
    );
}

const EduCard = ({ title, institution, desc, tag, icon }) => {
    return (
        <StyledWrapper>
            <div className="parent">
                <div className="card">
                    <div className="logo">
                        <span className="circle circle1" />
                        <span className="circle circle2" />
                        <span className="circle circle3" />
                        <span className="circle circle4" />
                        <span className="circle circle5">{icon}</span>
                    </div>
                    <div className="glass" />
                    <div className="content">
                        <span className="title">{title}</span>
                        <span className="block mt-1 text-[#D1D1D1] font-semibold text-[13px]">{institution}</span>
                        <span className="text">{desc}</span>
                    </div>
                    <div className="bottom">
                        <div className="status-tag">{tag}</div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
.parent {
    width: 380px;  /* Increased from 320px */
    height: 420px; /* Increased from 340px to fit all text */
    perspective: 1000px;
    position: relative;
  }

.card {
    height: 100%;
    border-radius: 40px;
    /* CHANGED: Solid black background instead of full red */
    background: #080808;
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    /* Dark red shadow */
    box-shadow:
      rgba(204, 41, 56, 0) 40px 50px 25px -40px,
      rgba(204, 41, 56, 0.1) 0px 25px 25px -5px;
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255,255,255,0.05);
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 35px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.15) 100%
    );
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.5s ease-in-out;
  }

.content {
    padding: 80px 30px 0px 30px; /* Reduced top padding from 100px to push text up slightly */
    transform: translate3d(0, 0, 26px);
    position: relative;
    z-index: 10;
  }

  .content .title {
    display: block;
    /* CHANGED: Title is now your specific red */
    color: #cc2938;
    font-weight: 900;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .content .text {
    display: block;
    color: rgba(255, 255, 255, 0.75);
    font-size: 14px;
    margin-top: 16px;
    line-height: 1.6;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 25px;
    left: 30px;
    transform: translate3d(0, 0, 26px);
    z-index: 10;
  }

 .bottom .status-tag {
    background: rgba(0, 0, 0, 0.5);
    color: #cc2938;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    border: 1px solid rgba(204, 41, 56, 0.3);
    backdrop-filter: blur(4px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
    z-index: 5;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(0, 0, 0, 0.2) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    /* CHANGED: Very faint white translucent layers */
    background: rgba(255, 255, 255, 0.03); 
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.1s;
  }

  .logo .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.2s;
  }

  .logo .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 0.3s;
  }

  .logo .circle5 {
    width: 50px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 0.4s;
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: #FF4D5E; /* Star icon color */
  }

  /* HOVER EFFECTS */
.parent:hover .card {
    transform: rotate3d(1, -1, 0, 20deg);
    box-shadow:
      rgba(204, 41, 56, 0.25) 30px 50px 25px -40px,
      rgba(204, 41, 56, 0.3) 0px 25px 30px 0px;
  }

.parent:hover .card .logo .circle2 { background: rgba(255, 255, 255, 0.05); }
  .parent:hover .card .logo .circle3 { background: rgba(255, 255, 255, 0.08); }
  .parent:hover .card .logo .circle4 { background: rgba(255, 255, 255, 0.12); }
  .parent:hover .card .logo .circle5 { background: rgba(255, 255, 255, 0.15); }

  @media (max-width: 600px) {
    .parent {
      width: 100%;
      max-width: 350px;
      height: 460px; /* Give a bit more height on mobile since text wraps more */
    }
    .content {
      padding: 70px 25px 0px 25px;
    }
    .content .title {
      font-size: 20px;
    }
    .content .text {
      font-size: 13px;
      margin-top: 15px;
    }
  }
`;