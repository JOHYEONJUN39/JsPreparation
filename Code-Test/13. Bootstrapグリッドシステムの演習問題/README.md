## Bootstrapグリッドシステムの演習問題

下図のレイアウトを再現してください。  
Bootstrapはあらかじめ読み込んでありますが、  
この演習に必要なHTML要素は自分で作ってください。  
解答を確かめるにあたって、要素の背景色や、  
中のテキストに関しては特にチェックは行いません！

<img src="https://img-c.udemycdn.com/redactor/raw/coding_exercise_instructions/2021-10-05_08-54-57-43f3dd15dbc88c792e309d3bccf363a7.png">

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Bootstrapグリッドシステム演習</title>
    <!--BOOTSTRAP読み込み-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-4 bg-success">３分の１</div>
            <div class="col-8 bg-danger">３分の２</div>
        </div>
        
        <div class="row">
            <div class="col-3 bg-info">４分の１</div>
            <div class="col-6 bg-secondary">２分の１</div>
            <div class="col-3 bg-primary">４分の１</div>
        </div>
    </div>
</body>
</html>
```
