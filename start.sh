#!/bin/sh
# Force production mode
export NODE_ENV=production

echo "=== RootsRemedy Server Starting ==="
echo "PORT: $PORT"
echo "NODE_ENV: $NODE_ENV"
echo "Starting Next.js..."
exec node_modules/.bin/next start -H 0.0.0.0 -p ${PORT:-3000}
