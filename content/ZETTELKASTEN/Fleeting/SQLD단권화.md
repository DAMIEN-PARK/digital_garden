---
tags:
  - SQL
---

[[SQL]]
[[Pasted image 20241104141912.png]]
## 1과목
### 1. 이해
- 모델링 특징 : 추상화 단순화 명확화 
- 모델링 관점 : 데이터 / 프로세스 / DATA - PROCESS 상관 관점
- 개념-논리-물리 3가지 단계
- 외부단계 스키마 -(논리적 독립성 ) - 개념 단계 스키마 - (물리적 독립성)- 내부 단계 스키마 
#### 1.1 엔터티
사각형. 1:다. 표기법 IE/Barker표기법
인터티 : TABLE
인스턴스 : ROW
속성 : COLUMN
	- 1개의 엔터티는 복수의 인스턴스 그리고 2개 이상의 속성 (하나의 테이블은 2개 이상 컬럼)
	- 한개의 속성은 1개의 값
	- 속성 분류
		기본속성
		설계속성
		파생속성
	도메인 : 속성의 범위
#### 관계
	- 종류 : 존재적 관계 / 행위적 관계
	- 관계 구성 : 
		관계명 
		차수(Cardinality)1:1(부서명) 1:다, 
		선택성(Optionality)
#### 식별자
	유일성 최소성 불변성 존재성(Null 존재x)
	관계간 엔터티 : 강한개체 약한개체
	기본키 : 식별관계와 비식별관계 
### 정규화
#### 1. 정규형
	최소화의 데이터
	1~5 까지 있지만 3정규화까지 
		1NF
		2NF : 완전함수 종속 PK가 완전히 결정
			강의-강의실(종속칼럼) 이걸 뺌
		3NF : A-> B, B-> C, A->C가 성립
	이상현상(삽입 갱신 삭제이상) 줄이기 위함
#### 반정규화 
- 관계와 조인
	조인 : 연결코드를 가지고 2개를 출력
	```SQL
	select A
	From
	WHere
	And
	```

#### 트랜잭션 
	필수적인 관계 형태
	1. 잔액 100만원 확인
	2. 100만원 이상이면  -100 update
	3. B 고객잔액이 +100 update


- Null 이해
	- 값이 정해지지 않음 0이나 빈문자열이 아님
	- Null 포함 연산은 Null 
- 본질식별자 vs 인조식별자
- 인조식별자 : 관리목적

## 2과목
### 기본

#### 1. SELECT
##### 1.1 SELECT
- table 명에 alias 설정했을 경우 테이블명 대신 as 써야함
```SQL
SELECT CITY.COL 
FROM CITY C
WHERE COL = 'A';
```
- 
- 쿼리 논리 순서 : FWG HSO : FROM-WHERE-GROUP BY-HAVING-SELECT-ORDERBY
- ALIAS (AS)는 지정해주지 않으면 칼럼은 다 대문자로 표기 됨됨
##### 1.2 산술연산자
- 가로 연산에서 NULL 값있으면 결과값은 NULL
- COL1/COL2 에서 20/0 이라면 ==에러가 발생한다== 0은 나눌수 없음
##### 1.3 합성연산자
#### 2. 함수
##### 2.1 문자함수
- CHAR
	- VARCHAR(5) 최대길이 5자. ABC=3BYTE
	- CHAR(5) 항상 5자 ABC = ABC__  자리공백을 저장해버림. 
- LOWER
- UPPER
- LTRIM : 왼쪽 공백제거 혹은 `SELECT LTRIM ('맨체스터시티','맨체스터') FROM CITY` 
	`시티` 로 출력
- RTRIM
- TRIM : 양쪽 모두 공백 제거 
- SUBSTR : 원하는 부분만 잘라서 반환 SUBSTR(변환값,시작,갯수)
```SQL
SELECT SUBSTR ('맨체스터시티', 1,4) FROM MANCITY
>>> 맨체스터
```

- LENTGH(문자열)
- REPLACE 
`SELECT REPLACE('맨시티감독','감독','선수') FROM MANCITY`
>>> 맨시티선수
- LPAD : 특정길이까지 특정 문자로 채움 
`SELECT LPAD('맨시티','6','T') FROM MANCITY`
	TTT맨시티

##### 2.2 숫자함수
- ABS(숫) : 절대값
- SIGN : 부호반환
- ROUND : 반올림
- TRUNC : 버림
- CEIL(수): 올리고 정수만 반환
- FLOOR : 버리고 정수만 반환
- MOD(A,B) : A 를 B로 나눈 나머지 값 -나누기 -는 = -음수 ==둘다음수는 음수==
##### 2.3 날짜 함수
- SYSDATE
- EXTRACT(특정단위 FROM SYSDATE)
- ADD_MONTHS 특정개월수 더한 날짜 반환

##### 2.4 변환함수
 - 암시적 형변환 : 내부적으로 알아서 
 - 명시적 형변환 : 변환함수 사용
	 - TO_NUMBER(''2024'') → 2024 : 숫자형으로 변환
	 - TO_CHAR(수 or 날짜) : 문자형으로 변환
	 - TO_DATE('20241109', YYYYMMDD) : 날짜형으로 변환
 
##### 2.5 NULL 함수
- NVL(A,B) : NULL 이면 B, NOT NULL 이면 A
- NULLIF(A,B) :  A=B : NULL, A≠B : A 반환 COL1 = 20 COL2 = 20 같으면 20이 아니라 NULL반환환
- ==COALESCE== (PHONE, EMAIL, FAX) NULL이 아닌 첫 번째 값을 반환하는 유용한 함수. 
	1. 함수는 왼쪽에서 오른쪽으로 인자를 순서대로 확인하며, NULL이 아닌 첫 번째 값을 반환
	2. 모든 인자가 NULL인 경우에는 NULL을 반환
- NVL2(A, B, C) : A≠NULL : B , A=NULL : C (없으면 리뷰없음 있으면 리뷰있음)

##### 2.6 CASE  ... END
- ~ 이면 이고, 와 같은 구문
```SQL
SELECT SUBWAY_LINE,
	CASE WHEN SUBWAYA_LINE = '1' THEN 'BLUE'
		WHEN SUBWAYA_LINE = '2' THEN 'GREEN'
		WHEN SUBWAYA_LINE = '3' THEN 'ORANGE'
		ELSE 'GRAY'
	END AS LINE_COLOUR
FROM SUBWAY_INFO;
```
-  CASE WHEN 절 내부에 직접 ALIAS를 사용할 수는 없음. 
	ALIAS를 지정하려면 CASE 문 전체 바깥에 AS 키워드를 사용해야 함.
- CASE 문은 ==END==로 끝나야 함.

- DECODE
```SQL
# 구문
	DECODE(평가칼럼, 비교값1, 결과값1, 비교값2, 결과값2, ..., [default])

SELECT employee_id,
DECODE(department_id, 
	   10, 'Accounting', 
	   20, 'Research', 
	   30, 'Sales', 
	   40, 'Operations', 
	   'Unknown Department') AS department_name 
   FROM employees;
```
CASE문에서 ELSE 값이 DEFAULT 값이 된다.
별도의 ELSE가 없으면  마지막이 NULL 값이 된다
DECODE도 짝수일때 마지막 값이 DEFAULT 인데 NULL 값이 자동으로 된다. 

#### 3. WHERE
##### 3.1 비교
`WHERE GOAL < 10`
##### 3.2. 부정비교
`WHERE INJURIED <> 'Y'` ▶부상이 아닌 선수 <>같지 않음. 
- NOT AND OR 순으로 처리
##### 3.3 SQL 
- BETWEEN A AND B : A ==이상== B ==이하==
- LIKE '%비교문자열' %는 어쩌구로 번역하면 됨.
	#% 는 말 그대로 %가 들어간 행을 찾을때
	EACAPE 기호는 아무거나 정해도 됨 ESCAPE = # 이런식으로 ESCAPE = @ 
- IN(LIST) : 리스트중 하나와 일치. `WHERE POSTION IN ('ST','LW','RW')`
- IS NULL : COL1 이 NULL인 데이터 출력할 때 사용
##### 3.4 부정 SQL

##### 3.5 논리
- AND : 모두 만족
- OR : 하나 이상 조건 만족
- NOT : TRUE면 FALSE, FALSE면 TRUE
#### 4. GROUP BY, HAVING
##### 4.1 GROUP BY

##### 4.2 집계함수
- 집계함수( COUNT)는 NULL을 제외 시키고 계산.
- NULL은 텍스트 문자라서 카운트1
- NULL 과의 연산은 False 조건값으 늘 거짓이 된다. 아무것도 출력 안됨.
- DISTINCT는 SQL에서 ==중복된 값을 제거하는 데 사용되는 키워드==
	1. 중복 제거: DISTINCT는 결과 집합에서 중복된 행을 제거하여 고유한 값만 반환
	2. 단일 또는 다중 열 사용: 하나의 열 또는 여러 열에 대해 적용
	3. SELECT 문과 함께 사용: DISTINCT는 일반적으로 SELECT 문 바로 뒤에 위치
```sql
SELECT DISTINCT column1, column2, ... FROM table_name;`
이 구문은 지정된 열(들)에 대해 고유한 값 조합만을 반환
```

##### 4.3 HAVING
- 주로 ==GROUP BY== 뒤에 오면서 데이터 조건을 부여함. 
- TABLE 전체가 한개의 그룹이 되는 경우 HAVING 으로만 사용 가능
#### 5. ORDER BY
- ORDER BY는 SELECT절에서 ==제일 마지막에== 수행
- ASC 오름차순 1-2-3/ DESC 내림차순 4-3-2-1
- ORACLE 경우 NULL 값을 최댓값 (다만,==DBMS마다 다르다==)
- 정렬시 컬럼이 따로 놀지 않아야 함 기준에 맞게 정렬 후 최댓값 등 찾기
- ORDER BY 1,2 ; 이런식으로 가능. 기본값 오름차순 1열2열 오름차순이라는 뜻
#### 6. JOIN
- 엑셀의 VLOOKUP 이라 보면 됨.
##### 6.1 EQUI JOIN
- Equal = 을 조건으로 JOIN 하는것
- WHERE에서 표시
- 2개 테이블에 모두 존재하는 칼럼이면 반드시 테이블명이나 ALIAS 명시해줘야 함. 
##### 6.2 Non EQUI JOIN
- = 이 아닌 조건의 JOIN의 방식. 
	BETWEEN, <, >, <=, =>

##### 6.3 3개 이상 TABLE JOIN 

##### 6.4. OUTER JOIN
 (+)는 Oracle 데이터베이스에서 사용되는 외부 조인(Outer Join) 연산자
1. **외부 조인 표시**: (+)는 해당 테이블이 외부 조인의 "선택적" 테이블임을 나타냅니다.
2. **NULL 값 허용**: (+)가 있는 쪽의 테이블에서 일치하는 행이 없어도 결과에 포함됩니다.
```SQL
SELECT A.COL1, B.COL2, C.COL3 
	FROM SAMPLE1 A, SAMPLE2 B, SAMPLE3 C 
WHERE A.COL1 = B.COL1 (+) 
AND A.COL1 = C.COL1(+)

# ANSI 문법으로 표현하면
SELECT A.COL1, B.COL2, C.COL3 
FROM SAMPLE1 A 
LEFT OUTER JOIN SAMPLE2 B ON A.COL1 = B.COL1 
LEFT OUTER JOIN SAMPLE3 C ON A.COL1 = C.COL1
```
SAMPLE1 테이블의 모든 행을 기준으로, 일치하는 SAMPLE2와 SAMPLE3의 데이터를 가져오되, 
일치하지 않는 경우에도 SAMPLE1의 데이터는 모두 표시하는 결과를 생성
#### 7. STANDARD JOIN
##### 7.1 INNER JOIN
==ON== 절을 사용해서 작성. 
- `FROM PRODUCT A INNER JOIN PRODUCT_REVIEW B`
- `ON A.PRODUCT_CODE = B.PRODUCT_CODE;`
##### 7.2 OUTER JOIN
- FULL OUTER JOIN
- 왼쪽 오른쪽 테이블의 데이터가 모두 출력
- WHERE 절에서 JOIN 옆에 (+) 붙이면 OUTER JOIN 된다. 
##### 7.3 NATURAL JOIN
- 2개 테이블에 같은 이름 가진 컬럼들이 모두 동일한 데이터 가질 경우
	JOIN이 되는 방식으로 ==공통 칼럼 앞에 테이블 명이나 AS를 붙이면 에러가 발생.== 
	`SELECT D.DEP_NO, E.EMP_ID
	FROM EMP E NATURAL JOIN DEP D;`

##### 7.4 CROSS JOIN
- A 테이블 - B 테이블 사이에 JOIN 조건이 없는 경우 조합할 수 있는 모든 경우 수 출력

- SELECT : 
	6개절
	- SELECT  칼럼명 
	-  FROM/ 테이블 명 / 뷰명
	- WHERE  조회조건
	- GROUP BY 그룹핑 컬럼명
	- HAVING  그룹핑 필터링 조건
	- ORDER BY 정렬컬럼명
- 함수
	INPUT -> OUTPUT
	- 숫자형함수
	- 날짜형 함수 : ORACLE 과 SQL-Server  다름
	- CASE 문 : 일치문제 
	- like 연산자 %s

- GROUP BY, HAVING (조건절)
	- having : Groupy by 결과를 조건으로 사용할때 절이. Alias 사용불가

- ORDER BY (정렬)
	- ASC(오름), DESC(내림`)
- JOIN
	- VLOOKUP 같음
	- 여러 테이블의 데이터를 사용해서 동시출력하거나 참조할 경우
	- From 절에 조인할 테이블 나열
	- 조인종류
		- 조건에 따라
		- 결과에 따라
		- NATURAL JOIN
		- CROSS JOIN
		- SELF JOIN
- 표준JOIN
	- ANSI 조인
	- INNER JOIN : 오라클은 INNER JOIN이 기본/

### SQL 활용
[SQL2과목](https://youtu.be/EXx6fjxycSY?si=xR4c_yAyEbaUSm_k) SQL 활용 완벽 정리
#### 1. Subquery
##### Scalar Subquery ( )
- ==SELECT== 절에 위치
```SQL
SELECT R.PLAYER_NUMBER,
	(SELECT P.PLAYER_NAME    ## SELECT절에 위치
	FROM PLAYER P
	WHERE P.PLAYER_NUMBER = R.PLAYER_NUMBER) AS PLAYER_NAME,
	R.JOURNALIST_ID
	R.RATING
FROM PLAYER_REVIEW R;
```
##### Inline View
==FROM== 절에 위치
```SQL
SELECT R.PLAYER_NUMBER,
	P.PLAYER_NAME,
	P.MARKET_VALUE
	R.JOURNALIST_ID
	R.RATING
FROM PLAYER_REVIEW R;
	(SELECT PLAYER_NUMBER,
		 PLYER_NAME,
		 MARKET_VALUE
	FROM PLAYER) P
WHERE R.PLAYER_NUMBER = P.PLAYER_NUMBER;
```
##### Nested Subquery
- ==WHERE== 절과 ==HAVING== 절에 사용 가능. 
	- 비연관 서브쿼리 : 메인쿼리와 관계 없음
	- 연관 서브쿼리 : 메인쿼리와 관계 있음
#### 2. View
SELECT 문에 이름을 붙여서 재사용이 가능하도록 저장해놓은 오브젝트 
==가상테이블==
#### 3. 집합연산자
##### 3.1 UNION
##### 3.2 INTERSECT
##### 3.3 MINUS / EXCEPT

#### 4. 그룹함수
##### 4.1 ROLLUP
- 총계 계산
##### 4.2 CUBE
- 조합할 수 있는 모든 구룹에 대한 소계
- `GROUP BY CUBE(MATCH_DATE, PASSING_NAME)`
	- 경기날에 패스종류의 갯수 총계/
- () 추가하면 총계 나옴 
##### 4.3 GROUPING SETS
- 특정 항목에 총계 계산 함수 . ROLLUP이나 CUBE도 가능
- `GROUP BY GROUPING SET (MATCH_DATE, PASSING_NAME, PLAYER_NAME)`
##### 4.4 GROUPING
- ROLLUP, CUBE, GROUPING SET과 같이 쓰임
- ROW 를 구분할 수 있게 해줌
- 원하는 위치에 원하는 텍스트 출려가능

ROLLUP함수는 인수의 순서에 따라 결과가 달라짐짐
CUBE와 GROUPING SETS 함수는 인수의 순서가 바뀌어도 동일한 결과 출력

#### 5. 윈도우 함수
##### 5.1. 순위 함수
- SELECT 절에 사용
- RANK : 1,2,2,4,5,5,5,8
- DENSE_RANK : 1,2,2,3,4,5,5,5,6
- ROW_NUMBER : 1,2,3,4,5,6,7,8 (중복없음)
##### 5.2 집계 함수
- SUM
- MAX/MIN
- AVG
- COUNT
##### 5.3 행 순서 함수
- FIRST_VALUE : HEAD(1)처럼 첫번째 함수, 1등
- LAST_VALUE : 마지막 데이터
	- `RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`
		처음부터 끝까지. 즉 처음 행부터 끝행까지 
- LAG : 앞선 데이터 구하는 함수  ==내가 얼마나 LAGGING 되어있나==
- LEAD : 뒤에 있는 데이터 ==내가 얼마나 리드하고 있는 데이터==
##### 5.4 비율함수
- RATIO_TO_REPORT 
	`RATIO_TO_REPORT(SCORE) OVER()` 뜻은 스코어/총합
- PERCENT_RANK : 맨위행=0 끝행=1 ▶ RAINK-1/ 총 카운트에서 -1
	10개중에 9번째 순위 : 8/9
- CUME_DIST : 누적 백분위 누적건수/전체건수
- NTILE : N등분후 현재 등급 구하기 
#### 6. Top-N 
##### 6.1 ROWNUM
- = 같은 건너뛰기 조건 안되고 < 나 <= 같은 조건 만 됨
- ORDER BY절이 WHERE 절보다 나중에 수행
- 위에서 부터 순서 메기기
##### 6.2 윈도우 함수의 순위함수
#### 7. Self Join
- 나 자신과의 조인
- ALIAS 반드시 표기 대-중-소
#### 8.  계층 쿼리
- JOIN 없이도 계층구조 출력
- LEVEL : 루트노드는 = 1
- SYS_CONNET_BY_PATH(컬럼,구분자)
- START WITH : 경로가 시작되는 루트 노트 
- CONNECT BY : 루트부터 자식노드를 생성해주는 절 
- PRIOR : 부모 노드 반환 
- 
- 서브쿼리
	Group by 빼고 가능
	메인쿼리랑 연관 되어있음(연관성 쿼리)
	인라인뷰
	Where 절 서브쿼리 : 비교상수값 전달 목적 < = > 연산자 사용가능
	- 다중행 서브쿼리 : 연산자 사용불가. 

- 집합연산자 :  select문을 합집합 교집합 차집합
	union 합집합
	intersect 교집합
	`-` 차집합 순서중요
- 그룹함수 Groupby
	- count(대상)
	- sum
	- avg
- 윈도우함수 : 서로 다른 행의 비교나 연산을 위해 만든 함수  
	- 그룹바이 쓰지 않음 
	- LAG(이전값) LELAD(이후값) SUM AVG MIN MAX COUNT RANK
	- FIRST_VALUE 정해진 범위에서의 처음값, 마지막 값LAST_VALUE
	- NTILE 행을 특정 컬럼 순서에 정해진 수의 그룹에 따라 나누기 위한 함수 ==ORDERBY필수==
	- RATIO_TO_REPORT 각 값의 비율을 리턴
	- over절
- Top N 쿼리 : 페이징처리 효과적으로 수행 위하 사용. 전체 결과에서 특정 N개 추출 (예: 성적 상위 3명)
	- ROWNUM / RANK /FETCH
- 계층형 질의와 셀프조인
- PIVOT과 UNPIVOT
- 정규표현식

## 3. 관리
#### 3.1  DML
##### 3.1.1 INSERT
```SQL
INSERT INTO MANCITY (NATION,POSITION) VALUES('ENGLAND','CB');
```
ㄴ VALUES(전체컬럼에 입력)
##### 3.1.2 UPDATE
```SQL
UPDATE MANCITY SET POSITION = 'MF' WHERE NUMBER = '82';
```
##### 3.1.3 DELETE
```SQL
DELETE FROM MANCITY WHERE NUMBER = '7';
```
##### 3.1.4 MERGE
실시간 동기화나 백업이 필요할때  
- 등번호가 모두 다르다는 전제
- 한팀으로 동기화 
```SQL
MERGE
	INTO MANCITY MCI    ## MCI 테이블의 데이터 변경/생성
USING MANCITY_EDS EDS        ## 변경/생성시 EDS 테이블 사용해라
	ON (MCI.NUMBER = EDS.NUMBER)    ## MCI 등번호와 EDS 등번호 동일한가?조건
WHEN MATCH THEN    ## 조건에 맞는게 있으면 데이터 '변경'
	UPDATE
		SET MCI.POSITION = EDS.POSITION,
			MCI.NUMBER = EDS.NUMBER,
			MCI.NATION = EDS.NATION
WHEN NOT MATCH THEN    ## 조건에 맞는 데이터가 없으면 데이터 '생성'
	INSERT (MCI.POSITION,MCI.NUMBER,MCI.NATION)    ## 칼럼명
	VALUES (EDS.POSITION,EDS.NUMBER,EDS.NATION);    ## 데이터
```
#### 3.2 TCL
##### 3.2.1 COMMIT
- 변경된 내용을 확정 반영하는 명령어 `COMMIT;`
- COMMIT을 하지 않으면 다른 사용자가 조회할수 없고 실행해야 최종적으로 기록
##### 3.2.2 ROLLBACK
INSERT DELETE UPDATE 후 변경된 내용을 취소하는 명령어
##### 3.2.3 SAVEPOINT
특정 SAVEPOINT를 지정해주면 그 지점까지 데이터 복구
```SQL
SAVEPOINT A;
```
#### 3.3 DDL
##### 3.3.1 CREATE
```SQL
CREATE TABLE MANCITY (
	BACK_NO NUMBER NOT NULL,
	PLAYER_NAME VARCHAR2(20) NOT NULL,
	POSITION VARCHAR2(5) NOT NULL,
	CONSTRAINT MANCITY_PK PRIMARY KEY (BACK_NO),
	CONSTRAINT MANCITY_FK FOREIGN KEY REFERENCES POSITION(POSITION)
);
```
##### 3.3.2 ALTER
- ADD COLUMN : 추가
- DROM COLUMN : 칼럼삭제
- MODIFY COLUMN : 기존 칼럼 변경 유형,제약조건 변경 가능.
- RENAME COLUMN : 기존 칼럼 이름 변경
- ADD CONSTRAINT :  제약 조건 추가
```SQL
ALTER TABLE MANCITY ADD BIRTHDAY VARCHAR2(8);
ALTER TABLE MANCITY DROP COLUMN ADDRESS;
ALTER TABLE MANCITY MODIFY (BIRTHDAY VARCHAR2(8) DEFAULT '99999999' NOT NULL);
ALTER TABLE MANCITY RENAME COLUMN NATION TO COUNTRY;
ALTER TABLE MANCITY ADD CONSTRAINT MANCITY_FK FOREIGN KEY (POSITION);
```
##### 3.3.3 DROP TABLE 
```SQL
DROP TABLE MANCITY CASCADE CONSTRAINT;
```
ㄴ 외래키 오류 있을시 제약조건도 완전히 삭제 명령 CASCADE CONSTRAINT;
##### 3.3.4 RENAME
```SQL
RENAME TABLE MANCITY TO MANCHESTER_CITY;
```
##### TRUNCATE TABLE
ROLLBACK 불가능한 테이블 모두 제거. DDL로 분류 
```SQL
TRUNCATE TABLE MANCITY;
```
#### 3.4 DCL 
- USER 를 생성하고 권한 부여하는 명령어
##### 3.4.1 USER 관련
- CREATE USER
- ALTER USER
- DROP USER
```SQL
CREATE USER PEP IDENTIFIED BY PW9320
ALTER USER TXIKI IDENTIFIED BY PW1894
DROP USER ARTETA;
```
##### 3.4.2 권한 관련
- GRANT : 권한 부여
- REVOKE : 회수
```SQL
GRANT CREATE SESSTION TO PEP;
GRANT CREATE USER TO PEP;
GRANT CREATE TABLE TO PEP;

REVOKE CREATE TABLE FROM ARTETA;
```

##### 3.4.3 ROLE 관련
특정권한을 하나의 세트로 묶음
ROLE 생성 ▶ ROLE에 권한 부여 ▶ ROLE을 사용자에게 부여
```SQL
CREATE ROLE CREATE_M;
GRANT CREATE SESSION, CREATE USER,CREATE TABLE TO CREATE_M
GRANT CREATE_M TO PEP
```


마무리 : 김강민, 미나쌤

---
[간단요약](https://yurimac.tistory.com/40)
[추가요약](https://cafe.naver.com/sqlpd/13374)
