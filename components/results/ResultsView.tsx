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
    <div className={`min-h-screen pb-10 transition-colors duration-300 ${isDarkMode ? 'bg-[#121212]' : 'bg-[#F4F4F4]'}`}>
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <button 
          onClick={onGoHome || onRestart}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] shadow-sm border border-[#333]' : 'bg-white text-slate-700 hover:bg-[#1D1D4B] hover:text-white shadow-sm border border-slate-200'}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back</span>
        </button>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 pt-2">
        <div className={`rounded-[30px] shadow-xl overflow-hidden ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white'}`}>
          <div className="bg-[#1D1D4B] text-white p-8 text-center">
            <h2 className="text-xs uppercase tracking-[0.4em] font-black mb-3">Score Report</h2>
            <div className="text-7xl font-black mb-4">{correctCount}<span className="text-2xl opacity-40">/</span>{questions.length}</div>
          </div>
          <div className="p-8">
            <h4 className="text-xl font-black text-center mb-8">{testTitle}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 border rounded-2xl p-4">
              <div>{leftCol.map(q => <div key={q.id} className="p-2 border-b flex justify-between"><span>{q.id}</span><b>{q.correctAnswer}</b></div>)}</div>
              <div>{rightCol.map(q => <div key={q.id} className="p-2 border-b flex justify-between"><span>{q.id}</span><b>{q.correctAnswer}</b></div>)}</div>
            </div>
            <div className="flex justify-center gap-4">
               <button onClick={onRestart} className="px-10 py-4 rounded-full bg-[#1D1D4B] text-white font-black uppercase tracking-widest text-sm">Try Again</button>
               <button onClick={handleReadScore} className="px-10 py-4 rounded-full border border-gray-300 font-black uppercase tracking-widest text-sm">Speak Score</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
