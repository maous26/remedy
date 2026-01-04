# Custom Dockerfile to avoid cache issues
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (no cache)
RUN npm ci

# Copy source code
COPY . .

# Build the application (fresh build, no cache)
RUN npm run build

# Production image
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# Default port if not provided
ENV PORT=3000

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./

# Start the server - Railway provides PORT env var
CMD ["sh", "-c", "node_modules/.bin/next start -H 0.0.0.0 -p ${PORT}"]
