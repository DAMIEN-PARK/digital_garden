---
tags:
  - 코딩
  - 코딩/언어
---
SQL(Structured Query Language)
관계형 데이터베이스에서 데이터를 관리하고 조작하기 위해 사용되는 표준 언어입니다. 
- 대용량 데이터 다루는데 적합한 언어
- DB에서 원하는 방식으로 가져오고 정리 가능
- SQL은 비교적 간단한 문법. SELECT. FROM. WHERE. 
- 여러분야 가능 : WEB개발, 비즈니스 분석, DATA Engineering 
- 확장성 : 파이썬 엑셀 BI TOOL(Power BI, Tableau)연계 가능. 
## 개요
### SQL 기본 개념
#### 1. 데이터베이스와 테이블
- **데이터베이스**: 데이터를 체계적으로 저장하는 공간입니다. 여러 개의 테이블을 포함할 수 있습니다.
- **테이블**: 데이터베이스의 기본 단위로, 행과 열로 구성됩니다. 각 열은 데이터의 속성을 나타내며, 각 행은 개별 데이터 항목을 나타냅니다.
#### 2. 관계형 데이터베이스
- **관계형 모델**: 데이터를 테이블 형식으로 저장하고, 테이블 간의 관계를 정의하여 데이터를 구조화하는 방식입니다.
- **기본 키(Primary Key)**: 각 행을 고유하게 식별하는 열입니다.
- **외래 키(Foreign Key)**: 다른 테이블의 기본 키를 참조하여 테이블 간의 관계를 정의하는 열입니다.
### SQL 학습 시작하기
#### 1. SQL 기초 문법
- **SELECT 문**: 데이터를 조회하는 데 사용합니다.
  ```sql
  SELECT column1, column2 FROM table_name;
  ```

- **WHERE 절**: 조건을 지정하여 데이터를 필터링합니다.
  ```sql
  SELECT column1, column2 FROM table_name WHERE condition;
  ```

- **INSERT 문**: 테이블에 새 데이터를 삽입합니다.
  ```sql
  INSERT INTO table_name (column1, column2) VALUES (value1, value2);
  ```

- **UPDATE 문**: 기존 데이터를 수정합니다.
  ```sql
  UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
  ```

- **DELETE 문**: 데이터를 삭제합니다.
  ```sql
  DELETE FROM table_name WHERE condition;
  ```

#### 2. 데이터베이스 설계
- **정규화(Normalization)**: 데이터 중복을 최소화하고 데이터 무결성을 유지하기 위해 데이터를 구조화하는 과정입니다.
- **ERD(엔티티 관계 다이어그램)**: 테이블 간의 관계를 시각적으로 표현한 다이어그램입니다.

#### 3. 고급 SQL 문법
- **JOIN**: 여러 테이블의 데이터를 결합하여 조회합니다.
  - **INNER JOIN**: 두 테이블 간의 공통된 부분만 반환합니다.
    ```sql
    SELECT columns FROM table1 INNER JOIN table2 ON table1.common_column = table2.common_column;
    ```
  
  - **LEFT JOIN**: 왼쪽 테이블의 모든 행과 오른쪽 테이블의 일치하는 행을 반환합니다.
    ```sql
    SELECT columns FROM table1 LEFT JOIN table2 ON table1.common_column = table2.common_column;
    ```
  
  - **RIGHT JOIN**: 오른쪽 테이블의 모든 행과 왼쪽 테이블의 일치하는 행을 반환합니다.
    ```sql
    SELECT columns FROM table1 RIGHT JOIN table2 ON table1.common_column = table2.common_column;
    ```
  
  - **FULL OUTER JOIN**: 두 테이블의 모든 행을 반환하며, 일치하지 않는 경우에는 NULL로 채워집니다.
    ```sql
    SELECT columns FROM table1 FULL OUTER JOIN table2 ON table1.common_column = table2.common_column;
    ```

- **GROUP BY**: 데이터를 그룹화하여 집계 함수와 함께 사용합니다.
  ```sql
  SELECT column, COUNT(*) FROM table_name GROUP BY column;
  ```

- **HAVING 절**: GROUP BY로 그룹화된 데이터에 조건을 적용합니다.
  ```sql
  SELECT column, COUNT(*) FROM table_name GROUP BY column HAVING COUNT(*) > 1;
  ```

- **서브쿼리(Subquery)**: 쿼리 안에 포함된 쿼리로, 주로 WHERE 절에서 사용됩니다.
  ```sql
  SELECT column1 FROM table_name WHERE column2 IN (SELECT column2 FROM table_name2 WHERE condition);
  ```

#### 4. SQL 실습 및 연습
- **연습 사이트 활용**
    - [SQLZoo](https://sqlzoo.net/): 다양한 SQL 쿼리를 연습할 수 있는 무료 사이트입니다.
    - [LeetCode](https://leetcode.com/problemset/database/): 데이터베이스 관련 문제를 풀 수 있는 코딩 플랫폼입니다.
- **데이터베이스 설치 및 사용**:
  - **SQLite**: 가벼운 관계형 데이터베이스로, 로컬 환경에서 실습하기에 적합합니다.
  - **MySQL/PostgreSQL**: 보다 복잡한 SQL 기능을 실습하기 위해 설치하여 사용해 보세요.

#### 5. 실전 프로젝트
- **작은 프로젝트 시작**: 예를 들어, 도서관 관리 시스템이나 고객 관리 시스템을 설계하고 구현해 보세요.
- **데이터셋 활용**: Kaggle 같은 사이트에서 데이터셋을 다운로드하여 실습할 수 있습니다.

### SQL 학습 자료
1. **책**: 
   - *Head First SQL* - 입문자에게 적합한 시각적 접근 방법을 제공하는 책입니다.
   - *SQL in 10 Minutes, Sams Teach Yourself* - 단시간에 SQL 기본 개념을 익힐 수 있는 책입니다.
2. **온라인 강의**:
   - **Coursera**: 다양한 SQL 강좌를 제공하며, 프로젝트 중심의 학습을 지원합니다.
   - **Udemy**: SQL에 대한 기초부터 고급 주제까지 다양한 강의를 제공하는 플랫폼입니다.

### SQL 학습 팁
- **꾸준한 연습**: SQL은 실습을 통해 익히는 것이 가장 효과적입니다. 매일 SQL 쿼리를 작성하고 결과를 분석하는 습관을 가지세요.
- **문제 해결 능력 향상**: 다양한 쿼리 문제를 해결하면서 실력을 키워나가세요. 복잡한 쿼리를 작성할 때는 단계별로 접근하여 문제를 해결해 보세요.
- **커뮤니티 참여**: SQL 관련 포럼이나 커뮤니티에 참여하여 다른 사람들과 경험을 공유하고 도움을 받으세요.

이렇게 체계적으로 SQL을 공부하면 데이터베이스 관리 및 데이터 분석에 필요한 SQL 실력을 확립할 수 있습니다. 

## SQL 사용 도구
SQL을 사용하기 위해 Visual Studio Code를 사용할 수 있지만, 필수는 아닙니다. 
SQL을 실행하고 데이터베이스와 상호작용하기 위한 다양한 방법과 도구가 있습니다. 아래는 SQL을 사용하기 위해 준비해야 할 단계와 도구에 대한 안내입니다.
### 1. 데이터베이스 관리 시스템(DBMS) 설치
SQL을 사용하려면 먼저 데이터베이스 관리 시스템(DBMS)을 설치해야 합니다. 다음은 일반적으로 사용되는 DBMS의 예시입니다:
- **[[MySQL]]**: 오픈 소스 데이터베이스로, 많은 웹 애플리케이션에서 사용됩니다. [MySQL 공식 사이트](https://dev.mysql.com/downloads/)에서 다운로드할 수 있습니다.
- **[[PostgreSQL]]**: 고급 기능을 제공하는 오픈 소스 데이터베이스로, 데이터 무결성과 확장성을 강조합니다. [PostgreSQL 공식 사이트](https://www.postgresql.org/download/)에서 다운로드할 수 있습니다.
- **SQLite**: 경량의 파일 기반 데이터베이스로, 로컬 환경에서 간단한 SQL 연습이나 작은 애플리케이션 개발에 적합합니다. [SQLite 공식 사이트](https://www.sqlite.org/download.html)에서 다운로드할 수 있습니다.
- **Microsoft SQL Server**: 마이크로소프트에서 제공하는 데이터베이스로, 고급 분석 기능을 지원합니다. [Microsoft SQL Server 다운로드](https://www.microsoft.com/ko-kr/sql-server/sql-server-downloads)에서 사용할 수 있습니다.

### 2. SQL 클라이언트 도구
데이터베이스와 상호작용하기 위해서는 SQL 클라이언트 도구를 사용할 수 있습니다. 이 도구들은 데이터베이스 연결, SQL 쿼리 작성 및 실행, 데이터 조회 등을 지원합니다.
- **MySQL Workbench**: MySQL용 공식 GUI 툴로, 데이터베이스 설계 및 쿼리 실행 기능을 제공합니다.
- **pgAdmin**: PostgreSQL용 공식 관리 툴로, 웹 기반 인터페이스를 통해 데이터베이스를 관리할 수 있습니다.
- **DBeaver**: 다양한 데이터베이스를 지원하는 오픈 소스 SQL 클라이언트로, 데이터베이스 관리 및 쿼리 작성에 유용합니다.
- **SQL Server Management Studio (SSMS)**: Microsoft SQL Server를 관리하기 위한 공식 도구로, 강력한 쿼리 편집기와 데이터베이스 관리 기능을 제공합니다.
### 3. Visual Studio Code 사용하기
Visual Studio Code(VS Code)는 SQL을 작성하고 실행하는 데 사용할 수 있는 코드 편집기입니다. VS Code를 사용하려면 다음과 같은 확장 프로그램을 설치하여 SQL 기능을 확장할 수 있습니다.
- **SQLTools**: SQL 쿼리를 작성하고 실행할 수 있는 VS Code 확장 프로그램입니다. 다양한 데이터베이스에 연결할 수 있는 플러그인을 제공합니다.
  - **설치 방법**:
    1. VS Code를 열고 Extensions 뷰로 이동합니다.
    2. 검색 창에 "SQLTools"를 입력하고 설치합니다.
    3. 필요한 데이터베이스 클라이언트 플러그인도 함께 설치합니다 (예: SQLTools MySQL/MariaDB, SQLTools PostgreSQL, SQLTools SQLite 등).
- **Database Client**: VS Code에서 데이터베이스를 직접 탐색하고 관리할 수 있는 확장 프로그램입니다. 다양한 데이터베이스 유형을 지원합니다.
  - **설치 방법**:
    1. VS Code를 열고 Extensions 뷰로 이동합니다.
    2. 검색 창에 "Database Client"를 입력하고 설치합니다.
### 4. SQL 사용 방법
1. **DBMS 설치 및 설정**: 선택한 DBMS를 다운로드하여 설치합니다. 설치 후 데이터베이스를 생성하고 사용자 계정을 설정합니다.
2. **SQL 클라이언트 설정**: 사용할 SQL 클라이언트를 설치하고, 데이터베이스와 연결을 설정합니다.
3. **SQL 쿼리 작성 및 실행**:
   - SQL 클라이언트에서 새로운 쿼리 창을 열고 SQL 쿼리를 작성합니다.
   - 쿼리를 실행하여 결과를 확인하고 데이터베이스를 조작합니다.
4. **Visual Studio Code 사용**: 
   - SQLTools와 같은 확장 프로그램을 사용하여 VS Code에서 SQL 파일을 작성하고 실행할 수 있습니다.
   - 데이터베이스와 연결을 설정하고 쿼리를 실행합니다.
### SQL 학습에 도움되는 자료
- **온라인 튜토리얼**: W3Schools, Codecademy, Khan Academy 등에서 SQL 기초를 배울 수 있습니다.
- **유튜브 강의**: 다양한 무료 SQL 강의를 시청하며 학습할 수 있습니다.
- **공식 문서**: 선택한 DBMS의 공식 문서를 참고하여 깊이 있는 학습을 할 수 있습니다.

이러한 도구와 방법을 활용하면 SQL을 효과적으로 배우고 사용할 수 있습니다. 