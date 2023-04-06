## isShortsWeather Function

短パンででかけても良いような気温かどうかを判断する`isShortsWeather`という関数を作ってください！  

- パラメータは一つ受け取る関数にしてください。例えば`temperature`など

- `temperature`が**25以上**であれば、`true`を`return`してください

- そうでなければ`false`を`return`してください

```js
function isShortsWeather(temperature) {
    if (temperature >= 25) {
        return true;
    }
    return false;
}
```