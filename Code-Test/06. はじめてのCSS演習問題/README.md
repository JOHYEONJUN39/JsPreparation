## はじめてのCSS演習問題
CSSの練習をしましょう！ index.html  
にHTMLを用意しました（触らないように注意！）。  
styles.css も用意しているので、  
そこにCSSを書きましょう  
書いてほしいCSSは以下のとおりです：  

- h1（見出し要素）
  - 緑(green)色のテキスト 
- h2（見出し要素）
  - マジェンタ(magenta)色
- 段落要素
  - 白(white)色のテキスト
  - 黒(black)色の背景色
- ボタン
  - 赤(red)色のテキスト
  - ピンク(pink)色の背景色

正しく作ると、下図のようなページになります：

<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-04_06-34-32-e8c617f43fede4707640937591b090f9.png">

```html
<!DOCTYPE html>
<html>
  <head>
    <title>演習問題</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>緑にしてください</h1>
    <h2>マジェンタ色にしてください</h2>
    <p>
      木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。東ざかいの桜沢から、西の十曲峠まで、木曾十一宿はこの街道に添うて、二十二里余にわたる長い谿谷の間に散在していた。
    </p>
    <button>登録する</button>
  </body>
</html>
```

```css
h1 {
    color: green;
}

h2 {
    color: magenta;
}

p {
    background-color: black;
    color: white;
}

button {
    color: red;
    background-color: pink;
}
```