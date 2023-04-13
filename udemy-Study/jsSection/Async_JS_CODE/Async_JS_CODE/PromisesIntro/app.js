// コールバック版
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('コネクションタイムアウト')
        } else {
            success(`ダミーデータ(${url})`)
        }
    }, delay)
}
// Promise版
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}


// fakeRequestCallback('naver.com/page1', function(response) {
//     console.log('성공!'); // 4초이내면 성공
//     console.log(response); // 성공!  ダミーデータ(naver.com/page1)
//     fakeRequestCallback('naver.com/page2', function(response) {
//         console.log('성공!2'); // 4초이내면 성공
//         console.log(response); // 성공!  ダミーデータ(naver.com/page2)
//         fakeRequestCallback('naver.com/page3', function(response) {
//             console.log('성공!3'); // 4초이내면 성공
//             console.log(response); // 성공!  ダミーデータ(naver.com/page3)
//         }, function(err) {
//             console.log('에러!3', err); // 4초가 지나면 실패
//         })
//     }, function(err) {
//         console.log('에러!2', err); // 4초가 지나면 실패
//     })
// }, function(err) {
//     console.log('에러!', err); // 4초가 지나면 실패
// })
// // 성공할지 실패할지는 잘 보는것이 중요하다.

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('성공!! 1');
        fakeRequestPromise('yelp.com/api/coffee/page2')
        .then(() => {
            console.log('성공!! 2');
            fakeRequestPromise('yelp.com/api/coffee/page3')
            .then(() => {
                console.log('성공!! 3');
                
            })
            .catch(() => {
                console.log('실패!! 3');

            });
            
        })
        .catch(() => {
            console.log('실패!! 2');

        });
        
    })
    .catch(() => {
        console.log('실패!! 1');
        
    })




