*모듈 번들러*
- 여러 자바스크립트 파일을 하나로 묶기위한 것

*트랜스 파일러*
- 새 자바스크립트의 기법을 옛날 기법으로 바꿔준다.

### 조건문의 진짜의미
- and, or이 아닌 진짜의미를 알아보자
```js
// || 의 왼편에 있는 값이 false일때 오른편을 반환한다.
const num = 100;
const fee = num || "왼쪽값은 false"; // 100
console.log(fee);

// &&은 왼편에 있는 값이 true면 오른편을 반환한다.
const num2 = 100;
const fee2 = num2 && "왼쪽값은 true"; // 왼쪽값은 true
console.log(fee2);
```
