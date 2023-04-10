## レインボーテキスト演習問題

7つのspan要素から構成されたh1要素を用意しています。  
- JavaScriptでそれぞれの文字の色を変更して、虹色にしてください
- `app.js`には`colors`という配列を用意しています。  
`['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']`の順番に色を定義しています  
- **`span`要素をすべて取得して、それぞれのテキストの色を`colors`の配列に定義されている順で更新してください。**  
1つ目の`span`は`'red'`、2つ目の`span`は`'orange'`という感じです。結果は下図のようになります：  

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>Rainbow</title>
    <!--このファイルは編集しないでください-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>
        <span>R</span>
        <span>A</span>
        <span>I</span>
        <span>N</span>
        <span>B</span>
        <span>O</span>
        <span>W</span>
    </h1>
</body>

</html>
```

```js
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll('span');

let colorsCount = 0;
for (let span of spans) {
    span.style.color = colors[colorsCount];
    colorsCount ++;
}

```