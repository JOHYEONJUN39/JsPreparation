## push/pop/shift/unshiftの演習問題

`planets`という配列を用意したのですが、変な情報が入ってたり、  
有名な惑星が入っていなかったりするので、以下のように中身を編集してください。  

1. 1つ目の`The Moon`を`planets`から取り除いてください（そもそも月は惑星じゃない）

2. `Saturn`を`planets`の末尾に追加してください

3. `Mercury`を`planets`の先頭に追加してください

完成したplanetsは次のようになります：  
`["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]`

```js
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];

planets.shift();
planets.push(`Saturn`);
planets.unshift(`Mercury`);
```