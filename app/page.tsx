'use client';

import { useApp } from '@/hooks/useApp';
import { LoginScreen } from '@/components/screens/LoginScreen';
import { CupSelectionScreen } from '@/components/screens/CupSelectionScreen';
// import { PaymentScreen } from '@/components/screens/PaymentScreen';
// import { ConfirmationScreen } from '@/components/screens/ConfirmationScreen';

export default function HomePage() {
  const app = useApp();

  // Renderização condicional baseada no step atual
  const renderScreen = () => {
    switch (app.step) {
      case 'login':
        return (
          <LoginScreen
            onLogin={app.loginUser}
            loading={app.loading}
          />
        );

      case 'cup-selection':
        return (
          <CupSelectionScreen
            user={app.user!}
            onSelectCup={app.selectCup}
            onBack={app.goToLogin}
            loading={app.loading}
          />
        );

      case 'payment':
        return (
          <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tela de Pagamento
              </h2>
              <p className="text-gray-600 mb-6">
                Em desenvolvimento...
              </p>
              <button
                onClick={app.goToCupSelection}
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Voltar
              </button>
            </div>
          </div>
        );

      case 'confirmation':
        return (
          <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Confirmação
              </h2>
              <p className="text-gray-600 mb-6">
                Em desenvolvimento...
              </p>
              <button
                onClick={app.reset}
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Reiniciar
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Erro
              </h2>
              <p className="text-gray-600 mb-6">
                Tela não encontrada
              </p>
              <button
                onClick={app.reset}
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Reiniciar
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="relative">
      {/* Exibir erros globais se houver */}
      {app.error && (
        <div className="fixed top-4 right-4 z-50 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium">Erro</p>
              <p className="text-sm text-red-700 mt-1">{app.error}</p>
            </div>
            <button
              onClick={() => app.setError(null)}
              className="ml-auto flex-shrink-0"
            >
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Renderizar a tela atual */}
      {renderScreen()}

      {/* Debug info (remover em produção) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white px-3 py-2 rounded text-xs font-mono">
          Step: {app.step} | User: {app.user?.cpf || 'none'} | Cup: {app.selectedCup?.name || 'none'}
        </div>
      )}
    </main>
  );
} 