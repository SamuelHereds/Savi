import { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';

export default function PageTransitionLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.on('start', () => setLoading(true));
    router.on('finish', () => setTimeout(() => setLoading(false), 300));
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/80 dark:bg-zinc-900/80">
      <img src="/images/logoazul.svg" alt="Carregando" className="w-32 h-32 animate-pulse" />
    </div>
  );
}
