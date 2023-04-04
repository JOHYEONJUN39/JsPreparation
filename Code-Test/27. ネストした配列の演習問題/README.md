## ネストした配列の演習問題

`airplaneSeats`という配列を用意しています。  
この配列は飛行機の座席を表しています。  
友人の`Yumi`が最後に余っている座席を予約しようとしています。  
現在は`null`が設定されている座席に`'Yumi'`という値を代入してください。  

```js
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = `Yumi`;
```