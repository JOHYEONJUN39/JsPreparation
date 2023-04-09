## getElementByIdの演習問題

`getElementById`の練習をしましょう。  
`index.html`にHTMLを用意しています（編集しないでください！）。  
`app.js`で`getElementById`を使って以下を実施してください。  

- `img`要素をIDで取得して`image`という変数に代入してください
- `h1`要素をIDで取得して`heading`という変数に代入してください  

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8"/>
    <title>Unicorn</title>
</head>

<body>
    <h1 id="mainheading">I &hearts; Unicorns</h1>
    <img id="unicorn" src="https://devsprouthosting.com/images/unicorn.jpg" alt="" width="200px">
</body>

</html>
```

```js
const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');
```