import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { validateCpf, maskCpf, cleanCpf } from '@/utils/cpf';
import { validateUserByCpf } from '@/services/userService';
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
      // Valida CPF no banco de dados e retorna dados do usuário incluindo nome
      const user = await validateUserByCpf(cpfValue);
      onLogin(user);
    } catch (error) {
      setError('cpf', {
        type: 'manual',
        message: error instanceof Error ? error.message : 'Erro ao verificar CPF. Tente novamente.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-ipass-background flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative flex-1 flex items-center justify-center py-12 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-ipass-primary/10 to-primary-600/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ipass-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full max-w-md">
          {/* Formulário de Login */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-gray-200/50 overflow-hidden">
            {/* Header decorativo */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-ipass-primary to-primary-600"></div>
            
            <CardContent className="relative p-8">
              <div className="text-center mb-8">
                {/* Logo principal iPass */}
                <div className="relative mx-auto w-28 h-28 mb-8 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-ipass-primary/15 to-primary-600/15 rounded-3xl blur-lg group-hover:blur-xl group-hover:from-ipass-primary/25 group-hover:to-primary-600/25 transition-all duration-500"></div>
                  <div className="relative w-28 h-28 flex items-center justify-center p-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-out">
                    <Image 
                      src="/Ipass_logo.png" 
                      alt="iPass Logo" 
                      width={112}
                      height={112}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
                      priority
                    />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Bem-vindo
                </h1>
                <p className="text-gray-600 text-sm">
                  Entre com seu CPF para continuar
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="cpf" className="block text-sm font-semibold text-gray-700 mb-4">
                    <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50/80 backdrop-blur-sm border border-gray-200/50">
                      <div className="w-8 h-8 bg-ipass-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-ipass-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium">Digite seu CPF</span>
                    </div>
                  </label>
                  
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-ipass-primary/20 to-primary-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-60 group-focus-within:opacity-60 transition-all duration-500"></div>
                    
                    {/* Input container com backdrop blur */}
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-xl border-2 border-gray-200/80 hover:border-ipass-primary/50 focus-within:border-ipass-primary transition-all duration-300 shadow-lg hover:shadow-xl focus-within:shadow-xl">
                      <input
                        id="cpf"
                    name="cpf"
                        type="text"
                    placeholder="000.000.000-00"
                    value={cpfValue}
                    onChange={handleCpfChange}
                    maxLength={14}
                    inputMode="numeric"
                    autoComplete="off"
                    autoFocus
                        className="w-full text-center text-xl font-mono tracking-wider py-5 px-12 rounded-xl bg-transparent placeholder:text-gray-400 focus:outline-none focus:ring-0 border-0"
                  />
                      
                      {/* Left icon */}
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <div className="w-8 h-8 bg-ipass-primary/10 rounded-lg flex items-center justify-center group-focus-within:bg-ipass-primary/20 transition-colors duration-300">
                          <svg className="h-4 w-4 text-gray-400 group-focus-within:text-ipass-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Right validation icon */}
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300">
                          {cpfValue && validateCpf(cleanCpf(cpfValue)) && (
                            <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {errors.cpf ? (
                    <div className="mt-3 p-3 bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-xl flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm text-red-700 font-medium">{errors.cpf.message}</p>
                    </div>
                  ) : (
                    <div className="mt-3 p-3 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-xl flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs text-blue-700 font-medium">Apenas números são necessários</p>
                    </div>
                  )}
                </div>

                {/* Informações sobre o STL Festival */}
                <div className="mt-6 relative">
                  {/* Background decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ipass-primary/5 to-primary-600/5 rounded-2xl blur-sm"></div>
                  
                  <div className="relative p-6 bg-gradient-to-br from-ipass-primary/10 to-primary-600/10 backdrop-blur-sm border border-ipass-primary/20 rounded-2xl">
                    
                    {/* Título */}
                    <h3 className="text-center text-lg font-bold text-gray-800 mb-4">
                      🧙‍♂️ STL Festival 2025
                    </h3>
                    
                    {/* Texto informativo */}
                    <p className="text-center text-gray-700 text-sm leading-relaxed font-medium">
                      Compre seu copo agora de forma antecipada e retire com facilidade dentro do{' '}
                      <span className="text-ipass-primary font-semibold">STL Festival</span>, em nosso{' '}
                      <span className="text-primary-600 font-semibold">stand exclusivo</span>!
                    </p>
                    
                    {/* Ícones decorativos */}
                    <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-ipass-primary/20">
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">Compra Antecipada</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="font-medium">Retirada no Local</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting || loading}
                  className="w-full bg-gradient-to-r from-ipass-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:from-primary-600 focus:to-primary-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-0.5 focus:-translate-y-0.5 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-ipass-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Entrar</span>
                  </span>
                </Button>
              </form>

              {/* Termos */}
              <div className="mt-8 p-4 bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-xl">
                <p className="text-center text-sm text-gray-600 leading-relaxed">
                  Ao entrar, você concorda com nossos{' '}
                  <a href="https://ipass.com.br/termos-de-uso" target="_blank" rel="noopener,noreferrer" className="text-ipass-primary hover:text-primary-600 font-medium hover:underline transition-colors duration-200">
                    Termos de Serviço
                  </a>{' '}
                  e{' '}
                  <a href="https://ipass.com.br/politica-de-privacidade" target="_blank" rel="noopener,noreferrer" className="text-ipass-primary hover:text-primary-600 font-medium hover:underline transition-colors duration-200">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </div>


            </CardContent>
          </Card>


        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 