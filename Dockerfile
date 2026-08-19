FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache curl wget && npm install -g pnpm@10.27.0

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# GA Measurement ID (público). Injetado via build-arg pelo Coolify.
# Precisa estar disponível em BUILD TIME: o Astro inlina PUBLIC_GA_ID no build.
# No Coolify, marque a env PUBLIC_GA_ID como "Build Variable".
ARG PUBLIC_GA_ID
ENV PUBLIC_GA_ID=$PUBLIC_GA_ID

COPY . .
RUN pnpm run build

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:4321/ || exit 1

CMD ["node", "./dist/server/entry.mjs"]
