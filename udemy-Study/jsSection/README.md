## 고계함수 高階関数

### 함수를 받은 함수를 반환하는 함수
고계함수는
- 인수로 함수를 받는다.
- 반환값에 함수를 지정한다.

```js
// 받은 함수를 2번 호출하는 함수
function callTwice(func) {
    func();
    func();
}
// 10번 호출
function callTenTimes(f) {
    for (let i = 0; i < 10; i ++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
// callTwice의 파라미터로 rollDie -> rollDie 5회 호출
callTwice(rollDie);
// callTenTimes의 파라미터로 rollDie -> rollDie 10회 호출
callTenTimes(rollDie);
```

```js
function makeBetweenFunc(min, max) {
    return function(num) {
        // 받은 num이 min 이상인지 그리고 max 이하인지 반환하는 함수
        return num >= min && num <= max;
    }
}
// isChild에 makeBetweenFunc(0, 18) 파리미터가 지정된 상태의 함수를 대입
const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

// makeBetweenFunc(0, 18)이 들어간 isChile에 num파라미터를 넣어 호출
isChild(20); // false
isAdult(40); // true
isSenior(100); // true
```

## 메서드 정의

```js
const myMath = {
    PI: 3.14,
    // 오브젝트 데이터에 함수를 선언한다.
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}
// 이렇게 메서드를 정의해서 사용가능하다.
myMath.square(4, 2); // 8
// 기본적으로 . 으로 접근하지만 아래와같은 접근방법도 있다. (잘 안씀)
myMath['cube'](2); // 8 
```
- 사실 오브젝트안의 함수는 아래와 같이 생략형으로 정의가능하다.

```js
const myMath = {
    PI: 3.14,
    
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
```



