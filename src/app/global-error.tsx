'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#faf8f5',
          padding: '1rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#c96a4b',
              marginBottom: '1rem'
            }}>
              Erreur
            </h1>
            <h2 style={{
              fontSize: '1.5rem',
              color: '#4a3f35',
              marginBottom: '1rem'
            }}>
              Une erreur critique est survenue
            </h2>
            <p style={{
              color: '#6b5d52',
              marginBottom: '2rem'
            }}>
              Veuillez rafraîchir la page ou réessayer plus tard.
            </p>
            <button
              onClick={reset}
              style={{
                backgroundColor: '#7d9a78',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Réessayer
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
