// Custom 404 page for Pages Router compatibility
// This is a minimal fallback - the App Router not-found.tsx will handle actual rendering

export default function Custom404() {
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
          color: '#7d9a78',
          marginBottom: '1rem'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#4a3f35',
          marginBottom: '1rem'
        }}>
          Page non trouvee
        </h2>
        <p style={{
          color: '#6b5d52',
          marginBottom: '2rem'
        }}>
          Desole, la page que vous recherchez n existe pas.
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
