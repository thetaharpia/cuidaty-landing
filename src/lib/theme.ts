/**
 * Tema sazonal "Copa do Mundo" (clima Brasil 🇧🇷).
 *
 * Para ATIVAR o clima da Copa, deixe `true`.
 * Para DESATIVAR e voltar ao visual normal, troque para `false`.
 *
 * Tudo que o tema adiciona (faixa, banner e cores verde-amarelas) vive no
 * componente `src/components/CopaTheme.astro` e é renderizado só quando esta
 * flag está ligada — então este único interruptor controla a página inteira.
 *
 * Opcional: dá pra controlar por variável de ambiente sem editar código,
 * definindo PUBLIC_COPA_THEME="true" | "false" no .env (tem prioridade).
 */
const envFlag = import.meta.env.PUBLIC_COPA_THEME;

export const COPA_THEME: boolean =
  envFlag === undefined ? true : envFlag === 'true' || envFlag === '1';
