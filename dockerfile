#
# Dockerfile para Ubuntu 22.04 + Apache + PHP 8.2 + Node.js 18 + Composer
#

# 1) Base: Ubuntu 22.04
FROM ubuntu:22.04

# Evita prompts interativos ao rodar apt-get
ENV DEBIAN_FRONTEND=noninteractive

# 2) Instala pacotes básicos do sistema e Apache + PHP + extensões
RUN apt-get update && apt-get install -y \
    apache2 \
    libapache2-mod-php8.2 \
    php8.2 \
    php8.2-mysql \
    php8.2-zip \
    php8.2-xml \
    php8.2-mbstring \
    php8.2-curl \
    php8.2-intl \
    unzip \
    curl \
    git \
    gnupg \
    # Instala Node.js (via NodeSource)
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    # Limpa caches do apt
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 3) Instala Composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 4) Habilita mod_rewrite do Apache (necessário para Laravel)
RUN a2enmod rewrite

# 5) Ajustes de diretório de trabalho
WORKDIR /var/www/html

# 6) Copia código da aplicação para dentro do container
COPY . .

# 7) Copia configuração customizada do Apache (mais adiante criaremos este arquivo)
COPY docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf

# 8) Instala dependências PHP via Composer
RUN composer install --no-dev --optimize-autoloader --ignore-platform-reqs

# 9) Instala dependências Node e constrói os assets via Vite
RUN npm install \
    && npm run build

# 10) Ajusta permissões de storage e cache para o usuário www-data
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage /var/www/html/bootstrap/cache

# 11) Expõe a porta 80 (Apache)
EXPOSE 80

# 12) Comando final: executa o Apache em foreground
CMD ["apache2ctl", "-D", "FOREGROUND"]
