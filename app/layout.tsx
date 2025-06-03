import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'iPass - Sistema de Copos STL Festival 2025',
  description: 'Sistema integrado do iPass para aquisição de copos oficiais do STL Festival 2025',
  keywords: ['iPass', 'STL Festival', 'copo oficial', 'ingresso', 'pix', 'pagamento'],
  authors: [{ name: 'iPass E2Carbon Team' }],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'iPass - Sistema de Copos STL Festival 2025',
    description: 'Sistema integrado do iPass para aquisição de copos oficiais do STL Festival 2025',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'iPass E2Carbon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPass - Sistema de Copos STL Festival 2025',
    description: 'Sistema integrado do iPass para aquisição de copos oficiais do STL Festival 2025',
  },
  robots: {
    index: false, // Não indexar em produção por ser um sistema interno
    follow: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#02AB89',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-ipass-background antialiased">
        <div id="root">
          {children}
        </div>
        
        {/* Portal para modais e overlays */}
        <div id="modal-root" />
        
        {/* Scripts adicionais se necessário */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent zoom on iOS Safari
              document.addEventListener('gesturestart', function (e) {
                e.preventDefault();
              });
            `,
          }}
        />
      </body>
    </html>
  );
} 