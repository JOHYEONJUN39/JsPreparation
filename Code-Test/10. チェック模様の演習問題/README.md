## チェック模様の演習問題

<p>このindex.htmlには25個の<div>要素が書かれています。</p>
<p>また、それぞれにはsquareクラスが割り振られています。</p>
<p>ここで、偶数番目のdivには黒色（black）の背景色を定義し、</p>
<p>奇数番目のdivには赤色（red）</p>
<p>の背景色が定義されるようにapp.cssを完成させてください。</p>

<img src="https://img-c.udemycdn.com/redactor/raw/2020-09-23_05-30-06-a4cd91f831586227989a53e16b2d9b23.png" width="500px" height="500px" alt="CodeTest"></img>

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