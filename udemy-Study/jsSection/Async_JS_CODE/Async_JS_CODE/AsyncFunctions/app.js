// async function hello() {

// }
// // hello()
// // Promise {<fulfilled>: undefined}

// const sing = async () => {
//     throw new Error('에러');
//     return 'some';
// }


// sing()
//     .then((data) => {
//         console.log('성공 : ', data);
//     })
//     .catch((err) => {
//         console.log('에러!!')
//         console.log(err);
//     })

const login = async (username, password) => {
    if(!username || !password) {
        throw new Error('유저명 또는 비밀번호가 없습니다.');
    }
    if (password === 'secret') {
        return '환영합니다.';
    }

    throw new Error('비밀번호가 다릅니다.')
}

login('hoge' , 'secret')
    .then(msg => {
        console.log('로그인 성공');
        console.log(msg);
    })
    .catch(err => {
        console.log('에러!!');
        console.log(err);
    });

