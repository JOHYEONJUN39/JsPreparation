
// // fetch에 url을 적는것만으로도 리퀘스트를 던질 수 있다.
// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         // res는 아직 body가 없기 때문에 json을 불러줄 필요가있다.
//         console.log("RESOLVE", res);
//         // promise를 반환
//         return res.json()
//     })
//     // 다시한번 then 
//     .then((data) => {
//         // 이번에야말로 데이터를 획득했다.
//         console.log(data);
//         // 2번째 데이터를 resolve
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then((res) => {
//         // 2번쨰 resolve 아직 body에서 데이터 안가져옴
//         console.log("2번째 RESOLVE", res);
//         // json() promise 반환
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("에러", err);
//     })

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