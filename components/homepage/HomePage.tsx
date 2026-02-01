
import React, { useState } from 'react';
import { Theme, TestCategory, TestMeta } from '../../types';
import { AVAILABLE_TESTS } from '../../data/tests';

interface HomePageProps {
  theme: Theme;
  onToggleTheme: () => void;
  onSelectTest: (test: TestMeta) => void;
  onGoRoadmap: () => void;
  onGoPassage1: () => void;
  onGoPassage2: () => void;
  onGoPassage3: () => void;
}

type HomeView = 'modalities' | 'reading-modalities' | 'reading' | 'listening' | 'full';

const HomePage: React.FC<HomePageProps> = ({ 
  theme, 
  onToggleTheme, 
  onSelectTest, 
  onGoRoadmap,
  onGoPassage1,
  onGoPassage2,
  onGoPassage3
}) => {
  const [currentView, setCurrentView] = useState<HomeView>('modalities');
  const isDarkMode = theme === 'dark';

  const handleBack = () => {
    setCurrentView('modalities');
  };

  const handleHomeReset = () => {
    setCurrentView('modalities');
  };

  const renderModalityCards = () => (
    <div className="flex flex-wrap justify-center gap-8 mt-6 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-6xl mx-auto">
      <button onClick={() => setCurrentView('reading-modalities')} className={`group relative p-12 rounded-[52px] border text-left transition-all duration-500 hover:-translate-y-3 w-80 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24] hover:shadow-2xl hover:shadow-[#F15A24]/10' : 'bg-white border-slate-200 hover:border-slate-400 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]'}`}>
        <div className={`w-24 h-24 rounded-[28px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isDarkMode ? 'bg-[#252525]' : 'bg-[#F8FAFC]'}`}>
          {/* Character Reading Book - Cute Cartoon */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Open book */}
            <path d="M8 30C8 27.7909 9.79086 26 12 26H28V52C28 54.2091 26.2091 56 24 56H12C9.79086 56 8 54.2091 8 52V30Z" fill={isDarkMode ? "#4a4a4a" : "#FFE5D9"}/>
            <path d="M56 30C56 27.7909 54.2091 26 52 26H36V52C36 54.2091 37.7909 56 40 56H52C54.2091 56 56 54.2091 56 52V30Z" fill={isDarkMode ? "#3a3a3a" : "#FFD93D"}/>
            {/* Book spine */}
            <path d="M32 26V56" stroke={isDarkMode ? "#F15A24" : "#FF6B6B"} strokeWidth="2"/>
            {/* Character body */}
            <ellipse cx="32" cy="18" rx="14" ry="12" fill={isDarkMode ? "#4a4a4a" : "#FF9F43"}/>
            {/* Character face */}
            <circle cx="27" cy="16" r="4" fill="white"/>
            <circle cx="37" cy="16" r="4" fill="white"/>
            <circle cx="27" cy="16" r="2" fill={isDarkMode ? "#F15A24" : "#2D3436"}/>
            <circle cx="37" cy="16" r="2" fill={isDarkMode ? "#F15A24" : "#2D3436"}/>
            {/* Eye sparkles */}
            <circle cx="28" cy="15" r="1" fill="white"/>
            <circle cx="38" cy="15" r="1" fill="white"/>
            {/* Cute smile */}
            <path d="M29 22C31 24 33 24 35 22" stroke={isDarkMode ? "#F15A24" : "#2D3436"} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            {/* Rosy cheeks */}
            <circle cx="23" cy="20" r="3" fill={isDarkMode ? "#F15A24" : "#FFB8B8"} opacity="0.6"/>
            <circle cx="41" cy="20" r="3" fill={isDarkMode ? "#F15A24" : "#FFB8B8"} opacity="0.6"/>
            {/* Hair tuft */}
            <path d="M32 6C30 8 30 10 32 12" stroke={isDarkMode ? "#555" : "#2D3436"} strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Reading glasses */}
            <circle cx="27" cy="16" r="5" stroke={isDarkMode ? "#666" : "#2D3436"} strokeWidth="1.5" fill="none"/>
            <circle cx="37" cy="16" r="5" stroke={isDarkMode ? "#666" : "#2D3436"} strokeWidth="1.5" fill="none"/>
            <path d="M32 16H32" stroke={isDarkMode ? "#666" : "#2D3436"} strokeWidth="1.5"/>
            {/* Text lines on book */}
            <line x1="13" y1="34" x2="22" y2="34" stroke={isDarkMode ? "#666" : "#CBD5E1"} strokeWidth="2" strokeLinecap="round"/>
            <line x1="13" y1="40" x2="24" y2="40" stroke={isDarkMode ? "#666" : "#CBD5E1"} strokeWidth="2" strokeLinecap="round"/>
            <line x1="13" y1="46" x2="20" y2="46" stroke={isDarkMode ? "#666" : "#CBD5E1"} strokeWidth="2" strokeLinecap="round"/>
            <line x1="40" y1="34" x2="49" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line x1="40" y1="40" x2="48" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line x1="40" y1="46" x2="46" y2="46" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            {/* Excitement marks */}
            <text x="16" y="20" fontSize="8" fill={isDarkMode ? "#F15A24" : "#FF6B6B"} fontWeight="bold">!</text>
            <text x="50" y="18" fontSize="8" fill={isDarkMode ? "#F15A24" : "#FF6B6B"} fontWeight="bold">!</text>
          </svg>
        </div>
        <h3 className={`text-3xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Reading</h3>
        <p className={`text-sm leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>Master scanning techniques and academic comprehension.</p>
        <div className={`inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Explore Library <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </button>

      <button onClick={() => setCurrentView('listening')} className={`group relative p-12 rounded-[52px] border text-left transition-all duration-500 hover:-translate-y-3 w-80 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24] hover:shadow-2xl hover:shadow-[#F15A24]/10' : 'bg-white border-slate-200 hover:border-slate-400 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]'}`}>
        <div className={`w-24 h-24 rounded-[28px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-[#F8FAFC]'}`}>
          {/* Character with Headphones - Cute Cartoon */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Character head */}
            <circle cx="32" cy="26" r="14" fill={isDarkMode ? "#4a4a4a" : "#FF9F43"}/>
            {/* Hair */}
            <path d="M20 22C20 18 24 14 32 14C40 14 44 18 44 22" stroke={isDarkMode ? "#555" : "#2D3436"} strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Headphone band - lifted up */}
            <path d="M14 26C14 14 20 6 32 6C44 6 50 14 50 26" stroke={isDarkMode ? "#F15A24" : "#5F27CD"} strokeWidth="5" strokeLinecap="round"/>
            {/* Left ear cup - lifted up */}
            <rect x="6" y="14" width="12" height="20" rx="6" fill={isDarkMode ? "#3a3a3a" : "#5F27CD"}/>
            <rect x="9" y="18" width="6" height="12" rx="3" fill={isDarkMode ? "#2a2a2a" : "#FFF"}/>
            {/* Right ear cup - lifted up */}
            <rect x="46" y="14" width="12" height="20" rx="6" fill={isDarkMode ? "#3a3a3a" : "#5F27CD"}/>
            <rect x="49" y="18" width="6" height="12" rx="3" fill={isDarkMode ? "#2a2a2a" : "#FFF"}/>
            {/* Character face - moved down */}
            <circle cx="27" cy="24" r="3.5" fill="white"/>
            <circle cx="37" cy="24" r="3.5" fill="white"/>
            <circle cx="27" cy="24" r="1.8" fill={isDarkMode ? "#F15A24" : "#2D3436"}/>
            <circle cx="37" cy="24" r="1.8" fill={isDarkMode ? "#F15A24" : "#2D3436"}/>
            {/* Eye sparkles */}
            <circle cx="28" cy="23" r="0.8" fill="white"/>
            <circle cx="38" cy="23" r="0.8" fill="white"/>
            {/* Happy closed eyes/eyebrows - enjoying music */}
            <path d="M24 20Q27 18 30 20" stroke={isDarkMode ? "#666" : "#2D3436"} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M34 20Q37 18 40 20" stroke={isDarkMode ? "#666" : "#2D3436"} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            {/* Big smile */}
            <path d="M27 31C30 34 34 34 37 31" stroke={isDarkMode ? "#F15A24" : "#2D3436"} strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Rosy cheeks */}
            <circle cx="22" cy="28" r="3" fill={isDarkMode ? "#F15A24" : "#FFB8B8"} opacity="0.6"/>
            <circle cx="42" cy="28" r="3" fill={isDarkMode ? "#F15A24" : "#FFB8B8"} opacity="0.6"/>
            {/* Musical notes floating */}
            <path d="M54 4V-2" stroke={isDarkMode ? "#F15A24" : "#FFD93D"} strokeWidth="2" strokeLinecap="round"/>
            <path d="M50 0C50 -3 54 -5 56 -2C58 1 54 2 52 0" fill={isDarkMode ? "#F15A24" : "#FFD93D"}/>
            <path d="M10 6V0" stroke={isDarkMode ? "#F15A24" : "#4ECDC4"} strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 2C6 -1 10 -3 12 0C14 3 10 4 8 2" fill={isDarkMode ? "#F15A24" : "#4ECDC4"}/>
            {/* Sound waves */}
            <path d="M0 20C-2 22 -3 25 -1 28" stroke={isDarkMode ? "#F15A24" : "#FF6B6B"} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            <path d="M64 20C66 22 67 25 65 28" stroke={isDarkMode ? "#F15A24" : "#FF6B6B"} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
          </svg>
        </div>
        <h3 className={`text-3xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Listening</h3>
        <p className={`text-sm leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>Sharpen focus with realistic academic scenarios.</p>
        <div className={`inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Listen Now <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </button>

      <button onClick={() => setCurrentView('full')} className={`group relative p-12 rounded-[52px] border text-left transition-all duration-500 hover:-translate-y-3 w-80 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24] hover:shadow-2xl hover:shadow-[#F15A24]/10' : 'bg-white border-slate-200 hover:border-slate-400 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]'}`}>
        <div className={`w-24 h-24 rounded-[28px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${isDarkMode ? 'bg-[#252525]' : 'bg-[#F8FAFC]'}`}>
          {/* Character Taking Exam - Cute Cartoon */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Exam paper */}
            <rect x="14" y="12" width="36" height="44" rx="3" fill={isDarkMode ? "#3a3a3a" : "#FFF"} stroke={isDarkMode ? "#4a4a4a" : "#E2E8F0"} strokeWidth="2"/>
            {/* Paper lines */}
            <line x1="20" y1="20" x2="44" y2="20" stroke={isDarkMode ? "#555" : "#CBD5E1"} strokeWidth="2" strokeLinecap="round"/>
            <line x1="20" y1="26" x2="44" y2="26" stroke={isDarkMode ? "#555" : "#CBD5E1"} strokeWidth="2" strokeLinecap="round"/>
            <line x1="20" y1="32" x2="38" y2="32" stroke={isDarkMode ? "#555" : "#CBD5E1"} strokeWidth="2" strokeLinecap="round"/>
            {/* Questions on paper */}
            <circle cx="22" cy="42" r="4" fill={isDarkMode ? "#555" : "#E2E8F0"}/>
            <text x="22" y="45" fontSize="6" textAnchor="middle" fill={isDarkMode ? "#F15A24" : "#1D1D4B"} fontWeight="bold">?</text>
            <circle cx="36" cy="42" r="4" fill={isDarkMode ? "#555" : "#E2E8F0"}/>
            <text x="36" y="45" fontSize="6" textAnchor="middle" fill={isDarkMode ? "#F15A24" : "#1D1D4B"} fontWeight="bold">?</text>
            <circle cx="42" cy="50" r="4" fill={isDarkMode ? "#555" : "#E2E8F0"}/>
            <text x="42" y="53" fontSize="6" textAnchor="middle" fill={isDarkMode ? "#F15A24" : "#1D1D4B"} fontWeight="bold">!</text>
            {/* Character peeking from behind paper */}
            <ellipse cx="32" cy="58" rx="16" ry="8" fill={isDarkMode ? "#4a4a4a" : "#FF9F43"}/>
            {/* Character face */}
            <circle cx="26" cy="56" r="3" fill="white"/>
            <circle cx="38" cy="56" r="3" fill="white"/>
            <circle cx="26" cy="56" r="1.5" fill={isDarkMode ? "#F15A24" : "#2D3436"}/>
            <circle cx="38" cy="56" r="1.5" fill={isDarkMode ? "#F15A24" : "#2D3436"}/>
            {/* Concentrated eyebrows */}
            <path d="M24 52L28 54" stroke={isDarkMode ? "#666" : "#2D3436"} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M40 52L36 54" stroke={isDarkMode ? "#666" : "#2D3436"} strokeWidth="1.5" strokeLinecap="round"/>
            {/* Nervous small smile */}
            <path d="M29 60C31 61 33 61 35 60" stroke={isDarkMode ? "#F15A24" : "#2D3436"} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            {/* Sweat drop */}
            <path d="M44 48C44 48 46 50 46 52C46 54 44 56 44 56C44 56 42 54 42 52C42 50 44 48 44 48" fill={isDarkMode ? "#F15A24" : "#4ECDC4"}/>
            {/* Pencil */}
            <rect x="50" y="28" width="4" height="24" rx="1" fill={isDarkMode ? "#4a4a4a" : "#FFD93D"} transform="rotate(30 52 40)"/>
            <rect x="52" y="22" width="2" height="8" rx="1" fill={isDarkMode ? "#555" : "#FFB8B8"} transform="rotate(30 52 40)"/>
            {/* Pencil tip */}
            <path d="M51 16L54 14L52 18Z" fill={isDarkMode ? "#F15A24" : "#FF6B6B"} transform="rotate(30 52 40)"/>
            {/* Clock */}
            <circle cx="10" cy="10" r="6" fill={isDarkMode ? "#3a3a3a" : "#FFF"} stroke={isDarkMode ? "#F15A24" : "#FF6B6B"} strokeWidth="1.5"/>
            <line x1="10" y1="10" x2="10" y2="7" stroke={isDarkMode ? "#F15A24" : "#FF6B6B"} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="10" y1="10" x2="12" y2="11" stroke={isDarkMode ? "#F15A24" : "#FF6B6B"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <h3 className={`text-3xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Full Mock</h3>
        <p className={`text-sm leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>Timed simulations to build exam-day stamina.</p>
        <div className={`inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Take Exam <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </button>
    </div>
  );

  const renderReadingPassageCards = () => {
    const p1Count = AVAILABLE_TESTS.filter(t => t.category === 'reading' && t.passageNumber === 1).length;
    const p2Count = AVAILABLE_TESTS.filter(t => t.category === 'reading' && t.passageNumber === 2).length;
    const p3Count = AVAILABLE_TESTS.filter(t => t.category === 'reading' && t.passageNumber === 3).length;

    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
            <h2 className="text-3xl font-black uppercase tracking-tight">Reading <span className="text-[#F15A24]">Library</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Passage 1 Card */}
          <button onClick={onGoPassage1} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <div className="mb-2">
              <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>PASSAGE</span>
              <h3 className={`text-4xl font-black mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>1</h3>
            </div>
            <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{p1Count} passages available</p>
            <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>View passages <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </button>

          {/* Passage 2 Card */}
          <button onClick={onGoPassage2} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <div className="mb-2">
              <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>PASSAGE</span>
              <h3 className={`text-4xl font-black mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>2</h3>
            </div>
            <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{p2Count} passages available</p>
            <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>View passages <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </button>

          {/* Passage 3 Card */}
          <button onClick={onGoPassage3} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <div className="mb-2">
              <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>PASSAGE</span>
              <h3 className={`text-4xl font-black mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>3</h3>
            </div>
            <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{p3Count} passages available</p>
            <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>View passages <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </button>
        </div>
      </div>
    );
  };

  const renderReadingTests = () => {
    const readingTests = AVAILABLE_TESTS.filter(t => t.category === 'reading');
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
            <h2 className="text-3xl font-black uppercase tracking-tight">Reading <span className="text-[#F15A24]">Tests</span></h2>
          </div>
          <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Select a test to begin your practice session</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {readingTests.map((test) => (
            <button key={test.id} onClick={() => onSelectTest(test)} className={`group relative p-6 rounded-[32px] border text-left transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${isDarkMode ? 'bg-[#252525] text-[#b0b0b0]' : 'bg-slate-100 text-slate-500'}`}>Passage {test.passageNumber}</span>
              </div>
              <h4 className={`text-lg font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{test.title}</h4>
              <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{test.duration} minutes</p>
              <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Start Test <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderListeningTests = () => {
    const listeningTests = AVAILABLE_TESTS.filter(t => t.category === 'listening');
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
            <h2 className="text-3xl font-black uppercase tracking-tight">Listening <span className="text-[#F15A24]">Tests</span></h2>
          </div>
          <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Select a listening test to begin</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {listeningTests.map((test) => (
            <button key={test.id} onClick={() => onSelectTest(test)} className={`group relative p-6 rounded-[32px] border text-left transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${isDarkMode ? 'bg-[#252525] text-[#b0b0b0]' : 'bg-slate-100 text-slate-500'}`}>Audio</span>
              </div>
              <h4 className={`text-lg font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{test.title}</h4>
              <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{test.duration} minutes</p>
              <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Play Audio <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderFullMockTests = () => {
    const fullMockTests = AVAILABLE_TESTS.filter(t => t.category === 'full');
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
            <h2 className="text-3xl font-black uppercase tracking-tight">Full <span className="text-[#F15A24]">Mock</span></h2>
          </div>
          <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Complete IELTS simulation tests</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {fullMockTests.map((test) => (
            <button key={test.id} onClick={() => onSelectTest(test)} className={`group relative p-6 rounded-[32px] border text-left transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${isDarkMode ? 'bg-[#252525] text-[#b0b0b0]' : 'bg-slate-100 text-slate-500'}`}>3 Parts</span>
              </div>
              <h4 className={`text-lg font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{test.title}</h4>
              <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>Reading, Listening & Writing</p>
              <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Begin Exam <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-[#F8FAFC] text-slate-900'}`}>
      <nav className={`h-20 flex items-center justify-between px-8 border-b sticky top-0 z-50 backdrop-blur-xl relative transition-all duration-500 ${isDarkMode ? 'bg-[#121212]/90 border-[#3a3a3a] shadow-xl' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
        <div className="flex items-center gap-4 z-10">
          <button 
            onClick={handleHomeReset}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24]' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white'} shadow-sm border ${isDarkMode ? 'border-[#333]' : 'border-slate-200'}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Home</span>
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none">
          <span className={`font-black text-lg tracking-[0.4em] uppercase transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-[#1D1D4B]'}`}>
            IELTS CDI
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onGoRoadmap} className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-[#b0b0b0] hover:bg-[#F15A24] hover:text-white' : 'bg-white text-slate-500 hover:bg-[#1D1D4B] hover:text-white'} shadow-sm border ${isDarkMode ? 'border-[#333]' : 'border-slate-200'}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <span>Roadmap</span>
          </button>
          <button onClick={onToggleTheme} className={`group relative p-3.5 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5' : 'bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg'}`}>
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20' : 'bg-gradient-to-br from-blue-400/20 to-indigo-400/20'}`}></div>
            {isDarkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 text-yellow-400 transition-transform duration-300 group-hover:rotate-12">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 text-indigo-500 transition-transform duration-300 group-hover:-rotate-12">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {currentView === 'modalities' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col items-center text-center mb-12">
              <span className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}>Choose Your Path</span>
              <h1 className={`text-5xl md:text-6xl font-black mb-6 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>What would you like <br/>to <span className="text-[#F15A24]">practice</span> today?</h1>
              <p className={`text-lg max-w-2xl leading-relaxed ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>Select a test modality below to begin your IELTS preparation journey</p>
            </div>
            {renderModalityCards()}
          </div>
        )}
        
        {currentView === 'reading-modalities' && renderReadingPassageCards()}
        {currentView === 'reading' && renderReadingTests()}
        {currentView === 'listening' && renderListeningTests()}
        {currentView === 'full' && renderFullMockTests()}
      </main>
    </div>
  );
};

export default HomePage;
