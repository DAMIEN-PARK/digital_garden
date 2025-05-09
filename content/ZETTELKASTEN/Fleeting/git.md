---
title: git 에 관하여
description: 
date:
  - - 2025-04-29
tags:
  - git
publish: true
---

## 깃 시작
### Git 설치
#### ① Git 설치
- 📥 [git-scm.com](https://git-scm.com/) 접속 → 운영체제에 맞는 버전 다운로드 
- 설치 도중 "Git Bash 사용", "기본 텍스트 편집기 선택" 등은 기본값으로 OK
#### ② 설치 확인
```bash
git --version
```
- 출력 예: `git version 2.42.0`
- 나오면 정상 설치 완료 ✅
#### ③ 사용자 정보 설정 (처음 한 번만)
```bash
git config --global user.name "s나의 이름"
git config --global user.email "너의 이메일@example.com"
```
- 커밋할 때 "누가 했는지" 정보로 기록됨
#### ④ 설정 확인
```bash
git config --list
```
- 설정한 이름/이메일이 보이면 OK
#### ⑤ Git 저장소 시작하기
```bash
mkdir abcd
cd abcd
git init
```
- `abcd` 폴더에서 Git 저장소 시작
- `.git` 폴더가 생기면 **버전 관리 시작된 것!**
#### ⑥ Git 상태/기록 확인하기 (중요!)
```bash
git status          # 현재 상태
git log             # 커밋 히스토리
git rev-parse --show-toplevel  # 루트 경로 확인
```

## git 흐름
### 1. 파일 수정 or 생성
```bash
echo "Hello Git!" > hello.txt
```
### 2. 스테이징(Stage) 하기
```bash
git add hello.txt
```

📌 모든 변경 파일을 한꺼번에 올리고 싶다면:
```bash
git add .
```
### 3️. 커밋(Commit) 하기
→ “이 상태를 저장해줘!”
```bash
git commit -m "처음 파일 추가"
```
### 🧠 전체 흐름
```
[수정] → git add → [스테이징] → git commit → [히스토리에 저장 완료!]
```
#### 확인
```bash
git status     # 현재 어떤 파일이 스테이징 됐는지
git log        # 커밋 기록 보기
```

## 찾기 .git 사용중인 폴더
컴퓨터 안에 있는 `.git` 폴더
### Windows
- **PowerShell**이나 **명령 프롬프트(cmd)** 열고:
```powershell
dir -Recurse -Force -Filter ".git" -Directory 2>$null
```

또는 `git` 폴더명을 정확히 찾고 싶다면:
```powershell
Get-ChildItem -Recurse -Force -Directory -Filter ".git" 2>$null
```

- 현재 디렉토리 기준으로 `.git` 폴더가 있는 모든 경로를 찾아줘
- `2>$null`은 에러 메시지 무시

💡 **C 드라이브 전체에서 찾고 싶으면:**
```powershell
cd C:\
dir -Recurse -Force -Filter ".git" -Directory 2>$null
```
### 🐧 리눅스 / 🍎 맥 (macOS)
터미널에서:
```bash
find / -type d -name ".git" 2>/dev/null
```
- `/`는 루트 전체를 검색하는 의미야 (느릴 수 있음!)
- `2>/dev/null`은 에러 메시지 무시

📦 특정 폴더만 검색하고 싶다면:
```bash
find ~/projects -type d -name ".git"
```

### 주의점
- 이 검색은 **숨김 폴더**도 찾아주기 때문에 정확해
- 다만 전체 드라이브 검색은 시간이 꽤 걸릴 수 있어
- 관리자 권한이 없거나 일부 시스템 폴더 접근이 막혀 있을 수 있음

### `.git` 폴더 대신 "Git 저장소 루트"만 찾고 싶다면?

Git은 `.git` 폴더 안에 있으니, 결과가 `/home/you/project1/.git`이라면  
→ 이 저장소의 루트는 `/home/you/project1`이라는 뜻이야.

### Resources

#### book

- [[Do it! 5일 만에 끝내는 깃 깃허브 입문]]

##### dataview
```dataview
list
from #git 
limit 5
```
