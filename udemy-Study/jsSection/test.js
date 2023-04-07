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


const movies = [ 
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    
    {
        title: 'Stand By Me',
        score: 85,
        year: 2013
    },
    
    {
        title: 'Parasite',
        score: 95,
        year: 2004
    },
    
    {
        title: 'Alien',
        score: 90,
        year: 1995
    },
    {
        title: 'Attack On titan',
        score: 95,
        year: 2015
    }
]

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


