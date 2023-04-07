## someとeveryの演習問題

`allEvens`という関数を定義してください。  
この関数は配列を一つ引数として受け取って、  
**その配列の中身がすべて偶数であれば`true`を返してください。**  
**そうでない場合は`false`を返してください。**  
`some`あるいはeveryメソッドを使いましょう！  

```js
const allEvens = nums => {
    let bol = nums.every(num => num % 2 === 0)
    return bol;
}
```