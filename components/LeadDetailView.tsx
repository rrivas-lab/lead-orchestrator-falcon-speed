
import React from 'react';
import { Lead } from '../types';
import { COLORS } from '../constants';
import CompanyLogo from './CompanyLogo';

interface LeadDetailViewProps {
  lead: Lead;
  onClose: () => void;
  onSync: (lead: Lead) => void;
}

const LeadDetailView: React.FC<LeadDetailViewProps> = ({ lead, onClose, onSync }) => {
  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-xl z-[70] flex justify-end">
      <div className="w-full max-w-3xl bg-[#f8fafc] h-full shadow-[-20px_0_60px_rgba(0,0,0,0.1)] animate-in slide-in-from-right duration-500 overflow-hidden flex flex-col">
        
        {/* HEADER LIMPIO */}
        <div className="p-10 bg-white border-b border-gray-100 flex justify-between items-center relative overflow-hidden">
          <div className="flex items-center gap-6 relative z-10">
            <div className={`w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl ${lead.status === 'synced' ? 'bg-[#714B67]' : 'bg-[#0055A4]'}`}>
               <span className="text-2xl font-black italic">{lead.name.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">{lead.name}</h2>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-[11px] font-mono font-bold text-[#0055A4] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">{lead.rif}</span>
                <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${lead.status === 'synced' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                  {lead.stage}
                </span>
              </div>
            </div>
          </div>
          
          <button onClick={onClose} className="w-12 h-12 rounded-2xl hover:bg-gray-50 flex items-center justify-center text-gray-300 transition-all hover:text-gray-900">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-12">
          
          {/* SECCIÓN 1: INTELIGENCIA IA */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-1 text-[#0055A4] bg-[#0055A4] rounded-full"></span>
              <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">Métricas de Potencial IA</h3>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl flex flex-col items-center justify-center text-center">
                <div className="text-[10px] font-black text-gray-300 uppercase mb-2">Lead Score</div>
                <div className="text-4xl font-black italic text-[#0055A4]">{lead.ai_analysis.score}%</div>
              </div>
              <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl flex flex-col items-center justify-center text-center">
                <div className="text-[10px] font-black text-gray-300 uppercase mb-2">Sentimiento</div>
                <div className="text-sm font-black text-gray-800 uppercase tracking-tight">{lead.ai_analysis.sentiment}</div>
              </div>
              <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl flex flex-col items-center justify-center text-center">
                <div className="text-[10px] font-black text-gray-300 uppercase mb-2">Segmento</div>
                <div className="text-xs font-black text-emerald-600 uppercase tracking-widest">{lead.ai_analysis.segmentation}</div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 2: CONVERSACIÓN */}
          <section className="space-y-6">
             <div className="flex items-center gap-3">
              <span className="w-10 h-1 text-[#0055A4] bg-[#0055A4] rounded-full"></span>
              <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">Registro Histórico</h3>
            </div>

            <div className="space-y-6">
              {lead.conversation?.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-gray-200 text-gray-500' : 'bg-[#0055A4] text-white'}`}>
                    <span className="text-[10px] font-black">{msg.role === 'user' ? 'C' : 'IA'}</span>
                  </div>
                  <div className={`max-w-[80%] p-6 rounded-[2rem] text-sm font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' ? 'bg-white text-gray-700 border border-gray-100 rounded-tr-none' : 'bg-[#0055A4] text-white rounded-tl-none'
                  }`}>
                    {msg.text}
                    <div className={`text-[8px] font-black uppercase tracking-widest mt-3 opacity-40 ${msg.role === 'user' ? 'text-gray-400' : 'text-white'}`}>
                      {msg.timestamp} • {msg.role === 'user' ? 'Cliente' : 'IA Engine'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECCIÓN 3: SUGERENCIAS TÁCTICAS */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-1 text-orange-500 bg-orange-500 rounded-full"></span>
              <h3 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.3em]">Sugerencias de Acción Logistics</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {lead.ai_analysis.suggestedActions.map((action, idx) => (
                <div key={idx} className="bg-orange-50 border border-orange-100 p-6 rounded-[2.5rem] flex items-center gap-6 group hover:bg-orange-100 transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 font-black text-lg shadow-xl shadow-orange-100">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                     <p className="text-sm font-black text-orange-900 leading-snug">{action}</p>
                     <p className="text-[9px] text-orange-400 font-bold uppercase tracking-widest mt-1">Plan de Cierre para {lead.ai_analysis.segmentation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* PIE DE ACCIONES */}
        <div className="p-10 bg-white border-t border-gray-100 flex gap-6">
           {lead.status !== 'synced' && (
             <button 
              onClick={() => onSync(lead)}
              className="flex-1 py-5 bg-[#714B67] text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-[1.5rem] shadow-2xl hover:scale-[1.02] transition-all"
             >
                Sincronizar Odoo SSoT
             </button>
           )}
           <button className="flex-1 py-5 bg-white border-2 border-gray-100 text-gray-400 text-[11px] font-black uppercase tracking-[0.3em] rounded-[1.5rem] hover:bg-gray-50 transition-all">
              Generar Auditoría
           </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailView;
