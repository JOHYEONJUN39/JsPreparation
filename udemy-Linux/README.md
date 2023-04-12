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
- 