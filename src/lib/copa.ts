/**
 * Conteúdo sazonal de SEO da Copa do Mundo (clima Brasil 🇧🇷).
 *
 * Atrelado à MESMA feature flag do tema (`COPA_THEME`, ver src/lib/theme.ts):
 * quando ela está ligada, a home ganha uma seção indexável que conecta a
 * cobertura da Seleção ao tema de saúde mental e psicologia do esporte
 * (público da Cuidaty), e as keywords/FAQs da Copa entram no <head>.
 *
 * Para desativar tudo (tema + SEO da Copa), basta `COPA_THEME = false`.
 */
import { COPA_THEME } from './theme';

export { COPA_THEME };

/** Keywords da Copa, anexadas às keywords da home quando a flag está ligada. */
export const copaKeywords = [
  'psicologia do esporte copa do mundo',
  'saúde mental atletas copa do mundo',
  'saúde mental seleção brasileira',
  'psicólogo do esporte seleção brasileira',
  'médicos da seleção brasileira',
  'raphinha lesão psicológico',
  'paquetá lesão recuperação',
  'richarlison depressão futebol',
  'vinicius junior saúde mental',
  'neymar lesão recuperação psicológica',
  'apoio psicológico jogadores copa',
  'preparação mental copa do mundo',
];

/** Subtítulo/lead da seção de SEO da Copa. */
export const copaSeoIntro =
  'A Copa do Mundo escancara o que a Cuidaty defende todos os dias: por trás de cada atleta há um lado humano que precisa de cuidado. Médicos e psicólogos do esporte são peças cruciais na comissão técnica da Seleção, do tratamento de lesões à preparação mental para a pressão de vestir a camisa do Brasil.';

/**
 * Tópicos que ligam nomes da Seleção a temas de saúde mental e psicologia.
 * Conteúdo informativo e respeitoso, alinhado ao público da Cuidaty.
 */
export const copaTopics = [
  {
    player: 'Raphinha',
    heading: 'Raphinha e a pressão psicológica de ser titular',
    text: 'Decidir jogos pela Seleção cobra um preço emocional. Quando uma lesão tira o atleta de campo, o psicológico é tão afetado quanto o físico, e o acompanhamento psicológico faz parte da recuperação completa.',
  },
  {
    player: 'Lucas Paquetá',
    heading: 'Paquetá: lesão, recuperação e cabeça no lugar',
    text: 'Sair machucado no meio do jogo abala qualquer atleta. A psicologia do esporte ajuda na recuperação da lesão e na confiança para voltar a campo sem medo de se machucar de novo.',
  },
  {
    player: 'Richarlison',
    heading: 'Richarlison e a coragem de falar sobre depressão',
    text: 'Ao expor publicamente sua luta contra a depressão, Richarlison mostrou que saúde mental não é fraqueza. Falar sobre o assunto salva carreiras e vidas, dentro e fora dos gramados.',
  },
  {
    player: 'Vinícius Júnior',
    heading: 'Vinícius Júnior e a saúde mental diante da pressão',
    text: 'Lidar com cobrança e episódios de racismo exige equilíbrio emocional. O suporte psicológico é o que sustenta o atleta para render no mais alto nível mantendo a saúde mental.',
  },
  {
    player: 'Comissão técnica',
    heading: 'Médicos e psicólogos: papel crucial na Seleção',
    text: 'A preparação para a Copa do Mundo não é só tática e física. Médicos cuidam do corpo e psicólogos do esporte cuidam da mente, e juntos fazem a diferença no resultado em campo.',
  },
];

/** FAQs da Copa, anexadas ao FAQPage (JSON-LD) e visíveis quando a flag liga. */
export const copaFaqs = [
  {
    question: 'Qual a importância da psicologia do esporte na Copa do Mundo?',
    answer:
      'A psicologia do esporte ajuda os atletas a lidar com a pressão, a ansiedade e a recuperação de lesões. Na Seleção Brasileira, psicólogos do esporte trabalham ao lado dos médicos para preparar a cabeça dos jogadores para a Copa do Mundo, tão decisiva quanto o preparo físico.',
  },
  {
    question: 'Por que lesões como as de Raphinha e Paquetá afetam o psicológico do atleta?',
    answer:
      'Quando um jogador como Raphinha ou Paquetá sai machucado, além da dor física vem o medo de perder espaço e de não se recuperar a tempo. Esse impacto psicológico é tratado com acompanhamento profissional, parte essencial da recuperação de qualquer atleta.',
  },
];
