---
url: "https://velog.io/@jihukimme/Node.js%EB%A5%BC-%ED%86%B5%ED%95%B4%EC%84%9C-%EB%B0%B1%EC%97%94%EB%93%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0"
tags:
  - "Clipping"
created: 2025-05-08
---
[jihukimme.log](https://velog.io/@jihukimme/posts)

![post-thumbnail](https://velog.velcdn.com/images/jihukimme/post/11f3307c-bc8c-46dc-977d-c8a727befd0b/image.png)

- Node.js란?
	> Node.js는 JavaScript 런타임 환경으로, 웹 애플리케이션을 개발하기 위해 서버 측에서 JavaScript를 실행할 수 있게 해줍니다. Node.js를 사용하여 백엔드를 개발하면, 웹 애플리케이션의 서버 측 로직을 구현하고 데이터를 처리하는 등의 작업을 수행할 수 있습니다.
- 백엔드 개발
	> "백엔드 개발"이란, 서버 측에서 웹 애플리케이션 또는 다른 네트워크 애플리케이션의 로직과 데이터 처리를 담당하는 개발 작업을 의미합니다. 백엔드 개발자는 주로 데이터베이스와의 상호작용, 사용자 인증 및 권한 관리, 비즈니스 로직 구현, API 설계 등을 담당하며, 이를 통해 웹 애플리케이션의 기능을 구현하고 동작시킵니다.
- Node.js로 개발하는 백엔드
	> Node.js는 JavaScript를 사용하여 백엔드 개발을 할 수 있는 환경을 제공해주기 때문에, Node.js를 통해 백엔드 개발을 한다는 것은 JavaScript를 사용하여 서버 측에서 애플리케이션의 로직을 개발하는 것을 의미합니다. Node.js는 비동기식 프로그래밍 모델과 다양한 패키지 및 라이브러리를 제공하여 백엔드 개발을 더욱 효율적이고 간편하게 할 수 있도록 도와줍니다.
- Node.js의 비동기식 프로그래밍이란?
	> - Node.js의 비동기식 프로그래밍(Asynchronous Programming)은 작업을 순차적으로 기다리지 않고 동시에 처리하는 프로그래밍 모델입니다. 이를 통해 I/O 작업 등 시간이 오래 걸리는 작업을 효율적으로 처리할 수 있습니다.
	> - 비동기식 프로그래밍에서는 작업을 요청한 후 결과를 기다리지 않고 다음 작업을 수행합니다. 작업이 완료되면 콜백 함수를 호출하여 결과를 처리하거나, 프로미스(Promise)나 async/await 구문을 사용하여 비동기 작업의 결과를 처리할 수 있습니다.
- Node.js를 통해 백엔드를 이해하기 위한 핵심 개념
	> - 모듈 시스템: Node.js는 CommonJS 모듈 시스템을 사용하여 코드를 모듈로 구성합니다. 모듈은 독립된 기능을 가진 코드 조각으로, 필요한 모듈을 가져와서 사용할 수 있습니다.
	> - HTTP 모듈: Node.js는 내장된 HTTP 모듈을 제공하여 웹 서버를 생성하고 요청을 처리할 수 있습니다. HTTP 모듈을 사용하여 웹 애플리케이션의 라우팅, 요청 및 응답 처리 등을 구현할 수 있습니다.
	> - Express 프레임워크: Express는 Node.js를 위한 간결하고 유연한 웹 애플리케이션 프레임워크입니다. Express를 사용하면 라우팅, 미들웨어, 요청 처리 등을 쉽게 구성할 수 있습니다.
	> - 데이터베이스 연동: Node.js는 다양한 데이터베이스와의 연동을 지원합니다. 예를 들어 MongoDB와의 연결을 위해 Mongoose를 사용하거나, MySQL과의 연결을 위해 Sequelize를 사용할 수 있습니다.
	> - 비동기 프로그래밍: Node.js는 비동기 프로그래밍 모델을 기반으로 동작합니다. 이는 I/O 작업을 비차단(non-blocking) 방식으로 처리하여 더 효율적인 처리와 확장성을 제공합니다. 콜백(callback) 함수, 프로미스(Promise), async/await 등을 사용하여 비동기 코드를 다룰 수 있습니다.
	> - 이외에도 Node.js는 다양한 패키지와 라이브러리를 제공하므로, 웹 개발에 필요한 다양한 기능을 구현할 수 있습니다. Node.js를 통해 백엔드를 구현하는 방법은 프로젝트의 요구사항과 개발자의 선호에 따라 다를 수 있으며, 학습과 경험을 통해 실력을 향상시킬 수 있습니다.

### 백엔드 학습 계획(feat. Node.js)

현재 프로젝트를 진행하며 React로 프로트엔드를 개발하고 있다. 프로젝트를 진행하며, 백엔드에 대한 이해가 필요하다고 느꼈다. 백엔드에 대한 이해를 하기 위해 Node.js로 구현해보고 이해를 해보고자 한다.

- Node.js와 React(프론트엔드 프레임워크)
	> - React로 프론트엔드를 개발하고 Node.js로 백엔드를 개발하는 것이 가능하다. React는 클라이언트 측에서 사용되는 JavaScript 라이브러리이며, 주로 웹 애플리케이션의 사용자 인터페이스를 구축하는 데에 사용된다. React를 사용하여 동적이고 반응형인 UI를 만들 수 있다.
	> - 한편, Node.js는 서버 측 JavaScript 런타임 환경으로, 백엔드 개발을 위해 사용된다. Node.js를 사용하면 JavaScript를 이용하여 서버 사이드 로직과 데이터 처리를 구현할 수 있다. Node.js는 비동기식 프로그래밍 모델과 다양한 패키지를 제공하여 백엔드 애플리케이션을 효율적으로 개발할 수 있도록 도와준다.
	> - 따라서 React로 프론트엔드를 개발하고, Node.js로 백엔드를 개발하여 전체 웹 애플리케이션을 구축하는 것은 일반적인 방법 중 하나이다. React와 Node.js는 독립적으로 사용될 수도 있지만, 함께 사용하여 클라이언트-서버 형태의 웹 애플리케이션을 개발하는 것이 많이 사용되는 방식이다.

---

## 1\. 개발에 앞서 알고가자(Node.js)

> Node js는 JacaScript를 실행하기 위한 서버 사이드 플랫폼이다. Node js는 npm을 통해 수많은 라이브러리와 패키지를 제공한다.

- npm이란?
	- node package manage
- Node js와 Express모듈 설치하기

> - Express모듈이란?
> 	- Node js를 이용해서 웹 프레임워크를 만드는 것(node 모듈이다)
> - 웹 프레임워크란?
> 	- 프론트엔드에서 백엔드에 요청 백엔드에서 계산하고 처리해서 DB조회하고 응답으로 돌려주는 기능을 하는 것을 웹 프레임워크라 한다.

- express모듈 설치하기: `npm install express`
- index.js파일 실행하기: `node index.js`

> - `npm init`: 다운받은 모듈이 package.json에 기록된다.
> - package-lock.json에는 더 자세하게 기록된다.
> - node\_modules폴더에는 설치한 모듈들이 기록된다.

npm 사이트에서 다양한 module 검색 후 사용가능 (설치 코드와 예제 코드 등 다양한 정보를 얻을 수 있다.)

> - API란?
> 	- Application Programming Interface의 약자, Frontend(화면)과 Backend(데이터처리)와 통신 과정(Frontend에서의 정보요청-Request, Backend에서의 정보처리 결과전달-Response)구조로 통신한다. 이러한 규칙을 API라고 한다.

- port

> - HTTP메소드
> 	- 요청(Request) 전송방식: Get, Post
> 		- Get 주소창에 검색어를 넣어서 보내는 것
> 		- Post 주소창이 아니라 안보이는 곳에 넣어서 보내는 것
> 	- 응답(Response)
> 		- 자료형식: JSON(JavaScript Object Notation), 키와 값으로 구성되어있다.
> 	- listen은 항상 하고있다.
> 	- axios는 받아오는 기능을 하는 라이브러리(요청)

- CORS: html파일에서 서버로 요청이 올 때 차단이 되는 것을 막는다.  
	방법: npm install cors를 통해 install

---

- 현재까지 진행한 것: Frontend HTML과 Backend API를 만들어서 두개를 연결.
- 다음에 진행할 것: Deploy(배포)해서 서버에 올린다음에 (Backend 서버에 올리는 과정)

> - React Deploy(배포)
> 	- `npm run build` 하면 build파일이 생성된다.  
> 		생성된 build 파일 내에 생성된 index.html이 배포할 파일
> 	- `npm install -g serve` 컴퓨터 어디에서든 serve라는 명령어를 통해서 웹서버를 설치할 수 있다
> 	- `npx serve` 한번만 실행시키는 웹서버
> 	- `npx serve -s build` build디렉토리를 document root로 하겠다.

---

## 2\. Node.js로 백엔드 개발

Node.js로 백엔드를 개발해보았다.

다음은 프로젝트에서 사용한 index.js(Node.js)의 코드이다.

```
const express = require("express");
const app = express();
const port = 3000;

var cors = require("cors");
app.use(cors());

/* get방식 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:id", (req, res) => {
  //id는 변수 앞에 콜론을 붙여서 사용한다.
  const q = req.params;
  console.log(q.id);

  res.send({ userid: q.id });
});

app.get("/user/info/:id", (req, res) => {
  //query를 사용하면 url에 ?를 붙여서 사용한다.
  //ex: http://localhost:3000/user/info/asdf?q=jihu&name=hu&age=20
  //위의 결과로 { q: 'jihu', name: 'hu', age: '20' }가 출력된다.
  const q = req.query;
  console.log(q);

  res.json({ userid: q.name });
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;

  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else if (name == "pig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

/* post방식 */
app.use(express.json()); //json 형식으로 데이터를 받는다.
app.post("/user/:id", (req, res) => {
  const p = req.params;
  console.log(p);
  const b = req.body;
  console.log(b);

  res.send({ message: "Hello World!" });
});

/* listen */
app.listen(port, () => {
  console.log(\`Example app listening on port ${port}\`);
});
```

---

## 3\. html로 간단하게 프론트 구성

먼저 프론트를 간단하게 만들어보았다.

다음은 프로젝트에서 사용한 html이다.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>test입니다.</title>
  </head>
  <body>
    <h1 id="sound"></h1>
    <input id="name" type="text" />
    <button onclick="getSound()">API요청</button>
    <script>
      function getSound() {
        const name = document.getElementById("name").value;
        fetch(\`http://localhost:3000/sound/${name}\`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.getElementById("sound").innerHTML = data.sound;
          });
      }
    </script>
  </body>
</html>
```

---

## 학습 계획

작은 규모의 서비스에서는 노드가 빠르다.

안전성은 자바가 우세하다.

`먼저 노드 학습진행 -> 자바 스프링`

---

리엑트 프레임 워크 - 클라이언트 사이드 렌더링(React.js)  
리엑트 메타 프레임워크 - 서버 사이드 렌더링(Next.js)

SPA 기반 프레임워크란?

Zustand, Recoil 등 다양한 상태관리 패턴이란?

클라이언트 사이드 렌더링, 서버 사이드 렌더링 차이점은?

Node.js -> Express.js -> Nest.js

ORM이란? SQL과 다른 언어를 통일 시켜주는 역할을 한다(ex: SQL을 JS로 통일 시켜준다)

한국에서 결국에는 스프링을 배워야한다

AWS 배포방법

---

html - 정적인 웹 페이지(안움직임)  
java script - 동적인 동작(html 조작)

[![profile](https://velog.velcdn.com/images/jihukimme/profile/5eddd46e-f129-48aa-bd1d-3e67d60ac48f/image.jpg)](https://velog.io/@jihukimme/posts)

[Jihu Kim](https://velog.io/@jihukimme/posts)

Jihukimme[이전 포스트](https://velog.io/@jihukimme/GitHub%EB%A5%BC-%ED%86%B5%ED%95%9C-%ED%98%91%EC%97%85%ED%95%98%EA%B8%B0GitHub-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95%EA%B3%BC-Markdown-%EC%9E%91%EC%84%B1%EB%B2%95)

[

### GitHub를 통한 협업하기(GitHub 사용방법과 Markdown 작성법)

](https://velog.io/@jihukimme/GitHub%EB%A5%BC-%ED%86%B5%ED%95%9C-%ED%98%91%EC%97%85%ED%95%98%EA%B8%B0GitHub-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95%EA%B3%BC-Markdown-%EC%9E%91%EC%84%B1%EB%B2%95)[다음 포스트](https://velog.io/@jihukimme/%EC%9B%B9%EC%97%90-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-%EC%9B%B9-%EC%84%9C%EB%B9%84%EC%8A%A4)

[

### 웹 아키텍처로 이해하는 웹 서비스

](https://velog.io/@jihukimme/%EC%9B%B9%EC%97%90-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-%EC%9B%B9-%EC%84%9C%EB%B9%84%EC%8A%A4)

#### 4개의 댓글

관심 있을 만한 포스트

\[알아보자\] Next, Nest, Node의 차이

애매한 단어들을 정리해보자

[View original](https://velog.io/@ming0o/Next-vs-Nest-vs-Node)

2024년 4월 8일 · 0개의 댓글

[by **밍구**](https://velog.io/@ming0o/posts)

1

[![](https://velog.velcdn.com/images/kk1112k/post/3000060c-c897-4244-937c-f833d6c41b07/image.png)](https://velog.io/@kk1112k/%EB%B0%B1%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C-%EA%B8%B0%EC%88%A0%EB%A9%B4%EC%A0%91-%EC%A0%95%EB%A6%AC-Spring-%EC%B6%94%EA%B0%80%EC%A4%91)

백엔드 개발 기술면접 정리 (Spring 추가중)

: 자바 플랫폼을 위한 오픈소스 애플리케이션 프레임워크: 동적인 웹 사이트 개발하기 위한 여러 가지 서비스를 제공함: 대한민국 공공기관의 웹 서비스 개발 시 사용을 권장하고 있는 전자정부 표준프레임워크의 기반 기술. DI (Dependency Injection) ...

[View original](https://velog.io/@kk1112k/%EB%B0%B1%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C-%EA%B8%B0%EC%88%A0%EB%A9%B4%EC%A0%91-%EC%A0%95%EB%A6%AC-Spring-%EC%B6%94%EA%B0%80%EC%A4%91)

2021년 10월 11일 · 1개의 댓글

[by **희소**](https://velog.io/@kk1112k/posts)

18

[![](https://velog.velcdn.com/images/neighborkim/post/d74c69b3-5794-4361-9517-4167ca5cdd76/image.jpg)](https://velog.io/@neighborkim/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9D%98-%EB%B3%80%EC%B2%9C%EC%82%AC)

프론트엔드 개발의 변천사

제이쿼리부터 넥스트까지

[View original](https://velog.io/@neighborkim/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9D%98-%EB%B3%80%EC%B2%9C%EC%82%AC)

2023년 8월 20일 · 8개의 댓글

[by **김동환**](https://velog.io/@neighborkim/posts)

36

[![](https://velog.velcdn.com/images/pandawithcat/post/b39e4463-6a29-4cfd-ab34-20f1cc8a4dcc/rust_async_await.png)](https://velog.io/@pandawithcat/Rust-Tokio%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

Rust Tokio이해하기

백엔드 개발자라면 비동기프로그래밍에 대해서 정말 많은 이야기를 들어보셨을거에요. 면접 단골 질문인 Node.js의 Event Loop부터 GoLang의 Goroutine까지 정말 비동기 라는 말을 안 들어봤으면 백엔드 개발자가 아니라는 말도 있을 정도니 정말 중요한 주...

[View original](https://velog.io/@pandawithcat/Rust-Tokio%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

2021년 6월 8일 · 2개의 댓글

[by **이동훈**](https://velog.io/@pandawithcat/posts)

11

[![](https://velog.velcdn.com/images/hwaya2828/post/a6ec35e6-f4b2-4b8b-8258-92cbcf516d63/%F0%9F%8E%81__Today_I_Learned.png)](https://velog.io/@hwaya2828/WSGI-ASGI)

WSGI & ASGI

WSGI & ASGI 란?

[View original](https://velog.io/@hwaya2828/WSGI-ASGI)

2022년 1월 19일 · 0개의 댓글

[by **GreenBean**](https://velog.io/@hwaya2828/posts)

8

[![](https://velog.velcdn.com/images/vrisel/post/651ca15c-2481-49b4-9554-06b64bd2370d/image.png)](https://velog.io/@vrisel/JavaScript-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC-%EB%B9%84%EA%B5%90)

JavaScript 기반 라이브러리, 프레임워크 비교

jQuery, React, Vue.js, AngularJS, Express.js, Next.js, Nuxt.js, Nest.js, Node.js

[View original](https://velog.io/@vrisel/JavaScript-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC-%EB%B9%84%EA%B5%90)

2021년 8월 6일 · 0개의 댓글

[by **브리셀**](https://velog.io/@vrisel/posts)

1

[![](https://velog.velcdn.com/images/limelimejiwon/post/f24c56a3-87cc-4537-84e2-a55fb8912d65/image.png)](https://velog.io/@limelimejiwon/NextJS-vs-React-2023%EB%85%84%EB%8F%84-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EC%9C%84%ED%95%B4-%EB%AC%B4%EC%97%87%EC%9D%84-%EC%84%A0%ED%83%9D%ED%95%B4%EC%95%BC-%ED%95%98%EB%8A%94%EA%B0%80)

NextJS vs React: 2023년도 프론트엔드 개발을 위해 무엇을 선택해야 하는가?

💡NextJS를 처음으로 배우게 되면서 왜 NextJS를 사용해야 하는지 궁금해져서 읽게 된 글을 번역해보았다. 구글에 검색하면 제일 먼저 뜨는 포스팅(Next JS vs React: Which Framework to choose for Front end in 20...

[View original](https://velog.io/@limelimejiwon/NextJS-vs-React-2023%EB%85%84%EB%8F%84-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EC%9C%84%ED%95%B4-%EB%AC%B4%EC%97%87%EC%9D%84-%EC%84%A0%ED%83%9D%ED%95%B4%EC%95%BC-%ED%95%98%EB%8A%94%EA%B0%80)

2023년 4월 11일 · 2개의 댓글

[by **김지원**](https://velog.io/@limelimejiwon/posts)

9

[

#### 내가 보려고 만든 django 분석 - 3 (asgi, wsgi)

](https://velog.io/@stay136/%EB%82%B4%EA%B0%80-%EB%B3%B4%EB%A0%A4%EA%B3%A0-%EB%A7%8C%EB%93%A0-django-%EB%B6%84%EC%84%9D-3-asgi-wsgi)

2021년 5월 30일 · 0개의 댓글

[by **sihwan\_e**](https://velog.io/@stay136/posts)

6

[![](https://velog.velcdn.com/images/rhee519/post/405aaf89-0f27-4e69-8a28-678ea281e369/image.png)](https://velog.io/@rhee519/compare-web-frameworks)

API 서버를 위해 어떤 웹 프레임워크를 사용해야 할까? (Django, Flask, Express)

동적 데이터를 다루는 웹을 구현하기 위한 프레임워크로 많이 사용하는 세 가지 프레임워크(Django, Flask, Express)를 비교하는 포스트입니다. 👀

[View original](https://velog.io/@rhee519/compare-web-frameworks)

2022년 3월 7일 · 1개의 댓글

[by **d4v1d**](https://velog.io/@rhee519/posts)

3

[![](https://velog.velcdn.com/images/mynghn/post/7223fe63-2e96-4fb1-89e1-e61b0f6de3f0/image.png)](https://velog.io/@mynghn/django%EC%99%80-%EB%B0%B1%EC%97%94%EB%93%9C%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4-%EC%9E%85%EB%AC%B8%EC%9E%90%EC%9D%98-%EC%9E%85%EC%9E%A5%EC%97%90%EC%84%9C)

django와 백엔드에 대한 이해: 입문자의 입장에서

🎯 이 글의 목적: 실제 프로젝트 개발 전에 쟝고에 대해 탑다운 정리 + 웹 서비스에서 백엔드의 역할 짚고 넘어가기

[View original](https://velog.io/@mynghn/django%EC%99%80-%EB%B0%B1%EC%97%94%EB%93%9C%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4-%EC%9E%85%EB%AC%B8%EC%9E%90%EC%9D%98-%EC%9E%85%EC%9E%A5%EC%97%90%EC%84%9C)

2022년 7월 6일 · 0개의 댓글

[by **mynghn**](https://velog.io/@mynghn/posts)

4

\[스프링 MVC\] 그래서 웹 서버가 대체 뭔데?

인프런 김영한 님의 스프링 MVC 1편 - 웹 개발 핵심 기술 을 수강하고 정리한 내용입니다. 김영한님 체고.스프링은 공부해도 공부해도 정말정말 공부할게 너무 많다. 근데 마침 김영한 님께서 MVC 강의를 다시 내주셨다니! 복습할 겸 다시 들어보려고 한다.김영한님 강의...

[View original](https://velog.io/@junho918/%EC%8A%A4%ED%94%84%EB%A7%81-MVC-%EA%B7%B8%EB%9E%98%EC%84%9C-%EC%9B%B9-%EC%84%9C%EB%B2%84%EA%B0%80-%EB%8C%80%EC%B2%B4-%EB%AD%94%EB%8D%B0)

2021년 3월 22일 · 0개의 댓글

[by **Junho Bae**](https://velog.io/@junho918/posts)

11

[![Powered by GraphCDN, the GraphQL CDN](https://graphcdn.io/badge.svg)](https://graphcdn.io/?ref=powered-by)

web에서 크롤링한 내용입니다.
