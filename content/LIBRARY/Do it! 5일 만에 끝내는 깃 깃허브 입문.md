---
tags:
  - IT
  - git
  - Book
title: Do it! 5일 만에 끝내는 깃 깃허브 입문
Author: 
category: ""
Publisher: 이지스퍼블리싱
Publish: "2024"
Cover: https://shopping-phinf.pstatic.net/main_4958779/49587791618.20240804071023.jpg
Status:
  - 📖Reading
date: 2025-04-29 10:09:00
total: ""
isbn: "9791163036319"
isbn13: "9791163036319"
draft: false
---

![cover|150](https://shopping-phinf.pstatic.net/main_4958779/49587791618.20240804071023.jpg)
#  Do it! 5일 만에 끝내는 깃&깃허브 입문
(그림으로 쉽게 배우고 프로젝트에 바로 써먹는다!)    
- 저자 : 고경희 이고잉
# 준비
- [[git]] 시작하기
- [TortosieGit 다운로드](https://tortoisegit.org/download/)
# 목차
**1장 깃 시작하기**  
1-1 지옥에서 온 문서 관리자, 깃  
- 버전관리 -> 백업 -> 협업
1-2 깃 설치하고 환경 설정 끝내기  
1-3 리눅스 명령 연습하기  
명령어 테스트  
  
**2장 깃으로 버전 관리하기**  
- 
- 
2-1 깃 저장소 만들기  
```bash
mkdir hello-git
cd hello-git

git init 
## 이렇게 하면 Git 저장소가 생김
```
2-2 버전 만들기  
![[git작업영역.excalidraw]]
- 작업트리 : hello-git 디렉토리가 작업 트리
- 스테이지 : stage는 버전으로 만들 파일 대기  
- 저장소 : 스테이지에 대기하고 있는 파일들을 버전으로 만들어 저장
- commit : git에게 commit 명령 하면 새로운 버전 생성 스테이지 대기파일이 모두 저장소로 저장

2-3 커밋 내용 확인하기  
2-4 버전 만드는 단계마다 파일 상태 알아보기  
```bash
git add hello2.txt
```
![[git_status.excalidraw]]
2-5 작업 되돌리기 (restore)

명령어 테스트  
  
**3장 깃과 브랜치**  
3-1 브랜치 알아보기  
 - google에서 작업했는데 apple에서도 필요한 내용일 경우
 - main코드는 main 브랜치에 둔 상태로 새 브랜치로 만들어서 작업
	 - main 코드를 수정할때 일일이 모든 코드를 수정하지 않아도 된다
 - 메인코드를 복사해서 새로운 브랜치에서 작업하여 성능 검정을 해도 된다

3-2 브랜치 만들기 및 이동하기  
3-3 브랜치에서 커밋하기  
3-4 브랜치 병합하기  
명령어 테스트  
  
**4장 깃허브 시작하기**  
4-1 원격 저장소와 깃허브  
4-2 깃허브 가입하기  
4-3 지역 저장소를 원격 저장소에 연결하기  
4-4 지역 저장소와 원격 저장소 동기화하기  
4-5 깃허브에 SSH 원격 접속하기  
명령어 테스트  
  
**5장 깃허브로 협업하기**  
5-1 서로 다른 컴퓨터에서 원격 저장소 함께 사용하기  
5-2 원격 브랜치 정보 가져오기  
5-3 협업의 기본 알아보기  
5-4 원격 저장소에서 협업하기  
명령어 테스트  
  
**6장 깃허브에서 다른 사람과 소통하기**  
6-1 깃허브 프로필 관리하기  
6-2 README 파일 작성하면서 마크다운 익히기  
6-3 오픈 소스 프로젝트에 기여하기  
  
**7장 VS Code에서 GUI 방식으로 사용하기**  
7-1 저장소 만들기  
7-2 버전 만들기  
7-3 깃허브에 연결하기  
7-4 브랜치 관리하기  
  
**8장 깃허브에 이력서 사이트와 블로그 만들기**  
8-1 HTML, CSS 파일로 이력서 사이트 만들기  
8-2 깃허브에 블로그 만들기  
  
**Special 개발자의 파트너, 깃허브 데브와 코파일럿**  
Special 1 클라우드에서 개발하기 ? 깃허브 데브  
Special 2 AI와 함께 코딩해요 ? 코파일럿





### Resources
##### Youtube
- [생활코딩 깃수업 영상](https://opentutorials.org/module/3733)
- [생활코딩_Git1](https://youtube.com/playlist?list=PLuHgQVnccGMCNJESahrVV-uYGMNYK_vMf&si=1RlmVQMRCMXt6YeG)
- [생활코딩_지옥에서온Git](https://youtube.com/playlist?list=PLuHgQVnccGMA8iwZwrGyNXCGy2LAAsTXk&si=fhkS1ATNNRVaijtv)
- [드림코딩](https://youtu.be/iLqGzEkusIw?si=NvVZii1VcDI9YPhz)
