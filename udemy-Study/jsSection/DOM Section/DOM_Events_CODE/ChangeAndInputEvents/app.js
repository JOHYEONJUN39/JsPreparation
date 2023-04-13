const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// input.addEventListener('change', function(e) {
//     console.log('change');
// })

input.addEventListener('input', function(e) {
    // 입력때마다 이벤트가 발생
    h1.innerText = input.value; // 그때마다 input.value를 h1에 대입
})