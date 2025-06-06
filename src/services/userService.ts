import { User } from '@/types';
import { ValidateUserApiResponse } from '@/types/api';
import { API_ENDPOINTS, DEFAULT_HEADERS, RETRY_CONFIG } from '@/config/api';

// 🔐 Simulação de banco de dados de usuários (mantido como fallback)
const mockUsers: Record<string, { name: string; hasTicket: boolean }> = {
  '12345678909': { name: 'João Silva', hasTicket: true },
  '98765432100': { name: 'Maria Santos', hasTicket: true },
  '11144477735': { name: 'Pedro Oliveira', hasTicket: true },
  '00000000191': { name: 'Ana Costa', hasTicket: true },
  // Adicione mais CPFs conforme necessário
};

async function fetchWithRetry(url: string, options: RequestInit, retries = RETRY_CONFIG.MAX_RETRIES): Promise<Response> {
  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Tentativa falhou, tentando novamente em ${RETRY_CONFIG.RETRY_DELAY}ms...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_CONFIG.RETRY_DELAY));
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}


export async function validateUserByCpf(cpf: string): Promise<User> {

  const cleanCpf = cpf.replace(/\D/g, '');
  
  try {
    
    const response = await fetchWithRetry(API_ENDPOINTS.VALIDATE_USER(cleanCpf), {
      method: 'POST',
      headers: DEFAULT_HEADERS,

      body: JSON.stringify({}),
    });

      
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('CPF não possui ingresso válido para o STL Festival 2025. Produtos exclusivos para portadores de ingresso.');
      } else if (response.status === 404) {
        throw new Error('CPF não encontrado. Verifique se você possui ingresso para o STL Festival 2025.');
      } else if (response.status === 500) {
        throw new Error('Erro interno do servidor. Tente novamente em alguns minutos.');
      } else {
        throw new Error(`Erro ao validar CPF. Código: ${response.status}. Tente novamente.`);
      }
    }

    const data: ValidateUserApiResponse = await response.json();

    if (data.success && data.data.hasActiveTicket) {

      return {
        cpf,
        name: `Usuário ${cleanCpf}`,
        isValid: true,
        hasTicket: true,
      };
    } else {
      throw new Error(data.message || 'CPF não possui ingresso ativo para o evento. Acesso negado - produtos exclusivos para portadores de ingresso.');
    }
  } catch (error) {
    console.error('Erro na validação do CPF via API:', error);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.warn('API não disponível, usando dados mock para desenvolvimento');
      return validateUserByCpfMock(cpf);
    }
    
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error('Erro interno do servidor. Tente novamente mais tarde.');
  }
}


async function validateUserByCpfMock(cpf: string): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const cleanCpf = cpf.replace(/\D/g, '');
  
  const userData = mockUsers[cleanCpf];
  
  if (userData) {
    return {
      cpf,
      name: userData.name,
      isValid: true,
      hasTicket: userData.hasTicket,
    };
  }
  
  throw new Error('CPF não encontrado ou não possui ingresso válido para o STL Festival 2025');
}


export function logoutUser(): void {
  // Aqui você pode adicionar lógica de logout
  // Como limpar tokens, cookies, etc.
  
  // TODO: Implementar lógica de logout em produção
  // - Limpar localStorage/sessionStorage
  // - Invalidar tokens JWT
  // - Redirecionar para página inicial
}

// 📊 Simula busca de dados adicionais do usuário
export async function getUserProfile(cpf: string): Promise<User | null> {
  try {
    return await validateUserByCpf(cpf);
  } catch {
    return null;
  }
} 