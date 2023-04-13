const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
}

// ul에 event를 추가
tweetsContainer.addEventListener('click', function(e) {
    // // nodeName이외에도 tagName등 event요소에 여러가지있다 잘 보고 골라쓰자
    // if (e.target.nodeName === 'LI') {
    //     e.target.remove();
    // }
    // // 만약 B태그를 눌렀을때도 remove를 하고싶으면
    // else if (e.target.nodeName === 'B') {
    //     // (B)의 부모는 LI
    //     e.target.parentElement.remove();
    // }
    // // 위 조건문을 간단하게 생략하면
    // // e.target.nodeName === 'LI' && e.target.remove();

    if (e.target.nodeName === 'LI' || e.target.nodeName === 'B') {
        // target의 가장 가까이있는 요소를 가져온다.
        e.target.closest('LI').remove();
    }
})










// tweetsContainer.addEventListener('click', function (e) {
//     // if (e.target.nodeName === 'LI') {
//     //     e.target.remove();
//     // } else if (e.target.nodeName === 'B') {
//     //     e.target.parentElement.remove();
//     // }
//     // e.target.nodeName === 'LI' && e.target.remove();

//     if (e.target.nodeName === 'LI' || e.target.nodeName === 'B') {
//         e.target.closest('LI').remove();
//     }
// })


