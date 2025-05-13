---
title: Tailwind CSS 클래스 정리
description: 실무와 실습에서 자주 사용되는 핵심 클래스 위주
date:
  - - 2025-05-13
tags:
  - tailwind
  - nextjs
publish: false
---


## Tailwind CSS 자주 쓰는 클래스 정리

### 🎨 1. 폰트 관련

|목적|클래스|설명|
|---|---|---|
|크기|`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-4xl`|텍스트 크기|
|두께|`font-thin`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`|폰트 굵기|
|스타일|`italic`, `not-italic`|이탤릭 적용/해제|
|자간|`tracking-tight`, `tracking-wide`, `tracking-wider`|글자 간격|
|줄간격|`leading-tight`, `leading-relaxed`, `leading-loose`|줄 간격|
|색상|`text-gray-700`, `text-red-500`, `text-blue-600`|텍스트 색상|
|정렬|`text-left`, `text-center`, `text-right`, `text-justify`|정렬 방식|

### 📐 2. 정렬 및 레이아웃

| 목적      | 클래스                                                                                          | 설명       |
| ------- | -------------------------------------------------------------------------------------------- | -------- |
| Flexbox | `flex`, `flex-row`, `flex-col`, `items-center`, `justify-center`, `gap-4`                    | 수평/수직 정렬 |
| Grid    | `grid`, `grid-cols-2`, `grid-cols-3`, `gap-4`                                                | 그리드 레이아웃 |
| 위치 정렬   | `items-start`, `items-center`, `items-end`, `justify-start`, `justify-center`, `justify-end` | 위치 제어    |


### 📏 3. 패딩 & 마진

|구분|클래스|설명|
|---|---|---|
|마진|`m-4`, `mt-2`, `mb-2`, `ml-2`, `mr-2`, `mx-4`, `my-4`|바깥 여백|
|패딩|`p-4`, `pt-2`, `pb-2`, `pl-2`, `pr-2`, `px-4`, `py-4`|안쪽 여백|
|간격|`gap-4`, `space-x-2`, `space-y-2`|항목 간 간격 조절|

> 기본 단위: `1 = 0.25rem = 4px`


### 📐 4. 크기 설정

|속성|클래스|설명|
|---|---|---|
|너비|`w-1/2`, `w-full`, `w-screen`, `w-64`, `max-w-md`|폭 지정|
|높이|`h-1/2`, `h-full`, `h-screen`, `h-64`|높이 지정|
|최소/최대|`min-w-full`, `max-h-screen` 등|제약 조건 설정|


### 📊 5. 테이블 레이아웃

|클래스|설명|
|---|---|
|`table`, `table-auto`, `table-fixed`|테이블 구조|
|`border`, `border-collapse`, `border-separate`|테두리 설정|
|`px-4`, `py-2`|셀 여백 설정|
|`text-left`, `text-center`, `text-right`|셀 정렬 방식|


### 💡 6. 기타 유용 클래스

|목적|클래스|설명|
|---|---|---|
|배경색|`bg-gray-100`, `bg-blue-500`, `bg-opacity-50`|배경 색상|
|테두리|`border`, `border-2`, `border-gray-300`, `rounded`, `rounded-lg`|테두리 스타일|
|그림자|`shadow`, `shadow-md`, `shadow-lg`|그림자 효과|
|커서|`cursor-pointer`, `cursor-default`|마우스 커서 모양|
|전환 효과|`transition`, `duration-300`, `hover:bg-blue-700`|인터랙션 스타일|
|반응형 조건|`sm:`, `md:`, `lg:`, `xl:`|화면 크기별 조건 적용|


## 🎁 버튼 예시 코드
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
  Click Me
</button>
```
