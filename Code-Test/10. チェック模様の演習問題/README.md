## チェック模様の演習問題

この`index.html`には25個の`<div>`要素が書かれています。  
また、それぞれには`square`クラスが割り振られています。  
ここで、偶数番目のdivには黒色（`black`）の背景色を定義し、  
奇数番目のdivには赤色（`red`）  
の背景色が定義されるように`app.css`を完成させてください。  
  
<img src="https://img-c.udemycdn.com/redactor/raw/2020-09-23_05-30-06-a4cd91f831586227989a53e16b2d9b23.png">

```html
<!doctype html>

<html>
<head>
  <meta charset="utf-8"/>
  <title>チェッカーボード</title>
  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
    <!--このファイルは編集しないでください！-->
    <div id="board">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div>
</body>
</html>
```

```css
.square:nth-of-type(2n+1) {
    background-color: red;
}

.square:nth-of-type(2n) {
    background-color: black;
}
```