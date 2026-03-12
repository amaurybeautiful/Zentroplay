# Etapa de build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa final: servir arquivos com Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# opcional: remove config padrão
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
