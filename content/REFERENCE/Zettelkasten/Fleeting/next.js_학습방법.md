---
title: next.js_학습방법
description: 
date: 2025-04-21
tags:
---

### 학습방법

Next.js는 **React 기반의 프레임워크**로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), API 라우팅, 이미지 최적화 등 다양한 기능을 내장하고 있어 프론트엔드 개발자에게 매우 강력한 도구입니다.

## ✅ Next.js 학습 로드맵 (기초 → 실전)
###  1단계. **React 기본기 다지기 (필수)**
Next.js는 [[React]] 위에 만들어진 프레임워크, React의 핵심 개념을 반드시 먼저 이해.
####  학습 주제:
- JSX 문법 
- 컴포넌트 (함수형)
- props / state
- 이벤트 핸들링
- useState, useEffect 훅
- 컴포넌트 간 데이터 흐름
- React Router (기초만)
###  2단계. **Next.js 기초 개념 학습**
####  학습 주제:
- 프로젝트 생성 (`npx create-next-app`)
- 폴더 구조 이해 (`/pages`, `/public`, `/app`)
- 라우팅 시스템 (`pages` 디렉토리 기반)
- Link 컴포넌트로 페이지 이동
- 정적 페이지 (Static Generation - SSG)
- 서버 사이드 렌더링 (Server Side Rendering - SSR)
- API Routes (백엔드 기능 포함 가능)
###  3단계. **Next.js 핵심 기능 익히기**
####  학습 주제:
- `getStaticProps`, `getServerSideProps` 차이점
- 이미지 최적화 (`next/image`)
- Head 컴포넌트 (`next/head` 활용)
- 폴더 기반 라우팅
- 동적 라우팅 (`[id].js`)
- 레이아웃 구조 잡기 (`_app.js`, `_document.js`)
- CSS 모듈, Tailwind CSS 연동
- 환경변수 사용
###  4단계. **실전 프로젝트 따라하기**
- 블로그 클론 (Markdown + SSG)
- 쇼핑몰 상품 리스트 & 상세 페이지
- 포트폴리오 웹사이트 제작
- Todo 앱 (API Routes 활용)
###  5단계. **고급 기능 학습**
#### 학습 주제:
- App Router (13버전부터 도입된 `/app` 디렉토리 방식)
- `useRouter`, `usePathname`, `useSearchParams` 등 라우팅 훅
- Middlewares (미들웨어)
- 서버 컴포넌트 vs 클라이언트 컴포넌트
- Authentication (JWT or NextAuth.js)
- SEO 최적화
- 배포 (Vercel 사용)
##  학습 방법 팁

| 방법             | 설명                                                    |
| -------------- | ----------------------------------------------------- |
| 📘 공식 문서 먼저 보기 | Next.js 공식문서가 가장 친절합니다. 실습 위주로 따라가세요.                 |
| 💻 코드 따라치기     | 개념은 문서로 익히고, 코드는 직접 작성해서 익숙해지세요.                      |
| 🧩 작은 프로젝트 만들기 | 기능 하나씩 넣으면서 블로그/포트폴리오/Todo 앱 만들어보세요.                  |
| 🛠 GitHub 활용   | 학습한 코드는 GitHub에 정리해두면 포트폴리오로도 활용됩니다.                  |
| 🧑‍💻 커뮤니티 질문  | StackOverflow, Reddit, GitHub Discussions, 한국 커뮤니티 활용 |

###  마지막 팁
> **처음엔 App Router보다 Pages Router로 시작하는 걸 추천드립니다.**  
> App Router는 아직 실무에서도 완전히 이관되지 않았기에, 먼저 기존 방식에 익숙해진 후 전환하는 것이 좋습니다.



###  학습 리소스:
- [React 공식 튜토리얼](https://react.dev/learn)   
- [코드로 배우는 React](https://react-ko.dev/)
    
🔗 추천 공식 튜토리얼:

- [Next.js 공식 Docs](https://nextjs.org/learn) ← 무조건 따라하기!