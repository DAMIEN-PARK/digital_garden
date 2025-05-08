---
title: 벡터
description: 
date: 2025-04-22
tags:
---



### R
벡터 생성
```r
name=c('조인성','한지민','김철수','켄타로')
```


```r
name=c('조인성','한지민','김철수','켄타로')
gender=c('남','여','남','남')
age=c(42,40,50,30)
height=c(185,165,180,180)
weighted=c(80,60,80,70)
```
- 문자형과 숫자형을 동시에 쓰는 경우 = '문자형'으로 바뀜
	- 문자는 문자끼리
	- 숫자는 숫자끼리.
```R
name=c('조인성','한지민','김철수','켄타로')
gender=c('남','여','남','남')
age=c(42,40,50,30)
height=c(185,165,180,180)
weight=c(80,60,80,70)

mydf=data.frame(name,gender,age,height,weight)
mydf
표로 나옴
```