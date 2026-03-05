
import React from 'react';
import { COLORS } from '../constants';

const Dashboard: React.FC = () => {
  const channels = [
    { name: 'WhatsApp', color: '#25D366', icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 7.454c-1.679 0-3.325-.453-4.766-1.308l-.342-.203-3.543.929.945-3.454-.223-.354c-.938-1.493-1.433-3.224-1.433-5.004 0-5.26 4.281-9.541 9.542-9.541 2.548 0 4.944.992 6.744 2.793 1.8 1.801 2.791 4.196 2.791 6.748 0 5.262-4.283 9.541-9.542 9.541m0-20.582c-6.088 0-11.042 4.954-11.042 11.042 0 1.946.508 3.846 1.472 5.541l-1.565 5.72 5.851-1.534c1.626.886 3.455 1.353 5.283 1.353 6.09 0 11.045-4.954 11.045-11.042 0-2.951-1.149-5.725-3.234-7.809s-4.859-3.231-7.81-3.231" /> },
    { name: 'Instagram', color: '#E4405F', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /> },
    { name: 'Telegram', color: '#0088CC', icon: <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 7.02l-1.912 9.03c-.144.643-.526.801-1.066.498l-2.909-2.143-1.404 1.35c-.155.155-.285.285-.585.285l.209-2.962 5.391-4.87c.234-.208-.051-.323-.363-.115l-6.663 4.195-2.868-.897c-.623-.195-.636-.623.13-.919l11.213-4.321c.519-.191.974.12.827.844z" /> },
    { name: 'Email', color: '#0055A4', icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /> }
  ];

  return (
    <div className="space-y-16 py-8 animate-in fade-in duration-1000">
      
      {/* TÍTULO DE ARQUITECTURA */}
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">Blueprint de Operaciones Logistics</h2>
         <div className="h-1 w-24 bg-[#0055A4] mx-auto rounded-full"></div>
         <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em]">Visualización de los 3 Pilares del Ecosistema</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-11 items-center gap-4">
        
        {/* PILAR 1: INGESTA */}
        <div className="lg:col-span-3 space-y-6">
           <div className="text-center lg:text-left">
              <span className="px-3 py-1 bg-blue-50 text-[#0055A4] text-[9px] font-black uppercase tracking-widest rounded-lg">Pilar 1: Ingesta Maestra</span>
              <h3 className="text-xl font-black text-gray-800 tracking-tight mt-2 uppercase">Canales de Captación</h3>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              {channels.map((ch, i) => (
                <div key={i} className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-xl flex flex-col items-center group hover:scale-105 transition-all">
                   <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg mb-3" style={{ backgroundColor: ch.color }}>
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                        {ch.icon}
                      </svg>
                   </div>
                   <span className="text-[10px] font-black text-gray-700 uppercase tracking-tight">{ch.name}</span>
                   <span className="text-[8px] text-emerald-500 font-black mt-1 uppercase tracking-widest">Activo</span>
                </div>
              ))}
           </div>
        </div>

        {/* CONECTOR 1 */}
        <div className="lg:col-span-1 flex justify-center opacity-10 rotate-90 lg:rotate-0">
           <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </div>

        {/* PILAR 2: LOGISTICS IA */}
        <div className="lg:col-span-3">
           <div className="bg-white rounded-[3.5rem] p-12 border-4 border-blue-50 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#0055A4]"></div>
              
              <div className="text-center space-y-8">
                 <div className="inline-block px-4 py-2 bg-blue-50 text-[#0055A4] rounded-2xl">
                    <span className="text-[9px] font-black uppercase tracking-widest">Pilar 2: Inteligencia Central</span>
                 </div>
                 
                 <div className="w-24 h-24 bg-[#0055A4] rounded-[2.5rem] mx-auto flex items-center justify-center text-white shadow-2xl shadow-blue-200">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                 </div>

                 <div className="space-y-3">
                    <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">Logistics IA Core</h3>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed">
                       ADN de Marca &<br/>Análisis Prospectivo
                    </p>
                 </div>

                 <div className="pt-4 flex flex-wrap justify-center gap-2">
                    <div className="px-3 py-1.5 bg-gray-900 text-white rounded-xl text-[7px] font-black uppercase tracking-widest">NLP Engine</div>
                    <div className="px-3 py-1.5 bg-gray-50 text-gray-400 rounded-xl text-[7px] font-black uppercase tracking-widest">DNA Safety</div>
                 </div>
              </div>
           </div>
        </div>

        {/* CONECTOR 2 */}
        <div className="lg:col-span-1 flex justify-center opacity-10 rotate-90 lg:rotate-0">
           <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </div>

        {/* PILAR 3: ODOO SSoT */}
        <div className="lg:col-span-3 space-y-6">
           <div className="text-center lg:text-right">
              <span className="px-3 py-1 bg-purple-50 text-[#714B67] text-[9px] font-black uppercase tracking-widest rounded-lg">Pilar 3: Destino Maestro</span>
              <h3 className="text-xl font-black text-gray-800 tracking-tight mt-2 uppercase">Odoo ERP (SSoT)</h3>
           </div>

           <div className="bg-[#714B67] rounded-[3rem] p-10 text-white shadow-2xl shadow-purple-100 relative overflow-hidden text-center lg:text-right">
              <h4 className="text-3xl font-black tracking-tighter mb-4 italic uppercase">Single Source of Truth</h4>
              <p className="text-xs text-purple-100 font-medium leading-relaxed mb-8">
                 Unificación de identidades y datos operativos en tiempo real.
              </p>
              
              <div className="flex flex-col items-end gap-3">
                 <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-purple-200">DB Sincronizada</span>
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* MÉTRICAS GLOBALES */}
      <section className="bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8">
         <div className="text-center space-y-2">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Volumen Leads</div>
            <div className="text-4xl font-black text-[#0055A4] tracking-tighter italic">2,842</div>
         </div>
         <div className="text-center space-y-2">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Ahorro Tiempo</div>
            <div className="text-4xl font-black text-emerald-500 tracking-tighter italic">75%</div>
         </div>
         <div className="text-center space-y-2">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Sync Error Rate</div>
            <div className="text-4xl font-black text-red-400 tracking-tighter italic">0.02%</div>
         </div>
         <div className="text-center space-y-2">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Conversión IA</div>
            <div className="text-4xl font-black text-orange-500 tracking-tighter italic">42%</div>
         </div>
      </section>
    </div>
  );
};

export default Dashboard;
