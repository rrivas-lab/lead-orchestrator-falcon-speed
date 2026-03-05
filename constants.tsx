
import { UserRole, LeadChannel, Segmentation, IAPersona, Lead, Sentiment } from './types';

export const COLORS = {
  PRIMARY: '#0055A4', 
  ODOO_PURPLE: '#714B67', 
  WHITE: '#FFFFFF',
  RED: '#FF4D4D',
  GREEN: '#22C55E',
  PASTEL_PURPLE: '#F3E8FF',
  PASTEL_BLUE: '#EFF6FF',
  PASTEL_ORANGE: '#FFF7ED',
  PASTEL_GREEN: '#F0FDF4'
};

export const INITIAL_IA_PERSONA: IAPersona = {
  name: "Logistics AI",
  identity: "Eres el asistente oficial de atención al cliente de Logistics. Tu misión es ayudar a los prospectos a entender nuestros servicios logísticos.",
  tone: "Profesional, eficiente, optimista.",
  prohibited: ["Competidor A", "Competidor B", "Competidor C"],
  knowledgeBase: "",
  sources: [
    {
      id: 'src_1',
      title: 'Identidad de Marca Logistics',
      type: 'brand',
      origin: 'document',
      content: 'Logistics es una empresa líder con muchos años en el mercado. Nos enfocamos en la confianza, rapidez y cobertura nacional.',
      updatedAt: '2024-05-20',
      guidelines: [
        { id: 'g1', type: 'do', situation: 'Saludo inicial', response: 'Saludar siempre con: ¡Buen día! Bienvenido a la Torre de Control de Logistics.' }
      ]
    },
    {
      id: 'src_2',
      title: 'Restricciones de Competencia',
      type: 'prohibited',
      origin: 'text',
      content: 'Bajo ninguna circunstancia se deben mencionar empresas de la competencia. El enfoque debe ser exclusivamente en las ventajas competitivas de Logistics.',
      updatedAt: '2024-05-22',
      guidelines: [
        { id: 'g2', type: 'dont', situation: 'Comparación de precios', response: 'Nunca mencionar a competidores. Si el cliente pregunta por comparaciones, resaltar que Logistics ofrece la mejor relación seguridad/cobertura del mercado.' }
      ]
    }
  ]
};

export const MOCK_LEADS: Lead[] = [
  {
    id: 'local_10293',
    name: 'Carlos Pérez',
    rif: 'V-12345678',
    channel: LeadChannel.WHATSAPP,
    ai_analysis: {
      score: 85,
      segmentation: Segmentation.CORPORATIVO,
      sentiment: 'Alto Interés' as Sentiment,
      insights: ['Interés en logística masiva', 'RIF Validado', 'Urgencia detectada'],
      suggestedActions: [
        'Ofrecer plan de tarifas para grandes volúmenes',
        'Mencionar seguro de carga premium para equipos electrónicos',
        'Programar llamada de cierre para hoy mismo'
      ]
    },
    status: 'processed',
    stage: 'Análisis IA',
    volume: 120,
    lastInteraction: 'Hace 5 min',
    conversation: [
      { role: 'user', text: 'Hola, necesito enviar 50 cajas de laptops a Maracaibo semanalmente.', timestamp: '10:05 AM' },
      { role: 'bot', text: '¡Buen día! Entiendo perfectamente. En Logistics tenemos planes corporativos para ese volumen. ¿Cuenta con RIF vigente?', timestamp: '10:05 AM' },
      { role: 'user', text: 'Sí, es V-12345678. Necesito seguridad garantizada.', timestamp: '10:06 AM' }
    ]
  },
  {
    id: 'local_10294',
    odooId: '845',
    name: 'Distribuidora Global C.A.',
    rif: 'J-98765432',
    channel: LeadChannel.WEB,
    ai_analysis: {
      score: 95,
      segmentation: Segmentation.CORPORATIVO,
      sentiment: 'Alto Interés' as Sentiment,
      insights: ['Cliente recurrente potencial', 'Solicitó crédito fiscal', 'Interés en API'],
      suggestedActions: [
        'Enviar documentación técnica de integración API',
        'Validar solvencia en Odoo directamente',
        'Escalar a Gerencia de Cuentas Clave'
      ]
    },
    status: 'synced',
    stage: 'Sincronizado',
    volume: 850,
    lastInteraction: 'Ayer',
    conversation: [
      { role: 'user', text: 'Quiero automatizar mis envíos desde mi tienda Shopify.', timestamp: 'Ayer 03:00 PM' },
      { role: 'bot', text: 'Excelente. Logistics cuenta con una API robusta para integración con E-commerce. ¿Cuál es su volumen mensual?', timestamp: 'Ayer 03:01 PM' },
      { role: 'user', text: 'Aproximadamente 800-900 envíos mensuales.', timestamp: 'Ayer 03:02 PM' }
    ]
  },
  {
    id: 'local_10295',
    name: 'Tienda de Calzado Sport',
    rif: 'V-87654321',
    channel: LeadChannel.INSTAGRAM,
    ai_analysis: {
      score: 62,
      segmentation: Segmentation.EMPRENDEDOR,
      sentiment: 'Neutral' as Sentiment,
      insights: ['Consulta de precios unitarios', 'Perfil de Instagram verificado'],
      suggestedActions: [
        'Enviar lista de precios para emprendedores',
        'Mencionar puntos de recepción cercanos en Caracas'
      ]
    },
    status: 'new',
    stage: 'Ingreso',
    volume: 15,
    lastInteraction: 'Hace 2 horas',
    conversation: [
      { role: 'user', text: 'Hola, ¿cuánto cuesta enviar un par de zapatos a Valencia?', timestamp: '12:45 PM' },
      { role: 'bot', text: '¡Buen día! Un gusto saludarte. El costo depende del peso exacto, pero para un par estándar tenemos tarifas muy competitivas.', timestamp: '12:46 PM' }
    ]
  },
  {
    id: 'local_10296',
    name: 'Inversiones Tech 2024',
    rif: 'J-11223344',
    channel: LeadChannel.EMAIL,
    ai_analysis: {
      score: 45,
      segmentation: Segmentation.P_NATURAL,
      sentiment: 'Informativo' as Sentiment,
      insights: ['Pregunta por envíos internacionales', 'Poca información de volumen'],
      suggestedActions: [
        'Solicitar más detalles sobre el destino internacional',
        'Ofrecer guía de empaque para envíos al exterior'
      ]
    },
    status: 'processed',
    stage: 'Análisis IA',
    volume: 5,
    lastInteraction: 'Hace 1 día',
    conversation: [
      { role: 'user', text: 'Buenas tardes, ¿hacen envíos a España?', timestamp: 'Ayer 04:20 PM' },
      { role: 'bot', text: '¡Buen día! Sí, contamos con el servicio Logistics Internacional. ¿Qué tipo de mercancía desea enviar?', timestamp: 'Ayer 04:21 PM' }
    ]
  }
];

export const MOCK_CAMPAIGNS = [
  { id: 1, name: 'Expansión Oriente 2024', description: 'Captación de aliados comerciales.', budget: 5000, leadsCount: 45, status: 'active' },
  { id: 2, name: 'E-commerce Black Friday', description: 'Promociones para tiendas online.', budget: 3000, leadsCount: 120, status: 'paused' }
];

export const MOCK_USERS = [
  { id: 1, name: 'Carlos Admin', email: 'admin@logistics.com', role: UserRole.ADMIN, lastLogin: 'Hace 10 min' },
  { id: 2, name: 'Elena Gerente', email: 'elena@logistics.com', role: UserRole.GERENTE, lastLogin: 'Hace 1 hora' }
];

export const MOCK_INTEGRATIONS = [
  { id: 'odoo', name: 'Odoo SSOT (Master)', status: 'connected', icon: 'purple' },
  { id: 'whatsapp', name: 'WhatsApp Business API', status: 'connected', icon: 'green' },
  { id: 'hubspot', name: 'HubSpot CRM', status: 'disconnected', icon: 'orange' }
];
