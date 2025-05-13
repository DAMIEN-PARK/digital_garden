---
title: node.js기본강의
description: 
date:
  - - 2025-05-13
tags: 
publish: false
---


---

client <-> server (:port)
- Express
- req 요청이 들어온거
- res 요청이 들어온거 처리하고 나가는거

```javaScript
//상수 선언
const express = require('express')
const app = express()
const prot = 3000

app.get('/', (req,res) => {
	res.send('hello world')
})

app.listen(port,()) => {

}
```
ㄴ res.send : response를 받은 다음에 그 요청을 send 돌려주는 함수
ㄴ 주소창 이용 get 방식
- get : 주소창
- post 주소창 x

- get방식
	GET/dog => {'sound':멍멍}
	GET/cat => {'sound:야옹}

```js
app.get('/', (req,res) => {
	res.send('hello world')
})

app.get('/dog', (req,res) => {
	res.send('<h1>강아지</h1>')
})

app.get('/cat', (req,res) => {
	res.send('고양이')
})
```
- get으로 html 문법 가능
- axios : (라이브러리) 요청을 express로 요청을 쏠 때 사용.
- json : `({sound:멍멍})` / 명시적으로 `res.json({sound:멍멍})` 명확 가능.
	- 주소는 한글을 안먹힘.  urldecode/encode에서 바꿔야함.
- 
- 변수 params 와 query
- GET 
	- params
```js
app.get('/user/:id', (req,res) => {
	const q = req.params
	console.log(q)
	res.json({'quseridq:q.id})
})
```
ㄴ 로컬호스트라 가정 : localhost:3000/user/:id -> {id:아이디 값}

- query
	- 
```js
app.get('/user/:id', (req,res) => {
	const q = req.query
	console.log(q)
	res.json({'quseridq:q.id})
```


- post 방식
	- params 은 같음
	- 주소창이 아니라 Axios나 Fetch를 이용해 body에 담음
	- 파라미터 받아서 받은 데이터 기반으로 사용
```js
app.use(express.json());
app.get('/user/:id', (req,res) => {
	const p = req.params;
	console.log(p);
	const b = req.body;
	console.log(b);
	
	res.send({'message':'hello world'});
})
```

API 서버 만들기
- GET / sound/:name
name 따라서 다른 울음소리

```js
app.get('/sound/:name', (req,res) => {
	//const p =req.params
	//p.name
	const {name} = req.params
	console.log(name)
	if(name =="dog"){
		res.json({'sound':'멍멍'})
	} else if(name=="cat"){
		res.json({'sound':'야옹'})
	} else if(name=="pig"){
		res.json({'sound':'꿀꿀'})
	} else {
		res.json({'sound':'알수없음'})
	}
})


```

CORS 이슈
- 관련 : [[clip_CORS는 왜 이렇게 우리를 힘들게 하는걸까]]
- 브라우저는 기본적으로 출처가 다른(프로토콜, 도메인, 포트 중 하나라도 다르면) 서버로의 요청을 차단
	악의적인 사이트가 사용자의 정보를 탈취하는 것을 방지하기 위한 조치
	개발 환경에서는 프론트엔드와 백엔드가 서로 다른 도메인이나 포트에서 동작하는 경우가 많아, 이로 인한 CORS 에러가 빈번하게 발생
- 처리 방법 : requrie ('cors') 처리
```js

>> 우선 설치 `npm i cors`

var cors = require('cors')

app.use(cors())
```


- [fetch API 사용하기](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- front+back
	- cloudtype
	- heroku




### Resources
