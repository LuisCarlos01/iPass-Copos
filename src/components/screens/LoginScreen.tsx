import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/ui/Navbar';
import { StepNavigation } from '@/components/ui/StepNavigation';
import { Footer } from '@/components/ui/Footer';
import { validateCpf, maskCpf, cleanCpf } from '@/utils/cpf';
import { LoginFormData, User } from '@/types';

interface LoginScreenProps {
  onLogin: (user: User) => void;
  loading?: boolean;
}

export function LoginScreen({ onLogin, loading }: LoginScreenProps) {
  const [cpfValue, setCpfValue] = useState('');
  
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
    setValue,
  } = useForm<LoginFormData>();

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const masked = maskCpf(value);
    setCpfValue(masked);
    setValue('cpf', masked);
    
    // Limpa erros quando o usuário começa a digitar
    if (errors.cpf) {
      clearErrors('cpf');
    }
  };

  const onSubmit = async (_data: LoginFormData) => {
    const cleanedCpf = cleanCpf(cpfValue);
    
    // Validação do CPF
    if (!validateCpf(cleanedCpf)) {
      setError('cpf', {
        type: 'manual',
        message: 'CPF inválido. Verifique os números digitados.',
      });
      return;
    }

    try {
      // Simula verificação no backend (será implementado pela Scooder)
      // Por enquanto, aceita qualquer CPF válido
      const user: User = {
        cpf: cleanedCpf,
        isValid: true,
        hasTicket: true, // Simula que o usuário tem ingresso
      };

      onLogin(user);
    } catch {
      setError('cpf', {
        type: 'manual',
        message: 'Erro ao verificar CPF. Tente novamente.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-ipass-background flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Step Navigation */}
      <StepNavigation currentStep="login" />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Formulário de Login */}
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Entre com seu CPF
                </h1>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Input
                    name="cpf"
                    label="CPF"
                    placeholder="000.000.000-00"
                    value={cpfValue}
                    onChange={handleCpfChange}
                    error={errors.cpf?.message}
                    maxLength={14}
                    inputMode="numeric"
                    autoComplete="off"
                    autoFocus
                    className="text-center text-lg"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting || loading}
                  className="w-full bg-ipass-primary hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {isSubmitting || loading ? 'Verificando...' : 'Entrar'}
                </Button>
              </form>

              {/* Termos */}
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>
                  Ao entrar, você concorda com nossos{' '}
                  <a href="#" className="text-ipass-primary hover:underline">
                    Termos de Serviço
                  </a>{' '}
                  e{' '}
                  <a href="#" className="text-ipass-primary hover:underline">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </div>

              {/* Debug info para desenvolvimento */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg text-xs">
                  <p><strong>Debug:</strong></p>
                  <p>CPF digitado: {cpfValue}</p>
                  <p>CPF limpo: {cleanCpf(cpfValue)}</p>
                  <p>Válido: {validateCpf(cleanCpf(cpfValue)) ? 'Sim' : 'Não'}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* CPFs de teste para desenvolvimento */}
          {process.env.NODE_ENV === 'development' && (
            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-3">
                  🧪 CPFs para teste:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button 
                    onClick={() => setCpfValue('123.456.789-09')}
                    className="text-left text-blue-700 hover:text-blue-900 hover:underline p-1 rounded transition-colors"
                  >
                    123.456.789-09
                  </button>
                  <button 
                    onClick={() => setCpfValue('987.654.321-00')}
                    className="text-left text-blue-700 hover:text-blue-900 hover:underline p-1 rounded transition-colors"
                  >
                    987.654.321-00
                  </button>
                  <button 
                    onClick={() => setCpfValue('111.444.777-35')}
                    className="text-left text-blue-700 hover:text-blue-900 hover:underline p-1 rounded transition-colors"
                  >
                    111.444.777-35
                  </button>
                  <button 
                    onClick={() => setCpfValue('000.000.001-91')}
                    className="text-left text-blue-700 hover:text-blue-900 hover:underline p-1 rounded transition-colors"
                  >
                    000.000.001-91
                  </button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 