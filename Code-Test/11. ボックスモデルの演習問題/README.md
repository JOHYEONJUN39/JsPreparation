## ボックスモデルの演習問題

ボックスモデルや`width`、`height`、  
`border`などについて学びましたので、  
`app.css`を使って以下の画像の状態を再現してください  
（下に細かい説明があります）：  

<img src="https://img-c.udemycdn.com/redactor/raw/2020-10-05_21-01-45-de54eaca53cefb4ccb6d07cb0bbbda7a.png">

以下のスタイルを適用してください：

- card用の`div`
  - `width`は210px
  - 1pxのgrey色の`border`（`border-style`は`solid`）
  - 5pxの`border-radius`
  - テキストは中央揃え（`center`）
    
- 画像
  - `width`は200px
  - 5pxの色が rgb(236, 183, 191) の`border`（`border-style`は`solid`）
  - 50%の`border-radius`
    


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