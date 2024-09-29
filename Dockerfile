# Stage 1: Install Dependencies
FROM node:18-alpine AS dependencies

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with npm ci for cleaner installs
RUN npm ci

# Stage 2: Build Application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependencies from the previous stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Build the Next.js application (optional if you’re only running in development)
# RUN npm run build

# Stage 3: Development Environment
FROM node:18-alpine AS dev

# Set working directory
WORKDIR /app

# Copy dependencies and application code from the builder stage
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=builder /app ./

# Expose the development port
EXPOSE 3000

# Install development tools (optional, useful for development)
# RUN npm install --only=dev

# Start the Next.js development server
CMD ["npm", "run", "dev"]
