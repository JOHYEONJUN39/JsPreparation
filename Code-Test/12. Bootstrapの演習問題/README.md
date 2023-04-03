## Bootstrapの演習問題

`index.html`にHTMLを用意しました。
Bootstrapはすでに読み込んでます。
以下の手順通りにBootstrapのクラスを割り当ててください：
- `section`をBootstrapのコンテナにする
- `h1`のテキストは白色（`white`）で背景色は暗く（`dark`）し、中央揃えにする
- `div`は`alert`にして、色は`warning`にする
- 1つ目のボタンをBootstrapの成功（`success`）の色にする
- 2つ目のボタンをBootstrapの危険（`danger`）の色にする
  
<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-05_08-22-58-5a71fe59e211b98bffbe58c54003976e.png">


```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Bootstrap演習</title>
    <!--BOOTSTRAP読み込み-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

</head>
<body>
    <section class="container">
      <h1 class="text-white bg-dark text-center">お知らせ</h1>
      
      <div class="alert alert-warning" role="alert">
        あきらめないことだ。一度あきらめると習慣になる。 
      </div>
      
      <button class="btn btn-success">同意</button>
      <button class="btn btn-danger">異議あり</button>
      
    </section>
</body>
</html>
```