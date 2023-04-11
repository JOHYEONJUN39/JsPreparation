// 내 코드
// const h1 = document.querySelector('#rgb');
// const button = document.querySelector('#change');

// button.addEventListener('click', function() {
//     const random1 = Math.floor(Math.random() * 256);
//     const random2 = Math.floor(Math.random() * 256);
//     const random3 = Math.floor(Math.random() * 256);
    
//     h1.innerText = `${random1}, ${random2}, ${random3}`;
//     document.body.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
// })

const h1 = document.querySelector('#rgb');
const button = document.querySelector('#change');


// 강사님의 코드
button.addEventListener('click', function() {
    const newColor = makeRandomColor();

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}