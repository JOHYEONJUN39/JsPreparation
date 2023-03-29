## Hover를 이용한 멋진 버튼 만들기

### Hover(마우스포인터 올릴)시 반응하는 css를 작성
    - google font를 이용하는 방법도 겸하여 배움
    - transform을 이용해 요소의 위치를 변경
  
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hover Me!</title>
    <link rel="stylesheet" href="http://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap">
    <link rel="stylesheet" href="./button.css">
</head>

<body>
    <button>Hover Me</button>
</body>

</html>
```

```css
body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #151b29;
}

button {
    background: none;
    color: #ffa260;
    border: 2px solid;
    padding: 1em 2em;
    font-size: 1em;
    /* 0.25s만 붙여도 전부 적용되지만 의도성을 위해 전부 적어주는게 옳다. */
    transition: border-color 0.25s, color 0.25s, box-shadow 0.25s, transform 0.25s;
}

button:hover {
    border-color: #f1ff5c;
    color: white;

    /* X축은 0 / Y축 0.5em / 블러 0.5em / 퍼짐 -0.4em / 색 */
    box-shadow: 0 0.5em 0.5em -0.4em #f1ff5c;
    /* 세로축 -0.25em(위) 이동  */
    transform: translateY(-0.25em);
    /* Hover시 마우스포인터가 바뀐다. */
    cursor: pointer;
}
```