# Create base
FROM node:20-alpine AS base

RUN npm install -g pm2


# Installing dependencies
FROM base AS install-dependencies

WORKDIR /app

COPY . .

RUN npm install


# Creating a build
FROM install-dependencies AS create-build

WORKDIR /app

ARG APP_ENV

RUN APP_ENV=${APP_ENV} npm run build

RUN npm prune --production


# Running the application
FROM base AS run

WORKDIR /app

COPY --from=install-dependencies /app/node_modules ./node_modules
COPY --from=create-build /app/.next ./.next
COPY --from=create-build /app/public ./public
COPY . .

CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]