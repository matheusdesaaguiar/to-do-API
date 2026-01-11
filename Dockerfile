# Define a imagem base
FROM node:24-alpine

# Define o diretório de trabalho dentro do container.
WORKDIR /usr/src/app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala todas as dependências
RUN npm install

# Copia o restante do código
COPY . .

EXPOSE 3000

# Usa npx para garantir que o nodemon seja encontrado
CMD ["node", "src/server.js"]