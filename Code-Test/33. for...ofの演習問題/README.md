## for...ofの演習問題

`for...of`を実際に使ってみましょう。  
`numbers`という配列を用意しています。  
`for...of`ループを使って、  
それぞれの数字を2乗した値（その数字自身を乗算）をconsole.logで出力してください。  
出力結果は下のようになります：  
1  
4  
9  
16  
25  
36  
49  
64  
81  

```js
const numbers = [1,2,3,4,5,6,7,8,9]; 

for (let number of numbers) {
    console.log(Math.pow(number, 2));
}
```