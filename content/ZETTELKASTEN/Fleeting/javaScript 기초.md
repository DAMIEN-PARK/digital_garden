---
title: 무제
description: 
date:
  - - 2025-05-12
tags: 
publish: false
---


---

- 마크업
	html 뼈대
	css 스킨

javascript : 논리설계 가능

대부분 언어의 필수 값들
- 변수
- 함수
- 조건문
- 반복문

### 변수
- 박스에 넣는다
- var let const
- 크롬 브라우저 콘솔창에서 연습
- `var a=1`바꿀수 있음
- `const a=1`은 바꿀수없음
- `let a = 1` 제약이 없음(보통 사용)
- 호이스팅 
### 함수
- `function`
```js
function myFunction(x){
	let temp = 2*x +3*y
	return temp
}

//실행
add(1,2)
```
ㄴ 입력과 출력이 없을 수 있음
```js
function fly(){
	openWings();
	while (true){
		moveWings();
	}
}
//코드를 묶어주는 기능, 코드묶음 가령 레비오사()
fly()
```

- 화살표 이용
```js
add = (x,y) =>{
	let temp x+y;
	retrun temp;
}
```
### 조건문
> 돈이 5000원 이상 있으면 택시 탄다
```js
if(money>5000) {
	rideTaxi();
} else if(money > 2000){
} else {
	walk();
} 
```

### 반복문
> 나무 열번 찍기
> "찍은횟수=10" 이 되면 거짓이 되어 종료

```js
for (let i = 0; i<10; i++ ) {
	console.log("나무찍기" +i);
}
```
i 초기값을 0 으로 함. 나무찍은 횟수/ i<10 거짓 되면 종료
```js
myArray=[1,2,3,4,5]

myArray.forEach(element => {
	console.log("나무찍기" + element)
})
```
ㄴ 하나씩 빼서 중괄호 안을 실행





### Resources
