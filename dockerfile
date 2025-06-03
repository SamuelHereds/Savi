# ============ Etapa 1: Build do Front-end ============
FROM node:18-alpine AS frontend-builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY resources/js ./resources/js
COPY resources/css ./resources/css
COPY vite.config.js tsconfig.json ./
RUN npm run build

# Agora temos /app/public/build pronto para produção

# ============ Etapa 2: Instala Dependências PHP ======
FROM composer:2 AS composer
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --ignore-platform-reqs

# ============ Etapa 3: Imagem Final (PHP-FPM) ========
FROM php:8.2-fpm-alpine
WORKDIR /var/www/html

# Instala extensões PHP necessárias
RUN apk add --no-cache \
    libzip-dev unzip \
    && docker-php-ext-install zip pdo pdo_mysql opcache

# Copia o código-fonte
COPY . .

# Copia as dependências PHP
COPY --from=composer /app/vendor ./vendor

# Copia os assets frontend
COPY --from=frontend-builder /app/public/build ./public/build

# Ajusta permissões (Laravel)
RUN chown -R www-data:www-data storage bootstrap/cache

# Expõe porta PHP-FPM
EXPOSE 9000

CMD ["php-fpm"]
