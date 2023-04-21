## JSX기법의 룰을 알아보자
- 규칙은 외우는수밖에 없다.

- react를 불러온다.
```js
import React from "react";
import ReactDom from "react-dom";
```

- root id를 읽어와서 읽는다(render)
```html
<div id="root"></div>
```
```js
ReactDom.render(<App />, document.getElementById("root"));
```

- 자바스크립트안에 return해서 그 안에 html코드를 쓰는게 JSX기법
```js
const App = () => {
    return (<h1>안녕하세요</h1>;)
}
```

- **에러!**
- JSX의 기법의 룰로 return하는 html의 코드는 하나로 묶어야한다.
```js
const App = () => {
  return (
    <h1>머고</h1>
    <p>머선129</p>
  );
};
```
- 이런식으로 div로 감싸던 하나의 태그의 안에 다른 태그가있어야한다..
```js
const App = () => {
  return (
    <div>
      <h1>머고</h1>
      <p>머선129</p>
    </div>
  );
};
```

- 아무기능도없이 에러를 회피하기위해 React.Fragment를 하나의 테두리로 사용가능하다.
```js
const App = () => {
  return (
    <React.Fragment>
      <h1>머고</h1>
      <p>머선129</p>
    </React.Fragment>
  );
};
```

- 세상이 좋아져서 아무것도안쓰면 React.Fragment와 동일한기능을 한다.
```js
const App = () => {
  return (
    <>
      <h1>머고</h1>
      <p>머선129</p>
    </>
  );
};
```

## 컴포넌트의 사용법을 알아보자

- App.js라는 파일을 새로 만든다. (기존에는 index.js사용)
- **App.js**
```js
import React from 'react';
// App 이라는 함수를 작성했다.
const App = () => {
    return (
        <>
         <h1>머고</h1>
         <p>머선129</p>
        </>
    );
};
export default App;
```
**export default**
1. 일반적으로 해당 모듈엔 하나의 개체(변수, 클래스, 함수 등)만 있다는 의미로 받아들여진다. 

2. 따라서 해당 모듈의 전체 개체를 export 한다는 의미를 갖는다.

3. 원하는 이름으로 import가 가능하다.(ex. import ThisIsSample from "경로")

**export**
1. 복수의 개체가 있는 라이브러리 형태의 모듈에서 가져오기 할 때 사용된다.

2. 특정 개체만 가져오는게 가능하다. 

3. 원하는 이름으로 import가 불가능하다.

- **index.js**
```js
import App from './App';
```
- 정의한 함수를 export해서 다른파일에서 import해서 사용가능하다.

- **컴포넌트 이름은 반드시 첫글자가 대문자!!(파스칼 케이스로 작성)**

### 이벤트를 추가해보자
- React에서는 html태그에 카멜케이스를 이용해 이벤트를 추가하는것이 가능하다.
```js
const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1>머고</h1>
      <p>머선129</p>
      // 버튼 클릭시 onclickButton함수 호출 
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
```
### 스타일을 적용해보자

```js
const App = () => {
  const onClickButton = () => alert();
  // 오브젝트를 선언
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  return (
    <>
            // {{}} <-의미는 {자바스크립트를{오브젝트} 사용하겠다.}
            // 이런식으로 직접 스타일을 줘도되지만 따로 오브젝트를 선언해도된다.
      <h1 style={{ color: "red" }}>머고</h1>
      // 선언한 오브젝트를 사용
      <p style={contentStyle}>머선129</p>
      <button onClick={onClickButton}>버튼</button>
    </->
  );
};
```


## Props 
- 컴포넌트에 건네는 인수와 같은 것

```jsx
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px",
  };
  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <p style={contentStyle}>머선129</p>
      <p style={contentLadyStyle}>머선129</p>
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
```
- 이런식으로 새로운 스타일을 적용할때마다 귀찮아진다..
- 컴포넌트화해서 색과 문장을 props로 받아보자
- 새롭게 jsx파일을 만든다.
**ColorfullMessage.jsx**
```jsx
import React from "react";

const ColorfullMessage = () => {
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px",
  };
  return <p style={contentLadyStyle}>안녕하세요</p>;
};

export default ColorfullMessage;
```
**App.js**
```jsx
import React from "react";
// ColorfullMessage를 import한다.
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <p style={contentStyle}>머선129</p>
      // 태그로 사용가능
      <ColorfullMessage />
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};

export default App;
```

- 이대로면 분홍색 `안녕하세요`만 계속 사용할 수 밖에 없다.
- props로 조건을 넘겨 동적으로 바꿔보자

**App.js**
```jsx
import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <p style={contentStyle}>머선129</p>
      // ColorfullMessage뒤에 오브젝트에 들어갈 내용을 정의한다고 생각하면 편하다.
      <ColorfullMessage color="pink" message="안녕하세요" />
      <ColorfullMessage color="blue" message="하하핳핳핳" />
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};

export default App;
```

**ColorfullMessage.jsx**
```jsx
import React from "react";

const ColorfullMessage = (props) => {
  console.log(props); (props에는 위에서 정의한 오브젝트가 들어있다.)
  const contentLadyStyle = {
    color: props.color, (props.color의 경우 App.js에서 pink로 정의했기때문에 pink가된다.)
    fontSize: "18px",
  };
  (props.message의 경우 App.js에서 "안녕하세요"로 정의했기떄문에 안녕하세요가된다.)
  return <p style={contentLadyStyle}>{props.message}</p>;
};

export default ColorfullMessage;
```

**children**
- ColorfullMessage에 props.message를 이용하여 문자를 보여주고있지만
p태그이기때문에 굳이 message를 지정해주지않고 사용할 수 있다.


```jsx
const App = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <ColorfullMessage color="blue">하하핳핳핳</ColorfullMessage>
      <ColorfullMessage color="pink">안녕하세요</ColorfullMessage>
    </>
  );
};
```
- 위와같이 html태그와같이 /ColorfullMessage로 닫아 내용을 넣는다.
- message=""는 불필요해졌기에 삭제  

**ColorfullMessage.jsx**
```jsx
const ColorfullMessage = (props) => {
  console.log(props);
  const contentLadyStyle = {
    color: props.color,
    fontSize: "18px",
  };
  return <p style={contentLadyStyle}>{props.children}</p>;
};
```
- props.children을 사용하면 <ColorfullMessage\>여기에 들어간</ColorfullMessage>값을 불러온다.

*응용*
**ColorfullMessage**
- 분할대입을 이용해 코드를 깔끔하게 정리
```jsx
const ColorfullMessage = (props) => {
    (props에서 color, children을 불러와 변수처럼 사용)
  const { color, children } = props;
  console.log(props);
  const contentLadyStyle = {
    (Javascript에서는 오브젝트에 키와 데이터의 이름이 같으면 한쪽은 생략이 가능하다 (태크닉))
    color, // color: color, 가 생략됨 
    fontSize: "18px",
  };
  return <p style={contentLadyStyle}>{children}</p>; (props. 를 붙이지않아도된다!)
};
```


## State
- 각 컴포넌트가 가지고있는 상태状態
- 조건에 따라 동적으로 변하는 부분을 State로 정의가능.

```js
// react안에 useState가 있기떄문에 분할대입으로 불러온다.
import React, { useState } from "react";

const App = () => {
  const onClickCountUp = () => {
    // 
    setNum(num + 1);
  };
  // 분할대입으로 useState에서 꺼낸다
  // num은 state로 사용될 변수명 (변수명은 자유)
  // setNum은 state를 변경하기위한 함수
  // useState에 초기값 설정가능
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <ColorfullMessage color="blue">하하핳핳핳</ColorfullMessage>
      <ColorfullMessage color="pink">안녕하세요</ColorfullMessage>
      버튼 클릭시 onClickCountUp 함수 호출
      <button onClick={onClickCountUp}>카운트업</button>
      <p>{num}</p>
    </>
  );
};
```

```js
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    // true인 useState를 false로 변경 false를 true로 변경
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <ColorfullMessage color="blue">하하핳핳핳</ColorfullMessage>
      <ColorfullMessage color="pink">안녕하세요</ColorfullMessage>
      <button onClick={onClickCountUp}>카운트업</button>
      <p>{num}</p>
      <br />
      // 버튼클릭시 onClickSwitchShowFlag 함수 호출
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      // 조건문 진짜의미에서 배운 &&는 왼편의 값이 true면 오른편을 반환
      {faceShowFlag && <p>Σ(ﾟДﾟ)</p>}
    </>
  );
};
```
- 새로고침도 안했는데 어떻게 화면이 바뀔까
- 그건 재 랜더링을 했기 때문
- 재 랜더링이란 React에서 특정조건이 성립하면(State변경등) 말그대로 재 랜더링 (App 함수를 재 실행한다.)
- 버튼을 누르면 이모티콘을 표시하는 useState가 false로 바뀌고 페이지가 재 랜더링된다.  
 
**카운트다운(num)이 3일때만 이모티콘을 표시해보자**
```jsx
const App = () => {
  const [num, setNum] = useState(0);

  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

    // 0일때 표시하지않도록 미리 걸러준다.
  if (num > 0) {
    // 3의 배수일때만 표시되도록 조건을 걸어줌
    if (num % 3 === 0) {
        // 이모티콘 표시!
      setFaceShowFlag(true);
    } 
    // 표시 X
    else {
      setFaceShowFlag(false);
    }
  }

  return (
    <>
      <button onClick={onClickCountUp}>카운트업</button>
      <p>{num}</p>
      <br />

      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>Σ(ﾟДﾟ)</p>}
    </>
  );
};
```

**에러!!! Too many re-renders!!**
- 너무많은 재랜더링이 일어나고있어서 에러가났다.
- 조건에 만족한 행동을 할때마다 State의 값이 변경되어 페이지가 재 랜더링되는 불상사가 일어나버린 것..
- 조건문을 이용해 에러를 막아보자
```jsx
if (num > 0) {
    if (num % 3 === 0) {
        // 왼쪽이 false일때 오른쪽을 반환
      faceShowFlag || setFaceShowFlag(true);
    } 
    // 왼쪽이 true면 오른쪽을 반환
    else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }
```
- 이런식으로 State의 값이 필요할때만 변경되어 재랜더링되게되었다.  



