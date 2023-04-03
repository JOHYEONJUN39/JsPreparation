## CSSセレクター演習問題

CSSセレクターの実際に使っていきましょう！ `index.html`  
には変更を加えずに、以下の状態になるように `app.css`  
を完成させてください：  

- `li` 要素のテキストの色を青（`blue`）にする
- `done`のクラスをもっている要素のテキストの色を灰色（`grey`）にする
- `clear`のIDをもつ要素には赤（`red`）の背景色と白（`white`）のテキストの色にする

<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-05_06-31-23-0238006b0025dcef4d95a0f010e9dc79.png">

```html
<h1>Todo</h1>
<ul>
  <li class="done">ニワトリの散歩をする</li>
  <li>小屋の掃除をする</li>
  <li class="done">卵を採集する</li>
  <li>卵を孵化させる</li>
  <li>卵を出荷する</li>
</ul>
<button id="clear">クリア</button>
<button>Todoを追加する</button>
```

```css
li {
    color: blue;
}

.done {
    color: grey;
}

#clear {
    color: white;
    background-color: red;
}
```