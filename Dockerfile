# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY innoscripta-react/package.json innoscripta-react/yarn.lock ./

# Install project dependencies with Yarn
RUN yarn install --frozen-lockfile

# Copy the application files
COPY innoscripta-react ./

# Expose port 5173
EXPOSE 5173

# Start the React app
CMD ["yarn", "dev"]
