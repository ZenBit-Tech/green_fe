# Docker Setup for Frontend

## Prerequisites

- Docker 20.10+
- Docker Compose 2.0+
- Node.js 22+ (for local development)

## Project Structure

```
fe/
├── docker/
│   ├── nginx.conf              # Nginx configuration for production
│   ├── .security-scan.sh       # Security scanning script
│   └── .test-versions.sh       # Multi-version testing script
│
├── Dockerfile                  # Production build
├── Dockerfile.dev              # Development build
│
├── docker-compose.yml          # Main orchestration file
├── docker-compose.dev.yml      # Development mode
├── docker-compose.full.yml     # Full stack (FE + BE + DB)
│
├── .dockerignore               # Files to exclude from Docker context
│
├── .env                        # Local environment variables (not in git)
├── .env.docker                 # Docker-specific environment variables
└── .env.example                # Template for team
```

## Quick Start

### First Time Setup

1. **Create shared Docker network** (run once):

```bash
docker network create app-network
```

2. **Copy environment variables:**

```
cp .env.example .env
```

3. **Edit `.env` file** with your OAuth credentials:

```
VITE_API_BASE_URL=http://localhost:3000
VITE_GOOGLE_CLIENT_ID=your_actual_client_id
VITE_MICROSOFT_CLIENT_ID=your_actual_client_id
VITE_LINKEDIN_CLIENT_ID=your_actual_client_id
```

### Development Mode (Hot Reload)

```
# Start frontend dev server with hot reload
docker-compose -f docker-compose.dev.yml up

# Access at http://localhost:5173

# Stop
docker-compose -f docker-compose.dev.yml down
```

**Production Mode**

```
# Build and start
docker-compose up --build

# Access at http://localhost:8080

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f frontend

# Stop
docker-compose down
```

**Full Stack (FE + BE + DB together)**

```
# Start all services
docker-compose -f docker-compose.full.yml up --build

# Frontend: http://localhost:8080
# Backend: http://localhost:3000
# Adminer: http://localhost:8081 (database UI)

# Stop all
docker-compose -f docker-compose.full.yml down
```

**Working with Backend Repository**

**Option 1: Separate Repositories (Recommended for Production)**

1.  Start backend first (from be directory):

```
cd ../be
docker-compose up -d
```

Both services will communicate via shared `app-network`.

**Option 2: Combined Launch (for local development)**  
 Use `docker-compose.full.yml` which pulls backend as pre-built image:

```
# Build backend image first (from be/ directory)
cd ../be
docker build -t zenbit-backend:latest .

# Then start full stack (from fe/ directory)
cd ../fe
docker-compose -f docker-compose.full.yml up
```

**Environment Variables**  
**Local Development (outside Docker)**  
File: `.env`

```
VITE_API_BASE_URL=http://localhost:3000
```

**Docker Development**  
File: `.env.docker`

**Important Notes:**

- Inside Docker containers, use service name: http://backend:3000
- From host machine (browser), use: http://localhost:3000
- Frontend makes API calls from browser, so use `localhost` in `.env`

**Available Commands**  
**Development**

```
# Start with hot reload
docker-compose -f docker-compose.dev.yml up

# Rebuild after package.json changes
docker-compose -f docker-compose.dev.yml up --build

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Enter container shell
docker exec -it zenbit-frontend-dev sh

# Stop
docker-compose -f docker-compose.dev.yml down
```

**Production**

```
# Build image
docker-compose build

# Start detached
docker-compose up -d

# Check health status
docker ps --filter "name=zenbit-frontend"

# View Nginx logs
docker logs zenbit-frontend

# Stop and remove volumes
docker-compose down -v
```

**Maintenance**

```
# Clean rebuild (no cache)
docker-compose build --no-cache

# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune -a

# Remove unused volumes
docker volume prune

# Full cleanup
docker system prune -a --volumes
```

**Architecture**
**Production Build (Multi-stage)**

```
Stage 1: Builder (node:22-alpine)
  - Install dependencies
  - Build React app with Vite
  - Output: /app/dist

Stage 2: Runtime (nginx:alpine)
  - Copy built static files
  - Serve with Nginx
  - Result: ~50MB image
```

**Development Build**

```
Single stage (node:22-alpine)
  - Mount source code as volume
  - Run Vite dev server
  - Hot Module Replacement (HMR)
  - Result: Instant feedback
```

**Networking**
**Docker Network: `app-network`**

```
services:
  frontend:
    networks:
      - app-network

  backend:
    networks:
      - app-network
```

**Service Discovery:**

- Frontend can reach backend at http://backend:3000
- Backend can reach MySQL at mysql:3306
- All services in same network can communicate by service name

**Port Mapping**

<table style="border-collapse: separate; border-spacing: 0; width: 100%; max-width: 462px; background-color: #ffffff; color: #24292f; border: 1px solid #d0d7de; border-radius: 6px; overflow: hidden; margin: 1em 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px;">
  <thead>
    <tr style="background-color: #e6e6e6";>
      <th style="padding: 8px 12px; text-align: left; border-bottom: 1px solid #d0d7de;">Service</th>
      <th style="padding: 8px 12px; text-align: left; border-bottom: 1px solid #d0d7de;">Container Port</th>
      <th style="padding: 8px 12px; text-align: left; border-bottom: 1px solid #d0d7de;">Host Port</th>
      <th style="padding: 8px 12px; text-align: left; border-bottom: 1px solid #d0d7de;">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">Frontend Dev</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">5173</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">5173</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">Vite dev server</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">Frontend Prod</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">80</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">8080</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">Nginx static server</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">Backend</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">3000</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">3000</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">API server</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">MySQL</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">3306</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">3306</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">Database</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">Adminer</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">8080</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">8081</td>
      <td style="padding: 8px 12px; border-top: 1px solid #d8dee4;">DB admin UI</td>
    </tr>
  </tbody>
</table>

**CORS Configuration**  
Backend must allow frontend origin in CORS settings (`main.ts`):

```
app.enableCors({
  origin: ['http://localhost:5173', 'http://localhost:8080'],
  credentials: true,
});
```

**Health Checks**
**Frontend (Production)**

```
healthcheck:
  test: ['CMD', 'wget', '--spider', 'http://localhost/health']
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 40s
```

Nginx serves health endpoint at `/health` (returns 200 OK).

**Frontend (Development)**

```
healthcheck:
  test: ['CMD', 'wget', '--spider', 'http://localhost:5173']
  interval: 30s
  timeout: 5s
  retries: 3
```

Checks if Vite dev server is responding.

**Performance Optimizations**

**1. Multi-stage Build**

- Reduces final image size from ~1GB to ~50MB
- Only production dependencies included

**2. Nginx Configuration**

```
# Gzip compression
gzip on;
gzip_types text/css application/javascript application/json;

# Static asset caching
location ~* \.(js|css|png|jpg|svg|woff2)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

**3. Code Splitting (Vite)**

```
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        redux: ['@reduxjs/toolkit'],
        mui: ['@mui/material'],
      },
    },
  },
}
```

**4. Docker Layer Caching**

```
# Copy package files first (cached if unchanged)
COPY package*.json ./
RUN npm ci

# Copy source code later (invalidates cache only if code changes)
COPY . .
```

**Security**
**Security Headers (Nginx)**

```
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "no-referrer-when-downgrade";
```

**Environment Variables**

- Never commit .env to git
- Build-time variables (VITE\_\*) are embedded in JS bundle
- Runtime variables should be injected via server

**Vulnerability Scanning**

```
# Run Trivy scan
./docker/.security-scan.sh

# Manual scan
docker scan zenbit-frontend:latest
```

**Regular Updates**

```
# Update base images
docker pull node:22-alpine
docker pull nginx:alpine

# Rebuild
docker-compose build --no-cache
```

**Troubleshooting**
**Port Already in Use**

```
# Check what's using port 5173
lsof -i :5173

# Change port in .env
FRONTEND_DEV_PORT=5174
```

**Hot Reload Not Working (Windows/WSL)**

```
// vite.config.ts
server: {
  watch: {
    usePolling: true,  // Enable polling for Windows
  },
}
```

**Build Fails: "Cannot find module"**

```
# Clear node_modules and rebuild
docker-compose down
docker volume ls | grep node_modules | awk '{print $2}' | xargs docker volume rm
docker-compose build --no-cache
```

**API Calls Failing**

1. Check if backend is running:

```
docker ps --filter "name=backend"
curl http://localhost:3000/health
```

2. Check network connectivity:

```
docker exec -it zenbit-frontend-dev sh
wget -O- http://backend:3000/health
```

3. Verify CORS settings in backend  
   **Nginx 404 on Refresh (SPA Routing)**

Already handled in `nginx.conf`:

```
location / {
  try_files $uri $uri/ /index.html;
}
```

**Container Keeps Restarting**

```
# Check logs
docker logs zenbit-frontend

# Check health status
docker inspect zenbit-frontend | grep -A 10 Health
```

**CI/CD Integration**  
**GitHub Actions Example**

```
name: Docker Build

on:
  push:
    branches: [main, develop]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build Docker image
        run: docker build -t zenbit-frontend:${{ github.sha }} .

      - name: Run tests
        run: docker run zenbit-frontend:${{ github.sha }} npm test

      - name: Push to registry
        run: docker push zenbit-frontend:${{ github.sha }}
```

**Docker Hub / GHCR**

```
# Tag image
docker tag zenbit-frontend:latest ghcr.io/username/zenbit-frontend:latest

# Push to registry
docker push ghcr.io/username/zenbit-frontend:latest
```

**Best Practices**
**Development**

- ✅ Use docker-compose.dev.yml for hot reload
- ✅ Mount source code as volumes
- ✅ Keep node_modules in container (not mounted)
- ✅ Use polling for file watching on Windows

**Production**

- ✅ Multi-stage builds for smaller images
- ✅ Use .dockerignore to exclude unnecessary files
- ✅ Pin base image versions (node:22-alpine)
- ✅ Enable health checks
- ✅ Use Nginx for serving static files

**Security**

- ✅ Don't run as root user
- ✅ Scan images regularly with Trivy
- ✅ Keep base images updated
- ✅ Use secrets management for sensitive data

**Team Collaboration**

- ✅ Document all environment variables in .env.example
- ✅ Use consistent network names across services
- ✅ Pin dependency versions in package.json
- ✅ Provide clear setup instructions

**Additional Resources**

- Docker Documentation
- Vite Documentation
- Nginx Configuration Guide
- Docker Compose Networking

**Support**
For issues or questions:

1. Check logs: `docker logs zenbit-frontend`
2. Verify environment variables: `docker exec zenbit-frontend env`
3. Test network connectivity: `docker exec zenbit-frontend ping backend`
4. Consult troubleshooting section above
