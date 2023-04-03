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

let movieLine = [`yamada`, `tanaka`];
// 배열 끝에 추가
movieLine.push(`satou`);
movieLine.push(`nakamura`, `kimura`);
// 배열 끝 요소 제거
movieLine.pop();
// 배열 첫 요소 제거
movieLine.shift();
// 배열 시작에 추가
movieLine.unshift(`miku`);



console.log(movieLine);