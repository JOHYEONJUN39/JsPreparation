const password = prompt('패스워드를 입력.')

if (password.length >= 6) {
    console.log(`패스워드 길이가 적당합니다.`);
    if (password.indexOf(` `) === -1) {
        console.log(`공백이 없는 훌룡한 패스워드입니다.`);
    }
    else {
        console.log(`공백이 있습니다 제거해주세요.`);
    }
}
else {
    console.log(`패스워드가 너무 짧습니다. 6글자 이상 입력`);
}



