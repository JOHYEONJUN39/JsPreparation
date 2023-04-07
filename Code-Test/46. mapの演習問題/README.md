## mapの演習問題

`firstNames`という変数を定義してください。  
`fullNames`に`map`をかけて、名前（`first`）だけを取り出して`firstNames`に代入してください。  


```js
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(fullName) {
    return fullName.first;
})
```