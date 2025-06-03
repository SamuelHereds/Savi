// resources/js/Layouts/MainLayout.tsx
import { ReactNode } from 'react';
import Topbar from '@/components/Topbar';

type MainLayoutProps = { children: ReactNode };

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Topbar fixo no topo */}
      <Topbar />

      {/* Aqui vai o conteúdo de cada página (Home, Contato, Programas etc.) */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
