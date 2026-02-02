# Docker Production Deployment

This project uses Docker for production deployment only. Development is done locally using `pnpm dev`.

## Prerequisites

- [Docker](https://www.docker.com/get-started) 20.10+
- [Docker Compose](https://docs.docker.com/compose/install/) v2.0+

## Production Deployment

### Quick Start

Build and run the production container:

```bash
docker compose up -d --build
```

Access the application at: `http://localhost:80`

### Available Commands

```bash
# Build and start in background
docker compose up -d --build

# Start without rebuilding
docker compose up -d

# Stop the container
docker compose down

# View logs
docker compose logs -f

# Follow logs in real-time
docker compose logs -f app

# Check container status and health
docker compose ps

# Restart the container
docker compose restart

# Stop and remove volumes
docker compose down -v
```

## Build Process

The Dockerfile uses a two-stage build:

### 1. Builder Stage
- Uses Node.js 20 Alpine
- Installs pnpm 9
- Installs dependencies with `--frozen-lockfile`
- Builds the Astro application
- Outputs optimized static files to `/app/dist`

### 2. Production Stage
- Uses nginx:alpine (minimal footprint)
- Copies built static files from builder
- Serves files with optimized nginx configuration:
  - Gzip compression for text and images
  - Security headers (X-Frame-Options, CSP, etc.)
  - 1-year caching for static assets
  - Client-side routing support
  - Health check endpoint at `/health`
- Exposes port 80
- Includes health checks every 30 seconds

## Health Checks

The container includes automatic health monitoring:

```bash
# Check health status
docker compose ps

# View detailed health information
docker inspect cuidaty-landing --format='{{json .State.Health}}' | jq

# Test health endpoint directly
curl http://localhost/health
```

Health check endpoint: `http://localhost/health` (returns "healthy")

## Nginx Configuration

The production image includes an optimized nginx setup:

- **Gzip Compression**: Reduces bandwidth for text files
- **Security Headers**:
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- **Static Asset Caching**: 1-year cache for images, fonts, CSS, JS
- **SPA Routing**: Falls back to `index.html` for client-side routes
- **Health Endpoint**: `/health` for monitoring

## Port Configuration

By default, the application runs on port 80. To change the port, edit `compose.yml`:

```yaml
ports:
  - "8080:80"  # Use port 8080 instead
```

## Environment Variables

To add environment variables, create a `.env` file:

```env
NODE_ENV=production
```

Reference it in `compose.yml`:

```yaml
services:
  app:
    env_file:
      - .env
```

## Production Deployment Options

### 1. Docker Compose (Recommended for single server)
```bash
docker compose up -d --build
```

### 2. Build and Push to Registry
```bash
# Build the image
docker build -t your-registry/cuidaty-landing:latest .

# Push to registry
docker push your-registry/cuidaty-landing:latest

# Pull and run on production server
docker pull your-registry/cuidaty-landing:latest
docker run -d -p 80:80 --name cuidaty-landing your-registry/cuidaty-landing:latest
```

### 3. Container Orchestration Platforms
- **Kubernetes**: Create deployment and service manifests
- **Docker Swarm**: Use stack deploy
- **AWS ECS**: Push to ECR and create task definitions
- **Google Cloud Run**: Deploy directly from Container Registry
- **Azure Container Instances**: Deploy from ACR

## Troubleshooting

### Port conflicts
```bash
# Check what's using port 80
sudo lsof -i :80

# Change port in compose.yml
ports:
  - "8080:80"
```

### Container won't start
```bash
# View logs
docker compose logs app

# Check container status
docker compose ps
```

### Build fails
```bash
# Clear build cache
docker compose build --no-cache

# Check available disk space
df -h
```

### Performance issues
```bash
# Check container resources
docker stats cuidaty-landing

# View nginx access logs
docker compose logs app | grep "GET"
```

## Security Notes

- Nginx runs as non-root user
- Security headers automatically applied
- Sensitive files excluded via `.dockerignore`
- Health checks ensure reliability
- Minimal attack surface (Alpine Linux)

## Monitoring

### View access logs
```bash
docker compose logs -f app
```

### Check resource usage
```bash
docker stats cuidaty-landing
```

### Inspect container
```bash
docker inspect cuidaty-landing
```

## Updating the Application

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker compose up -d --build

# Check deployment
docker compose ps
curl http://localhost/health
```

---

For local development, use: `pnpm dev`

For production deployment, use: `docker compose up -d --build`
