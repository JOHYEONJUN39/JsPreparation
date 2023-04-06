## メソッドの演習問題

`square`というオブジェクトを定義して、  
`area`と`perimeter`というメソッドをもたせてください。  

- `area`は`side`という引数を一つ受け取って、`side`を2乗した値を返します

- `perimeter`は`side`を受け取って、4を乗算した値を返します

```js
const square = {
    area(side) {
        return Math.pow(side, 2);
    },
    perimeter(side) {
        return side * 4;
    }
}
```

