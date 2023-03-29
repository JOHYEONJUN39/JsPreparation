## 포토그래피 사이트 작성
 - calc(calculate)의 사용법을 배움
 - googleFont 활용
 - em단위를 이용하여 폰트가 커지면 내부여백도 같이 커져 자연스러운 연출을 보여줌

```html
<!DOCTYPE html>
<html>

<head>
    <title>Photo Blog</title>
    <link rel="stylesheet" href="./photos.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap" rel="stylesheet">
</head>

<body>
    <!-- ここに名前を入れよう! -->
    <nav>Ken/Fukuyama</nav>

    <!-- Massimo Margagnoni -->
    <!-- img 태그를 띄워서 사용하면 white space가 생겨버려 img마다 공간이 생긴다.
            flex-box 사용시 신경안써도 됌 -->
    <img src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg"><img
        src="http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg"><img
        src="http://c2.staticflickr.com/8/7231/6947093326_df216540ff_b.jpg">

    <!-- Giuseppe Milo -->
    <img src="http://c1.staticflickr.com/9/8788/17367410309_78abb9e5b6_b.jpg"><img
        src="http://c2.staticflickr.com/6/5814/20700286354_762c19bd3b_b.jpg"><img
        src="http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg">

    <!-- GörlitzPhotography -->
    <img src="http://c2.staticflickr.com/6/5588/14991687545_5c8e1a2e86_b.jpg"><img
        src="http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg"><img
        src="http://c2.staticflickr.com/8/7579/15482110477_0b0e9e5421_b.jpg">

    <!-- All Photos Licensed Under Creative Commons 2.0 -->
    <!-- https://creativecommons.org/licenses/by/2.0/legalcode  -->

</body>

</html>
```

```css
img {
    width: 30%;
    margin: calc(10%/6);
}

nav {
    /* 대문자 */
    text-transform: uppercase;
    border-bottom: 2px solid #f1f1f1;
    width: 30%;
    margin-left: calc(10%/6);
    font-family: 'Raleway', sans-serif;
    /* em으로 지정해서 font-size가 커질수록 padding도 같이 커진다 */
    font-size: 1.5em;
    padding: 1.2em 0;
}
```