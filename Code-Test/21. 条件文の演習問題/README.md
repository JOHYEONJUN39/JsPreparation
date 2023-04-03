## 条件文の演習問題

条件文を使ってみましょう！この演習問題では、  
関数の中にコードを書いてもらいます  
（関数はまだ学んでないので、コメントの中にコードを書くことだけ守ってください）。  

- 変数`phrase`が、コメントで囲われた場所で使えます

- `phrase`が`'stop'`という値の場合、`'red'`を`console.log`で出力してください

- `phrase`が`'slow'`という値の場合、`'yellow'`を`console.log`で出力してください

- `phrase`が`'go'`という値の場合、`'green'`を`console.log`で出力してください

- `phrase`が上記以外の値の場合、`'purple'`を`console.log`で出力してください 

```js
function getColor(phrase){
    if (phrase === 'stop') {
        console.log('red');
    }
    else if (phrase === 'slow') {
        console.log('yellow');
    }
    else if (phrase === 'go') {
        console.log('green');
    }
    else {
        console.log('purple');
    }
}
```