import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
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
    <div className="min-h-screen bg-ipass-background flex flex-col">
      {/* Navbar */}
      <Navbar userName={user.name} isLoggedIn={user.isValid} />
      
      {/* Main Content */}
      <main className="relative flex-1 flex items-center justify-center py-12 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-ipass-primary/10 to-primary-600/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ipass-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative mx-auto w-20 h-20 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-ipass-primary/15 to-primary-600/15 rounded-3xl blur-lg"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-ipass-primary to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Selecione seu Copo
          </h1>
          <p className="text-gray-600 text-sm">
            Copo oficial disponível para retirada no evento
          </p>
        </div>

        {/* Status do Usuário */}
        <div className="mb-6 p-4 bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-xl flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-green-800">
              Ingresso Verificado ✓
            </p>
            <p className="text-xs text-green-600 font-medium">
              CPF: {user.cpf} • Você pode adquirir o copo oficial
            </p>
          </div>
        </div>

        {/* Produto Principal */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-gray-200/50 overflow-hidden">
          {/* Header decorativo */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-ipass-primary to-primary-600"></div>
          
          <CardContent className="!p-0">
            {/* Imagem do Produto com efeitos avançados */}
            <div className="relative bg-gradient-to-br from-ipass-primary/8 to-primary-600/8 rounded-t-xl h-96 flex items-center justify-center overflow-hidden group cursor-pointer">
              {/* Background espelhado/reflexo */}
              <div className="absolute inset-0 bg-gradient-to-br from-ipass-primary/15 to-primary-600/15 group-hover:from-ipass-primary/25 group-hover:to-primary-600/25 transition-all duration-700">
                {/* Efeito espelhado */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/30 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-100/40 to-transparent"></div>
              </div>
              
              {/* Círculos decorativos de fundo */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-10 left-10 w-32 h-32 bg-ipass-primary/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-ipass-primary/10 to-primary-600/10 rounded-full blur-3xl"></div>
              </div>
              
              {/* Badge flutuante - MOVIDO PARA CIMA DA IMAGEM */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30">
                <div className="bg-gradient-to-r from-ipass-primary via-primary-500 to-primary-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl backdrop-blur-sm border border-white/20 group-hover:scale-105 group-hover:shadow-3xl transition-all duration-500">
                  <span className="flex items-center space-x-2">
                    <span>🧙‍♂️</span>
                    <span>Edição Limitada STL</span>
                    <span>✨</span>
                  </span>
                </div>
              </div>
              
              {/* Container da imagem com efeitos aprimorados */}
              <div className="relative z-20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 ease-out transform perspective-1000">
                {/* Sombra projetada da imagem */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400/20 to-gray-600/40 rounded-lg blur-xl transform translate-y-8 scale-95 group-hover:scale-105 transition-all duration-700"></div>
                
                {/* Imagem principal */}
                <div className="relative">
                  <img 
                    src="/WhatsApp Image 2025-06-03 at 17.29.50.jpeg" 
                    alt="Copo STL Festival 2025" 
                    className="w-72 h-72 object-contain drop-shadow-2xl group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] transition-all duration-700 filter group-hover:brightness-110 group-hover:contrast-110"
                  />
                  
                  {/* Reflexo da imagem */}
                  <div className="absolute inset-x-0 -bottom-8 h-24 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                    <img 
                      src="/WhatsApp Image 2025-06-03 at 17.29.50.jpeg" 
                      alt="Reflexo do copo" 
                      className="w-72 h-24 object-contain object-top transform scale-y-[-1] filter blur-sm opacity-60"
                      style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)' }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Efeitos de luz dinâmicos */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-ipass-primary to-primary-600 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-r from-primary-400 to-ipass-primary rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-gradient-to-r from-ipass-primary to-primary-500 rounded-full animate-bounce delay-700"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-primary-600 to-ipass-primary rounded-full animate-pulse delay-1000"></div>
              </div>
              
              {/* Brilho de destaque */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
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
        <div className="mt-8 relative">
          {/* Background decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-primary-600/5 rounded-2xl blur-sm"></div>
          
          <div className="relative p-6 bg-gradient-to-br from-blue-500/10 to-primary-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl">
            {/* Ícone informativo */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            
            {/* Título */}
            <h3 className="text-center text-lg font-bold text-gray-800 mb-4">
              📋 Informações Importantes
            </h3>
            
            {/* Lista de informações */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center space-x-3 text-sm text-gray-700">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <span className="font-medium">Retirada no local do evento</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">Apresente o QR Code iPass</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-gray-700">
                <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="font-medium">Pagamento somente via Pix</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-gray-700">
                <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Sujeito à disponibilidade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 