
import React, { useState } from 'react';
import { LeadChannel } from '../types';

interface LeadFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', rif: '', channel: LeadChannel.WEB, volume: 10 });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = () => {
    if (step === 1) setStep(2);
    else {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        onSubmit(formData);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-md z-[60] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        <div className="p-8 text-center space-y-2 border-b border-gray-50">
           <h2 className="text-2xl font-black text-gray-800 tracking-tight">Registro de Prospecto</h2>
           <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Ingesta Operativa Logistics</p>
        </div>

        <div className="p-10 space-y-8">
           {isProcessing ? (
             <div className="py-12 flex flex-col items-center gap-6">
                <div className="relative w-20 h-20">
                   <div className="absolute inset-0 border-4 border-blue-50 rounded-full"></div>
                   <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                </div>
                <div className="text-center">
                   <div className="text-sm font-black text-gray-800 uppercase tracking-widest">Escaneando RIF con IA</div>
                   <div className="text-[10px] text-gray-400 mt-1 uppercase font-bold">Verificando bases de datos de Logistics...</div>
                </div>
             </div>
           ) : (
             <>
               <div className="flex justify-center gap-2 mb-4">
                  <div className={`w-8 h-1.5 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-gray-100'}`}></div>
                  <div className={`w-8 h-1.5 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-100'}`}></div>
               </div>

               {step === 1 ? (
                 <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nombre o Razón Social</label>
                      <input 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        type="text" 
                        placeholder="Ej: Logística Express C.A." 
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-sm font-bold text-gray-700" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">RIF (V/J-00000000-0)</label>
                      <input 
                        value={formData.rif}
                        onChange={(e) => setFormData({...formData, rif: e.target.value})}
                        type="text" 
                        placeholder="J-12345678-9" 
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-sm font-mono text-gray-700" 
                      />
                    </div>
                 </div>
               ) : (
                 <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Canal de Captación</label>
                      <select 
                        value={formData.channel}
                        onChange={(e) => setFormData({...formData, channel: e.target.value as LeadChannel})}
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-sm font-bold text-gray-700"
                      >
                        {Object.values(LeadChannel).map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Volumen mensual de envíos</label>
                      <input 
                        value={formData.volume}
                        onChange={(e) => setFormData({...formData, volume: Number(e.target.value)})}
                        type="range" min="1" max="500" 
                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600" 
                      />
                      <div className="text-right text-sm font-black text-blue-600">{formData.volume} pqt/mes</div>
                    </div>
                 </div>
               )}

               <div className="flex gap-4 pt-4">
                  <button 
                    onClick={onClose}
                    className="flex-1 py-4 text-gray-400 text-xs font-black uppercase tracking-widest hover:text-gray-600 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={handleNext}
                    className="flex-[2] py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                  >
                    {step === 1 ? 'Siguiente' : 'Finalizar y Calificar'}
                  </button>
               </div>
             </>
           )}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
