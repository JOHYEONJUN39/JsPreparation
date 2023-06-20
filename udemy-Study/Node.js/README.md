## Node.js
- 자바스크립트의 런타임
- 웹브라우저 밖에서 사용가능한 실장

### REPL
- Read Eval Print Loop
- 터미널에서 node 입력하면 REPL 모드로 들어감
- 자바스크립트 코드를 입력하면 바로바로 실행해줌
- ctrl + c 두번 누르면 REPL 모드 종료
- .help 입력하면 REPL 모드에서 사용할 수 있는 명령어들을 볼 수 있음

## Node.js로 파일을 실행
- node 파일명
```js
for (let i = 0; i < 10; i++) {
    console.log("Hello Node.js!");
}
// Hello Node.js!
// Hello Node.js!
// Hello Node.js!
// Hello Node.js!
// Hello Node.js!
// Hello Node.js!
// Hello Node.js!
// Hello Node.js!
// Hello Node.js!
// Hello Node.js!
```
### fs모듈
- 파일을 읽고 쓰는 모듈
- 파일을 읽어서 콘솔에 출력
*require() 함수를 사용해서 fs모듈을 가져옴*
```js
const fs = require('fs');
```
fs모듈을 이용하여 폴더를 만들어보자
```js
const fs = require('fs');
// process.argv[2]는 node 명령어 뒤에 입력한 값 (파라미터)
const dirName = process.argv[2] || 'Project';
// 받은 파라미터를 이용하여 폴더를 만들어보자
fs.mkdirSync(dirName);
```
폴더를 만들면서 동시에 그 폴더안에 파일을 만들어보자  
```js
const fs = require('fs');
const dirName = process.argv[2] || 'Project';

try {
    fs.mkdirSync(dirName);
    // 경로를 정확히 표시해주어야한다.
    fs.writeFileSync(`${dirName}/index.html`, '')
    fs.writeFileSync(`${dirName}/index.css`, '')
    fs.writeFileSync(`${dirName}/index.js`, '')
} catch (e) {
    console.log("Something went wrong!");
    console.log(e);
}
```

### module.exports를 사용해보자
- 모듈을 exports하는 방법은 아래와 같이 3가지가 있다.
```js
// **math.js**
const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
```
```js
// **math.js**
const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

module.exports = {
    add: add,
    PI: PI,
    square: square
}
```
```js
// **math.js**
module.exports.add = (x, y) => x + y;

module.exports.PI = 3.14159;

module.exports.square = x => x * x;
```
- 위의 세가지 방법은 모두 같은 결과를 나타낸다.
- 이제 사용해보자
```js
// **app.js**
// 상대 path로 math를 가져온다. 상대 path를 사용하지않으면 math라는 모듈을 찾으러가기때문에 에러가 발생한다.
const { PI, square } = require('./math.js');
console.log(PI, square(8));
```
- 위와 같이 사용하면 math.js에서 exports한 PI와 square만을 사용할 수 있다.
- 만약 math.js에서 exports한 모든 것을 사용하고 싶다면 아래와 같이 사용하면 된다.
```js
// **app.js**
const math = require('./math.js');
console.log(math.PI, math.square(8));
```
module을 생략하는 방법도있다.
```js
// **math.js**
const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

exports.add = add;
exports.PI = PI;
exports.square = square;
```
- module.exports 가 exports라는 변수에 들어가있기때문에 가능하다.

### 디렉토리를 require하는 방법
먼저 4개의 js 파일을 작성
```js
// **tama.js**
module.exports = {
    name: 'tama',
    color: 'orange'
}
```
```js
// **tora.js**
module.exports = {
    name: 'tora',
    color: 'black'
}
```
```js
// **momo.js**
module.exports = {
    name: 'momo',
    color: 'grey'
}
```
```js
// **index.js**
const tama = require('./tama');
const tora = require('./tora');
const momo = require('./momo');

const allCats = [tama, tora, momo];
console.log(allCats);
```
- node.js에서 디렉토리를 읽을때는 자동적으로 보는 파일이 index.js이다.
- 함 읽어보자
```js
// **index.js**
const tama = require('./tama');
const tora = require('./tora');
const momo = require('./momo');

const allCats = [tama, tora, momo];

module.exports = allCats;
```
index.js가 들어있는 shelter라는 디렉토리를 읽어보자
```js
// **app.js**
const cats = require('./shelter');
console.log('디렉토리를 require:', cats);
// 결과
디렉토리를 require: [
  { name: 'tama', color: 'orange' },
  { name: 'tora', color: 'black' },
  { name: 'momo', color: 'grey' }
]
```
- npm에서 다른사람이 만든 모듈을 require할때도 디렉토리를 require하는 방법을 사용한다.

## NPM
- Node Package Manager
- Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아놓은 저장소
- react, express, lodash 등등도 모두 npm을 통해 설치하여 사용한다.
- npm을 사용하기 위해서는 node.js가 설치되어있어야한다.

### npm패키지를 설치
- npm install <패키지 이름>
- npm i <패키지 이름> (install의 생략버전)
- give-me-a-joke 패키지를 설치해보자
```js
// **app.js**
const jokes = require('give-me-a-joke');
// 랜덤으로 조크를 반환한다.
jokes.getRandomDadJoke(function(joke) {
    console.log(joke);
});
```
- colors 패키지를 설치해보자
```js
// **app.js**
const jokes = require('give-me-a-joke');
const colors = require('colors');
// 조크를 무지개색으로 반환한다.
jokes.getRandomDadJoke(function(joke) {
    console.log(joke.rainbow);
});
```

### 글로벌 패키지 설치
- npm install -g <패키지 이름>
- npm i -g <패키지 이름>
- cowsay라는 패키지를 설치해보자 (소가 말하는 패키지 나름 유명해서 위키피디아에도 나온다.)
- npm install -g cowsay
 ______________________________________________________________
< 터미널에 cowsay 하고싶은말 적으면 이렇게 소가말해준다 ㅋㅋㅋ >
 --------------------------------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
- npm uninstall -g <패키지 이름> 으로 글로벌 패키지를 삭제할 수 있다.

## package.json에 대하여
- npm init 명령어를 통해 package.json을 생성할 수 있다.
- npm init -y 명령어를 통해 기본값으로 package.json을 생성할 수 있다.
  