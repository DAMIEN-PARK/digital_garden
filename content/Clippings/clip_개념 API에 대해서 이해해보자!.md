---
url: "https://velog.io/@euisuk-chung/%EA%B0%9C%EB%85%90-API%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-%EC%9D%B4%ED%95%B4%ED%95%B4%EB%B3%B4%EC%9E%90"
tags:
  - "Clipping"
created: 2025-05-08
---
![](https://velog.velcdn.com/images/euisuk-chung/post/7e4f2c49-79ce-46a1-a428-8e13bb56a3e5/image.png)

> 이미지 출처: [https://appmaster.io/ko/blog/cobojareul-wihan-api-apireul-sayonghaneun-bangbeob-wanjeonhan-gaideu](https://appmaster.io/ko/blog/cobojareul-wihan-api-apireul-sayonghaneun-bangbeob-wanjeonhan-gaideu)

## 1\. API는 무엇인가?

> 💡 API는 **애플리케이션 프로그래밍 인터페이스** (`Application Programming Interface`)의 줄임말로,
> 
> - 소프트웨어 **애플리케이션이 서로 통신하고 데이터나 기능을 교환할 수 있도록 하는 규칙이나 프로토콜** 을 의미합니다.
> - API를 통해 개발자는 다른 애플리케이션의 기능을 **직접 구현하지 않고도 쉽게 활용** 할 수 있으며, **애플리케이션 개발을 간소화하고 효율성을 높일 수 있습니다**.

과거에는 프로그램 간 직접 통신이 매우 어려워, 개발자가 수작업으로 일일이 대응해야 했습니다.

- 하지만 현재는 API를 통해 일정한 구조와 규약을 설정하고 통신할 수 있기에,
- 훨씬 효율적이고 체계적인 시스템을 구축할 수 있습니다.

> 🍔 비유하자면, **API는 식당의 메뉴판 같은 것** 입니다:
> 
> - 고객이 메뉴판을 보고 주문하면, 주방은 정확하게 요청된 메뉴를 제공해줍니다.

또한, API를 사용하면

- 반복적인 코드 작성량을 줄이고,
- 사용자별 데이터 접근을 보다 안전하게 제어할 수 있으며,
- 내부 시스템 구축에도 활용할 수 있습니다.

즉, API는 **개발 생산성과 보안성을 모두 향상시키는 핵심 수단** 이라고도 할 수 있을 것 같습니다.

---

## 2\. API는 어떻게 작동하는가?

![](https://velog.velcdn.com/images/euisuk-chung/post/e3700d2b-b948-4fa8-9b88-24adbdb04788/image.png)

> 이미지 출처: [https://assaeunji.github.io/development/2020-08-29-api/](https://assaeunji.github.io/development/2020-08-29-api/)

API는 항상 **요청(Request)** 과 **응답(Response)** 구조를 따릅니다.

- **요청(Request)**: 클라이언트(사용자)가 서버에 필요한 정보를 요구하는 것.
- **응답(Response)**: 서버가 요청을 처리한 후 클라이언트에게 결과를 돌려주는 것.

이 과정은 주로 HTTP 통신 방식을 따르며,

> `GET(조회)`, `POST(생성)`, `PUT(수정)`, `DELETE(삭제)` 등의 메서드를 사용합니다.

- 응답 데이터는 대부분 **JSON** 형식을 통해 전달됩니다.

> JSON (JavaScript Object Notation):
> 
> - `Key` 와 `Value` 로 구성된 가볍고 직관적인 데이터 형식입니다.

**API 통신 방식** 은 다음과 같이 다양한 유형이 존재합니다:

- `SOAP API`: XML을 사용하여 엄격한 규칙 하에 통신하는 방식
- `RPC API`: 서버의 함수를 원격으로 호출하여 응답받는 방식
- `WebSocket API`: 실시간 양방향 통신을 지원하는 방식
- `REST API`: 가장 널리 쓰이며 HTTP 기반으로 자원(Resource)을 주고받는 방식

> 🤔 **최근 FAST API도 많이 보이는데, 이건 통신 방식이 아닌가?**
> 
> - FastAPI는 **Python으로 API 서버를 쉽게 구축할 수 있게 해주는 웹 프레임워크** 입니다.
> - FastAPI는 API를 만드는 " `도구(tool)` "이지, ' `통신 프로토콜` '이나 ' `통신 방식` ' 자체라고 볼 수는 없습니다.

> 💼 **FastAPI를 통해 보통 사용하는 통신 방식은?**
> 
> - FastAPI를 이용해 만든 API 서버는 주로 RESTful API 통신 방식을 따르게 됩니다.
> 	- 즉, HTTP 메서드(GET, POST 등)와 URI(통합자원식별자, Uniform Resource Identifier) 경로를 사용해서 통신하는 구조)
> - 또한, FastAPI는 Python 기반이기 때문에, 비동기 통신(Async) 도 자연스럽게 지원하고, WebSocket 통신도 별도 설정으로 구축할 수 있습니다.

FastAPI 함수 예시:

```
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}
```

\-> 여기서 `async def` 를 쓴 이유가 바로 비동기 처리를 위해서 `def` 앞에 `async` 를 사용함

- `async` 는 **Python 3.5 버전** 부터 도입된 공식 문법으로, `await` 와 쌍으로 사용됨.
	- `async def`:이 함수는 '비동기적으로 실행될 수 있는 함수'. (Coroutine 생성)
	- `await`: 이 함수 안에서, '어떤 비동기 작업'이 끝날 때까지 대기.

> 💿 **음.. 비동기/동기 그게 뭔데**

![](https://velog.velcdn.com/images/euisuk-chung/post/5c68aa28-6223-45b8-a4f4-67b590a7d509/image.png)

> 이미지 출처: [https://geekpython.medium.com/asyncio-how-to-use-async-await-in-python-ef4372a8c2c5](https://geekpython.medium.com/asyncio-how-to-use-async-await-in-python-ef4372a8c2c5)

✔️ **동기 통신(Synchronous Communication)** 은,

- 요청(Request)을 보낸 다음, 응답(Response)이 올 때까지 **"기다려야만" 다음 작업을 할 수 있는 방식** 입니다.
- 비유:
	- 식당에서 음식을 주문하고, 음식이 나올 때까지 테이블에 앉아 기다리는 것. (나올 때까지 다른 일을 못 함)
	**Python 예시** (requests 사용):
	```
	import requests
	response = requests.get('https://api.example.com/data')
	print(response.text)  # 요청 끝날 때까지 기다린 다음 실행
	```

✔️ **비동기 통신(Asynchronous Communication)** 은

- 요청(Request)을 보낸 뒤, **"기다리지 않고" 바로 다음 작업을 처리하는 방식** 입니다.
- 비유:
	- 식당에서 음식을 주문하고, 진동벨을 받아 자유롭게 돌아다니다가 벨이 울리면 음식을 받으러 가는 것. (기다리는 동안 다른 일을 할 수 있음)
	**Python 예시** (httpx 비동기 버전):
	```
	import httpx
	  import asyncio
	  async def fetch_data():
	      async with httpx.AsyncClient() as client:
	          response = await client.get('https://api.example.com/data')
	          print(response.text)  # 응답 준비되면 실행
	  asyncio.run(fetch_data())
	```

---

## 3\. API 사용 시 꼭 확인해야 할 요소/팁

## 확인해야 할 요소

API 사용 시에 꼭 확인해야 할 요소는 다음과 같이 3가지가 있습니다:

- `Auth`, `HTTPS`, `CORS`

**Auth**

- 설명: API 요청을 인증하는 방식 (apiKey, OAuth 등)
- 결론: 인증이 필요한 API는 반드시 키나 토큰이 필요합니다.

**HTTPS**

- 설명: 데이터를 암호화하여 안전하게 전송하는 프로토콜
- 결론: 민감한 정보를 다루는 경우 HTTPS는 필수입니다.

**CORS**

- 설명: 다른 출처의 웹사이트에서 API를 호출할 수 있도록 허용하는 설정
- 결론: 웹 프론트엔드에서 직접 API를 호출할 경우 CORS 정책을 고려해야 합니다.

이 항목들은 API를 안전하고 정상적으로 사용하기 위해 꼭 확인해야 합니다.

## 유용한 팁

`public-api` 들을 리스트업 해서 정리·아카이빙해두는 좋은 깃헙 링크들 공유드립니다.

- (영문) [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)
- (한글) [https://github.com/dl0312/open-apis-korea](https://github.com/dl0312/open-apis-korea)

![](https://velog.velcdn.com/images/euisuk-chung/post/c4e79139-1fa3-4940-88b4-1bf063d6440d/image.png)

다양한 Index(테마) 별로 API들을 확인할 수 있습니다.  
![](https://velog.velcdn.com/images/euisuk-chung/post/64e42e7f-5968-4049-9844-bc14496c743b/image.png)

---

## 4\. 사용되는 다양한 API 형식

데이터 분석가나 과학자에게 API는 단순한 기술이 아니라, 데이터를 수집하고 분석 작업을 자동화하는 핵심 도구입니다.

다양한 API 형식이 존재하는 이유는

- 데이터의 성격
- 통신의 실시간성
- 데이터양과 응답속도 최적화

등을 고려하기 때문입니다.

각각을 조금 더 깊이 살펴봅니다.

## \[1\] API "형식" (데이터 주고받는 구조)

### REST API

![](https://velog.velcdn.com/images/euisuk-chung/post/b049ff5f-f122-4ea3-9fd9-28538b8827f3/image.png)

> 출처: [https://stdio-han.tistory.com/88](https://stdio-han.tistory.com/88)

- **개념**: 웹상의 리소스를 URI로 식별하고 HTTP 메서드(GET, POST 등)를 통해 조작하는 가장 보편적인 방식.
- **포맷**: 주로 JSON. (간혹 XML)
- **특징**: 무상태성, 단순성, 범용성.
- **활용**: 공공데이터포털, 주식, 기상청 데이터 수집.

### GraphQL

![](https://velog.velcdn.com/images/euisuk-chung/post/fc7e8d00-f08a-4811-9157-270877ed13d9/image.png)

> 출처: [https://www.wallarm.com/what/what-is-graphql-definition-with-example](https://www.wallarm.com/what/what-is-graphql-definition-with-example)

- **개념**: 클라이언트가 필요한 데이터만 명시적으로 요청할 수 있는 쿼리 기반 API.
- **포맷**: 요청과 응답 모두 JSON.
- **특징**: 단 하나의 Endpoint, 과요청/과소요청 문제 해결.
- **활용**: GitHub, Shopify 등 복잡한 관계형 데이터 요청.

### gRPC

![](https://velog.velcdn.com/images/euisuk-chung/post/00b6fe29-65a8-48a9-b462-bbf635689674/image.png)

> 출처: [https://www.oreilly.com/library/view/grpc-up-and/9781492058328/ch01.html](https://www.oreilly.com/library/view/grpc-up-and/9781492058328/ch01.html)

- **개념**: Google이 개발한 초고속 이진 통신 프로토콜.
- **포맷**: Protocol Buffers (바이너리 직렬화)
- **특징**: 매우 빠름. 서버-서버 간 통신 최적화.
- **활용**: 마이크로서비스 아키텍처, 초대용량 데이터 스트리밍.

### JSON-RPC

![](https://velog.velcdn.com/images/euisuk-chung/post/11de0199-65ab-4284-a86b-f5b76bb8f4fe/image.png)

> 출처: [https://lab.wallarm.com/what/json-rpc%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80/?lang=ko](https://lab.wallarm.com/what/json-rpc%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80/?lang=ko)

- **개념**: JSON 포맷을 기반으로 원격 함수 호출을 표준화한 프로토콜.
- **포맷**: JSON.
- **특징**: 가볍고 단순함.
- **활용**: 내부 서비스 호출, 가벼운 서버 통신 (예: MCP).

## \[2\] API "통신 프로토콜" (데이터를 어떻게 주고받을까?)

### HTTP/HTTPS

- **개념**: 웹 서버와 클라이언트 간 기본 통신 방식. HTTP는 비암호화, HTTPS는 암호화된 통신을 지원.
- **특징**: 웹 API 대부분이 HTTP/HTTPS 기반으로 동작합니다.

![](https://velog.velcdn.com/images/euisuk-chung/post/26256661-787b-46a3-9da5-c447d8c4f92a/image.png)

> 출처: [https://han288.tistory.com/167](https://han288.tistory.com/167)

### WebSocket

- **개념**: 서버-클라이언트 간 **양방향** 통신을 지속적으로 유지할 수 있는 프로토콜.
- **특징**: 연결이 한번 성립되면 계속 열린 채로 메시지를 주고받을 수 있어, 채팅, 게임, 실시간 데이터 전송 등에 최적화.

![](https://velog.velcdn.com/images/euisuk-chung/post/65efd2ca-0e25-4dbb-ad6e-a40e48d909aa/image.png)

> 출처: [https://blog.algomaster.io/p/websockets](https://blog.algomaster.io/p/websockets)

### SSE (Server-Sent Events)

- **개념**: 서버가 클라이언트로 **단방향** 실시간 스트리밍을 하는 통신 방식.
- **특징**: 서버에서 클라이언트로만 이벤트를 지속적으로 푸시. HTTP 기반이라 브라우저에서 쉽게 사용 가능.

![](https://velog.velcdn.com/images/euisuk-chung/post/c2240eb4-6480-4e81-91fc-2629ba95ae72/image.png)

> 출처: [https://gong-check.github.io/dev-blog/BE/%EC%96%B4%EC%8D%B8%EC%98%A4/sse/sse/](https://gong-check.github.io/dev-blog/BE/%EC%96%B4%EC%8D%B8%EC%98%A4/sse/sse/)

**SSE 특징 요약**

| 항목 | 설명 |
| --- | --- |
| 통신 방향 | 서버 → 클라이언트 (단방향) |
| 연결 방식 | 장시간 유지되는 HTTP 연결 |
| 인증 지원 | JWT, API Key 인증 가능 |
| 용도 | 웹앱, 알림 시스템, 스트리밍 대시보드 등 |
| 예시 | MCP Server C가 Remote Service와 연결할 때 |

### STDIO (Standard Input/Output)

- **개념**: 운영체제 수준의 표준 입력(stdin)과 표준 출력(stdout) 스트림을 이용한 통신 방식.
- **특징**: 서버와 클라이언트가 **같은 머신** 안에서 동작하며, 파일처럼 데이터 스트림을 주고받습니다.

![](https://velog.velcdn.com/images/euisuk-chung/post/02e9cc40-ffa1-4fee-9de7-0fb5d581267e/image.png)

> 출처 ㅣ [https://medium.com/@vkrishnan9074/mcp-clients-stdio-vs-sse-a53843d9aabb](https://medium.com/@vkrishnan9074/mcp-clients-stdio-vs-sse-a53843d9aabb)

**STDIO 특징 요약**

| 항목 | 설명 |
| --- | --- |
| 통신 방향 | 클라이언트 ↔ 서버 (양방향) |
| 연결 방식 | stdin/stdout 스트림 |
| 인증 지원 | 없음 (로컬 프로세스라 불필요) |
| 용도 | 커맨드라인 툴, 로컬 테스트, 내부 통신 |
| 예시 | MCP Server A, B와 Local Data 연결 시 |

> 🔥🔥 **참고**: 최근 핫한 MCP 서버는 `STDIO`, `SSE` **둘 다 지원** 합니다.
> 
> - 출처: [https://medium.com/@vkrishnan9074/mcp-clients-stdio-vs-sse-a53843d9aabb](https://medium.com/@vkrishnan9074/mcp-clients-stdio-vs-sse-a53843d9aabb)
> 	- `STDIO 모드` 는 빠른 로컬 연결용 (ex: IDE, 로컬 툴)
> 	- `SSE 모드` 는 네트워크 넘어 다수 클라이언트 연결용 (ex: 웹 기반 MCP 클라이언트)

## \[3\] API 서버 구축 프레임워크

### Python 기반

- **FastAPI**: 초고속 비동기 API 서버. 타입 힌트 활용, OpenAPI 문서 자동 생성.
	- [https://fastapi.tiangolo.com/ko/](https://fastapi.tiangolo.com/ko/)
- **Flask**: 매우 가볍고 단순한 API 서버 구축. 커스터마이징 유연함.
	- [https://flask.palletsprojects.com/](https://flask.palletsprojects.com/)
- **Django REST Framework**: Django 기반 API 구축용 확장 라이브러리.
	- [https://www.django-rest-framework.org/](https://www.django-rest-framework.org/)

### Node.js 기반

- **Express.js**: Node.js에서 가장 대중적인 웹/REST API 서버 프레임워크.
	- [https://expressjs.com/ko/](https://expressjs.com/ko/)
- **NestJS**: 대규모 백엔드 시스템을 위한 구조화된 Node.js 기반 프레임워크. TypeScript 지원.
	- [https://nestjs.com/](https://nestjs.com/)

### Java 기반

- **Spring Boot**: 엔터프라이즈 급 웹/REST API 서버 구축에 가장 널리 사용되는 프레임워크.
	- [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)

---

## 5\. API 사용 범위에 따른 분류

| 구분 | 설명 |
| --- | --- |
| Private API | 기업 내부 전용, 외부에 공개하지 않음 |
| Public API | 누구나 사용할 수 있도록 공개된 API (ex. 날씨 API) |
| Partner API | 특정 파트너 기업에만 제한적으로 제공되는 API |
| Composite API | 여러 API를 결합하여 복합적인 데이터 처리 수행 |

이처럼 API는 용도에 따라 다양한 형태로 제공되며, 데이터 보안과 접근 통제 목적에 맞춰 설계됩니다.

---

## 6\. Python으로 간단하게 API와 통신해 보자

**예시1: Kakao 책 검색 API 사용하기**

- [https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide)
```python
import requests

url = "https://dapi.kakao.com/v3/search/book"

params = {
    "query": "파이썬",
    "sort": "accuracy",
    "target": "title"
}

headers = {
    "Authorization": "KakaoAK {REST_API_KEY}"
}

response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    result = response.json()
    for book in result['documents']:
        print(f"제목: {book['title']}")
        print(f"소개: {book['contents']}")
        print(f"썸네일: {book['thumbnail']}\n")
else:
    print("API 요청 실패", response.status_code)
```

**예시1 출력 결과**

![](https://velog.velcdn.com/images/euisuk-chung/post/bedffca2-a872-4f09-bf9a-e4ac3827f574/image.png)

**예시2: Kakao 웹문서 검색 API 사용하기**

- [https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide)
```python
import requests

# Kakao Web 문서 검색 API URL
url = "https://dapi.kakao.com/v2/search/web"

# 검색할 파라미터 설정
params = {
    "query": "이효리",       # 검색할 키워드
    "sort": "accuracy",      # 정확도순 정렬
    "page": 1,               # 1페이지
    "size": 10               # 한 번에 10개 문서 가져오기
}

# 인증 헤더 설정 (여기에 본인 REST API 키 넣어야 함)
headers = {
    "Authorization": f"KakaoAK {REST_API_KEY}"
}

# GET 요청 보내기
response = requests.get(url, params=params, headers=headers)

# 결과 처리
if response.status_code == 200:
    result = response.json()
    for doc in result['documents']:
        print(f"제목: {doc['title']}")
        print(f"본문 요약: {doc['contents']}")
        print(f"URL: {doc['url']}")
        print(f"작성일시: {doc['datetime']}\n")
else:
    print("API 요청 실패", response.status_code)
```

**예시2 출력 결과**

![](https://velog.velcdn.com/images/euisuk-chung/post/83d028cc-5710-41b1-b281-645a87382448/image.png)

Python을 사용하면 이렇게 간단히 외부 API와 통신할 수 있으며, API 구조와 통신 흐름을 직접 체험할 수 있습니다.

또한 API 통합 시 고려해야 할 점은 다음과 같습니다:

- 데이터 모델(요청/응답 포맷)을 이해하고 설계해야 함
- 인증 방식과 권한 제어 로직을 명확히 설정해야 함
- API 엔드포인트별 트래픽과 성능 이슈를 사전에 점검해야 함

---

## 7\. FastAPI 간단 소개

> ⚡ `FastAPI` 는 **Python 3.6+ 이상 버전** 에서 사용할 수 있는 현대적이고 빠른 웹 프레임워크입니다.

주요 특징은 다음과 같습니다.

- **빠른 개발 속도**: 타입 힌트를 사용해 코드 자동 완성과 문서 자동화
- **고성능**: 비동기(Asyncio) 기반으로 빠른 응답 제공
- **자동 문서화**: Swagger UI, Redoc 지원
- **Pydantic 기반 데이터 유효성 검사**

**간단한 FastAPI 코드 예시**:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/items/")
def create_item(item: dict):
    return {"item": item}
```

**서버 실행**:

```bash
uvicorn main:app --reload
```

> `main` 은 파일명, `app` 은 FastAPI 객체명입니다.

---

## 마치며

이번 글에서는 API에 대해 정리하고, 다양한 API 통신 형식과 구축 프레임워크까지 살펴보았습니다.

데이터 분석가나 데이터 과학자에게도 API에 대한 이해는 점점 더 필요한 역량이 되고 있습니다.

특히 최근에는 MCP와 같이 JSON-RPC 및 SSE와 같은 통신 방식을 사용하는 프로토콜이 주목받고 있어, 새로운 트렌드를 따라가기 위해서라도 API 기본기를 다지는 것이 중요하다고 생각됩니다.

읽어주셔서 감사합니다 😎[이전 포스트](https://velog.io/@euisuk-chung/%EB%82%B4%EA%B0%80-%EB%B3%B4%EB%A0%A4%EA%B3%A0-%EC%A0%95%EB%A6%AC%ED%95%9C-%ED%84%B0%EB%AF%B8%EB%84%90-%ED%95%A8%EC%88%98-25%EC%84%A0)

[

### 내가 보려고 정리한 터미널 함수 25선

](https://velog.io/@euisuk-chung/%EB%82%B4%EA%B0%80-%EB%B3%B4%EB%A0%A4%EA%B3%A0-%EC%A0%95%EB%A6%AC%ED%95%9C-%ED%84%B0%EB%AF%B8%EB%84%90-%ED%95%A8%EC%88%98-25%EC%84%A0)[다음 포스트](https://velog.io/@euisuk-chung/Midjourney-%EA%B8%B0%EC%B4%88-%EA%B0%80%EC%9D%B4%EB%93%9C)

[

### \[꿀팁\] 미드저니(Midjourney) 기초 가이드

](https://velog.io/@euisuk-chung/Midjourney-%EA%B8%B0%EC%B4%88-%EA%B0%80%EC%9D%B4%EB%93%9C)

#### 0개의 댓글

관심 있을 만한 포스트

[![](https://velog.velcdn.com/images/tlatldms/post/e9ffc72e-8901-4358-b652-911e7c3e4050/image.png)](https://velog.io/@tlatldms/API-Gateway-Refresh-JWT-%EC%9D%B8%EC%A6%9D%EC%84%9C%EB%B2%84-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-Spring-boot-Spring-Cloud-Gateway-Redis-mysql-JPA-1%ED%8E%B8)

\[API Gateway + Refresh JWT 인증서버 구축하기\] Spring boot + Spring Cloud Gateway + Redis + mysql JPA 1편

로그인 한 번으로 여러 서비스를 이용하는 것. Google 아이디 가지고 여러 서비스를 사용하는 것이 대표적인 예시인데 Oauth2와 아주 깊게 연관되어 있는 듯 하다. SSO라고 하면 '하나의 로그인으로 여러 서비스 이용하기'라는 컨셉 자체이고 Oauth는 그것을 실...

[View original](https://velog.io/@tlatldms/API-Gateway-Refresh-JWT-%EC%9D%B8%EC%A6%9D%EC%84%9C%EB%B2%84-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-Spring-boot-Spring-Cloud-Gateway-Redis-mysql-JPA-1%ED%8E%B8)

2020년 6월 1일 · 1개의 댓글

[by **Sieun Sim**](https://velog.io/@tlatldms/posts)

14

[![](https://velog.velcdn.com/images/yarogono/post/e27cda83-6902-4fda-87a3-1e884162c80c/image.jpg)](https://velog.io/@yarogono/%EA%B2%8C%EC%9E%84-%EC%84%9C%EB%B2%84-%EC%9B%B9-%EC%84%9C%EB%B2%84%EC%99%80-%EA%B2%8C%EC%9E%84-%EC%84%9C%EB%B2%84%EC%9D%98-%EC%B0%A8%EC%9D%B4)

\[게임 서버\] 웹 서버와 게임 서버의 차이

웹 서버와 게임 서버를 둘 다 접해본 상태이고,현재는 게임 서버 위주로 공부를 하고 있습니다.공부를 하면서 웹 서버와 게임 서버가 다른 점이 점점 보이게 되었습니다.웹 서버는 간단하게 보면 HTTP 서버이면 Stateless(무상태) 프로토콜입니다.그래서 클라이언트가 ...

[View original](https://velog.io/@yarogono/%EA%B2%8C%EC%9E%84-%EC%84%9C%EB%B2%84-%EC%9B%B9-%EC%84%9C%EB%B2%84%EC%99%80-%EA%B2%8C%EC%9E%84-%EC%84%9C%EB%B2%84%EC%9D%98-%EC%B0%A8%EC%9D%B4)

2023년 8월 23일 · 0개의 댓글

[by **Arthur**](https://velog.io/@yarogono/posts)

3

\[개념원리\]Message Queue

Message Queue에 대한 개념 및 여러 오픈소스에 대해 설명합니다.

[View original](https://velog.io/@power0080/Message-Queue-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC)

2022년 7월 28일 · 0개의 댓글

[by **봄도둑**](https://velog.io/@power0080/posts)

1

[![](https://velog.velcdn.com/images/jihyunhillpark/post/fcf94511-addc-450a-ac96-f96e93ef6930/nginx_img.jpg)](https://velog.io/@jihyunhillpark/%EC%84%9C%EB%B2%84-%EB%B0%B0%ED%8F%AC-1.-NGINX%EB%9E%80)

1\. NGINX의 개념과 이해

사용자가 어플리케이션을 사용하기 위해서는 반드시 배포작업을 거쳐야한다. 최근 웹서버로 NGINX를 많이 쓰는 것을 볼 수가 있는데 과연 이놈이 어떤 놈인지 알아보고 사용해보자. NGINX란? web server의 종류로는 apche, nginx 등 여러 종류가 존재한...

[View original](https://velog.io/@jihyunhillpark/%EC%84%9C%EB%B2%84-%EB%B0%B0%ED%8F%AC-1.-NGINX%EB%9E%80)

2021년 8월 23일 · 2개의 댓글

[by **박지현**](https://velog.io/@jihyunhillpark/posts)

4

[![](https://velog.velcdn.com/images/hwaya2828/post/a6ec35e6-f4b2-4b8b-8258-92cbcf516d63/%F0%9F%8E%81__Today_I_Learned.png)](https://velog.io/@hwaya2828/WSGI-ASGI)

WSGI & ASGI

WSGI & ASGI 란?

[View original](https://velog.io/@hwaya2828/WSGI-ASGI)

2022년 1월 19일 · 0개의 댓글

[by **GreenBean**](https://velog.io/@hwaya2828/posts)

8

[![](https://velog.velcdn.com/images/josworks27/post/41a97d5b-08b9-48f8-9b6c-fa10be9366bb/green-chameleon-s9CC2SKySJM-unsplash.jpg)](https://velog.io/@josworks27/Ajax-%EB%B9%84%EB%8F%99%EA%B8%B0%ED%86%B5%EC%8B%A0-%EA%B0%9C%EB%85%90)

Ajax와 비동기 통신의 기초 개념

AJAX란 비동기 자바스크립트와 XML (Asynchronous JavaScript And XML)을 말합니다. 간단히 말하면, 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하는 것을 말합니다. 출처: https://developer.mozill...

[View original](https://velog.io/@josworks27/Ajax-%EB%B9%84%EB%8F%99%EA%B8%B0%ED%86%B5%EC%8B%A0-%EA%B0%9C%EB%85%90)

2020년 3월 24일 · 0개의 댓글

[by **조성철 (JoSworkS)**](https://velog.io/@josworks27/posts)

0

[![](https://velog.velcdn.com/images/bky373/post/70b483fb-3b0a-487d-9dfb-d3cbce202620/Web_%EC%9B%B9.png)](https://velog.io/@bky373/Web-HTTP%EC%99%80-HTTPS-%EC%B4%88%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC)

\[Web\] HTTP와 Request, Response의 개념 이해

Hyper Text Transfer Protocol의 약자Hyper Text: 직역하면 초월적인 텍스트. 텍스트 간의 연결 방식이 순차적 접근 방식이 아닌 비순차적(초월적) 접근 방식이다. (페이지에서 다른 데이터로 이동할 때) Transfer Protocol: 통신 ...

[View original](https://velog.io/@bky373/Web-HTTP%EC%99%80-HTTPS-%EC%B4%88%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC)

2021년 5월 16일 · 0개의 댓글

[by **Borahm**](https://velog.io/@bky373/posts)

12

자바스크립트로 서버와 통신하는 방법(feat. JSON)

JSON이란?? 뭘까 html문서를 주고받는 프로토콜. ( HTTP통신 )프로토콜(protocol)이란 일종의 통신규약이다.'통신 프로토콜 또는 통신 규약은 컴퓨터나 원거리 통신 장비 사이에서 메시지를 주고 받는 양식과 규칙의 체계이다. 통신 프로토콜은 신호 체계, 인...

[View original](https://velog.io/@rlorxl/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%84%9C%EB%B2%84%EC%99%80-%ED%86%B5%EC%8B%A0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95feat.-JSON)

2022년 2월 12일 · 0개의 댓글

[by **rlorxl**](https://velog.io/@rlorxl/posts)

1

🔥 채널 Channel & 웹소켓 Websocket (feat.django tutorial)

보통 django는 클라이언트와 서버 간 소통하기 위해 HTTP를 사용한다.클라이언트가 서버에 HTTP request를 보낸다.django는 request를 쪼개고, url을 추출해 view에 매칭한다.뷰는 요청을 수행하고 클라이언트에 반응을 보낸다.HTTP와 다르게,...

[View original](https://velog.io/@matisse/Django-advanced-channel-socket)

2020년 5월 11일 · 2개의 댓글

[by **yeeun lee**](https://velog.io/@matisse/posts)

14

[![](https://velog.velcdn.com/images/hahan/post/cb370683-1611-4435-8880-bc38413fac5f/5.png)](https://velog.io/@hahan/Ajax%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)

Ajax란 무엇일까?

Ajax > 비동기 자바스크립트와 XML(Asynchronous Javascript And XML)을 말한다. Ajax는 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하며 XML 뿐만 아니라 HTML, JSON, 일반 텍스트 형식 등을 포함한 다양한 포맷을 주고 받을 수 있다. Ajax의 가장 큰 특징과 핵심적인 부분은 웹 페이지 전체를...

[View original](https://velog.io/@hahan/Ajax%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)

2022년 1월 24일 · 0개의 댓글

[by **한서연**](https://velog.io/@hahan/posts)

2

\[Spring\] @RequestBody, @ResponseBody 이해하기

스프링 프레임워크에서 비동기 통신, 즉 API 통신을 구현하기 위해 @RequestBody와 @ResponseBody 어노테이션을 사용한다.클라이언트 -> 서버 요청: @RequestBody서버 -> 클라이언트 응답: @ResponseBodyjson 기반의 HTTP...

[View original](https://velog.io/@nomonday/Spring-RequestBody-ResponseBody-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

2022년 3월 3일 · 0개의 댓글

[by **kyungjoon**](https://velog.io/@nomonday/posts)

3

[![Powered by GraphCDN, the GraphQL CDN](https://graphcdn.io/badge.svg)](https://graphcdn.io/?ref=powered-by)

web에서 크롤링한 내용입니다.
