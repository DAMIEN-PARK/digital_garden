---
title: 리눅스_명령어
description: 리눅스 명령어 모음집
date:
  - - 2025-05-01
tags:
  - Linux
publish: true
---


---
### 명령어 요약표
- 소문자로 명령(대소문자 구문함)

| 명령어                  | 설명                              |
| -------------------- | ------------------------------- |
| pwd                  | 현재 위치 출력 (print work directory) |
| ls                   | 현재 디렉토리 내 파일/디렉토리 출력            |
| cd                   | 디렉토리 이동                         |
| mkdir                | 생성 디렉토리                         |
| cp                   | 복사_파일 또는 디렉토리                   |
| mv                   | 이동_파일 또는 디렉토리                   |
| rm                   | 삭제_파일 또는 디렉토리                   |
| cat                  | 확인_파일 또는 디렉토리                   |
| touch                | 빈파일 생성                          |
| echo                 | 문자열에 화면 표시                      |
| ifconfig / ip addr   | ip 정보확인                         |
| ss                   | 네트워크 상태 확인                      |
| nc                   | 서버의 포트 확인                       |
| which/whereis/locate | 명령어 위치 확인                       |
| tail                 | 파일 마지막 부분 확인                    |
| find                 | 파일이나 디렉토리 찾기                    |
| ps                   | 실행중인 프로세스 목록과 상태 확인             |
| grep                 | 주어진 입력값에서 패턴에 맞는 값 출력           |
| kill                 | 프로세스 종료                         |
| alias                | 명령어 별칭 만들기                      |
| vi/vim               | 편집기                             |


- pwd : 현재 디렉토리
- ls
	- -l : 상세 정보
	- -a : 숨김 팡리 표시
	- -t : 최신파일 표시
	- -rt : 오래된 파일 표시
	- -F : 파일의 타입을 표시
	- -R : 하위 디렉토리가지 표시
- cd
	- cd..
	- cd /dir : 절대 경로를 지정해서 이동가능
	- cd - : 전 디렉토리 이동
- mkdir
	- `mkdir -p <디렉토리명>/<하위디렉토리명>'
- cp 
	- 하위 디렉토리까지 모두 복사 `cp -R sourceDir targetDIR`
- mv
	- `mv Afile Bfile `
- rm
	- `rm -r Adir` 삭제시 확인을 함 `-rf` 확인 안함
- cat
	- `cat test.txt` : text.txt 파일 내용 확인
- touch
	- `touch Afile` Afile 빈파일을 생성
- echo
	- `echo 'hello world'` : 헬로월드 출력
	- `echo $PATH` PATH로 지정된 문자열을 출력
	- `echo -e 문자열` 이스케이프 문자열 해석
- ifconfig/ip addr
	- 접속한 리눅스의 IP정보
	- ifconfig 는 `sudo apt install net-tools` 설치후 사용
- ss
	- socket statistics 약자 : 네트워크 상태 확인
	- `ss -a` : 모든 포트 확인
	- `ss -t` : TCP 포트 확인
	- `ss -u` : UDP 포트 확인
	- `ss -l` : listen 상태 포트 확인 
	- `ss -p` : 프로세스 표시
	- `ss -n` : host, port 사용자명 숫자로 표시
- nc
	- net cat의 약자, 포트가 열렸는지 확인
	- `nc IP주소포트` : 포트가 오픈됐나 확인 `-v` 붙이면 더 자세한 정보 확인 가능
- which/whereis/locate
	- `which git` : 명령어의 위치를 찾아줌 `-a`는 모든 경로
- tail
	- `tail -f {파일}` 서버의 로그를 실시간으로 확인 ctrl+c로 중단해야 함
	- `tail -n {숫자}{파일경로}` 마지막 라인부터 숫자만큼  파일 라인 수 보여줌
- find
	- find {디렉토리}- name  `*.bak` :  확장자 명으로 찾기
	- find {디렉토리}- path  `**/검색시 사용하는 디렉토리명/**.*.js` :  디렉토리 지정해서 찾기
	- `find {디렉토리}- name` : `*패턴*`
- ps
	- `ps aux` : 실행중인 모든 프로세스 보여주기
	- `ps aus | grep{패턴}` : 특정문자열과 매칭되는 프로세스 찾기
- grep
	- 패턴에 매칭되는 내용을 찾는 명령어
	- `grep "패턴" 파일경로`
	- `grep --invert-match "패턴"`
- kill
	- 프로세스 중지 시그널 
	- `kill 프로세스ID` 프로세스 죽이기
	- `kill {job ID}`
	- `kill -9 | KILL 프로세스 ID` : 강제종료료
- alias
	- `alias` 모든 별명 표시
	- `alias 단어="명령"` : 알리아스 만들기 가령 `alias ll="ls -al`
	- `unalias 단어` alias 삭제
- vi/vim
	- 리눅스에 설치 돼있는 텍스트 에디터
	- `vi {파일 혹은 디렉토리}` 로 진입 >>i 나 a 눌러서 편집모드 >> 내용 수정후 >> esc >> :wq 또는 :x 엔터>> 빠져나옴
	- h왼쪽, j아래, k위, l오른쪽

### Resources
