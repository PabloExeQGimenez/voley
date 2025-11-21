#build
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma
RUN npm ci
COPY . .
RUN npm run build
RUN npx prisma generate

#runtime
FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --fron=build /app/package*.json ./
RUN npc ci --omit=dev
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
CMD ["node", "dist/server.js"]