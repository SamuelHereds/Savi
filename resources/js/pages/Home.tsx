// resources/js/Pages/Home.tsx
import { ReactNode } from 'react';
import MainLayout from '@/layouts/Main/main-layout';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bem-vindo à Home</h1>
      <p className="mt-4">Este é o conteúdo da página inicial.</p>
    </div>
  );
}

// Esta linha “envia” o layout para o Inertia
Home.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;
