// const tweetForm = document.querySelector('#twForm');
// const tweetContainer = document.querySelector('#sd')
// tweetForm.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tw;
//     addTweet(usernameInput.value, tweetInput.value);

//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');

//     bTag.append(username);
//     newTweet.append(bTag);
//     newTweet.append(` - ${tweet}`);
//     tweetContainer.append(newTweet);
// }



// // 下の行は編集しないでください！
// const form = document.querySelector('form');
// const ul = document.querySelector('#list');
// // この下にコードを書いてください
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const prtValue = form.elements.product.value;
//     const qtyValue = form.elements.qty.value;
    
//     const li = document.createElement('li');
//     li.innerText = (`${prtValue} X ${qtyValue}`);
//     ul.appendChild(li);
// })

// 下の行は編集しないでください！
const form = document.querySelector('form');
const ul = document.querySelector('#list');
// この下にコードを書いてください
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const prtValue = form.elements.product;
    const qtyValue = form.elements.qty;
    
    const li = document.createElement('li');
    li.innerText = (`${prtValue.value} X ${qtyValue.value}`);
    ul.appendChild(li);
    prtValue.value = '';
    qtyValue.value = '';
})