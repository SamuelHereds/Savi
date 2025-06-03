// resources/js/Pages/Programas.tsx
import { ReactNode } from 'react';
import MainLayout from '@/layouts/Main/main-layout';

export default function Programas() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Nossos Programas</h1>
      <p className="mt-4">Detalhes sobre os programas disponíveis.</p>
    </div>
  );
}

Programas.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;
