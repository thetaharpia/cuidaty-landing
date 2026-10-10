/**
 * Planos exibidos na home. Conteúdo e preços são os mesmos da seção anterior
 * (components/sections/Personas.astro); aqui ficam como dados para a nova seção.
 */
export const REGISTER_URL = 'https://app.cuidaty.com/register';
export const PROPOSAL_URL = 'https://calendly.com/pedro-thetaharpia/30min';

export interface Plan {
  /** Identificador usado nos eventos do GA4 (cta_location / plan). */
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: string;
  cycle: string;
  inherits?: string;
  features: string[];
  exclusions?: string[];
  featuresNote?: string;
  cta: { label: string; href: string; event?: string };
  recommended?: boolean;
}

export const plans: Plan[] = [
  {
    slug: 'basico',
    name: 'Básico',
    subtitle: 'A base para organizar a rotina',
    tagline: 'Gestão completa do consultório para organizar toda a sua rotina.',
    price: 'R$ 69,90',
    cycle: '/mês',
    features: [
      'Agenda inteligente, recorrências e detecção de conflitos',
      'Prontuário eletrônico completo, com imagens e resumo clínico',
      'Gestão de pacientes: cadastro, saúde, convênio e importação',
      'Formulários e relatórios, com exportação em PDF',
      'Portal de agendamento online + portal do paciente',
    ],
    exclusions: ['Sem comunicação por WhatsApp', 'Sem Cuty AI'],
    featuresNote: '+ 30 funcionalidades incluídas',
    cta: { label: 'Começar grátis', href: REGISTER_URL },
  },
  {
    slug: 'premium',
    name: 'Premium',
    subtitle: 'Comunicação e inteligência clínica',
    tagline: 'Tudo do Básico, agora com WhatsApp, Cuty AI e geração de documentos.',
    price: 'R$ 89,90',
    cycle: '/mês',
    inherits: 'Tudo do Básico, mais:',
    features: [
      'Cuty AI: assistente clínico baseado no prontuário',
      'Respostas e resumos com a fonte citada dos dados do paciente',
      'Geração de modelos de documentos',
      'Comunicação WhatsApp completa: central, automações e lembretes',
    ],
    featuresNote: '+ 40 funcionalidades incluídas',
    cta: { label: 'Começar grátis', href: REGISTER_URL },
    recommended: true,
  },
  {
    slug: 'plus',
    name: 'Plus',
    subtitle: 'Cada palavra da sessão organizada',
    tagline: 'Tudo do Premium, agora com transcrição e resumo automático das sessões.',
    price: 'R$ 159,90',
    cycle: '/mês',
    inherits: 'Tudo do Premium, mais:',
    features: [
      'Transcrição de consultas e teleconsulta, com captura de áudio',
      'Resumo clínico automático a partir do áudio (SOAP e outros formatos)',
    ],
    featuresNote: '+ 45 funcionalidades incluídas',
    cta: { label: 'Começar grátis', href: REGISTER_URL },
  },
  {
    slug: 'clinicas',
    name: 'Clínicas e Grupos',
    subtitle: 'Escala, controle e inteligência de negócio',
    tagline: 'Para clínicas, redes e grupos que precisam crescer com gestão.',
    price: 'Sob consulta',
    cycle: '',
    inherits: 'Tudo do Plus, mais:',
    features: [
      'Financeiro completo: dashboard, caixa, faturas, checkout e metas de receita',
      'Integração com convênios (Geap e SulAmérica): emissão e conferência de guias',
      'Multiunidade: várias filiais e grupos em uma conta',
      'Equipes e permissões avançadas por cargo e prontuário',
      'Analytics avançado: portal, comunicação e operação',
      'Migração de dados de outras plataformas',
      'Diretórios de profissionais e importação de usuários em massa',
      'Limites de usuários e módulos customizáveis',
    ],
    featuresNote: 'Tudo da Cuidaty, sem limites',
    cta: { label: 'Falar com a gente', href: PROPOSAL_URL, event: 'contact_click' },
  },
];
