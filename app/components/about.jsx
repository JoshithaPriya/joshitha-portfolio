"use client";
import { useState, useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function About() {
  // --- TERMINAL LOGIC & STATE ---
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to JP-OS v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const [currentDir, setCurrentDir] = useState('/home/joshitha');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when history changes
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  //  File System
  const fileSystem = {
    '/home/joshitha': {
      dirs: ['projects', 'skills'],
      files: ['README.md']
    },
    '/home/joshitha/projects': {
      dirs: [],
      files: ['kaziranga_webops.txt', 'ai_solutions.txt']
    },
    '/home/joshitha/skills': {
      dirs: [],
      files: ['python.txt', 'react.txt', 'nextjs.txt', 'chromadb.txt']
    }
  };

  const fileContents = {
    'README.md': "Hi, I'm Joshitha Priya. Dual degree student at CIT & IIT Madras. I specialize in Full-Stack AI integration.",
    'kaziranga_webops.txt': "WebOps lead for Kaziranga House. Building scalable web architecture and managing deployments.",
    'ai_solutions.txt': "Focusing on NLP, LLM integration, and Retrieval-Augmented Generation (RAG) architectures.",
    'python.txt': "Advanced proficiency. Used for backend (FastAPI/Django) and AI scripting.",
    'react.txt': "Frontend library of choice. Building interactive, component-driven UIs.",
    'nextjs.txt': "Go-to framework for production-ready, server-side rendered web applications.",
    'chromadb.txt': "Vector database utilized for efficient RAG implementation."
  };

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmdLine = input.trim();
    const args = cmdLine.split(' ');
    const cmd = args[0].toLowerCase();

    let output = '';
    const currentFolder = fileSystem[currentDir];

    // Command Switcher
    switch (cmd) {
      case 'help':
        output = 'Available commands: \n- help\n- whoami\n- internship-status\n- ls [directory]\n- cd [directory]\n- cat [filename]\n- clear';
        break;
      case 'whoami':
        output = 'Joshitha Priya - IT & Data Science Student @ CIT x IIT Madras';
        break;
      case 'internship-status':
        output = 'Status: OPEN for Internships.';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'ls':

      const dirs = currentFolder.dirs.map(d => `<span class="text-[#B82E3D] font-bold">${d}/</span>`).join('  ');
        const files = currentFolder.files.map(f => `<span class="text-[#D1D1D1]">${f}</span>`).join('  ');
        output = [dirs, files].filter(Boolean).join('\n');
        break;
      case 'cd':
        const targetDir = args[1];
        if (!targetDir || targetDir === '~') {
          setCurrentDir('/home/joshitha');
        } else if (targetDir === '..') {
          if (currentDir !== '/home/joshitha') {
            const parts = currentDir.split('/');
            parts.pop();
            setCurrentDir(parts.join('/'));
          }
        } else if (currentFolder.dirs.includes(targetDir)) {
          setCurrentDir(`${currentDir}/${targetDir}`);
        } else {
          output = `cd: ${targetDir}: No such file or directory`;
        }
        break;
      case 'cat':
        const targetFile = args[1];
        if (!targetFile) {
          output = 'cat: missing file operand';
        } else if (currentFolder.files.includes(targetFile)) {
          output = fileContents[targetFile];
        } else {
          output = `cat: ${targetFile}: No such file or directory`;
        }
        break;
      default:
        output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: `joshitha@portfolio:${currentDir.replace('/home/joshitha', '~')}$ ${cmdLine}` },
      ...(output ? [{ type: 'output', text: output }] : [])
    ]);
    setInput('');
  };

  return (
    <section className="relative w-full min-h-screen bg-[#080808] overflow-hidden flex items-center py-20 font-display">
      
      {/* Background Texture - Very subtle grid using off-white */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#D1D1D1_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* ========================================= */}
        {/* LEFT: FLOATING ANIMATED TERMINAL          */}
        {/* ========================================= */}
        <div className="relative w-full max-h-[400px] max-w-[450px] md:w-1/2 flex justify-center group perspective-1000">
          
          {/* Animated Ambient Glow Behind Terminal (Deep Ruby to Crimson) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8B1A2B] to-[#B82E3D] rounded-xl blur-xl opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-500"></div>

          {/* The Terminal Container - Floating and scaling on hover */}
          <div 
            className="relative bg-[#14080A]/90 backdrop-blur-xl w-full aspect-[4/5] flex flex-col rounded-xl border border-[#B82E3D]/40 shadow-[0_0_30px_rgba(184,46,61,0.2)] overflow-hidden cursor-text transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Subtle CRT Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-30 z-50" />

            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#B82E3D]/10 shrink-0 bg-white/[0.01]">
              <div className="w-3 h-3 rounded-full bg-[#B82E3D]/90 hover:bg-[#B82E3D] transition-colors shadow-[0_0_8px_rgba(184,46,61,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/90 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-500/90 transition-colors" />
              <span className="text-[#ffffff]/70 text-xs font-mono ml-4 select-none opacity-100">joshitha@portfolio:~</span>
            </div>

            {/* Terminal History Output */}
            <div className="font-mono text-sm leading-relaxed overflow-y-auto flex-1 p-5 custom-scrollbar relative z-10">
              {history.map((line, i) => (
                <div key={i} className="mb-3 break-words animate-[fadeIn_0.3s_ease-out]">
                  {line.type === 'input' && <span className="text-[#FF4D5E] font-bold mr-2">➜</span>}
                  {line.type === 'system' && <span className="text-[#B82E3D] font-bold mr-2">#</span>}
                  <span 
                    className={line.type === 'input' ? 'text-white' : 'text-[#D1D1D1]'}
                    dangerouslySetInnerHTML={{ __html: line.text.replace(/\n/g, '<br/>') }} 
                  />
                </div>
              ))}
              
              {/* Active Input Line */}
              <form onSubmit={handleCommand} className="flex mt-2">
                <span className="text-[#cc2938] font-bold mr-2 whitespace-nowrap">joshitha@portfolio:{currentDir.replace('/home/joshitha', '~')}$</span>
                <input 
                  ref={inputRef}
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono focus:ring-0 p-0 m-0 w-full"
                  autoFocus
                  spellCheck="false"
                  autoComplete="off"
                />
              </form>
              <div ref={terminalEndRef} />
            </div>

            {/* Premium Subtle Branding inside terminal */}
            <div className="absolute bottom-4 right-5 text-[#ffffff]/60 font-bold text-[10px] uppercase tracking-widest select-none z-10">
              Logic &gt; Magic
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT: Typography & Content Layout        */}
        {/* ========================================= */}
        <div className="w-full md:w-1/2 flex flex-col relative z-10">
          
          {/* Main "WHO AM I?" Heading */}
          <div className="relative mb-8">
            <h2 className="text-[14vw] md:text-[90px] lg:text-[110px] font-black leading-none text-[#ffffff] uppercase tracking-tighter drop-shadow-[0_0_35px_rgba(184,46,61,0.4)]">
              WHO <br/> AM I ?
            </h2>
            {/* Decorative Star */}
            <Star className="absolute top-4 right-[20%] text-[#B82E3D] fill-[#B82E3D] w-10 h-10 rotate-12 drop-shadow-[0_0_15px_rgba(184,46,61,0.6)]" />
          </div>

          <div className="flex flex-col gap-8 max-w-[480px]">
            {/* Intro Block */}
            <div>
              <p className="text-[#D1D1D1] text-lg font-medium leading-relaxed">
                I’m <span className="text-[#B82E3D] font-bold">Joshitha Priya</span>, an IT & Data Science student pursuing dual degrees at CIT and IIT Madras.
              </p>
            </div>

            {/* Middle Distinct Block */}
            <div className="border-l-2 border-[#B82E3D] pl-6 py-2">
              <p className="text-[#D1D1D1]/70 text-sm leading-relaxed">
                <span className="font-bold text-[#B82E3D] text-base font-serif italic tracking-wide">My focus lies</span> in the intersection of intelligent data and seamless user experiences. I specialize in Full-Stack development, Natural Language Processing, and integrating LLMs into functional web architecture.
              </p>
            </div>

            {/* Bottom Statement */}
            <div>
              <p className="text-[#D1D1D1]/80 text-sm leading-relaxed">
                Currently, I'm handling WebOps for Kaziranga House and building scalable, AI-driven solutions from the ground up.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}