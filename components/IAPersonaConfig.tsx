
import React, { useState, useEffect } from 'react';
import { IAPersona, Source, Guideline } from '../types';
import { summarizeSources, chatWithIAEducation } from '../services/geminiService';

interface IAPersonaConfigProps {
  persona: IAPersona;
  onUpdate: (updated: IAPersona) => void;
}

const IAPersonaConfig: React.FC<IAPersonaConfigProps> = ({ persona, onUpdate }) => {
  const [selectedSourceId, setSelectedSourceId] = useState<string>(persona.sources[0]?.id || '');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summary, setSummary] = useState('');
  const [showAddSourceMenu, setShowAddSourceMenu] = useState(false);

  const selectedSource = persona.sources.find(s => s.id === selectedSourceId);

  const addSource = (origin: 'document' | 'text') => {
    const newSource: Source = {
      id: `src_${Date.now()}`,
      title: origin === 'document' ? 'Nuevo Documento Logistics' : 'Nota de Texto Manual',
      type: 'knowledge',
      origin: origin,
      content: origin === 'document' ? '[Contenido extraído del archivo oficial...]' : 'Escribe el conocimiento aquí...',
      updatedAt: new Date().toLocaleDateString(),
      guidelines: []
    };
    onUpdate({ ...persona, sources: [...persona.sources, newSource] });
    setSelectedSourceId(newSource.id);
    setShowAddSourceMenu(false);
  };

  const handleUpdateSourceContent = (val: string) => {
    if (!selectedSource) return;
    const updated = persona.sources.map(s => s.id === selectedSource.id ? { ...s, content: val } : s);
    onUpdate({ ...persona, sources: updated });
  };

  const addGuideline = (type: 'do' | 'dont') => {
    if (!selectedSource) return;
    const newG: Guideline = {
      id: `g_${Date.now()}`,
      type,
      situation: 'Cuando el cliente pregunte...',
      response: 'La IA debe responder...'
    };
    const updated = persona.sources.map(s => s.id === selectedSource.id ? { ...s, guidelines: [...s.guidelines, newG] } : s);
    onUpdate({ ...persona, sources: updated });
  };

  const updateGuideline = (gid: string, field: keyof Guideline, val: string) => {
    if (!selectedSource) return;
    const updatedG = selectedSource.guidelines.map(g => g.id === gid ? { ...g, [field]: val } : g);
    const updatedS = persona.sources.map(s => s.id === selectedSource.id ? { ...s, guidelines: updatedG } : s);
    onUpdate({ ...persona, sources: updatedS });
  };

  const removeGuideline = (gid: string) => {
    if (!selectedSource) return;
    const updatedG = selectedSource.guidelines.filter(g => g.id !== gid);
    const updatedS = persona.sources.map(s => s.id === selectedSource.id ? { ...s, guidelines: updatedG } : s);
    onUpdate({ ...persona, sources: updatedS });
  };

  return (
    <div className="flex h-[800px] bg-white rounded-[3.5rem] border border-gray-100 shadow-2xl overflow-hidden animate-in fade-in duration-1000">
      
      {/* PANEL IZQUIERDO: FUENTES */}
      <div className="w-1/4 bg-gray-50/50 border-r border-gray-100 flex flex-col">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center relative">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Educación IA</h3>
          <button 
            onClick={() => setShowAddSourceMenu(!showAddSourceMenu)}
            className="w-10 h-10 bg-[#0055A4] text-white rounded-xl flex items-center justify-center hover:bg-blue-800 transition-all shadow-xl shadow-blue-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </button>

          {showAddSourceMenu && (
            <div className="absolute right-8 top-20 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-in zoom-in-95">
              <button onClick={() => addSource('document')} className="w-full text-left p-3 hover:bg-gray-50 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                Cargar Documento
              </button>
              <button onClick={() => addSource('text')} className="w-full text-left p-3 hover:bg-gray-50 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                Texto Escrito
              </button>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {persona.sources.map(src => (
            <button 
              key={src.id}
              onClick={() => setSelectedSourceId(src.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all border ${
                selectedSourceId === src.id 
                ? 'bg-white border-blue-200 shadow-xl shadow-blue-50' 
                : 'border-transparent hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-1">
                <div className={`w-2 h-2 rounded-full ${src.origin === 'document' ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                <span className="text-xs font-black text-gray-800 line-clamp-1">{src.title}</span>
              </div>
              <div className="flex justify-between items-center">
                 <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest">{src.origin}</p>
                 <span className="px-2 py-0.5 bg-gray-50 rounded text-[7px] font-black text-gray-400">{src.guidelines.length} REGLAS</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* PANEL CENTRAL: VISOR Editorial */}
      <div className="flex-1 flex flex-col bg-white">
        {selectedSource ? (
          <>
            <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-white sticky top-0 z-10">
               <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`px-2 py-0.5 rounded-[4px] text-[7px] font-black uppercase tracking-widest ${selectedSource.origin === 'document' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                      {selectedSource.origin}
                    </span>
                    <h2 className="text-lg font-black text-gray-900 tracking-tight">{selectedSource.title}</h2>
                  </div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Actualizado: {selectedSource.updatedAt}</p>
               </div>
               <div className="flex gap-2">
                  <button 
                    onClick={() => addGuideline('do')}
                    className="px-4 py-2 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-widest rounded-xl border border-emerald-100 hover:bg-emerald-100 shadow-sm"
                  >
                    + Qué decir
                  </button>
                  <button 
                    onClick={() => addGuideline('dont')}
                    className="px-4 py-2 bg-red-50 text-red-600 text-[9px] font-black uppercase tracking-widest rounded-xl border border-red-100 hover:bg-red-100 shadow-sm"
                  >
                    + Qué no decir
                  </button>
               </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 bg-gray-50/30">
              <div className="max-w-3xl mx-auto space-y-10">
                 {/* VISOR DE TEXTO */}
                 <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-4">Contenido Maestro</label>
                    <textarea 
                      value={selectedSource.content}
                      onChange={(e) => handleUpdateSourceContent(e.target.value)}
                      className="w-full min-h-[300px] bg-transparent border-none outline-none text-sm font-medium leading-[1.8] text-gray-700 resize-none"
                      placeholder="Pega o escribe aquí la base de conocimiento..."
                    />
                 </div>
                 
                 {/* TABLERO DE DIRECTRICES DINÁMICO */}
                 <div className="space-y-6 pb-20">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Tablero de Reglas: {selectedSource.title}</h4>
                    <div className="grid grid-cols-1 gap-4">
                       {selectedSource.guidelines.length === 0 && (
                         <div className="p-10 text-center border-2 border-dashed border-gray-100 rounded-[2rem]">
                            <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Crea la primera directriz para esta fuente</p>
                         </div>
                       )}
                       {selectedSource.guidelines.map(g => (
                         <div key={g.id} className={`p-6 bg-white rounded-[2rem] border shadow-xl relative group animate-in slide-in-from-right-4 ${g.type === 'do' ? 'border-emerald-100' : 'border-red-100'}`}>
                            <button 
                              onClick={() => removeGuideline(g.id)}
                              className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                            
                            <div className="flex items-center gap-2 mb-4">
                               <span className={`px-2 py-0.5 rounded-[4px] text-[7px] font-black uppercase tracking-widest ${g.type === 'do' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                 {g.type === 'do' ? 'RECOMENDACIÓN' : 'PROHIBICIÓN'}
                               </span>
                            </div>

                            <div className="space-y-3">
                               <input 
                                value={g.situation}
                                onChange={(e) => updateGuideline(g.id, 'situation', e.target.value)}
                                className="w-full font-black text-sm text-gray-800 bg-transparent outline-none border-b border-transparent focus:border-gray-100"
                                placeholder="Escenario (Ej: Pregunta sobre costos de envío)..."
                               />
                               <textarea 
                                value={g.response}
                                onChange={(e) => updateGuideline(g.id, 'response', e.target.value)}
                                className="w-full text-xs text-gray-500 font-medium bg-gray-50/50 rounded-xl p-4 outline-none resize-none leading-relaxed"
                                placeholder="La IA debe responder indicando que..."
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="p-8 bg-white border-t border-gray-100">
               <button 
                 onClick={() => setIsSummarizing(true)}
                 className="w-full py-4 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-3"
               >
                 {isSummarizing ? 'Sincronizando Cerebro...' : 'Actualizar ADN Logistics IA'}
               </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-300 p-20 text-center bg-white">
             <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
             </div>
             <p className="text-sm font-black uppercase tracking-[0.2em] opacity-40">Selecciona una fuente en el panel izquierdo para comenzar la educación</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IAPersonaConfig;
