---
title: 무제
description: 
date: 2025-04-24
tags:
  - RAG
publish: true
URL: https://huggingface.co/posts/Kseniase/836565977783893?fbclid=IwY2xjawJ1IwJleHRuA2FlbQIxMABicmlkETFGZGxJcU9BbFlSSEI1SGNkAR6bV1jKorImM8JCs0krYPPxLQOWNANuUxfgeWT-ptmOaGtLhpZedgkENo74bw_aem_VEsnEsKp04JVRMV1rKI9ZA
---


---
## 1. **InstructRAG**[1](https://arxiv.org/abs/2504.13032)
**"과제 지침 그래프 기반 플래닝"**
- **핵심**: 멀티 에이전트(RL+메타러닝) 협업 시스템
- **특징**: 
    - 과제 해결 경로를 그래프로 구조화
    - RL 에이전트 → 그래프 확장(새 과제 커버리지 ↑)
    - 메타러닝 에이전트 → 학습 전이 최적화(유사 과제 간 지식 공유)
- **성능**: 기존 대비 최대 19.2% 정확도 향상
## 2. **CoRAG**[2](https://huggingface.co/papers/2504.01883)
**"협업형 지식 저장소"**
- **핵심**: 클라이언트 공동 학습 시스템
- **특징**:
    - 중앙 집중형 '공유 패시지 저장소' 구축
    - 저자원 환경에서 개별 RAG 대비 성능 우수
    - **위험 요소**: 타 클라이언트의 유해 패시지 유입 가능성
## 3. **ReaRAG**[3](https://arxiv.org/html/2503.21729v1)[8](https://huggingface.co/papers/2503.21729)
**"반복 검색 제어 시스템"**
- **핵심**: Search/Finish 액션 자동 결정
- **작동 원리**:
    1. LRM(대형 추론 모델)이 초기 생각 생성
    2. 검색 필요 시 **Search** → RAG 엔진 쿼리
    3. 충분한 정보 수집 시 **Finish** → 답변 최종화
- **장점**: 불필요한 검색 반복 ↓, 오류 리트레이 가능
## 4. **MCTS-RAG**[4](https://huggingface.co/papers/2503.20757)[9](https://arxiv.org/html/2503.20757v1)
**"몬테카를로 트리 탐색 적용"**
- **핵심**: 게임 AI 기법의 문제 해결 접목
- **특징**:
    - 가능한 추론 경로를 트리 구조로 탐색
    - 각 분기점에서 검색 쿼리 최적화
    - ==소형 LLM도 GPT-4 수준 성능 달성 가능==
## 5. **Typed-RAG**[5](https://arxiv.org/html/2503.15879v2)
**"질문 유형 감지 분해 시스템"**
- **핵심**: 논팩토이드 질문(토론/경험/비교) 전문 처리
- **작동 단계**:
    1. 질문 유형 분류(토론형 vs 경험형 vs 비교형)
    2. 다중 측면 질문 → 단일 측면 하위 질문으로 분해
    3. 각 하위 질문별 전용 검색 → 종합 응답 생성
## 6. **MADAM-RAG**[6](https://arxiv.org/html/2504.13079)
**"다중 AI 토론 시스템**
- **핵심**: 위키피디아 편집 전쟁 모방 구조
- **특징**:
    - 검색 결과 간 충돌 시 다중 에이전트 토론 개시
    - 집계기(aggregator)가 최종 합의안 도출
    - **장점**:
        - 모호한 질문 → 모든 가능성 제시(AmbigDocs 11.4%↑)
        - 허위 정보 필터링(FaithEval 15.8%↑)
## 7. **HM-RAG**[7](http://arxiv.org/abs/2504.12330)[10](https://arxiv.org/html/2504.12330v1)
**"3계층 멀티모달 처리 시스템"**
- **아키텍처**:
    1. **분해 에이전트**: 복합 질문 → 하위 작업 분할
    2. **검색 에이전트**: 텍스트/그래프/웨브 병렬 검색
    3. **결정 에이전트**: 일관성 투표로 최종 답변 합성
- **성능**: ScienceQA 기준 12.95% 정확도 향상
## 8. **CDF-RAG**[11](https://github.com/elakhatibi/CDF-RAG)
**"인과 관계 그래프 검증 시스템"**
- **핵심**: 인과망(causal graph) 기반 검증
- **특징**:
    - 단순 연관성 → **인과 관계** 중심 검색
    - 다중 홉 추론 시 오류 전파 방지
    - 의료 진단 등 고위험 분야에 특화
## 9. **NodeRAG**[12](https://arxiv.org/abs/2504.11544)
**"이종 그래프 최적화 시스템**
- **핵심**: 그래프 구조 설계 혁신
- **특징**:
    - 노드 유형(개체/관계/메타데이터)별 최적화
    - LightRAG 대비 **저장 효율 3.2배**, 검색 속도 2.1배
    - 오픈엔드 QA에서 GPT-4 수준 성능
## 10. **HeteRAG**[13](https://arxiv.org/abs/2504.10529)
**"이중 표현 시스템"**
- **핵심**: 검색 vs 생성을 위한 이중 청크
- **작동 방식**:
    - **검색용**: 장문(맥락 풍부)
    - **생성용**: 단문(잡음 ↓)
    - 적응형 프롬프트 튜닝으로 두 모드 연동
## 11. **Hyper-RAG**[14](https://github.com/iMoonLab/Hyper-RAG)[15](https://arxiv.org/abs/2504.08758)
**"초그래프(hypergraph) 기반 시스템"**
- **핵심**: 복합 관계(3개 이상 노드 연결) 처리
- **의료 적용 사례**:
    - 신경학 데이터셋에서 GraphRAG 대비 6.3% 향상
    - 경량 버전(Hyper-RAG Lite): 검색 속도 2배 ↑
- **장점**: 질문 복잡도 증가 시 성능 안정성 유지
## **필요한 RAG**
- 복잡한 업무 자동화? → InstructRAG
- 정보의 진실성 검증? → ReaRAG, MADAM-RAG
- 다양한 포맷을 다뤄야 한다면? → HM-RAG
- 협업이 핵심이라면? → CoRAG

## Citations:
1. [https://arxiv.org/abs/2504.13032](https://arxiv.org/abs/2504.13032)
2. [https://huggingface.co/papers/2504.01883](https://huggingface.co/papers/2504.01883)
3. [https://arxiv.org/html/2503.21729v1](https://arxiv.org/html/2503.21729v1)
4. [https://huggingface.co/papers/2503.20757](https://huggingface.co/papers/2503.20757)
5. [https://arxiv.org/html/2503.15879v2](https://arxiv.org/html/2503.15879v2)
6. [https://arxiv.org/html/2504.13079](https://arxiv.org/html/2504.13079)
7. [http://arxiv.org/abs/2504.12330](http://arxiv.org/abs/2504.12330)
8. [https://huggingface.co/papers/2503.21729](https://huggingface.co/papers/2503.21729)
9. [https://arxiv.org/html/2503.20757v1](https://arxiv.org/html/2503.20757v1)
10. [https://arxiv.org/html/2504.12330v1](https://arxiv.org/html/2504.12330v1)
11. [https://github.com/elakhatibi/CDF-RAG](https://github.com/elakhatibi/CDF-RAG)
12. [https://arxiv.org/abs/2504.11544](https://arxiv.org/abs/2504.11544)
13. [https://arxiv.org/abs/2504.10529](https://arxiv.org/abs/2504.10529)
14. [https://github.com/iMoonLab/Hyper-RAG](https://github.com/iMoonLab/Hyper-RAG)
15. [https://arxiv.org/abs/2504.08758](https://arxiv.org/abs/2504.08758)
16. [https://arxiv.org/abs/2406.13629](https://arxiv.org/abs/2406.13629)
17. [https://openreview.net/forum?id=P1qhkp8gQT](https://openreview.net/forum?id=P1qhkp8gQT)
18. [https://weizhepei.com/instruct-rag-page/](https://weizhepei.com/instruct-rag-page/)
19. [https://github.com/elakhatibi/CDF-RAG](https://github.com/elakhatibi/CDF-RAG)
20. [https://powerdrill.ai/discover/summary-instructrag-leveraging-retrieval-augmented-cm9n9xamx4off07svmjz8w0o3](https://powerdrill.ai/discover/summary-instructrag-leveraging-retrieval-augmented-cm9n9xamx4off07svmjz8w0o3)
21. [https://arxiv.org/html/2504.01883v1](https://arxiv.org/html/2504.01883v1)
22. [https://arxiv.org/abs/2503.21729](https://arxiv.org/abs/2503.21729)
23. [https://arxiv.org/html/2503.20757v1](https://arxiv.org/html/2503.20757v1)
24. [https://arxiv.org/abs/2503.15879](https://arxiv.org/abs/2503.15879)
25. [https://arxiv.org/abs/2504.13079](https://arxiv.org/abs/2504.13079)
26. [https://arxiv.org/pdf/2504.12330.pdf](https://arxiv.org/pdf/2504.12330.pdf)
27. [https://arxiv.org/pdf/2504.12560.pdf](https://arxiv.org/pdf/2504.12560.pdf)
28. [https://www.themoonlight.io/ko/review/rearag-knowledge-guided-reasoning-enhances-factuality-of-large-reasoning-models-with-iterative-retrieval-augmented-generation](https://www.themoonlight.io/ko/review/rearag-knowledge-guided-reasoning-enhances-factuality-of-large-reasoning-models-with-iterative-retrieval-augmented-generation)
29. [https://arxiv.org/html/2504.11544v1](https://arxiv.org/html/2504.11544v1)
30. [https://arxiv.org/html/2504.10529v1](https://arxiv.org/html/2504.10529v1)
31. [https://www.getaiverse.com/post/faktenbasierte-entscheidungsfindung-rearag-verbessert-die-genauigkeit-grosser-sprachmodelle-durch-iteratives-retrieval-augmented-generation](https://www.getaiverse.com/post/faktenbasierte-entscheidungsfindung-rearag-verbessert-die-genauigkeit-grosser-sprachmodelle-durch-iteratives-retrieval-augmented-generation)
32. [https://huggingface.co/papers/2503.20757](https://huggingface.co/papers/2503.20757)
33. [https://huggingface.co/papers/2503.15879](https://huggingface.co/papers/2503.15879)
34. [http://arxiv.org/abs/2504.12330](http://arxiv.org/abs/2504.12330)
35. [https://www.linkedin.com/posts/maryammiradi_causal-dynamic-feedback-cdf-rag-transform-activity-7319440198130388992-CLaP](https://www.linkedin.com/posts/maryammiradi_causal-dynamic-feedback-cdf-rag-transform-activity-7319440198130388992-CLaP)
36. [https://arxiv.org/abs/2504.11544](https://arxiv.org/abs/2504.11544)
37. [https://arxiv.org/abs/2504.10529](https://arxiv.org/abs/2504.10529)
38. [https://huggingface.co/papers/2504.11544](https://huggingface.co/papers/2504.11544)
39. [https://terry-xu-666.github.io/NodeRAG_web/](https://terry-xu-666.github.io/NodeRAG_web/)
40. [https://github.com/Terry-Xu-666/NodeRAG/blob/main/README.md](https://github.com/Terry-Xu-666/NodeRAG/blob/main/README.md)
41. [https://openreview.net/forum?id=J3xRByRqOz](https://openreview.net/forum?id=J3xRByRqOz)
42. [https://arxiv.org/html/2503.21322v1](https://arxiv.org/html/2503.21322v1)
43. [https://powerdrill.ai/discover/summary-noderag-structuring-graph-based-rag-with-cm9luj5ra7kg107rajqdt2aou](https://powerdrill.ai/discover/summary-noderag-structuring-graph-based-rag-with-cm9luj5ra7kg107rajqdt2aou)
44. [https://huggingface.co/posts/Kseniase/836565977783893](https://huggingface.co/posts/Kseniase/836565977783893)
45. [https://www.preprints.org/frontend/manuscript/4a6d7083e4f718a2a27ea06e7721ad22/download_pub](https://www.preprints.org/frontend/manuscript/4a6d7083e4f718a2a27ea06e7721ad22/download_pub)
46. [https://github.com/Terry-Xu-666/NodeRAG/releases](https://github.com/Terry-Xu-666/NodeRAG/releases)
47. [https://chatpaper.com/chatpaper/zh-CN/paper/129547](https://chatpaper.com/chatpaper/zh-CN/paper/129547)
48. [https://huggingface.co/papers?q=Graph+RAG](https://huggingface.co/papers?q=Graph+RAG)
49. [https://www.piwheels.org/project/noderag/](https://www.piwheels.org/project/noderag/)
50. [https://github.com/weizhepei/InstructRAG](https://github.com/weizhepei/InstructRAG)
51. [https://huggingface.co/papers/2504.01883](https://huggingface.co/papers/2504.01883)
52. [https://arxiv.org/html/2503.21729v1](https://arxiv.org/html/2503.21729v1)
53. [https://www.themoonlight.io/review/rearag-knowledge-guided-reasoning-enhances-factuality-of-large-reasoning-models-with-iterative-retrieval-augmented-generation](https://www.themoonlight.io/review/rearag-knowledge-guided-reasoning-enhances-factuality-of-large-reasoning-models-with-iterative-retrieval-augmented-generation)
54. [https://arxiv.org/abs/2501.00332](https://arxiv.org/abs/2501.00332)
55. [https://www.linkedin.com/posts/raphaelmansuy_noderag-activity-7318508191439290369-stAQ](https://www.linkedin.com/posts/raphaelmansuy_noderag-activity-7318508191439290369-stAQ)
56. [https://www.aisharenet.com/en/noderag/](https://www.aisharenet.com/en/noderag/)
57. [https://aclanthology.org/2022.naacl-srw.7.pdf](https://aclanthology.org/2022.naacl-srw.7.pdf)

