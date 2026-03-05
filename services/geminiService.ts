
import { IAPersona, Source } from "../types";

const formatSourceContext = (sources: Source[]) => {
  return sources.map(s => {
    const guidelines = s.guidelines.map(g => 
      `- [${g.type === 'do' ? 'QUÉ DECIR' : 'QUÉ NO DECIR'}] En situación "${g.situation}": ${g.response}`
    ).join('\n');
    return `FUENTE: ${s.title}\nCONTENIDO: ${s.content}\nDIRECTRICES:\n${guidelines}`;
  }).join('\n\n---\n\n');
};

const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const summarizeSources = async (sources: Source[]) => {
  await simulateDelay(1000);
  return "Resumen simulado del ADN de respuesta basado en las fuentes y directrices estructuradas.";
};

export const chatWithIAEducation = async (query: string, sources: Source[]) => {
  await simulateDelay(1500);
  return `Respuesta simulada de entrenamiento para la consulta: "${query}".`;
};

export const generateEmailDraft = async (leadName: string, segmentation: string) => {
  await simulateDelay(1200);
  return `Estimado ${leadName},\n\nGracias por su interés. Hemos notado que su perfil corresponde al segmento ${segmentation}. Nos pondremos en contacto pronto.\n\nAtentamente,\nEl equipo de Logistics.`;
};

export const chatWithIA = async (message: string, persona: IAPersona) => {
  await simulateDelay(1500);
  return `Respuesta simulada del asistente ${persona.name} a su mensaje: "${message}".`;
};

export const translateToSql = async (naturalLanguage: string) => {
  await simulateDelay(800);
  return `SELECT * FROM Leads WHERE description LIKE '%${naturalLanguage.split(' ')[0]}%';`;
};
