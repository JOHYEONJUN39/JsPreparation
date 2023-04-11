## addEventListenerの演習問題

`addEventListener`の練習をしましょう。2個のボタンを用意し、  
IDをそれぞれ`'hello'`と`'goodbye'`にしています。  
それぞれのボタンにクリックイベントが発生したときのイベントハンドラを定義してください。  
- `hello`ボタンがクリックされたときには`console.log`に`'hello'`を出力してください
- `goodbye`ボタンがクリックされたときには`console.log`に`'goodbye'`を出力してください

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>EventListener</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <button id="hello">Hello</button>
    <button id="goodbye">Goodbye</button>
</body>

</html>
```

```js
const btn1 = document.querySelector('#hello');
const btn2 = document.querySelector('#goodbye');

btn1.addEventListener('click', function() {
    console.log('hello');
});
btn2.addEventListener('click', function() {
    console.log('goodbye');
});
```