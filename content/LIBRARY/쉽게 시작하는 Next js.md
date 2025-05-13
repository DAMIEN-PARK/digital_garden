---
tags:
  - framework
  - IT
  - Book
title: 쉽게 시작하는 Nextjs
Author:
  - 쇼다 츠야노
category: ""
Publisher: 길벗
Publish: "2024"
Cover: https://shopping-phinf.pstatic.net/main_5178158/51781589623.20241207071015.jpg
Status:
  - ⏳Ready
date: 2025-04-28 01:24:58
total: ""
isbn: "9791140711987"
isbn13: "9791140711987"
publish: true
---

![cover|150](https://shopping-phinf.pstatic.net/main_5178158/51781589623.20241207071015.jpg)
###  쉽게 시작하는 Next.js 
(초보자 눈높이에 맞춰 설명하는 Next.js 입문서!)    
- 저자 : 쇼다 츠야노

- [[ZETTELKASTEN/Fleeting/next.js]] : [[React]] 기반 웹개발 [[frame_work]]
	- React..js
	- Tailwindcss
	- JSS
	- Typescript



## 목차
### 1. Next.js 기초 지식
#### 1.1 Next.js 준비하기  
- 예전 :  Web : Frontend --form--> 서버 --> 페이지 표시 
- 발전 : FrontEnd에서 모두 처리 : React ( 하지만 서버측에서도 처리가 필요해짐)
- 현재 : 리액트 개발자들 요구를 실현
- Next.js를 프론트 백엔드 모두를 아우름. 
FrontEnd에서 가장 널리 사용되는건 Framework(<- system을 가지고 있는점이 Library와 다름. )
![[프레임워크.excalidraw]]
- 자바스크립트 -> [[Typescript]] 전환

[[React]] 는 매우 강력한 라이브러리 이지만 FrontEnd 라이브러리 일뿐. 
js가 느린속도로 인해 리액트가 DOM(document object model)도입
jsx라는 자바스크립트 확장 문법 도입
리액트로 할 수 있는건 UI뿐. 백엔드부터 프론트엔드까지 통합해서 하나의 웹 애플리케이션으로 개발 할 수 있는 프레임 워크가 next.js


- vercel에서 개발한 오픈소스 프레임워크 
- http://nextjs.org
- [[Typescript]] 지원
- 서버사이드 렌더링 : 서버에서 페이지를 미리 렌더링해서 표시
- 라우팅 : 여러페이지로 구성되고 페이지간 이동이 가능한 웹사이트 가능
- Wep API 를 간단히 작성. [[REST API]] 작성에도 사용 가능.
- 배포환경 장비 

- 리액트에 관한 선행 지식이 필요함
- 둘다 node.js(자바스크립트 런타임 엔진) 사용
	- node.js가 본체라기보다 패키지용
#### 1.2 리액트 애플리케이션 
##### 리액트 프로젝트 생성
```
npx create-react-app sample_react_app
```

- 바탕화면에 만들어두었다
- 
![[Pasted image 20250430150430.png|500]]

확인 가능
- npx 는 Node.js 에서 제공하는 명령 프로그램, 패키지 실행 전용 명령임. 
- create-react-app 이 리액트 애플리케이션 프로젝트 생성 패키지
```
npx create-react-app 프로젝트명 작성
```

- node.js에서는 npm 으로 패키지 설치를 로컬에 하고 실행 해야 했으나 ==npx== 는 설치없이 패키지 실행 가능 번거러움을 줄여줌. 
	- npx create-react-app 실행하면 패키지를 임시로 내려 받아 실행 후 내려받은 create-react-app은 삭제함
##### VScode
![[Pasted image 20250430151229.png|500]]

App.js 파일을 보면 내용이 표시 됨. 
##### 프로젝트 실행
- Node.js 를 이용해 웹애플리케이션으로 실행하는 명령
```
npm start
```

##### 구성
- node_modules : 프로젝트 참조 패키지 저장 폴더. 즉, 라이브러리 모음(리액트 전용은 아님)
- public : server에서 배포 디는 파일 저장 폴더. 공개파일 저장. index.html
- src : 리액트 어플리케이션에서 소스코드가 저장 되는 폴더 핵심임.

##### index.html

![[Pasted image 20250430152111.png]]

- `id="root"` 의 HTML 요소에 리액트 컴포넌트가 들어감.
	- 컴포넌트를 넣는 작업은 src 폴더 index.js에서 이뤄짐.

##### index.js

```JS
import React from 'react';
import ReactDOM from 'react-dom/client';    // 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));    //ReactDOM 객체생성
root.render(
  <React.StrictMode>    //여기부터
    <App />
  </React.StrictMode>    //여기까지 jsx에 해당 
);
reportWebVitals();    // 구글에서 제공하는 web vitals를 보고(삭제해도 무관)
```

- ReactDOM : 가상DOM 생성 -> ReactDOM으로 조작 -> 완료 ->배포
- `<ReactDOM>.render(-표시내용-)` 실행시 ReactDOM 루트에 설정된 요소 표시함
- 표시내용은 JSX(확장문법)를 이용. 자바스크립트를 HTML이나 XML 같은 태그 표현 값을 다룰수 있게 함. 

##### App.js
```js
import logo from './logo.svg';
import './App.css';

function App() {    //함수형 인수 시작{ }
  return (
    <div className="App">    //~/div까지 HTML 요소임
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
```

ㄴ `export default App;` 이렇게 JS로 정의한 함수나 객체를 외부에서 import로 받아서 사용할 수 있도록 내보냄
	즉 export TEST 로 내보내면 -> import TEST로 가져와 사용 가능. 

- 리액트 함수형 컴포넌트
	- 리액트는 모든 UI를 컴포넌트로 정의하여 이용. 
- Component
	- 클래스형
	- 함수형 : 다루기 쉬워서 리액트의 주류
> 리액트는 Component 를 정의하고 표시하는 것이 전부!!
#### 1.3 Next.js 애플리케이션 개발  
![[Pasted image 20250430155434.png]]

- 타입스크립트 사용 여부
- ESLint 사용 여부 : 자바스크립트 코드 분석 도구(문제 코드 감지)
- Tailwind CSS 설치여부  : CSS framwork 설치 할건지 여부(간편하게 UI디자인)
- src folder 사용 여부 : 소스코드를 src에 모아두는게 기본
- 앱 라우팅 사용 여부
- Turbopack 사용 여부 : 터보 팩은 webpack의 차세대 버전 대규모 프로젝트에 유용
- import 별명 사용 여부

```powershell
npm run dev
```

개발모드dev에서 실행 ->http://localhost:3000 에서 생성된 웹페이지가 표시

![[Pasted image 20250430160921.png]]

| 폴더           | 내용                               |
| ------------ | -------------------------------- |
| .next        | Next.js 관련 파일 저장                 |
| node_modules | 프로젝트에서 사용하는 패키지 저장               |
| public       | 공개파일이 저장                         |
| src          | Next.js 프로그램(자바스크립트 파일)이 저장되어 있음 |

- 폴더 : \src\app : Next.js에서 사용하는 component 
	- layout.tsx : 애플리케이션 ==공통 레이아웃 정의==한 파일
	- page.tsx : ==표시할 페이지==를 정의
-  React 프로젝트의 App.js와 같음. 


![[Pasted image 20250430182018.png|400]]

ㄴ [[layout-page.excalidraw]]

- .tsx 파일은 [[Typescript]] 버전 JSX, 타입스크립트+JSX
- layout.tsx 내용
	- import로 객체 불러옴
	- 폰트 임포트 `const geistSans = localFont({~~})`
	- Metadata : `export const metadata : Metadata = {`
	- 컴포넌트 정의 : `export default function RootLayout (~인수~){`
	- `{children: React.ReactNode};` Reactnode 라는 리액트 가상DOM 노드가 보관된 children 인수가 준비 됐다.
- page.tsx 내용
	- return 부분에는 JSX 사용한 내용이 계속 작성 됨
	- import Image 사용시 `{Image}` 가 아님을 주의!

#### 1.4 Vercel로 배포하기  
- [Vercel](https://vercel.com)
- 프로젝트 생성
	- clone Template >> Next.js Bilerplate >> add GitHub Account >> install >> Create private Git repository >>Create
### 2. 리액트 컴포넌트 학습
2.1 리액트 함수형 컴포넌트의 기본  
2.2 스테이트와 훅  
2.3 컴포넌트 활용  
**  
CHAPTER 3 Next.js 페이지 만들기**  
3.1 리액트 기반 컴포넌트  
3.2 라우팅과 페이지 이동  
3.3 스타일과 레이아웃  
**  
CHAPTER 4 페이지 라우터 애플리케이션**  
4.1 페이지 라우터에 대해서  
4.2 복수 페이지와 라우팅  
4.3 레이아웃과 초기 속성  
**  
CHAPTER 5 페이지 렌더링**  
5.1 페이지 라우터와 서버 사이드 렌더링  
5.2 페이지 라우터와 정적 사이트 생성  
5.3 페이지 라우터의 서버 사이드 렌더링  
5.4 앱 라우터의 렌더링  
**  
CHAPTER 6 데이터 액세스**  
6.1 fetch를 이용한 데이터 액세스  
6.2 서버 액션  
6.3 SWR에 의한 네트워크 액세스  
**  
CHAPTER 7 API 작성과 이용**  
7.1 페이지 라우터와 API  
7.2 앱 라우터와 라우트 핸들러  
**  
CHAPTER 8 OpenAI API 이용하기**  
8.1 OpenAI API 준비하기  
8.2 Next.js에서 채팅 기능 이용하기  
8.3 Next.js에서 이미지 생성하기  
8.4 OpenAI 패키지 이용하기  
**  
부록 A 타입스크립트 입문**  
A.1 값, 변수, 구문  
A.2 함수 이용하기  
A.3 객체 이용하기