// 💰 Utilitários para formatação de moeda

/**
 * Formata valor em reais (R$ 0,00)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata valor sem símbolo da moeda (0,00)
 */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Converte centavos para reais
 */
export function centavosToReais(centavos: number): number {
  return centavos / 100;
}

/**
 * Converte reais para centavos
 */
export function reaisToCentavos(reais: number): number {
  return Math.round(reais * 100);
} 