## ボックスモデルの演習問題

<p>ボックスモデルやwidth、height、</p>
<p>borderなどについて学びましたので、</p>
<p>app.cssを使って以下の画像の状態を再現してください</p>
<p>（下に細かい説明があります）：</p>

<img src="https://img-c.udemycdn.com/redactor/raw/2020-10-05_21-01-45-de54eaca53cefb4ccb6d07cb0bbbda7a.png" width="600px" height="200px" alt="CodeTest"></img>

<p>以下のスタイルを適用してください：</p>

<ul>
    <li>card用のdiv</li>
    <ul>
        <li>widthは210px</li>
        <li>1pxのgrey色のborder（border-styleはsolid）</li>
        <li>5pxのborder-radius</li>
        <li>テキストは中央揃え（center）</li>
    </ul>
    <li>画像</li>
    <ul>
        <li>widthは200px</li>
        <li>5pxの色が rgb(236, 183, 191) のborder（border-styleはsolid）</li>
        <li>50%のborder-radius</li>
    </ul>
</ul>

```html
<div class="card">
  <img alt="" src="https://assets.codepen.io/123865/dog.png">
  <h1>I Am Dog</h1>
</div>
```

```css
.card {
    width: 210px;
    border-color: grey;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    text-align: center;
}

img {
    width: 200px;
    border-style: solid;
    border-width: 5px;
    border-color: rgb(236, 183, 191);
    border-radius: 50%;
}
```