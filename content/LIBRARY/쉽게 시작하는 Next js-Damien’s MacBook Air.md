---
tags:
  - framework
  - IT
  - Book
  - nextjs
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

- [[next.js]] : [[React]] 기반 웹개발 [[frame_work]]
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
![[Pasted image 20250430155434.png|900]]

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
- github > 프로젝트에서 `.` 누르면 바로VS code 실행됨
### 2. [[React]] 컴포넌트 
- 리액트 학습 노트 : [[React_리액트컴포넌트 학습]]
- 핵심은 함수형 ==Componet 와 State== 의 활용
### 3. Next.js 페이지 만들기
#### 3.1 리액트 기반 컴포넌트  
- `layout.tsx` : page 전체 레이아웃
- `page.tsx` : 홈페이지로 표시할 컨텐츠 `/app` 폴더 안의 컨텐츠
- ``
```tsx
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <h1> Next.js test page </h1>
      <p> this is test application </p>
    </main>
  );
}
```
ㄴ `npm run dev`  로 실행 , h1과 p 만으로만 구성된 간단한 컴포넌트
##### 폰트-여백 조정
```tsx
...
      <h1 className="text-2xl m-5"> Next.js test page </h1>
      <p className="text-lg m-5"> this is test application </p>
```
##### Tailwind CSS
| 클래스명       | 풀어쓴 의미                | 설명           |
| ---------- | --------------------- | ------------ |
| `text-2xl` | `font-size: 1.5rem`   | 제목용 큰 글자     |
| `text-lg`  | `font-size: 1.125rem` | 일반보다 약간 큰 글자 |
| `m-5`      | `margin: 20px`        | 네 방향 모두 여백   |

[[Tailwind CSS 클래스 정리]]

##### form 이용
- next.js의 컴포넌트는 리액트 기능 그대로 사용 가능
```tsx
'use client';     // client 컴포넌트라는걸 나타냄
import {useState} from 'react';

export default function Home() {
  var [input, setInput] = useState("");
  var [message, setMessage] = useState("이름이 뭔가요?");
  const doChange = (event) => {
    setInput(event.target.value);
  };

  const doClick = () => {
    setMessage("hello " +input );
    setInput("");
  }

  return (
    <main>
      <h1 className="text-2xl m-5 text-blue-500"> Next.js test page </h1>
      <p className="text-lg m-5"> {message} </p>
      <div className='m-5'>
        <input type='text' onChange={doChange} value={input}
        className='p-1 border-solid border-2 border-gray-400'/>
        <button onClick={doClick}
        className='px-7 py-2 mx-2 bg-blue-800 text-white rounded-lg'>
        Click </button>
      </div>
    </main>
  );  // return 끝
}
```
ㄴ `'use client';` 리액트의 state 기능 쓸려면 ==반드시 선언== 해야 함.
ㄴ `import {useState} from 'react';` : 리액트 state hook을 사용하기 위한 구문
ㄴ input | button 는 tailwind CSS 클래스 지정 표시해야 나타나는걸 유의!!

##### 클래스 정의
- 실제 개발하면 일일이  className을 지정하는게 보통일이 아님
	그래서 자주 쓰는걸 class로 정의 해둠
	src/app 폴더안에 `global.css` 스타일 시트가 있음 여기다가 추가함
- `global.css`
```css
.title{
  @apply text-2xl m-5 text-red-500;
}
.msg {
  @apply text-lg m-5 text-gray-900;
}
.input {
  @apply p-1 border-solid border-2 border-gray-400 rounded-sm;
}
.btn {
  @apply px-7 py-2 mx-2 bg-blue-800 text-white rounded-lg;
}
```

- title | msg | input | btn 클래스를 정의하는 코드
- `page.tsx` 수정함 `global.css` 를 사용
```tsx
return (
    <main>
      <h1 className="title"> Next.js test page </h1>
      <p className="msg"> {message} </p>
      <div className='m-5'>
        <input type='text' onChange={doChange} value={input}
        className='input'/>
        <button onClick={doClick}
        className='btn'>
        Click </button>
      </div>
    </main>
  );  // return 끝
}
```
- `@apply` 는 
	CSS coutom properties를 이용하기 위한 지시어
	CSS에서 미리 정의된 클래스등을 변수처럼 다룰수 있게 해줌. 
	클래스 안에는 일일이 스타일 값을 지정해야 되는데, @apply 를 사용해서 클래스 이름을 지정 해 두면 해당 클래스 스타일을 그대로 사용할 수 있음.
#### 3.2 라우팅과 페이지 이동  
- 리액트는 ==현재 페이지를 표시하는 동안만 작동하는 프레임 워크==, 
- Single Page Application : 다른 페이지로 이동하면 모두 사라지는 한페이지 애플리케이션임(SPA라고 함)
- ![[clip_SPA란 웹 개발 트렌드 SPA의  특징부터 구현 방법까지 모두 알려드립니다! I 이랜서 블로그#SPA(Single Page Application)란?]]
- 파일 시스템 기반
	- src 폴더 내 /app 폴더 가 애플리케이션 root가 됨.
	- 다른페이지는 `/app/새로운 폴더/page.tsx` 이런식으로 컴포넌트 생성
	- 라우팅을 위한 특별한 설정은 필요없음 `page.tsx` 파일을 폴더안에 넣으면 끝.
- other 폴더 만들어서 page.tsx 파일 만듬
```css
// global.css
...
:any-link {
	@apply text-lg m-5 text-sky-600;
}
```
 any-link는 모든 링크에 적용되는 스타일 정의
 - app 폴더 내 page.tsx
```tsx
import Link from "next/link";

export default function OtherPage() {
  return (
    <main>
        <div>
        <h1>Other Page</h1>
        <p>This is another page in the app.</p>
            <Link href="/">Go back to Home</Link>
        </div>
    </main>
  );
}
```
 - ohter 폴더 내 page.tsx
```tsx

```

- 동적라우팅
	- 페이지마다 tsx를 다 만들수  없는 노릇이라서 폴더로 감싼다 `[]` 이렇게 파라미터로 인식하게 됨. 


#### 3.3 스타일과 레이아웃  
- 로컬CSS가 > 글로벌 CSS 보다 먼저 적용됨. 

- 폴더별로 layout과 style 시트를 준비할수 있음 폴더 마다 완전히 분리 된것이 아니라 상속 됨. 
- 





여기까지 페이지 컴포넌트 생성/ 라우팅 /CSS/Layout 배움.

### 4. 페이지 라우터 애플리케이션
#### 4.1 페이지 라우터에 대해서 
- 앱라우터 / 페이지라우터 선택은 프로젝트 생성 이후에는 바꿀수 없음 
##### 앱APP 라우터
- 최근에 도입된 방식
- app 폴더 내 배치 `layout.tsx`, `page.tsx` 앱 전체 라우팅
- src/app/컨텐츠 <- 이런식으로 모여 있음. App 라우터 방식에 의한 파일 구성
##### 페이지 라우터
- 원래 존재하던 라우팅 방식
- /페이지 : page 라우터, pages라는 폴더에 파일 배치
- 정적 페이지는 앱 라우터에는 없고 ==페이지 라우터에만 있음==.
	- SSR(Server Side Rendering) : client에 전송되는 단계에서 컴포넌트가 HTML 코드로 전송되느 페이지. 

#### 4.2 복수 페이지와 라우팅  
- 라우터의 핵심. 
###### 앱 라우터와의 차이
- App Router는 "폴더 단위"로 페이지를 만듬, 해당 페이지에 필요한 CSS나 JS 파일도 **같은 폴더에 정리** 가능.  
- 반대로, **컴포넌트 파일 하나만으로 페이지를 구성하려 하면**,  **폴더가 없어서 관련 파일 함께 정리하기 어려움
-  App Router 방식 (폴더 기반)
```bash
## 이건 관리가 쉬움
/app
  /about
    page.tsx
    styles.css
    utils.ts


##  파일로만 구성하면 관리가 어려움. 
/app
  about.tsx  ← 여기 페이지 컴포넌트가 있음
```
- `about/page.tsx`는 `/about` 경로에 해당됨
- 관련 리소스(`styles.css`, `utils.ts`)도 **같은 폴더에 넣을 수 있어서** 관리가 쉬움
- **App Router 방식은 폴더 구조를 기준으로 라우팅(경로)이 정해지기 때문에**, 각 페이지가 **폴더**로 존재해야 함.  
	- 만약 **컴포넌트 파일 하나만으로 페이지를 만들려고 하면**,  그 컴포넌트와 관련된 **CSS 파일이나 JS 유틸 파일**을 **같은 폴더에 넣어서 관리할 수 없게 됨.**  그 파일은 폴더가 아니라 **파일 하나만 존재**하기 때문.
- 동적 라우팅
##### PARAMETER 전달 페이지 만들기
- `[name].tsx 코드 작성`

#### 4.3 레이아웃과 초기 속성  


### 5. 페이지 렌더링
#### 5.1 페이지 라우터와 SSR
- next.js는 서버에서 클라이언트 까지 제공하는 통합 framwork
- component ≠client 즉, 클라이언트 뿐 아니라 서버사이드 기능도 갖추고 있음
- App router

| 서버 컴포넌트    | 클라이언트 측에서 동적으로 업데이트 ==되지 않는 것==을 서버 컴포넌트로 다룸 |
| ---------- | -------------------------------------------- |
| 클라이언트 컴포넌트 | 클라이언트 측에서 동적으로 업데이트 ==되는 것==을 서버 컴포넌트로 다룸    |

- page Router

| 클라이언트 사이드 렌더링 | 클라이언트에서 동적으로 업데이트 되는 것은 클라이언트 측으로 전송된 후 렌더링 됨 |
| ------------- | --------------------------------------------- |
| 정적 렌더링        | 정적 콘텐츠는 빌드 시 미리 렌더링 됨                         |
| 동적 렌더링        | 동적 콘텐츠는 client가 access 할때 마다 서버측에서 매번 렌더링 됨   |

- RENDERING = component 를 실행하여 HTML 코드로 출력하는 작업
	- next.js는 [[Typescript]] 함수로 정의 돼 있고 그 안에 jsx로 작성한 콘텐츠가 들어감. 
		- 당연하게도 웹 페이지에 그대로 표시 되지 않음 따라서 JSX 코드를 -> HTML로 변환하여 표시
- 어디서 RENDERING ??
	- Server Side? // Client Side? 
- 언제 RENDERING ?
	- 빌드 할때인가? // 액세스 할 때인가
##### 렌더링 장소
- component 렌더링되는 장소
- 서버측 VS 클라이언트 측 렌더링
	- component가 어떻게 동작하는지에 따라 
	- ==client 측의 동적 변화 여부== 에 따라
###### SSR
- 언제 렌더링?
###### CSR


##### 렌더링 시점
- `npm run dev`  -> 빌드 후 디버그 모드로 실행하는 작업을 자동으로 수행 명령
###### 정적 렌더링
###### 동적 렌더링

##### 빌드 와 제품 실행

- 프로젝트 빌드 : `npm run build`
- 생성된 앱 실행 `npm start`
- 

#### 5.2 페이지 라우터와 정적 사이트 생성  

#### 5.3 페이지 라우터의 서버 사이드 렌더링  



#### 5.4 앱 라우터의 렌더링  
- 앱 라우터는 페이지 라우터 와 렌더링 메커니즘 다름
	- 앱라우터는 렌더링 고려할때 page 아니라 component 고려 해야함 
- 서버 모듈 그래프/ 클라이언트 모듈 그래프


### 6. 데이터 액세스
#### 6.1 fetch를 이용한 데이터 액세스  
- 대부분 tsx에 파일을 담음
- 자바 스크립트는 Ajax이용
	- 이때 fetch 함수 이요해서 서버에서 필요한 정보를 얻음.
	- 클라이언트 측과 서버측 동일하게 동작하도록 만든 것이 fetch 함수
	- 다만 Next.js에서는 기능이 확장된 fetch 함수 를 사용
```tsx
변수 = await fetch(주소,옵션)
// 또는

fetch(주소,옵션).then(인수=>{...후처리...})
```
- fetch 함수는 비동기 함수 임. 
	- 결과를 받으려면 `await` 사용해서 액세스 완료된후 받거나 
	- then 메소드에서 콜백함수를 준비하여 그 결과를 받아야 함. 
```tsx
// text로 가져오기
<Response>.text()

// json로 가져오기
<Response>.json()
```
##### JSON 데이터 준비

##### 
##### 



#### 6.2 서버 액션  
#### 6.3 SWR에 의한 네트워크 액세스  

### 7. API 작성과 이용**  
7.1 페이지 라우터와 API  
7.2 앱 라우터와 라우트 핸들러  

### 8. OpenAI API 이용하기
8.1 OpenAI API 준비하기  
8.2 Next.js에서 채팅 기능 이용하기  
8.3 Next.js에서 이미지 생성하기  
8.4 OpenAI 패키지 이용하기  

### 부록 A 타입스크립트 입문
A.1 값, 변수, 구문  
A.2 함수 이용하기  
A.3 객체 이용하기