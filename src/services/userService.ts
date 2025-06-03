import { User } from '@/types';

// 🔐 Simulação de banco de dados de usuários
const mockUsers: Record<string, { name: string; hasTicket: boolean }> = {
  '12345678909': { name: 'João Silva', hasTicket: true },
  '98765432100': { name: 'Maria Santos', hasTicket: true },
  '11144477735': { name: 'Pedro Oliveira', hasTicket: true },
  '00000000191': { name: 'Ana Costa', hasTicket: true },
  // Adicione mais CPFs conforme necessário
};

// 🎯 Simula validação de CPF no banco de dados
export async function validateUserByCpf(cpf: string): Promise<User> {
  // Simula delay da requisição à API
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Remove formatação do CPF para comparação
  const cleanCpf = cpf.replace(/\D/g, '');
  
  // Verifica se o usuário existe no "banco de dados"
  const userData = mockUsers[cleanCpf];
  
  if (userData) {
    return {
      cpf,
      name: userData.name,
      isValid: true,
      hasTicket: userData.hasTicket,
    };
  }
  
  // Se não encontrou, retorna usuário inválido
  throw new Error('CPF não encontrado ou não possui ingresso válido para o STL Festival 2025');
}

// 🔄 Simula logout do usuário
export function logoutUser(): void {
  // Aqui você pode adicionar lógica de logout
  // Como limpar tokens, cookies, etc.
  console.log('Usuário deslogado');
}

// 📊 Simula busca de dados adicionais do usuário
export async function getUserProfile(cpf: string): Promise<User | null> {
  try {
    return await validateUserByCpf(cpf);
  } catch {
    return null;
  }
} 