/**
 * Canal de contato único da Cuidaty. O número estava repetido em seis
 * arquivos com três mensagens diferentes: trocar de número significava caçar
 * ocorrência por ocorrência.
 */
export const WHATSAPP_PHONE = '559691003520';
export const WHATSAPP_DISPLAY = '(96) 9100-3520';

const DEFAULT_MESSAGE = 'Olá! Vim pelo site da Cuidaty e gostaria de conhecer a plataforma.';

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
