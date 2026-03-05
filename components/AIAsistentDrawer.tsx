
import React, { useState } from 'react';
import { translateToSql } from '../services/geminiService';

interface AIAsistentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  draftEmail?: string;
  isGeneratingEmail?: boolean;
}

const AIAsistentDrawer: React.FC<AIAsistentDrawerProps> = ({ isOpen, onClose, draftEmail, isGeneratingEmail }) => {
  const [query, setQuery] = useState('');
  const [sqlResult, setSqlResult] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!query) return;
    setIsTranslating(true);
    const result = await translateToSql(query);
    setSqlResult(result);
    setIsTranslating(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-[450px] bg-white shadow-[-20px_0px_50px_rgba(0,0,0,0.1)] z-50 border-l border-gray-100 flex flex-col transform transition-transform duration-500 animate-in slide-in-from-right">
      
      <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-900 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div>
            <h2 className="font-black text-gray-800 text-lg tracking-tight">Logistics IA Core</h2>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Motor Inteligente Logistics</p>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-300 hover:text-gray-900 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-10">
        {/* Asistente de Comunicación */}
        <section className="space-y-6">
           <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Redactor Maestro</span>
              <div className="flex-1 h-px bg-gray-50"></div>
           </div>
           
           <div className="flex flex-col gap-4">
              <div className="self-start max-w-[90%] bg-gray-50 p-6 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm relative overflow-hidden group">
                 {isGeneratingEmail ? (
                   <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                   </div>
                 ) : draftEmail ? (
                   <>
                     <div className="text-[9px] font-black text-purple-600 uppercase mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        Ajuste por ADN Logistics
                     </div>
                     <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">{draftEmail}</pre>
                     <button className="mt-6 w-full py-3 bg-white border border-gray-200 text-gray-600 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-gray-900 hover:text-white transition-all">
                        Copiar Respuesta Maestra
                     </button>
                   </>
                 ) : (
                   <p className="text-sm text-gray-400 italic">La IA está lista para redactar la respuesta óptima siguiendo los protocolos de educación.</p>
                 )}
              </div>
           </div>
        </section>

        {/* SQL Analytics */}
        <section className="space-y-6">
           <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Analista de Datos</span>
              <div className="flex-1 h-px bg-gray-50"></div>
           </div>

           <div className="relative">
              <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pregúntale a la IA sobre tus datos..."
                className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-sm font-bold text-gray-700 shadow-inner"
              />
              <button 
                onClick={handleTranslate}
                className="absolute right-2 top-2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:scale-105 transition-all shadow-lg shadow-blue-200"
              >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
           </div>

           {sqlResult && (
              <div className="bg-gray-900 rounded-[2rem] p-8 border border-gray-800 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4">
                    <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase rounded-lg border border-emerald-500/20">Data Validated</div>
                 </div>
                 <div className="text-[10px] font-mono text-blue-400 mb-4 opacity-50 uppercase tracking-widest">Logistics SQL Optimizer</div>
                 <code className="text-xs text-blue-100 block overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
                   {sqlResult.replace(/```sql|```/g, '')}
                 </code>
              </div>
           )}
        </section>
      </div>

      <div className="p-8 bg-gray-50/50 border-t border-gray-100 flex items-center gap-4">
         <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
            Gestión Inteligente de Activos de Información - Logistics IA.
         </p>
      </div>
    </div>
  );
};

export default AIAsistentDrawer;
