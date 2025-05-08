---
title: dotenv 라이브러리
description: 환경 변수 관리를 단순화하고, 코드와 설정값의 분리를 통해 개발 보안과 유지 보수성을 크게 향상 시켜주는 필수 라이브러리
date:
  - - 2025-05-05
tags: 
publish: false
---
## dotenv 라이브러리
dotenv는 환경 변수 관리를 단순화하고, 코드와 설정값의 분리를 통해 개발 보안과 유지보수성을 크게 향상시켜주는 필수 라이브러리입니다

**dotenv**는 환경 변수(Environment Variable)를 코드 외부의 파일(.env)에 저장하고, 이를 애플리케이션에서 쉽게 불러와 사용할 수 있게 도와주는 라이브러리입니다. 주로 Node.js(JavaScript)와 Python 프로젝트에서 널리 사용

**주요 목적과 장점**
- 환경 변수(예: API 키, DB 접속 정보 등)와 같은 민감한 설정값을 코드와 분리하여 관리함으로써 보안과 유지보수성을 높인다
- 개발, 테스트, 운영 등 다양한 환경별로 설정을 분리할 수 있어 유연한 환경 관리가 가능
- .env 파일을 .gitignore에 추가하면 민감 정보가 Git 저장소에 노출되는 것을 방지
## 사용 방법
**1. 설치**
- Node.js:
``` bash
npm install dotenv
```
- Python:
```bash
pip install python-dotenv
```
**2. .env 파일 생성**
- 프로젝트 루트 디렉토리에 `.env` 파일을 만들고, 다음과 같이 환경 변수를 작성합니다:
```text
API_KEY=your_api_key 
DB_HOST=localhost 
DB_USER=root
```
**3. 코드에서 불러오기**
- **Node.js (CommonJS)**
```javascript
require('dotenv').config(); 
console.log(process.env.API_KEY);
```
- **Python**
```python
from dotenv import load_dotenv 
import os 
load_dotenv()  # .env 파일의 환경 변수 로드 
api_key = os.getenv("API_KEY")`
```
## 주의사항
- .env 파일은 암호화되지 않으므로, ==반드시 `.gitignore`에 추가하여 소스 코드 저장소에 포함되지 않도록 주의==
- Node.js에서는 환경 변수는 항상 `process.env.변수명` 형태로 접근
- Create React App 등 일부 프레임워크에서는 dotenv가 내장되어 있으며, 변수명에 접두어(REACT_APP_)가 필요
  
### Resources
