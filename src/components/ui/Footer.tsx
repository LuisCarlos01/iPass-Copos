import React from 'react';
import Image from 'next/image';

export function Footer() {
  // Handlers para redes sociais
  const handleSocialClick = (platform: string) => {
    const socialLinks = {
      instagram: 'https://www.instagram.com/ipassbrasil/',
      linkedin: 'https://www.linkedin.com/company/ipass-brasil/',
    };
    
    window.open(socialLinks[platform as keyof typeof socialLinks], '_blank', 'noopener,noreferrer');
  };

  // Handlers para links úteis
  const handleLinkClick = (section: string) => {
    const sectionRoutes = {
      'quem-somos': 'https://ipass.com.br/quem-somos',
      'termos': 'https://ipass.com.br/termos-de-uso',
      'contato': 'https://ipass.com.br/fale-conosco',
      'privacidade': 'https://ipass.com.br/politica-de-privacidade'
    };
    
    // Abre links em nova aba para não perder a aplicação atual
    const route = sectionRoutes[section as keyof typeof sectionRoutes];
    if (route) {
      window.open(route, '_blank', 'noopener,noreferrer');
    }
  };

  // Handlers para contato
  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@ipass.com.br?subject=Contato via Site iPass';
  };

  return (
    <footer className="bg-ipass-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre o iPass */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/ipass_logo_rodape_negativa.png" 
                alt="iPass Logo" 
                width={120}
                height={64}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
            Plataforma de gestão de eventos

            </p>
            
            {/* Redes Sociais */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white/90">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-3">
                {/* Instagram */}
                <button 
                  onClick={() => handleSocialClick('instagram')}
                  className="group flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  title="Seguir no Instagram"
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                </button>
                
                {/* LinkedIn */}
                <button 
                  onClick={() => handleSocialClick('linkedin')}
                  className="group flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  title="Conectar no LinkedIn"
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Links úteis */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Links úteis</h3>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={() => handleLinkClick('quem-somos')}
                className="group flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 w-full text-left"
              >
                <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <span className="group-hover:font-medium transition-all duration-300">Quem Somos</span>
              </button>
              
              <button 
                onClick={() => handleLinkClick('termos')}
                className="group flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 w-full text-left"
              >
                <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <span className="group-hover:font-medium transition-all duration-300">Termos de Uso</span>
              </button>
              
              <button 
                onClick={() => handleLinkClick('contato')}
                className="group flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 w-full text-left"
              >
                <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <span className="group-hover:font-medium transition-all duration-300">Fale Conosco</span>
              </button>
              
              <button 
                onClick={() => handleLinkClick('privacidade')}
                className="group flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 w-full text-left"
              >
                <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <span className="group-hover:font-medium transition-all duration-300">Política de Privacidade</span>
              </button>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Contato</h3>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleEmailClick}
                className="group flex items-center space-x-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm w-full text-left"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-4 h-4 text-white/80 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/60 font-medium">Email</p>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-300">contato@ipass.com.br</p>
                </div>
              </button>  
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="text-center">
            <p className="text-white/70 text-sm">
          © 2015 - 2025 iPass. TODOS OS DIREITOS RESERVADOS
            </p>
            <p className="text-white/50 text-xs mt-1">
              Plataforma de gestão de eventos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 