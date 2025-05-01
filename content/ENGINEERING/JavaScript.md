---
title: JavaScript
description: 
date:
  - - 2025-04-30
tags:
  - IT
  - 개발언어
publish: true
---
## python과 비교

## ✅ 1. 변수 선언

| 기능    | JavaScript                  | Python    |
| ----- | --------------------------- | --------- |
| 변수 선언 | `let x = 5;``const y = 10;` | `x = 5`   |
| 타입 확인 | `typeof x`                  | `type(x)` |

## ✅ 2. 조건문 & 반복문

|기능|JavaScript|Python|
|---|---|---|
|조건문|`if (x > 0) {}`|`if x > 0:`|
|else/elif|`else if`, `else`|`elif`, `else`|
|for 반복문|`for (let i = 0; i < 5; i++) {}`|`for i in range(5):`|
|배열 순회|`for (let item of arr)`|`for item in arr:`|
|객체 순회|`for (let key in obj)`|`for key in dict:`|

##  3. **함수 선언 & 호출**

|기능|JavaScript|Python|
|---|---|---|
|함수 정의|`function add(a, b) { return a + b; }`|`def add(a, b): return a + b`|
|화살표 함수|`const add = (a, b) => a + b;`|(Python은 없음)|
|함수 호출|`add(1, 2)`|`add(1, 2)`|

##  4. **배열 / 리스트 메서드**

|기능|JavaScript|Python|
|---|---|---|
|추가|`arr.push(1)`|`arr.append(1)`|
|제거|`arr.pop()`|`arr.pop()`|
|앞에 추가|`arr.unshift(1)`|`arr.insert(0, 1)`|
|map|`arr.map(x => x * 2)`|`[x * 2 for x in arr]`|
|filter|`arr.filter(x => x > 0)`|`[x for x in arr if x > 0]`|
|reduce|`arr.reduce((acc, x) => acc + x, 0)`|`from functools import reduce``reduce(lambda acc, x: acc + x, arr, 0)`|
|포함 여부|`arr.includes(3)`|`3 in arr`|

## 5. **문자열 메서드**

|기능|JavaScript|Python|
|---|---|---|
|길이|`str.length`|`len(str)`|
|대소문자|`str.toUpperCase()`|`str.upper()`|
|자르기|`str.slice(1, 4)`|`str[1:4]`|
|포함 여부|`str.includes("a")`|`"a" in str`|
|나누기|`str.split(",")`|`str.split(",")`|
|치환|`str.replace("a", "b")`|`str.replace("a", "b")`|
|공백 제거|`str.trim()`|`str.strip()`|

## 6. **객체 / 딕셔너리**

|기능|JavaScript|Python|
|---|---|---|
|선언|`const obj = {a: 1}`|`d = {"a": 1}`|
|값 접근|`obj.a` / `obj["a"]`|`d["a"]`|
|키 목록|`Object.keys(obj)`|`d.keys()`|
|값 목록|`Object.values(obj)`|`d.values()`|
|키/값 쌍|`Object.entries(obj)`|`d.items()`|
|삭제|`delete obj.a`|`del d["a"]`|

##  7. **비동기 처리**

|기능|JavaScript|Python|
|---|---|---|
|setTimeout|`setTimeout(() => {}, 1000)`|`import time``time.sleep(1)`|
|Promise|`new Promise((res) => res())`|`import asyncio` + `async def`|
|async/await|`async function`|`async def`|
|예시|`await fetch()`|`await aiohttp.get()` 등|

## 8. **날짜 / 시간**

|기능|JavaScript|Python|
|---|---|---|
|현재 시간|`new Date()`|`from datetime import datetime``datetime.now()`|
|타임스탬프|`Date.now()`|`time.time()`|
|시간 포맷|`.toISOString()`|`strftime()`|

##  9. **JSON 처리**

|기능|JavaScript|Python|
|---|---|---|
|객체 → JSON|`JSON.stringify(obj)`|`json.dumps(obj)`|
|JSON → 객체|`JSON.parse(jsonStr)`|`json.loads(jsonStr)`|

##  **요약 정리**
- JavaScript는 **세미콜론 + 중괄호**
- Python은 **들여쓰기 + 콜론**
- JS `map()` ↔ Python list comprehension
- JS `Object` ↔ Python `dict`
- JS `async/await` ↔ Python `async/await` 거의 동일 (문법만 다름)