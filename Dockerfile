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

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./

# Railway assigns PORT dynamically
EXPOSE 3000

# Use shell form to allow environment variable expansion
CMD ["sh", "-c", "npm run start"]
