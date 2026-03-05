
import React from 'react';

const CompanyLogo: React.FC<{ className?: string, light?: boolean }> = ({ className = "w-48", light = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Falcon Icon */}
      <div className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl ${light ? 'bg-white/10' : 'bg-[#0055A4]/10'}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke={light ? "white" : "#0055A4"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-7 lg:h-7">
          {/* Stylized Falcon Head/Wing */}
          <path d="M20 7c-2 0-4 1-6 3-2 2-3 5-3 8 0-3-1-6-3-8-2-2-4-3-6-3 2 0 4 1 6 3 1 1 2 3 2 5 0-2 1-4 2-5 2-2 4-3 6-3z" />
          <path d="M12 18v4" />
          <path d="M10 20h4" />
        </svg>
      </div>
      
      {/* Logotipo: Tipografía LOGISTICS */}
      <div className="flex flex-col">
        <span className={`text-lg lg:text-xl font-black italic tracking-tighter leading-none ${light ? 'text-white' : 'text-[#0055A4]'}`}>
          LOGISTICS
        </span>
        <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${light ? 'text-white/60' : 'text-gray-400'}`}>
          Falcon Speed
        </span>
      </div>
    </div>
  );
};

export default CompanyLogo;
