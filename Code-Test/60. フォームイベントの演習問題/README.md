## フォームイベントの演習問題

フォームとフォームイベントの練習をしましょう！  
買い物リストを作るフォームを`index.html`に用意しています。  

商品を入力する`<input>`と、数量を入力する`<input>`が置かれています。  
また、追加した項目を表示するための`<ul>`も用意しています。  
以下の実装を行ってください：  

- フォームの`submit`イベントのイベントハンドラを定
- フォームが`submit`されたときに、`preventDefault`でイベントのデフォルトの動作を抑制
- 商品名と数量を`input`の`value`から取得
- 新しい`<li>`を作り、`<li>`の中のテキストには商品名と数量を含める
- `<ul>`に、新しい項目を追加する（`appendChild`を使用）
- `input`の中身をクリア

**注意点**：  
1. Udemyの演習問題では`append()`のようなモダンな構文が使えません  
2. フォームのDOMは`form`という変数に代入してください（解答のチェックに必要です）。  
あらかじめ`app.js`に用意していますので編集しないでください

<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-16_23-13-36-1afbd03666550806687ed3a0ad0d162f.gif">

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>買い物リスト</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>買い物リスト</h1>
    <form action="/nowhere">
        <label for="item">商品</label>
        <input type="text" id="product" name="product">
        <label for="item">数量</label>
        <input type="number" id="qty" name="qty">
        <button>追加</button>
    </form>

    <ul id="list"></ul>
</body>

</html>
```

```js
const form = document.querySelector('form');
const ul = document.querySelector('#list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const prtValue = form.elements.product;
    const qtyValue = form.elements.qty;
    
    const li = document.createElement('li');
    li.innerText = (`${prtValue.value} X ${qtyValue.value}`);
    ul.appendChild(li);
    prtValue.value = '';
    qtyValue.value = '';
});
```