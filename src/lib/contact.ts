/**
 * Canal de contato único da Cuidaty. O número estava repetido em seis
 * arquivos com três mensagens diferentes: trocar de número significava caçar
 * ocorrência por ocorrência.
 */
export const WHATSAPP_PHONE = '5538984221855';
export const WHATSAPP_DISPLAY = '(38) 98422-1855';

const DEFAULT_MESSAGE = 'Olá! Vim pelo site da Cuidaty e gostaria de conhecer a plataforma.';

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/** MIDAS: gestão comercial para clínicas, produto à parte com site próprio. */
export const MIDAS_URL = 'https://midas.cuidaty.com/';

/** Pessoa jurídica responsável pela Cuidaty e pelo MIDAS, conforme o cartão CNPJ. */
export const COMPANY_LEGAL_NAME = 'Midas Consultoria em TI Ltda';
export const COMPANY_CNPJ = '70.173.181/0001-33';
