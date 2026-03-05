
import React from 'react';
import { MOCK_USERS } from '../constants';

const Settings: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Maestros y SSOT</h2>
          <p className="text-gray-500 text-sm">Configuración de la fuente de verdad (Odoo) y accesos.</p>
        </div>
        <div className="flex gap-2">
           <div className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-xl text-[10px] font-black border border-purple-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Odoo v17 Connected
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Directorio de Usuarios</h3>
            <button className="text-[10px] font-black text-blue-600 hover:underline uppercase tracking-widest">Sincronizar con Odoo Auth</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Usuario</th>
                  <th className="px-6 py-4">Rol en Orquestador</th>
                  <th className="px-6 py-4">Vínculo Odoo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {MOCK_USERS.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-800 text-sm">{user.name}</div>
                      <div className="text-[10px] text-gray-400">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-black text-gray-600 bg-gray-100 px-2 py-1 rounded-lg uppercase">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-bold text-emerald-600">Link Activo</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Parámetros SSOT</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-[9px] font-black text-gray-400 uppercase mb-2">Modelo Maestro CRM</div>
                <div className="text-xs font-bold font-mono text-purple-700">res.partner / crm.lead</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-[9px] font-black text-gray-400 uppercase mb-2">Frecuencia de Sincronía</div>
                <div className="text-xs font-bold text-gray-700">Real-time (Webhooks)</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-700 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="font-black mb-2 uppercase tracking-tighter">Odoo Control Center</h3>
               <p className="text-purple-100 text-[11px] font-medium leading-relaxed mb-6">
                 Esta instancia está ligada al servidor de producción de Logistics. No realices pruebas de carga masiva en este entorno.
               </p>
               <button className="w-full py-3 bg-white text-purple-700 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-purple-50 transition-all">
                 Ver Logs de API Odoo
               </button>
             </div>
             <svg className="absolute -right-8 -bottom-8 w-32 h-32 text-white/10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
