
export enum LeadChannel {
  WHATSAPP = 'WhatsApp',
  EMAIL = 'Email',
  WEB = 'Web',
  TELEGRAM = 'Telegram',
  INSTAGRAM = 'Instagram',
  HUBSPOT = 'HubSpot',
  SALESFORCE = 'Salesforce',
  TYPEFORM = 'Typeform'
}

export enum Segmentation {
  CORPORATIVO = 'Corporativo',
  EMPRENDEDOR = 'Emprendedor',
  E_COMMERCE = 'E-commerce',
  P_NATURAL = 'Persona Natural'
}

export type Sentiment = 'Alto Interés' | 'Neutral' | 'Informativo' | 'Crítico';

export enum UserRole {
  ADMIN = 'Administrador',
  GERENTE = 'Gerente de Ventas',
  EJECUTIVO = 'Ejecutivo de Cuentas'
}

export type LeadStage = 'Ingreso' | 'Análisis IA' | 'Segmentado' | 'Sincronizado';

export type AppTab = 'dashboard' | 'leads' | 'ia-education' | 'ia-chat' | 'workflows' | 'improvements';

export interface ChatMessage {
  role: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export interface AIAnalysis {
  score: number;
  segmentation: Segmentation;
  sentiment: Sentiment;
  insights: string[];
  suggestedActions: string[];
}

export interface Guideline {
  id: string;
  type: 'do' | 'dont';
  situation: string;
  response: string;
}

export interface Source {
  id: string;
  title: string;
  type: 'protocol' | 'brand' | 'prohibited' | 'knowledge';
  origin: 'document' | 'text';
  content: string;
  updatedAt: string;
  guidelines: Guideline[];
}

export interface IAPersona {
  name: string;
  identity: string;
  tone: string;
  prohibited: string[];
  knowledgeBase: string;
  sources: Source[];
}

export interface Lead {
  id: number | string;
  odooId?: string; 
  odooStage?: string; 
  name: string;
  rif: string;
  channel: LeadChannel;
  ai_analysis: AIAnalysis;
  status: 'new' | 'processed' | 'synced' | 'converted';
  stage: LeadStage;
  volume: number;
  lastInteraction: string;
  conversation?: ChatMessage[];
  campaignId?: number;
}
