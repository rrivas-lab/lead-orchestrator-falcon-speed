
import React, { useState, useEffect } from 'react';
import { MOCK_LEADS, INITIAL_IA_PERSONA } from './constants';
import { Lead, UserRole, Segmentation, LeadChannel, Sentiment, IAPersona, AppTab } from './types';
import LeadTable from './components/LeadTable';
import WorkflowBuilder from './components/WorkflowBuilder';
import Dashboard from './components/Dashboard';
import AIAsistentDrawer from './components/AIAsistentDrawer';
import IAPersonaConfig from './components/IAPersonaConfig';
import AIBotChat from './components/AIBotChat';
import LeadForm from './components/LeadForm';
import LeadDetailView from './components/LeadDetailView';
import CompanyLogo from './components/CompanyLogo';
import MarketingImprovements from './components/MarketingImprovements';

const App: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [iaPersona, setIaPersona] = useState<IAPersona>(INITIAL_IA_PERSONA);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [activeTab, setActiveTab] = useState<AppTab>('dashboard');
  const [toast, setToast] = useState<{msg: string, type: 'success' | 'info' | 'odoo'} | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleLeadAction = async (lead: Lead, actionType: string) => {
    if (actionType === 'verify') {
      setToast({ msg: 'Validando identidad...', type: 'info' });
      setTimeout(() => {
        setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: 'processed', stage: 'Análisis IA' } : l));
        setToast({ msg: "Análisis IA Completado", type: 'success' });
      }, 1500);
    } else if (actionType === 'odoo') {
      setToast({ msg: 'Sincronizando con Odoo SSoT...', type: 'odoo' });
      setTimeout(() => {
        const odooId = `${Math.floor(8000 + Math.random() * 1000)}`;
        setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, odooId, status: 'synced', stage: 'Sincronizado' } : l));
        setToast({ msg: `Odoo ID: ${odooId} creado`, type: 'success' });
      }, 2500);
    }
  };

  const handleNewLead = (data: any) => {
    const newLead: Lead = {
      id: `LOG-${Math.floor(100 + Math.random() * 800)}`,
      name: data.name,
      rif: data.rif,
      channel: data.channel as LeadChannel,
      ai_analysis: {
        score: 75,
        segmentation: data.volume > 100 ? Segmentation.CORPORATIVO : Segmentation.EMPRENDEDOR,
        sentiment: 'Neutral',
        insights: ['Registro manual'],
        suggestedActions: ['Validar requerimientos técnicos']
      },
      status: 'new',
      stage: 'Ingreso',
      volume: data.volume,
      lastInteraction: 'Ahora',
      conversation: [{ role: 'bot', text: 'Bienvenido a Logistics.', timestamp: 'Ahora' }]
    };
    setLeads([newLead, ...leads]);
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F5F9] pb-20 lg:pb-0">
      
      {/* HEADER DESKTOP & MOBILE COMPACT */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-lg px-4 lg:px-10 py-4 lg:py-6">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 lg:gap-8">
            <CompanyLogo className="w-24 lg:w-36" />
            <div className="hidden lg:block h-10 w-px bg-gray-100"></div>
            <div className="hidden lg:block">
              <h1 className="text-sm font-black text-gray-800 uppercase italic">Torre de Control</h1>
              <p className="text-[9px] font-black text-[#0055A4] uppercase tracking-[0.3em]">IA Lead Orchestrator</p>
            </div>
          </div>

          {/* NAV DESKTOP - NO SCROLL */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50 p-1 rounded-2xl border border-gray-100">
            {[
              { id: 'dashboard', label: 'Estructura' },
              { id: 'leads', label: 'Buzón' },
              { id: 'ia-education', label: 'Educación' },
              { id: 'improvements', label: 'Mejoras ROI' },
              { id: 'ia-chat', label: 'Playground' },
              { id: 'workflows', label: 'Flujos' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-[#0055A4] text-white shadow-lg' : 'text-gray-400 hover:text-gray-900'}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
             <button 
              onClick={() => setIsFormOpen(true)}
              className="lg:px-6 px-4 py-2.5 bg-[#0055A4] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-xl"
             >
                <span className="hidden lg:inline">Ingresar Lead</span>
                <span className="lg:hidden">+ Lead</span>
             </button>
             <button onClick={() => setIsDrawerOpen(true)} className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-900 text-white rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </button>
          </div>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-[60] px-4 py-3 flex justify-around items-center shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-x-auto no-scrollbar">
        {[
          { id: 'dashboard', label: 'Core', icon: 'M4 6h16M4 12h16m-7 6h7' },
          { id: 'leads', label: 'Buzón', icon: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0V19a2 2 0 01-2 2h-1C15.9 21 13.5 18.6 13.5 16h-3c0 2.6-2.4 5-4.5 5h-1a2 2 0 01-2-2v-6' },
          { id: 'improvements', label: 'Mejoras', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
          { id: 'ia-education', label: 'ADN', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`flex flex-col items-center gap-1 transition-all flex-shrink-0 min-w-[60px] ${activeTab === item.id ? 'text-[#0055A4]' : 'text-gray-300'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
            <span className="text-[8px] font-black uppercase">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* TOASTS */}
      {toast && (
        <div className="fixed top-24 lg:top-32 left-1/2 -translate-x-1/2 z-[100] w-[90%] lg:w-auto">
           <div className={`px-6 lg:px-8 py-3 lg:py-4 rounded-2xl shadow-2xl border flex items-center gap-4 font-black text-[10px] uppercase tracking-widest ${
             toast.type === 'success' ? 'bg-emerald-500 text-white' : 
             toast.type === 'odoo' ? 'bg-[#714B67] text-white' : 'bg-[#0055A4] text-white'
           }`}>
              <span>{toast.msg}</span>
           </div>
        </div>
      )}

      <main className="flex-1 max-w-screen-2xl w-full mx-auto p-4 lg:p-10">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'leads' && (
          <div className="space-y-6 lg:space-y-10">
            <h2 className="text-2xl lg:text-4xl font-black text-gray-900 uppercase italic">Buzón Operativo</h2>
            <LeadTable leads={leads} onAction={handleLeadAction} onSelect={setSelectedLead} userRole={UserRole.ADMIN} />
          </div>
        )}
        {activeTab === 'ia-education' && <IAPersonaConfig persona={iaPersona} onUpdate={setIaPersona} />}
        {activeTab === 'improvements' && <MarketingImprovements />}
        {activeTab === 'ia-chat' && <div className="max-w-4xl mx-auto"><AIBotChat persona={iaPersona} /></div>}
        {activeTab === 'workflows' && <WorkflowBuilder />}
      </main>

      {selectedLead && (
        <LeadDetailView 
          lead={selectedLead} 
          onClose={() => setSelectedLead(null)} 
          onSync={(l) => handleLeadAction(l, 'odoo')} 
        />
      )}

      <AIAsistentDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      {isFormOpen && <LeadForm onClose={() => setIsFormOpen(false)} onSubmit={handleNewLead} />}
    </div>
  );
};

export default App;
