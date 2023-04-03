## 子孫セレクターの演習問題

子孫セレクターについて学んだので、  
`index.html`に変更を加えずに、  
以下の状態が実現できるように`app.css`を完成させてください：  

- `header`の中のアンカー要素：
  - フォントサイズを30px
  - テキストの色をティール（`teal`）
- `dislikes`のIDを持つ段落要素の中のアンカー要素：
  - 太字
  - テキストの色を赤（`red`）  

結果は以下のようになります：

<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-05_06-49-55-ee3956adcb59043a345ef4e8b6b92e37.png">

```html
<header>
  <a href="/home">Home</a>
  <a href="/contact">Contact</a>
  <a href="/about">About</a>
</header>

<p>
  <a href="/popcorn">ポップコーン</a>と<a href="/donuts">ドーナツ</a>が好きです
</p>

<p id="dislikes">
  <a href="/pickles">ピクルス</a>と<a href="/greenpepper">ピーマン</a>は嫌いです
</p>
```

```css
header a {
    font-size: 30px;
    color: teal;
}

#dislikes a {
    font-weight: bold;
    color: red;
}
```