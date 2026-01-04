# Custom Dockerfile for Railway deployment
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Copy and make start script executable
COPY start.sh ./
RUN chmod +x start.sh

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Start using the script with exec to handle signals properly
CMD ["./start.sh"]
