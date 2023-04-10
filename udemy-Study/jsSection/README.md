## classList
- 요소의 클래스를 추가, 제거, 전환 가능하다
- classList.add
  - 클래스를 추가하는 메서드
```js
const h2 = document.querySelector('h2');
// h2의 classList에 purple을 추가
h2.classList.add('purple');
```
- classList.remove
  - 클래스를 제거하는 메서드
```js
const h2 = document.querySelector('h2');
// h2의 classList에 들어있는 container를 삭제
h2.classList.add('container');
```

- classList.toggle
  - toggle(전환) 해당 클래스가 존재하면 삭제하고 없으면 추가한다.
```js
const h2 = document.querySelector('h2');
// purple은 위에서 추가했으니 삭제됨
h2.classList.toggle('purple');
// container는 위에서 삭제되어 없으니 추가됨
h2.classList.toggle('container');
```

## 부모, 형제, 자식에 관한 프로퍼티
- parentElement
  - 선택한요소.parentElement -> 요소의 부모요소를 반환
- children
  - 선택한요소.children[n] -> 요소의 n번째 자식을 반환
- nextSibling
  - 선택한요소.textSibling -> 형제를 반환하지만 node로 반환하기때문에 정확히는 형제node를 반환
- nextElementSibling
  - 선택한요소.nextElementSibling -> 선택한요소의 다음 요소를 반환 (node아님)
- previousElementSibling
  - 선택한요소.previousElementSibling -> 선택한요소의 이전 요소를 반환
**예제를 올리고싶지만 사진을 업로드하기 힘들다.. 잘 모를땐 다시 예제를보며 실습해보자**


## append와 appendChild  

### appendChild
- 요소를 만들어보자
```js
const newH3 = document.createElement('추가할 요소의 태그'); // 여기서는 h3를 넣었다고 가정
```
- 요소가 추가되었다! 하지만 h3가 추가되었을뿐 내용물은 텅텅비어있다. 내용을 추가해보자!
```js
newH3.innerText = '감자튀김 최고!';
```
- 이렇게 h3에 내용까지 추가되었지만 아직 이 요소의 위치를 지정해주지않았다!
```js
- document.body.appendChild(newH3);
```
- body의 최후미에 '감자튀김 최고'라는 text를 가진 h3요소를 추가하였다!

### append
```js
// 단락요소 p를 선택
const p = document.querySelector('p');
// append는 이런식으로 만들 요소를 지정하지도 내용을 따로 정의하지도 위치를 따로 정의하지도않아도된다.
p.append('キム・ヒョンさんは', '本当にいい人です。'); // 첫번째 p요소의 최후미에 추가
```


