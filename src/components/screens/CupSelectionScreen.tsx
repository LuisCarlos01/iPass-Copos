import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
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
  description: '',
  price: 20.00,
  image: '/images/stl-cup-2025.jpg', // Placeholder
  available: true,
};

// Array de imagens para o carrossel
const cupImages = [
  '/WhatsApp Image 2025-06-03 at 17.29.50.jpeg',
  '/copoex.jpeg',
  '/copos de exemplo.jpeg',
];

export function CupSelectionScreen({ user, onSelectCup, onBack, loading }: CupSelectionScreenProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isSelecting, setIsSelecting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cupImages.length);
    }, 3000); // Troca imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

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
        {/* Produto Principal */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-gray-200/50 overflow-hidden">
          {/* Header decorativo */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-ipass-primary to-primary-600"></div>
          
          <CardContent className="!p-0">
            {/* Imagem do Produto com efeitos premium */}
            <div className="relative bg-gradient-to-br from-ipass-primary/8 to-primary-600/8 h-64 md:h-80 flex items-center justify-center overflow-hidden group cursor-pointer rounded-t-3xl">
              {/* Background fluido orgânico */}
              <div className="absolute inset-0 bg-gradient-to-br from-ipass-primary/15 to-primary-600/15 group-hover:from-ipass-primary/25 group-hover:to-primary-600/25 transition-all duration-700">
                {/* Formas orgânicas de fundo */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-ipass-primary/20 rounded-full blur-3xl transform rotate-45 group-hover:rotate-90 transition-transform duration-[2000ms] ease-out"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-24 bg-primary-600/15 rounded-full blur-2xl transform -rotate-12 group-hover:rotate-12 transition-transform duration-[1500ms] ease-out"></div>
                    <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-ipass-primary/25 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
                  </div>
                </div>
                
                {/* Gradiente de reflexo orgânico */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/20 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
              </div>
              
              {/* Badge premium flutuante */}
              <div className="absolute top-3 md:top-6 left-1/2 transform -translate-x-1/2 z-30 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-gradient-to-r from-ipass-primary via-primary-500 to-primary-600 text-white px-3 py-1.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold shadow-2xl backdrop-blur-sm border border-white/30 group-hover:scale-110 group-hover:shadow-3xl group-hover:border-white/50 transition-all duration-500">
                  <span className="flex items-center space-x-1 md:space-x-2">
                    <span className="animate-bounce text-xs">🧙‍♂️</span>
                    <span className="hidden sm:inline">Edição Limitada STL</span>
                    <span className="sm:hidden">Ed. Limitada</span>
                    <span className="animate-pulse text-xs">✨</span>
                  </span>
                </div>
              </div>
              
              {/* Container da imagem principal aprimorado */}
              <div className="relative z-20 group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 ease-out">
                {/* Aura luminosa da imagem */}
                <div className="absolute -inset-8 bg-gradient-to-r from-ipass-primary/20 via-primary-500/20 to-primary-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Moldura orgânica da imagem */}
                <div className="relative p-2 md:p-4">
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-2xl group-hover:shadow-3xl group-hover:bg-white/90 transition-all duration-700">
                    {/* Borda gradiente interna */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ipass-primary/20 via-transparent to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Carrossel de imagens */}
                    <div className="relative group overflow-hidden">
                      <div className="relative w-48 h-48 md:w-56 md:h-56">
                        {cupImages.map((image, index) => (
                          <Image
                            key={index}
                            src={image}
                            alt={`Copo STL Festival 2025 - Imagem ${index + 1}`}
                            width={224}
                            height={224}
                            className={`absolute inset-0 w-full h-full object-contain rounded-2xl shadow-xl transition-all duration-1000 filter group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110 ${
                              index === currentImageIndex 
                                ? 'opacity-100 scale-100 rotate-0' 
                                : 'opacity-0 scale-95 rotate-2'
                            }`}
                            priority={index === 0}
                          />
                        ))}
                      </div>
                      
                      {/* Indicadores do carrossel */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {cupImages.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex 
                                ? 'bg-ipass-primary scale-125' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Overlay suave */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* Reflexo premium da imagem (carrossel) */}
                <div className="absolute inset-x-0 -bottom-4 h-16 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                  <div className="relative w-full h-full overflow-hidden rounded-b-3xl">
                    {cupImages.map((image, index) => (
                      <Image 
                        key={index}
                        src={image} 
                        alt={`Reflexo do copo - Imagem ${index + 1}`}
                        width={224}
                        height={128}
                        className={`absolute inset-0 w-full h-32 object-contain object-top transform scale-y-[-1] filter blur-sm opacity-40 transition-all duration-1000 ${
                          index === currentImageIndex ? 'opacity-40' : 'opacity-0'
                        }`}
                        style={{ 
                          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 80%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 80%)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Partículas flutuantes premium */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ipass-primary/60 rounded-full animate-float opacity-50 group-hover:opacity-100"></div>
                <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary-500/60 rounded-full animate-float-delay opacity-50 group-hover:opacity-100" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-primary-600/60 rounded-full animate-float-slow opacity-50 group-hover:opacity-100"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-ipass-primary/80 rounded-full animate-float-delay opacity-50 group-hover:opacity-100" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Brilho dinâmico premium */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-out"></div>
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="p-6">
              <CardHeader className="!mb-4 !p-0">
                <CardTitle className="text-xl">{availableCup.name}</CardTitle>
              </CardHeader>

              {/* Preço */}
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-2xl font-bold text-primary-600">
                  {formatCurrency(availableCup.price)}
                </span>
                <span className="text-xs text-gray-400">por unidade</span>
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
              </div>

              {/* Total - Sempre visível com destaque */}
              <div className="bg-gradient-to-r from-ipass-primary/10 to-primary-600/10 border-2 border-ipass-primary/20 rounded-xl p-5 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold text-gray-800">
                    {selectedQuantity}x {availableCup.name}
                  </span>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
              </div>

            </div>
          </CardContent>

          <CardFooter className="flex-col space-y-3 pt-3">
            <Button
              onClick={handleSelectCup}
              loading={isSelecting || loading}
              size="lg"
              className="w-full"
            >
              {isSelecting || loading ? 'Selecionando...' : 'Finalizar compra'}
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
      </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 