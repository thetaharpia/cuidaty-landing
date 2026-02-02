# Docker Setup Guide

This project includes Docker support for both development and production environments using multi-stage builds.

## Prerequisites

- [Docker](https://www.docker.com/get-started) 20.10+
- [Docker Compose](https://docs.docker.com/compose/install/) v2.0+

## Quick Start

### Development Environment

Start the development server with hot reload:

```bash
docker compose --profile dev up
```

Or build and run in detached mode:

```bash
docker compose --profile dev up -d --build
```

Access the application at: `http://localhost:4321`

### Production Environment

Build and run the production image:

```bash
docker compose --profile prod up -d --build
```

Access the application at: `http://localhost:80`

## Available Commands

### Development

```bash
# Start development environment
docker compose --profile dev up

# Start in background
docker compose --profile dev up -d

# Rebuild and start
docker compose --profile dev up --build

# Stop development environment
docker compose --profile dev down

# View logs
docker compose --profile dev logs -f

# Access container shell
docker compose --profile dev exec dev sh
```

### Production

```bash
# Start production environment
docker compose --profile prod up

# Start in background
docker compose --profile prod up -d

# Rebuild and start
docker compose --profile prod up --build

# Stop production environment
docker compose --profile prod down

# View logs
docker compose --profile prod logs -f

# Check health status
docker compose --profile prod ps
```

## Docker Build Stages

The Dockerfile uses multi-stage builds with the following targets:

### 1. Base Stage
- Sets up Node.js 20 Alpine
- Installs pnpm 9
- Common dependencies layer

### 2. Development Stage
- Target: `development`
- Includes all dependencies
- Runs Astro dev server with hot reload
- Mounted volumes for live code updates
- Port: 4321

### 3. Builder Stage
- Builds the production application
- Optimizes assets with compression

### 4. Production Stage
- Target: `production`
- Uses nginx:alpine for serving static files
- Includes custom nginx configuration with:
  - Gzip compression
  - Security headers
  - Static asset caching
  - Health check endpoint
- Port: 80

## Volume Management

### Development Volumes

- Source code is mounted for hot reload: `.:/app`
- node_modules uses named volume to avoid conflicts

### Clear volumes

```bash
docker compose --profile dev down -v
```

## Building Individual Stages

### Build development image
```bash
docker build --target development -t cuidaty-landing:dev .
```

### Build production image
```bash
docker build --target production -t cuidaty-landing:prod .
```

### Run specific build
```bash
# Development
docker run -p 4321:4321 -v $(pwd):/app cuidaty-landing:dev

# Production
docker run -p 80:80 cuidaty-landing:prod
```

## Health Checks

The production container includes health checks that run every 30 seconds:

```bash
# Check health status
docker compose --profile prod ps

# View health check logs
docker inspect --format='{{json .State.Health}}' cuidaty-landing-prod | jq
```

Health check endpoint: `http://localhost/health`

## Nginx Configuration

The production image includes an optimized nginx configuration:

- **Gzip Compression**: Enabled for text and image files
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Static Asset Caching**: 1-year cache for images, fonts, CSS, JS
- **Client-side Routing**: Fallback to index.html for SPA routing
- **Health Endpoint**: `/health` for container health checks

## Troubleshooting

### Port conflicts
If ports 4321 or 80 are already in use, modify the ports in `compose.yml`:

```yaml
ports:
  - "8080:4321"  # Development
  # or
  - "8080:80"    # Production
```

### Hot reload not working
Ensure your Docker Desktop has file sharing enabled for the project directory.

### Build cache issues
Clear build cache and rebuild:

```bash
docker compose --profile dev build --no-cache
```

### View container logs
```bash
docker compose --profile dev logs -f dev
docker compose --profile prod logs -f prod
```

## Production Deployment

For production deployment, you can:

1. **Build and push to registry:**
   ```bash
   docker build --target production -t your-registry/cuidaty-landing:latest .
   docker push your-registry/cuidaty-landing:latest
   ```

2. **Use docker-compose in production:**
   ```bash
   docker compose --profile prod up -d
   ```

3. **Use with orchestration platforms:**
   - Kubernetes
   - Docker Swarm
   - AWS ECS
   - Google Cloud Run

## Environment Variables

To add environment variables, create a `.env` file:

```env
NODE_ENV=production
SITE_URL=https://cuidaty.com
```

And reference it in `compose.yml`:

```yaml
services:
  prod:
    env_file:
      - .env
```

## Security Notes

- The production image runs nginx as a non-root user
- Security headers are automatically added
- The `.dockerignore` file prevents sensitive files from being copied
- Health checks ensure container reliability

---

For more information, see the main [README.md](./README.md)
