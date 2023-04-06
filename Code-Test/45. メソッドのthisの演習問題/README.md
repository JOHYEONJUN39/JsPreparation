## メソッドのthisの演習問題

`hen`というオブジェクトを定義してください。  
2つのプロパティと、1つのメソッドを定義してください：  

- `name`は`'Helen'`にしてください

- `eggCount`は`0`にしてください

- `layAnEgg`というメソッドを定義してください。   
このメソッドは、自分の`eggCount`を`1`加算して、   
`'EGG'`という文字列を`return`してください。（`this`を使う必要があります）   

```js
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount ++;
        return 'EGG';
    }
}
```