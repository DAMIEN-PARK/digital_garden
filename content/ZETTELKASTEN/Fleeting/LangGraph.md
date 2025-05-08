---
title: 무제
description: 
date:
  - - 2025-05-02
tags: 
publish: false
---

## lagnGraph
### 이유
- 복잡도 증가
	- 환각을 방지하는 LLM 추가하며 코드가 길고, 복잡 품질저하로 이어짐.
- 단방향의 파이프 라인 Load >> Answer
	- 사전에 정의된 로더
	- 신뢰 어려운 LLM과 agent
	- 고정된 프롬프트 형식

- 추가 검색기를 통해서 context 보강
	- 분기노드와 검색노드를 적절히 배치. 
	- 노드 만드는법 / 엣지 만드는 법 / 분기노드 만드는 법

![[Pasted image 20250502173425.png|500]]
![[Pasted image 20250502173723.png|500]]

노드와 엣지로 연결(엣지구성)
##### 용어
- python 함수 def. 로 구현함. (랭체인 문법을 쓰지 않아도 됨.)
	- Node : 🟦파이썬 함수.노드 로직만 정의하면 됨. 
	- Edge : ↩️
	- State(상태관리) : 🔷입출력. 노드와 노드간에 state를 통해 서 관리
- 세부흐름 제어 가능
	- Condtional Edge : if elif else 흐름 제어
	- Humman-in-the-loop : 중간 개입 해서 다음단계. input 값을 줘서 사람 개입 가능
	- Checkpointer :  메모리 저장 기능. 멀티턴 대화도 가능. 수정 & 리플레이

### 세부기능
#### 상태 STATE
- TypeDict : dict에 타입힌딩을 추가한 개념. dictionary 라고 보면 됨. {키:밸류}
- 모든값 안 채워도 됨. (첫대화에 연관성을 찾을 수 없으니 )
- 새로운 node에서 값을 overwrite 방식
- Reducer(add_messages 혹은 operator.add) : 
	- 자동으로 list에 추가. 추가해줌[1+2] 대화에 [3] 추가
	- `Annotated[list, add_message]` 메시지
	- 자주 나옴
- 상태이동
	- 각 노드에 새롭게 업데이트 하는 값은 기존 key 값을 덮어 씌움
	- 필요한 상태 값을 조회해서 동작에 활용 가능
	- 노드1에서 노드4까지 반영된 LLM값이 그대로 상태 전달 조회 가능

- 질문을 재작성

![[Pasted image 20250502180143.png]]

문서 검색을 재요청 하는 경우

##### Node 와 Edge
![[Pasted image 20250502180655.png]]

작은 단위로 갈수록 정규한 튜닝이 가능함.
- 키 값으로 꺼냄 /상태에 담아서 보냄
- node
	- 왼쪽은 문자열 "retrieve"  에이전트 노드
	- 오른쪽 함수열 "LLM answer" 정보 검색 노드
- add_edge("노드이름","노드이름")
39분
### Flow Engineering

### Naive RAG

## 모듈 추가

### Hallucination 평가 모듈 추가

### 웹 노드 추가

### 쿼리 재작성 모듈 추가

## LangChain과의 차이
`LangGraph`와 `LangChain`은 모두 **대규모 언어 모델(LLM)을 활용한 애플리케이션 개발 프레임워크**
용도와 구조, 초점이 다름

###  LangChain vs LangGraph 차이점 정리

|구분|**LangChain**|**LangGraph**|
|---|---|---|
|**기본 개념**|LLM 기반 애플리케이션을 쉽게 개발할 수 있도록 도와주는 **모듈형 프레임워크**|LangChain 위에서 동작하는, **LLM 기반 워크플로우를 유연하게 제어**할 수 있는 **상태 기반(Stateful) DAG 시스템**|
|**핵심 목적**|LLM을 활용한 체인 구성 (예: 프롬프트 → 파서 → 툴 실행 등)|여러 LLM 작업과 툴 호출을 **그래프 기반으로 연결**, **분기/루프/조건 분기 등 복잡한 흐름 제어** 가능|
|**비유적 이해**|블록을 순서대로 이어붙이는 **레고**처럼 동작|복잡한 논리 흐름을 갖는 **플로우차트** 혹은 **프로세스 엔진**|
|**구조**|선형(Linear) 또는 트리 기반 체인 구조|**DAG(Directed Acyclic Graph)** 구조, **노드 간의 흐름 제어 가능**|
|**상태 관리**|주로 Stateless 방식|**Stateful 지원** → 상태를 저장하며 각 단계에서 활용 가능|
|**사용 목적 예시**|단순한 QA 시스템, 도구 호출, 텍스트 생성 체인|조건 따라 다른 흐름, 반복 실행, 멀티 에이전트 대화 시뮬레이션 등|
|**적합한 시나리오**|Q&A 챗봇, RAG, 단일 문서 요약 등|멀티 스텝 추론, 역할 기반 멀티에이전트, 시뮬레이션 시스템 등|
|**기반**|LangChain 자체 엔진|LangChain 위에 구축된 **LangChain 공식 서브프레임워크**|
|**복잡도**|상대적으로 쉽고 빠르게 구현 가능|복잡한 로직을 설계할 수 있으나 진입 장벽은 조금 있음|

### 예시로 이해하기
- **LangChain 사용 예시:**
    - 유저 질문 → 문서 검색(RAG) → LLM 응답 생성
    - 단일 체인 혹은 툴을 연결한 간단한 프레임
- **LangGraph 사용 예시:**
    - 유저 질문 → A 조건이면 Agent A 실행, B 조건이면 Agent B 실행
    - 결과가 특정 조건 만족하면 다시 질문 → 반복 (Loop)
    - 상태 업데이트 및 분기 가능

###  결론 요약
- 🔹 **LangChain**은 LLM 활용의 **기본 구성 요소**를 연결하는 프레임워크입니다.
- 🔸 **LangGraph**는 **복잡한 LLM 워크플로우**(조건, 반복, 상태 저장 등)가 필요할 때 사용하는 **상위 레벨 확장 도구**입니다.
- 둘은 **보완 관계**이며, **LangGraph는 LangChain을 기반으로** 작동합니다.

### Resources
- [테디노트_LangGraph](https://youtu.be/W_uwR_yx4-c?si=-YxVebMqOohVPO3B)
- 