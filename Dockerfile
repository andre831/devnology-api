# Build stage
FROM node:16 AS build

WORKDIR /app

COPY  package*.json /app/

RUN npm install

COPY . .

RUN npm run build

# Run stage
FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/dist /app

COPY --from=build /app/node_modules /app/node_modules

CMD ["node", "server.js"]
