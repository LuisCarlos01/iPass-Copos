import React from 'react';

interface NavbarProps {
  userName?: string;
  isLoggedIn?: boolean;
}

export function Navbar({ userName, isLoggedIn = false }: NavbarProps) {
  const handleLogoClick = () => {
    // Adiciona um pequeno delay para o usuário ver o efeito visual
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  const handleHelpClick = () => {
    // Redireciona para a página de contato do iPass
    window.open('https://ipass.com.br/fale-conosco', '_blank', 'noopener,noreferrer');
  };

  const handleHomeClick = () => {
    // Redireciona para a tela inicial
    window.location.href = '/';
  };

  // Função para exibir o nome do usuário ou mensagem padrão
  const getDisplayName = () => {
    if (isLoggedIn && userName) {
      return `Olá, ${userName}`;
    }
    return 'Olá, Usuário';
  };
  return (
    <nav className="bg-ipass-primary text-white relative overflow-hidden shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>
      
      <div className="relative px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            className="p-3 cursor-pointer group rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg"
            onClick={handleLogoClick}
            title="Clique para recarregar a página"
          >
            <img 
              src="/ipass_logo_rodape_negativa.png" 
              alt="iPass!" 
              className="h-10 w-auto max-w-[120px] object-contain group-hover:scale-105 group-active:scale-95 transition-transform duration-200"
            />
          </button>
        </div>

        {/* Menu direito */}
        <div className="flex items-center space-x-3">
          <button className="group flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
              <svg className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-white/90 group-hover:text-white font-medium transition-colors hidden sm:inline">{getDisplayName()}</span>
          </button>

          <button 
            className="group flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg"
            onClick={handleHomeClick}
            title="Voltar à página inicial"
          >
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
              <svg className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span className="text-sm text-white/90 group-hover:text-white font-medium transition-colors hidden sm:inline">Início</span>
          </button>

          <button 
            className="group flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg"
            onClick={handleHelpClick}
            title="Fale Conosco - Suporte iPass"
          >
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
              <svg className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-white/90 group-hover:text-white font-medium transition-colors hidden sm:inline">Ajuda</span>
          </button>
        </div>
      </div>
    </div>
    </nav>
  );
} 