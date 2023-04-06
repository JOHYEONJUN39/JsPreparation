## lastElement演習問題

`lastElemen`tという関数を作ってください。  
関数は一つの配列を引数として受け取ります。  
そして、受け取った配列の最後の要素を返してください。  
もし配列が空の場合は、関数は`null`を返してください。  

```js
function lastElement(Arg) {
    if (Arg.length === 0) {
        return null;
    }
    
    return Arg[Arg.length - 1];
}
```