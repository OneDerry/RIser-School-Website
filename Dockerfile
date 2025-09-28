
# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create production server
FROM node:18-alpine

WORKDIR /app

# Copy build files from previous stage
COPY --from=build /app/dist ./build

# Install serve package globally to serve static files
RUN npm install -g serve

# Optional: If you have a custom server.js file
# COPY server.js .
# RUN npm install express

# Expose port (default for serve is 3000)
EXPOSE 5000

# Command to run the server
CMD ["serve", "-s", "build", "-l", "3000"]