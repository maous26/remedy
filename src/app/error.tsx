'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-earth-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-terracotta-500 mb-4">
          Oups !
        </h1>
        <h2 className="text-2xl font-semibold text-earth-800 mb-4">
          Une erreur est survenue
        </h2>
        <p className="text-earth-600 mb-8 max-w-md">
          Nous sommes désolés, quelque chose s'est mal passé. Veuillez
          réessayer.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
