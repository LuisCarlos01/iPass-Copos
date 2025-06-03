// 🎯 Tipos principais da aplicação iPass Copos

export interface User {
  cpf: string;
  name?: string;
  isValid: boolean;
  hasTicket?: boolean;
}

export interface Cup {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

export interface Order {
  id: string;
  userId: string;
  cupId: string;
  status: 'pending' | 'paid' | 'cancelled';
  amount: number;
  pixCode: string;
  qrCode: string;
  createdAt: Date;
  paidAt?: Date;
}

export interface PaymentResponse {
  success: boolean;
  pixCode: string;
  qrCode: string;
  orderId: string;
  amount: number;
  message?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Estados da aplicação
export type AppStep = 'login' | 'cup-selection' | 'payment' | 'confirmation';

export interface AppState {
  step: AppStep;
  user: User | null;
  selectedCup: Cup | null;
  order: Order | null;
  loading: boolean;
  error: string | null;
}

// Formulários
export interface LoginFormData {
  cpf: string;
}

export interface CupSelectionData {
  cupId: string;
  quantity: number;
}

// Configurações da aplicação
export interface AppConfig {
  apiBaseUrl: string;
  pixTimeout: number;
  maxRetries: number;
  iPassAppUrl: string;
} 