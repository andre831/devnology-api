# Build stage
FROM node:16 AS build

WORKDIR /app

COPY  package*.json /app/

COPY prisma prisma 

RUN npm install

COPY . .

RUN npm run build

# Run stage
FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/dist /app

COPY --from=build /app/node_modules /app/node_modules

COPY --from=build /app/prisma /app/prisma

RUN npx prisma generate

EXPOSE 3333

CMD ["node", "server.js"]
