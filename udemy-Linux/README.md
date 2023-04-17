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
