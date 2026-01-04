import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-earth-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-sage-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-earth-800 mb-4">
          Page non trouvée
        </h2>
        <p className="text-earth-600 mb-8 max-w-md">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
