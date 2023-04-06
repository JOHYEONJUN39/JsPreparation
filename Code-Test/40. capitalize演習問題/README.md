## capitalize演習問題

`capitalize`という関数を作ってください。  
この関数は一つのStringを引数として受け取り、  
そのStringの**最初の文字を大文字にし**た値を返します。  

```js
function capitalize(Arg) {
    let Up = Arg.slice(0, 1).toUpperCase();
    let Down = Arg.slice(1);
    
    return Up + Down;
}
```