// Custom error page for Pages Router compatibility
// This is a minimal fallback - the App Router error pages (src/app/error.tsx, not-found.tsx)
// will handle actual error rendering

function Error({ statusCode }) {
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
          {statusCode || 'Erreur'}
        </h1>
        <p style={{
          color: '#4a3f35',
          marginBottom: '2rem'
        }}>
          {statusCode
            ? `Une erreur ${statusCode} est survenue sur le serveur`
            : 'Une erreur est survenue'}
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
