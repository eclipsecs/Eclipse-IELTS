import React, { useState, useEffect, useRef } from 'react';
import { TestState, Question } from '../../types';
import { GoogleGenAI, Modality } from '@google/genai';

interface ResultsViewProps {
  state: TestState;
  questions: Question[];
  onRestart: () => void;
  testTitle: string;
  onGoHome?: () => void;
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const ResultsView: React.FC<ResultsViewProps> = ({ state, questions, onRestart, testTitle, onGoHome }) => {
  const isDarkMode = state.theme === 'dark';
  const [isReading, setIsReading] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const correctCount = (questions || []).reduce((acc, q) => {
    return acc + (state.userAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);

  const scorePercentage = questions.length > 0 ? (correctCount / questions.length) * 100 : 0;
  const leftCol = (questions || []).slice(0, Math.ceil(questions.length / 2));
  const rightCol = (questions || []).slice(Math.ceil(questions.length / 2));

  const handleReadScore = async () => {
    if (isReading) return;
    setIsReading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const speechContent = `Your final score is ${correctCount} out of ${questions.length}.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: speechContent }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } },
        },
      });
      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const audioCtx = audioContextRef.current;
        const audioBuffer = await decodeAudioData(decode(base64Audio), audioCtx, 24000, 1);
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.onended = () => setIsReading(false);
        source.start();
      } else setIsReading(false);
    } catch (error) {
      console.error(error);
      setIsReading(false);
    }
  };

  return (
    <div className={`min-h-screen pb-6 sm:pb-10 transition-colors duration-300 ${isDarkMode ? 'bg-[#121212]' : 'bg-[#F4F4F4]'}`}>
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 pt-4 sm:pt-6">
        <button 
          onClick={onGoHome || onRestart}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl font-bold text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] shadow-sm border border-[#333]' : 'bg-white text-slate-700 hover:bg-[#1D1D4B] hover:text-white shadow-sm border border-slate-200'}`}
        >
          <svg width="14" height="14" sm:width="16" sm:height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back</span>
        </button>
      </div>
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 pt-2">
        <div className={`rounded-[30px] shadow-xl overflow-hidden ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white'}`}>
          <div className="bg-[#F15A24] text-white p-8 text-center">
            <h2 className="text-xs uppercase tracking-[0.4em] font-black mb-3">Score Report</h2>
            <div className="text-7xl font-black mb-4">{correctCount}<span className="text-2xl opacity-40">/</span>{questions.length}</div>
          </div>
          <div className="p-8">
            <h4 className={`text-xl font-black text-center mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{testTitle}</h4>
            
            {/* Answers Comparison Table */}
            <div className={`mb-10 rounded-2xl overflow-hidden ${isDarkMode ? 'bg-[#252525] border border-[#333]' : 'bg-white border border-slate-200 shadow-sm'}`}>
              {/* Table Header */}
              <div className={`grid grid-cols-12 gap-4 p-4 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'bg-[#1a1a1a] text-[#F15A24]' : 'bg-slate-100 text-slate-500'}`}>
                <div className="col-span-2 text-center">#</div>
                <div className="col-span-5">Your Answer</div>
                <div className="col-span-5 text-right">Correct Answer</div>
              </div>
              
              {/* Table Rows */}
              {(questions || []).map((q) => {
                const userAnswer = state.userAnswers[q.id];
                const isCorrect = userAnswer === q.correctAnswer;
                return (
                  <div key={q.id} className={`grid grid-cols-12 gap-4 p-4 items-center border-t transition-colors ${isDarkMode ? 'border-[#333] hover:bg-[#2a2a2a]' : 'border-slate-100 hover:bg-slate-50'}`}>
                    <div className="col-span-2 text-center font-bold text-sm">{q.id}</div>
                    <div className={`col-span-5 font-bold ${isCorrect ? (isDarkMode ? 'text-green-400' : 'text-green-600') : (isDarkMode ? 'text-red-400' : 'text-red-500')}`}>
                      {isCorrect ? <span className="flex items-center"><span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs mr-2 ${isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{isCorrect ? '✓' : '✗'}</span>{userAnswer || 'Not answered'}</span> : <span className="flex items-center"><span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs mr-2 bg-red-500/20 text-red-400`}>✗</span>{userAnswer || 'Not answered'}</span>}
                    </div>
                    <div className={`col-span-5 text-right font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                      {q.correctAnswer}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Answer Explanations Table */}
            <div className={`mb-10 rounded-2xl overflow-hidden ${isDarkMode ? 'bg-[#252525] border border-[#333]' : 'bg-white border border-slate-200 shadow-sm'}`}>
              {/* Table Header */}
              <div className={`grid grid-cols-12 gap-4 p-4 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'bg-[#1a1a1a] text-[#F15A24]' : 'bg-slate-100 text-slate-500'}`}>
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-11">Answer Details</div>
              </div>
              
              {/* Table Rows */}
              {(questions || []).map((q) => {
                const isCorrect = state.userAnswers[q.id] === q.correctAnswer;
                return (
                  <div key={q.id} className={`grid grid-cols-12 gap-4 p-4 items-start border-t transition-colors ${isDarkMode ? 'border-[#333] hover:bg-[#2a2a2a]' : 'border-slate-100 hover:bg-slate-50'}`}>
                    <div className="col-span-1 text-center font-bold text-sm pt-1">{q.id}</div>
                    <div className="col-span-11 space-y-3">
                      {/* Correct/Incorrect Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                      </div>
                      
                      {/* Question Text */}
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {q.text}
                      </p>
                      
                      {/* Answer Location */}
                      {q.answerLocation && (
                        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          <span className="font-semibold">Location:</span> {q.answerLocation}
                        </div>
                      )}
                      
                      {/* Synonyms */}
                      {q.synonyms && q.synonyms.length > 0 && (
                        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          <span className="font-semibold">Synonyms/Keywords:</span> {q.synonyms.join(', ')}
                        </div>
                      )}
                      
                      {/* Explanation */}
                      {q.explanation && (
                        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {q.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-center gap-4">
               <button onClick={onRestart} className={`px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all ${isDarkMode ? 'bg-[#F15A24] text-white hover:opacity-90' : 'bg-[#1D1D4B] text-white hover:bg-black'}`}>Try Again</button>
               <button onClick={handleReadScore} className={`px-10 py-4 rounded-full border font-black uppercase tracking-widest text-sm transition-all ${isDarkMode ? 'border-[#444] text-white hover:border-[#F15A24]' : 'border-gray-300 text-slate-700 hover:border-slate-400'}`}>Speak Score</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
