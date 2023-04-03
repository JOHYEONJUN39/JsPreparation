## 論理演算子ANDの演習問題

条件文をあらかじめ用意し、`mystery`という変数も用意してあります。  
`mystery`の値を編集して、`'正解！'`がログに出力されるようにしてください。  

```js
const mystery = 'Pjjjjj7';

if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("正解！");
}
```