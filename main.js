// .box라는 css선택자를 통해서 HTML부분에서 특정요소를 찾아 boxEL에 할당을 한다.
// let boxEL = document.querySelector(`.box`);

// console.log(boxEL);

// // HTML 요소(Element) 1개 검색/찾기
// // document라는 객체의 querySelector라는 메서드를 사용
// // HTML에서 .box선택자가 해당되는 요소를 boxEL변수에 담는다.
// // querySelector라는 메서드는 선택자를 통해 찾을 수 있는 요소중 하나만 반환
// const boxEL = document.querySelector(`.box`);

// // HTML 요소에 적용할 수 있는 메서드
// // addEventListener는 2개의 인수를 추가 가능
// boxEL.addEventListener();

// // 인수(Arguments)를 추가 가능
// boxEL.addEventListener(1, 2);

// // 1 - 이벤트(Event, 상황)
// // 첫번째 인수는 어떠한 이벤트를 추가 가능
// // click의 경우 브라우저에서 click이라는 상황발생시 함수를 실행한다.
// boxEL.addEventListener(`click`, 2);

// // 2 - 핸들러(Handler, 실행할 함수)
// // 익명의 함수를 표현해 실행가능 이러한 함수를 핸들러(Handler)라고 부른다.
// boxEL.addEventListener(`click`, function(){
//     console.log(`click!`);
// });

// let boxEL = document.querySelector(`.box`);

// console.log(boxEL);

// boxEL.addEventListener(`click`, function() {
//     console.log(`CLICK!`);
// });

// // document라는 브라우저에서 제공하는 객체 정보의
// // querySelector라는 HTML요소를 검색하고 찾아주는 메서드를 입력
// // .box라는 클래스를 가지고있는 요소를 찾아서 boxEL에 반환이된다.
// const boxEL = document.querySelector(`.box`);

// // classList = 요소의 클래스(div class = "이런거") 정보 객체 활용
// // .box의 classList에 `active`를 추가
// boxEL.classList.add(`active`);
// // classList안에 contains(포함되어있는가?) 무엇이? (`active`)가
// let isContains = boxEL.classList.contains(`active`);
// // 포함되어있으니 true를 반환
// console.log(isContains); // true

// // classList의 `active` 삭제
// boxEL.classList.remove(`active`);
// // 포함되어있는가?
// isContains = boxEL.classList.contains(`active`);
// // 삭제되어 없으니 false를 반환
// console.log(isContains); // false
// let boxEL = document.querySelector(`.box`);

// boxEL.addEventListener(`click`, function() {
//         console.log(`CLICK!`);
//         boxEL.classList.add(`active`);
//         console.log(
//             boxEL.classList.contains(`active`)
//         );
//         boxEL.classList.remove(`active`);
//         console.log(
//             boxEL.classList.contains(`active`)
//         );
//     });

// // 하나만 반환하는 querySelector와달리 querySelectorAll은 모든 요소를 반환한다.
// const boxEls = document.querySelectorAll(`.box`);
// console.log(boxEls);

// // forEach메서드 = 찾은 요소들 반복해서 함수 실행
// // 익명 함수를 인수로 추가
// boxEls.forEach(function() {} );

// // 첫 번째 매개변수(boxEl): 반복 중인 요소 . 이름바꿔도 상관없음
// // 두 번째 매개변수(index): 반복 중인 번호 . 보통 index로 사용
// boxEls.forEach(function (boxEl, index) {});

// // 출력
// // forEach로 익명의 함수를 반복 실행
// // 익명의 함수는 한번 실행될때마다 boxEl, index라는 매개변수로
// // 내부에서 로직을 추가할 수 있다.
// boxEls.forEach(function (boxEl, index) {
//     boxEl.classList.add(`order-${index + 1}`);
//     console.log(index, boxEl)
// });

// const boxEl = document.querySelector(`.box`);

// // Getter, 값을 얻는 용도
// // textContent -> 값을 얻는, 지정하는 용도로 사용
// console.log(boxEl.textContent);

// // Setter, 값을 지정하는 용도
// boxEl.textContent = `TEXT`;
// console.log(boxEl.textContent);

// const boxEl = document.querySelector(`.box`);

// console.log(boxEl.textContent);

// boxEl.textContent = `Hell`;
// console.log(boxEl.textContent);

// const a = `Hello~`;

// // split: 문자를 인수 기준으로 쪼개서 배열로 반환.
// // reverse: 배열을 뒤집기.
// // join: 배열을 인수 기준으로 문자로 병합해 반환
// const b = a.split(``).reverse().join(``); // 메서드 체이닝

// console.log(a); // Hello~
// console.log(b); // ~olleH
// console.log(a[0]); // H

// boxEl 요소에 클릭 이벤트를 추가해 클릭 시 `Hello~`를 콘솔 출력하시오
// const boxEl = document.querySelector(`.box`);

// boxEl.addEventListener(`click`, function() {
//     console.log(`Hello~`)
// })

// <div>1</div>
// <div>2</div>
// 위 2개의 DIV 요소에 JS로 class="hello"를 추가하시오

// const boxEl = document.querySelectorAll(`div`);
// boxEl.forEach(function(boxEl) {
//     boxEl.classList.add(`hello`);
// })

// `Hello`.split(``).reverse().join(``);
// 위와 같이, 메서드를 이어 작성하는 방법을 무엇이라 하는가?
// 메서드 체인
// const a = `조현준`;

// const b = a.split(``).reverse().join(``);

// console.log(b);

// const boxEl = document.querySelector(`.box`);
// 위 코드의 boxEl 요소에 HTML 클래스 속성의
// 값으로 `active`가 포합되어 있으면
// `포함됨!`을 콘솔 출력하시오.

// const boxEl = document.querySelector(`.box`);
// boxEl.classList.add(`active`);
// if (boxEl.classList.contains(`active`)) {
//     console.log(`포함됨`);
// }

// const a = `Hello!`;

// const b = a.split(``).reverse().join(``);

// console.log(b);

// NVM
// Node.js 버전관리 프로그램
// -설치완료- 실행시 아래 명령어 터미널 입력
// source ~/.nvm/nvm.sh

// NPM
// NPM은 전 세계의 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리.
// 100만개 이상의 패키지가 들어있음.
// 이미 완성되어있는 기능을 모듈처럼 활용가능.