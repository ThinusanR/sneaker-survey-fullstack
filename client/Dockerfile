# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --force

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Set the command to run the React application
CMD ["npm", "start"]