// resources/js/Pages/Contato.tsx
import { ReactNode } from 'react';
import MainLayout from '@/layouts/Main/main-layout';

export default function Contato() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Página de Contato</h1>
      <p className="mt-4">Formulário ou informações de contato aqui.</p>
    </div>
  );
}

Contato.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;
