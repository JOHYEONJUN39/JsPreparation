## パラメータを使った関数の演習問題

`shout`という関数を作成し、`message`というパラメータを受け取れるようにしてください。  
この関数には英語の`message`が渡されると過程して、  
3回console.logで、`message`を**大文字に変換した内容**を出力してください。  
例えば、shout('hello world')が実行されたら以下が出力されます：  
- HELLO WORLD
- HELLO WORLD
- HELLO WORLD

```js
function shout(message) {
    for(let i = 0; i < 3; i++ ) {
        console.log(message.toUpperCase());
    }
}
```