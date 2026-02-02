# Docker Setup

## Overview

- **Dockerfile**: Production build for Coolify deployment
- **compose.yml**: Development environment (optional, for running dev server in Docker)

## Production Deployment (Coolify)

Coolify automatically detects and builds the `Dockerfile` for production deployment.

### Dockerfile Build Process

1. **Builder Stage**: Builds the Astro application
   - Node.js 20 Alpine
   - pnpm 9
   - Frozen lockfile installation
   - Production build output

2. **Production Stage**: Serves with nginx
   - Nginx Alpine (minimal footprint)
   - Gzip compression
   - Security headers
   - Static asset caching (1 year)
   - Health check at `/health`
   - Port 80

Coolify handles:
- Building the Docker image
- Port mapping
- Environment variables
- Container orchestration
- Health monitoring

No manual deployment needed - push to repository and Coolify deploys automatically.

## Local Development with Docker (Optional)

If you prefer to run development in Docker instead of locally with `pnpm dev`:

```bash
# Start development server
docker compose up

# Start in background
docker compose up -d

# View logs
docker compose logs -f dev

# Stop
docker compose down
```

Access at: `http://localhost:4321`

Features:
- Hot reload with volume mounting
- Runs `pnpm dev` inside container
- No need to install Node.js locally

**Note**: Most developers prefer running `pnpm dev` directly on their machine for better performance.

## Local Development (Recommended)

For the best development experience, run directly on your machine:

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Access at: `http://localhost:4321`

## Health Check

The production container includes a health endpoint:

```
GET /health
```

Returns: `healthy`

Coolify uses this for container health monitoring.

## Port Configuration

- **Development** (compose.yml): Port 4321
- **Production** (Dockerfile): Port 80 (Coolify handles mapping)

## Environment Variables

For production, configure environment variables in Coolify's dashboard.

For local development with Docker, create `.env`:

```env
NODE_ENV=development
```

## Troubleshooting

### Development container issues

```bash
# Rebuild without cache
docker compose build --no-cache

# Remove volumes and restart
docker compose down -v
docker compose up
```

### Production build testing locally

```bash
# Build production image
docker build -t cuidaty-landing:test .

# Run locally
docker run -p 8080:80 cuidaty-landing:test

# Test
curl http://localhost:8080/health
```

---

**Development**: `pnpm dev` or `docker compose up`
**Production**: Coolify auto-deploys from Dockerfile
