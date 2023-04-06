## 複数パラメータの関数の演習問題

`isSameNumbers`という関数を作って、2つの引数を受け取れるようにしてください。 
2つの引数が両方とも同じ数字であれば`'ゾロ目'` と出力してください。 
そうでない場合は`'ゾロ目じゃない'`と出力してください。  

- isSameNumbers(1,1) //ゾロ目
- isSameNumbers(1,5) //ゾロ目じゃない
- isSameNumbers(4,5) //ゾロ目じゃない
- isSameNumbers(3,3) //ゾロ目

```js
function isSameNumbers(Arg1, Arg2) {
    if (Arg1 === Arg2) {
        console.log("ゾロ目");
    }
    else {
        console.log("ゾロ目じゃない");
    }
}
```