---
title: Python 가상환경 사용법
date: 2024-07-05
tags:
  - Python
  - 개발환경
  - 가상환경
---

# Python 가상환경 사용법

파이썬 가상환경(Virtual Environment)은 프로젝트별로 독립적인 파이썬 환경을 만들어 패키지 의존성 충돌을 방지합니다.

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

## Conda 가상환경 사용하기

Anaconda 또는 Miniconda를 설치한 경우:

```bash
# 가상환경 생성
conda create --name myenv python=3.9

# 가상환경 활성화
conda activate myenv

# 가상환경 비활성화
conda deactivate

# 패키지 설치
conda install package-name
```

## Poetry를 이용한 의존성 관리

최신 파이썬 프로젝트에서 권장되는 방식:

```bash
# Poetry 설치
pip install poetry

# 프로젝트 초기화
poetry init

# 패키지 추가
poetry add package-name

# 가상환경 활성화
poetry shell
``` 