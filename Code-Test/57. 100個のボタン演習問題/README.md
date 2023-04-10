## 100個のボタン演習問題

`index.html`を編集することなく、***100個の`button`要素をJavaScriptで作成してください。**  
`button`はすべて`container`のIDを持つ`div`の中に作ってください。  
Udemyの演習問題では`append`は使用できないため、**`appendChild`で実装してください。**  

- 100個の`button`要素を新規に作成
- `button`要素の中には何かしらのテキストを入れてください（何でもOK）
- 各`button`要素は`container`のIDを持つ`div`の中に追加してください

<img src="https://img-c.udemycdn.com/redactor/raw/2020-09-26_22-43-05-f8218e624f61d375d93741189d2f3939.png">

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>100 Buttons!</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>Look At All My Buttons!</h1>
    <div id="container">
    
    </div>
</body>

</html>
```

```js
const con = document.getElementById('container');

for (let i = 0; i < 100; i++ ) {
    const btn = document.createElement('button');
    btn.innerText = 'Hey!';
    con.appendChild(btn);
}
```