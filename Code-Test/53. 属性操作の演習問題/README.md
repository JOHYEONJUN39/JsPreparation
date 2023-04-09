## 属性操作の演習問題

DOM要素の属性を操作しましょう。  
あらかじめ`index.html`でHTMLを用意しています。  
`img`要素をJavaScriptで取得して：  

- `src`を`https://devsprouthosting.com/images/chicken.jpg` に更新してください
- `alt`の内容も`"chicken"`に更新してください

```html   
<h4>どっちが先？</h4>
<img id="egg" src="https://devsprouthosting.com/images/egg.jpg" width="200px" alt="egg">
```

```js
const egg = document.querySelector('img');
egg.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
egg.setAttribute('alt', 'chicken');
```