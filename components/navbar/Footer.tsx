
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
    <footer className={`border-t h-16 flex items-center px-8 overflow-x-auto gap-10 transition-colors ${isDarkMode ? 'bg-[#1a1a1a] border-gray-800 shadow-[0_-4px_24px_rgba(0,0,0,0.4)]' : 'bg-white border-gray-300 shadow-[0_-4px_24px_rgba(0,0,0,0.05)]'}`}>
      {questions.length > 0 && (
        groupKeys.map((groupName) => {
          const groupQs = groupedQuestions[groupName];
          let displayLabel = groupName;
          if (groupName.toUpperCase().startsWith('PART ')) {
             const partNum = groupName.toUpperCase().replace('PART ', '');
             displayLabel = `Part ${partNum} - ${groupQs.length} questions`;
          }
          return (
            <div key={groupName} className="flex items-center gap-4 shrink-0">
              <span className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-40 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {displayLabel}
              </span>
              <div className="flex gap-1.5">
                {groupQs.map((q) => {
                  const isAnswered = !!userAnswers[q.id];
                  return (
                    <div
                      key={q.id}
                      className={`min-w-[32px] h-8 flex items-center justify-center text-[10px] font-black rounded-lg cursor-pointer transition-all border
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
