# Use Node.js 16.x as base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Expose the port on which the application will run
EXPOSE 5000

# Start the application
CMD ["serve", "-s", "build", "-l", "5000"]
