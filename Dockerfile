# Use a imagem oficial do Node.js 20 Alpine para ser mais leve
FROM node:20-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração de dependências
COPY package*.json ./

# Instala as dependências (incluindo devDependencies para o build)
RUN npm ci

# Copia todo o código fonte
COPY . .

# Constrói a aplicação para produção
RUN npm run build

# Segunda fase - servidor Nginx para servir os arquivos estáticos
FROM nginx:alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos construídos do build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 3001
EXPOSE 3001

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
