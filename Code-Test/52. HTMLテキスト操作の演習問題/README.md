## HTMLテキスト操作の演習問題

`index.html`にHTMLを用意しました。  
以下を実現するために`app.js`を完成させてください：  

- JavaScriptで「おいしい」を含んでいる`<span>`要素を取得してください
- 「おいしい」というテキストを「**まずい**」にJavaScriptで変更してください

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8"/>
    <title>Pickles</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>ピクルスは<span>おいしい</span></h1>
</body>

</html>
```

```js
document.querySelector('span').innerText = 'まずい';
```
