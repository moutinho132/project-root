# Dockerfile para el frontend
FROM node:18-alpine as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json e instala las dependencias
COPY package*.json ./
RUN echo "Instalando dependencias..." && npm install

# Copia el resto del código y construye el proyecto
COPY . .
RUN echo "Construyendo el proyecto..." && npm run build

# Crea una imagen final usando nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
 