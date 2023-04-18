## linux란?
- os의 일종 컴퓨터를 움직이기위한 기본 소프트웨어
- 서버용, 구조용, 데스크탑용

### linux 커널
- Linux 운영 체제(OS)의 주요 구성 요소이자 컴퓨터 하드웨어와 프로세스를 잇는 핵심 인터페이스
- 여러 기능을 추가해서 좀더 편리하고 많은 기능을 사용할 수 있는것이 아래에있는

### linux distribution (리눅스 배포판)
- 1000종류이상의 독자적인 커뮤니케이트가 있다.
- Red hat 계열
  - Red Hat Enterprise Linux
  - Cent OS
  - Fedora 등등..
- Debian  계열
  - Debian GNU/Linux
  - Ubuntu 등등..

## 쉘이란?
- Linux의 CLI를 제공하는 소프트웨어
- 유저와 linux 커널의 중개를 담당
- 유저가 커맨드를입력 -> 쉘이 해석 -> 리눅스 커넬에 전달 -> 쉘에 결과를 전송 -> 유저에게 해석해서 전송
- [lhslhs301(유저명)@localhost(호스트명)]$(프롬프트)
- 터미널과 쉘은 다른존재!!
- 터미널속에서 움직이는것이 `쉘` 터미널은 화면을 출력하는것에 불과하다.

### 쉘의 종류
- sh
  - 가장 오래된 쉘
  - 기능이 적다
- bash
  - sh를 기반으로 기능을 확장한 쉘
  - Linux환경에서 사용함
- zsh
  - bash의 기능을 기반으로 zsh
  - 기능이 풍부하다.

### /bin
- 일반유저나 관리유저가 사용하는 커맨드의 실행파일을 포함하고있다.

### /dev
- 디바이스파일을 포함하고있다.
- 디바이스파일이란
  - 데스크나 키보드같이 하드웨어를 파일로써 다룰 수 있는 파일 
### /etc
- 설정 파일을 포함하고있는 디렉토리

### /home
- 리눅스의 유저별로 나뉘어지는 개인 디렉토리

### /sbin
- 실행파일을 두기위한 디렉토리
  - /bin과 다른점은 : 관리자유저 전용 커맨드가 들어있는 점 

### /tmp
- 일시적인 파일을 포함하는 디렉토리
- 어플리케이션 실행중 도중결과를 일시적으로 파일로바꿔 저장하는것이 가능
- 계속 삭제되기 떄문에 계속 사용할 파일에는 사용하지않는 것이 좋다.

### /usr
- 각 애플리케이션과 대조하는 파일을 포함

### /var
- 변화하는 데이터를 포함 변수, log파일 등..

## cd
- 현재위치를 변경하는 커맨드
  - 현재 자신이있는 디렉토리 [.]
  - 부모 디렉토리(현재위치에서 한층 위) [..]
  - 홈 디렉토리 [~]
  - 최상위 계층 디렉토리 [/]

## pwd
- 커렌트 디렉토리(현재위치)를 표시하는 커맨드

## ls
- 파일, 디렉터리를 표시해주는 커맨드

Linux 명령어 테스트


### Cd
해당 경로로 이동
Cd ~ 홈 디렉토리로 이동
Cd / 최상위 디렉토리로 이동
Cd .. 상위 디렉토리로 이동

### Pwd 현재 위치 확인

### ls
특정위치의 파일, 디렉토리 리스트 출력
ls -a 숨김파일까지 포함하여 출력
ls -l 자세히 출력
ls -h 파일의 크기단위를 붙여 출력
ls -S 파일을 크기순으로 정렬하여 출력
ls -r 알파벳 역순으로 출력
명령어 특징 : 두개이상의 명령어를 사용할 수 있다.
ls -alh 숨김파일 포함 자세히 단위를붙여 출력

### mkdir 디렉토리를 생성하는 명령어
mkdir -p 필요한 상위디렉터리를 같이 만든다

mkdir spring 현재 디렉토리에 spring디렉토리 생성
mkdir summer fall winter 현재 디렉토리에 summer, fall, winter 디렉토리 생성
mkdir ~/spring 홈디렉토리에 spring이라는 디렉토리 생성
mkdir -p study/backend/linux 경로중 없는 디렉터리가 있으면 생성

### rmdir 디렉토리를 삭제하는 명령어
rmdir  spring 현재 디렉토리의 spring이라는 디렉토리 삭제
rmdir  summer fall winter summer, fall winter 디렉토리 삭제
rmdir ~/spring 홈디렉토리의 spring이라는 디렉토리 삭제

### rm 파일, 디렉토리를 삭제하는 명령어
rm -r 디렉토리를 삭제하는 옵션
rm -i 삭제시 삭제여부를 확인하는 옵션
rm -f 강제삭제
rm -v 삭제되는 동안 내용을 보여준다. 

### touch 파일의 시간 정보 수정, 파일이 없다면 사이즈가 없는 빈 파일을 만든다.
touch -a 현재시간으로 파일의 atime을 수정
touch -c 파일이 없다면 파일을 새로 만들지않는다.

### cp 파일, 디렉토리를 복사할때 사용
cp -r 디렉토리를 복사할때 사용하는 옵션
cp -i 같은이름의 파일이 있을때 물어본다

cp a b (b디렉토리가 없을 때) a라는 파일을 b라는 이름으로 복사
cp a b/c a라는 파일을 b디렉토리에 c라는 파일로 복사
cp -r a b (b가 없는 경우) a라는 디렉토리를 b라는 디렉토리로 복사
cp -r a b (b 디렉토리가 있는 경우) a라는 디렉토리를 b라는 디렉토리에 복사

### mv 파일, 디렉토리를 이동시키는 명령어, 파일,디렉터리의 이름변경에도 사용
mv -i 같은이름의 파일, 디렉토리 존재시 덮어쓸지 여부를 물어본다.

mv a b (a, b가 파일인 경우)
mv a b (b라는 디렉토리가 없을 경우)
mv a b (b라는 디렉토리가 있는 경우)
mv a b/c (b 디렉토리는 있고 c파일은 없는 경우)

### cat 파일의 내용을 화면에 보여준다.
cat -n 줄번호 표시

cat a.txt a.txt를 화면에 보여줌
cat a.txt b.txt a.txt와 b.txt를 보여줌
cat a.txt - a.txt 내용을 보여주고 키보드입력을 화면에 출력

### head, tail 파일의 내용을 처음부터, 끝부터 보여줌
head -n, tail -n 

head -3 a.txt
tail a.txt

### more 파일의 내용을 페이지형식으로 보여줌
more +n 특정 행부터 보여주는 옵션 

### file 파일의 형식을 보여준다.
file -i mime형식으로 보여준다.

<br>

## help, whatis, man, info 명령어의 옵션이나 정확한 사용법이 필요할 때 확인하는 방법

### help 각 명령어가 제공하는 도움말 확인 

### whatis 명령어에 대한 간단한 설명을 볼 수 있다.

### man 메뉴얼
- (옵션)
- man -k 주어진 키워드를 포함하는 페이지를 찾아서 출력
- man -f 해당 키워드에 완전히 일치하는 페이지를 찾아서 출력
- man -h 사용법만 출력
- (섹션)
- 1 실행 가능한 프로그램이나 명령어
- 2 시스템 콜(커널 기능)
- 3 라이브러리 콜
- 4 특별한 파일들 (주로 /dev/*)
- 5 파일 포맷과 /etc/passwd 같은 파일 명명 규칙
- 6 게임
- 7 기타
- 8 시스템 관리 명령어 (관리자 명령어)
- 9 커널

### info 대체로 man 보다 자세한 정보

### find 파일을 검색하는 명령어 *path를 주지않을 경우 현재 폴더 대상으로 함
find [option] [Olevel] [path] [expression]
(옵션)
find -P 심볼릭 링크를 따라가지 말아라. 심볼릭 링크 파일 자체를 사용.
find -L 심볼릭 링크에 연결된 파일 정보를 사용하라.
find -H 심볼릭 링크를 따라가진 않으나 Command Line Argument를 처리할때는 예외로 하라
find -D 디버그 메세지 출력
(Olevel)

- 솔직히 find 잘 모르겠다.. ㅋㅋ..

### grep 주어진 텍스트에서 원하는 패턴을 찾는다. 파일, 스트림의 내용을 대상으로 한다.
(option)
grep -i 대소문자를 무시하고 패턴 확인
grep -f file 파일에서 패턴을 읽음
grep -v 반대 동작. 패턴이 없는 줄만 선택
grep -w 단어 전체가 일치하는 경우만 찾는다.
grep -c 찾은 행의 수를 출력
grep -n 찾은 행의 줄번호 출력

### Command Sequence, Command Group
- Command Sequence
  - 두 개 이상의 명령어를 한 줄에 입력하여 순차적으로 실행할 때 사용.
  - 예) pwd; ls
- Command Group
  - 괄호를 이용하여 두 개 이상의 명령어를 하나의 그룹으로 묶으며 순차적으로 실행할 때 사용.
  - 예) (pwd; ls)

### Conditional Command Sequence
- && 이전의 명령어 또는 명령어 그룹이 성공한 경우에만 뒤 명령어를 수행한다.
  - ls a; pwd -> a라는 폴더의 존재 여부에 관계 없이 ls 이후 pwd를 실행
  - ls a && pwd -> a라는 폴더가 없을 경우 ls a 는 실패하고 pwd도 실행되지 않는다.
- || 이전 명령이 실패한 경우에만 뒤 명령어를 수행한다.
  - ls a || ls -> a폴더가 없는 경우 ls a는 실패하고 ls를 실행한다.
  - ls a || ls -> a폴더가 있는 경우 ls a만 실행하고 종료.

### Pipe
- 이전 명령어의 출력을 다음 명령어의 표준입력으로 전달
  - 파이프 뒤에 오는 명령어는 input에 해당하는 파라미터를 생략
  - 명령어와 명령어 사이에 | 기호를 사용한다.
  - 예)
  ```zsh
  cat /etc/passwd | more
  cat /etc/passwd | grep sycho
  ls -l | grep txt | more
  ```
  - 파이프의 명령어는 각각의 프로세스로 실행되며 표준 입력이 필요한 명령어는 대기 상태가 된다.
  ```zsh
  cat /etc/passwd | grep sycho
  ```

### Redirection
- 명령어가 필요한 표준 입력이나 명령어의 표준 출력을 파일로 대체하는 것.
```zsh
>  : 명령어의 출력을 파일로 전달한다. 덮어쓰기
>> : 명령어의 출력을 파일로 전달한다. 뒤에 추가하기 (append)
<  : 명령어의 입력을 파일로 대신하기.
ls -l > list.txt
ls -l >> list.txt
grep sycho < data.txt
grep sycho < data.txt > out.txt
// data.txt를 열어 grep실행 -> grep의 실행 결과를 out.txt에 저장
```

# 쉘  

## 쉘 변경
- 일시적 변경
  - /etc/shells에 있는 쉘 이름을 입력하여 변경 원래 쉘로 돌아오려면 exit
- 기본 쉘 변경
  - 기본 쉘 확인 법
```zsh
cat /etc/passwd | grep 본인아이디
```
  - 변경
  - chsh -l 로 리스트 확인하고
```zsh
chsh -s 쉘이름
```

## Login Shell, Non-Login Shell
- 아이디와 비밀번호로 로그인 했다면 로그인쉘(Login Shell)
- GUI 모드에서 로그인 후 터미널을 열었다면 비로그인쉘 (Non-login Shell)
- 쉘 변경 명령어로 실행되었다면 비로그인쉘
- 환경 설정이 다르며 일부 명령어 동작에 약간의 차이가 있음
  - exit : login shell은 로그아웃 / non login shell은 터미널 종료
  - logout : login shell에서는 사용 가능.

## Interactive Shell, Non-Interactive Shell
- Interactive Shell
  - 사용자가 대화형으로 명령을 입력하고 결과를 받는 것. 터미널을 통한 명령어 실행
- Non-Interactive Shell
  - 쉘 스크립트를 통해 실행되는 쉘

## 환경 변수
- 쉘이 명령을 수행하는데 사용하는 각종 기본 변수들
  - 변수이름=값 의 형태. 변수이름과 = 과 값 사이에 공백이 없어야 한다.
  - 값을 읽을 때는 이름 앞에 $를 붙이고 변경할때는 이름만 쓴다.
- 관련 명령어
  - env : 전역 환경 변수 출력
  - echo $변수이름 : 해당 환경 변수의 값을 출력
  - export 변수이름=값 : 전역 환경 변수 값 추가 또는 변경. 현재 세션을 종료하면 값 변경 내용이 사라진다.

### 쉘의 시작과 종료
- 시작
  - Login Shell
    - /etc/profile -> /etc/profile.d/* -> ~/.bash_profile -> ~/.profile
  - Interactive Shell
    - /etc/bashrc -> ~/.bashrc
- 종료
  - ~/.bash_logout

### 명령어 별칭 (Alias)
- 복잡하거나 자주 사용하는 명령어는 별칭을 정해두고 사용할 수 있따.
```zsh
alias 별칭=명령어
unalias 별칭
```
- 별칭을 계속 사용하고 싶다면 ~/.bashrc에 해당 내용을 저장하면 된다.

### 명령어 치환 (Command substitution)
- 명령어의 실행 결과를 다른 명령어로 바로 넘길 수 있는 기능
- 백택(`)으로 명령어를 감싸거나 $()로 명령어를 감싼다.

### 작업 제어 (Job Control)
- 작업이란?
  - 사용자가 실행하고자 하는 일
  - 파이프를 사용하거나 명령어 그룹일 경우 하나의 작업에 두 개 이상의 명령어가 포함 될 수 있다.
  - ls | sort -> 2개의 명령어, 하나의 작업
  - (sleep 10; echo done) -> 2개의 명령어, 하나의 작업
- 작업 제어란?
  - 작업을 종료하거나 멈춘 뒤 다시 시작하게 하는 등의 일을 말한다.
- 전면 처리
  - 입력된 명령어를 실행하고 실행이 종료되면 다음 명령을 받는다.
  - 전면 실행 중인 작업은 터미널을 통해 사용자로부터 입력을 받을 수 있다.
- 후면 처리
  - 명령어 다음에 **&**을 붙이면 후면 처리 된다.
  - 명령어를 입력하면 후면에서 실행하고 동시에 전면에서 다른 작업을 입력 받는다.
  - 사용자의 입력이 필요 없고 시간이 오래 걸리는 일을 처리하는데 사용한다.
- 후면에서 실행되고 있는 작업 리스트를 확인
```zsh
jobs [%작업번호]
```
  - 작업 번호를 생략하면 전체 리스트 조회
  - 작업 번호 뒤 +는 가장 최근 프로세스, -는 직전 프로세스
- 작업 번호를 이용해 전면으로 전환
```zsh
fg %작업번호
```
- 실행 종료
  - 전면 작업 : Ctrl + c
  - 후면 작업 : kill %작업번호
- 실행 중단
  - 전면 작업 : Ctrl + z
- 중단된 프로세스를 다시 실행하기
```zsh
fg %작업번호
또는
bg %작업번호
```
  - 중지된 작업을 전면 또는 후면에서 다시 실행하도록 함

### 프롬프트 제어
- 현재 프롬프트 확인 : echo $PS1

- ₩u : user name
- ₩h : host의 첫 마침표까지의 이름. naver.com -> naver 까지 출력
- ₩W : 현재 작업 디렉토리의 절대 경로 중 마지막 디렉토리
- ₩$ : 관리자(uid 0)면 #으로 아니면 $로 표기
- 그 외 항목은 man bash에서 PROMPTING 참조

## 사용자 전환
```zsh
su [username]
```
  - 아이드를 생략하면 관리자로 전환
  - 관리자의 경우: 비밀 번호 없이 전환
  - 그 외: 변경하고자 하는 아이디의 비밀번호를 입력
- exit: su 이전의 아이디로 돌아온다.
- 중첩해서 su를 할 수 있으며 중첩한 횟수만큼 exit 하면 된다.

## 비밀번호 변경
```zsh
passwd [username]
```
  - 관리자가 초기화 할 때 :
    - usr 지정.
    - 최소 글자 지키지 않아도 초기화 가능
  - 자신의 비밀번호를 입력할 때 :  
    - passwd만 입력
    - 현재 비밀번호 넣고 새 비밀번호 입력.
    - 최소 글자 규칙 지켜야 함

## 리눅스의 사용자
- 관리자(root) 계정
  - 모든 권한을 가진 특수한 계정
- 시스템 계쩡
  - 리눅스를 설치하거나 시스템 소프트웨어를 설치할 때 생성되는 계정
  - 각 기능에 맞게 제한된 기능을 수행
- 사용자 계정
  - 실제 사용자를 위한 계정

## 사용자 정보 파일 /etc/passwd
- 전체 계정에 대한 리스트
  - user name: 로그인 할 때의 아이디
  - password: 별도의 파일로 관리
  - user id(uid): 로그인 아이디와 별도로 관리되는 숫자 아이디
  - group id(gid): 그룹의 숫자 아이디
  - user full name: 사용작 실명 또는 연락처로 사용. 옵션 정보
  - home directory
  - shell
    - /bin/* : 일반 사용자가 선택할 수 있는 Shell들
    - /sbin/nologin : 쉘 로그인 불가능. 홈디렉토리 제공하지 않음.
    - /bin/false : 쉘 로그인 불가능, ftp 접근 불가능, shell, ssh 불가능 등 대부분 제약

## 비밀번호 정보 파일 /etc/shadow
- 보안을 위해 root 계정만 내용을 볼 수 있음
  - user name
  - password :
    - $algorithm $ salt $ password
    - $sibal?
    - *: 비번 없음. 로그인 불가.
    - !!: 비번 없음. 로그인 불가. 사용자를 생성만 하고 비번을 할당하지 않아도 이 표시
    - 빈칸: 비번 없지만 로그인 가능

- 좀 건너뜀

## 그룹 관리
```zsh
groupadd [option] groupname
```
- option
  - groupadd -g 그룹 아이디(숫자)를 지정. 유일한 값을 사용한다.
```zsh
gorupmod [option] gorupname
```
- option
  - groupmod -n 그룹 이름 변경
  - groupmod -g 그룹의 아이디 변경
```zsh
groupdel groupname
```
**해당 그룹에 소속된 사용자나 파일이 있을 경우 삭제 불가.**  


```zsh
gpasswd [option] groupname
```
- option
  - gpasswd 그룹의 비밀번호를 설정
  - gpasswd -r 그룹의 암호를 삭제한다.
  - gpasswd -a username 사용자를 그룹에 추가한다.
  - gpasswd -d username 사용자를 그룹에서 삭제한다.
  - 그룹의 비밀번호는 /etc/gshadow 파일에 저장

## 사용자 추가
```zsh
useradd [option] username
```
- 각 옵션을 생략할 경우 /etc/default/useradd 에 정의된 값을 사용한다.
  - GROUP : 그룹 생성이 허용되지 않는데 그룹이 미지정된 경우의 기본 그룹
  - HOME : 홈 디렉토리 지정. 이 디렉토리 하위에 username으로 새엉된다.
  - INACTIVE : 비밀번호 만료 후 로그인을 막는 기간. -1 : 미설정 / 0 : 없음
  - EXPIRE : 계쩡 유효기간. YYYY-MM-DD
  - SHELL : 기본 쉘
  - SKEL : 사용자가 추가할 때 홈 디렉토리에 추가되는 기본 파일들
  - CREATE_MAIL_SPOOL : 사용자 추가할 때 메일 파일을 생성할 지
- option
  - useradd -d home 홈 디렉토리 지정. 최상위 폴더에는 만들 수 없다.

## 파일 시스템이란?
- 파일이나 자료를 쉽게 접근할 수 있도록 보관 또는 조직하는 체제.
- 파일 시스템에 따라서 다음 사항이 달라진다.
  - 포맷할 수 있는 최대 디스크 용량
  - 한 디렉토리에 추가할 수 있는 최대 서브 디렉토리 또는 파일 개수
  - 한 파일의 최대 용량
  - I/O 연산 속도
  - 에러 복원

## 시스템의 파일 시스템 확인
- /etc/fstab 파일 확인
  - 왼쪽부터 순서대로 장치명, 마운트포인트(해당 장치를 어떤 디렉토리에 연결 할 것인가?),
  파일시스템, 옵션, 덤프 파일체크
  - dump :
    - 0 -> 덤프되지 않은 파일 시스템
    - 1 -> 덤프 가능
  - check
    - 0 : 부팅 시 fdisk 사용하지 않음
    - 1 : 루트 파일 시스템 - 우선 체크
    - 2 : 루트 파일 시스템 외의 파일 시스템 - 1번 이후 체크

**(블록 디바이스의 uuid 출력)**
```zsh
blkid 
```

**(/dev/disk/by-uuid 폴더안에 각 파티션에 대한 링크 확인)**
```zsh
ls -l /dev/disk/by-uuid
```

## inode
- 리눅스의 대표적인 파일 시스템인 ext 계열에서 사용하는 구조
- 파일에 대한 메타데이터. 파일이나 디렉토리는 자신만의 inode를 가진다.
- inode의 최대 수 -> 해당 파일 시스템이 지원하는 최대 파일 수

**파일/디렉토리의 inode 번호 확인**
```zsh
stat [option] file,directory
```
- stat (전체 정보 출력)
- stat -t (간략히 출력)
- stat -c (format) (format에 맞게 출력)

```zsh
ls -li {file,directory} : 파일의 정보 또는 해당 디렉토리 내부 요소들의 정보
ls -ldi {directory} : 해당 디렉토리의 정보
```

## 링크

### 심볼릭 링크
- 윈도우즈의 바로 가기와 같은 역할. 새로운 inode를 가지는 새 파일/디렉토리가 생성되며 원본을 가리킨다.
- 심볼릭 링크를 지워도 원본은 영향을 받지 않으며 원본과 별고의 권환을 가진다.

### 하드 링크
- 기존과 동일한 inode를 가지는 링크.
- 파일/디렉토리가 늘지는 않으며 새로운 이름표가 생기는 것과 같은 효과. 동일 시스템에서만 만들 수 있다.
- 원본 포함 모든 하드링크를 삭제해야 원본이 삭제된다.

```zsh
ln [option] original link
```
- (option)
  - ln -s (심볼릭 링크 생성)
  - ln -i (대상 파일이 이미 존재할 때 물어본다.)
  - ln -b (대상 파일이 이미 존재하면 기존 파일을 백업한다.)
- 하드 링크의 수 와 심볼릭 링크의 원본 파일은 ls -l 로 확인 가능
- 폴더를 만들면 빈 폴더라도 하드링크가 2
- 디렉토리에 대한 하드링크는 기본적으로 허용되지 않는다.
  - 심볼릭 링크의 경우 inode 번호가 다르기 떄문에 무한 루프를 피할 수 있다.
  - 하드 링크의 경우 inode 번호가 같기 떄문에 무한 루프에 빠질 수 있다.

## 소유권과 권한
- 소유권 : 파일을 소유한 사용자와 그룹
- 권한 : 파일을 읽고(r), 쓰고(w), 실행(x)할 수 있는 권한 설정.
- 단, 디렉토리의 경우 r,w,x가 다음의 의미로 처리된다
  - r : 디렉토리 내부의 파일과 디렉토리 '이름'을 읽을 수 있다.
  - w : 디렉토리 내부의 행목들을 수정할 수 있다.
  - x : 디렉토리 내부 파일의 콘텐츠와 메타데이터(ls -l)에 접근할 수 있다.

## 권한 변경
```zsh
chmod [option] [mode] file,directory
```
- (option)
  - chmod -v 모든 파일에 대해 진단 메세지 출력
  - chmod -f 에러 메시지 출력하지 않음
  - chmod -c 변경 되는 경우에만 메세지 출력
  - chmod -R 지정한 모드를 디렉토리에 대해 재귀적으로 적용
- (mode)
  - chmod [option] 숫자3개 (664,644와 같이3가지 대상에 대한 설정을 숫자 3개로 표기.)
  - chmod [option] u,g,o,a (소유자 지정 문자열)
  - chmod [option] +,-,= (추가, 삭제, 적용 문자열)
  - chmod [option] r,w,x (권한 문자열)

## 소유권 변경
```zsh
chown [option] [user] [:group] file,directory
```
- 관리자가 수행, user 및 group은 숫자id로도 사용 가능
- (option)
  - chown -h 원본 파일 대신 심볼릭 링크 파일의 소유권을 변경
  - chown -c 변경 되는 경우에만 메시지 출력
  - chown -R 지정한 모드를 디렉토리에 대해 재귀적으로 적용
- 예)
  - chown user1 file1 : file1의 소유자를 user1로 변경
  - chown :student file1 : file1의 소유 그룹을 student로 변경
  - chown user1:student file1 : file의 소유자를 user1,그룹을 student로 변경

```zsh
chgrp [option] grup file,directory
```
- 본인이 소유한 파일에 대해 본인이 속한 그룹에 대해 변경 가능
- (option)
  - chgrp -h 원본 파일 대신 심볼릭 링크 파일의 소유권을 변경
  - chgrp -c 변경 되는 경우에만 메세지 출력
  - chgrp -R 지정한 모드를 디렉토리에 대해 재귀적으로 사용


