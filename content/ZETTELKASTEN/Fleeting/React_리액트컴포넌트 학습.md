---
title: React Component 학습
description: 
date:
  - - 2025-05-13
tags:
  - react
publish: false
---

---
- 리액트 함수형 컴포넌트의 기본  
	- 만들어둔 ==REACT_APP== 폴더 이용(next아님 주의)
	- 리액트는 중간에 ctrl + c  할필요 없이 실시간 반영
#### 2.1 컴포넌트
- jsx에서는 `{}` 를 사용해서 변수나 상수 삽입 가능
```js
<p>{hello}</p>
```
- 실습 : `app.js` 파일
```js
import './App.css';

function App() {
  const msg = "일단 아무거나 테스트 중";
  return (
    <div className="App">
      <h1> React practice </h1>
      <p> this is a practice application </p>
      <div>{msg} </div>
    </div>
  );
}
export default App;
```
ㄴ `const msg ="내용 집어넣고"` 이걸 `<div>{msg} </div>` 위치에 맞게 넣어줌
ㄴ component 만들때 `{ }` 를 이용해서 값 삽입이 기본

![[Pasted image 20250513121329.png|300]]

##### 인수와 속성
- component 는 외부에서 import해서 사용
	- `app.js`에서 작성돼서 `index.js` 에 import 문으로 표시됨
- 속성 전달 방식
	- `function 이름(인수) { 내용들 }` <- 이런식으로 인수 지정
- `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title = "being test" message = "여기다가는 속성값"/>
  </React.StrictMode>
);
reportWebVitals();
```

- `App.js` 에서 표시 (Easy_React_App)
```js
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1> {props.title} </h1>
      <p>{props.message}</p>
    </div>
  );
}
export default App;
```

ㄴ props는 properties의 줄임
ㄴ `{props.title}`은 프로퍼티의 제목을 땡겨와라 의미. 
##### 속성 값 설정
- `App.css`
```js
.red{
	color:red;
}
.green{
	color:green;
}
.blue {
	color:blue;
}
```
- App.js
```js
...
      <h1 className={props.color}> {props.title} </h1>
      <p className={props.color}>{props.message}</p>
```
ㄴ 추가. 스타일 클래스는 class가 아니라 className
ㄴ HTML 대부분을 사용할 수 있지만 jsx에서는 class 안됨. 자바/타입스크립트에  class 함수가 존재하기 때문 
#### 2.2 스테이트와 훅  
##### state
- [[React]] 에서는 컴포넌트 값을 state 로 관리. 
- 실시간으로 클릭하면 표시나 텍스트값 변경 기능
- `App.css` 에 추가
```css
.clickable {
	curosr:pointer;
	font-size : 24px;
}
```
- `App.js`
```js
function App(props) {
  var counter = 0 ;
  const doClick = () =>{
    counter++;
  };
  return (
    <div className="App">
      <h1 className={props.color}> {props.title} </h1>
      <p className={props.color, "clickable"}
      onClick = {doClick}>
      counter:{counter} </p>
    </div>
  );
}
```
- 함수형 컴포넌트는 호출때만 작동하고 렌더링 끝나면 사라짐. 함수안의 변수등은 바로 사라짐.
- 따라서 state를 이용하기 위해 state hook 기능이 있음
##### Hook
```js
import {useState} from `react`; 
```

```js
const [변수 A, 변수 B] = useState(초깃값);
```

- 카운터 수정 `App.js`
```js
import './App.css';
import { useState } from 'react';

function App(props) {
  const [counter, setCounter] = useState(0);
  const doClick = () =>{
    setCounter(counter+1);
  };

  return (
    <div className="App">
      <h1 className={props.color}> {props.title} </h1>
      <p className={`${props.color} clickable`}
      onClick = {doClick}>counter:{counter}. </p>
    </div>
  );
}
export default App;
```
###### 훅 사용법
> `useState(0);` : 초기값이 0  인 정수 값

```js
const doClick =() => {
 	set Counter(counter+1);
 	};`
```
`<p>` 태그에 `onClick={DoClick}` 과 깉이 삽입 돼서 클릭하면 호출 설정 됨. 
- 이벤트 속성(on 뒤에 대문자Click)에 함수 할당할 경우 `{ }` 로 해야함..  `()` 함수 호출 하면 안됨
>작성요령 
onClick={doClick}
~~onClick={doClick{}}
onClick=doClick~~
- State 값을 {}로 jsx에 삽입하면 값이 변경될때 마다 자동으로 업데이트
	- 일이 있을때 마다 컴포넌트가 모두 다시 만들어진 다고 보면 됨
##### 폼 사용  
- 사용자 입력을 받을때 항상 form을 사용
	- [[React]]는 state를 이용하여 form의 입력값 관리
- `App.css` 에 추가
```css
input {
  margin: 5px;
  padding: 5px;
}

button {
  margin: 5px;
  padding: 5px 15px;
}
```
- `App.js` 수정
```js
function App(props) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("너의 이름은?");
  const doInput = (event) =>{
    setInput(event.target.value);
  };
  const doClick = () =>{
    setMessage("안녕 "+ input + " 님!!!")
  }
  return (
    <div className="App">
      <h1 className={props.color}> {props.title} </h1>
      <p className={`${props.color} clickable`}>
      {message}</p>
      <div>
        <input type = "text" onChange={doInput} />
        <button onClick={doClick}> Click </button>
      </div>
    </div>
  );
}
```
- 화면 

 ![[Pasted image 20250513161408.png|500]]

###### 처리 흐름 정리
- state
	- `const [input, setInput] = useState("");` : 입력 text 관리
	- `const [message, setMessage] = useState("너의 이름은?");` :  표시 메세지 관리
- `<input>` 의 onChange
	`const doInput = (event) =>{`
		`setInput(event.target.value);`
	- doInput 은 input의 onChange 이벤트에 사용
	- 필드에 텍스트를 입력하면 그 값이 실시간으로 input state에 저장 됨
- `<button>` 의 onClick 
	`const doClick = () =>{`
		`setMessage("안녕 "+ input + " 님!!!")`
	- input을 사용한 메시지를 state로 설정

[[React]]에서는 입력한 값의 state관리 + 이벤트처리 조합을 사용해 form을 만듬
##### Effect Hook
- 부수적인 이벤트 처리용 `useEffect` 를 사용 . `App.js` 
```js
import {useState, useEffect} from 'react';
// 아래와 같은 형태
useEffect(함수,[스테이트])
```
- 함수 : 화살표
- 스테이트 : (생략가능)
- `App.js`
```js
...
useEffect(()=> {
    var prime = true;
    if (input==1){
      prime = false;
    } else {
      for(var i =2; i<= input / 2; i++) {
        if(input%i===0) {
          prime = false;
          break
        }
      }
    }
    setMessage(prime? "소수입니다" : "소수가 아닙니다")
  }, [input]
  );
```
ㄴ 소수인지 아닌지를 판정해서 소수인경우 prime=true/아닌경우 false로 설정
ㄴ prime값에 따라 표시 메세지를 setMessage로 설정
ㄴ message의 state 변화로는 이 훅이 나오지 않게 설정해야함.
ㄴ 어떤 state가 업데이트 될때 실행할지 명확하게 설정해야 함. effectHook 내에서 사용하는 state는 제외하는 걸 이해가 중요.

#### 2.3 컴포넌트 만들기 
##### 데이터 목록표시
##### 스타일 클래스 다루기
##### 스타일 객체 이용

##### 여러 컴포넌트 이용

##### 글로벌 변수로 데이터 공유

##### 함수형 Component 와 State 이해
- 리액트 컴포넌트의 핵심은 ==함수형 컴포넌트== 와 ==스테이트== 





### Resources
- [[쉽게 시작하는 Next js]]
- 