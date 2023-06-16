// axios.get("https://swapi.dev/api/people/1/")
// // AXIOS의 경우 json을 불러올 필요가 없다.
// .then(res =>  {
//     console.log("RESOLVE", res)
// })
// .catch(e => {
//     console.log("에러", e)
// })

// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch(e) {
//         console.log("에러", e);
//     }
// }

// getStarWarsPerson(5);
// getStarWarsPerson(10);

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