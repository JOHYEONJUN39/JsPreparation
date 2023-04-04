## オブジェクトを使う演習問題

`index.js`に`restaurant`オブジェクトを用意していて、  
`name`, `address`, `city`, `state`, `zipcode`が定義されています。  

- `restaurant`の情報を使って`fullAddress`という変数に住所を代入してください

- fullAddressの中身は例えば以下のような内容になります(`address`, `city`, `state`, `zipcode`の順番です)  
  - '64 Johnson Ave, Brooklyn, NY 11206'


```js
const restaurant = {
    name: '64',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress =  restaurant.address + restaurant.city + restaurant.state + restaurant.zipcode;
```