---
title: WEB_개발노트
description: 
date: 2025-04-21
tags: 
draft:
---


---

# Quartz 컴포넌트 생성 가이드 내용 설명
 Quartz 프레임워크에서 사용자 정의 컴포넌트를 만드는 방법에 대한 상세한 가이드
## 1. 컴포넌트 개념
- HTML은 재사용 가능한 템플릿을 만들 수 없다는 한계가 있음
- Quartz는 React와 유사한 컴포넌트 개념을 사용하여 이 문제를 해결
- 컴포넌트는 데이터를 입력받아 HTML을 출력하는 JavaScript 함수
## 2. 컴포넌트 구조
### 생성자(Constructor)
- 컴포넌트는 .tsx 파일로 작성됨
- QuartzComponentConstructor 함수 형태를 따라야 함
- 옵션을 통해 컴포넌트 렌더링 동작을 변경할 수 있음

### 속성(Props)
- 모든 Quartz 컴포넌트는 동일한 속성 세트를 사용
- fileData: 현재 페이지의 메타데이터
- cfg: 전역 설정
- tree: HTML AST
- allFiles: 모든 파일의 메타데이터
- displayClass: 모바일/데스크톱 설정
## 3. 스타일링
- 컴포넌트에 .css 속성을 정의하여 스타일 추가 가능
- 인라인 스타일은 바닐라 CSS만 가능
- SCSS 파일 가져오기도 지원
- 스타일은 전역적으로 적용되므로 특정 클래스 이름 사용 권장
## 4. 상호작용 추가하기
- .beforeDOMLoaded: 페이지 로드 전 실행되는 스크립트
- .afterDOMLoaded: 페이지 로드 후 실행되는 스크립트
- "nav" 이벤트: 페이지 탐색 시 발생하는 이벤트
- "prenav" 이벤트: SPA 탐색 전 실행되는 이벤트
- .inline.ts 파일을 통해 외부 코드와 패키지 가져오기 가능
## 5. 컴포넌트 사용하기
- quartz/components/index.ts에 컴포넌트 등록
- quartz.layout.ts에서 컴포넌트 사용
- 다른 컴포넌트 내에서 중첩 사용 가능

이 가이드는 JavaScript와 TypeScript에 익숙한 개발자를 대상으로 하며, Quartz의 컴포넌트 시스템을 통해 디지털 가든을 더 풍부하고 상호작용적으로 만드는 방법을 설명합니다.