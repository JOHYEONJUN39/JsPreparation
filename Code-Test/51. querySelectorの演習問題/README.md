## querySelectorの演習問題

querySelectorとquerySelectorAllを使って以下の要素を取得してください。  

- `'done'`クラスが設定されている要素を**すべて**取得して、`doneTodos`という変数に代入してください
- チェックボックスを**一つ**取得して、`checkbox`という変数に代入してください。

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8"/>
    <title>Todos</title>
</head>

<body>
    <h1>Todos</h1>
    <input type="text" placeholder="新しいTodo">
    <ul>
        <li>水やりをする</li>
        <li class="done">歯磨きをする</li>
        <li class="done">体重を測る</li>
        <li class="done">ランニングする</li>
        <li>ヨガをする</li>
    </ul>
    <label>全部削除する</label>
    <input type="checkbox" id="scales" name="scales" checked>

</body>

</html>
```

```css
.done {
    color: grey;
    text-decoration: line-through;
}
```

```js
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('#scales');
```