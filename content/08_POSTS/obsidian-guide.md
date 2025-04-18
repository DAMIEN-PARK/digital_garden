---
title: Obsidian으로 블로그 글 작성하기
date: 2024-04-15
description: Obsidian을 사용하여 블로그 글을 작성하고 배포하는 방법을 알아봅니다.
tags: [obsidian, git, blog]
---

# Obsidian으로 블로그 글 작성하기

Obsidian은 마크다운 기반의 강력한 노트 작성 도구입니다. 이 가이드에서는 Obsidian을 사용하여 블로그 글을 작성하고 배포하는 방법을 설명합니다.

## 글 작성 방법

1. `src/content/posts/` 폴더에 새 파일 생성
2. 프론트매터 작성
3. 마크다운으로 콘텐츠 작성
4. Git으로 커밋 및 푸시

## 마크다운 문법

- 제목: `#`, `##`, `###` 등
- 목록: `-` 또는 `1.`
- 링크: `[텍스트](URL)`
- 이미지: `![설명](이미지URL)`
- 코드: ``` ``` 또는 ` `

## Git 연동

Obsidian Git 플러그인을 사용하면:
1. `Ctrl + P`로 명령어 팔레트 열기
2. "Git: Commit" 실행
3. 커밋 메시지 입력
4. "Git: Push" 실행 