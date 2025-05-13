---
title: 구디개발자_nextjs_강의노트
description: 
date:
  - - 2025-05-06
tags:
  - nextjs
publish: false
---


---
- 방문해서 안내에 따라 설치
	shadcn ui : https://ui.shadcn.com/
- VS code에 react 검색해서 설치

![[Pasted image 20250506213443.png]]
- `page.tsx`
	`rfce` 누르면 기본적인 세틍 가능

![[clip_Next.js 14 업데이트 살펴보기#**1) 라우팅 디렉토리 및 파일 규칙**]]

- `global.css` tailwind 기반으로 개발.  레이아웃 관리.
- 





### 1. next.js란 무엇인가


### 2. Data Fetching
- CSR client side Rendering : 클라이언트에서 그림. 서버에서 기초HTML 자원 전송해주면 브라우저가 해석해서 DOM 만들고 자원들 다운함. 컴포넌트가 동적 생성됨
	- view rendering 브라우저가 담당/ 새로고침 발생없어서 네이티브 앱과 비슷한 경험. 첫페이지가 느림 /SEO 추가 보완작업 필요
- SSR Server side Rendering : HTML
- SSG static site generation : 정적 사이트 생성
- ISR incremental Static Regeneration : 일정시간마다 재 생성

### 3. Pages & Layouts
- page.js 해당경로에 고유한 UI
- layout : 여러페이지에 공유되는 UI

### 4. Routing
- 라우팅 : 브라우저 경로에 따라 다른 화면(페이지)를 보여주는것. 

### 5. Shadcn UI




### Resources
- full course 강의 : https://youtu.be/fXLBVDa6J2s?si=CSIIhpsiZcY2ZagK