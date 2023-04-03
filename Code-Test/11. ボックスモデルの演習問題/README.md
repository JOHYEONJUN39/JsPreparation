## ボックスモデルの演習問題

ボックスモデルやwidth、height、  
borderなどについて学びましたので、  
app.cssを使って以下の画像の状態を再現してください  
（下に細かい説明があります）：  

<img src="https://img-c.udemycdn.com/redactor/raw/2020-10-05_21-01-45-de54eaca53cefb4ccb6d07cb0bbbda7a.png">

以下のスタイルを適用してください：

- card用のdiv
  - widthは210px
  - 1pxのgrey色のborder（border-styleはsolid）
  - 5pxのborder-radius
  - テキストは中央揃え（center）
    
- 画像
  - widthは200px
  - 5pxの色が rgb(236, 183, 191) のborder（border-styleはsolid）
  - 50%のborder-radius
    


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