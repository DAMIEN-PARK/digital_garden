---
title: SQL 기초 문법 정리
date: 2024-07-05
tags:
  - 데이터베이스
  - SQL
  - 쿼리
---

# SQL 기초 문법 정리

SQL(Structured Query Language)은 관계형 데이터베이스 관리 시스템(RDBMS)에서 데이터를 관리하기 위한 표준 언어입니다.

## 기본 명령어

### 데이터 조회 (SELECT)

```sql
SELECT 컬럼명1, 컬럼명2
FROM 테이블명
WHERE 조건
ORDER BY 컬럼명 [ASC|DESC]
LIMIT 숫자;
```

### 데이터 삽입 (INSERT)

```sql
INSERT INTO 테이블명 (컬럼명1, 컬럼명2)
VALUES (값1, 값2);
```

### 데이터 수정 (UPDATE)

```sql
UPDATE 테이블명
SET 컬럼명1 = 값1, 컬럼명2 = 값2
WHERE 조건;
```

### 데이터 삭제 (DELETE)

```sql
DELETE FROM 테이블명
WHERE 조건;
```

## 데이터베이스 생성 및 테이블 관리

```sql
CREATE DATABASE 데이터베이스명;

CREATE TABLE 테이블명 (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT,
  email VARCHAR(100) UNIQUE
);

ALTER TABLE 테이블명 ADD COLUMN 컬럼명 데이터타입;

DROP TABLE 테이블명;
```

## 조인(JOIN)

```sql
SELECT *
FROM 테이블1
INNER JOIN 테이블2 ON 테이블1.컬럼 = 테이블2.컬럼;
```

## 집계 함수

- COUNT(): 행의 개수 반환
- SUM(): 숫자 컬럼의 합계 반환
- AVG(): 숫자 컬럼의 평균 반환
- MAX(): 컬럼의 최대값 반환
- MIN(): 컬럼의 최소값 반환 