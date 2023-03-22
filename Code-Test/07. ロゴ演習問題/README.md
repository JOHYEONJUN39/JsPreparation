## ロゴ演習問題

<p>Purple Grainという会社を作ることにしたので、その会社の超か</p>
<p>っこいいロゴをCSSで作ってください！</p>
<p>h1(見出し要素)を以下のようにスタイルしましょう：</p>

<ul>
    <li>英語を全部CSSで大文字にしましょう（やったことないのでググりましょう！）</li>
    <li>font-familyはmonospace</li>
    <li>textは中央揃え</li>
    <li>font-weightは100</li>
    <li>テキストの大きさは40px</li>
    <li>文字間は20pxあける</li>
    <li>plum色のwavyな波線</li>
</ul>

<img src="https://img-c.udemycdn.com/redactor/raw/2020-09-23_22-36-58-08051657c961540c440bc818b369a0ca.png" width="850px" height="300px" alt="CodeTest"></img>

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Awesome Logo</title>
    <link rel="stylesheet" href="app.css">
</head>
<body>
    <h1>Purple Grain</h1>
</body>
</html>
```

```css
h1 {
    text-transform: uppercase;
    font-family: monospace;
    text-align: center;
    font-weight: 100;
    font-size: 40px;
    letter-spacing: 20px;
    text-decoration: plum underline wavy;
}
```