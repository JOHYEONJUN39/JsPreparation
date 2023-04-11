## インラインイベントの演習問題

この演習問題ではインラインのイベントハンドラを書いてもらいます。  
前の講義でも言っていますが、**これはアンチパターンです**  
ただ、実際に使ってみる経験も大事です。  

`index.html`に`<h1>`と`<button>`要素を置いてます。以下のイベントハンドラを追加してください：  

- `h1`がクリックされたときに`'boo'`と`console.log`で出力してください
- `button`がクリックされたとき、`'click'`と`console.log`で出力してください

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Inline Events</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1 onclick="console.log('boo')">インラインイベントはアンチパターンです！</h1>
    <button id="btn" onclick="console.log('click')">クリックしてちょうだい</button>
</body>

</html>
```