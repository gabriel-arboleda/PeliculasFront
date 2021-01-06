# stage 1
FROM node:14.15.3-alpine AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx
COPY --from=node /app/dist/Ceiba-peliculas-front /usr/share/nginx/html