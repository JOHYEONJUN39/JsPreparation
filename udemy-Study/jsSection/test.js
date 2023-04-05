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

const testScores = {
    ken: 80,
    yuki: 67,
    taro: 89,
    ryota: 91,
    yuko: 74,
    chiaki: 96,
    koki: 60,
    saeko: 69,
    kota: 99
}

// for (let x of testScores) {
//     console.log(x);
// }
// 오류!
// 오브젝트는 원래 열거가능한 요소가 아니라 for...of로 호출 불가능

// Object.keys는 오브젝트의 키값을 배열로 만들어준다.
console.log(Object.keys(testScores));
// ['ken', 'yuki', 'taro', 'ryota', 'yuko', 'chiaki', 'koki', 'saeko', 'kota']

// 배열로 바뀐 testScores의 길이만큼반복 , key값(지금은 이름)을 student에 저장
for (let student of Object.keys(testScores)) {
    // {이름}씨는 {데이터}(오브젝트 접근법을 사용)
    console.log(`${student}씨는${testScores[student]}`);
}
