## 리퀘스트

- 웹사이트에서 새로고침, 링크 등 클릭했을때 항상 리퀘스트를 받는다.
- 자바스크립트에서 리퀘스트를 받는것을 AJAX 라는 용어를 사용한다.
  - Asynchronous Javascript And XML
- XML
  - 웹사이트를 표시하고있는 뒤편에서 리퀘스트를 날려서 정보를 송신, 수신하는것을 말한다.
  - 개발자도구(네트워크)에서 리퀘스트 목록을 볼 수 있다.

### API
- 어플리케이션 프로그래밍 인터페이스
- http에서의 정보를 주고받기위해 리퀘스트를 던지는 것

## JSON
- html, css와 같은 사람이 보기쉽게 만들어진 정보 js와 같이 움직임을 주는 것이 아닌
  순수하게 데이터만이 포함되어있음
- JSON이 등장하면서 XML을 그다지 사용하지않게됨 (사실 AJAX가아닌 AJAJ로 바뀌었는데 에이자X 라고부를수는 없으니..)
- JSON은 Java Script Object Notation의 약자
```json
{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true
}
```
- 위와같은 모양을 하고있지만 javascript의 오브젝트랑은 전혀 다르다.
- json에도 키, 값이 있지만 **json은 키값을 반드시 더블코트("")를 사용해야한다**.
- **json에는 undefined라는 값이 없다.**
- python, ruby등 어디든 json을 사용할 수 있다. (js에서만 사용가능하다는 오해가 자주있음)

### JSON.parse()
- JSON 텍스트(String)을 자바스크립트의 오브젝트로 변경시켜주는 메소드.

### JSON.stringify
- API에 정보를 보낼때 사용
- API에 자바스크립트의 오브젝트를 그대로 보낼 수 없기때문에 JSON으로 변경해준다.
```js
let dog = {name: 'pochi', colors: ['orange'], isAlive: true, owner: undefined}
console.log(JSON.stringify(dog))
// {"name":"pochi","colors":["orange"],"isAlive":true}
// undefined
```
- 규정으로인해 undefined는 JSON에 담을 수 없다.
- 오브젝트내에서 undefined가 발견되면 생략되고
- 배열에서 발견되면 null로 변경된다.


### POST MAN, HOPPSCOTCH
- API에 리퀘스트를 날릴때 편리한 툴

## javascript에서 리퀘스트를 날려보자
1. XMLHttpRequest
 - 가장 오래된 기술 (앞으로 사용할일 없음)
```js
// 리퀘스트 생성
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
```
1. FETCH
 - JavaScript에서 리퀘스트를 던지는 모던한 방법
 - Promise를 서포트하고있다.
 - Internet Explorer 사용불가능

```js
// fetch에 url을 적는것만으로도 리퀘스트를 던질 수 있다.
fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        // res는 아직 body가 없기 때문에 json을 불러줄 필요가있다.
        console.log("RESOLVE", res);
        // promise를 반환
        return res.json()
    })
    // 다시한번 then 
    .then((data) => {
        // 이번에야말로 데이터를 획득했다.
        console.log(data);
        // 2번째 데이터를 resolve
        return fetch("https://swapi.dev/api/people/2/")
    })
    .then((res) => {
        // 2번쨰 resolve 아직 body에서 데이터 안가져옴
        console.log("2번째 RESOLVE", res);
        // json() promise 반환
        return res.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("에러", err);
    })
```
promise를 사용하기때문에 async, await을 이용해 위 과정을 아래와같이 깔끔하게 구현가능하다.
```js
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch(e) {
        console.log("에러", e);
    }
    
}

loadStarWarsPeople();
```

## AXIOS
- HTTP리퀘스트용 외부 라이브러리
- json을 불러오는 과정을 거칠 필요없이 반환하는 promise의 data에 들어있다.
```js
axios.get("https://swapi.dev/api/people/1/")
// AXIOS의 경우 json을 불러올 필요가 없다.
.then(res =>  {
    console.log("RESOLVE", res)
})
.catch(e => {
    console.log("에러", e)
})
```
마찬가지로 async, await을 이용해 깔끔하게 가능
```js
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch(e) {
        console.log("에러", e);
    }
}

getStarWarsPerson(5);
getStarWarsPerson(10);
```

### Axios로 HTTP헤더를 설정
- Axios 리퀘스트에 헤더를 추가 (api에 따라 다르다.)
```js
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: "application/json"
            }
        }
        // header를 바꾼다고해서 결과가 달라지는건 api에따라 다르기떄문에 모든 api에 적용되지않음
        const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    
        return res.data.joke;
    } catch(e) {
        console.log("에러", e)
    }
    
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener('click', addNewJoke);
```
- **공개된 api를 사용할때는 request를 너무많이하지않도록 조심**