
import React from 'react';
import { MOCK_CAMPAIGNS } from '../constants';

const Campaigns: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Gestión de Campañas</h2>
          <p className="text-gray-500 text-sm">Agrupa y mide el rendimiento de tus esfuerzos de captación.</p>
        </div>
        <button className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          Nueva Campaña
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_CAMPAIGNS.map(camp => (
          <div key={camp.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-colors">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${camp.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                  {camp.status}
                </span>
                <span className="text-xs font-bold text-blue-600">ID #{camp.id}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{camp.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{camp.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Inversión</div>
                  <div className="text-lg font-bold text-gray-800">${camp.budget}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Leads</div>
                  <div className="text-lg font-bold text-gray-800">{camp.leadsCount}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-2 bg-blue-50 text-blue-700 font-bold text-sm rounded-lg hover:bg-blue-100 transition-colors">
                Ver Detalles
              </button>
              <button className="flex-1 py-2 border border-gray-200 text-gray-600 font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors">
                Reporte ROI
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
