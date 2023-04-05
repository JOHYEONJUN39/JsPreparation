## 데이터의 참조방법 データの参照方法
```js
const midterms = {
    taro:   96,
    jiro:   78
}

midterms.jiro = 79;
console.log(midterms.jiro); // {taro: 96, jiro: 79}
// 배열과 마찬가지로 midterms가 오브젝트 주소를 참조하고있다.
```
### 데이터 추가
```js
midterms.saburo // midterms.saburo -> 적용X
midterms.saburo = 120; // 값이 주어졌을때 비로소 오브젝트에 보인다.
midterms[`shiro`] = `A+`; // 대괄호로 새 데이터 추가하기
console.log(midterms); // {taro: 96, jiro: 79, saburo: 120, shiro: 'A+'}
```

### 배열과 오브젝트
```js
const comments = [
    {"username":  `yamada`, text: `오하요`, votes:  9},
    {"username":  `tanaka`, text: `곤니치와`, votes: 12}
]

console.log(comments);

// comments[배열의 1번째].접근할 데이터
console.log(comments[1].text); // `곤니치와`
console.log(comments[0][`text`]); // `오하요`
// 어렵게 생각할 것 없이 배열이면 배열접근 오브젝트면 오브젝트 접근방법을 사용하면된다 :)
```


## Loop

