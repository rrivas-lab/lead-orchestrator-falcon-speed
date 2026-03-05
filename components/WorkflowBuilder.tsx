
import React from 'react';
import { COLORS } from '../constants';

const WorkflowBuilder: React.FC = () => {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0055A4 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <h3 className="text-lg font-bold text-gray-800 mb-8 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        Constructor de Flujos IA
      </h3>

      <div className="flex items-center gap-8 justify-center min-h-[200px] relative">
        {/* Node 1: Trigger */}
        <div className="w-48 p-4 bg-blue-50 border border-blue-200 rounded-xl shadow-sm z-10">
          <div className="text-[10px] uppercase font-bold text-blue-500 mb-1">Trigger</div>
          <div className="flex items-center gap-2 font-semibold text-gray-800 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Nuevo Correo
          </div>
        </div>

        {/* Line */}
        <div className="w-12 h-0.5 bg-gray-300"></div>

        {/* Node 2: AI Condition */}
        <div className="w-56 p-4 bg-emerald-50 border border-emerald-200 rounded-xl shadow-sm z-10 relative">
          <div className="text-[10px] uppercase font-bold text-emerald-500 mb-1">Condición IA</div>
          <div className="text-sm font-semibold text-gray-800">
            Contiene "Presupuesto" o "Carga Pesada"
          </div>
          {/* Connector to Odoo */}
          <div className="absolute -right-4 top-1/2 w-4 h-0.5 bg-gray-300"></div>
        </div>

        {/* Branching Logic Visualization */}
        <div className="flex flex-col gap-6">
          <div className="w-52 p-4 bg-orange-50 border border-orange-200 rounded-xl shadow-sm z-10">
            <div className="flex items-center gap-2 font-semibold text-gray-800 text-sm">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              Pipeline Corporativo
            </div>
            <div className="text-[10px] text-gray-500 mt-1">Crear Opportunity en Odoo</div>
          </div>

          <div className="w-52 p-4 bg-purple-50 border border-purple-200 rounded-xl shadow-sm z-10">
            <div className="flex items-center gap-2 font-semibold text-gray-800 text-sm">
              <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              Notificar Gerente
            </div>
            <div className="text-[10px] text-gray-500 mt-1">Vía WhatsApp / Slack</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
