## filterの演習問題

`filter`メソッドの練習をしましょう。  
`validUserNames`という関数を作ってください。  
この関数はStringの配列を引数として受け取って、  
**Stringの長さが10文字未満の値だけが入っている新しい配列を返してください。**  

```js
// 함수이름          매개변수(배열을 받을)
const validUserNames = arr => {
    // arr = ['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']

    // 변수 = 받은 배열.filter((매개변수) => {})
    // filter는 나열요소에서 하나씩 매개변수에 뽑아온다.
    let answer = arr.filter((num) => {
        // 뽑아온 요소의 길이를 비교
        return num.length < 10;
    });
    // filter를 사용해 새로 만들어진 배열을 반환.
    return answer;
}
```