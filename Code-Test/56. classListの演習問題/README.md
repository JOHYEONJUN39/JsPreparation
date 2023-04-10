## classListの演習問題

`index.html`を用意しています。6つの`<li>`要素があり、  
その中の2つには`'highlight'`クラスが適用されています。  
- JavaScriptのclassListプロパティを使って'highlight'クラスの適用状態を反転してください
（クラスがあれば取り除き、クラスが無ければ適用する）  

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>ClasList</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <ul>
        <li>Hello</li>
        <li class="highlight">Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li class="highlight">Hello</li>
        <li>Hello</li>
    </ul>
</body>

</html>
```

```css
li {
  background-color: #B10DC9;
}

.highlight {
  background-color: #7FDBFF;
}
```

```js
const list = document.querySelectorAll('li');

for (let li of list ) {
    li.classList.toggle('highlight');
}
```