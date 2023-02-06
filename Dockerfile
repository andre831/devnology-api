FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333
CMD [ "node", "server.js" ]

# # Build stage
# FROM node:16 AS build

# WORKDIR /usr/src/app/

# COPY  package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# # Run stage
# FROM node:16-alpine
# WORKDIR /app
# COPY --from=build /app/dist /app
# COPY --from=build /app/node_modules /app/node_modules
# CMD ["npm", "start"]
