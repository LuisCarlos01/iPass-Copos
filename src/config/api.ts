// 🌐 Configurações da API

export const API_CONFIG = {
  BASE_URL: 'http://localhost:3000',
  EVENT_ID: '674f5d2c12fc50c91aceb0bb',
  TIMEOUT: 10000, // 10 segundos
};


export const API_ENDPOINTS = {
  VALIDATE_USER: (cpf: string) => 
    `${API_CONFIG.BASE_URL}/v1/events/${API_CONFIG.EVENT_ID}/owners/${cpf}`,
};


export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};


export const RETRY_CONFIG = {
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000, // 1 segundo
}; 