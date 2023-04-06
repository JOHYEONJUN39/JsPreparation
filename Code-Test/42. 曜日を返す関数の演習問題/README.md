## 曜日を返す関数の演習問題

`returnDay`という関数を作ってください。  
この関数は一つの数字を引数として受け取ります（`1`から`7`の値）。  
そして、`1`から`7`に対応した曜日を返します（`1`なら`Monday`、`2`なら`Tuesday`、etc.）  
し数字が`1`より小さい、あるいは`7`より大きい場合は`null`を返します。  

```js
function returnDay(Arg) {
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (Arg <= 0 || Arg >= 8) {
        return null;
    }
    return week[Arg - 1];
}
```