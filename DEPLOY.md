# DevArchitects Portfolio - Deploy no Coolify

## 🚀 Configuração para Deploy

Este repositório está pronto para deploy no Coolify com as seguintes configurações:

### 📁 Arquivos de Deploy

- **Dockerfile**: Multi-stage build otimizado (Node.js + Nginx)
- **docker-compose.yml**: Configuração para orquestração de containers
- **.dockerignore**: Exclusão de arquivos desnecessários no build

### 🐳 Dockerfile Features

- **Multi-stage build**: Reduz tamanho final da imagem
- **Node.js 20 Alpine**: Base leve e segura
- **Nginx Alpine**: Servidor web otimizado para produção
- **SPA Configuration**: Suporte completo ao React Router
- **Cache Headers**: Otimização de performance
- **Security Headers**: Headers de segurança implementados
- **Gzip Compression**: Compressão automática de assets

### ⚙️ Docker Compose Features

- **Health Check**: Monitoramento automático da aplicação
- **Restart Policy**: Reinicialização automática em caso de falha
- **Labels Coolify**: Labels específicas para o Coolify
- **Network Isolation**: Rede isolada para o container
- **Port Mapping**: Porta 80 exposta para acesso

### 🛠️ Como Fazer Deploy no Coolify

1. **Conectar Repositório**:
   - No Coolify, adicione este repositório GitHub
   - Configure o branch `main` como source

2. **Configurações do Deploy**:
   - **Build Command**: `docker build -t portfolio-devarchitects .`
   - **Port**: `80`
   - **Health Check Path**: `/`

3. **Variáveis de Ambiente** (se necessário):
   ```bash
   NODE_ENV=production
   ```

4. **Deploy**:
   - O Coolify detectará automaticamente o Dockerfile
   - Build e deploy serão executados automaticamente

### 🏗️ Build Process

1. **Stage 1 - Build**:
   - Instala dependências (`npm ci`)
   - Executa build do Vite (`npm run build`)
   - Gera arquivos otimizados em `/dist`

2. **Stage 2 - Production**:
   - Copia arquivos para Nginx
   - Configura server para SPA
   - Otimizações de cache e segurança

### 📊 Performance

- **Tamanho da imagem**: ~15MB (Alpine + Nginx)
- **Build time**: ~2-3 minutos
- **Start time**: ~5 segundos
- **Memory usage**: ~10MB

### 🔧 Comandos Úteis

```bash
# Build local
docker build -t portfolio-devarchitects .

# Run local
docker run -p 3000:80 portfolio-devarchitects

# Deploy com docker-compose
docker-compose up -d

# Logs
docker-compose logs -f

# Stop
docker-compose down
```

### 🌐 Acesso

Após o deploy, a aplicação estará disponível na URL fornecida pelo Coolify.

**Características da aplicação**:
- ✅ Totalmente responsiva
- ✅ SPA com React Router
- ✅ Animações suaves
- ✅ Performance otimizada
- ✅ SEO friendly
- ✅ PWA ready

---

**Desenvolvido por DevArchitects** 🏗️
