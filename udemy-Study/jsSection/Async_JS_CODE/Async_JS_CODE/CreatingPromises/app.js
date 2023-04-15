// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('ダミーデータです');
//                 return;
//             }
//             reject('コネクションタイムアウト');
//         }, 1000)
//     });
// }

// fakeRequest('/hoge')
//     .then((data) => {
//         console.log('成功！！！！');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('エラー！！！', err);
//     });




// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });



// delayedColorChange('red', 1000)
//     // 이렇게 써도됨
//     // .then(() => {
    //     //     return delayedColorChange('orange', 1000);
    //     // }) 
    //     // return값이 하나기때문에 아래와같이 화살표함수의 암묵적리턴을 사용해도된다.
    //     .then(() => delayedColorChange('orange', 1000))
    //     .then(() => delayedColorChange('yellow', 1000))
    //     .then(() => delayedColorChange('green', 1000))
    //     .then(() => delayedColorChange('blue', 1000))
    //     .then(() => delayedColorChange('indigo', 1000))
    //     .then(() => delayedColorChange('violet', 1000))
    //     // 여기선 문제생길일이 없지만 문제가 생기면 여기에 .catch
    
    
// const delayedColorChange = (color, delay) => {
//     // Promise object 생성
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             // 성공을 알린다.
//             resolve();
//         }, delay)
//     })
// }

// async function rainbow() {
//     // await은 반드시 async 함수에서만 사용가능하다
//     // delayedColorChange의 promise가 resolve되거나 reject되기를 await(기다린)다.
//     await delayedColorChange('red', 1000);
//     await delayedColorChange('orange', 1000);
//     await delayedColorChange('yellow', 1000);
//     await delayedColorChange('green', 1000);
//     await delayedColorChange('blue', 1000);
//     await delayedColorChange('indigo', 1000);
//     await delayedColorChange('violet', 1000);
// }   

// // rainbow()
// //     .then(() => {
// //        console.log('레인보우 끝'); 
// //     });

// async function printRainbow() {
//     await rainbow();
//     console.log('레인보우 끝');
// }

// printRainbow();

const fakeRequest = (url) => {
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

async function makeRequest() {
    try{
        // fakeRequest가 reject하면 catch로 날아간다.
        const data1 = await fakeRequest('/hoge1');
        console.log(`data1 : ${data1}`); // 'ダミーデータ(/hoge1)'
        // fakeRequest가 reject하면 catch로 날아간다.
        const data2 = await fakeRequest('/hoge2');
        console.log(`data1 : ${data2}`); // 'ダミーデータ(/hoge2)'
    }
    catch(e){
        console.log('에러 발생!!');
        // e는 promise가 reject되었을때 반환하는 값.
        console.log(e); // 'コネクションタイムアウト'
    }
    
}

makeRequest();

