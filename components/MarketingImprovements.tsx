
import React from 'react';

const MarketingImprovements: React.FC = () => {
  const improvements = [
    {
      title: "Captación & Ingesta",
      before: "Entrada manual de datos. Riesgo de pérdida de leads en chats no supervisados.",
      after: "Ingesta omnicanal automatizada. Logistics IA captura y registra el 100% de la interacción.",
      benefit: "+40% Volumen de Registro"
    },
    {
      title: "Cualificación IA",
      before: "Criterio humano subjetivo. Leads 'fríos' ocupan tiempo del equipo comercial.",
      after: "Lead Scoring instantáneo. Priorización de cuentas corporativas AAA de forma autónoma.",
      benefit: "75% Ahorro de tiempo comercial"
    },
    {
      title: "Brand Safety (ADN)",
      before: "Menciones accidentales de competencia en guiones de venta.",
      after: "Filtro semántico en tiempo real. La IA bloquea y redirige cualquier mención externa.",
      benefit: "100% Blindaje de Marca"
    },
    {
      title: "Sincronía SSoT",
      before: "Carga manual en Odoo al final del día. Duplicados constantes.",
      after: "Sincronización en tiempo real. Registro único unificado para todo Logistics.",
      benefit: "0% Duplicados en ERP"
    }
  ];

  return (
    <div className="space-y-8 lg:space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center lg:text-left">
        <h2 className="text-2xl lg:text-4xl font-black text-gray-900 uppercase italic tracking-tighter">Impacto en Mercadeo & Leads</h2>
        <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.4em] mt-2">Transformación del Proceso Logistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {improvements.map((item, idx) => (
          <div key={idx} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col">
            <div className="p-8 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-black text-gray-800 text-sm uppercase italic">{item.title}</h3>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[9px] font-black rounded-full uppercase tracking-widest">{item.benefit}</span>
            </div>
            
            <div className="p-8 space-y-6 flex-1">
              <div className="space-y-2">
                <div className="text-[9px] font-black text-red-400 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  Proceso Tradicional
                </div>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.before}</p>
              </div>

              <div className="h-px bg-gray-100 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/></svg>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-[9px] font-black text-[#0055A4] uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0055A4] rounded-full"></div>
                  Orquestador IA
                </div>
                <p className="text-xs text-gray-800 font-bold leading-relaxed">{item.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DASHBOARD DE ADN SAFETY */}
      <section className="bg-gray-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter">Filtro de ADN Educativo</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Nuestra tecnología de **Brand Safety** detecta intenciones de comparación. Si un prospecto menciona competidores, el sistema neutraliza la mención y resalta **nuestros destinos propios**, asegurando que la conversación nunca abandone nuestro ecosistema de valor.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['COMPETIDOR A', 'COMPETIDOR B', 'COMPETIDOR C', 'COMPETIDOR D'].map(brand => (
                <span key={brand} className="px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black rounded-lg line-through opacity-50">{brand}</span>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-72 aspect-square bg-[#0055A4] rounded-[3rem] flex items-center justify-center shadow-2xl shadow-blue-900/40 border-4 border-white/5">
             <div className="text-center">
                <div className="text-5xl font-black italic mb-2">100%</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Brand Safety</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingImprovements;
