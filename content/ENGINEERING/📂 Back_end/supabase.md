---
title: supabase 란 무엇인가
description: supabase 소개
date: 2025-04-22
tags:
  - DB
  - backend
publish: true
URL: https://supabase.com/dashboard/projects
---

### 0. summary
- url : [SUPABASE](https://supabase.com/dashboard/projects)
Supabase는 "Firebase의 오픈 소스 대안"으로 불림 
실시간 데이터베이스, 인증, 파일 스토리지, 자동 API 생성 등 [[BackEnd]] 개발에 필요한 기능을 패키지로 제공
[[FrontEnd]] 개발자도 손쉽게 강력한 애플리케이션을 만들 수 있게 해주는 플랫폼
빠르게 시작하고, 자유롭게 확장할 수 있는 오픈 소스 [[BackEnd]] 플랫폼.  
- 초기 MVP 또는 스타트업 서비스 구축에 추천
- SQL 중심 팀워크에 이상적
- 보안 및 실시간 기능도 기본 제공
### 1. Supabase 란 무엇인가?
- 오픈 소스 기반 백엔드 플랫폼
- "Firebase의 오픈 소스 대안"
- 개발자가 빠르게 웹/모바일 앱 구축 가능
- 실시간, 인증, 스토리지, API 기능 통합 제공
### 2. 핵심 기능 요약

| 기능        | 설명                       |
| --------- | ------------------------ |
| 관계형 DB    | PostgreSQL 기반, SQL 쿼리 지원 |
| 실시간 동기화   | 웹소켓 기반 실시간 데이터 반영        |
| 인증/권한     | OAuth, Email 로그인, RLS    |
| 파일 스토리지   | 이미지, 문서 업로드 및 권한 관리      |
| 자동 API 생성 | REST + GraphQL 자동 제공     |
| 서버리스 함수   | Deno 기반 Edge Functions   |

### 3. Supabase vs Firebase 비교

|항목|Supabase|Firebase|
|---|---|---|
|DB|PostgreSQL|Firestore (NoSQL)|
|API|자동 생성|SDK 기반|
|커스터마이징|오픈 소스, 셀프호스팅 가능|제한적|
|실시간|웹소켓 기반|실시간 DB|
|가격 정책|예측 가능|사용량 폭증 시 비용 증가|

### 4. 왜 Supabase 를 선택?
- [[SQL]] 사용 가능: 팀 간 협업, 분석 용이
- 완전한 커스터마이징: 오픈소스 및 셀프 호스팅
- 실시간 반응성: 채팅, 협업 툴에 적합
- 개발 속도 향상: API 자동화 및 보안 내장
- 스타트업, 개인 개발자 친화적 요금제
### 5. 실제 사용 사례
#### 5.1. [[Slack]] 클론 앱
- 채널 기반 메시지 시스템 구현
- 실시간 채팅, 유저 인증, 파일 첨부
- Supabase Realtime, Auth, Storage 기능 활용
#### 5.2. To-Do/칸반 보드 앱
- Drag & Drop 기반 UI 및 실시간 동기화
- 사용자별 보드 접근 제어 (RLS 적용)
- 서버리스 함수로 알림 기능 확장 가능
#### 5.3. 커뮤니티 포럼
- 사용자 등록 및 로그인
- 게시글 CRUD 및 댓글 기능
- [[REST API]] 자동 생성으로 빠른 구축

### Resources
##### Youtube
- [ ] [생활코딩_Supabase](https://youtu.be/FbLzqoENTsg?si=KvDz1u-OQA7dX6UE)
- [ ] [생활코딩_Supabase - 인증과 Serverless App 구현하기](https://youtu.be/yZ89etxVBKs?si=yo_RaOsZ-zxPxa0W)
- [ ] [firebase vs supabase](https://youtu.be/f8inSwfOVZc?si=TfaP61oVfVZq0Ibx)
- [ ] [Cursor AI를 사용해서 Supabase 데이터베이스 연동 방법](https://youtu.be/26qUIBx_Bl0?si=d0cVZU6I1i7CsA1E)
- [ ] [파이어베이스 킬러? 요즘 대세는 수파베이스!](https://www.youtube.com/watch?v=tvX9f8FqMFI)
- [ ] [노트앱 만들기](https://youtu.be/yeqRtc_uSZs?si=UDP-dd2dA4vwgGQK)
- [ ] 