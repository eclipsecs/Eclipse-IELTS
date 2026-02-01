import React, { useState, useEffect } from 'react';
import { Theme } from '../../types';

interface RoadmapPageProps {
  theme: Theme;
  onToggleTheme: () => void;
  onGoHome: () => void;
}

interface Milestone {
  band: number;
  title: string;
  description: string;
  skills: string[];
  color: string;
  icon: React.ReactNode;
  achievements: string[];
}

// Cartoon SVG Icons
const CartoonSeedIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <path d="M25 60 L30 90 L70 90 L75 60 Z" fill="#8B4513" stroke="#5D3A1A" strokeWidth="3"/>
    <path d="M22 55 L78 55 L75 60 L25 60 Z" fill="#A0522D" stroke="#5D3A1A" strokeWidth="2"/>
    <ellipse cx="50" cy="58" rx="25" ry="6" fill="#3E2723"/>
    <path d="M50 58 Q45 45 35 35" fill="none" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="32" cy="32" rx="8" ry="5" fill="#66BB6A"/>
    <path d="M50 58 Q55 40 60 30" fill="none" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round"/>
    <ellipse cx="63" cy="27" rx="8" ry="6" fill="#66BB6A"/>
    <path d="M50 58 Q50 45 50 35" fill="none" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round"/>
    <ellipse cx="50" cy="32" rx="6" ry="8" fill="#81C784"/>
    <circle cx="40" cy="50" r="3" fill="#333"/>
    <circle cx="60" cy="50" r="3" fill="#333"/>
    <path d="M45 60 Q50 65 55 60" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="35" cy="55" r="4" fill="#FFAB91" opacity="0.6"/>
    <circle cx="65" cy="55" r="4" fill="#FFAB91" opacity="0.6"/>
  </svg>
);

const CartoonRocketIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <ellipse cx="50" cy="45" rx="18" ry="35" fill="#E0E0E0" stroke="#9E9E9E" strokeWidth="2"/>
    <path d="M32 20 Q50 5 68 20" fill="#F44336" stroke="#C62828" strokeWidth="2"/>
    <circle cx="50" cy="15" r="5" fill="#FFEB3B"/>
    <circle cx="50" cy="40" r="10" fill="#64B5F6" stroke="#1976D2" strokeWidth="2"/>
    <ellipse cx="47" cy="37" rx="3" ry="2" fill="white" opacity="0.7"/>
    <path d="M32 55 L20 75 L35 70 L35 55 Z" fill="#F44336" stroke="#C62828" strokeWidth="2"/>
    <path d="M68 55 L80 75 L65 70 L65 55 Z" fill="#F44336" stroke="#C62828" strokeWidth="2"/>
    <path d="M45 75 L50 85 L55 75 Z" fill="#FF9800" stroke="#E65100" strokeWidth="2"/>
    <path d="M45 80 Q50 95 55 80" fill="#FF9800"/>
    <path d="M47 82 Q50 90 53 82" fill="#FFEB3B"/>
    <circle cx="43" cy="50" r="2.5" fill="#333"/>
    <circle cx="57" cy="50" r="2.5" fill="#333"/>
    <path d="M46 58 Q50 62 54 58" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CartoonStarIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <polygon points="50,5 61,35 95,35 68,55 79,90 50,70 21,90 32,55 5,35 39,35" fill="#FFD700" stroke="#FFA000" strokeWidth="3"/>
    <circle cx="42" cy="45" r="4" fill="#333"/>
    <circle cx="58" cy="45" r="4" fill="#333"/>
    <circle cx="43" cy="44" r="1.5" fill="white"/>
    <circle cx="59" cy="44" r="1.5" fill="white"/>
    <path d="M45 55 Q50 60 55 55" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="35" cy="52" r="6" fill="#FF8A80" opacity="0.5"/>
    <circle cx="65" cy="52" r="6" fill="#FF8A80" opacity="0.5"/>
    <path d="M20 20 L22 15 L24 20 L29 22 L24 24 L22 29 L20 24 L15 22 Z" fill="#FFF59D"/>
    <path d="M80 25 L82 20 L84 25 L89 27 L84 29 L82 34 L80 29 L75 27 Z" fill="#FFF59D"/>
  </svg>
);

const CartoonDiamondIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <path d="M50 10 L85 35 L85 70 L50 95 L15 70 L15 35 Z" fill="#00BCD4" stroke="#0097A7" strokeWidth="3"/>
    <path d="M50 10 L50 50 L15 35" fill="#26C6DA" stroke="#00ACC1" strokeWidth="2"/>
    <path d="M50 10 L50 50 L85 35" fill="#4DD0E1" stroke="#00ACC1" strokeWidth="2"/>
    <path d="M50 50 L15 35 L15 70 L50 95" fill="#00BCD4" stroke="#0097A7" strokeWidth="2"/>
    <path d="M50 50 L85 35 L85 70 L50 95" fill="#26C6DA" stroke="#0097A7" strokeWidth="2"/>
    <circle cx="40" cy="50" r="3" fill="#333"/>
    <circle cx="60" cy="50" r="3" fill="#333"/>
    <path d="M45 60 Q50 65 55 60" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="25" cy="30" r="4" fill="white" opacity="0.8"/>
    <circle cx="75" cy="40" r="3" fill="white" opacity="0.6"/>
  </svg>
);

const CartoonTrophyIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <path d="M25 40 Q25 85 50 85 Q75 85 75 40 L70 35 L30 35 Z" fill="#FFD700" stroke="#FFA000" strokeWidth="3"/>
    <path d="M25 45 Q10 45 10 60 Q10 75 28 70" fill="none" stroke="#FFD700" strokeWidth="6" strokeLinecap="round"/>
    <path d="M75 45 Q90 45 90 60 Q90 75 72 70" fill="none" stroke="#FFD700" strokeWidth="6" strokeLinecap="round"/>
    <rect x="35" y="85" width="30" height="10" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    <rect x="30" y="92" width="40" height="8" fill="#6D4C41" stroke="#4E342E" strokeWidth="2"/>
    <polygon points="50,48 53,56 62,56 55,61 58,70 50,65 42,70 45,61 38,56 47,56" fill="#FFF59D"/>
    <circle cx="43" cy="55" r="2" fill="#333"/>
    <circle cx="57" cy="55" r="2" fill="#333"/>
    <path d="M47 62 Q50 65 53 62" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="15" cy="20" r="3" fill="#FF5722"/>
    <circle cx="85" cy="25" r="3" fill="#4CAF50"/>
    <circle cx="20" cy="35" r="2" fill="#2196F3"/>
    <circle cx="80" cy="15" r="2" fill="#E91E63"/>
  </svg>
);

const CartoonCrownIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <path d="M20 70 L20 40 L35 55 L50 25 L65 55 L80 40 L80 70 Z" fill="#FFD700" stroke="#FFA000" strokeWidth="3"/>
    <circle cx="50" cy="30" r="6" fill="#E91E63" stroke="#C2185B" strokeWidth="2"/>
    <circle cx="30" cy="50" r="4" fill="#2196F3" stroke="#1565C0" strokeWidth="2"/>
    <circle cx="70" cy="50" r="4" fill="#2196F3" stroke="#1565C0" strokeWidth="2"/>
    <path d="M18 68 Q50 90 82 68 L80 70 Q50 95 20 70 Z" fill="#9C27B0" stroke="#7B1FA2" strokeWidth="2"/>
    <circle cx="40" cy="60" r="3" fill="#333"/>
    <circle cx="60" cy="60" r="3" fill="#333"/>
    <path d="M45 70 Q50 75 55 70" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="65" r="5" fill="#F8BBD9" opacity="0.7"/>
    <circle cx="68" cy="65" r="5" fill="#F8BBD9" opacity="0.7"/>
    <path d="M10 30 L12 25 L14 30 L19 32 L14 34 L12 39 L10 34 L5 32 Z" fill="#FFF176"/>
    <path d="M85 35 L87 30 L89 35 L94 37 L89 39 L87 44 L85 39 L80 37 Z" fill="#FFF176"/>
  </svg>
);

const CartoonMedalIcon = () => (
  <svg viewBox="0 0 100 100" className="w-14 h-14">
    <path d="M50 5 L35 25 L40 25 L40 35 L60 35 L60 25 L65 25 Z" fill="#E91E63" stroke="#C2185B" strokeWidth="2"/>
    <circle cx="50" cy="55" r="30" fill="#FFD700" stroke="#FFA000" strokeWidth="3"/>
    <circle cx="50" cy="55" r="24" fill="#FFECB3" stroke="#FFE082" strokeWidth="2"/>
    <polygon points="50,40 54,50 64,50 56,57 59,67 50,61 41,67 44,57 36,50 46,50" fill="#FFD700"/>
    <circle cx="42" cy="52" r="2.5" fill="#333"/>
    <circle cx="58" cy="52" r="2.5" fill="#333"/>
    <path d="M45 60 Q50 64 55 60" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="35" cy="55" r="4" fill="#FFAB91" opacity="0.6"/>
    <circle cx="65" cy="55" r="4" fill="#FFAB91" opacity="0.6"/>
    <path d="M75 30 L77 25 L79 30 L84 32 L79 34 L77 39 L75 34 L70 32 Z" fill="#FFF59D"/>
  </svg>
);

// Pro Tips Cartoon Icons
const CartoonBookIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    {/* Book cover */}
    <rect x="20" y="15" width="60" height="70" rx="5" fill="#4CAF50" stroke="#2E7D32" strokeWidth="3"/>
    {/* Pages */}
    <rect x="25" y="20" width="50" height="60" rx="3" fill="white"/>
    {/* Lines of text */}
    <line x1="30" y1="30" x2="70" y2="30" stroke="#E0E0E0" strokeWidth="2"/>
    <line x1="30" y1="38" x2="70" y2="38" stroke="#E0E0E0" strokeWidth="2"/>
    <line x1="30" y1="46" x2="70" y2="46" stroke="#E0E0E0" strokeWidth="2"/>
    <line x1="30" y1="54" x2="70" y2="54" stroke="#E0E0E0" strokeWidth="2"/>
    <line x1="30" y1="62" x2="55" y2="62" stroke="#E0E0E0" strokeWidth="2"/>
    {/* Bookmark */}
    <rect x="65" y="15" width="10" height="20" fill="#F44336"/>
    {/* Face */}
    <circle cx="40" cy="50" r="3" fill="#333"/>
    <circle cx="60" cy="50" r="3" fill="#333"/>
    <path d="M45 58 Q50 63 55 58" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="35" cy="55" r="4" fill="#FFAB91" opacity="0.6"/>
    <circle cx="65" cy="55" r="4" fill="#FFAB91" opacity="0.6"/>
    {/* Glasses */}
    <circle cx="40" cy="50" r="6" fill="none" stroke="#333" strokeWidth="1.5"/>
    <circle cx="60" cy="50" r="6" fill="none" stroke="#333" strokeWidth="1.5"/>
    <line x1="46" y1="50" x2="54" y2="50" stroke="#333" strokeWidth="1.5"/>
  </svg>
);

const CartoonHeadphoneIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    {/* Headband */}
    <path d="M20 55 Q20 20 50 20 Q80 20 80 55" fill="none" stroke="#333" strokeWidth="6" strokeLinecap="round"/>
    {/* Ear cups */}
    <ellipse cx="20" cy="60" rx="12" ry="18" fill="#F44336" stroke="#C62828" strokeWidth="3"/>
    <ellipse cx="80" cy="60" rx="12" ry="18" fill="#F44336" stroke="#C62828" strokeWidth="3"/>
    {/* Inner parts */}
    <ellipse cx="20" cy="60" rx="6" ry="12" fill="#333"/>
    <ellipse cx="80" cy="60" rx="6" ry="12" fill="#333"/>
    {/* Sound waves */}
    <path d="M8 50 Q5 55 8 60" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 45 Q-2 55 3 65" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
    <path d="M92 50 Q95 55 92 60" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
    <path d="M97 45 Q102 55 97 65" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
    {/* Face */}
    <circle cx="40" cy="50" r="3" fill="#333"/>
    <circle cx="60" cy="50" r="3" fill="#333"/>
    <path d="M45 60 Q50 64 55 60" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="35" cy="55" r="4" fill="#FFAB91" opacity="0.6"/>
    <circle cx="65" cy="55" r="4" fill="#FFAB91" opacity="0.6"/>
    {/* Music note */}
    <path d="M45 35 L45 25 L55 22 L55 32" fill="none" stroke="#2196F3" strokeWidth="3"/>
    <circle cx="42" cy="35" r="4" fill="#2196F3"/>
    <circle cx="52" cy="32" r="4" fill="#2196F3"/>
  </svg>
);

const CartoonPenIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    {/* Pen body */}
    <path d="M60 20 L70 85 L30 85 L40 20 Z" fill="#2196F3" stroke="#1565C0" strokeWidth="3"/>
    {/* Pen tip */}
    <path d="M40 20 L50 5 L60 20 Z" fill="#FFC107" stroke="#FFA000" strokeWidth="2"/>
    {/* Pen cap */}
    <rect x="42" y="15" width="16" height="20" fill="#1976D2"/>
    {/* Clip */}
    <rect x="50" y="12" width="4" height="15" rx="2" fill="#9E9E9E"/>
    {/* Lines on pen */}
    <line x1="45" y1="35" x2="55" y2="35" stroke="#64B5F6" strokeWidth="2"/>
    <line x1="45" y1="45" x2="55" y2="45" stroke="#64B5F6" strokeWidth="2"/>
    <line x1="45" y1="55" x2="55" y2="55" stroke="#64B5F6" strokeWidth="2"/>
    {/* Writing effect */}
    <path d="M55 88 Q60 92 65 88" fill="none" stroke="#333" strokeWidth="2"/>
    <path d="M62 92 Q67 96 72 92" fill="none" stroke="#333" strokeWidth="2"/>
    {/* Sparkles */}
    <path d="M75 25 L77 20 L79 25 L84 27 L79 29 L77 34 L75 29 L70 27 Z" fill="#FFF59D"/>
    <circle cx="25" cy="35" r="2" fill="#4CAF50"/>
    <circle cx="80" cy="50" r="2" fill="#F44336"/>
  </svg>
);

const CartoonSpeechIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    {/* Speech bubble */}
    <ellipse cx="50" cy="50" rx="40" ry="35" fill="white" stroke="#333" strokeWidth="3"/>
    {/* Small bubble */}
    <circle cx="25" cy="80" r="10" fill="white" stroke="#333" strokeWidth="2"/>
    <line x1="20" y1="80" x2="15" y2="85" stroke="#333" strokeWidth="2"/>
    <line x1="30" y1="80" x2="35" y2="85" stroke="#333" strokeWidth="2"/>
    {/* Face */}
    <circle cx="40" cy="45" r="4" fill="#333"/>
    <circle cx="60" cy="45" r="4" fill="#333"/>
    <path d="M42 58 Q50 68 58 58" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="30" cy="52" r="5" fill="#FFAB91" opacity="0.6"/>
    <circle cx="70" cy="52" r="5" fill="#FFAB91" opacity="0.6"/>
    {/* Sound lines */}
    <path d="M75 35 Q85 45 75 55" fill="none" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round"/>
    <path d="M82 30 Q95 45 82 60" fill="none" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const CartoonTestIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    {/* Paper */}
    <rect x="25" y="15" width="50" height="70" rx="3" fill="white" stroke="#333" strokeWidth="3"/>
    {/* Header */}
    <rect x="25" y="15" width="50" height="15" fill="#2196F3"/>
    <circle cx="35" cy="22" r="3" fill="white"/>
    <circle cx="45" cy="22" r="3" fill="white"/>
    <circle cx="55" cy="22" r="3" fill="white"/>
    {/* Questions */}
    <circle cx="35" cy="40" r="5" fill="none" stroke="#333" strokeWidth="2"/>
    <text x="35" y="44" textAnchor="middle" fontSize="8" fontWeight="bold">1</text>
    <line x1="45" y1="40" x2="65" y2="40" stroke="#E0E0E0" strokeWidth="2"/>
    
    <circle cx="35" cy="55" r="5" fill="none" stroke="#333" strokeWidth="2"/>
    <text x="35" y="59" textAnchor="middle" fontSize="8" fontWeight="bold">2</text>
    <line x1="45" y1="55" x2="65" y2="55" stroke="#E0E0E0" strokeWidth="2"/>
    
    <circle cx="35" cy="70" r="5" fill="none" stroke="#333" strokeWidth="2"/>
    <text x="35" y="74" textAnchor="middle" fontSize="8" fontWeight="bold">3</text>
    <line x1="45" y1="70" x2="65" y2="70" stroke="#E0E0E0" strokeWidth="2"/>
    {/* Checkmark */}
    <path d="M70 75 L75 80 L85 65" fill="none" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Clock */}
    <circle cx="75" cy="30" r="10" fill="#FFC107" stroke="#FFA000" strokeWidth="2"/>
    <line x1="75" y1="30" x2="75" y2="24" stroke="#333" strokeWidth="2"/>
    <line x1="75" y1="30" x2="80" y2="30" stroke="#333" strokeWidth="2"/>
  </svg>
);

const CartoonTargetIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    {/* Target circles */}
    <circle cx="50" cy="50" r="35" fill="white" stroke="#F44336" strokeWidth="4"/>
    <circle cx="50" cy="50" r="25" fill="white" stroke="#F44336" strokeWidth="3"/>
    <circle cx="50" cy="50" r="15" fill="white" stroke="#F44336" strokeWidth="3"/>
    <circle cx="50" cy="50" r="7" fill="#F44336"/>
    {/* Arrow */}
    <path d="M20 50 L45 50 L45 40 L60 55 L45 70 L45 60 L20 60 Z" fill="#4CAF50" stroke="#2E7D32" strokeWidth="2"/>
    {/* Crosshairs */}
    <line x1="10" y1="50" x2="20" y2="50" stroke="#333" strokeWidth="2"/>
    <line x1="80" y1="50" x2="90" y2="50" stroke="#333" strokeWidth="2"/>
    <line x1="50" y1="10" x2="50" y2="20" stroke="#333" strokeWidth="2"/>
    <line x1="50" y1="80" x2="50" y2="90" stroke="#333" strokeWidth="2"/>
    {/* Face */}
    <circle cx="35" cy="35" r="2" fill="#333"/>
    <circle cx="45" cy="35" r="2" fill="#333"/>
    <path d="M38 42 Q40 44 42 42" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const milestones: Milestone[] = [
  {
    band: 6,
    title: "The Confident Starter",
    description: "You've got the basics down! Time to strengthen your foundation.",
    skills: ["Basic vocabulary", "Simple sentence structures", "Understanding main ideas", "Limited complex grammar"],
    color: "#F97316",
    icon: <CartoonSeedIcon />,
    achievements: [
      "📚 Can understand familiar topics",
      "✍️ Can write basic paragraphs",
      "🎧 Follows simple conversations",
      "💬 Can express opinions simply"
    ]
  },
  {
    band: 6.5,
    title: "The Growing Learner",
    description: "Making progress! More complex language starts to flow.",
    skills: ["Expanded vocabulary", "Some complex structures", "Better coherence", "Improved fluency"],
    color: "#EAB308",
    icon: <CartoonRocketIcon />,
    achievements: [
      "📖 Handles complex texts better",
      "🗣️ Speaks with more confidence",
      "📝 Paragraphs are more organized",
      "🎯 Catches more details in listening"
    ]
  },
  {
    band: 7,
    title: "The Skilled Performer",
    description: "Solid skills! You're approaching the advanced level.",
    skills: ["Good vocabulary range", "Complex grammar usage", "Clear organization", "Good fluency"],
    color: "#22C55E",
    icon: <CartoonStarIcon />,
    achievements: [
      "🎨 Uses varied vocabulary",
      "📊 Understands arguments well",
      "✍️ Writes well-structured essays",
      "🗣️ Discusses topics fluently"
    ]
  },
  {
    band: 7.5,
    title: "The Near-Expert",
    description: "Almost there! Fine-tuning for excellence.",
    skills: ["Advanced vocabulary", "Rare errors only", "Cohesive devices", "Natural flow"],
    color: "#14B8A6",
    icon: <CartoonDiamondIcon />,
    achievements: [
      "🔤 Minimal vocabulary mistakes",
      "📝 Complex writing with ease",
      "🎧 Excellent comprehension",
      "💬 Natural speaking style"
    ]
  },
  {
    band: 8,
    title: "The Advanced Achiever",
    description: "Outstanding skills! You're in the top tier.",
    skills: ["Wide vocabulary", "Rare grammatical errors", "Excellent cohesion", "High fluency"],
    color: "#3B82F6",
    icon: <CartoonTrophyIcon />,
    achievements: [
      "🌟 Understands subtle meanings",
      "✍️ Sophisticated writing style",
      "🎯 High accuracy in all skills",
      "💪 Complete confidence"
    ]
  },
  {
    band: 8.5,
    title: "The Elite Performer",
    description: "Exceptional! Just one step from perfection.",
    skills: ["Polished language", "Almost no errors", "Seamless cohesion", "Native-like fluency"],
    color: "#8B5CF6",
    icon: <CartoonCrownIcon />,
    achievements: [
      "🎯 Near-perfect understanding",
      "✨ Elegant expression",
      "💫 Smooth communication",
      "🏅 Professional level"
    ]
  },
  {
    band: 9,
    title: "The Band 9 Master",
    description: "PERFECTION! You've reached the pinnacle of English proficiency!",
    skills: ["Full command of language", "Complete accuracy", "Perfect cohesion", "Natural fluency"],
    color: "#EC4899",
    icon: <CartoonMedalIcon />,
    achievements: [
      "🌈 Complete understanding of all texts",
      "🎨 Sophisticated, flexible vocabulary",
      "✨ Error-free, complex writing",
      "💯 Native-like fluency",
      "🏆 FULL BAND 9 ACHIEVEMENT!"
    ]
  }
];

const RoadmapPage: React.FC<RoadmapPageProps> = ({ theme, onToggleTheme, onGoHome }) => {
  const isDarkMode = theme === 'dark';
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollTop / docHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tips = [
    { icon: <CartoonBookIcon />, title: 'Read Daily', desc: 'Read articles, news, and academic texts every day to improve comprehension.' },
    { icon: <CartoonHeadphoneIcon />, title: 'Listen Often', desc: 'Watch English videos, podcasts, and practice with IELTS listening materials.' },
    { icon: <CartoonPenIcon />, title: 'Write Regularly', desc: 'Practice writing essays and reports. Get feedback to improve.' },
    { icon: <CartoonSpeechIcon />, title: 'Speak Confidently', desc: 'Find speaking partners or practice speaking aloud daily.' },
    { icon: <CartoonTestIcon />, title: 'Take Mock Tests', desc: 'Regular practice tests help you build stamina and identify weak areas.' },
    { icon: <CartoonTargetIcon />, title: 'Focus on Weaknesses', desc: 'Spend extra time on skills that need the most improvement.' }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0F0F0F] text-white' : 'bg-[#E2E8F0] text-slate-900'}`} style={{ fontFamily: 'Fredoka, Balsamiq Sans, sans-serif' }}>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Cartoon Clouds */}
        <div className="absolute top-32 right-20 w-24 h-24 opacity-20 animate-bounce" style={{ animationDelay: '0s' }}>
          <svg viewBox="0 0 100 100">
            <path d="M20 60 Q20 40 40 40 Q45 20 70 25 Q85 20 90 45 Q100 50 100 65 Q100 80 80 80 L30 80 Q10 80 20 60" fill="white"/>
          </svg>
        </div>
        <div className="absolute top-48 left-1/4 w-20 h-20 opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <svg viewBox="0 0 100 100">
            <path d="M20 60 Q20 40 40 40 Q45 20 70 25 Q85 20 90 45 Q100 50 100 65 Q100 80 80 80 L30 80 Q10 80 20 60" fill="white"/>
          </svg>
        </div>
        <div className="absolute top-64 right-1/3 w-16 h-16 opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 100 100">
            <path d="M20 60 Q20 40 40 40 Q45 20 70 25 Q85 20 90 45 Q100 50 100 65 Q100 80 80 80 L30 80 Q10 80 20 60" fill="white"/>
          </svg>
        </div>
        
        {/* Floating Stars */}
        <div className="absolute top-40 left-1/2 w-8 h-8 opacity-30 animate-ping">
          <svg viewBox="0 0 100 100">
            <polygon points="50,5 61,35 95,35 68,55 79,90 50,70 21,90 32,55 5,35 39,35" fill="#FFD700"/>
          </svg>
        </div>
        <div className="absolute bottom-40 left-20 w-8 h-8 opacity-30 animate-ping" style={{ animationDelay: '0.5s' }}>
          <svg viewBox="0 0 100 100">
            <polygon points="50,5 61,35 95,35 68,55 79,90 50,70 21,90 32,55 5,35 39,35" fill="#FFD700"/>
          </svg>
        </div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 opacity-30 animate-ping" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 100 100">
            <polygon points="50,5 61,35 95,35 68,55 79,90 50,70 21,90 32,55 5,35 39,35" fill="#FFD700"/>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`h-20 flex items-center justify-between px-8 border-b sticky top-0 z-50 backdrop-blur-xl ${isDarkMode ? 'bg-[#0F0F0F]/80 border-white/5' : 'bg-white/80 border-slate-200 shadow-sm'}`}>
        <button 
          onClick={onGoHome}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] shadow-sm border border-[#333]' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white shadow-sm border border-slate-200'}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back</span>
        </button>
        <button onClick={onToggleTheme} className={`group relative p-3.5 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5' : 'bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg'}`}>
          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20' : 'bg-gradient-to-br from-blue-400/20 to-indigo-400/20'}`}></div>
          {isDarkMode ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 text-yellow-400 transition-transform duration-300 group-hover:rotate-12"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 text-indigo-500 transition-transform duration-300 group-hover:-rotate-12"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-12">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            <span className="inline-block animate-bounce"><svg width="60" height="60" viewBox="0 0 100 100" className="md:w-16 md:h-16"><ellipse cx="50" cy="55" rx="40" ry="30" fill="#4CAF50" stroke="#2E7D32" strokeWidth="3"/><path d="M25 45 Q30 35 40 40 Q45 30 55 35 Q65 25 75 35 Q85 30 80 50 Q85 55 80 60 Q75 65 70 55 Q65 70 55 60 Q45 70 35 60 Q25 65 20 55 Q15 50 20 45 Q15 40 25 45" fill="#81C784"/><ellipse cx="30" cy="50" rx="5" ry="3" fill="#8D6E63"/><ellipse cx="70" cy="55" rx="4" ry="2" fill="#8D6E63"/><circle cx="45" cy="45" r="3" fill="#2196F3"/><circle cx="55" cy="50" r="2.5" fill="#2196F3"/><path d="M45 65 L48 72 L42 72 Z" fill="#795548"/><path d="M55 60 L58 67 L52 67 Z" fill="#795548"/></svg></span>
            IELTS Journey
          </h1>
          <p className={`text-xl md:text-2xl font-medium ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
            From <span className="text-orange-500 font-bold">Band 6</span> to <span className="text-pink-500 font-bold">Band 9</span>
          </p>
          <p className={`mt-4 text-lg ${isDarkMode ? 'text-white/50' : 'text-slate-500'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Your epic adventure to English mastery!
            <span className="inline-block ml-2 animate-pulse">
              <svg width="32" height="32" viewBox="0 0 100 100">
                <rect x="10" y="55" width="80" height="35" rx="10" fill="#333"/>
                <rect x="15" y="60" width="70" height="25" rx="5" fill="#444"/>
                <circle cx="50" cy="72" r="15" fill="#666"/>
                <circle cx="50" cy="72" r="10" fill="#888"/>
                <circle cx="50" cy="72" r="5" fill="#AAA"/>
                <circle cx="30" cy="65" r="4" fill="#E91E63"/>
                <circle cx="70" cy="65" r="4" fill="#2196F3"/>
                <polygon points="50,40 45,50 55,50" fill="#666"/>
                <circle cx="50" cy="35" r="8" fill="#888"/>
                <circle cx="50" cy="35" r="4" fill="#666"/>
              </svg>
            </span>
          </p>
        </div>

        {/* Milestones Visualization */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Floating Cartoon Map Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Path line */}
            <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path
                d="M 0,50 Q 150,20 300,50 T 600,50 T 900,50"
                fill="none"
                stroke={isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'}
                strokeWidth="4"
                strokeDasharray="20,15"
              />
            </svg>
            
            {/* Cute cartoon trees - left side */}
            <div className="absolute bottom-8 left-8 animate-float">
              <svg width="40" height="50" viewBox="0 0 50 60">
                <rect x="22" y="35" width="6" height="25" fill="#8D6E63"/>
                <polygon points="25,5 5,40 45,40" fill="#4CAF50" stroke="#2E7D32" strokeWidth="2"/>
                <polygon points="25,15 8,42 42,42" fill="#66BB6A" stroke="#2E7D32" strokeWidth="1.5"/>
                <circle cx="18" cy="25" r="3" fill="#FFD700" opacity="0.6"/>
                <circle cx="32" cy="20" r="2.5" fill="#FFD700" opacity="0.5"/>
              </svg>
            </div>
            <div className="absolute bottom-12 left-32 animate-float" style={{ animationDelay: '0.3s' }}>
              <svg width="30" height="38" viewBox="0 0 50 60">
                <rect x="22" y="30" width="6" height="30" fill="#A1887F"/>
                <polygon points="25,8 8,35 42,35" fill="#81C784" stroke="#388E3C" strokeWidth="1.5"/>
                <circle cx="15" cy="20" r="2" fill="#FFD700" opacity="0.5"/>
              </svg>
            </div>
            
            {/* Cute cartoon trees - right side */}
            <div className="absolute bottom-10 right-12 animate-float" style={{ animationDelay: '0.7s' }}>
              <svg width="45" height="55" viewBox="0 0 50 60">
                <rect x="22" y="38" width="6" height="22" fill="#795548"/>
                <polygon points="25,2 2,38 48,38" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2"/>
                <polygon points="25,12 8,36 42,36" fill="#81C784" stroke="#2E7D32" strokeWidth="1.5"/>
                <circle cx="20" cy="22" r="3" fill="#FFD700" opacity="0.6"/>
              </svg>
            </div>
            <div className="absolute bottom-6 right-40 animate-float" style={{ animationDelay: '1.2s' }}>
              <svg width="35" height="42" viewBox="0 0 50 60">
                <rect x="23" y="32" width="5" height="28" fill="#8D6E63"/>
                <polygon points="25,5 10,35 40,35" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1.5"/>
              </svg>
            </div>
            
            {/* More trees scattered */}
            <div className="absolute top-10 left-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
              <svg width="32" height="40" viewBox="0 0 50 60">
                <rect x="23" y="28" width="5" height="32" fill="#A1887F"/>
                <polygon points="25,8 8,32 42,32" fill="#81C784" stroke="#388E3C" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="absolute top-6 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
              <svg width="28" height="35" viewBox="0 0 50 60">
                <rect x="22" y="25" width="6" height="35" fill="#795548"/>
                <polygon points="25,5 5,30 45,30" fill="#66BB6A" stroke="#2E7D32" strokeWidth="1.5"/>
                <circle cx="18" cy="18" r="2" fill="#FFD700" opacity="0.5"/>
              </svg>
            </div>
            
            {/* Cute clouds floating around - more clouds */}
            <div className="absolute top-4 left-20 animate-float">
              <svg width="55" height="28" viewBox="0 0 60 30">
                <path d="M10 22 Q10 8 24 8 Q30 2 40 5 Q50 2 54 10 Q58 12 58 22 Q58 28 50 28 L18 28 Q10 28 10 22" fill={isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(200,200,200,0.3)'}/>
              </svg>
            </div>
            <div className="absolute top-12 right-36 animate-float" style={{ animationDelay: '0.6s' }}>
              <svg width="48" height="24" viewBox="0 0 60 30">
                <path d="M10 22 Q10 8 24 8 Q30 2 40 5 Q50 2 54 10 Q58 12 58 22 Q58 28 50 28 L18 28 Q10 28 10 22" fill={isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(180,180,180,0.25)'}/>
              </svg>
            </div>
            <div className="absolute bottom-10 left-1/3 animate-float" style={{ animationDelay: '1.2s' }}>
              <svg width="52" height="26" viewBox="0 0 60 30">
                <path d="M10 22 Q10 8 24 8 Q30 2 40 5 Q50 2 54 10 Q58 12 58 22 Q58 28 50 28 L18 28 Q10 28 10 22" fill={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(160,160,160,0.2)'}/>
              </svg>
            </div>
            <div className="absolute top-8 left-1/2 animate-float" style={{ animationDelay: '1.8s' }}>
              <svg width="42" height="22" viewBox="0 0 60 30">
                <path d="M10 22 Q10 8 24 8 Q30 2 40 5 Q50 2 54 10 Q58 12 58 22 Q58 28 50 28 L18 28 Q10 28 10 22" fill={isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(140,140,140,0.18)'}/>
              </svg>
            </div>
            
            {/* Stars sparkle */}
            <div className="absolute top-1/4 right-16 animate-pulse">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill={isDarkMode ? 'rgba(250,204,21,0.4)' : 'rgba(250,204,21,0.5)'}/>
              </svg>
            </div>
            <div className="absolute bottom-1/3 right-20 animate-pulse" style={{ animationDelay: '0.8s' }}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill={isDarkMode ? 'rgba(250,204,21,0.35)' : 'rgba(250,204,21,0.45)'}/>
              </svg>
            </div>
            <div className="absolute top-16 left-12 animate-pulse" style={{ animationDelay: '1.5s' }}>
              <svg width="18" height="18" viewBox="0 0 24 24">
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill={isDarkMode ? 'rgba(250,204,21,0.3)' : 'rgba(250,204,21,0.4)'}/>
              </svg>
            </div>
            
            {/* Tiny dots along path */}
            <div className="absolute top-1/2 left-0 w-full flex justify-between items-center px-12 pointer-events-none" style={{ transform: 'translateY(-8px)' }}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-white/30' : 'bg-black/20'} animate-pulse`} style={{ animationDelay: `${i * 0.3}s` }}></div>
              ))}
            </div>
          </div>

          {/* Milestone Markers */}
          <div className="relative flex justify-between items-center flex-wrap gap-6 px-4 py-8">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.band}
                className={`relative flex flex-col items-center cursor-pointer transition-all duration-500 group ${
                  activeMilestone === index ? 'scale-105' : 'opacity-60 hover:opacity-100'
                }`}
                onMouseEnter={() => setActiveMilestone(index)}
                onClick={() => setActiveMilestone(index)}
              >
                {/* Marker Circle */}
                <div 
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                    activeMilestone === index 
                      ? 'ring-4 ring-offset-2 ring-offset-transparent' 
                      : 'hover:ring-2 hover:ring-offset-2 hover:ring-offset-transparent'
                  }`}
                  style={{ 
                    background: activeMilestone === index 
                      ? `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)` 
                      : isDarkMode ? '#2a2a2a' : '#fff',
                    boxShadow: activeMilestone === index 
                      ? `0 8px 32px ${milestone.color}44` 
                      : '0 4px 20px rgba(0,0,0,0.15)',
                    border: activeMilestone === index ? 'none' : `2px solid ${milestone.color}44`
                  }}
                >
                  <div className={`transform transition-transform duration-300 ${activeMilestone === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {milestone.icon}
                  </div>
                </div>
                
                {/* Band Label */}
                <div className={`mt-3 px-3 py-1 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                  activeMilestone === index 
                    ? 'text-white scale-110' 
                    : `${isDarkMode ? 'text-white/80' : 'text-slate-700'} group-hover:scale-105`
                }`}
                style={{ 
                  background: activeMilestone === index 
                    ? milestone.color 
                    : isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  fontFamily: 'Fredoka, sans-serif'
                }}>
                  Band {milestone.band}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Milestone Detail Card */}
        <div className="max-w-5xl mx-auto">
          <div 
            className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${
              activeMilestone === milestones.length - 1 ? 'ring-4 ring-pink-500 shadow-pink-500/30' : ''
            }`}
            style={{ 
              background: isDarkMode 
                ? `linear-gradient(135deg, ${milestones[activeMilestone].color}22, ${milestones[activeMilestone].color}11)` 
                : `linear-gradient(135deg, ${milestones[activeMilestone].color}15, ${milestones[activeMilestone].color}08)`,
              border: `1px solid ${milestones[activeMilestone].color}44`
            }}
          >
            {/* Card Header */}
            <div 
              className="p-6 flex items-center gap-6"
              style={{ 
                background: `linear-gradient(135deg, ${milestones[activeMilestone].color}, ${milestones[activeMilestone].color}dd)`
              }}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-white/20 rounded-2xl animate-bounce">
                {milestones[activeMilestone].icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-4 py-1 rounded-full bg-white/20 text-white font-black text-2xl">
                    Band {milestones[activeMilestone].band}
                  </span>
                  {activeMilestone === milestones.length - 1 && (
                    <span className="px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 font-bold text-sm animate-pulse">
                      🏆 BAND 9!
                    </span>
                  )}
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-wide" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {milestones[activeMilestone].title}
                </h2>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-8 grid md:grid-cols-2 gap-8">
              {/* Description & Skills */}
              <div>
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-white/80' : 'text-slate-700'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {milestones[activeMilestone].description}
                </p>
                <h3 className={`font-black text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  🎯 Key Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {milestones[activeMilestone].skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium"
                      style={{ 
                        background: `${milestones[activeMilestone].color}22`,
                        color: milestones[activeMilestone].color,
                        border: `1px solid ${milestones[activeMilestone].color}44`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
            <h3 className={`font-black text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
              🏅 Achievements
            </h3>
                <div className="space-y-3">
                  {milestones[activeMilestone].achievements.map((achievement, i) => (
                    <div 
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-102 cursor-default ${
                        isDarkMode ? 'bg-white/5' : 'bg-white'
                      }`}
                    >
                      <span className="text-xl">{achievement.split(' ')[0]}</span>
                      <span className={`font-medium ${isDarkMode ? 'text-white/80' : 'text-slate-700'}`}>
                        {achievement.substring(achievement.indexOf(' ') + 1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="p-6 flex justify-between items-center border-t border-white/10">
              <button 
                onClick={() => setActiveMilestone(Math.max(0, activeMilestone - 1))}
                disabled={activeMilestone === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                  activeMilestone === 0 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:scale-105'
                } ${isDarkMode ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-700'}`}
              >
                <span className="transform hover:-translate-x-1 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 100 100">
                    <circle cx="65" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="8"/>
                    <polygon points="45,25 20,50 45,75" fill="currentColor"/>
                    <circle cx="50" cy="50" r="5" fill="white"/>
                  </svg>
                </span> Previous Level
              </button>
              
              <div className="flex gap-2">
                {milestones.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === activeMilestone 
                        ? 'scale-125' 
                        : 'opacity-40'
                    }`}
                    style={{ 
                      background: i === activeMilestone 
                        ? milestones[activeMilestone].color 
                        : isDarkMode ? 'white' : 'gray'
                    }}
                  ></div>
                ))}
              </div>

              <button 
                onClick={() => setActiveMilestone(Math.min(milestones.length - 1, activeMilestone + 1))}
                disabled={activeMilestone === milestones.length - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                  activeMilestone === milestones.length - 1 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:scale-105'
                }`}
                style={{ 
                  background: activeMilestone === milestones.length - 1 
                    ? '' 
                    : milestones[activeMilestone].color,
                  color: activeMilestone === milestones.length - 1 
                    ? '' 
                    : 'white'
                }}
              >
                {activeMilestone === milestones.length - 1 ? (
                  '🎉 Complete!'
                ) : (
                  <>Next Level <span className="transform hover:translate-x-1 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 100 100">
                      <circle cx="35" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="8"/>
                      <polygon points="55,25 80,50 55,75" fill="currentColor"/>
                      <circle cx="50" cy="50" r="5" fill="white"/>
                    </svg>
                  </span></>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className={`text-3xl font-black text-center mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
            <span className="inline-block mr-3 animate-pulse">
              <svg width="40" height="40" viewBox="0 0 100 100">
                {/* Lamp shade */}
                <path d="M20 35 Q50 10 80 35 L75 55 Q50 45 25 55 Z" fill="#FFD700" stroke="#FFA000" strokeWidth="3"/>
                {/* Lamp base */}
                <rect x="45" y="55" width="10" height="25" fill="#795548" stroke="#5D4037" strokeWidth="2"/>
                <ellipse cx="50" cy="80" rx="18" ry="6" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
                {/* Light rays */}
                <g className="animate-pulse">
                  <line x1="50" y1="8" x2="50" y2="0" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="25" y1="15" x2="15" y2="8" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="75" y1="15" x2="85" y2="8" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="15" y1="30" x2="5" y2="28" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="85" y1="30" x2="95" y2="28" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
                </g>
                {/* Glow effect */}
                <ellipse cx="50" cy="45" rx="25" ry="15" fill="rgba(255,215,0,0.3)" className="animate-pulse"/>
                {/* Decorative button */}
                <circle cx="50" cy="62" r="3" fill="#FFD700"/>
              </svg>
            </span>
            Pro Tips for Your Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip, i) => (
              <div 
                key={i}
                className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-slate-200'
                }`}
              >
                <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                  {tip.icon}
                </div>
                <h3 className={`font-bold text-lg mb-2 text-center ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {tip.title}
                </h3>
                <p className={`text-sm text-center ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Footer */}
        <div className="text-center mt-16 pb-8">
          <div className={`inline-block px-8 py-4 rounded-2xl text-xl font-bold ${
            isDarkMode ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30' : 'bg-gradient-to-r from-orange-100 to-pink-100 border border-orange-300'
          }`}>
            <span className="text-4xl mr-3">🌟</span>
            {activeMilestone < milestones.length - 1 
              ? `Keep pushing! You've got ${milestones[milestones.length - 1].band - milestones[activeMilestone].band} bands to go!`
              : '🎉 Congratulations! You\'ve reached the top!'
            }
            <span className="text-4xl ml-3">🌟</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
