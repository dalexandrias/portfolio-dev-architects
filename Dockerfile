# Use a imagem oficial do Node.js 22 Alpine para ser mais leve
FROM node:22-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Instala dependências do sistema necessárias para compilar pacotes nativos
RUN apk add --no-cache python3 make g++ libc6-compat

# Copia os arquivos de configuração de dependências
COPY package*.json ./

# Limpa cache do npm e instala dependências
RUN npm cache clean --force
RUN rm -rf node_modules package-lock.json || true

# Instala as dependências (incluindo devDependencies para o build)
RUN npm install --legacy-peer-deps

# Força reinstalação do Rollup para resolver problema com dependências nativas
RUN npm uninstall rollup @rollup/rollup-linux-x64-musl || true
RUN npm install rollup --force --legacy-peer-deps

# Copia todo o código fonte
COPY . .

# Constrói a aplicação para produção
RUN npm run build

# Segunda fase - servidor Nginx para servir os arquivos estáticos
FROM nginx:alpine AS production

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia uma configuração personalizada do nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos construídos do build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 3000

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
