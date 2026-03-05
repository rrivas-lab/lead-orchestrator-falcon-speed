
import React from 'react';
import { Lead, UserRole, LeadStage } from '../types';
import { COLORS } from '../constants';

interface LeadTableProps {
  leads: Lead[];
  onAction: (lead: Lead, actionType: string) => void;
  onSelect: (lead: Lead) => void;
  userRole: UserRole;
}

const LeadTable: React.FC<LeadTableProps> = ({ leads, onAction, onSelect, userRole }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return COLORS.GREEN;
    if (score >= 50) return '#EAB308';
    return COLORS.RED;
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden animate-in fade-in duration-700">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Nombre</th>
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">RIF</th>
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Canal</th>
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">IA Score</th>
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Segmento</th>
              <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {leads.map((lead) => (
              <tr 
                key={lead.id} 
                onClick={() => onSelect(lead)}
                className={`group transition-all cursor-pointer hover:bg-gray-50/80 ${lead.status === 'synced' ? 'bg-purple-50/30' : lead.status === 'processed' ? 'bg-blue-50/30' : 'bg-white'}`}
              >
                <td className="px-8 py-6">
                  <div className="font-bold text-gray-800 text-sm flex items-center gap-2">
                    {lead.name}
                    {lead.status === 'synced' && (
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    )}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="text-[11px] font-mono text-gray-500 bg-gray-100/50 px-2 py-1 rounded-md inline-block">{lead.rif}</div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                    <span className="p-1.5 bg-gray-50 rounded-lg">
                       <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    </span>
                    {lead.channel}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="font-black text-sm" style={{ color: getScoreColor(lead.ai_analysis.score) }}>
                    {lead.ai_analysis.score}/100
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white border border-gray-100 shadow-sm text-gray-600">
                    {lead.ai_analysis.segmentation}
                  </span>
                </td>
                <td className="px-8 py-6 text-center" onClick={(e) => e.stopPropagation()}>
                  {lead.status === 'synced' ? (
                    <button className="px-6 py-2.5 bg-[#714B67] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-purple-200 cursor-default">
                      Odoo ID: {lead.odooId}
                    </button>
                  ) : lead.status === 'processed' ? (
                    <button 
                      onClick={() => onAction(lead, 'odoo')}
                      className="px-6 py-2.5 bg-[#0055A4] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-200 hover:scale-105 transition-transform"
                    >
                      Sincronizar Odoo
                    </button>
                  ) : (
                    <button 
                      onClick={() => onAction(lead, 'verify')}
                      className="px-6 py-2.5 bg-white border border-gray-200 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Verificar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadTable;
