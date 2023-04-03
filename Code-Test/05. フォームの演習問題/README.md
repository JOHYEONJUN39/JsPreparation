## フォームの演習問題
簡単なフォームを実際に使ってみましょう！  
以下の条件を満たすフォームを作ってください：

1. ユーザー
- textのinputフィールド
- placeholderは「ユーザー名」
- idやforを使ってlabelとinputを関連付ける

2. パスワー
- passwordのinputフィールド
- placeholderは「パスワード」
- idやforを使ってlabelとinputを関連付ける


3. ボタン
- ボタンのテキストは「登録」  

下図のようになります（div要素で囲んでますが、必須ではありません）  

<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-04_06-11-51-71d949439827d4d6d02e67f39b9ed3ed.png">

```html
<form action="/user">
    <div>
        <p>
            <label for="username">ユーザー名</label>
            <input type="text" id="username" name="username" placeholder="ユーザー名">
        </p>

        <p>
            <label for="password">パスワード</label>
            <input type="password" id="password" name="password" placeholder="パスワード">
        </p>
        <button>登録</button>
    </div>
</form>
```