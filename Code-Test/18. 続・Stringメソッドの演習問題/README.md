## 続・Stringメソッドの演習問題

`word`という変数を用意して、値には`'skateboard'`という文字列を代入しています。  
この問題のゴールは、最終的に`word`の文字列を`'beard'`に変換することです。  

- 1. Stringのメソッドを使って`'skateboard'`から`'board'`を抽出しましょう（`slice`メソッドが使えます）
- 2. `'board'`の中の`'o'`を`'e'`に置換しましょう（`replace`メソッドが使えます）
- 3. 結果をfacialHairという変数に代入してください
  
```js
const word = "skateboard"; 
let facialHair = word.slice(5, 10).replace(`o`,`e`);
```