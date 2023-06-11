const form = document.querySelector("#searchForm");
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // 검색의 input에서 값을 가져온다.
    const searchTermInput = form.elements.query;
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, {
        // params에 적은 키와 값은 axios로 리퀘스트를 날렸을때 쿼리 스트링으로서 url에 들어가게된다.
        params: {
            q: searchTermInput.value
        }
    });
    // 데이터를 makeImage 파라미터로 사용
    makeImages(res.data)
    searchTermInput.value = "";
});

const makeImages = (results) => {
    // 루프를 해서 이미지를 추가
    for(let result of results) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium
            document.body.append(img);
        }
    }
} 