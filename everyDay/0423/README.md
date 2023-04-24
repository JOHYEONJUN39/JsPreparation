### 배열함수 복습

**filter()**
- 배열내에 조건을 만족하는 요소를 모아 배열을 만든다.
- 例
```js
const users = [
    {
        name: '조현준',
        age: 24
    },
    {
        name: '최진수',
        age: 25
    },
    {
        name: 이현민,
        age: 15
    }
];

users.filter((user) => {
    return user.age >= 20;
});

결과:
[
    {
        name: '조현준',
        age: 24
    },

    {
        name: '최진수',
        age: 25
    }
]
```



## 화살표함수 복습

**일반적인 함수정의**
```js
const add = function(x, y) {
    return x + y;
}
```

**화살표 함수**

```js
const add = (x, y) => {
    return x + y;
}
```
- 두가지 함수의 기능은 똑같다

```js
// 파라미터가 없어도 (빈 괄호로) 명시
const rollDie = () => {
    return Math.floor(Math.random() * 10) + 1;
}
```
