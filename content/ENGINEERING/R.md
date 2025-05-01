---
title: R
description: 데이터 분석 시각화 프로그래밍언어 R에 대한 설명
date: 2025-04-22
tags:
  - 통계
  - 데이터분석
publish: true
---
---
 R은 통계 분석과 데이터 시각화를 위해 널리 사용되는 프로그래밍 언어. 
 통계 계산과 그래픽. 패키지 개발이 용이해 통계 소프트 웨어 개발에 많이 쓰임
## 설치
1. **R 설치**: [CRAN](https://cran.r-project.org/)에서 R을 다운로드하고 설치
2. **[RStudio](https://www.rstudio.com/)**: R을 사용하는 데 유용한 통합 개발 환경(IDE)입니다. 
## 기본 설명
### R
스크립트 창에 코드 적고 Run 누르거나 드래그해서 영역지정하고 Run 누르면 됨. 
#### 자료형
	1) 숫자형 : 2,1.5, 2+3i
	2) 문자형 :
	3) 논리형 : ture, false
#### 변수
- [[변수]]는 메모리에 붙인 이름
- a=100
- 규칙
	- 알파벳 숫자 언더바 점을 사용할 수 있음. A1 = 100, A_2 = 200
	- 알파벳과 점으로 시작
	- .점으로 시작하면 숫자 올수 없음. .B= 300
#### R_자료구조
- 자료형을 더 편하게 다룰수 있도록 도아주는 구조
- 유형
	- [[벡터]] 정의
	- [[리스트]]
	- [[데이터프레임]]
	- 행렬
	- 배열
	- 요인
![[Pasted image 20241015010806.png]]
#### 연산자
산술 연산자 : \*\* 또는 (^)지수 +- * / 
비교 연산자 : < , > ,== ,<=  !=는 같지 않음(2!=3 2는 3과 같지 않음)
논리 연산자 : &(and) |(or) !(not)
	and 는 둘 다 true일 때만 TRUE 를 반환함
	or 은 둘 중 한개만 TRUE여도 TRUE 반환
### R 프로그래밍
#### 조건문
##### if 문
```R
if(조건){
	조건을 만족하면 실행할 코드`
}
```

```r
X=1+2
if (X>=3) {
  print("안녕")
}
```
#### 반복문
##### For 문
```r
for(i in 자료구조)
{
	i가 들어간 문장
}
```
- (1,2,3,4,5)에 10 씩 곱하기
```r
for (i in c(1,2,3,4,5))
{
  print(i*10)
}
```
- 1,2,3,4,5,6,7,8,9,10 값을 2n+3에 하나씩 입력후 출력
```R
for (i in 1:10)
{
  print(2*i+3)
}  
```
#### 함수
```R
함수수이름 = function(입력값) {
	내용
	return(출력값)
}
```
- bmi(비만도) = 몸무게/키^2 
```R
name=c('조인성','한지민','김철수','켄타로')
gender=c('남','여','남','남')
age=c(42,40,50,30)
height=c(185,165,180,180)
weight=c(80,60,80,70)

cal_bmi=function(ww,hh){
  bmi=ww/(hh/100)^2
  return(bmi)
}
cal_bmi(82,170)
>>> 28.3737
```
매개변수는 함수안에서만 만들어짐
ww,hh는 매개변수

#### Package
`install.packages("reaxl")`
- 경고 뜨는 경우
	WARNING: Rtools is required to build R packages but is not currently installed. Please download and install the appropriate version of Rtools before proceeding:
	- Cran 사이트 가서 다운로드
- import 기능처럼 처음에 쭉 불러오고 사용해야함.

#### 박스플롯(그래프)
![[Pasted image 20241015100545.png]]

- t검정은 표본의 크기가 보통 30 이상은 되어야 함.
- 현업에선 엑셀시트를 R에서  데이터프레임형태로 불러옴. 
- 상자수염 그림 boxplot()
	![[Pasted image 20241015100817.png]]
```r
name=c('조인성','한지민','김영희','켄타로')
gender=c('남','여','여','남')
age=c(42,40,50,30)
height=c(185,165,180,180)
weight=c(80,60,80,70)

df = data.frame(name,gender,age,height,weight)
#성별(기준)에 따라서 키의 상자수염을 그려라
boxplot(height~gender,df)    

# t검정
t.test(height~gender,df)
```
### Data 분석
입출력
오픈 API
데이터프레임 전처리
데이터프레임 병합
[[기술통계]] 분석
데이터 시각화 ggplot2 

### 팁
##### 단축키
- Run : Ctrl + enter
- 지우기 : Ctrl + L 
##### Help
- `help(함수이름)` help(t.test) / ?t.test
---

## GPT 설명
### R이란?
1. **프로그램 언어**: R은 통계 분석과 데이터 시각화에 특화된 프로그래밍 언어입니다.
2. **오픈 소스**: 무료로 사용 가능하며, 누구나 수정하거나 개선할 수 있습니다.
3. **패키지**: 다양한 패키지(라이브러리)를 통해 기능을 확장할 수 있습니다.
### R의 기본 개념
1. **변수**: 데이터를 저장하는 이름입니다. 예를 들어, `x <- 5`는 변수 `x`에 값 5를 저장합니다.
   ```r
   x <- 5
   y <- 10
   z <- x + y  # z는 15가 됩니다
   ```
2. **벡터**: 같은 유형의 여러 값을 담는 자료구조입니다.
   ```r
   v <- c(1, 2, 3, 4, 5)  # 벡터 v는 1, 2, 3, 4, 5를 포함합니다
   ```
3. **리스트**: 서로 다른 유형의 값을 담을 수 있는 자료구조입니다.
   ```r
   l <- list(name = "John", age = 30, height = 175)
   ```
4. **데이터 프레임**: 행과 열로 구성된 2차원 데이터 구조입니다. 엑셀의 스프레드시트와 유사합니다.
   ```r
   df <- data.frame(name = c("Alice", "Bob"), age = c(25, 30))
   ```

### R의 주요 기능
1. **데이터 처리**: 데이터 프레임을 사용하여 데이터를 정리하고 분석할 수 있습니다.
   ```r
   df$age <- df$age + 1  # 나이를 1살 더합니다
   ```
2. **통계 분석**: 평균, 표준편차 등 다양한 통계 계산을 수행할 수 있습니다.
   ```r
   mean(df$age)  # 나이의 평균을 계산합니다
   ```
3. **데이터 시각화**: `ggplot2`와 같은 패키지를 사용하여 다양한 형태의 그래프를 만들 수 있습니다.
   ```r
   library(ggplot2)
   ggplot(df, aes(x = name, y = age)) + geom_bar(stat = "identity")
   ```
4. **패키지**: 다양한 기능을 추가할 수 있는 패키지를 설치하고 사용할 수 있습니다. 예를 들어, `dplyr`은 데이터 조작을 쉽게 해주는 패키지입니다.
   ```r
   install.packages("dplyr")
   library(dplyr)
   df <- df %>% filter(age > 25)  # 나이가 25세 초과인 데이터를 필터링합니다
   ```
### 예제
간단한 예제를 통해 R의 기본 사용법
```r
# 변수와 벡터 생성
a <- 10
b <- 20
numbers <- c(1, 2, 3, 4, 5)

# 벡터의 평균 계산
mean(numbers)

# 데이터 프레임 생성
df <- data.frame(Name = c("Alice", "Bob"), Age = c(25, 30))

# 데이터 프레임 출력
print(df)

# ggplot2를 이용한 시각화
library(ggplot2)
ggplot(df, aes(x = Name, y = Age)) + geom_bar(stat = "identity")
```
---
## Resources
e북 : [R을 이용한 통계 분석](https://kilhwan.github.io/bizstat-book/)
유튜브 [통계의 도구들](https://youtu.be/0DYFRSykkXQ?feature=shared)


