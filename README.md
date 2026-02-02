# Node.js Web Server

This project is a simple Node.js web server that displays a version number. It is designed to be containerized with Docker and used in a Kubernetes cluster.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd demo-web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server Locally

To run the server locally without Docker:
```bash
npm start
```
The server will be available at http://localhost:3000.

## Building and Running with Docker

1. **Build the Docker image:**
   ```bash
   docker build -t your-username/demo-web:1.0.0 .
   ```
   Replace `your-username` with your Docker Hub username and `1.0.0` with the current version.

2. **Run the Docker container:**
   ```bash
   docker run -p 3000:3000 -d your-username/demo-web:1.0.0
   ```
   The server will be available at http://localhost:3000.

## Updating the Version

1. **Update the `VERSION` file:**
   - Change the version number in the `VERSION` file to the new version (e.g., `1.0.1`).

2. **Rebuild the Docker image with a new tag:**
   ```bash
   docker build -t your-username/demo-web:1.0.1 .
   ```

3. **Push the new image to a container registry:**
   ```bash
   docker push your-username/demo-web:1.0.1
   ```

## Pushing to a Container Registry

To push the image to a container registry (e.g., Docker Hub, GCR, ECR), you need to be logged in to your registry.

```bash
docker login
docker push your-username/demo-web:1.0.0
```

Replace `your-username` with your registry's username or endpoint.
