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