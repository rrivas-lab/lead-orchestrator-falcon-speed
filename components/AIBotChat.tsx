
import React, { useState, useRef, useEffect } from 'react';
import { IAPersona } from '../types';
import { chatWithIA } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface AIBotChatProps {
  persona: IAPersona;
}

const AIBotChat: React.FC<AIBotChatProps> = ({ persona }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: `¡Hola! Soy ${persona.name}, el asistente oficial de Logistics. ¿En qué puedo ayudarte hoy con tus envíos?` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await chatWithIA(userMsg, persona);
    
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl flex flex-col h-[650px] overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Chat Header */}
      <div className="p-8 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#0055A4] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-100">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div>
            <h3 className="font-black text-gray-900 tracking-tight">Logistics IA Playground</h3>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
               <span className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">En línea - Torre de Control</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-6 bg-gray-50/30">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-6 py-4 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-6 py-4 rounded-3xl rounded-tl-none border border-gray-100 flex gap-2">
               <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
               <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75"></div>
               <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-8 border-t border-gray-50 bg-white">
        <div className="relative">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu consulta logística aquí..."
            className="w-full pl-6 pr-16 py-5 bg-gray-50 border-none rounded-[1.5rem] outline-none text-sm font-bold text-gray-800 focus:ring-2 focus:ring-blue-600 shadow-inner"
          />
          <button 
            onClick={handleSend}
            className="absolute right-2 top-2 w-12 h-12 bg-blue-600 text-white rounded-[1.25rem] flex items-center justify-center shadow-xl shadow-blue-100 hover:scale-105 transition-all"
          >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9-2-9-18-9 18 9 2zm0 0v-8"></path></svg>
          </button>
        </div>
        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest text-center mt-4">
          La IA responde siguiendo las directrices de la marca.
        </p>
      </div>
    </div>
  );
};

export default AIBotChat;
