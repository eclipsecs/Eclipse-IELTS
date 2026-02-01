import React from 'react';
import { Theme } from '../types';
import { WRITING_PROMPTS } from './data/prompts';

interface WritingInterfaceProps {
  testId: string;
  imageUrl?: string;
  userAnswers: Record<number, string | string[]>;
  onAnswerChange: (id: number, val: string) => void;
  theme: Theme;
}

const WritingInterface: React.FC<WritingInterfaceProps> = ({
  testId,
  imageUrl: activeTestImageUrl,
  userAnswers,
  onAnswerChange,
  theme,
}) => {
  const isDarkMode = theme === 'dark';
  const promptData = WRITING_PROMPTS[testId];
  const response = (userAnswers[0] as string) || ""; 
  
  // Use either the URL passed from props or the one stored in prompt data
  const finalImageUrl = activeTestImageUrl || promptData?.imageUrl;
  
  const wordCount = response.trim() ? response.trim().split(/\s+/).length : 0;
  const isTask1 = testId.includes('t1');
  const wordLimit = isTask1 ? 150 : 250;
  const progressPercent = Math.min(100, (wordCount / wordLimit) * 100);

  if (!promptData) return <div className="p-10 text-center">Prompt not found for ID: {testId}</div>;

  return (
    <div className={`flex h-full w-full divide-x transition-colors ${isDarkMode ? 'divide-gray-800' : 'divide-gray-300'}`}>
      <div className={`w-1/2 overflow-y-auto leading-relaxed transition-colors ${isDarkMode ? 'bg-[#121212] text-gray-200' : 'bg-white text-black'}`}>
        <div className="flex flex-col">
          <div className="px-10 pt-8 pb-4 flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-500'}`}>
              Writing Task {isTask1 ? '1' : '2'}
            </span>
          </div>

          <div className={`mx-10 mb-8 p-8 rounded-[32px] border transition-colors ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-[#F8FAFC] border-slate-200'}`}>
            <p className={`text-[15px] leading-relaxed font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              {promptData.prompt}
            </p>
            <p className={`text-[15px] leading-relaxed font-medium italic opacity-80 ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
              {promptData.instructions}
            </p>
          </div>
          
          <div className={`group relative w-full border-y transition-all ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-slate-100'}`}>
            {finalImageUrl ? (
              <div className="w-full flex justify-center bg-white p-6">
                <img src={finalImageUrl} alt="Stimulus" className="w-full h-auto block object-contain max-h-[800px]" />
              </div>
            ) : (
              <div className="p-20 flex flex-col items-center justify-center min-h-[400px] text-center">
                 <p className="font-medium text-slate-400 text-sm">Visual stimulus unavailable.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`w-1/2 flex flex-col transition-colors ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#F0F2F5]'}`}>
        <div className="p-8 flex items-center justify-between">
           <div className="flex flex-col">
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Draft Response</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">Auto-Saving enabled</span>
           </div>
           <div className="flex flex-col items-end">
              <span className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Words: {wordCount} / {wordLimit}</span>
              <div className={`w-40 h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-white/5' : 'bg-slate-200'}`}>
                 <div className={`h-full transition-all duration-500 ${wordCount >= wordLimit ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${progressPercent}%` }}></div>
              </div>
           </div>
        </div>
        <div className="flex-1 px-8 pb-8 flex flex-col">
          <textarea
            value={response}
            onChange={(e) => onAnswerChange(0, e.target.value)}
            placeholder="Type your response here..."
            className={`flex-1 w-full p-10 rounded-[48px] border-2 shadow-sm resize-none outline-none transition-all text-[16px] leading-[1.7] ${
              isDarkMode ? 'bg-[#121212] border-white/5 text-white focus:border-blue-500' : 'bg-white border-slate-100 text-slate-900 focus:border-blue-800'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default WritingInterface;