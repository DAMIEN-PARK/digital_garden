---
url: https://autotask.kr/entry/n8n%EC%9D%98-%EB%85%B8%EB%93%9C-%EC%9E%90%EB%8F%99%ED%99%94%EC%9D%98-%EA%B5%AC%EC%84%B1-%EC%9A%94%EC%86%8C-%EA%B8%B0%EB%B3%B8
tags:
  - 자동화
  - Clipping
  - n8n
created: 2025-05-08
---
n8n 이야기

![n8n 노드](https://autotask.kr/entry/cold-1763123_640.jpg)

이번 글에서는 **n8n를 처음** 접하는 사람들을 위해 **n8n의 핵심 구성 요소** 인 **노드** 에 대해 다음 순서대로 설명합니다.

## 노드란 무엇인가?

어렸을 적 레고 블록으로 상상 속 세상을 만들어본 기억, 다들 있으시죠? 저도 비행기를 많이 만들었던 기억이 나네요. 😊

n8n의 노드는 레고 블록과 비슷해요. 각각 특정 기능을 담당하는 노드들이 작은 블록이 되고, 이들을 연결하면 원하는 자동화 흐름(워크플로우)을 만들 수 있거든요. 마치 레고 블록을 하나씩 조립하여 멋진 건물이나 자동차를 만드는 것처럼 말이죠.

**노드는 n8n에서 작업을 수행하는 가장 기본적인 단위입니다. n8n은** 노드 기반으로 작동하기 때문에 ' **노드 기반 자동화 도구** '라고 합니다.

n8n에는 데이터 처리, 가공, 다양한 서비스와의 상호 작용을 위한 다양한 종류의 노드가 있습니다. 각 노드는 고유한 기능과 설정 옵션을 가지고 있어요.

노드는 작업에 필요한 정보를 **입력** 받고, 작업을 완료한 후에는 처리 결과를 **출력합니다. 이렇게** 여러 노드를 연결하면 마치 컨베이어 벨트처럼 데이터가 흐르면서 연속적인 작업이 이루어지고, 자동화 흐름(워크플로우)이 완성되는 것이죠 😊

**"노드는 n8n에서 작업을 수행하는 기본 단위이다."** 이것만 기억하시면 n8n의 다양한 노드와 그 역할을 이해하는 데 큰 도움이 될 거예요.

자, 이제 n8n의 다양한 노드 세계로 함께 떠나볼까요? [\[목차 보기\]](https://autotask.kr/entry/#sectionlist)

## 노드의 분류와 역할

레고 블록으로 다양한 작품을 만들듯, n8n도 여러 종류의 노드를 제공하여 유연하고 확장성 있는 자동화를 가능하게 합니다.

마치 레고 블록을 조립하여 멋진 건물이나 자동차를 만드는 것처럼, n8n 노드를 연결하여 원하는 자동화 흐름을 자유롭게 만들 수 있는 것이죠 😊  
  

n8n의 노드는 그 역할에 따라 크게 6가지로 분류할 수 있다고 생각합니다.

각 노드의 종류와 역할을 간단하게 살펴보고, n8n 자동화의 세계로 한 발짝 더 들어가 보도록 하겠습니다.

| **분류** | **설명** |
| --- | --- |
| 트리거 | **\[역활\]**   - 자동화(워크플로우)의 시작점을 결정하고 특정 이벤트나 조건이 발생했을 때 자동으로 실행되는 역할을 합니다. - 예를 들어, 새로운 이메일이 도착하거나 특정 웹사이트에서 데이터가 변경될 때 워크플로우를 실행할 수 있습니다. **\[예시\]**   - **Webhook Trigger** : 외부 서비스에서 웹훅을 호출할 때 워크플로우를 시작합니다. - **Cron Trigger** : 특정 시간 또는 날짜에 맞춰 자동으로 워크플로우를 실행합니다. - **Event Trigger** : 새로운 이메일 도착, 파일 생성 등 특정 이벤트가 발생할 때 워크플로우를 시작합니다. |
| 조건 | **\[역활\]**   - 자동화(워크플로우) 내에서 특정 조건에 따라 작업의 실행 여부를 결정하고 흐름을 제어하는 역할을 합니다. - 예를 들어, 새로운 이메일을 보낸 사람에 따라서 처리 과정을 다르게 하고 싶을때 사용합니다. **\[예시\]**   - **IF** : 조건이 참일 때 처리과정과, 거짓일때 처리과정을 설정할 수 있습니다. - **Filter** : 조건이 참일때만 처리과정을 설정할 수 있습니다.(거짓일때 데이터는 미사용) - **Switch** : 판단하는 값이 다양할 때,값에 따라 자동화(워크플로우)의 흐름을 다르게 설정할 수 있습니다. |
| 데이터 | **\[역활\]**   - 자동화(워크플로우) 내에서 데이터를 변환하거나 가공하는 역할을 합니다. - 예를 들어, 새로운 이메일에 제목 또는 내용을 확인해 스펨메일 여부를 판단할 수 있습니다. **\[예시\]**   - **Edit Fields** : 특정 데이터를 가공하거나 이후 작업에서 사용하는 변수를 설정할 수 있습니다. - **Merge** : 두 개 이상의 데이터 스트림을 하나로 병합할 수 있습니다. - **Code** : JavaScript 코드를 이용해 데이터를 처리하거나 계산할 수 있습니다. |
| 액션 | **\[역활\]**   - 자동화(워크플로우) 내에서 실제 작업을 수행하는 역할을 합니다. - 예를 들어, 새로운 이메일이 도착하면 Slack으로 수신알림을 할 수 있습니다. **\[예시\]**   - **Email Send**: 이메일을 자동으로 보내는 작업을 할 수 있습니다. (Gmail 노드 사용) - **HTTP Request**: 외부 API를 호출하여 데이터를 가져오거나 전송할 수 있습니다. - **Slack** : 슬랙 메시지를 전송하거나 슬랙 채널 정보를 가져 올 수 있습니다. |
| 에러 | **\[역활\]**   - 자동화(워크플로우) 실행 중 발생할 수 있는 오류를 관리하고,안정적인 자동화를 지원하는 역할을 합니다. - 예를 들어, 오류발생 시 관리자에게 알림을 보내거나 백업 작업을 실행할 수 있습니다. **\[예시\]**   - **Error Trigger**: 자동화(워크플로우) 실행 중 오류가 발생할 때 이를 감지할 수 있습니다. - **Continue On Error**: 오류가 발생해도 자동화(워크플로우)가 중단되지 않고 계속 실행되도록 설정합니다. |
| 유틸리티 | **\[역활\]**   - 자동화(워크플로우)를 더욱 효율적으로 수행할 수 있게 도와주는 보조 역할을 합니다. - 예를 들어, 새로운 이메일을 확인후 잠시 대기후 구글시트에 저장할 수 있습니다. **\[예시\]**   - **Wait** : 자동화(워크플로우) 진행을 특정 시간 동안 지연시킬 수 있습니다. - **Loop Over Items**: 자동화(워크플로우) 과정을 반복적으로 수행하는 역활을 합니다. - **NoOp**: 자동화(워크플로우)에 특정 조건에서 작업을 건너뛰고 싶을때 사용합니다. |

**각 노드에 대한 상세한 설명은 앞으로 차근차근 다룰 예정이니 기대해 주세요!**😊

지금은 이런 노드들이 있구나 하는 정도로 가볍게 이해하시면 됩니다.

이제 이 블록들을 어떻게 조립하면 멋진 작품을 만들 수 있을까요? 🤔 [\[목차 보기\]](https://autotask.kr/entry/#sectionlist)

## 노드 연결, 워크플로우 완성

n8n에서는 노드들을 드래그 앤 드롭으로 연결하여 데이터 흐름을 만들고 자동화 작업을 처리합니다.

마치 레고 블록을 조립하듯, 원하는 노드를 순서대로 연결하면 n8n을 활용한 업무 자동화를 시작할 수 있습니다.

실제 예시: 구글 시트에 수집된 데이터를 조건에 따라 계산한 후, 슬랙으로 알림 받기

이 예시에서는 트리거 노드 → 액션 노드 → 조건 노드 → 데이터 노드 → 액션 노드 → 유틸리티 노드를 연결하여 자동화를 구성합니다

![실제 예시 최종화면](https://blog.kakaocdn.net/dn/NIiBx/btsJuYYwddZ/J16y7Yut86s2INmR5nx1H0/img.png)

실제 예시 최종화면

| **노드 분류** | **설명** |
| --- | --- |
| 트리거 | **연결 방법\]**   - 자동화를 언제 실행할지 결정하고 **"Schedule"** 노드를 추가하고 실행시간을 설정 합니다. **\[사용한 노드\]**   - **chedule Trigger:** 특정 시간에 자동화 시작합니다. |
| 액션 | **\[연결 방법\]**   - **"Schedule"** 노드에 + 를 클릭하고 **"Google Sheets"** 노드를 추가합니다 **\[사용한 노드\]**   - **Google Sheets:** 구글 시트에 매출 데이터를 조회합니다. |
| 조건 | **\[연결 방법\]**   - **"Google Sheets"** 노드에 + 를 클릭하고 **"Switch"** 노드를 추가합니다 **\[사용한 노드\]**   - **Switch:** 직급에 따라 계산 방식을 분기합니다. |
| 데이터 | **\[연결 방법\]**   - **"Switch"** 노드에 + 를 클릭하고 **"Code"** 노드를 추가합니다 - " **Code"** 노드에 + 를 클릭하고 **"Merge"** 노드를 추가합니다   	ㄴ Case2, Case3 일때도 **"Merge"** 노드로 연결 합니다. **\[사용한 노드\]**   - **Code:** 매출 데이터를 계산합니다. - **Merge:** 분기된 결과를 병합 합니다. |
| 액션 | **\[연결 방법\]**   - **"Merge"** 노드에 + 를 클릭하고 **"Slack"** 노드를 추가합니다 **\[사용한 노드\]**   - **Slack:** 슬랙채널에 매출 데이터를 전송합니다. |
| 유틸리티 | **\[연결 방법\]**   - **"Slack** 노드에 + 를 클릭하고 **"NoOp(No Operation, do nothing)** " 노드를 추가합니다 **\[사용한 노드\]**   - **NoOp(No Operation, do nothing):** 모든 자동화 과정이 끝났음을 표시하고, 더 이상 작업이 없음을 명시합니다. |

n8n 자동화(워크플로우)는 트리거 노드로 시작하여 액션, 조건, 데이터 처리 노드를 연결하고, 필요시 유틸리티 노드로 마무리하는 것입니다

**물론 더 복잡한 워크플로우도 가능합니다!**[\[목차 보기\]](https://autotask.kr/entry/#sectionlist)

## 마무리: n8n 노드 완벽 가이드

지금까지 n8n의 다양한 노드 종류와 역할, 그리고 노드들을 연결하여 워크플로우를 완성하는 방법을 살펴보았습니다.

마치 레고 블록을 조립하듯, n8n 노드들을 연결하여 원하는 자동화를 쉽고 재미있게 구현할 수 있다는 것을 알게 되었죠? 😊

이제 여러분의 차례입니다!

n8n을 활용하여 지루하고 반복적인 업무에서 벗어나, 더욱 창의적이고 생산적인 일에 집중해 보세요. n8n은 여러분의 상상력을 현실로 만들어줄 강력한 도구가 될 것입니다.

---

혹시 n8n 사용 중 궁금한 점이나 어려움이 있다면 언제든 댓글로 남겨주세요. 함께 문제를 해결하고, 더 나은 자동화를 만들어가도록 노력하겠습니다.

다음 글에서는 [**"n8n 워크플로우 마스터하기: 효율적인 자동화 핵심 팁 대방출"**](https://autotask.kr/entry/n8n%EC%9D%98-%EC%9D%B4%ED%95%B4-%EB%91%90%EB%B2%88%EC%A7%B8-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0) 에 대해 다룰 예정이니 기대해 주세요! 😊 [\[목차 보기\]](https://autotask.kr/entry/#sectionlist)

---

[

n8n으로 업무 자동화 시작하기: 왜 필요하고 어떻게 활용할까?

이번 글에서는 n8n을 처음 접하는 사람들을 위해 자동화의 필요성과 n8n 활용방법을 다음 순서대로 설명합니다.목차업무 자동화, 왜 필요할까요?업무 자동화가 해결하는 문제들업무 자동화의 도

autotask.kr

](https://autotask.kr/entry/n8n%EC%9C%BC%EB%A1%9C-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-%EC%9D%B4%EC%A0%9C%EB%8A%94-%EC%9E%90%EB%8F%99%ED%99%94-%EC%8B%9C%EB%8C%80)[

n8n x Gemini AI의 만남: 당신의 업무를 창의적으로 바꿔줄 마법 설정

지난 글에서 Google API 자격 증명을 설정하는 방법에 대해 알아보았습니다. 이제 한 단계 더 나아가, 최근 화제가 되고 있는 AI, 그중에서도 Google이 선보인 Gemini AI를 n8n과 연동하는 방법을 살펴보

autotask.kr

](https://autotask.kr/entry/n8n-x-Gemini-AI%EC%9D%98-%EB%A7%8C%EB%82%A8-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%97%85%EB%AC%B4%EB%A5%BC-%EC%B0%BD%EC%9D%98%EC%A0%81%EC%9C%BC%EB%A1%9C-%EB%B0%94%EA%BF%94%EC%A4%84-%EB%A7%88%EB%B2%95)[

n8n x Google API 연동: 초보자도 쉽게 따라하는 설정 방법

지난 글에서는 자격증명에 기본개념과 필요성에 대해 살펴보았습니다. 우리가 일상생활에서 자주 사용하는 Google Sheets, Google Drive, Google Calendar와 같은 다양한 Google 서비스를 n8n을 통해 자동화하

autotask.kr

](https://autotask.kr/entry/%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85credentials-%EC%B2%AB-%EB%B2%88%EC%A7%B8-Google-API-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

[http://www.littletikes24.com](https://adcr.naver.com/adcr?x=0app6AX6W/0dhU6GRpgItf///w==kB2+BrSoYPtKY5UIkh58EV+QZ0cD/Jz9rppDNj3NsLk9qndBPvQJhciDHz96Qo8kQ2q0X5aKkSpaE9A3cC+NmbQ/Kj/iRXzA+Xyj/Yr8RQA9QfojHRdaHyqJLfsXLMidU3LR+WcvALW7I6IffeaRW/q6r3kqU+OSvhGJ4eO76wpALLRwvO+GjkZZha5Vb+uUlrlq8QuhKr01I4CKuEg/falZpPmwiwfxPLw41wdknPDraKHx1a+/NdoRDr4YjCZDSl6PZtQF4hCM6byjOYyiowyPeReeLuShTeSNZkPSwhUvjb+uPfGqGG0pfzrX2tlDGumNrKMlZy/zITIj4baHpr4VcPsyG+jVmRl/yXg1UnqMGjuf94lxz2+gR3Y+ytznM4t14GlNWFHIOLUCCFkeKYorTEVQ7Sm5KozL56LQu4OJvfatnjLjVccPizIhG+MAsVYkPAbmlHBUBo0u6SPwkqt2kc0ikh3SueLHBt8i8piI0K4NOdFCQkmSG3kjXHW/32ijan84RIAJs5RIC5pFJgqNkxxxOKXHBR7y9ZahkmcqMmUAKJ6odLsvHzc/9KD8PNi045YNwl12OvvwUlIRaTBmOa5Ku9Lc5Zh+HfKO5mcY0qUuyB4rVjT4eXKaQ5hTZqTwdbYMoHfCBlXEDQcPHOcXMY76/oVB7/U4QqE8oJcXNa/ar9MwEs9674DadqGbCFNKFGpHVT2UJxwfV/ysgBKvxks1Zck61rNyJngpI29InhhHoP0JQ85z88qYc6AQnUxOXLHP4uKA8ILpGN5kAZvsmRh4EISc0fe+UztONyVYxogG0rU3dAJ0U7JXU5xOqDyNWVJCi7g592g1Rydy/QHMJtIkr1DTenaxIj80YV+s=) 광고

[리틀타익스분당점 레고블록](https://adcr.naver.com/adcr?x=0app6AX6W/0dhU6GRpgItf///w==kB2+BrSoYPtKY5UIkh58EV+QZ0cD/Jz9rppDNj3NsLk9qndBPvQJhciDHz96Qo8kQ2q0X5aKkSpaE9A3cC+NmbQ/Kj/iRXzA+Xyj/Yr8RQA9QfojHRdaHyqJLfsXLMidU3LR+WcvALW7I6IffeaRW/q6r3kqU+OSvhGJ4eO76wpALLRwvO+GjkZZha5Vb+uUlrlq8QuhKr01I4CKuEg/falZpPmwiwfxPLw41wdknPDraKHx1a+/NdoRDr4YjCZDSl6PZtQF4hCM6byjOYyiowyPeReeLuShTeSNZkPSwhUvjb+uPfGqGG0pfzrX2tlDGumNrKMlZy/zITIj4baHpr4VcPsyG+jVmRl/yXg1UnqMGjuf94lxz2+gR3Y+ytznM4t14GlNWFHIOLUCCFkeKYorTEVQ7Sm5KozL56LQu4OJvfatnjLjVccPizIhG+MAsVYkPAbmlHBUBo0u6SPwkqt2kc0ikh3SueLHBt8i8piI0K4NOdFCQkmSG3kjXHW/32ijan84RIAJs5RIC5pFJgqNkxxxOKXHBR7y9ZahkmcqMmUAKJ6odLsvHzc/9KD8PNi045YNwl12OvvwUlIRaTBmOa5Ku9Lc5Zh+HfKO5mcY0qUuyB4rVjT4eXKaQ5hTZqTwdbYMoHfCBlXEDQcPHOcXMY76/oVB7/U4QqE8oJcXNa/ar9MwEs9674DadqGbCFNKFGpHVT2UJxwfV/ysgBKvxks1Zck61rNyJngpI29InhhHoP0JQ85z88qYc6AQnUxOXLHP4uKA8ILpGN5kAZvsmRh4EISc0fe+UztONyVYxogG0rU3dAJ0U7JXU5xOqDyNWVJCi7g592g1Rydy/QHMJtIkr1DTenaxIj80YV+s=) [레고블록시스템블록 리틀타익스 하바 라벤스브루거 하페 어린이집 유치원 교재교구 놀이...](https://adcr.naver.com/adcr?x=0app6AX6W/0dhU6GRpgItf///w==kB2+BrSoYPtKY5UIkh58EV+QZ0cD/Jz9rppDNj3NsLk9qndBPvQJhciDHz96Qo8kQ2q0X5aKkSpaE9A3cC+NmbQ/Kj/iRXzA+Xyj/Yr8RQA9QfojHRdaHyqJLfsXLMidU3LR+WcvALW7I6IffeaRW/q6r3kqU+OSvhGJ4eO76wpALLRwvO+GjkZZha5Vb+uUlrlq8QuhKr01I4CKuEg/falZpPmwiwfxPLw41wdknPDraKHx1a+/NdoRDr4YjCZDSl6PZtQF4hCM6byjOYyiowyPeReeLuShTeSNZkPSwhUvjb+uPfGqGG0pfzrX2tlDGumNrKMlZy/zITIj4baHpr4VcPsyG+jVmRl/yXg1UnqMGjuf94lxz2+gR3Y+ytznM4t14GlNWFHIOLUCCFkeKYorTEVQ7Sm5KozL56LQu4OJvfatnjLjVccPizIhG+MAsVYkPAbmlHBUBo0u6SPwkqt2kc0ikh3SueLHBt8i8piI0K4NOdFCQkmSG3kjXHW/32ijan84RIAJs5RIC5pFJgqNkxxxOKXHBR7y9ZahkmcqMmUAKJ6odLsvHzc/9KD8PNi045YNwl12OvvwUlIRaTBmOa5Ku9Lc5Zh+HfKO5mcY0qUuyB4rVjT4eXKaQ5hTZqTwdbYMoHfCBlXEDQcPHOcXMY76/oVB7/U4QqE8oJcXNa/ar9MwEs9674DadqGbCFNKFGpHVT2UJxwfV/ysgBKvxks1Zck61rNyJngpI29InhhHoP0JQ85z88qYc6AQnUxOXLHP4uKA8ILpGN5kAZvsmRh4EISc0fe+UztONyVYxogG0rU3dAJ0U7JXU5xOqDyNWVJCi7g592g1Rydy/QHMJtIkr1DTenaxIj80YV+s=)

[http://www.coupang.com](https://adcr.naver.com/adcr?x=GULaZ6YBlz001i3cIP4Fdf///w==koeAGEzYLR2oAkLlRPOFKgEMtouc9ASgxtU54fArgzpxgIuHfOCsFdA4SiilVsW6PlhTlfFH2QoDfrgaaYB9ZVRYdDFXQ5C9ppDkNk0GEB01IiS6N92NUv/XoXFFiydvvqG4n6WKs0anCaCD4fcdKqbrZTfBhNjd6HC56csHRIz0WNJTFGWuA+hI8OZE6rg2JNyQAF7d/46kGtNL3ZCVNOW6/D46x3pZfJjaMSbt6H7jsS9N4v7TK0qO4MYTjPeOT6yFZO8guau4jsX42/7DdMn3fDJduy0tDZTXC8+Hi5br9ePuwIoEM5bhH9G2EkT/gl1tui1SYTt9EdNKFe3PXimI7mdCO0WBK7IFaW7AfT/RErcPXwCGDyb2qnmRCeZ+hfJ8H1yNvaRJ9OlzF5ytd7jNqR2yC1kIR8fNQAxyhnX6ZLD73hnCmx4o0+teEC2kT+HMblQ+a0rdZNUczQbkt180ac8BdVcEGLkdeO7yXJuAyfCg1/tHzZiOJaZOA0nXjai8odRI5ON71ivENz7dfosIWTH3gdxMTgB3/YrpyMD8tvuASHvrvYlnZmAuVvTAPGNZu/WtC74IdZ77L8Y9O5NlcvT5umvgp5kkDknoxK4muVcfwuYNdeSQMsL2KabitiDcfCbVoborzgDKfvLq5ew29yHNF7L2s2Cz0UYoaAziDT56fXW24TMO94DsvT+40zSvSWSB44yoXiG2E4iq654o6k7tj0rbN1Obs1sfHbKwU6hxC5rOkG1LE6DP5ZYeUST10g9j5NoGfNM9QTIry0SVP+1CRVL7SLfCneQv+moYeYtXfKEF9t1eqwKqCZBPsYDk+PvJWCEwLJKDeTJqovO5Nql0OIi3o4P7Kzcua3N2hOF4OPlCnDbKaNzaSLPy9MFLoCcqQQATsDWKU9YK8l7akVQyoEW9ADul8n8ybPvO2D7OhQH0BbrfN/rfUjLrZLLSGfxjB3eXtxkCZJjlpyb9kyzaAG4xN15tNIccszgw=) 광고

[쿠팡 레고블록 와우회원은 무제한 무료 배송](https://adcr.naver.com/adcr?x=GULaZ6YBlz001i3cIP4Fdf///w==koeAGEzYLR2oAkLlRPOFKgEMtouc9ASgxtU54fArgzpxgIuHfOCsFdA4SiilVsW6PlhTlfFH2QoDfrgaaYB9ZVRYdDFXQ5C9ppDkNk0GEB01IiS6N92NUv/XoXFFiydvvqG4n6WKs0anCaCD4fcdKqbrZTfBhNjd6HC56csHRIz0WNJTFGWuA+hI8OZE6rg2JNyQAF7d/46kGtNL3ZCVNOW6/D46x3pZfJjaMSbt6H7jsS9N4v7TK0qO4MYTjPeOT6yFZO8guau4jsX42/7DdMn3fDJduy0tDZTXC8+Hi5br9ePuwIoEM5bhH9G2EkT/gl1tui1SYTt9EdNKFe3PXimI7mdCO0WBK7IFaW7AfT/RErcPXwCGDyb2qnmRCeZ+hfJ8H1yNvaRJ9OlzF5ytd7jNqR2yC1kIR8fNQAxyhnX6ZLD73hnCmx4o0+teEC2kT+HMblQ+a0rdZNUczQbkt180ac8BdVcEGLkdeO7yXJuAyfCg1/tHzZiOJaZOA0nXjai8odRI5ON71ivENz7dfosIWTH3gdxMTgB3/YrpyMD8tvuASHvrvYlnZmAuVvTAPGNZu/WtC74IdZ77L8Y9O5NlcvT5umvgp5kkDknoxK4muVcfwuYNdeSQMsL2KabitiDcfCbVoborzgDKfvLq5ew29yHNF7L2s2Cz0UYoaAziDT56fXW24TMO94DsvT+40zSvSWSB44yoXiG2E4iq654o6k7tj0rbN1Obs1sfHbKwU6hxC5rOkG1LE6DP5ZYeUST10g9j5NoGfNM9QTIry0SVP+1CRVL7SLfCneQv+moYeYtXfKEF9t1eqwKqCZBPsYDk+PvJWCEwLJKDeTJqovO5Nql0OIi3o4P7Kzcua3N2hOF4OPlCnDbKaNzaSLPy9MFLoCcqQQATsDWKU9YK8l7akVQyoEW9ADul8n8ybPvO2D7OhQH0BbrfN/rfUjLrZLLSGfxjB3eXtxkCZJjlpyb9kyzaAG4xN15tNIccszgw=) [레고블록, 와우회원은 로켓배송 전 상품 무료배송 오늘주문 내일도착! 꼭 필요한 제품은 로켓배송으로 빠르게, 정기배송으로 더 저렴하게](https://adcr.naver.com/adcr?x=GULaZ6YBlz001i3cIP4Fdf///w==koeAGEzYLR2oAkLlRPOFKgEMtouc9ASgxtU54fArgzpxgIuHfOCsFdA4SiilVsW6PlhTlfFH2QoDfrgaaYB9ZVRYdDFXQ5C9ppDkNk0GEB01IiS6N92NUv/XoXFFiydvvqG4n6WKs0anCaCD4fcdKqbrZTfBhNjd6HC56csHRIz0WNJTFGWuA+hI8OZE6rg2JNyQAF7d/46kGtNL3ZCVNOW6/D46x3pZfJjaMSbt6H7jsS9N4v7TK0qO4MYTjPeOT6yFZO8guau4jsX42/7DdMn3fDJduy0tDZTXC8+Hi5br9ePuwIoEM5bhH9G2EkT/gl1tui1SYTt9EdNKFe3PXimI7mdCO0WBK7IFaW7AfT/RErcPXwCGDyb2qnmRCeZ+hfJ8H1yNvaRJ9OlzF5ytd7jNqR2yC1kIR8fNQAxyhnX6ZLD73hnCmx4o0+teEC2kT+HMblQ+a0rdZNUczQbkt180ac8BdVcEGLkdeO7yXJuAyfCg1/tHzZiOJaZOA0nXjai8odRI5ON71ivENz7dfosIWTH3gdxMTgB3/YrpyMD8tvuASHvrvYlnZmAuVvTAPGNZu/WtC74IdZ77L8Y9O5NlcvT5umvgp5kkDknoxK4muVcfwuYNdeSQMsL2KabitiDcfCbVoborzgDKfvLq5ew29yHNF7L2s2Cz0UYoaAziDT56fXW24TMO94DsvT+40zSvSWSB44yoXiG2E4iq654o6k7tj0rbN1Obs1sfHbKwU6hxC5rOkG1LE6DP5ZYeUST10g9j5NoGfNM9QTIry0SVP+1CRVL7SLfCneQv+moYeYtXfKEF9t1eqwKqCZBPsYDk+PvJWCEwLJKDeTJqovO5Nql0OIi3o4P7Kzcua3N2hOF4OPlCnDbKaNzaSLPy9MFLoCcqQQATsDWKU9YK8l7akVQyoEW9ADul8n8ybPvO2D7OhQH0BbrfN/rfUjLrZLLSGfxjB3eXtxkCZJjlpyb9kyzaAG4xN15tNIccszgw=)

#### '' 카테고리의 다른 글

| [n8n x Gemini AI의 만남: 당신의 업무를 창의적으로 바꿔줄 마법 설정](https://autotask.kr/entry/n8n-x-Gemini-AI%EC%9D%98-%EB%A7%8C%EB%82%A8-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%97%85%EB%AC%B4%EB%A5%BC-%EC%B0%BD%EC%9D%98%EC%A0%81%EC%9C%BC%EB%A1%9C-%EB%B0%94%EA%BF%94%EC%A4%84-%EB%A7%88%EB%B2%95) (4) | 2024.09.18 |
| --- | --- |
| [n8n x Google API 연동: 초보자도 쉽게 따라하는 설정 방법](https://autotask.kr/entry/%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85credentials-%EC%B2%AB-%EB%B2%88%EC%A7%B8-Google-API-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0) (2) | 2024.09.17 |
| [n8n 자격 증명(credentials) 완벽 이해: 안전한 자동화를 위한 필수 지식](https://autotask.kr/entry/n8n%EC%9D%98-%EC%9D%B4%ED%95%B4-%EC%84%B8-%EB%B2%88%EC%A7%B8-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85credentials-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0) (8) | 2024.09.13 |
| [n8n 워크플로우 마스터하기: 효율적인 자동화 핵심 팁 대방출](https://autotask.kr/entry/n8n%EC%9D%98-%EC%9D%B4%ED%95%B4-%EB%91%90%EB%B2%88%EC%A7%B8-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0) (10) | 2024.09.11 |
| [n8n으로 업무 자동화 시작하기: 왜 필요하고 어떻게 활용할까?](https://autotask.kr/entry/n8n%EC%9C%BC%EB%A1%9C-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-%EC%9D%B4%EC%A0%9C%EB%8A%94-%EC%9E%90%EB%8F%99%ED%99%94-%EC%8B%9C%EB%8C%80)(1) | 2024.09.05 |

---
유튜브 영상