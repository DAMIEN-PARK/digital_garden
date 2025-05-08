---
title: RAG 파이프라인 네이버 뉴스기사 기반 Q&A챗복제작
description: 
date:
  - - 2025-05-05
tags:
  - RAG
publish: false
URL: https://youtu.be/1scMJH93v0M?si=n6u2934-HLo21SmB
---

과정 : LOAD-SPLIT-EMBEDDED-STORE
- 1단계 문서로드(Document Load): 문서 내용을 불러옵니다.
- 2단계 분할(Text Split): 문서를 특정 기준(Chunk) 으로 분할합니다.
- 3단계 임베딩(Embedding): 분할된(Chunk) 를 임베딩하여 저장합니다.
- 4단계 벡터DB 저장: 임베딩된 Chunk 를 DB에 저장합니다.
- 5단계 검색기(Retriever): 쿼리(Query) 를 바탕으로 DB에서 검색하여 결과를 가져오기 위하여 리트리버를 정의합니다. 리트리버는 검색 알고리즘이며(Dense, Sparse) 리트리버로 나뉘게 됩니다.
    - **Dense**: 유사도 기반 검색(FAISS, DPR)
    - **Sparse**: 키워드 기반 검색(BM25, TF-IDF)
- 6단계 프롬프트: RAG 를 수행하기 위한 프롬프트를 생성합니다. 프롬프트의 context 에는 문서에서 검색된 내용이 입력됩니다. 프롬프트 엔지니어링을 통하여 답변의 형식을 지정할 수 있습니다.
- 7단계 LLM: 모델을 정의합니다.(GPT-3.5, GPT-4, Claude, etc..)
- 8단계 Chain: 프롬프트 - LLM - 출력 에 이르는 체인을 생성합니다.
---
- 과정 : LOAD-SPLIT-EMBEDDED-STORE
	load() 라는 함수 하나로 통합처리(편리와 생산성이 좋음)
- 사용 : PROMPT LLM 

### load
- 타입에 따라서 모듈 설정
#### 예시
- 예시 웹 가져오기(크롤링)
- 웹페이지 검사 >> class 에서 news article body 부분
- "class="newsct_article _article_body""
![[Pasted image 20250505153843.png|700]]

웹 페이지의 내용을 로드하고, 텍스트를 청크로 나누어 인덱싱하는 과정을 거친 후, 관련된 텍스트 스니펫을 검색하여 새로운 내용을 생성하는 과정을 구현합니다.

`WebBaseLoader`는 지정된 웹 페이지에서 필요한 부분만을 파싱하기 위해 `bs4.SoupStrainer`를 사용합니다.

[참고] `bs4.SoupStrainer` 는 편리하게 웹에서 원하는 요소를 가져올 수 있도록 해줍니다.
(예시)
```python
bs4.SoupStrainer(
    "div",
    attrs={"class": ["newsct_article _article_body", "media_end_head_title"]},
)
```

- url/ class 바꿔줌
- PDF 일 경우 PDF 로더로 바꿔줌
```python
# 뉴스기사 내용을 로드하고, 청크로 나누고, 인덱싱합니다.

loader = WebBaseLoader(
    web_paths=("https://n.news.naver.com/article/666/0000071812?cds=news_media_pc&type=editn",),
    bs_kwargs=dict(
        parse_only=bs4.SoupStrainer(
            "div",
            attrs={"class": ["newsct_article _article_body", "media_end_head_title"]},    ## 내용. 기사 타이를 까지 가져옴
        )
    ),
)

docs = loader.load()
print(f"문서의 수: {len(docs)}")
docs
```
### split 
- 여러가지 단위 기준으로 쪼갬
- 짬뽕되면 품질 쪼개지니까 질문에 적절하게 쪼갤수 있도록 문서마다 다르기 때문에 테스트 해보면서 적용
- 
`RecursiveCharacterTextSplitter`는 문서를 지정된 크기의 청크로 나눕니다.

```python
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)

  

splits = text_splitter.split_documents(docs)

len(splits)
>>> 몇개로 쪼개진지 갯수가 나옴. 2 3 등등
```

### embed
`FAISS` 혹은 `Chroma`와 같은 vectorstore는 이러한 청크를 바탕으로 문서의 벡터 표현을 생성합니다.
```python
# 벡터스토어를 생성합니다.
vectorstore = FAISS.from_documents(documents=splits, embedding=OpenAIEmbeddings())

# 뉴스에 포함되어 있는 정보를 검색하고 생성합니다.
retriever = vectorstore.as_retriever()
```
vector 1536차원으로 변환 좌표로 만듬. 그리고 FAISS에다가 저장함 /검색을 하려면 리트리버가 필요함. DB에 저장해서 리트리버로 가져옴. 

- `vectorstore.as_retriever()`를 통해 생성된 검색기는 `hub.pull`로 가져온 프롬프트와 `ChatOpenAI` 모델을 사용하여 새로운 내용을 생성합니다.

마지막으로, `StrOutputParser`는 생성된 결과를 문자열로 파싱합니다.
```python
from langchain_core.prompts import PromptTemplate

prompt = PromptTemplate.from_template(
    """당신은 질문-답변(Question-Answering)을 수행하는 친절한 AI 어시스턴트입니다. 당신의 임무는 주어진 문맥(context) 에서 주어진 질문(question) 에 답하는 것입니다.

검색된 다음 문맥(context) 을 사용하여 질문(question) 에 답하세요. 만약, 주어진 문맥(context) 에서 답을 찾을 수 없다면, 답을 모른다면 `주어진 정보에서 질문에 대한 정보를 찾을 수 없습니다` 라고 답하세요.

한글로 답변해 주세요. 단, 기술적인 용어나 이름은 번역하지 않고 그대로 사용해 주세요.

#Question:
{question}

#Context:
{context}

#Answer:"""

)
```

### store
hub 에서 `teddynote/rag-prompt-korean` 프롬프트를 다운로드 받아 입력할 수 있습니다. 이런 경우 별도의 프롬프트 작성과정이 생략됩니다.
- langsmith hub : https://smith.langchain.com/hub/teddynote/rag-prompt-korean
	- 여러가지 tag 카테고리로 프롬프트 가져가다가 쓰면 됨
	- ![[Pasted image 20250505172240.png|700]]

	- `prompt = hub.pull("rlm/rag-prompt")`
	- context에 는 단락을 가져옴 



- LLM은 Brain 두뇌역할을 담당함
- gpt-4o 3.5turbo 
- 한글은 gpt-4-turbo-preview가 좋음
- 
```python
# prompt = hub.pull("teddynote/rag-prompt-korean")
# prompt

llm = ChatOpenAI(model_name="gpt-4o", temperature=0)

## 한 문서로 만들기
def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

# 체인을 생성합니다.
rag_chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)
```

ㄴ 리트리버의 역할 가령 "출산정책"을 검색하면 출산정책에 관한 연관 단락을 뽑음.

스트리밍 출력을 위하여 `stream_response` 를 사용합니다.
```python
from langchain_teddynote.messages import stream_response

answer = rag_chain.stream("최근 만화책을 보는 추이는 어떤가요?")   ## 질문을 넣으면, 그에 대한 답변을 생성합니다.

stream_response(answer)
>>>최근 만화책을 보는 추이는 매우 긍정적입니다. 1020세대가 실물 소장을 위해 종이 만화책을 구매하면서 만화책의 인기가 다시 상승하고 있습니다. 예스24에 따르면 올해 상반기 만화책 판매량은 전년 동기 대비 13.8% 증가했으며, 특히 1020세대의 만화책 구매 비율이 최근 6년간 지속적으로 상승했습니다. 2020년과 비교해 1020세대의 만화책 구매는 2배가량 증가하여 전체 만화 구매자 중 3명 중 1명을 차지하고 있습니다. 또한, OTT 콘텐츠의 인기도 만화책 구매에 영향을 미치고 있으며, 스페셜 에디션이나 굿즈 제공 등의 이벤트도 만화책의 인기를 높이는 요인으로 작용하고 있습니다

answer = rag_chain.stream("만화책의 인기 비결은 뭔가요?")
stream_response(answer)
>>만화책의 인기는 여러 가지 요인에 의해 설명될 수 있습니다. 첫째, 1020세대가 실물 소장을 위해 종이 만화책을 구매하면서 흥행을 이끌고 있습니다. 둘째, 코로나19 팬데믹으로 인해 OTT 애니메이션의 인기가 급증하면서, 애니메이션의 원작을 소장하기 위한 독자들이 만화책을 구매하기 시작했습니다. 셋째, 초판 한정판이나 굿즈 한정판 등 스페셜 에디션을 출간하거나 굿즈를 제공하는 이벤트도 만화책의 인기를 높이는 요인 중 하나입니다. 이러한 다양한 요소들이 결합되어 만화책의 인기를 견인하고 있습니다

answer = rag_chain.stream("만화책 인기비결을 bullet point로 정리해주세요")
stream_response(answer)
>>>
- 1020세대의 실물 소장을 위한 종이 만화책 구매 증가 
- OTT 콘텐츠, 특히 애니메이션의 인기로 인해 원작 만화책 구매 증가 
- 초판 한정판, 굿즈 한정판 등 스페셜 에디션 출간 및 굿즈 제공 이벤트 
- 만화 일러스트를 활용한 책갈피, 포토 카드, 키링 등의 한정 출시로 인한 '오픈런' 현상

answer = rag_chain.stream("어떤 만화들이 인기가 많나요?")
stream_response(answer
>>>
주어진 정보에 따르면, 인기가 많은 만화로는 '여학교의 별', '사카모토 데이즈', '팬텀 버스터즈'가 있습니다. '여학교의 별'은 여고생들의 일상을 다룬 만화이며, '사카모토 데이즈'는 은퇴한 킬러의 액션 코미디 만화, '팬텀 버스터즈'는 악령을 퇴치하는 학원 코미디 오컬트 만화입니다
```

- 삭제
	vectorstore 객체의 delete_collection 메서드를 호출해서 컬렉션 삭제.
	데이터 정리 과정에서 사용. 특정 dataset이나 정볼르 저장하는 컬렉션 제거(저장공간확보 및 혼란 방지)

```python
## collecton 삭제
vectorstore.delete_collection()
```
### Resources
- [깃헙자료](https://github.com/teddylee777/langchain-kr/blob/main/12-RAG/01-RAG-Basic-Webloader.ipynb)
- 