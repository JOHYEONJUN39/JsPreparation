# 화살표 함수

## forEach 메서드
- forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.

- 매개변수
- current
  - Value 처리할 현재 요소.
- index 
  - 처리할 현재 요소의 인덱스.
- array 
  - forEach()를 호출한 배열.

```js
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


function print(element) {
    console.log(element);
}

print(number[0]);
print(number[1]);
// forEach는 함수를 받아서 그 함수를 배열의 요소 하나하나에 대입해준다.
number.forEach(function (element) {
    console.log(element);
});

for (let elem of number) {
    console.log(elem);
}
```

```js
const movies = [ 
    {
        title: 'Amadeus',
        score: 99
    },
    
    {
        title: 'Stand By Me',
        score: 85
    },
    
    {
        title: 'Parasite',
        score: 95
    },
    
    {
        title: 'Alien',
        score: 90
    }
]

// Amadeus = 99/100
// forEach가 하나의 요소해대해 함수를 실행 함수내용은 아래와 같음
movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})
// for...of 가 나온이후로는 위와같이는 잘 쓰지않는다. (String에서도 사용가능하기떄문에)
```

## map 메서드
- call back 함수

```js
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 함수에 number의 요소가 하나하나 들어온다. 파라미터(num)
// map이 return하는건 number와 다른 완전히 새로운 배열이다.
const double = number.map(function(num) {
    return num * 2;
})

console.log(double);
// double = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
// number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```

```js
const movies = [ 
    {
        title: 'Amadeus',
        score: 99
    },
    
    {
        title: 'Stand By Me',
        score: 85
    },
    
    {
        title: 'Parasite',
        score: 95
    },
    
    {
        title: 'Alien',
        score: 90
    }
]

const mvTitle = movies.map(function(movie) {
    return movie.title;
})

console.log(mvTitle);
// ['Amadeus', 'Stand By Me', 'Parasite', 'Alien']
```