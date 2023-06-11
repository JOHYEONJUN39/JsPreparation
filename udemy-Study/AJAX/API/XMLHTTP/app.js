
// 사용할 api
// https://swapi.dev/api/people/1/

const req = new XMLHttpRequest();

// 성공했을 경우
req.onload = function() {
    console.log("성공");
    const data = JSON.parse(this.responseText);
    console.log(data.name);
}
// 실패했을 경우
req.onerror = function() {
    console.log("실패");
    console.log(this);
}
// 오픈
req.open('GET', "https://swapi.dev/api/people/1/");
// 송신
req.send();
