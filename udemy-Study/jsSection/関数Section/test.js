// const password = prompt('패스워드를 입력.')

// if (password.length >= 6) {
//     console.log(`패스워드 길이가 적당합니다.`);
//     if (password.indexOf(` `) === -1) {
//         console.log(`공백이 없는 훌룡한 패스워드입니다.`);
//     }
//     else {
//         console.log(`공백이 있습니다 제거해주세요.`);
//     }
// }
// else {
//     console.log(`패스워드가 너무 짧습니다. 6글자 이상 입력`);
// }


// const userInput = prompt('입력');

// if (1234) {
//     console.log('TRUTHY');
// }
// else {
//     console.log('FALSY');
// }

// if (null) {
//     console.log('TRUTHY');
// }
// else {
//     console.log('FALSY');
// }

// if (undefined) {
//     console.log('TRUTHY');
// }
// else {
//     console.log('FALSY');
// }

// if (` `) {
//     console.log('TRUTHY');
// }
// else {
//     console.log('FALSY');
// }

// -----배열 메서드 -----
// let movieLine = [`yamada`, `tanaka`];
// // 배열 끝에 추가
// movieLine.push(`satou`);
// movieLine.push(`nakamura`, `kimura`);
// // 배열 끝 요소 제거
// movieLine.pop();
// // 배열 첫 요소 제거
// movieLine.shift();
// // 배열 시작에 추가
// movieLine.unshift(`miku`);

// console.log(movieLine);



// let cats = [`tama`, `tora`];

// let dogs = [`pochi`, `hachi`];
// // concat : 배열을 합쳐서 새로운 배열을 만든다 (원래있던 배열에 변화 X 전혀 새로운 배열 O)
// console.log(cats.concat(dogs));
// // includes(포함) : cats배열에 `tama`가 포함되어있는지 확인 return값 : boolean
// console.log(cats.includes(`tama`));
// // indexOf : 요소의 index를 반환
// console.log(cats.indexOf(`tama`));
// // reverse : 배열을 뒤집는다. (역순)
// console.log(cats.reverse());



// let colors = [`red`, `orange`, `yellow`, `green`, `blue`, `black`, `white`];

// // slice : 매개변수의 index부터 새로운 배열을 반환. (1, 4)면 1~3까지의 요소가 포함된 배열 반환.
// console.log(colors.slice(1));
// console.log(colors.slice(1, 4));
// // splice : 추가or제거할 index번호(매개변수1) 제거할 요소 수(매개변수2) 추가할 값(매개변수3 *옵션)
// console.log(colors.splice(5, 1));
// colors.splice(1, 0, `red-orange`);
// console.log(colors);
// --------------------


// ## 배열의 등가성 配列の等価性
// `[`h1`, `bye`] === [`h1`, `bye`]`; -> false
// 배열을 비교할때는 메모리 주소값을 비교하기때문에 내용물은 중요하지않다.

// let nums = [1, 2, 3];
// let numsCopy = nums;
// nums배열의 **주소를** numsCopy에게 넘겨준다.
// nums.push(4); (배열 끝에  요소추가)
// console.log(numsCopy); -> [1, 2, 3, 4]
// 분명 nums에 4를 추가했는데 numsCopy에도 들어있다.. 이유는
// 새로운 배열을 추가한 것이 아닌 numsCopy가 nums의 주소를 참조하고있기 떄문이다.
// nums === numsCopy -> true


// ## 배열과 const
// const PI = 3.14;
// PI += 1; // 오류! const(상수)

// const nums = [1, 2, 3];
// nums.push(4);
// nums[0] = 9;
// console.log(nums); -> [9, 2, 3, 4]
// const는 상수인데 왜 배열은 값의 변경이 가능할까?
// 바꾸는건 nums가 아닌 nums가 가르키고있는 배열의 값이기 떄문
// 아무리 값을 추가, 제거, 변경해도 결국 nums는 배열의 주소를 가르키기만 하고 바뀌는건 없다.
// 하지만) nums = [12, 23, 34]; 는 불가능하다 ! 왜?
// 전혀다른 배열이 생성되어 nums가 가르키는 배열의 주소값이 바뀌기떄문.



// const gameBoard = [[`X`, `O`, `X`], [`O`, null, `X`], [`O`, `O`, `X`]];

// console.log(gameBoard);

// console.log(gameBoard[1][1]);

// const person = {
//     firstName:  `Taro`,
//     lastName:   `Yamada`
// }

// console.log(person);

// const cat = {
//     name:   `Tama`,
//     age:    `2`,
//     colors: [`orange`, `white`],
//     isHungry:   true
// }

// console.log(cat[`name`])
// console.log(cat.isHungry)

// const years = {
//     1999:   `good`,
//     2000:   `bad`
// }

// console.log(years[1999])


// const midterms = {
//     taro:   96,
//     jiro:   78
// }

// console.log(midterms.jiro);
// midterms.jiro = 79;
// // 배열과 마찬가지로 midterms가 오브젝트 주소를 참조하고있다.

// ### 데이터 추가
// midterms.saburo // midterms.saburo -> 적용X
// midterms.saburo = 120; // 값이 주어졌을때 비로소 오브젝트에 보인다.
// midterms[`shiro`] = `A+`; // 대괄호로 새 데이터 추가하기
// console.log(midterms); // {taro: 96, jiro: 79, saburo: 120, shiro: 'A+'}

// const comments = [
//     {"username":  `yamada`, text: `오하요`, votes:  9},
//     {"username":  `tanaka`, text: `곤니치와`, votes: 12}
// ]

// console.log(comments);

// // comments[배열의 1번째].접근할 데이터
// console.log(comments[1].text); // `곤니치와`
// console.log(comments[0][`text`]); // `오하요`


// const animal = [`lion`, `tigers`, `bears`];

// for (let i = 0; i < animal.length; i++ ){
//     console.log(animal[i])
// }

// for (let i = 0; i < 10; i++ ) {
//     console.log(`i는${i}`);
//     for (let j = 0; j < 5; j++ ) {
//         console.log(`j는${j}`);
//     }
// }


// const seatingChart = [
//     [`A`,`B`,`C`],
//     [`D`,`E`,`F`],
//     [`G`,`H`,`I`]
// ]

// for (let i = 0; i < seatingChart.length; i++ ) {
//     for (let j =0; j < seatingChart[0].length; j++ ) {
//         console.log(seatingChart[i][j]);
//     }
// }


// let num = 0;
// while (num < 10) {
//     num++
//     console.log(num);
// }


// let boolean = true;
// let omg = 0;
// while (boolean) {
//     console.log(`Oh My God`);
//     if (omg === 15) {
//         boolean = false;
//     }
//     omg++
// }

// // 유저에게 최대수를 입력받는다
// let maximum = parseInt(prompt('숫자를 입력해 주십시오'));
// // parseInt는 문자를 입력받으면 NaN을 반환한다. NaN은 false기 때문에
// // while문을 이용해 재입력,경고를 true가 될때까지 반복 가능하다.
// while (!maximum) {
//     maximum = parseInt(prompt('문자가 아닌 숫자를 입력해 주십시오'));
// }
// // Math.random()으로 랜덤값을 생성, 입력받은 숫자를 곱하고 1을 더해 floor로 소수점을 버린다.
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// let count = 1;

// console.log(targetNum);

// let guess = prompt('랜덤수를 정했습니다. 숫자를 맞춰주세요');
// // 유저 입력값이 target값과 일치할때까지 반복
// while (parseInt(guess) !== targetNum) {
//     // guess가 `q`일때 게임 종료
//     if (guess === `q`) {
//         break;
//     }
//     count ++
//     if (guess > targetNum ) {
//         guess = prompt('그 숫자보다 작습니다.');
//     }
//     else {
//         guess = prompt('그 숫자보다 큽니다.');
//     }
// }
// if (guess === 'q') {
//     console.log(`게임을 종료합니다.`);
// }
// else {
//     console.log(`축하합니다. ${count}번 만에 맞췄습니다.`);
// }

// const subReddits = [`cooking`, `books`, `chickens`, `life`, `pics`];

// // subReddits의 길이만큼 반복하며 선언해준 변수에 저장
// for (let subReddit of subReddits) {
//     console.log(subReddit);
// }

// const seatingChart = [
//     [`A`,`B`,`C`],
//     [`D`,`E`,`F`],
//     [`G`,`H`,`I`]
// ];
// // seatingChart의 길이만큼 반복하며 변수 row에 저장
// for (let row of seatingChart) {
//     // row의 길이 (예를들어 0번쨰 [`A`,`B`,`C`] -> 3) 번만큼 반복 요소를 Al에 저장
//     for (let Al of row) {
//         console.log(Al);
//     }
// }

// const testScores = {
//     ken: 80,
//     yuki: 67,
//     taro: 89,
//     ryota: 91,
//     yuko: 74,
//     chiaki: 96,
//     koki: 60,
//     saeko: 69,
//     kota: 99
// }

// // for (let x of testScores) {
// //     console.log(x);
// // }
// // 오류!
// // 오브젝트는 원래 열거가능한 요소가 아니라 for...of로 호출 불가능

// // Object.keys는 오브젝트의 키값을 배열로 만들어준다.
// console.log(Object.keys(testScores));
// // ['ken', 'yuki', 'taro', 'ryota', 'yuko', 'chiaki', 'koki', 'saeko', 'kota']

// // 배열로 바뀐 testScores의 길이만큼반복 , key값(지금은 이름)을 student에 저장
// for (let student of Object.keys(testScores)) {
//     // {이름}씨는 {데이터}(오브젝트 접근법을 사용)
//     console.log(`${student}씨는${testScores[student]}`);
// }



// let quit = true;
// const todo = [];
// while(quit === true) {
//     let userInput = prompt('커맨드를 입력해주세요 유효 커맨드 : new, list, delete, quit')
//     if (userInput === 'new') {
//         todo.push(prompt('추가할 todo를 입력해 주세요.'));
//     }
//     else if (userInput === 'list') {
//         for (let i = 0; i < todo.length; i++ ) {
//             console.log(`[${i}] : ${todo[i]}`);
//         }
//     }
//     else if (userInput === 'delete' ) {
//         todo.splice(parseInt(prompt('삭제할 index를 입력해 주세요.')), 1);
//     }
//     else if (userInput === 'quit') {
//         break;
//     }
// } 

// function great(Name, age) {
//     console.log(`이름은 ${Name} 나이는 ${age}살`);
// }

// great('조현준', 24);

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++ ) {
//         result += str;
//     }
//     console.log(result);
// }

// repeat('ㅎㅇ', 3);

// function add(Arg1, Arg2) {
//     if (typeof Arg1 !== 'number' || typeof Arg2 !== 'number') {
//         return false;
//     }
//     return Arg1 + Arg2;
// }

// function capitalize(Arg) {
//     console.log(Arg.slice(0, 1));
//     console.log(Arg);
// }
// const a = 'sibal';
// capitalize(a);


// function collect() {
//     let total = 0;
//     console.log(total);
// }

// const add = function (x, y) {
//     return x + y;
// }

// console.log(add(1,2));




// // 받은 함수를 2번 호출하는 함수
// function callTwice(func) {
//     func();
//     func();
// }
// // 10번 호출
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i ++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }
// // callTwice의 파라미터로 rollDie -> rollDie 5회 호출
// callTwice(rollDie);
// // callTenTimes의 파라미터로 rollDie -> rollDie 10회 호출
// callTenTimes(rollDie);

// function makeRandomFunc () {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function() {
//             console.log('머고');
//         }
//     }
//     else {
//         return function() {
//             console.log('시 발련들');
//         }
//     }
// }

// makeRandomFunc();

// function makeBetweenFunc(min, max) {
//     return function(num) {
//         // 받은 num이 min 이상인지 그리고 max 이하인지 반환하는 함수
//         return num >= min && num <= max;
//     }
// }
// // isChild에 makeBetweenFunc(0, 18) 파리미터가 지정된 상태의 함수를 대입
// const isChild = makeBetweenFunc(0, 18);
// const isAdult = makeBetweenFunc(19, 64);
// const isSenior = makeBetweenFunc(65, 120);

// // makeBetweenFunc(0, 18)이 들어간 isChile에 num파라미터를 넣어 호출
// isChild(20); // false
// isAdult(40); // true
// isSenior(100); // true

// const myMath = {
//     PI: 3.14,
//     // 오브젝트 데이터에 함수를 선언한다.
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

// const cat = {
//     name: '타마',
//     color: 'grey',
//     bread: '사향',
//     cry() {
//         console.log(`${this.name}가 운다.`);
//     }
// }

// const cry2 = cat.cry;

// // cat.cry(); 를 호출했을 때 this는 cat이 됨
// cat.cry(); // 타마가 운다.

// // cry2(); 를 호출했을 때 window에 있는 cry2를 호출해서 this가 날아간것
// // 자바스크립트에서 만든 거의 모든것이 window에 들어가있다.
// // 자바의 최상위클래스 object클래스와 유사
// cry2(); // 가 운다.

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount ++;
//         return 'EGG';
//     }
// }


// try {
//     hello.toUpperCase();
// }
// catch {
//     console.log('에러가 났습니다.');
// }

// function shout(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     }
//     catch(err) {
//         console.log(err);
//         console.log('shout에는 문자열을 넣어주세요.');
//     }
// }
// shout(1);

// --- 화살표 함수 ---


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];



// function print(element) {
//     console.log(element);
// }

// print(number[0]);
// print(number[1]);
// // forEach는 함수를 받아서 그 함수를 배열의 요소 하나하나에 대입해준다.
// number.forEach(function (element) {
//     console.log(element);
// });

// for (let elem of number) {
//     console.log(elem);
// }

// const movies = [ 
//     {
//         title: 'Amadeus',
//         score: 99
//     },
    
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
    
//     {
//         title: 'Parasite',
//         score: 95
//     },
    
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// // Amadeus = 99/100
// // forEach가 하나의 요소해대해 함수를 실행 함수내용은 아래와 같음
// movies.forEach(function(movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })
// // for...of 가 나온이후로는 위와같이는 잘 쓰지않는다. (String에서도 사용가능하기떄문에)


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// // 함수에 number의 요소가 하나하나 들어온다. 파라미터(num)
// // map이 return하는건 number와 다른 완전히 새로운 배열이다.
// const double = number.map(function(num) {
//     return num * 2;
// })

// console.log(double);
// // double = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
// // number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// const movies = [ 
//     {
//         title: 'Amadeus',
//         score: 99
//     },
    
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
    
//     {
//         title: 'Parasite',
//         score: 95
//     },
    
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// const mvTitle = movies.map(function(movie) {
//     return movie.title;
// })

// console.log(mvTitle);
// // ['Amadeus', 'Stand By Me', 'Parasite', 'Alien']


// 일반적인 함수 식
// const add = function(x, y) {
//     return x + y;
// }

// 화살표 함수를 사용
// const add = (x, y) => {
//     return x + y;
// }

// const square = (num) => {
//     return num ** 3;
// }
// console.log(square(2)); // 8


// 파라미터가 없는 경우에도 명시적으로 ()를 붙혀줘야함
// const rollDie = () => {
//     return Math.floor(Math.random() * 10) + 1; 
// }

// 파라미터가 하나인 경우는 괄호를 생략하고 파라미터 이름만 적어줘도된다!.
// // const square = num => {
//     return num ** 3;
// }

// // 암묵적인 리턴으로 아래와같이 더 생략해서 적을 수 있다.
// // ()를 이용하면 하나의 값만 돌아온다.
// const rollDie = () => (
//     Math.floor(Math.random() * 10) + 1
// )
// // 여기서 더! 더! 생략을 하면 ()자체를 없애버릴 수 있다!!
// // 그러면 아래와같이 파격적인 길이가 나온다..
// const add = (x, y) => x + y;
// // **하지만 이러한 생략형은 회사의 판단, 혹은 적재적소에서 사용할때 유효하다..(전부 생략한다고 좋은게 아님)**

// // setTimeout(함수, 얼마나 기다리는지)
// setTimeout(() => {
//     console.log('야호~~');
// }, 3000);
// // 3초기다리고 야호~ 출력


// setInterval(함수, 몇초마다 실행하는지)
// setInterval(() => {
//     console.log(Math.random());
// }, 2000);




// // setInterval을 멈추는 메서드 clearInterval()
// // setInterval은 실행될때 ID를 발행한다.
// // clearInterval은 setInterval의 ID를 이용해 특정 setInterval을 정지시킨다.
// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000);
// clearInterval(id); // 정지
// // clearTimeout()도 있다.


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// numbers.filter((num) => {
//     return num < 10;
// }) 


// const movies = [ 
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
    
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 2013
//     },
    
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2004
//     },
    
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1995
//     },
//     {
//         title: 'Attack On titan',
//         score: 95,
//         year: 2015
//     }
// ]

// // 80점 이상인 영화 목록을 goodMovies에 저장
// const goodMovies = movies.filter(movie => {
//     return movie.score > 80;
// })

// console.log(goodMovies);
// // 0 : {title: 'Amadeus', score: 99, year: 1984}
// // 1 : {title: 'Stand By Me', score: 85, year: 2013}
// // 2 : {title: 'Parasite', score: 95, year: 2004}
// // 3 : {title: 'Alien', score: 90, year: 1995}
// // 4 : {title: 'Attack On titan', score: 95, year: 2015}

// const recentMovies = movies.filter((year) => {
//     return year.year > 2000
// })
// console.log(recentMovies);


// const goodMovies = movies
//     .filter(movie =>movie.score > 80)
//     .map(movie => movie.title);

// console.log(goodMovies);


// const exams = [80, 98, 92, 89, 72, 83, 81, 66, 62]

// const test = exams.every(exam => exam >= 75);
// console.log(test); // false

// const movies = [ 
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
    
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 2013
//     },
    
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2004
//     },
    
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1995
//     },
//     {
//         title: 'Attack On titan',
//         score: 95,
//         year: 2015
//     }
// ]

// // 2015이상인 영화가 하나라도 있으면 true를 반환!
// const newMovie = movies.some(movie => movie.year >= 2015);
// console.log(newMovie);


// const goodMovies = movies
//     .filter(movie =>movie.score > 80)
//     .map(movie => movie.title);


// const validUserNames = arr => {
//     // arr = ['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']
    
//     arr.filter((num) => {
//         console.log(num.length);
//         return num.length < 10;
//     })
// }


// const a = ['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']

// console.log(validUserNames(a));


// // 함수이름          매개변수(배열을 받을)
// const validUserNames = arr => {
//     // arr = ['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']
//     // 반환해줄 배열 변수
//     let answer = [];
//     // 변수 = 받은 배열.filter((매개변수) => {})
//     // filter는 나열요소에서 하나씩 매개변수에 뽑아온다.
//     answer = arr.filter((num) => {
//         // 뽑아온 요소의 길이를 비교
//         return num.length < 10;
//     });
//     // filter를 사용해 새로 만들어진 배열을 반환.
//     return answer;
// }


// const prices = [980, 1500, 1980, 4980, 2980];
// // // 12420
// // let total = 0;
// // for (let price of prices) {
// //     total += price;
// // }

// // console.log(total);

// // 12420
// const total = prices.reduce((total, price) => {
//     return total + price;
// })
// console.log(total);

// const minPrice = prices.reduce((min, price) => {
//     if (min > price) {
//         return price;
//     }
//     return min;
// })

// console.log(minPrice);



// const movies = [ 
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
    
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 2013
//     },
    
//     {
//         title: 'Parasite',
//         score: 92,
//         year: 2004
//     },
    
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1995
//     },
//     {
//         title: 'Attack On titan',
//         score: 100,
//         year: 2015
//     }
// ]

// const bestMovie = movies.reduce((maxScore, movie) => {
//     if (maxScore.score < movie.score){
//         return movie;
//     }
//     return maxScore;
// })

// console.log(bestMovie);

// const evens = [2, 4, 6, 8];

// const sum = evens.reduce((sum, num) => sum + num, 50);

// console.log(sum);


// const person = {
//     firstName: 'taro',
//     lastName: 'yamada',
//     fullName: function() {
//         return `${this.lastName} ${this.firstName}`
//     }
// }

// console.log(person.fullName());


// // window
// console.log(this);

// // 화살표 함수는 자신이 정의된 주변의 scope에 있는 this가 된다. (아래의 경우 person의 밖)
// const person = {
//     firstName: 'taro',
//     lastName: 'yamada',
//     fullName: function() {
//         return `${this.lastName} ${this.firstName}`
//     },
//     delayName: function() {
//         // 2초 딜레이를 주고 fullName 함수를 호출
//         // setTimeout(function() {
//         //     console.log(this.fullName())
//         // },2000); 에러!! 이 코드에서 this가 가리키는건 window

//         setTimeout( () => {
//             console.log(this.fullName())
//         },2000);
//         // 화살표 함수는 주변의 scope에 있는 this를 가리켜 이 경우엔 fullName함수가 된다.
//     }
// }

// console.log(person.delayName()); // yamada taro



// 주사위의 면이 몇개인지 받는 파라미터
// function rollDie(numSides) {
//     return Math.floor(Math.random() * numSides) + 1
// }
// 파라미터를 지정해주지 않으면 undefined가 되어버린다.
// function rollDie() {
//     return Math.floor(Math.random() * numSides) + 1
// }

// 과거에는 이런 방법을 사용했다.
// function multiply(a, b) {
//     // 파라미터 b의 타입이 'undefined'가 아닐 겅우 b(받은 값)을 반환
//     // 파라미터 b의 타입이 'undefined'일 겅우 1을 반환
//     b = typeof b !== 'undefined' ? b : 1;   
//     return a * b;
// }

// // 현재는 이렇게 좋은 방법을 사용한다 보이는 그대로다.
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// 아래와 같이 default파라미터를 넣었지만 msg에 인수가 들어가버리기 떄문에
// 파라미터를 정의하는 순서 역시 중요하다 (전부다 짜고 정한다)
// function greet(msg = '야호~', person) {
//     console.log(`${msg} ${person}씨`)
// }
// console.log(greet('현준')) // 야호~ undefined씨
// 정상적인 순서
// function greet(person, msg = '야호~'){
//     console.log(`${msg} ${person}씨`)
// }
// console.log(greet('현준')) // 야호~ 현준씨

// console.log(Math.max(13, 4, 5, 13, 2, 3, 7, 1, 2000)) // 200
// console.log(Math.min(886, 434, 1)) // 1

// const nums = [13, 4, 5, 13, 2, 3, 7, 1, 2000];

// console.log(Math.max(nums)) // NaN ! number가 아닌 배열을 계산하려 했기떄문
// // 여기에 전개 구문을 응용하면
// // []가 없어진다고 생각하면 편할지도?
// console.log(Math.max(...nums)) // 2000
// // nums의 내용물은 변하지 않는다.

// // 아래 두 문장은 결과가 같다.
// console.log(13, 4, 5, 13, 2, 3, 7, 1, 2000); // 13 4 5 13 2 3 7 1 2000
// console.log(...nums);                        // 13 4 5 13 2 3 7 1 2000


// const cats = ['Tama', 'Tora', 'Momo'];
// const dogs = ['Hachi', 'Pochi'];

// // 위 두 배열을 합치려면 지금까지는 concat()을 이용하였다.
// console.log(cats.concat(dogs)); // ['Tama', 'Tora', 'Momo', 'Hachi', 'Pochi']

// // 스프레드 구문을 사용하면 아래와 같다.
// const allPets = [...cats, ...dogs]; 
// console.log(allPets); // ['Tama', 'Tora', 'Momo', 'Hachi', 'Pochi']

// // 하지만 이러면 concat()과 하는일이 같다. 아래에서 다른 예를 보자
// console.log([...cats, 'Sakura', ...dogs]);
// // ['Tama', 'Tora', 'Momo', 'Sakura', 'Hachi', 'Pochi']
// // 이런식으로 간단하게 사이에 다른 요소를 추가하는것도 가능하다!!


// const feline = {leg: 4, family: '猫'};
// const canine = {family: '犬', bark: true};
// // 스프레드를 사용하면 복제된다.
// const all = {...feline, color: 'grey'};
// console.log(all); // {leg: 4, family: '猫', color: 'grey'}

// // 스프레드를 사용해 두개의 오브젝트를 불러와 보았다.
// const catDog = {...feline, ...canine};
// console.log(catDog); // {leg: 4, family: '犬', bark: true}
// // 위와같이 결과를 얻었지만 중복되는 키는 나중에 정의된것이 출력된다.

// // 반대로 해보면
// const catDog = {...canine, ...feline};
// console.log(catDog); // {family: '猫', bark: true, leg: 4}

// // 오브젝트에 배열을 넣어 스프레드를 사용하면 어떻게될까?
// const num = {...[2, 4, 6, 8]};
// console.log(num); // {0: 2, 1: 4, 2: 6, 3: 8}
// // 배열마냥 index와 값이 같이 나온다 이건 문자열의 경우도 같다
// const str = {...'Hello'};
// console.log(str); // {0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

// // 자바스크립트에서 스프레드는 어떨때 사용할까?
// // 자바스크립트에서 오브젝트를 복사하는 일은 정말 많다.

// // 웹 사이트에서 form으로 등록했을때 들어있는 정보라고 친다.
// // 만약 이 정보를 서버에서 user로 보존하고싶을때를 가정해본다.
// const formData = {
//     email: 'lhslhs301@gmail.com',
//     password: 'secret',
//     username: 'JHJ'
// }
// // 추가로 정보를 더하고 싶다.
// // formData.id = 123;
// // formData.isVerified = false;

// // const user = formData;
// // 이런식이면 user가 정보를 잘못입력해 formData를 다시 가져오라 하면
// // id등등 추가정보가 입력된 상태의 formData를 돌려줘서 곤란하다.

// // 스프레드를 이용하면?
// const newUser = {...formData, id: 123, fiVerified: false}
// // formData를 직접 수정하는 것이 아닌 스프레드로 나열을 해주면된다.

// ...nums를 파라미터로 지정하면 배열로 변환해준다.
// function sum(...nums) {
//     console.log(nums);
// }

// console.log(sum(1, 2, 3)); // [1, 2, 3]

// function sum(...nums) {
//     return nums.reduce((total, num) => total + num);
// }
// console.log(sum(1, 2, 3)); // 6


// function raceResults(gold, silver, ...rest) {
//     console.log(`금 : ${gold}`);
//     console.log(`은 : ${silver}`);
//     console.log(`그 외 : ${rest}`);
// }
// raceResults('황금', '은장', '동메달', '에메랄드');


// const scores = [923922, 545341, 217744, 477245, 543354, 123584];

// // 변수에 배열의 값을 넣으려면 하나하나 선언해서 하나하나 대입해줘야한다
// const firstScore = scores[0];
// const secondScore = scores[1];

// // 분할대입을 사용하면????
// const [ gold, silver, ...rest] = scores;
// // scores배열의 [0]번 요소가 gold에 [1]번 요소가 silver에 대입된다. (코드가 굉장히 나이스해짐)
// // 이전에 배운 나머지 매개변수를 이용하면 마지막 변수의 뒷요소가 출력된다 (위 문장에서는 [2])


// const user = {
//     email: 'lhslhs301@gmail.com',
//     password: 'abcdefg!!',
//     firstName: 'Jo',
//     lastName: 'HyeonJun',
//     born: 2000,
//     city: 'deagu',
//     state: 'Republic of Korea'
// }

// // const firstName = user.firstName;
// // const lastName = user.lastName;

// // const { firstName, lastName, email } = user;

// // const { born: birthYear } = user;

// const user2 = {
//     email: 'l8124@daum.net',
//     firstName: 'fukuyama',
//     lastName: 'kyouko',
//     born: 2002,
//     state: 'Japan'
// }

// // password는 user2에게 없다 password변수를 확인해보면 undefined
// // const {firstName, lastName, password} = user2;

// // default값을 줘서 해결 가능!
// // const {firstName, lastName, password = 'N/A'} = user2;

// // password에 default로 'N/A'를 정의했지만
// const { born: birthYear, password = 'N/A' } = user;

// // user는 password를 가지고있기때문에 원래 가지고있던 데이터가 password변수에 대입되었다.
// console.log(password); // abcdefg!!


// const user = {
//     email: 'lhslhs301@gmail.com',
//     password: 'abcdefg!!',
//     firstName: 'Jo',
//     lastName: 'HyeonJun',
//     born: 2000,
//     city: 'deagu',
//     state: 'Republic of Korea'
// }

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }
// console.log(fullName(user)); // Jo HyeonJun

// // 분할대입을 사용
// function fullName(user) {
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
// }
// console.log(fullName(user)); // Jo HyeonJun

// 파라미터에 분할대입을 할 수있다.(default도 설정가능)
// function fullName({firstName, lastName}) {
//     return `${firstName} ${lastName}`;
// }
// console.log(fullName(user)); // Jo HyeonJun


// const movies = [ 
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
    
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 2013
//     },
    
//     {
//         title: 'Parasite',
//         score: 92,
//         year: 2004
//     },
    
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1995
//     },
//     {
//         title: 'Attack On titan',
//         score: 100,
//         year: 2015
//     }
// ]
// // 분할대입을 사용하지않은 구문
// movies.filter(movie => movies.score >= 90);
// // 분할대입을 사용한 구문 score를 직접 가져오기에 movies.이 필요없다.
// movies.filter(({score}) => score >= 90);
// // 0: {title: 'Amadeus', score: 99, year: 1984}
// // 1: {title: 'Parasite', score: 92, year: 2004}
// // 2: {title: 'Alien', score: 90, year: 1995}
// // 3: {title: 'Attack On titan', score: 100, year: 2015}

// // 분할대입을 사용하지않은 구문
// movies.map(movie => {
//     return `${movie.title}(${movie.year}): ${movie.score}/100`;
// })
// // 분할대입을 사용한 구문
// movies.map(({title, year, score}) => {
//     return `${title}(${year}): ${score}/100`;
// })


// const add = function(x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }


// const square = (num) => {
//     return num * num;
// }

const rolldie = () => {
    return Math.floor(Math.random() * 10) + 1;
}