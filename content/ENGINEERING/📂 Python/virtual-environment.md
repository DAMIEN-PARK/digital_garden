---
title: Python 가상환경 사용법
date: 2024-07-05
tags:
  - Python
  - 개발환경
  - 가상환경
draft:
---

# Python 가상환경 사용법
## venv를 이용한 가상환경 생성
### 가상환경 생성
```bash
# Windows
python -m venv myenv

# macOS/Linux
python3 -m venv myenv
```
### 가상환경 활성화
```bash
# Windows
myenv\Scripts\activate

# macOS/Linux
source myenv/bin/activate
```
### 가상환경 비활성화
```bash
deactivate
```
## pip를 이용한 패키지 관리

```bash
# 패키지 설치
pip install package-name

# 특정 버전 설치
pip install package-name==1.2.3

# requirements.txt 파일로 패키지 목록 설치
pip install -r requirements.txt

# 설치된 패키지 목록 확인
pip list

# 패키지 목록 저장
pip freeze > requirements.txt
```
