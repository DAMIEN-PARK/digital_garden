---
title: 코딩애플(node.js)
description: 
date:
  - - 2025-05-20
tags: 
publish: false
---


---
- express Library 설치
- 라이브러리 뭐ㅓㄹ 썻는지 기록	-> package.json
	- entry point : server.js
![[Pasted image 20250520114834.png]]
- `/node_modules` : 라이브러리 관련 파일들 담는 폴더
- 설치 에러시 ->yarn 설치 후 PC 재실행

# Ep.4
- 서버를 띄우기 위한 기본세팅(Express Library)
```js
const express = require('express');
const app = express();

app.listen();    // 컴퓨터에 서버를 열 수 있음
/*또는 
app.listen(8080,function(){
    console.log("listening on 8080")
});
*/
app.get('/pet',function(요청,응답){
    응답.send('pet 용품 페이지 입니다')
});

```
- `app.listaen(서버에 띄울 포트번호, 띄운다음 실행할 코드)`
- 포트 : 외부와 통신을 하기 위한 구멍이 6만개 정도 있음. 그중 8080(예시)로 들어온사람들에게 보여줘라
- URL에 주소 치는건 `GET` 요청 하는것
# Ep.5
- client(고객) : 주소창에 URL을 입력해서 서버에 GET요청 할 수 있음
- server(노예?) : 누군가 /pet 들어오면 xx 보내주세요 라고 코드 짬
- 노드몬 라이브러리 : 
	- 수정시 서버 껏다켜줌 :  
	- 설치 : `npm install -g nodemon`
	- 실행 : `nodemon [파일이름](예:server.js)`
- HTML 파일 보내기




### Resources
