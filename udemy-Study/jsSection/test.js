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

const cat = {
    name:   `Tama`,
    age:    `2`,
    colors: [`orange`, `white`],
    isHungry:   true
}

console.log(cat[`name`])
console.log(cat.isHungry)

const years = {
    1999:   `good`,
    2000:   `bad`
}

console.log(years[1999])


