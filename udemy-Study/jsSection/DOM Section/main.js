// const btn = document.querySelector('#v2');

// btn.onclick = function() {
//     console.log('클릭했다.');
//     console.log('ㅋㅋ~');
// }

function scream() {
    console.log('으아아아아아아아아악');
    console.log('이야아아아아아아아악');
}

// btn.onmouseenter = scream;

// document.querySelector('h1').onclick = function() {
//     alert('h1을 클릭');
// }

const btn3 = document.querySelector('#v3');
// 이벤트의 종류 : click시 / 실행하는 콜백함수
btn3.addEventListener('click', scream)


function hoge() {
    console.log('hoge');
}

function moge() {
    console.log('moge');
}

const btn4 = document.querySelector('#v4');
// btn4.onclick = hoge;
// btn4.onclick = moge;

btn4.addEventListener('click', hoge, {once: true});
btn4.addEventListener('click', moge, {once: true});

