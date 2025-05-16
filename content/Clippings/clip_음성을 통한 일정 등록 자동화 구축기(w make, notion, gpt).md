---
url: "https://velog.io/@adoo24/%EC%9D%8C%EC%84%B1%EC%9D%84-%ED%86%B5%ED%95%9C-%EC%9D%BC%EC%A0%95-%EB%93%B1%EB%A1%9D-%EC%9E%90%EB%8F%99%ED%99%94-%EA%B5%AC%EC%B6%95%EA%B8%B0w-make-notion-gpt"
tags:
  - "Clipping"
  - "n8n"
  - "make"
  - "자동화"
created: 2025-05-09
---
[adoo24.log](https://velog.io/@adoo24/posts)

## ✨ 시작하게 된 배경

매번 구글 캘린더를 열어서 일정을 등록하거나 수정하는 게 너무 번거롭다고 느끼던 중,  
우연히 **[방구석 리뷰룸](https://www.youtube.com/watch?v=L4xIFhMnGic)** 채널에서 소개한 Make 자동화 흐름을 보게 되었고, 적용해보고 싶은 욕구가 생겼다.

그래서 시작한 프로젝트:  
**“음성으로 일정을 등록/수정/삭제하는 자동화 시스템”**

---

## ⚙️ 전체 구성

![](https://velog.velcdn.com/images/adoo24/post/aa749344-5a35-4671-a32d-59fe618d3e5f/image.png)  
1\. **iPhone 단축어** 를 이용해 음성 파일을 녹음하고, Make에서 발급한 Webhook URL로 전송한다.  
2\. **Make 시나리오** 가 해당 음성 파일을 받아 **Google Drive에 저장** 하고, 해당 파일의 링크를 확보한다.  
3\. 확보한 파일 링크를 **GPT에게 전달** 해 내용을 분석한다.

- 등록, 수정, 삭제 중 어떤 작업인지 판별
- 일정의 시작/종료 시간, 내용 등을 파악
1. GPT가 추출한 정보를 바탕으로 **Google Calendar에 일정 등록, 수정, 삭제 작업을 자동으로 수행** 한다.

---

## ✨ 실행 영상

[https://youtube.com/shorts/PxqYME8fkiA?si=5iLTQtcgR7qySXZW](https://youtube.com/shorts/PxqYME8fkiA?si=5iLTQtcgR7qySXZW) (iphone)  
[https://youtu.be/x3NByOS8oxU?si=IUAVz75iY0rOBA4O](https://youtu.be/x3NByOS8oxU?si=IUAVz75iY0rOBA4O) (make flow)

---

## ✅ 구현하고 나서 느낀 점

이 시스템은 얼핏 보면 그냥 일정 등록 자동화 같지만,  
실제로 써보니 **"말로만 해도 스케줄이 등록되는"**  
완전히 새로운 생산성 도구가 생긴 느낌이었다.

특히 좋았던 점은:

- **일정을 직접 입력할 필요가 없어짐**
- **손이 자유로운 상태에서도 기록 가능 (차를 자주 이용하는 사람이라면 굉장히 편할듯,,)**
- **확장성이 어마어마하다는 가능성 확인**

---

## 🚀 확장 가능성

이걸 하면서 확신하게 된 건,  
단순히 일정뿐만 아니라 다양한 영역으로 확장할 수 있다는 거였다.

예를 들면:

- 업무 로그 기록 → 카테고리별 분류 → 주간 회의 정리 자동화
- 음성 회의록 기반 문서화 → 인수인계 자료 자동 생성
- 일일/주간 업무 요약 자동 레포트 생성 등

음성 기반으로 필요한 정보만 뽑아내는 구조가 만들어졌다는 것 자체가,  
이후 어떤 자동화를 붙이든 큰 장점이 된다고 느꼈다.

---

## ✍️ 마무리하며

일정 등록이라는 단순한 행동이  
**단축어 + Make(or n8n) + GPT** 의 조합만으로 자동화될 수 있다는 걸 직접 경험하면서,  
"앞으로 무엇이든 자동화할 수 있겠구나"라는 확신이 들었다.

지금도 이 시스템을 잘 활용하고 있고,  
앞으로 업무 자동화나 기록 시스템을 이 기반으로 확장할 계획이다.

[![profile](https://velog.velcdn.com/images/adoo24/profile/e02e43cf-b5a4-4afb-977d-061ffbb6096a/social_profile.jpeg)](https://velog.io/@adoo24/posts)

[김아무개](https://velog.io/@adoo24/posts)[이전 포스트](https://velog.io/@adoo24/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EC%9E%90%EB%8F%99%EC%9D%91%EB%8B%B5-%EB%B4%87-%EA%B0%9C%EB%B0%9C%EA%B8%B0-%ED%95%98%EC%9A%B0%EC%8A%A4-%EC%98%88%EC%95%BD-%EC%8B%9C%EC%8A%A4%ED%85%9C)

[

### 카카오톡 자동응답 봇 개발기 - 하우스 예약 시스템

](https://velog.io/@adoo24/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EC%9E%90%EB%8F%99%EC%9D%91%EB%8B%B5-%EB%B4%87-%EA%B0%9C%EB%B0%9C%EA%B8%B0-%ED%95%98%EC%9A%B0%EC%8A%A4-%EC%98%88%EC%95%BD-%EC%8B%9C%EC%8A%A4%ED%85%9C)[다음 포스트](https://velog.io/@adoo24/%EB%B0%A9%EA%B5%AC%EC%84%9D-%EC%9E%90%EB%8F%99%ED%99%94-%ED%95%B4%EB%B3%B4%EA%B8%B0DIY-IOT)

[

### 방구석 자동화 해보기(DIY IOT)

](https://velog.io/@adoo24/%EB%B0%A9%EA%B5%AC%EC%84%9D-%EC%9E%90%EB%8F%99%ED%99%94-%ED%95%B4%EB%B3%B4%EA%B8%B0DIY-IOT)

#### 0개의 댓글

관심 있을 만한 포스트

[![](https://velog.velcdn.com/images/chacha/post/d973cdaf-599e-4d52-b3ca-56a8d64283e2/image.png)](https://velog.io/@chacha/%EC%9E%90%EB%8F%99%ED%99%94-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%9C%EC%9E%91)

테스트 자동화 구축하기

이 글에서는.. 2014년부터 7년동안(현재 진행형.) 다양한 프로젝트(대/중/소 SI, 대/중/소 솔루션)에 테스트 자동화를 지원하며 나름의 업무 노하우를 정리하려고 한다. 많은 프로젝트(대/중형 SI프로젝트, 대/중/소형 솔루션형 프로젝트)에 투입되서 프로젝트에서 ...

[View original](https://velog.io/@chacha/%EC%9E%90%EB%8F%99%ED%99%94-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%9C%EC%9E%91)

2020년 1월 18일 · 2개의 댓글

[by **chacha**](https://velog.io/@chacha/posts)

10

[![](https://velog.velcdn.com/images/sasha1107/post/a895e1ba-c72a-44b0-9e4a-70aa394c443c/image.png)](https://velog.io/@sasha1107/%EC%95%84%EC%9D%B4%ED%8F%B0-%EB%8B%A8%EC%B6%95%EC%96%B4%EB%A1%9C-%EB%A3%A8%ED%8B%B4-%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EA%B8%B0)

아이폰 단축어로 루틴 자동화하기 🤖

저는 평소에 아이폰 단축어 기능을 유용하게 활용하고 있습니다 🤓 이번 글은 완전히 코딩에 관한 이야기는 아니지만, 그렇다고 코딩과 완전히 무관하지는 않다고 생각합니다. 단축어 스크립트를 만들어 활용하다 보면 마치 일상생활을 코딩하는 기분이 들고, 그만큼 색다른 재미도...

[View original](https://velog.io/@sasha1107/%EC%95%84%EC%9D%B4%ED%8F%B0-%EB%8B%A8%EC%B6%95%EC%96%B4%EB%A1%9C-%EB%A3%A8%ED%8B%B4-%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EA%B8%B0)

2024년 10월 27일 · 3개의 댓글

[by **정수현**](https://velog.io/@sasha1107/posts)

5

[![](https://velog.velcdn.com/images/qmflf556/post/6e2c262b-9780-420c-ae52-ca278cf0bb77/image.png)](https://velog.io/@qmflf556/%EA%B9%83%ED%97%88%EB%B8%8C-%EB%A6%AC%EB%B7%B0%EC%96%B4-%EB%B0%8F-Assignee-%EC%9E%90%EB%8F%99-%ED%95%A0%EB%8B%B9%ED%95%98%EA%B8%B0)

깃허브 리뷰어 및 Assignee 자동 할당하기

이 역시 반복작업을 하고 싶지 않아 자동화를 하려는 몸부림에서 시작했다.코테 스터디를 할 때 매번 Assignee 로 자기 자신을 선택하는게 귀찮다.github action 과 함께라면 자동화를 할 수 있다.일단 해보자.일단 레포지토리 - Actions 로 이동그중에서...

[View original](https://velog.io/@qmflf556/%EA%B9%83%ED%97%88%EB%B8%8C-%EB%A6%AC%EB%B7%B0%EC%96%B4-%EB%B0%8F-Assignee-%EC%9E%90%EB%8F%99-%ED%95%A0%EB%8B%B9%ED%95%98%EA%B8%B0)

2024년 1월 6일 · 0개의 댓글

[by **Yunes**](https://velog.io/@qmflf556/posts)

2

[![](https://velog.velcdn.com/images/hsh111366/post/e9c1232b-f37a-4ad7-a883-86e65d807996/image.png)](https://velog.io/@hsh111366/%EB%A7%81%ED%81%AC-%EA%B3%B5%EC%9C%A0-%ED%95%9C-%EB%B2%88%EC%9C%BC%EB%A1%9C-%EC%97%AC%EB%9F%AC-%EC%82%AC%EB%9E%8C%EA%B3%BC-%EC%89%BD%EA%B2%8C-%EC%9D%BC%EC%A0%95%EC%9D%84-%EB%A7%9E%EC%B6%94%EC%84%B8%EC%9A%94-OneTime)

⏰ 링크 공유 한 번으로, 여러 사람과 쉽게 일정을 맞추세요 - 'OneTime'

대학생분들 아직도 웬투밋 쓰시나요? 🤔

[View original](https://velog.io/@hsh111366/%EB%A7%81%ED%81%AC-%EA%B3%B5%EC%9C%A0-%ED%95%9C-%EB%B2%88%EC%9C%BC%EB%A1%9C-%EC%97%AC%EB%9F%AC-%EC%82%AC%EB%9E%8C%EA%B3%BC-%EC%89%BD%EA%B2%8C-%EC%9D%BC%EC%A0%95%EC%9D%84-%EB%A7%9E%EC%B6%94%EC%84%B8%EC%9A%94-OneTime)

2024년 11월 19일 · 10개의 댓글

[by **Sangho Han**](https://velog.io/@hsh111366/posts)

30

Github Action, Docker compose를 활용한 배포 자동화 CI/CD + (Spring boot, MySQL)

이전글에 이어 이번 시간에는 Github Actions를 활용하여 CI/CD 파이프라인을 구축하여 EC2에 배포 자동화를 진행해보도록하겠습니다진행할 순서는 아래와 같습니다CI CD를 해야하는 이유가 뭘까?배포 자동화를 위한 툴Docker compose를 활용한 ci,...

[View original](https://velog.io/@rivkode/Github-Action-Docker-compose%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94-CICD-Spring-boot-MySQL)

2024년 1월 14일 · 2개의 댓글

[by **Jake**](https://velog.io/@rivkode/posts)

2

[![](https://velog.velcdn.com/images/ansmeer008/post/0f4c285a-3015-4c69-b226-8d26cb59f8ee/image.png)](https://velog.io/@ansmeer008/TIL-CICD-Github-Action-YAML)

\[TIL\] CI/CD, Github Action, YAML

소프트웨어 시스템이나 애플리케이션 개발 및 유지보수 목적으로 수행되는 활동의 절차로 개발에 대한 전체적인 가이드라인을 제공소프트웨어 개발 프로세스 모델: 소프트웨어 개발 생명주기(SDLC = Software Development Life Cycle)를 기반으로 만들어짐...

[View original](https://velog.io/@ansmeer008/TIL-CICD-Github-Action-YAML)

2022년 12월 7일 · 0개의 댓글

[by **Jade**](https://velog.io/@ansmeer008/posts)

2

[![](https://velog.velcdn.com/images/psb7391/post/236f386b-67d0-4504-8627-55795201a41a/image.jpeg)](https://velog.io/@psb7391/DND-8%EA%B8%B0-IT-%EC%97%B0%ED%95%A9-%EB%8F%99%EC%95%84%EB%A6%AC-DND-%ED%9A%8C%EA%B3%A0-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C)

\[DND 8기\] IT 연합 동아리 DND 회고 (프론트엔드)

🏪 슬편생 - 편의점 알바 관리 서비스 💡 편의점 근무자들이 쉽게 일할 수 있는 어플이 필요해!

[View original](https://velog.io/@psb7391/DND-8%EA%B8%B0-IT-%EC%97%B0%ED%95%A9-%EB%8F%99%EC%95%84%EB%A6%AC-DND-%ED%9A%8C%EA%B3%A0-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C)

2023년 3월 6일 · 6개의 댓글

[by **Subin**](https://velog.io/@psb7391/posts)

33

[![](https://velog.velcdn.com/images/seeh_h/post/db19935b-c74d-4cf3-98a7-36e0873ee98a/aws.PNG)](https://velog.io/@seeh_h/AWS%EC%99%80-github-action%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94-%ED%95%98%EA%B8%B0)

\[배포\] AWS와 github action을 이용해 배포 자동화 하기

S3로 배포하는 법을 찾아보다가, github action + AWS S3 bucket을 이용하면 배포 과정을 자동화 할 수 있다고 해서 진행중인 프로젝트에 적용해 보았다.

[View original](https://velog.io/@seeh_h/AWS%EC%99%80-github-action%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94-%ED%95%98%EA%B8%B0)

2021년 3월 20일 · 0개의 댓글

[by **기록일기📫**](https://velog.io/@seeh_h/posts)

13

[![](https://velog.velcdn.com/images/teamcrsd/post/dce4c052-382f-4d1b-b8eb-8b4dc80882bc/thumbnail.png)](https://velog.io/@teamcrsd/Making-A-Reminder-Bot-with-Zapier)

Zapier로 간단하게 디스코드 알림 봇 만들기

Zapier 서비스를 이용해서 간단히 디스코드 알림봇을 만들 수 있었다. 한 줄의 코딩도 하지 않았고, 가입부터 시작해서 10분의 시간이 채 걸리지 않았다. 2012년부터 지금까지 지속되고 있는 서비스인 만큼 믿을만하다는 점도 큰 장점이었다.

[View original](https://velog.io/@teamcrsd/Making-A-Reminder-Bot-with-Zapier)

2020년 7월 26일 · 3개의 댓글

[by **팀 크레센도**](https://velog.io/@teamcrsd/posts)

5

\[Project\] Jenkins 자동배포 시스템 구축

Jenkins 자동배포 시스템을 구축하여 팀원들에게 공유하였습니다.

[View original](https://velog.io/@s2hoon/Project-Jenkins-%EC%9E%90%EB%8F%99%EB%B0%B0%ED%8F%AC-%EA%B5%AC%EC%B6%95)

2023년 10월 31일 · 0개의 댓글

[by **조수훈**](https://velog.io/@s2hoon/posts)

2

[![](https://velog.velcdn.com/images/bruni_23yong/post/62a35199-72e7-45c6-86da-149cb2d2a1d0/image.png)](https://velog.io/@bruni_23yong/Github-actions-docker%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-%EC%9E%90%EB%8F%99-%EB%B0%B0%ED%8F%AC)

Github actions & docker를 사용한 자동 배포

github actions와 docker를 통해 스프링부트 애플리케이션을 자동 배포해보았습니다.

[View original](https://velog.io/@bruni_23yong/Github-actions-docker%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-%EC%9E%90%EB%8F%99-%EB%B0%B0%ED%8F%AC)

2023년 8월 26일 · 0개의 댓글

[by **JeongYong Park**](https://velog.io/@bruni_23yong/posts)

3

[![Powered by GraphCDN, the GraphQL CDN](https://graphcdn.io/badge.svg)](https://graphcdn.io/?ref=powered-by)

web에서 크롤링한 내용입니다.
