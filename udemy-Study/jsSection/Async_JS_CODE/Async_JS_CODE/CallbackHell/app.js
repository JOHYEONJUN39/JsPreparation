// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         // 함수를 잘 받았는지 체크
//         doNext && doNext();
//     }, delay);
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('purple', 1000, () => {
        
//                     });
//                 });
//             });
//         });
//     });
// });

// 영화를 검색하는 함수가 있다고 치고 귀멸의 칼날을 검색하고싶다고 치자
// 그럼 검색이 끝나고 실행하고싶은 처리가 있다고 치고 call back함수를 넘겨준다.
// 그리고 그걸 내 DB에 저장하고싶다고 치자
// saveToMyDB에 검색결과로 나온 movies를 보존한다.
searchMovieAPI('귀멸의 칼날', (movies) => {
    // 검색에 성공했을 경우의 처리

    // DB를 보존하는데도 시간이 걸린다고 치자
    // 그 안에 또 call back함수를 넘겨준다.
    saveToMyDB(movies, () => {
        // 보존을 성고했을 경우의 처리

    }, () => {
        // 보존을 실패했을 경우의 처리

    })
}, () => {
    // 검색에 실패했을 경우의 처리
})
