document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(e) {
//     console.log(`key: ${e.key}`); // 눌린 키의 문자
//     console.log(`code: ${e.code}`); // 눌린 키가 어느위치의 키인지
// })
// input.addEventListener('keyup', function() {
//     console.log('키업');
// })

window.addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'ArrowUp':
            console.log('위');
            break;
        case 'ArrowDown':
            console.log('아래');
            break;
        case 'ArrowLeft':
            console.log('왼쪽');
            break;
        case 'ArrowRight':
            console.log('오른쪽');
            break;
        default:
            console.log('그외의 키')
    }
})
