# Dockerfile

# İmajı Node.js tabanlı bir imajdan başlat
FROM node:latest

# Uygulama dizinini oluştur
WORKDIR /app

# Bağımlılıkları kopyala ve yükle
COPY package.json .
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Uygulamayı başlat
CMD ["node", "index.js"]
