# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json desde la carpeta actual (dentro de client)
COPY package.json package-lock.json* ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación (todo desde la carpeta client)
COPY . .

# Asegúrate de que la carpeta node_modules tenga los permisos correctos
RUN chown -R node:node /app/node_modules

# Establece el usuario para que sea el que ejecuta el contenedor
USER node

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]

