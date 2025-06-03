import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/utils/currency';
import { Cup, User } from '@/types';

interface CupSelectionScreenProps {
  user: User;
  onSelectCup: (cup: Cup) => void;
  onBack: () => void;
  loading?: boolean;
}

// Dados mockados do copo (será integrado com API da Scooder)
const availableCup: Cup = {
  id: 'stl-2025-official-cup',
  name: 'Copo STL Festival 2025',
  description: 'Copo oficial do STL Festival 2025 - Edição Limitada',
  price: 20.00,
  image: '/images/stl-cup-2025.jpg', // Placeholder
  available: true,
};

export function CupSelectionScreen({ user, onSelectCup, onBack, loading }: CupSelectionScreenProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isSelecting, setIsSelecting] = useState(false);

  const handleSelectCup = async () => {
    setIsSelecting(true);
    
    try {
      // Simula delay de seleção
      await new Promise(resolve => setTimeout(resolve, 500));
      onSelectCup(availableCup);
    } finally {
      setIsSelecting(false);
    }
  };

  const totalPrice = availableCup.price * selectedQuantity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-600 text-white rounded-full mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Selecione seu Copo
          </h1>
          <p className="text-gray-600">
            Copo oficial disponível para retirada no evento
          </p>
        </div>

        {/* Status do Usuário */}
        <Card className="mb-6 bg-green-50 border-green-200">
          <CardContent className="flex items-center space-x-3 !p-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-green-800">
                Ingresso Verificado ✓
              </p>
              <p className="text-xs text-green-600">
                CPF: {user.cpf} • Você pode adquirir o copo oficial
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Produto Principal */}
        <Card variant="elevated" className="animate-slide-up">
          <CardContent className="!p-0">
            {/* Imagem do Produto */}
            <div className="relative bg-gradient-to-br from-accent-100 to-accent-200 rounded-t-xl h-64 flex items-center justify-center">
              <div className="text-center">
                {/* Placeholder para imagem do copo */}
                <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                  <svg className="w-16 h-16 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="inline-block bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Edição Limitada
                </div>
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="p-6">
              <CardHeader className="!mb-4 !p-0">
                <CardTitle className="text-xl">{availableCup.name}</CardTitle>
                <CardDescription className="text-base">
                  {availableCup.description}
                </CardDescription>
              </CardHeader>

              {/* Preço */}
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-3xl font-bold text-primary-600">
                  {formatCurrency(availableCup.price)}
                </span>
                <span className="text-sm text-gray-500">por unidade</span>
              </div>

              {/* Seletor de Quantidade */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantidade
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                    disabled={selectedQuantity <= 1}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </Button>
                  
                  <span className="text-lg font-semibold w-12 text-center">
                    {selectedQuantity}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedQuantity(Math.min(5, selectedQuantity + 1))}
                    disabled={selectedQuantity >= 5}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Máximo 5 copos por CPF
                </p>
              </div>

              {/* Total */}
              {selectedQuantity > 1 && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {selectedQuantity}x {availableCup.name}
                    </span>
                    <span className="text-lg font-semibold text-primary-600">
                      {formatCurrency(totalPrice)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex-col space-y-3">
            <Button
              onClick={handleSelectCup}
              loading={isSelecting || loading}
              size="lg"
              className="w-full"
            >
              {isSelecting || loading ? 'Selecionando...' : `Finalizar compra com ${formatCurrency(totalPrice)}`}
            </Button>
            
            <Button
              variant="ghost"
              onClick={onBack}
              disabled={isSelecting || loading}
              className="w-full"
            >
              Voltar
            </Button>
          </CardFooter>
        </Card>

        {/* Informações Importantes */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-800 mb-2">
            📋 Informações Importantes
          </h3>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• O copo será retirado no local do evento</li>
            <li>• Apresente o QR Code do iPass na hora da retirada</li>
            <li>• Pagamento somente via Pix</li>
            <li>• Edição limitada - sujeito à disponibilidade</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 