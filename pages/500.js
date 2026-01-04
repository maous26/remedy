// Custom 500 page for Pages Router compatibility
// This is a minimal fallback - the App Router error.tsx will handle actual rendering

export default function Custom500() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#faf8f5',
      padding: '1rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#c96a4b',
          marginBottom: '1rem'
        }}>
          500
        </h1>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#4a3f35',
          marginBottom: '1rem'
        }}>
          Erreur serveur
        </h2>
        <p style={{
          color: '#6b5d52',
          marginBottom: '2rem'
        }}>
          Une erreur interne est survenue. Veuillez reessayer plus tard.
        </p>
        <a
          href="/"
          style={{
            backgroundColor: '#7d9a78',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Retour a l accueil
        </a>
      </div>
    </div>
  );
}
