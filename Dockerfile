# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY innoscripta-react/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the application files
COPY innoscripta-react ./

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
