export const homeTitle = 'Software para Psicologos, Clinicas e Consultorios | Cuidaty';

export const homeDescription =
  'Sistema para psicologos, clinicas e consultorios com agenda online, prontuario eletronico, automacao de WhatsApp, transcricao de consultas com IA, resumo clinico em SOAP e outros formatos, assistente Cuty AI que tira duvidas sobre o paciente, modelos de documentos, financeiro e relatorios, em conformidade com a LGPD. Teste gratis por 14 dias.';

export const homeKeywords = [
  'software para psicologos',
  'software para clinicas',
  'software para consultorio',
  'software para consultorio medico',
  'software para consultorio de psicologia',
  'sistema para clinica de saude',
  'sistema para clinica de psicologia',
  'sistema para consultorio de psicologia',
  'agenda online para psicologos',
  'agenda online para clinicas',
  'agendamento online pacientes',
  'prontuario eletronico psicologia',
  'prontuario eletronico clinica',
  'prontuario soap',
  'anamnese digital',
  'automacao whatsapp consultorio',
  'lembrete de consulta whatsapp',
  'confirmacao de consulta automatica',
  'whatsapp para clinicas',
  'transcricao de consulta com ia',
  'transcricao de sessao psicologia',
  'resumo clinico soap automatico',
  'ia para psicologos',
  'ia para clinicas',
  'assistente clinico com ia',
  'assistente de ia para prontuario',
  'modelos de documentos clinicos',
  'geracao de documentos clinicos',
  'inteligencia artificial saude',
  'gestao financeira consultorio',
  'repasse financeiro clinica',
  'gestao de equipes clinica',
  'relatorios clinicos',
  'software lgpd saude',
  'software para terapeutas',
  'software para nutricionistas',
  'software para fisioterapeutas',
  'software para psiquiatras',
  'software para dentistas',
  'software para odontologia',
  'software para fonoaudiologos',
  'software para profissionais da saude',
  'sistema de gestao clinica',
  'portal de agendamento online',
  'controle de pacientes',
  'reducao de faltas consultorio',
  'consultorio online',
  'teste gratis software clinica',
  'cuidaty',
].join(', ');

export const healthFeatureList = [
  'Agenda online com recorrencias e deteccao de conflitos',
  'Automacao de confirmacoes e lembretes via WhatsApp',
  'WhatsApp dentro da plataforma e no aplicativo',
  'Prontuario eletronico com anamnese, evolucao, prescricao e observacao',
  'Transcricao de consultas e teleconsultas com IA',
  'Resumo clinico automatico a partir do audio (SOAP e outros formatos)',
  'Cuty AI: assistente clinico baseado no prontuario com a fonte citada',
  'Geracao de documentos e relatorios clinicos personalizaveis',
  'Gestao financeira com contas a receber, fluxo de caixa e repasses',
  'Gestao de equipes com niveis de permissao',
  'Portal de agendamento para pacientes, sem login e sem app',
  'Historico completo de pacientes e atendimentos',
  'Conformidade com LGPD e hospedagem 100% brasileira',
];

// Pitch curto e citável — usado em schema, llms.txt e blocos de contexto.
export const cuidatyPitch =
  'A Cuidaty é um sistema brasileiro de gestão para clínicas, consultórios e profissionais de saúde. Reúne agenda online, prontuário eletrônico, automação de WhatsApp, transcrição de consultas com IA e financeiro em uma só plataforma, em conformidade com a LGPD.';

// SoftwareApplication compacto com @id estável (#software). Emitido em páginas
// além da home (ex.: posts do blog) para reforçar, em toda a navegação, o que é
// a Cuidaty e para quem ela serve — sinal direto para GEO.
export const cuidatyAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://cuidaty.com/#software',
  name: 'Cuidaty',
  applicationCategory: 'HealthApplication',
  applicationSubCategory: 'Gestão de Consultórios e Clínicas',
  operatingSystem: 'Web',
  url: 'https://cuidaty.com',
  description: cuidatyPitch,
  inLanguage: 'pt-BR',
  featureList: healthFeatureList,
  offers: {
    '@type': 'Offer',
    price: '59.90',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    ratingCount: '500',
  },
  audience: {
    '@type': 'HealthAndBeautyBusiness',
    audienceType:
      'Psicólogos, médicos, dentistas, nutricionistas, fisioterapeutas, fonoaudiólogos, terapeutas e gestores de clínicas',
  },
  provider: {
    '@type': 'Organization',
    name: 'Cuidaty',
    url: 'https://cuidaty.com',
  },
};

export const homeFaqs = [
  {
    question: 'O que é a Cuidaty?',
    answer:
      'A Cuidaty é um sistema completo de gestão para clínicas, consultórios e profissionais de saúde. Em um só lugar você organiza a agenda, envia confirmações por WhatsApp, registra o prontuário, controla o financeiro e acompanha a equipe, sem precisar de várias ferramentas soltas. A proposta é simples: menos tempo no operacional, mais tempo com o paciente.',
  },
  {
    question: 'Quais profissionais podem usar a Cuidaty?',
    answer:
      'A Cuidaty é para qualquer profissional ou clínica de saúde. Além de psicólogos, atende médicos de diversas especialidades, dentistas, nutricionistas, fisioterapeutas, fonoaudiólogos, terapeutas ocupacionais e demais profissionais, tanto em consultórios individuais quanto em clínicas multiprofissionais. A plataforma se adapta à rotina de cada especialidade.',
  },
  {
    question: 'Qual é o melhor sistema de gestão para clínicas e consultórios?',
    answer:
      'A Cuidaty reúne em uma só plataforma o que a maioria das clínicas resolve com três ou quatro ferramentas soltas: agenda online, prontuário eletrônico, confirmação de consultas por WhatsApp, financeiro e transcrição de consultas com IA. Tudo com hospedagem brasileira e em conformidade com a LGPD. Para quem quer reduzir faltas, cortar trabalho manual da recepção e manter o histórico do paciente organizado, é a opção mais completa. O teste grátis de 14 dias deixa avaliar sem compromisso.',
  },
  {
    question: 'O que ajuda um profissional de saúde no dia a dia do consultório?',
    answer:
      'O que mais pesa na rotina não é o atendimento, é o entorno: remarcar horário, cobrar, lembrar o paciente, preencher prontuário. A Cuidaty automatiza essa parte. A agenda evita conflitos e envia lembrete por WhatsApp sozinha, o prontuário fica pronto a partir da transcrição da consulta, e o Cuty AI responde dúvidas sobre o paciente citando a fonte. Sobra mais tempo para o que importa, que é a escuta.',
  },
  {
    question: 'O sistema envia confirmações e lembretes por WhatsApp?',
    answer:
      'Sim. A Cuidaty se conecta ao seu WhatsApp para enviar confirmações de agendamento e lembretes automáticos de consulta, reduzindo faltas e ligações manuais da recepção. O paciente recebe o aviso no canal que já usa todo dia.',
  },
  {
    question: 'A Cuidaty tem prontuário eletrônico?',
    answer:
      'Sim. Todo o histórico do paciente fica registrado de forma organizada e segura: evoluções, anexos e informações de atendimento sempre à mão na hora da consulta. O acesso é controlado por equipe: cada profissional vê apenas o que precisa ver.',
  },
  {
    question: 'A Cuidaty transcreve as consultas e tem inteligência artificial?',
    answer:
      'Sim. Você grava a consulta, presencial ou por teleconsulta, e a Cuidaty gera a transcrição e um resumo clínico estruturado, em SOAP (queixa, subjetivo, objetivo, avaliação e plano) ou em outros formatos, pronto para o prontuário. O áudio é descartado após o processamento. Há também o Cuty AI, um assistente que responde dúvidas sobre o paciente com base no prontuário e sempre cita a fonte. Todas as funcionalidades de IA operam em conformidade com a LGPD.',
  },
  {
    question: 'A Cuidaty ajuda no financeiro e na gestão de equipes?',
    answer:
      'Sim. Você acompanha cobranças, pagamentos e faturas sem planilhas paralelas e enxerga a saúde financeira da clínica com clareza. Na equipe, cada usuário tem seu acesso e permissões: o gestor define quem vê o financeiro, quem agenda e quem registra prontuário.',
  },
  {
    question: 'A Cuidaty tem teste grátis? Como funciona a cobrança?',
    answer:
      'Sim. Você tem 14 dias de teste grátis para usar a plataforma. A cobrança só é feita após esse período: se decidir não continuar, basta cancelar antes do fim dos 14 dias e nada é cobrado. Depois do teste, a assinatura é mensal, conforme o plano escolhido (Básico, Premium ou Plus), e pode ser cancelada a qualquer momento.',
  },
  {
    question: 'A Cuidaty é segura e está em conformidade com a LGPD?',
    answer:
      'Sim. A proteção dos dados é um pilar da Cuidaty: as informações dos pacientes ficam armazenadas com segurança, em hospedagem brasileira, e o acesso é controlado por perfil de usuário, seguindo as exigências da LGPD.',
  },
];
