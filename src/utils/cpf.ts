// 🔐 Utilitários para validação e formatação de CPF

/**
 * Remove caracteres não numéricos do CPF
 */
export function cleanCpf(cpf: string): string {
  return cpf.replace(/\D/g, '');
}

/**
 * Formata CPF para exibição (000.000.000-00)
 */
export function formatCpf(cpf: string): string {
  const cleaned = cleanCpf(cpf);
  
  if (cleaned.length !== 11) {
    return cpf;
  }
  
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Valida CPF usando algoritmo oficial
 */
export function validateCpf(cpf: string): boolean {
  const cleaned = cleanCpf(cpf);
  
  // Verifica se tem 11 dígitos
  if (cleaned.length !== 11) {
    return false;
  }
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cleaned)) {
    return false;
  }
  
  // Validação do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned.charAt(i)) * (10 - i);
  }
  
  let digit1 = (sum * 10) % 11;
  if (digit1 === 10) digit1 = 0;
  
  if (digit1 !== parseInt(cleaned.charAt(9))) {
    return false;
  }
  
  // Validação do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleaned.charAt(i)) * (11 - i);
  }
  
  let digit2 = (sum * 10) % 11;
  if (digit2 === 10) digit2 = 0;
  
  return digit2 === parseInt(cleaned.charAt(10));
}

/**
 * Máscara de input para CPF
 */
export function maskCpf(value: string): string {
  const cleaned = cleanCpf(value);
  
  if (cleaned.length <= 3) {
    return cleaned;
  }
  
  if (cleaned.length <= 6) {
    return cleaned.replace(/(\d{3})(\d{0,3})/, '$1.$2');
  }
  
  if (cleaned.length <= 9) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
  }
  
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
}

/**
 * Valida e formata CPF de uma vez
 */
export function processCpf(cpf: string): {
  isValid: boolean;
  formatted: string;
  cleaned: string;
} {
  const cleaned = cleanCpf(cpf);
  const isValid = validateCpf(cleaned);
  const formatted = isValid ? formatCpf(cleaned) : cpf;
  
  return {
    isValid,
    formatted,
    cleaned,
  };
} 