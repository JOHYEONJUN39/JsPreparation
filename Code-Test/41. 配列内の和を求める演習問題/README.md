## 配列内の和を求める演習問題

`sumArray`という関数を定義してください。  
数字で構成された一つの配列を引数として受け取ります。  
そして、配列内の数字の和を返してください。  

```js
function sumArray(Arg) {
    let result = 0;
    for (let i = 0; i < Arg.length; i++ ) {
        result += Arg[i];
    }
    
    return result;
}
```