import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes CSS de forma inteligente
 * Resolve conflitos do Tailwind automaticamente
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 