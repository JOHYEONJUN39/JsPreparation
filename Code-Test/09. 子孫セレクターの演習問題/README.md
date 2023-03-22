## 子孫セレクターの演習問題

<p>子孫セレクターについて学んだので、</p>
<p>index.htmlに変更を加えずに、</p>
<p>以下の状態が実現できるようにapp.cssを完成させてください：</p>

<ul>
    <li>headerの中のアンカー要素：</li>
    <ul>
        <li>フォントサイズを30px</li>
        <li>テキストの色をティール（teal）</li>
    </ul>
    <li>font-familyはmonospace</li>
    <ul>
        <li>太字</li>
        <li>テキストの色を赤（red）</li>
    </ul>
</ul>

<p>結果は以下のようになります：</p>

<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-05_06-49-55-ee3956adcb59043a345ef4e8b6b92e37.png" width="850px" height="300px" alt="CodeTest"></img>

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