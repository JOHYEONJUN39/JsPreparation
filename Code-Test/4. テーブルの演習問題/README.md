## テーブルの演習問題
<p>テーブル要素と関連要素を実際に使ってみましょう！ここでは3 x 3のテーブルを作ってください。</p>
<p>ヘッダー行も設定してほしいので、</p>
<p>ヘッダーの行を含めると実際は 4 x 3 のテーブルになります。</p>
<p>index.html を用意してますが、中身は自由に変えてもらって大丈夫です。</p>

下図のようなテーブルを `table`, `thead`, `tr`, `th`, `tbody` と `td` 要素を使って作ってください。

<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-04_05-54-43-3c4b674e5c8268a1d99701c49adba85e.png" width="850px" height="300px" alt="CodeTest"></img>

```html
<table>
    <thead>
        <tr>
            <th>プラン</th>
            <th>価格</th>
            <th>サポート</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <td>フリープラン</td>
            <td>無料</td>
            <td>なし</td>
        </tr>
        
        <tr>
            <td>パーソナルプラ</td>
            <td>980</td>
            <td>土日祝以外</td>
        </tr>
        
        <tr>
            <td>ビジネスプラン</td>
            <td>4980円</td>
            <td>24時間年中無休</td>
        </tr>
    </tbody>
    
</table>
``` 