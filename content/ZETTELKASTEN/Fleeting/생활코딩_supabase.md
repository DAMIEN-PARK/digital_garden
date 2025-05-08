---
title: 생활코딩_supabase
description: 
date:
  - - 2025-05-05
tags:
  - SQL
publish: false
URL:
---


---
# supabase 기본
https://supabase.com/dashboard/org/tkmkprosspnjfeehlpje

1주일 동안 아무것도 안하면 일시정지 됨.
	임시비번 : `u1XmwMuqVH1UVfw9`

![[Pasted image 20250505220810.png|500]]

- RLS :  우선 비활성화 : RLS가 꺼져있는 상태 형태 제품은 프로덕션 환경에서 사용하면 안됨.
- 테이블 만듬

	 ![[Pasted image 20250505221148.png|500]]

- insert row
- supabase js 구글에 검색
	- https://supabase.com/docs/reference/javascript/installing
	- npm : `npm install @supabase/supabase-js`

```js
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//or
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
```

JS는 import문이 좀 까다로움
- supabase  API

![[Pasted image 20250505223634.png|700]]

- Project url : `"const supabaseUrl ="https://uuqbndfbwubhnnyjaizm.supabase.co"` 넣음
- anon public: 웹페이지에 넣얻 상관없음 여기에다가는 anon키 집어 넣음 anonymous
- service_role : 모든 곳에서 다 할 수 있음 다만 노출될 위험이 있으니 주의

- HTML 코드 키 index.html로 만든다 반드시
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width" />
  <script src ="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>
<body>
  <h1> Supabase </h1>
  <div id="history"></div>                                                                                  
  <input type = "button" value="create" id="create_btn"/>
  <script>
const supabaseUrl ="https://uuqbndfbwubhnnyjaizm.supabase.co"
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cWJuZGZid3ViaG5ueWphaXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDgzMjQsImV4cCI6MjA2MjAyNDMyNH0.DUyZB1u7LxuUi4Wrijj8M3CK50ysm7R0NqYpMnvHFXA"
const client = supabase.createClient(supabaseUrl,supabaseKey);
async function refreshHistory(){
  let { data: record, error } = await client.from("page").select("*");
  console.log('record', record);
  let tag="";
  for (let i = 0; i<record.length; i++){
    tag += `<h2>${record[i].title}</h2>${record[i].body}`;
  }
  document.querySelector("#history").innerHTML = tag;
}
refreshHistory();
  
async function recordHandler(){
  const { data, error } = await client
  .from('page')
  .insert([{ title : prompt("title?"), body:prompt("body?")}]);
  refreshHistory();
}
document
  .querySelector("#create_btn")
  .addEventListener("click", recordHandler);
    </script>
  </body>
  </html>
  
    

```

수파베이스에서 page에 read all row를 카피해서 가져옴
![[Pasted image 20250505224024.png|700]]

- `await` 는 비동기적 코드를 동기적으로 바꿔줌, 반드시 `async` 라는 함수 안에 담아야 함.
- record를 지역변수화 시킴
- API Docs >> insert a row 내용을 카피함

![[Pasted image 20250505230140.png|700]]


![[Pasted image 20250506090727.png|700]]

create 버튼을 누르고 입력하면 supabase에 자동으로 입력 된다.

![[Pasted image 20250506091035.png|700]]


# supabase 인증 severless App 구현
- [수업 준비 예제](https://docs.google.com/document/d/1pY4gUe_cIZe-HjouKHUlWoZurhYfPIVAqYW25Fe7D8E/edit?tab=t.0)
 - Authentication 에 들어가면 providers 가 존재 > github 연결

![[Pasted image 20250506121054.png|300]]

 - 깃헙연결하기
 - [[github]] 이동 >> setting >> developer settings >> OAuth Apps (타사인증)

![[Pasted image 20250506121512.png]]

- Callback URL을 복사해서 깃헙에다가 붙여넣음(리디렉션)
![[Pasted image 20250506121610.png]]

- 깃헙에서 Client ID 와 Client secreet을  복사해서 supabase에 붙여 넣는다.

![[Pasted image 20250506133438.png]]

이렇게 되면 github에 인증을 제공하는 제공자로 연결 됨.

웹페이지 생성
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <script src="https://uuqbndfbwubhnnyjaizm.supabase.co"></script>
      </head>
      <body>
        <h1>Supabase Auth</h1>
      </body>
</html>
```

- 실행 : `npx local-web-server`
- 신뢰할수있도록 등록 white list 
	- Authentication>>url configuration>>Redirect URLs
	- 내 웹사이트 주소를 적으면 됨. add

##### 인증
- 로그인 버튼
```html
 <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
      </head>
      <body>
        <h1>Supabase Auth</h1>
        <input type="button" value="login" id="login" />
        <script>
          const supabaseUrl = 'https://uuqbndfbwubhnnyjaizm.supabase.co';
          const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cWJuZGZid3ViaG5ueWphaXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDgzMjQsImV4cCI6MjA2MjAyNDMyNH0.DUyZB1u7LxuUi4Wrijj8M3CK50ysm7R0NqYpMnvHFXA';
          const client = supabase.createClient(supabaseUrl, supabaseKey);
          async function signInWithGithub() {
            const { data, error } = await client.auth.signInWithOAuth({
              provider: "github",
              options: {
                redirectTo: "http://localhost:8000",    // 사용자가 로그인을 잘 끝나면 이쪽으로 리디렉트트
              },
            });
          }
          document
            .querySelector("#login")
            .addEventListener("click", signInWithGithub);
        </script>
      </body>
</html>
```


로그인 버튼 생성
```html
<input type="button" value="logout" id="logout" />
   <script>
     async function checkLogin() {
       const authInfo = await client.auth.getSession();
       const session = authInfo.data.session;
       document.querySelector("#login").style.display = "none";
       document.querySelector("#logout").style.display = "none";
       if (session === null) {
         document.querySelector("#login").style.display = "inline";
       } else {
         document.querySelector("#logout").style.display = "inline";
       }
     }
     checkLogin();
   </script>
```

- 서버(백엔드)엔지니어

![[Pasted image 20250506142636.png|500]]

서버가 최소한 사용(코딩에 집중)
- 인증(Authentication)과 가공(Edge Function)
##### 테이블 설정
- 뉴테이블 생성

![[Pasted image 20250506170934.png|500]]

ㄴ user_id 링크 클릭해서 아래와 같이 연결ㄱ

![[Pasted image 20250506170913.png|500]]

![[Pasted image 20250506171146.png|500]]

##### SELECT : 누구나 데이터 읽을 수 있다
```html
<div id="history"></div>
   <script>
     async function refreshHistory() {
       let { data: record, error } = await client.from("page").select("*");
       let tag = "";
       for (let i = 0; i < record.length; i++) {
         tag += `<div style="margin:20px 0"><h2>${record[i].title}</h2>${record[i].body}</div>`;
       }
       document.querySelector("#history").innerHTML = tag;
     }
     refreshHistory();
   </script>
```

##### INSERT 쓰기 정책 추가

- create policy >> 
- 우리 시스템에 supabse 통해 온 모든 사람 중 인증된 사람만 생성 가능
```html
	<input type="button" value="create" id="create_btn" />
   <script>
     async function recordHandler() {
       const { data, error } = await client
         .from("page")
         .insert([{ title: prompt("title?"), body: prompt("body?") }]);
       refreshHistory();
     }
     document
       .querySelector("#create_btn")
       .addEventListener("click", recordHandler);
   </script>
```


##### DELETE
- 작성자만 삭제 Policies 추가(아래 처럼)
```sql
create policy "Enable delete for users based on user_id"
on "public"."page"
as PERMISSIVE
for DELETE
to public
using (
	(select auth.uid()) = user_id
);
```

```html
<script>
     async function refreshHistory() {
       let { data: record, error } = await client.from("page").select("*");
       let tag = "";
       for (let i = 0; i < record.length; i++) {
         tag += `<div style="margin:20px 0">
           <h2>${record[i].title}</h2>${record[i].body} <p>
             <input type="button" value="delete" onclick="
             deleteRecord(${record[i].id})
             " />
</p>
         </div>
         `;
       }
       document.querySelector("#history").innerHTML = tag;
     }
     refreshHistory();
   </script>

	<script>
	async function deleteRecord(id) {
		const { data, error } = await client.from("page").delete().eq("id", id);
		refreshHistory();
	}
	</script>
```

WHERE user_id=1
- USING EXPRESSION  auth.uid()=user_id
	작업전에 사전에 참인것들을 조회 수정

- WITH CHECK expression auth.uid() = user_id
	작업 사후적인 처리를 함.

- 완성코드
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    </head>
    <body>
        <h1>Supabase Auth</h1>
    <input type="button" value="login" id="login" />
  
    <script>
        const supabaseUrl = 'https://uuqbndfbwubhnnyjaizm.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cWJuZGZid3ViaG5ueWphaXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDgzMjQsImV4cCI6MjA2MjAyNDMyNH0.DUyZB1u7LxuUi4Wrijj8M3CK50ysm7R0NqYpMnvHFXA'
        const client = supabase.createClient(supabaseUrl, supabaseKey);
        async function signInWithGithub() {
            const { data, error } = await client.auth.signInWithOAuth({
              provider: "github",
              options: {
                redirectTo: "http://localhost:8000",    // 사용자가 로그인을 잘 끝나면 이쪽으로 리디렉트트
              },
            });
        }
        document
            .querySelector("#login")
            .addEventListener("click", signInWithGithub);
    </script>
<input type="button" value="logout" id="logout" />
    <script>
        async function checkLogin() {
        const authInfo = await client.auth.getSession();
        const session = authInfo.data.session;
        document.querySelector("#login").style.display = "none";
        document.querySelector("#logout").style.display = "none";
        if (session === null) {
            document.querySelector("#login").style.display = "inline";
        } else {
            document.querySelector("#logout").style.display = "inline";
        }
    }
        checkLogin();
    </script>
<script>
    async function signOut() {
        const { error } = await client.auth.signOut();
        checkLogin();
    }
    document.querySelector("#logout").addEventListener("click", signOut);
    </script>  
    <div id="history"></div>
   <script>
    async function refreshHistory() {
      let { data: record, error } = await client.from("page").select("*");
      let tag = "";
      for (let i = 0; i < record.length; i++) {
        tag += `<div style="margin:20px 0"><h2>${record[i].title}</h2>${record[i].body}</div>`;
      }
      document.querySelector("#history").innerHTML = tag;
    }
    refreshHistory();
  </script>
     <input type="button" value="create" id="create_btn" />
     <script>
       async function recordHandler() {
         const { data, error } = await client
           .from("page")
           .insert([{ title: prompt("title?"), body: prompt("body?") }]);
         refreshHistory();
       }
       document
         .querySelector("#create_btn")
         .addEventListener("click", recordHandler);
     </script>
    <script>
      async function refreshHistory() {
        let { data: record, error } = await client.from("page").select("*");

        let tag = "";
        for (let i = 0; i < record.length; i++) {
          tag += `<div style="margin:20px 0">
            <h2>${record[i].title}</h2>${record[i].body} <p>
              <input type="button" value="delete" onclick="
              deleteRecord(${record[i].id})
              " />
 </p>
          </div>
          `;
        }
        document.querySelector("#history").innerHTML = tag;
      }
      refreshHistory();
    </script>
       <script>
        async function deleteRecord(id) {
          const { data, error } = await client.from("page").delete().eq("id", id);
          refreshHistory();
        }
      </script>
  </body>
</html>
```

# Resources
- [실습 자료](https://docs.google.com/document/d/1pY4gUe_cIZe-HjouKHUlWoZurhYfPIVAqYW25Fe7D8E/edit?pli=1&tab=t.0)
- [[예제_단어퀴즈_supabase_postgreSQL]]
- 생활코딩 url: https://youtu.be/yZ89etxVBKs?si=ZtOcgfPnBTqFNwSh