
import React from 'react';
import { Question, Theme } from '../../types';

interface FooterProps {
  questions: Question[];
  userAnswers: Record<number, string | string[]>;
  theme: Theme;
}

const Footer: React.FC<FooterProps> = ({ questions, userAnswers, theme }) => {
  const isDarkMode = theme === 'dark';

  const groupedQuestions = questions.reduce((acc, q) => {
    const groupName = q.group || 'Questions';
    if (!acc[groupName]) acc[groupName] = [];
    acc[groupName].push(q);
    return acc;
  }, {} as Record<string, Question[]>);

  const groupKeys = Object.keys(groupedQuestions);

  return (
    <footer className={`border-t h-auto min-h-16 flex flex-col sm:flex-row items-start sm:items-center px-3 sm:px-6 md:px-8 py-3 sm:py-0 overflow-x-auto gap-4 sm:gap-6 md:gap-10 transition-colors ${isDarkMode ? 'bg-[#1a1a1a] border-gray-800 shadow-[0_-4px_24px_rgba(0,0,0,0.4)]' : 'bg-white border-gray-300 shadow-[0_-4px_24px_rgba(0,0,0,0.05)]'}`}>
      {questions.length > 0 && (
        groupKeys.map((groupName) => {
          const groupQs = groupedQuestions[groupName];
          let displayLabel = groupName;
          if (groupName.toUpperCase().startsWith('PART ')) {
             const partNum = groupName.toUpperCase().replace('PART ', '');
             displayLabel = `Part ${partNum}`;
          }
          return (
            <div key={groupName} className="flex items-start sm:items-center gap-3 sm:gap-4 shrink-0">
              <span className={`text-[10px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest whitespace-nowrap opacity-40 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {displayLabel}
              </span>
              <div className="flex gap-1">
                {groupQs.map((q) => {
                  const isAnswered = !!userAnswers[q.id];
                  return (
                    <div
                      key={q.id}
                      className={`min-w-[28px] h-7 sm:min-w-[32px] sm:h-8 flex items-center justify-center text-[10px] font-black rounded-lg cursor-pointer transition-all border
                        ${isAnswered ? 'bg-[#1D1D4B] text-white border-[#1D1D4B]' : isDarkMode ? 'bg-[#2d2d2d] text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-slate-900 shadow-sm'}
                      `}
                      onClick={() => {
                        const el = document.getElementById(`q-${q.id}`);
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {q.id}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </footer>
  );
};

export default Footer;
