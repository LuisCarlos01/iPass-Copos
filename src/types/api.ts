
export interface ValidateUserApiResponse {
  success: boolean;
  message: string;
  data: {
    isOwner: boolean;
    hasActiveTicket: boolean;
  };
}


export type ValidationStatus = 'authorized' | 'unauthorized' | 'error';

export interface ValidationResult {
  status: ValidationStatus;
  message: string;
  hasActiveTicket: boolean;
  isOwner: boolean;
}

export interface ApiRequestConfig {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: string | FormData | URLSearchParams;
  timeout?: number;
  retries?: number;
}

export interface ApiResponse<T = Record<string, unknown>> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
} 