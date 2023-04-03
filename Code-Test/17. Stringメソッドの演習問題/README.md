## Stringメソッドの演習問題

`String`のメソッドを使ってみましょう。  
`index.js`に`message`という変数を用意しました。  
`message`に定義されている値を変えることなく、  
`message`の文字を**小文字に変換した**値を`whisper`という変数に入れてください。  
また、このときに**文字列の両端の空白はすべて取り除いてください。**  
これを実現するためには、さきほど**習ったばかりのメソッドを2つ使います。**    
メソッドは繋げて書くことができるということもお忘れなく！  

```js
const message = "    TASTE THE RAINBOW!  ";
const whisper = message.trim().toLowerCase();
```