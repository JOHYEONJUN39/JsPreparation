## 配列を使った繰り返し処理の演習問題

`people`という変数に人の名前を入れています。  
この配列の一つ一つの要素をfor文で処理して、  
**名前を大文字でconsole.log**してください。  
結果は以下のようになります：  
SCOOBY  
VELMA  
DAPHNE  
SHAGGY  
FRED  

```js
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

// people.forEach(item => console.log(item.toUppercase()));

for (let i = 0; i < people.length; i++ ) {
    console.log(people[i].toUpperCase());
}
```
