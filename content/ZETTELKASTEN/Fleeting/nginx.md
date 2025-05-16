---
title: 엔진엑스
description: " 웹 서버 소프트웨어. 고성능의 오픈소스 서버"
date:
  - - 2025-05-09
tags:
  - 웹
  - server
publish: false
---

Nginx(엔진엑스)는 **웹 서버 소프트웨어**입니다. 
**고성능의 오픈소스 서버**

### 1. **웹 서버 (Web Server)**
- HTML, CSS, 이미지 등 정적 파일을 클라이언트(브라우저)에 전달합니다.
- Apache와 같은 역할을 하지만, **가볍고 빠른 처리 성능** 덕분에 많이 쓰입니다.
### 2. **리버스 프록시 (Reverse Proxy)**
- 클라이언트 요청을 받아서, **다른 서버로 전달**하고 응답을 다시 클라이언트에 전달합니다.
- 흔히 **Node.js, Django, Flask, Spring Boot**와 같은 백엔드 앱 앞단에 위치합니다.
### 3. **로드 밸런서 (Load Balancer)**
- 여러 서버에 트래픽을 분산해서 서버에 부하가 몰리지 않도록 합니다.
### 4. **SSL 처리 및 보안 강화**
- HTTPS를 적용할 때 SSL 인증서를 설치하고 암호화된 통신을 제공합니다.
  
### 🚀 왜 많이 쓰일까?
- **높은 성능**: 동시 접속 처리에 강함.
- **적은 메모리 사용량**
- **간단한 설정 파일 (`nginx.conf`)**
- **Docker, Kubernetes, 클라우드 환경에서 필수처럼 사용됨**

# Node.js 앱을 Nginx로 배포하는 기본 구조

#### 🧱 기본 구성
```
[ Client (브라우저) ]
         ↓
[ Nginx (Reverse Proxy & Static Server) ]
         ↓
[ Node.js Application (Express 등) ]
```

Nginx가 외부에서 들어오는 요청을 받아서 내부의 Node.js 서버로 전달하고, 응답도 다시 클라이언트에게 전달합니다. 보통 80(HTTP), 443(HTTPS) 포트를 Nginx가 담당하고, Node.js는 3000, 4000 등 내부 포트를 사용합니다.

---

## 🔧 1. Node.js 앱 실행 (예: Express)

```js
// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
```

```bash
node app.js
```

---

## 🧾 2. Nginx 설정 (`/etc/nginx/sites-available/default` 예시)

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;  # Node.js 앱 포트
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🧪 3. 적용하기

```bash
sudo nginx -t        # 설정 테스트
sudo systemctl reload nginx  # 설정 반영
```

---

## 🌐 접속 흐름 예시

1. 사용자가 `http://yourdomain.com`으로 접속하면
    
2. Nginx가 요청을 받고
    
3. 내부의 `http://localhost:3000`에 있는 Node.js 서버로 요청을 보냄
    
4. Node.js 앱이 응답을 처리하고
    
5. Nginx가 그 응답을 다시 사용자에게 전달
    

---

## 📦 보너스: 정적 파일 제공

```nginx
location /static/ {
    root /var/www/yourapp/public;
}
```

---

이 구조는 **HTTPS 적용**, **Docker 연동**, **PM2와의 통합**, **로드밸런싱** 등으로 확장할 수 있습니다.  
Docker로 Nginx + Node.js를 함께 띄우는 예도 원하시나요?

---

**Docker로 Nginx + Node.js 앱을 함께 실행하는 구조**는 매우 일반적이며, 실제 배포 환경에서도 자주 사용됩니다.

아래는 가장 단순하고 실용적인 **Docker 구성 예제**입니다.

---

## 📁 프로젝트 구조

```
my-app/
├── app/                 ← Node.js 앱
│   ├── app.js
│   ├── package.json
├── nginx/
│   └── default.conf     ← Nginx 설정 파일
├── Dockerfile           ← Node.js 앱용
├── docker-compose.yml   ← 전체 서비스 구성
```

---

## 1️⃣ Node.js 앱 (`app/app.js`)

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js behind Nginx!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

```json
// app/package.json
{
  "name": "docker-nginx-node",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

## 2️⃣ Node.js Dockerfile (`Dockerfile`)

```Dockerfile
FROM node:18

WORKDIR /usr/src/app
COPY app/ ./
RUN npm install

EXPOSE 3000
CMD ["node", "app.js"]
```

---

## 3️⃣ Nginx 설정 (`nginx/default.conf`)

```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://node-app:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

> `node-app`은 Docker 내부 네트워크에서의 서비스 이름입니다.

---

## 4️⃣ Docker Compose (`docker-compose.yml`)

```yaml
version: '3.8'

services:
  node-app:
    build: .
    container_name: node-app
    restart: always
    ports:
      - "3000:3000"

  nginx:
    image: nginx:latest
    container_name: nginx-proxy
    ports:
      - "80:80"
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - node-app
```

---

## 🚀 실행 방법

```bash
# 프로젝트 루트에서 실행
docker-compose up --build
```

- 이제 브라우저에서 `http://localhost`로 접속하면,
    
- Nginx가 요청을 받아 `node-app:3000`으로 전달하고,
    
- Node.js가 응답을 보냅니다.
    

---
좋습니다. 아래는 Docker 기반 **Node.js + Nginx** 프로젝트에 다음을 통합한 고급 배포 구성 예시입니다:

✅ Let's Encrypt (무료 SSL 인증서)  
✅ PM2 (Node.js 프로세스 매니저)  
✅ `.env` 환경변수 파일  
✅ CI/CD 연동 (예: GitHub Actions)

---

## ✅ 1. **Let's Encrypt + Nginx + Certbot**

Nginx 컨테이너에 SSL 인증서를 자동으로 발급받고 갱신하려면 `certbot`을 사용합니다.

### `docker-compose.yml` 수정

```yaml
  nginx:
    image: nginx:latest
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot

  certbot:
    image: certbot/certbot
    container_name: certbot
    volumes:
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
    entrypoint: >
      sh -c "certbot certonly --webroot --webroot-path=/var/www/certbot
             --email your@email.com --agree-tos --no-eff-email
             -d yourdomain.com"
```

### Nginx 설정 예 (`nginx/default.conf`)

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://node-app:3000;
        ...
    }
}
```

---

## ✅ 2. **PM2로 Node.js 실행**

`Dockerfile` 수정:

```Dockerfile
FROM node:18

WORKDIR /usr/src/app
COPY app/ ./
RUN npm install -g pm2 && npm install

EXPOSE 3000
CMD ["pm2-runtime", "app.js"]
```

---

## ✅ 3. **환경 변수 파일 (`.env`) 사용**

### `.env`

```
PORT=3000
NODE_ENV=production
```

### Node.js 코드에서 사용

```js
require('dotenv').config();
const port = process.env.PORT || 3000;
```

### `Dockerfile`에 dotenv 포함

```Dockerfile
RUN npm install dotenv
```

### `docker-compose.yml`

```yaml
services:
  node-app:
    ...
    env_file:
      - .env
```

---

## ✅ 4. **CI/CD (GitHub Actions 예시)**

### `.github/workflows/deploy.yml`

```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: SSH into server & deploy
      uses: appleboy/ssh-action@v0.1.10
      with:
        host: ${{ secrets.SERVER_HOST }}
        username: ${{ secrets.SERVER_USER }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        script: |
          cd /home/youruser/yourproject
          git pull origin main
          docker-compose down
          docker-compose up --build -d
```

---

이제 이 구조는 완전한 **실서비스용 배포 환경**입니다.

> 원하신다면 전체 템플릿을 `.zip`으로 제공하거나 GitHub 초기 리포지토리 형태로 만들어 드릴 수 있습니다.

어떤 방식으로 제공해드릴까요? (예: zip 파일, 코드블럭 복사, GitHub 링크 등)

### Resources
