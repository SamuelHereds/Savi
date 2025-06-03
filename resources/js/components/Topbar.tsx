// resources/js/Components/Topbar.tsx
import { Link } from '@inertiajs/react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Topbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* ---------------- LOGO À ESQUERDA ---------------- */}
        <div className="flex items-center space-x-2">
          <Link href={route('home')} className="flex items-center">
            <img
              src="/images/logoazul.svg"
              alt="Savi Administrativo"
              className="w-20 h-20 object-contain"
            />
          </Link>
        </div>

        {/* --------------- LINKS DE NAVEGAÇÃO --------------- */}
        <nav className="flex items-center space-x-6">
          <Link
            href={route('home')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href={route('contato')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contato
          </Link>
          <Link
            href={route('programas')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Programas
          </Link>
          <Link
            href={''}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Equipe
          </Link>
        </nav>

        {/* ------------ BOTÕES/ÍCONES À DIREITA ------------ */}
        <div className="flex flex-col items-end space-y-2">
          {/* Botão “Fale com a gente” */}
          <Link
            href={route('contato')}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Fale com a gente
          </Link>

          {/* Ícones de Redes Sociais (monocromáticos) */}
          <div className="flex space-x-4 mt-1">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/savi_ong?igsh=MXNhbDljd3ZzeXh0Mg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/19B5GizWfh/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
