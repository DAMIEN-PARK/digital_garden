---
title: 예제_단어퀴즈_supabase_postgreSQL
description: 
date:
  - - 2025-05-06
tags:
  - SQL
publish: false
---


 Supabase + PostgreSQL 기반의 **단어 퀴즈 앱(Word Quiz App)** 을 만드는 예제를 구성해드리겠습니다.  
프론트는 HTML + JS로 간단하게, 백엔드는 Supabase를 활용합니다.

## 단어 퀴즈 앱 구조
### 🔸 주요 기능
1. **랜덤 퀴즈 보기 (영어 → 뜻 4개 중 정답 고르기)**
2. **정답 체크 및 다음 문제로 이동**
  3. **단어/뜻 데이터는 Supabase PostgreSQL에 저장**
## Supabase 설정

### 1. 테이블 생성 (SQL Editor에서 실행)
```sql
create table word_quiz (
  id serial primary key,
  word text not null,
  meaning text not null
);
```

### 2. 데이터 예시 추가
```sql
insert into word_quiz (word, meaning) values
('apple', '사과'),
('book', '책'),
('house', '집'),
('computer', '컴퓨터'),
('car', '자동차'),
('water', '물'),
('sun', '태양'),
('tree', '나무'),
('bird', '새'),
('school', '학교');
```

##  HTML + JS 코드 예제
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <style>
    button { margin: 5px; padding: 10px; font-size: 16px; }
  </style>
</head>
<body>
  <h1>📘 Word Quiz</h1>
  <div id="quiz-box">
    <h2 id="question">Loading...</h2>
    <div id="options"></div>
  </div>
  <script>
    const supabaseUrl = 'https://YOUR_PROJECT.supabase.co';
    const supabaseKey = 'YOUR_ANON_KEY';
    const client = supabase.createClient(supabaseUrl, supabaseKey);

    let words = [];

    async function loadWords() {
      const { data, error } = await client.from("word_quiz").select("*");
      if (error) {
        console.error("데이터 불러오기 오류", error);
        return;
      }
      words = data;
      showQuiz();
    }

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    function showQuiz() {
      if (words.length < 4) {
        document.getElementById("quiz-box").innerHTML = "단어가 부족합니다.";
        return;
      }

      const correctIndex = Math.floor(Math.random() * words.length);
      const correct = words[correctIndex];

      const options = [correct];
      const others = words.filter((w) => w.word !== correct.word);
      shuffle(others);
      options.push(...others.slice(0, 3));
      shuffle(options);

      document.getElementById("question").innerText = `"${correct.word}"의 뜻은?`;
      const optionBox = document.getElementById("options");
      optionBox.innerHTML = "";

      options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.innerText = opt.meaning;
        btn.onclick = () => {
          if (opt.meaning === correct.meaning) {
            alert("✅ 정답입니다!");
          } else {
            alert(`❌ 오답입니다! 정답: ${correct.meaning}`);
          }
          showQuiz(); // 다음 문제로 이동
        };
        optionBox.appendChild(btn);
      });
    }

    loadWords();
  </script>
</body>
</html>
```

---

## ✏️ 사용 전 수정할 부분
- `YOUR_PROJECT` → Supabase 프로젝트 주소
  - `YOUR_ANON_KEY` → Supabase의 공개 API 키

📌 Supabase 대시보드 → Project → Settings → API 에서 확인 가능

## ✅ 학습 포인트 요약

|항목|설명|
|---|---|
|**Supabase**|PostgreSQL + REST API 자동화|
|**테이블 생성**|`word_quiz` 테이블에 단어/뜻 저장|
|**JS 연결**|`supabase-js`로 실시간 API 호출|
|**랜덤 퀴즈**|정답 + 오답 3개 섞어 4지선다 제공|
|**확장 가능**|사용자의 정답률 저장, 난이도별 분류 등 가능|

## 기능 

| 기능       | 설명                           |
| -------- | ---------------------------- |
| 사용자 로그인  | 이메일만 입력 → magic link 방식 로그인  |
| 퀴즈 결과 저장 | 맞힌 개수, 퀴즈 시도 횟수 Supabase에 저장 |
| 레벨 시스템   | 맞힌 누적 개수에 따라 레벨 부여 (Lv.1~3)  |

## 📦 Supabase 설정

### 🔹 1. 사용자 로그인 설정
- Supabase Dashboard → **Authentication → Providers → Email 활성화**
- `Enable email signup` 체크
### 🔹 2. `user_stats` 테이블 생성 (SQL Editor)
```sql
create table user_stats (
  id uuid primary key references auth.users(id),
  email text,
  correct_count int default 0,
  total_attempts int default 0
);
```

## 🖥️ 전체 코드 예제 (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <style>
    button { margin: 5px; padding: 10px; font-size: 16px; }
  </style>
</head>
<body>
  <h1>📘 Word Quiz</h1>
  <div id="login-box">
    <input type="email" id="email" placeholder="이메일 입력">
    <button onclick="signIn()">로그인 (링크 발송)</button>
  </div>

  <div id="quiz-box" style="display:none;">
    <p><strong id="user-email"></strong> | <span id="level"></span></p>
    <h2 id="question"></h2>
    <div id="options"></div>
    <p>정답 수: <span id="correct-count">0</span> / 시도 수: <span id="total-count">0</span></p>
  </div>

  <script>
    const supabaseUrl = 'https://YOUR_PROJECT.supabase.co';
    const supabaseKey = 'YOUR_ANON_KEY';
    const client = supabase.createClient(supabaseUrl, supabaseKey);

    let words = [];
    let user = null;
    let stats = { correct_count: 0, total_attempts: 0 };

    async function signIn() {
      const email = document.getElementById('email').value;
      const { error } = await client.auth.signInWithOtp({ email });
      alert("메일을 확인해 로그인 링크를 클릭하세요.");
    }

    client.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        user = session.user;
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('quiz-box').style.display = 'block';
        document.getElementById('user-email').innerText = user.email;
        await initUserStats();
        await loadWords();
      }
    });

    async function initUserStats() {
      const { data, error } = await client
        .from("user_stats")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!data) {
        await client.from("user_stats").insert([{
          id: user.id,
          email: user.email
        }]);
        stats = { correct_count: 0, total_attempts: 0 };
      } else {
        stats = data;
      }

      updateStatsDisplay();
    }

    function updateStatsDisplay() {
      document.getElementById("correct-count").innerText = stats.correct_count;
      document.getElementById("total-count").innerText = stats.total_attempts;
      const level = stats.correct_count >= 20 ? "Lv.3 고수" :
                    stats.correct_count >= 10 ? "Lv.2 중수" :
                    "Lv.1 초보";
      document.getElementById("level").innerText = level;
    }

    async function loadWords() {
      const { data, error } = await client.from("word_quiz").select("*");
      if (error) {
        console.error("데이터 불러오기 오류", error);
        return;
      }
      words = data;
      showQuiz();
    }

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    async function showQuiz() {
      const correctIndex = Math.floor(Math.random() * words.length);
      const correct = words[correctIndex];
      const options = [correct];
      const others = words.filter(w => w.word !== correct.word);
      shuffle(others);
      options.push(...others.slice(0, 3));
      shuffle(options);

      document.getElementById("question").innerText = `"${correct.word}"의 뜻은?`;
      const optionBox = document.getElementById("options");
      optionBox.innerHTML = "";

      options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.innerText = opt.meaning;
        btn.onclick = async () => {
          stats.total_attempts++;
          if (opt.meaning === correct.meaning) {
            stats.correct_count++;
            alert("✅ 정답입니다!");
          } else {
            alert(`❌ 오답입니다! 정답은 ${correct.meaning}`);
          }
          await client.from("user_stats")
            .update({ correct_count: stats.correct_count, total_attempts: stats.total_attempts })
            .eq("id", user.id);
          updateStatsDisplay();
          showQuiz();
        };
        optionBox.appendChild(btn);
      });
    }

    // 로그인 유지 시 자동 실행
    (async () => {
      const { data: { session } } = await client.auth.getSession();
      if (session) {
        user = session.user;
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('quiz-box').style.display = 'block';
        document.getElementById('user-email').innerText = user.email;
        await initUserStats();
        await loadWords();
      }
    })();
  </script>
</body>
</html>
```

## 🔐 이메일 인증 테스트 방법
1. Supabase에서 `Auth → Settings` 가서 SMTP 설정 없이 테스트할 경우:
      - `auth.emails` 로그를 Supabase에서 직접 확인할 수 있습니다.
  2. 실제 메일로 링크를 받고 싶다면 [Mailtrap](https://mailtrap.io/) 같은 서비스를 연결하세요.

## 🎯 레벨 시스템 로직 예시

| 정답 수  | 레벨      |
| ----- | ------- |
| 0~9   | Lv.1 초보 |
| 10~19 | Lv.2 중수 |
| 20 이상 | Lv.3 고수 |

## 요약

| 기능     | 구현 방식                           |
| ------ | ------------------------------- |
| 로그인    | Supabase 이메일 OTP 로그인 (비밀번호 없음)  |
| 사용자 통계 | `user_stats` 테이블에 정답 수, 시도 수 저장 |
| 레벨 시스템 | 정답 수 기준 동적 레벨 표시                |
| 보안     | Supabase 인증 연동으로 안전한 사용자 분리     |

## 전체 기능 개요

| 기능       | 설명                      |
| -------- | ----------------------- |
| 틀린 단어 저장 | 사용자가 틀린 단어를 별도 테이블에 기록  |
| 복습 기능    | 틀린 단어 목록에서 복습 모드 실행     |
| 리더보드     | 사용자별 누적 정답 수 기준으로 순위 표시 |

## 📦 Supabase 테이블 구성
### 1. `user_stats` (기존)
- 사용자별 정답/시도 횟수 저장
```sql
-- 이미 생성되어 있음
create table user_stats (
  id uuid primary key references auth.users(id),
  email text,
  correct_count int default 0,
  total_attempts int default 0
);
```
### 2. `wrong_answers` (신규)
- 틀린 문제 기록용 테이블
  ```sql
create table wrong_answers (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id),
  word text,
  correct_meaning text,
  selected_meaning text,
  inserted_at timestamp default now()
);
```

## JavaScript 확장 코드
기존 JS 코드에 다음 2가지 기능을 추가합니다.
### 1. 틀린 단어 저장 기능 (기존 정답 체크 부분에 추가)
```js
if (opt.meaning === correct.meaning) {
  stats.correct_count++;
  alert("✅ 정답입니다!");
} else {
  alert(`❌ 오답입니다! 정답은 ${correct.meaning}`);
  // ❗ 틀린 단어 저장
  await client.from("wrong_answers").insert([{
    user_id: user.id,
    word: correct.word,
    correct_meaning: correct.meaning,
    selected_meaning: opt.meaning
  }]);
}
```

### 2. 복습 모드 기능 추가

HTML에 버튼 추가:
```html
<button onclick="startReview()">❗ 틀린 단어 복습</button>
```

JS 함수:
```js
async function startReview() {
  const { data: wrongs, error } = await client
    .from("wrong_answers")
    .select("word, correct_meaning")
    .eq("user_id", user.id);

  if (!wrongs || wrongs.length === 0) {
    alert("틀린 단어가 없습니다.");
    return;
  }

  const quizWords = wrongs.map(w => ({
    word: w.word,
    meaning: w.correct_meaning
  }));

  words = quizWords;
  alert("틀린 단어 복습 모드 시작!");
  showQuiz();
}
```

### 3. 리더보드 표시 기능 추가

HTML에 버튼 추가:

```html
<button onclick="showLeaderboard()">🏆 리더보드 보기</button>
<div id="leaderboard"></div>
```

JS 함수:

```js
async function showLeaderboard() {
  const { data, error } = await client
    .from("user_stats")
    .select("email, correct_count")
    .order("correct_count", { ascending: false })
    .limit(10);

  let html = "<h3>🏆 리더보드 TOP 10</h3><ol>";
  data.forEach((row) => {
    html += `<li>${row.email} - ${row.correct_count}점</li>`;
  });
  html += "</ol>";

  document.getElementById("leaderboard").innerHTML = html;
}
```


## 🧠 사용자 입장에서의 시나리오

1. 로그인 후 퀴즈 진행
2. 오답 시 자동으로 `wrong_answers`에 기록
3. "❗ 틀린 단어 복습" 클릭 → 본인 오답만 다시 풀 수 있음
4. "🏆 리더보드 보기" 클릭 → 상위 10명 순위 표시

##  추가 팁: 중복 오답 방지 (선택)
동일 단어 오답 여러 번 기록 방지하려면 아래처럼 수정하세요:

```js
await client
  .from("wrong_answers")
  .upsert([{
    user_id: user.id,
    word: correct.word,
    correct_meaning: correct.meaning,
    selected_meaning: opt.meaning
  }], { onConflict: ['user_id', 'word'] });
```

➡️ `onConflict`를 쓰려면 Supabase에서 `UNIQUE(user_id, word)` 제약조건을 추가해야 합니다.

---

##  요약

|기능|구현 방법|
|---|---|
|틀린 단어 저장|`wrong_answers` 테이블에 오답 기록|
|복습 모드|본인 오답만 필터링해서 퀴즈 제공|
|리더보드|`user_stats`에서 정답 수 기준 상위 10명 표시|

---

이제 이 앱은 **로그인 → 퀴즈 → 오답 기록 → 복습 → 랭킹 확인**까지 완전한 단어 학습 루프를 갖추게 되었습니다.

원하시면 이 앱을 React, Next.js, 모바일 앱(PWA)으로 확장하거나 UI를 더 예쁘게 만들어드릴 수도 있습니다.  
다음으로 어떤 확장을 해보고 싶으신가요?
### Resources
