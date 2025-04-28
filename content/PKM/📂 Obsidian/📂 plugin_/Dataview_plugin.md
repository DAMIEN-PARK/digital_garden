---
title: Dataview
description: 
date: 2025-04-22
tags:
  - plugin
draft: true
---


---
# 내가 사용하고 있는 functions

### 종류
- Table
    - 항목 사이에 ,를 넣어야 하고 마지막엔 쉼표가 없어야함
    - file명을 없애고 싶으면 ==Table without id== 입력
    - 열 제목을 변경하고 싶으면 as "변경하고싶은제목", 쓰면 됨.
- List
- Task
- Calendar
### 문법
1. 백틱 3개( ''') 와 `Dataview` 키워드로 데이터뷰를 시작합니다.
2. `TABLE` : 데이터뷰를 어떤 형태로 보일 것인지 선언합니다.
3. `FIELD` : 어떤 데이터를 표의 열(column)에 나타낼지 선언합니다.
4. `metadata as 표시명` 형태로 적습니다. `as 표시명`은 생략해도 무방합니다.
5. 여러 개 필요하면 콤마로 나누어 목록 형태로 적습니다.
6. `FROM` : 어디에서 가져올 지, 폴더명이나 태그명을 적습니다.
7. `WHERE` : 제한 조건을 적습니다.
8. `SORT` : 오름차순, 내림차순 규칙을 적습니다.
9. 백틱 3개( ''')로 `dataview` 블록을 종료합니다.

### 표현방식
- From
- Where :: 필터링
    - contains(author,"레이달리오") 레이달리오 라는 글자 불러옴
    - 읽은날짜 > date(2024-03-01) :: 3월부터 읽은 책들
- Sort
    - sort total_page desc :: 내림차순 asc는 오름차순
-  Limit
    - Limit 5 :: 보여지는 갯수
- Group by
    - Group by dateformat(finish_read_date,"YYYY") ::년도 별로
- Flatten
   - 그룹은 묶어주고 플래튼은 나누는것
   - Flatten tags :: 태그별로
- List
    - 리스트는 MOC에서 잘 활용하면 좋다.
    - tags,
    - ==메타데이터== ::
        stars::★★★★★
        즉,중간에 넣는경우 따로 벌러 올수 있음.
dday
=dateformat(this.file.cday,"yyyy-MM-DD")
=date(today)-date("2024-06-30")


`=dateformat(this.file.cday,"yyyy-MM-DD")`
` =date(today) - date("2024-06-30")`

### 예시

'''dataview
TABLE
    column1 as "열1",
    column2 as "열2",
    column3 as "열3"
FROM "POSTING/OBSIDIAN" and # 포스팅
WHERE file.cday > date(2022-09-01)
SORT file.name ASC
'''

![[데이터뷰예1.png]]

- AREA에 언급된 내용들 raw data에서 호출

    '''dataview
    table
    From "300.Resources/350.Databases"
    Where Area = `[[211.Admin]]`
    limit 20
    '''
    여기서 주의 할 점. Property Type을 list 형식이 아니라 Text 형식으로 해야만 리스트나 테이블을 불러 올 수 있다.

### 요약

````
```dataview
TABLE|LIST|TASK <field> [AS "Column Name"], <field>, ..., <field> 
FROM <source> (like #tag or "folder")
WHERE <expression> (like 'field = value')
SORT <expression> [ASC/DESC] (like 'field ASC') 
```
Copy
````

 SQL문. 키워드인 **TABLE / LIST / TASK, FROM, WHERE, SORT** 만 사용하시면 됩니다. 각각은 다음과 같은 의미를 지니고 있습니다. 각 키워드 뒤에 오는 field, source, expression만 작성해서 우리가 원하는 정보만 가져올 수 있도록 하는 것입니다.

- TABLE/LIST/TASK :  어떤 타입으로 표현할 것인가
- Field : 무엇을 가져올 것인가
- FROM : 어디서 가져올 것인가
- WHERE : 어떤 조건을 만족시키는 것만 가져올 것인가
- SORT :어떤 순으로 가져올 것인가

##### 자체내장 필드(Implicit fields) 목록

-   file.name:  파일명  
-   file.folder: 해당 파일이 속한 폴더명  
-   file.path: 해당 파일이 속한 전체 경로  
-   file.link: 해당 파일의 링크  
-   file.size: 해당 파일의 크기  
-   file.ctime: 해당 파일이 만들어진 시간(시간 + 날짜)  
-   file.cday: 해당 파일이 만들어진 날짜  
-   file.mtime: 해당 파일이 수정된 시간(시간 + 날짜)  
-   file.mday: 해당 파일이 수정된 날짜  
-   file.tags: 해당 파일에 존재하는 모든 태그에 대한 배열   
-   file.inlinks: 해당 파일을 참조하는 다른 노트들 목록  
-   file.outlinks: 해당 파일이 참조하는 다른 노트들 목록  
-   file.aliases: 해당 노트의 alias  
-   file.tasks: 해당 파일에 존재하는 모든 할일목록(체크리스트)


# 참고 웹사이트
출처 : https://olait.tistory.com/28
앞서 Dataview를 소개하는 곳에서 쿼리문 예시를 보여드려서 이해하실 수도 있겠지만, 조금 더 자세하게 Dataview를 사용하는 방법에 대해서 알아보도록 하겠습니다.

#### **쿼리문의 구성**

````
```dataview
TABLE|LIST|TASK <field> [AS "Column Name"], <field>, ..., <field>
FROM <source> (like #tag or "folder")
WHERE <expression> (like 'field = value')
SORT <expression> [ASC/DESC] (like 'field ASC') 
```
Copy
````

1. 어떤 타입으로 무엇을?
2. 어디서?
3. 어떤 조건을?
4. 어떤 순으로?(옵션)

#### **3가지 표현 방식**

쿼리문 구성 중 **어떤 타입으로?** 에 해당하는 3가지 표현방식입니다. Dataview 쿼리문의 첫번째 줄에는 반드시 3가지 타입 중 한개를 명시해야합니다.

1. TABLE
2. LIST
3. TASK

**TABLE 방식**

습관트래커에서도 보여드렸던 방식으로 표 형식입니다. 
아래에서 다룰 Annotation에 따라서 어떤 컬럼을 보여줄지 Field를 선택합니다.

![](https://blog.kakaocdn.net/dn/bumQPT/btrpBDe8tXH/3qXBvziW3OEuWjhnY9kHmk/img.png)

````
```dataview
TABLE time-played, length, rating
FROM "games"
SORT rating desc
```
````

**LIST 형식**
리스트 형식은 어디에서?(`FROM`) 에 해당하는 보관함 내의 모든 노트를 조회해서 가져옵니다. 아래 쿼리문은 `#game/moba` 또는 `#game/crpg`라는 태그를 가지고 있는 모든 노트를 리스트 형식으로 가져옵니다.

````
```dataview
list from #game/moba or #game/crpg
```
````

![](https://olait.tistory.com/Pasted%20image%2020211129200230.png)

**TASK 형식**
Task 형식은 어디에서(`FROM`) 에 해당하는 노트 내에 존재하는 모든 체크박스들을 조회해서 가져옵니다. 아래 쿼리문은 즉 `#projects/active` 라고 되어 있는 노트 내의 모든 체크박스를 가져오는 것입니다.

````
```dataview
task from #projects/active
```
Copy
````

Dataview 플러그인은 DQL 이라는 dataview query language라는 쿼리 언어(그렇게 특별하게 다르지는 않습니다.)를 통해서 보관함내에 있는 노트에 접근을 해서 데이터를 가져오는 플러그인입니다. 따라서 **Dataview** 플러그인을 잘 사용하게 된다면 다른 툴을 사용하지 않고도 보관함 내의 우리가 작성한 정보를 잘 정리해줄 수 있는 것입니다.

### **데이터 어노테이션(Data Annotation)**
데이터 어노테이션(Data Annotation)이란 **어떤 데이터를 Dataview에서 가져오게 할 지 표시를 해두는 방법**을 말합니다. 크게 2가지 레벨인 페이지 레벨, 태스크 레벨 존재합니다. 하지만 더 자주 사용되고 커스텀 할 여지가 많은 것은 페이지 레벨입니다. 
#### **페이지 레벨**
데이터뷰(Dataview)는 마크다운 페이지 단위로 수집하는 것이 원칙입니다. 따라서 페이지 내부의 어떤 정보들을 가져올 것인지를 어노테이션(Annotation), 즉 사용자가 따로 표시한 것을 조회해오는 것입니다. 따로 Annotation는 방법 역시 3가지 방식이 있씁니다

##### **1. 프론트매터(Frontmatter)**
각 노트의 프론트매터에 있는 필드, 키값은 데이터뷰에서 가져올 수 있습니다. 

```
---
created: 2021-11-12
wakeup: 07:00
sleep: 23:30
workout: ✅
gratitude: ✅
---

# 2021-11-12 Daily Notes
```

위에는 제가 일간 노트로 사용하고 있는 프론트매터의 예시입니다. 저는 일간노트에 습관을 프론트매터에 기록을 하고 있습니다. 이렇게 기록한 경우에 데이터뷰는 프론트매터에 있는 정보들을 긁어올 수 있게 됩니다. 예를 들어 wakeup, sleep을 가져와서 매일 매일 기상,취침 시간을 정리한 표를 볼 수 있는 것 입니다. 아래와 데이터뷰 쿼리문을 만들어섯 다른 노트에 삽입하게 되면 프론트매터의 값을 예쁘게 표로 보여주게 됩니다.

````
```dataview
TABLE wakeup as 기상시간, sleep as 취침시간, workout as 운동, gratitude as 감사일기
FROM 2021-11-12
```
````

##### 2. 인라인필드(Inline Field) ::
프론트매터가 아니라 글을 쓰는 중간에 어떠한 정보를 데이터뷰에서도 볼 수 있도록 하고 싶다면 "**::**" 콜론 2개를 이용하면 됩니다. 

```
::
```

노트의 중간에 **drama:: 오징어게임** 이렇게 적으면 **drama**에 대한 정보를 데이터뷰에서 볼 수 있는 것입니다. 이는 프론트매터에 `drama: 오징어게임` 으로 적는 것과 같은 것입니다. 좀 더 자연스럽게 적기 위한 것이고 문장에 여러 개의 인라인필드를 사용하고 싶다면 대괄호를 이용하면 됩니다.  

```
[drama:: 오징어게임] 너무 재미있었다. [drama:: D.P]도 꿀잼이었다.
```

````
```dataview
TABLE drama as 드라마
FROM "/"
WHERE file.name = "드라마"
```
````

![](https://blog.kakaocdn.net/dn/evE1t4/btrpJQNzq4c/RIxsKNDrefEhik09j6kBGk/img.png)

**3. 자체내장(Implicit)**

자체내장(implicit)는 옵시디언 노트 파일 자체가 가지고 있는 메타 정보를 보여주는 것입니다. 따라서 이 안에 있는 정보들은 사용자가 만들지 않아도 데이터뷰가 조회할 수 있습니다. 보통은 이 자체내장 필드 자체를 조회하기 일반적인 데이터뷰 사용에서 WHERE 조건절에 많이 사용하게 됩니다. 위의 예시에서도 **file.name = 드라마**를 사용한 것처럼 말이죠.

**자체내장 필드(Implicit fields) 목록**

-   file.name:  파일명  
-   file.folder: 해당 파일이 속한 폴더명  
-   file.path: 해당 파일이 속한 전체 경로  
-   file.link: 해당 파일의 링크  
-   file.size: 해당 파일의 크기  
-   file.ctime: 해당 파일이 만들어진 시간(시간 + 날짜)  
-   file.cday: 해당 파일이 만들어진 날짜  
-   file.mtime: 해당 파일이 수정된 시간(시간 + 날짜)  
-   file.mday: 해당 파일이 수정된 날짜  
-   file.tags: 해당 파일에 존재하는 모든 태그에 대한 배열   
-   file.inlinks: 해당 파일을 참조하는 다른 노트들 목록  
-   file.outlinks: 해당 파일이 참조하는 다른 노트들 목록  
-   file.aliases: 해당 노트의 alias  
-   file.tasks: 해당 파일에 존재하는 모든 할일목록(체크리스트)

다음은 이해를 돕기 위해서 자체내장 필드 값은 어떻게 나오는 지 캡쳐해보았습니다. 아래 내용은 다음 시리즈에서 포스팅할 내용인 인라인 쿼리입니다. 지금은 '위에 자체내장 필드값이 이렇게 나오는 구나' 정도로만 이해해주세요.

![](https://blog.kakaocdn.net/dn/bE6t4v/btrpJQz23s5/Y3LfqZ7VN8kslSNOwwwk61/img.png)

Inline Query를 바로 사용한 경우

#### **태스크 레벨**

데이터뷰는 태스크에 대해서도 굉장히 힘을 많이 주었습니다. 따라서 노트가 아닌 보관함 내에 있는 모든 태스크를 조회할 수 있게 되어 있습니다. 이 때 좀 더 다양한 옵션을 주어서 원하는 할 일 목록만 가져올 수 있게 됩니다. 또한 위에서 노트에 대해서 내장된 필드를 가지고 있는 것 처럼 태스크에 대해서도 여러가지 내장된 필드를 가지고 있습니다. 

즉, 태스크 이름, 태스크가 포함된 노트의 위치 등등이 있으며 사용자가 태스크 생성일, 마감일, 완료일 같은 것을 추가로 인라인 필드(Inline Fields) 어노테이션 방식으로 넣어주면 더 많은 정보를 추후에 조회할 때 조건문으로 넣어서 가져올 수 있게 됩니다. 

````
```
- [ ] 우유 사오기
- [ ] 블로그 포스팅하기 [due::2022-01-06, completion::2022-01-05]
<!--ID: 1714547292729-->

- [ ] 아침 운동하기 [created::2022-01-05]
<!--ID: 1714547292733-->

- [ ] 아침 운동하기 🗓️2022-01-05
- [ ] ️점심 운동하기  ✅2022-01-05
- [ ] 저녁 운동하기 ➕2022-01-05
```
````

### **Dataview 쿼리문**

앞선 시리즈를 통해서 데이터뷰에서 어느정도 아셨을 거라고 가정하고 데이터뷰를 이용해서 원하는 정보만 쏙쏙 모아서 볼 수 있도록 쿼리문을 작성해봅시다! 일반적인 쿼리문 형태는 다음 코드블록과 같습니다.

````
```dataview
TABLE|LIST|TASK <field> [AS "Column Name"], <field>, ..., <field> 
FROM <source> (like #tag or "folder")
WHERE <expression> (like 'field = value')
SORT <expression> [ASC/DESC] (like 'field ASC') 
```
Copy
````

데이터뷰에서 각 노트에 Annotation 된 정보를 가져오는 쿼리 언어입니다. 거창하지만 그렇게 거창하지 않습니다. SQL문을 작성해보신 분이라면 아주 쉽고 빠르게 이해하실 수 있습니다. 키워드인 **TABLE / LIST / TASK, FROM, WHERE, SORT** 만 사용하시면 됩니다. 각각은 다음과 같은 의미를 지니고 있습니다. 각 키워드 뒤에 오는 field, source, expression만 작성해서 우리가 원하는 정보만 가져올 수 있도록 하는 것입니다.

- 어떤 타입으로 표현할 것인가 (TABLE/LIST/TASK)
- 무엇을 가져올 것인가(Field)
- 어디서 가져올 것인가(FROM)
- 어떤 조건을 만족시키는 것만 가져올 것인가(WHERE)
- 어떤 순으로 가져올 것인가(SORT)

#### **어떻게 표현할 것인가(TABLE,LIST/TASK)**

가져온 데이터를 어떻게 표현할 지 선택합니다. 표와 리스트 그리고 태스크 방식이 있습니다. 이는 시리즈 - 1 편에서 알아보았기 때문에 넘어가도록 하겠습니다.

#### **무엇을 가져올 것인가(Field)**

TABLE reading AS "독서"  
Field는 키워드는 아니고 **TABLE** 형식으로 표현할 때 사용됩니다. 표의 열에 해당하는 것을 정하는 것입니다. 우리는 노트의 프론트매터(frontmatter)방식, 인라인 필드(Inline Fields) 그리고 내재된(Implicit Fields)를 선택할 수 있습니다. 예를 들어

````
```dataview
TABLE 
  reading as "독서"
  workout as "운동"
  ...(생략)
```
Copy
````

보관함의 어디서 가져올 것인가(FROM)에 만족하는 노트들에서 reading, workout필드를 찾아낼 것입니다. 두 가지 필드가 프론트매터, 인라인 필드에 존재한다면 데이터뷰는 그 정보를 표시할 것입니다. 만약에 특정 노트에만 존재한다면 해당 필드가 없는 노트들은 - 로 표시하게 됩니다. 아래 그림과 같이

![](https://blog.kakaocdn.net/dn/b6LWlm/btrq6uByRRO/ddaKKIPkDPpILo6N1mDMGk/img.png)

필드가 없으면 - 로 표시됩니다.

#### **어디서 가져올 것인가(FROM)**

데이터뷰는 자체적으로 보관함 내에 노트들, 노트 안에 작성된 할 일 목록, 태그 등을 빠르게 조회할 수 있도록 인덱싱이 되어있습니다. 즉 아래의 4개의 타입을 쿼리문 중 **FROM** 절 뒤에 작성을 합니다. 폴더 및 파일 경로는 ""로 감싸주세요

1. 태그 (예. FROM "#Planner")
2. 폴더 경로 (예. FROM "/Planner" - Planner 폴더 아래에 있는 모든 노트를 조회함)
3. 파일 경로 (예. FROM "/Planner/2022/01 Daily/2022-01-10" - 정확히 2022-01-10 노트 안의 내용에서만 조회)
4. 인, 아웃 링크
    1. 인링크 : 특정 노트를 참조한 노트들을 조회함 (예. FROM [Daily](file:///F:/Obsidian/ConnectingDots/Inbox/Daily.html))
    2. 아웃링크 : 특정 노트에서 참조한 노트들을 조회함 (예. FROM outgoing([Daily](file:///F:/Obsidian/ConnectingDots/Inbox/Daily.html)))

**예시**

````
```dataview
LIST
FROM "/Planner"
```
Copy
````

#### **어떤 조건을 만족시키는 것을 가져올 것인가(WHERE)**

예를 들어, 2022-01-01 이후에 만들어진 노트를 가져오고 싶다면 어떻게 해야할까요? 또는 오늘부터 2주 전에 수정된 노트에 대해서 가져오고 싶다면 어떻게 해야할까요? 바로 WHERE 키워드는 어떤 특정한 조건을 만족시키는 노트, 태스크들만 데이터뷰에서 조회할 수 있도록 하는 쿼리문입니다. 특히 조건에 해당하는 부분을 잘 다루면 다룰수록 우리가 원하는 정보만 더 잘 빼올 수 있습니다. 자바스크립트 기반이기 때문에 프로그래밍적인 요소가 강하지만 차근 차근 따라오시면 좋겠습니다.

**리터럴(Literal)**

자바스크립트에서는 리터럴이라는 개념이 있습니다. 리터럴이란 데이터 그 자체를 뜻하고 **변수에 넣지 않는 변하지 않는 데이터**라는 뜻을 가집니다. 이해하기 쉽도록 데이터뷰에서 사용할 수 있는 **재료**라고 생각하면 됩니다. 아래 표에서 보는 것과 같이 데이터뷰에서 사용할 수 있는 데이터 종류는 숫자, 불리언, 텍스트, 날짜, 기간, 링크, 리스트, 오브젝트 8가지로 되어있습니다. 오브젝트로 인해서 더 많은 요소들을 표현할 수 있지만 프로그래밍에 익숙하지 않다면 이런 게 있구나 정도로 넘어가시면 좋겠습니다. (_우리는 프로그래밍 언어를 배우는 게 아니라 옵시디언을 알아가는 것이니까요_)

|   |   |
|---|---|
|**리터럴 종류**|**예시**|
|숫자|1|
|불리언|true/fase|
|텍스트|"text"|
|날짜|date(2022-01-18)|
|기간|dur(1 day)|
|링크|[[Link]]|
|리스트, 배열|[1,2,3]|
|오브젝트|{a: 1, b:2}|

리터럴 종류 중에 날짜와 기간은 자바스크립트의 함수이기 때문에 안의 내용에 따라서 좀 더 풍부하게 표현할 수 있습니다. 자세한 내용은 [Literals - Dataview (blacksmithgu.github.io)](https://blacksmithgu.github.io/obsidian-dataview/query/literals/) 에서 참조할 수 있습니다.

![](https://olait.tistory.com/Pasted%20image%2020220118231009.png)

![|500](https://blog.kakaocdn.net/dn/cBqNDE/btrq6Pk9U4W/fZjkswJaVsmPBXGwtyyLik/img.png)![|500](https://blog.kakaocdn.net/dn/HooLY/btrq7aWVVkL/omZ4kCd7QcknI9tARsi4v1/img.png)

date와 dur 함수 사용방법

**조건문 표현**
위에서 WHERE 키워드 뒤에 조건문에 쓸 수 있는 재료를 알아보았습니다. 그렇다면 재료들을 가지고 어떻게 조건문을 만들 수 있는 지 알아보겠습니다. 조건문을 표현할 때 재료들(리터럴)을 비교해서 다양한 조건을 만들어낼 수 있습니다. 결국 조건문의 결과는 조건을 모두 만족시킨 값들이라고 생각할 수 있습니다. 비교란 것은 부등호로 표현을 할 수 있습니다.
- a > b
- a < b
- a = b
- a != b
- a <= b
- a >= b

**예시**

```
file.ctime > date(2022-01-18) - 파일이 만들어진 시간이 2022년 1월 18일보다 큰 파일을 가져와라.
file.path = "/Planner" - 파일 경로에 Planner가 있는 파일을 가져와라
```

#### **어떤순으로 가져올 것인가(SORT)**

마지막으로 SORT 키워드는 필드를 선택해서 오름차순 정렬(ASC) 또는 내림차순 정렬(DESC)를 합니다. 날짜 순으로 할 때에도 가장 최신의 데이터를 상위로 올리기 위해서는 내림차순 정렬로 하면 됩니다.

**예시**

````
```dataview
...(생략)
SORT start_read_date DESC 
```
````

코드블럭을 넣고 dataview를 쓰면 되고 아니면 dataviewjs



# 기본제공 필드

## Calling functions on lists of values

Most functions can be applied either to single values (like `number`, `string`, `date`, etc.) OR to lists of those values. If a function is applied to a list, it also returns a list after the function is applied to each element in the list. For example:

`lower("YES") = "yes" lower(["YES", "NO"]) = ["yes", "no"]  replace("yes", "e", "a") = "yas" replace(["yes", "ree"], "e", "a") = ["yas", "raa"]`

This so-called "function vectorization" will not be mentioned explicitly on the following definitions and is possible for a wide range of these functionalities implicitly.

## Constructors

Constructors which create values.

### `object(key1, value1, ...)`

Creates a new object with the given keys and values. Keys and values should alternate in the call, and keys should always be strings/text.

`object() => empty object object("a", 6) => object which maps "a" to 6 object("a", 4, "c", "yes") => object which maps a to 4, and c to "yes"`

### `list(value1, value2, ...)`

Creates a new list with the given values in it.

`list() => empty list list(1, 2, 3) => list with 1, 2, and 3 list("a", "b", "c") => list with "a", "b", and "c"`

### `date(any)`

Parses a date from the provided string, date, or link object, if possible, returning null otherwise.

`date("2020-04-18") = <date object representing April 18th, 2020> date([[2021-04-16]]) = <date object for the given page, referring to file.day>`

### `date(text, format)`

Parses a date from text to luxon `DateTime` with the specified format. Note localised formats might not work. Uses [Luxon tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).

`date("12/31/2022", "MM/dd/yyyy") => DateTime for Decemeber 31th, 2022 date("210313", "yyMMdd") => DateTime for March 13th, 2021 date("946778645000", "x") => DateTime for "2000-01-02T03:04:05"`

### `dur(any)`

Parses a duration from the provided string or duration, returning null on failure.

`dur(8 minutes) = <8 minutes> dur("8 minutes, 4 seconds") = <8 minutes, 4 seconds> dur(dur(8 minutes)) = dur(8 minutes) = <8 minutes>`

### `number(string)`

Pulls the first number out of the given string, returning it if possible. Returns null if there are no numbers in the string.

`number("18 years") = 18 number(34) = 34 number("hmm") = null`

### `string(any)`

Converts any value into a "reasonable" string representation. This sometimes produces less pretty results than just directly using the value in a query - it is mostly useful for coercing dates, durations, numbers, and so on into strings for manipulation.

`string(18) = "18" string(dur(8 hours)) = "8 hours" string(date(2021-08-15)) = "August 15th, 2021"`

### `link(path, [display])`

Construct a link object from the given file path or name. If provided with two arguments, the second argument is the display name for the link.

`link("Hello") => link to page named 'Hello' link("Hello", "Goodbye") => link to page named 'Hello', displays as 'Goodbye'`

### `embed(link, [embed?])`

Convert a link object into an embedded link; support for embedded links is somewhat spotty in Dataview views, though embedding of images should work.

`embed(link("Hello.png")) => embedded link to the "Hello.png" image, which will render as an actual image.`

### `elink(url, [display])`

Construct a link to an external url (like `www.google.com`). If provided with two arguments, the second argument is the display name for the link.

`elink("www.google.com") => link element to google.com elink("www.google.com", "Google") => link element to google.com, displays as "Google"`

### `typeof(any)`

Get the type of any object for inspection. Can be used in conjunction with other operators to change behavior based on type.

`typeof(8) => "number" typeof("text") => "string" typeof([1, 2, 3]) => "array" typeof({ a: 1, b: 2 }) => "object" typeof(date(2020-01-01)) => "date" typeof(dur(8 minutes)) => "duration"`

---

## Numeric Operations

### `round(number, [digits])`

Round a number to a given number of digits. If the second argument is not specified, rounds to the nearest whole number; otherwise, rounds to the given number of digits.

`round(16.555555) = 7 round(16.555555, 2) = 16.56`

### `trunc(number)`

Truncates ("cuts off") the decimal point from a number.

`trunc(12.937) = 12 trunc(-93.33333) = -93 trunc(-0.837764) = 0`

### `floor(number)`

Always rounds down and returns the largest integer less than or equal to a given number. This means that negative numbers become more negative.

`floor(12.937) = 12 floor(-93.33333) = -94 floor(-0.837764) = -1`

### `ceil(number)`

Always rounds up and returns the smallest integer greater than or equal to a given number. This means negative numbers become less negative.

`ceil(12.937) = 13 ceil(-93.33333) = -93 ceil(-0.837764) = 0`

### `min(a, b, ..)`

Compute the minimum value of a list of arguments, or an array.

`min(1, 2, 3) = 1 min([1, 2, 3]) = 1  min("a", "ab", "abc") = "a"`

### `max(a, b, ...)`

Compute the maximum value of a list of arguments, or an array.

`max(1, 2, 3) = 3 max([1, 2, 3]) = 3  max("a", "ab", "abc") = "abc"`

### `sum(array)`

Sums all numeric values in the array. If you have null values in your average, you can eliminate them via the `nonnull` function.

`sum([1, 2, 3]) = 6 sum([]) = null  sum(nonnull([null, 1, 8])) = 9`

### `product(array)`

Calculates the product of a list of numbers. If you have null values in your average, you can eliminate them via the `nonnull` function.

`product([1,2,3]) = 6 product([]) = null  product(nonnull([null, 1, 2, 4])) = 8`

### `average(array)`

Computes the numeric average of numeric values. If you have null values in your average, you can eliminate them via the `nonnull` function.

`average([1, 2, 3]) = 2 average([]) = null  average(nonnull([null, 1, 2])) = 1.5`

### `minby(array, function)`

Compute the minimum value of an array, using the provided function.

`minby([1, 2, 3], (k) => k) = 1 minby([1, 2, 3], (k) => 0 - k) => 3  minby(this.file.tasks, (k) => k.due) => (earliest due)`

### `maxby(array, function)`

Compute the maximum value of an array, using the provided function.

`maxby([1, 2, 3], (k) => k) = 3 maxby([1, 2, 3], (k) => 0 - k) => 1  maxby(this.file.tasks, (k) => k.due) => (latest due)`

--

## Objects, Arrays, and String Operations

Operations that manipulate values inside of container objects.

### `contains()` and friends

For a quick summary, here are some examples:

`contains("Hello", "Lo") = false contains("Hello", "lo") = true  icontains("Hello", "Lo") = true icontains("Hello", "lo") = true  econtains("Hello", "Lo") = false econtains("Hello", "lo") = true econtains(["this","is","example"], "ex") = false econtains(["this","is","example"], "is") = true`

#### `contains(object|list|string, value)`

Checks if the given container type has the given value in it. This function behave slightly differently based on whether the first argument is an object, a list, or a string. This function is case-sensitive.

- For objects, checks if the object has a key with the given name. For example,
    
    `contains(file, "ctime") = true contains(file, "day") = true (if file has a date in its title, false otherwise)`
    
- For lists, checks if any of the array elements equals the given value. For example,
    
    `contains(list(1, 2, 3), 3) = true contains(list(), 1) = false`
    
- For strings, checks if the given value is a substring (i.e., inside) the string.
    
    `contains("hello", "lo") = true contains("yes", "no") = false`
    

#### `icontains(object|list|string, value)`

Case insensitive version of `contains()`.

#### `econtains(object|list|string, value)`

"Exact contains" checks if the exact match is found in the string/list. This function is case sensitive.

- For strings, it behaves exactly like [`contains()`](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/#containsobjectliststring-value).
    
    `econtains("Hello", "Lo") = false econtains("Hello", "lo") = true`
    
- For lists, it checks if the exact word is in the list.
    
    `econtains(["These", "are", "words"], "word") = false econtains(["These", "are", "words"], "words") = true`
    
- For objects, it checks if the exact key name is present in the object. It does **not** do recursive checks.
    
    `econtains({key:"value", pairs:"here"}, "here") = false econtains({key:"value", pairs:"here"}, "key") = true econtains({key:"value", recur:{recurkey: "val"}}, "value") = false econtains({key:"value", recur:{recurkey: "val"}}, "Recur") = false econtains({key:"value", recur:{recurkey: "val"}}, "recurkey") = false`
    

### `containsword(list|string, value)`

Checks if `value` has an exact word match in `string` or `list`. This is case insensitive. The outputs are different for different types of input, see examples.

- For strings, it checks if the word is present in the given string.
    
    `containsword("word", "word") = true containsword("word", "Word") = true containsword("words", "Word") = false containsword("Hello there!, "hello") = true containsword("Hello there!, "HeLLo") = true containsword("Hello there chaps!, "chap") = false containsword("Hello there chaps!, "chaps") = true`
    
- For lists, it returns a list of booleans indicating if the word's exact case insensitive match was found.
    
    `containsword(["I have no words.", "words"], "Word") = [false, false] containsword(["word", "Words"], "Word") = [true, false] containsword(["Word", "Words in word"], "WORD") = [true, true]`
    

### `extract(object, key1, key2, ...)`

Pulls multiple fields out of an object, creating a new object with just those fields.

`extract(file, "ctime", "mtime") = object("ctime", file.ctime, "mtime", file.mtime) extract(object("test", 1)) = object()`

### `sort(list)`

Sorts a list, returning a new list in sorted order.

`sort(list(3, 2, 1)) = list(1, 2, 3) sort(list("a", "b", "aa")) = list("a", "aa", "b")`

### `reverse(list)`

Reverses a list, returning a new list in reversed order.

`reverse(list(1, 2, 3)) = list(3, 2, 1) reverse(list("a", "b", "c")) = list("c", "b", "a")`

### `length(object|array)`

Returns the number of fields in an object, or the number of entries in an array.

`length([]) = 0 length([1, 2, 3]) = 3 length(object("hello", 1, "goodbye", 2)) = 2`

### `nonnull(array)`

Return a new array with all null values removed.

`nonnull([]) = [] nonnull([null, false]) = [false] nonnull([1, 2, 3]) = [1, 2, 3]`

### `all(array)`

Returns `true` only if ALL values in the array are truthy. You can also pass multiple arguments to this function, in which case it returns `true` only if all arguments are truthy.

`all([1, 2, 3]) = true all([true, false]) = false all(true, false) = false all(true, true, true) = true`

You can pass a function as second argument to return only true if all elements in the array matches the predicate.

`all([1, 2, 3], (x) => x > 0) = true all([1, 2, 3], (x) => x > 1) = false all(["apple", "pie", 3], (x) => typeof(x) = "string") = false`

### `any(array)`

Returns `true` if ANY of the values in the array are truthy. You can also pass multiple arguments to this function, in which case it returns `true` if any of the arguments are truthy.

`any(list(1, 2, 3)) = true any(list(true, false)) = true any(list(false, false, false)) = false any(true, false) = true any(false, false) = false`

You can pass a function as second argument to return only true if any element in the array matches the predicate.

`any(list(1, 2, 3), (x) => x > 2) = true any(list(1, 2, 3), (x) => x = 0) = false`

### `none(array)`

Returns `true` if NONE of the values in the array are truthy.

`none([]) = true none([false, false]) = true none([false, true]) = false none([1, 2, 3]) = false`

You can pass a function as second argument to return only true if none of the elements in the array matches the predicate.

`none([1, 2, 3], (x) => x = 0) = true none([true, true], (x) => x = false) = true none(["Apple", "Pi", "Banana"], (x) => startswith(x, "A")) = false`

### `join(array, [delimiter])`

Joins elements in an array into a single string (i.e., rendering them all on the same line). If provided with a second argument, then each element will be separated by the given separator.

`join(list(1, 2, 3)) = "1, 2, 3" join(list(1, 2, 3), " ") = "1 2 3" join(6) = "6" join(list()) = ""`

### `filter(array, predicate)`

Filters elements in an array according to the predicate, returning a new list of the elements which matched.

`filter([1, 2, 3], (x) => x >= 2) = [2, 3] filter(["yes", "no", "yas"], (x) => startswith(x, "y")) = ["yes", "yas"]`

### `map(array, func)`

Applies the function to each element in the array, returning a list of the mapped results.

`map([1, 2, 3], (x) => x + 2) = [3, 4, 5] map(["yes", "no"], (x) => x + "?") = ["yes?", "no?"]`

### `flat(array, [depth])`

Concatenates sub-levels of the array to the desired depth. Default is 1 level, but it can concatenate multiple levels. E.g. Can be used to reduce array depth on `rows` lists after doing `GROUP BY`.

`flat(list(1, 2, 3, list(4, 5), 6)) => list(1, 2, 3, 4, 5, 6) flat(list(1, list(21, 22), list(list (311, 312, 313))), 4) => list(1, 21, 22, 311, 312, 313) flat(rows.file.outlinks)) => All the file outlinks at first level in output`

---

## String Operations

### `regextest(pattern, string)`

Checks if the given regex pattern can be found in the string (using the JavaScript regex engine).

`regextest("\w+", "hello") = true regextest(".", "a") = true regextest("yes|no", "maybe") = false regextest("what", "what's up dog?") = true`

### `regexmatch(pattern, string)`

Checks if the given regex pattern matches the _entire_ string, using the JavaScript regex engine. This differs from `regextest` in that regextest can match just parts of the text.

`regexmatch("\w+", "hello") = true regexmatch(".", "a") = true regexmatch("yes|no", "maybe") = false regexmatch("what", "what's up dog?") = false`

### `regexreplace(string, pattern, replacement)`

Replaces all instances where the _regex_ `pattern` matches in `string`, with `replacement`. This uses the JavaScript replace method under the hood, so you can use special characters like `$1` to refer to the first capture group, and so on.

`regexreplace("yes", "[ys]", "a") = "aea" regexreplace("Suite 1000", "\d+", "-") = "Suite -"`

### `replace(string, pattern, replacement)`

Replace all instances of `pattern` in `string` with `replacement`.

`replace("what", "wh", "h") = "hat" replace("The big dog chased the big cat.", "big", "small") = "The small dog chased the small cat." replace("test", "test", "no") = "no"`

### `lower(string)`

Convert a string to all lower case.

`lower("Test") = "test" lower("TEST") = "test"`

### `upper(string)`

Convert a string to all upper case.

`upper("Test") = "TEST" upper("test") = "TEST"`

### `split(string, delimiter, [limit])`

Split a string on the given delimiter string. If a third argument is provided, it limits the number of splits that occur. The delimiter string is interpreted as a regular expression. If there are capture groups in the delimiter, matches are spliced into the result array, and non-matching captures are empty strings.

`split("hello world", " ") = list("hello", "world") split("hello  world", "\s") = list("hello", "world") split("hello there world", " ", 2) = list("hello", "there") split("hello there world", "(t?here)") = list("hello ", "there", " world") split("hello there world", "( )(x)?") = list("hello", " ", "", "there", " ", "", "world")`

### `startswith(string, prefix)`

Checks if a string starts with the given prefix.

`startswith("yes", "ye") = true startswith("path/to/something", "path/") = true startswith("yes", "no") = false`

### `endswith(string, suffix)`

Checks if a string ends with the given suffix.

`endswith("yes", "es") = true endswith("path/to/something", "something") = true endswith("yes", "ye") = false`

### `padleft(string, length, [padding])`

Pads a string up to the desired length by adding padding on the left side. If you omit the padding character, spaces will be used by default.

`padleft("hello", 7) = "  hello" padleft("yes", 5, "!") = "!!yes"`

### `padright(string, length, [padding])`

Equivalent to `padleft`, but pads to the right instead.

`padright("hello", 7) = "hello  " padright("yes", 5, "!") = "yes!!"`

### `substring(string, start, [end])`

Take a slice of a string, starting at `start` and ending at `end` (or the end of the string if unspecified).

`substring("hello", 0, 2) = "he" substring("hello", 2, 4) = "ll" substring("hello", 2) = "llo" substring("hello", 0) = "hello"`

### `truncate(string, length, [suffix])`

Truncate a string to be at most the given length, including the `suffix` (which defaults to `...`). Generally useful to cut off long text in tables.

`truncate("Hello there!", 8) = "Hello..." truncate("Hello there!", 8, "/") = "Hello t/" truncate("Hello there!", 10) = "Hello t..." truncate("Hello there!", 10, "!") = "Hello the!" truncate("Hello there!", 20) = "Hello there!"`

## Utility Functions

### `default(field, value)`

If `field` is null, return `value`; otherwise return `field`. Useful for replacing null values with defaults. For example, to show projects which haven't been completed yet, use `"incomplete"` as their default value:

`default(dateCompleted, "incomplete")`

Default is vectorized in both arguments; if you need to use default explicitly on a list argument, use `ldefault`, which is the same as default but is not vectorized.

`default(list(1, 2, null), 3) = list(1, 2, 3) ldefault(list(1, 2, null), 3) = list(1, 2, null)`

### `choice(bool, left, right)`

A primitive if statement - if the first argument is truthy, returns left; otherwise, returns right.

`choice(true, "yes", "no") = "yes" choice(false, "yes", "no") = "no" choice(x > 4, y, z) = y if x > 4, else z`

### `striptime(date)`

Strip the time component of a date, leaving only the year, month, and day. Good for date comparisons if you don't care about the time.

`striptime(file.ctime) = file.cday striptime(file.mtime) = file.mday`

### `dateformat(date|datetime, string)`

Format a Dataview date using a formatting string. Uses [Luxon tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).

`dateformat(file.ctime,"yyyy-MM-dd") = "2022-01-05" dateformat(file.ctime,"HH:mm:ss") = "12:18:04" dateformat(date(now),"x") = "1407287224054" dateformat(file.mtime,"ffff") = "Wednesday, August 6, 2014, 1:07 PM Eastern Daylight Time"`

### `durationformat(duration, string)`

Format a Dataview duration using a formatting string. Anything inside single quotes will not be treated as a token and instead will be shown in the output as written. See examples.

You may use these tokens:

- `S` for milliseconds
- `s` for seconds
- `m` for minutes
- `h` for hours
- `d` for days
- `w` for weeks
- `M` for months
- `y` for years

`durationformat(dur("3 days 7 hours 43 seconds"), "ddd'd' hh'h' ss's'") = "003d 07h 43s" durationformat(dur("365 days 5 hours 49 minutes"), "yyyy ddd hh mm ss") = "0001 000 05 49 00" durationformat(dur("2000 years"), "M months") = "24000 months" durationformat(dur("14d"), "s 'seconds'") = "1209600 seconds"`

### `localtime(date)`

Converts a date in a fixed timezone to a date in the current timezone.

### `meta(link)`

Get an object containing metadata of a link. When you access a property on a link what you get back is the property value from the linked file. The `meta` function makes it possible to access properties of the link itself.

There are several properties on the object returned by `meta`:

#### `meta(link).display`

Get the display text of a link, or null if the link does not have defined display text.

`meta([[2021-11-01|Displayed link text]]).display = "Displayed link text" meta([[2021-11-01]]).display = null`

#### `meta(link).embed`

True or false depending on whether the link is an embed. Those are links that begin with an exclamation mark, like `![[Some Link]]`.

#### `meta(link).path`

Get the path portion of a link.

`meta([[My Project]]).path = "My Project" meta([[My Project#Next Actions]]).path = "My Project" meta([[My Project#^9bcbe8]]).path = "My Project"`

#### `meta(link).subpath`

Get the subpath of a link. For links to a heading within a file the subpath will be the text of the heading. For links to a block the subpath will be the block ID. If neither of those cases applies then the subpath will be null.

`meta([[My Project#Next Actions]]).subpath = "Next Actions" meta([[My Project#^9bcbe8]]).subpath = "9bcbe8" meta([[My Project]]).subpath = null`

This can be used to select tasks under specific headings.

` ```dataview task where meta(section).subpath = "Next Actions" ``` `

#### `meta(link).type`

Has the value "file", "header", or "block" depending on whether the link links to an entire file, a heading within a file, or to a block within a file.

`meta([[My Project]]).type = "file" meta([[My Project#Next Actions]]).type = "header" meta([[My Project#^9bcbe8]]).type = "block"`

# DATAVIEW site
## Examples

Show all games in the game folder, sorted by rating, with some metadata:

````markdown
```dataview
table time-played, length, rating
from "games"
sort rating desc
```
````

![Game Example](https://raw.githubusercontent.com/blacksmithgu/obsidian-dataview/HEAD/docs/docs/assets/game.png)

---

List games which are MOBAs or CRPGs.

````markdown
```dataview
list from #game/moba or #game/crpg
```
````

![Game List](https://raw.githubusercontent.com/blacksmithgu/obsidian-dataview/HEAD/docs/docs/assets/game-list.png)

---

List all markdown [tasks](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/#tasks) in un-completed projects:

````markdown
```dataview
task from #projects/active
```
````

![Task List](https://raw.githubusercontent.com/blacksmithgu/obsidian-dataview/HEAD/docs/docs/assets/project-task.png)

---

Show all files in the `books` folder that you read in 2021, grouped by genre and sorted by rating:

````markdown
```dataviewjs
for (let group of dv.pages("#book").where(p => p["time-read"].year == 2021).groupBy(p => p.genre)) {
	dv.header(3, group.key);
	dv.table(["Name", "Time Read", "Rating"],
		group.rows
			.sort(k => k.rating, 'desc')
			.map(k => [k.file.link, k["time-read"], k.rating]))
}
```
````

![Books By Genre](https://raw.githubusercontent.com/blacksmithgu/obsidian-dataview/HEAD/docs/docs/assets/books-by-genre.png)

## Usage

For a full description of all features, instructions, and examples, see the [reference](https://blacksmithgu.github.io/obsidian-dataview/). For a more brief outline, let us examine the two major aspects of Dataview: _data_ and _querying_.

#### **Data**

Dataview generates _data_ from your vault by pulling  
information from **Markdown frontmatter** and **Inline fields**.

- Markdown frontmatter is arbitrary YAML enclosed by `---` at the top of a markdown document which can store metadata  
    about that document.
- Inline fields are a Dataview feature which allow you to write metadata directly inline in your markdown document via  
    `Key:: Value` syntax.

Examples of both are shown below:

```yaml
---
alias: "document"
last-reviewed: 2021-08-17
thoughts:
  rating: 8
  reviewable: false
---
```

```markdown
# Markdown Page

Basic Field:: Value
**Bold Field**:: Nice!
You can also write [field:: inline fields]; multiple [field2:: on the same line].
If you want to hide the (field3:: key), you can do that too.
```
#### **Querying**

Once you've annotated documents and the like with metadata, you can then query it using any of Dataview's four query  
modes:

1. **Dataview Query Language (DQL)**: A pipeline-based, vaguely SQL-looking expression language which can support basic  
    use cases. See the [documentation](https://blacksmithgu.github.io/obsidian-dataview/query/queries/) for details.
    
    ````markdown
    ```dataview
    TABLE file.name AS "File", rating AS "Rating" FROM #book
    ```
    ````
    
2. **Inline Expressions**: DQL expressions which you can embed directly inside markdown and which will be evaluated in  
    preview mode. See the [documentation](https://blacksmithgu.github.io/obsidian-dataview/reference/expressions/) for  
    allowable queries.
    
    ```markdown
    We are on page `= this.file.name`.
    ```
    
3. **DataviewJS**: A high-powered JavaScript API which gives full access to the Dataview index and some convenient  
    rendering utilities. Highly recommended if you know JavaScript, since this is far more powerful than the query  
    language. Check the [documentation](https://blacksmithgu.github.io/obsidian-dataview/api/intro/) for more details.
    
    ````markdown
    ```dataviewjs
    dv.taskList(dv.pages().file.tasks.where(t => !t.completed));
    ```
    ````
    
4. **Inline JS Expressions**: The JavaScript equivalent to inline expressions, which allow you to execute arbitrary JS  
    inline:
    
    ```markdown
    This page was last modified at `$= dv.current().file.mtime`.
    ```
    

#### JavaScript Queries: Security Note

JavaScript queries are very powerful, but they run at the same level of access as any other Obsidian plugin. This means  
they can potentially rewrite, create, or delete files, as well as make network calls. You should generally write  
JavaScript queries yourself or use scripts that you understand or that come from reputable sources. Regular Dataview  
queries are sandboxed and cannot make negative changes to your vault (in exchange for being much more limited).



#### Installing to Other Vaults

If you want to dogfood dataview in your real vault, you can build and install manually. Dataview is predominantly a  
read-only store, so this should be safe, but watch out if you are adjusting functionality that performs file edits!

```console
foo@bar:~/obsidian-dataview$ npm run build
foo@bar:~/obsidian-dataview$ ./scripts/install-built path/to/your/vault
```

#### Building Documentation

We use `MkDocs` for documentation (found in `docs/`). You'll need to have python and pip to run it locally:

```console
foo@bar:~/obsidian-dataview$ pip3 install mkdocs mkdocs-material mkdocs-redirects
foo@bar:~/obsidian-dataview$ cd docs
foo@bar:~/obsidian-dataview/docs$ mkdocs serve
```

This will start a local web server rendering the documentation in `docs/docs`, which will live-reload on change.  
Documentation changes are automatically pushed to `blacksmithgu.github.io/obsidian-dataview` once they are merged  
to the main branch.

#### Using Dataview Types In Your Own Plugin

Dataview publishes TypeScript typings for all of its APIs onto NPM (as `blacksmithgu/obsidian-dataview`). For  
instructions on how to set up development using Dataview, see [setup instructions](https://blacksmithgu.github.io/obsidian-dataview/plugin/develop-against-dataview/).

# Resources
##### youtube
[북트레싱](https://youtu.be/Iv7wCJArqPI?feature=shared)
[해외유튜버](https://youtu.be/JTObSymEvWA?feature=shared)