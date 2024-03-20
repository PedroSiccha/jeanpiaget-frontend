# Etapa 1: Compila la aplicación Angular en una etapa de producción
# Usa la imagen oficial de Node como base
FROM node:21.6.2 AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json a la raíz del directorio de trabajo
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos del proyecto al directorio de trabajo
COPY . .

# Construye la aplicación Angular
RUN npm run build --prod

# Etapa 2: Prepara el servidor Nginx para servir la aplicación Angular compilada
# Etapa de producción
FROM nginx:latest

# Copia los archivos de construcción de Angular al directorio de trabajo de Nginx
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Expone el puerto 80 para que Nginx pueda servir la aplicación Angular
EXPOSE 80

# Comando para arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]
