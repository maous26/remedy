# Custom Dockerfile for Railway deployment
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Start Next.js - PORT is provided by Railway
CMD node_modules/.bin/next start -H 0.0.0.0 -p $PORT
