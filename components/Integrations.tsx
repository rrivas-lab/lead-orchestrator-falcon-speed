
import React, { useState } from 'react';
import { MOCK_INTEGRATIONS } from '../constants';

const Integrations: React.FC = () => {
  const [integrations, setIntegrations] = useState(MOCK_INTEGRATIONS);

  const toggleConnection = (id: string) => {
    setIntegrations(prev => prev.map(item => 
      item.id === id ? { ...item, status: item.status === 'connected' ? 'disconnected' : 'connected' } : item
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Conexiones Externas</h2>
          <p className="text-gray-500 text-sm">Centraliza la ingesta de leads desde tus herramientas favoritas.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-all flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Nueva Integración
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((app) => (
          <div key={app.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${app.icon}-50 text-${app.icon}-600 border border-${app.icon}-100`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${app.status === 'connected' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                {app.status === 'connected' ? 'Activo' : 'Desconectado'}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-2">{app.name}</h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Importa automáticamente clientes potenciales y mapea campos personalizados hacia el Orquestador Logistics.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <button 
                onClick={() => toggleConnection(app.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${app.status === 'connected' ? 'bg-rose-50 text-rose-600 hover:bg-rose-100' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
              >
                {app.status === 'connected' ? 'Desconectar' : 'Conectar Cuenta'}
              </button>
              {app.status === 'connected' && (
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
