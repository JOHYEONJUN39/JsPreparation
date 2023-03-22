## フォームの演習問題

<p>簡単なフォームを実際に使ってみましょう！</p>
<p>以下の条件を満たすフォームを作ってください：</p>

<p>1.ユーザー名</p>
<ul>
    <li>textのinputフィールド</li>
    <li>placeholderは「ユーザー名」</li>
    <li>idやforを使ってlabelとinputを関連付ける</li>
</ul>

<p>2. パスワード</p>
<ul>
    <li>passwordのinputフィールド</li>
    <li>placeholderは「パスワード」</li>
    <li>idやforを使ってlabelとinputを関連付ける</li>
</ul>

<p>3. ボタン</p>
<ul>
    <li>ボタンのテキストは「登録」</li>
</ul>

<p>下図のようになります（div要素で囲んでますが、必須ではありません）</p>

<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-04_06-11-51-71d949439827d4d6d02e67f39b9ed3ed.png" width="850px" height="300px" alt="CodeTest"></img>

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