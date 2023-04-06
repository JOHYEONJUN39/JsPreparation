## todo list 만들어보기

1. 커맨드를 입력받는다 (prompt)
2. new를 입력하면 todo에 넣을 값을 받는다
 - 새 todo를 입력받는다
 - todo는 배열로 받는다
 - 받은 후에 메뉴로 돌아간다
3. list를 입력하면 todo를 표시
 - index + todo 를 표시
4. delete입력시 삭제
 - splice메서드를 사용해서 삭제
 - 입력값 해피엔딩
5. quit입력시 종료

```js
// 1. 커맨드를 입력받는다 (prompt)
let quit = true;
const todo = [];
while(quit === true) {
    
    let userInput = prompt('커맨드를 입력해주세요 유효 커맨드 : new, list, delete, quit')

    // 2. new를 입력하면 todo에 넣을 값을 받는다
    //  - 새 todo를 입력받는다
    //  - todo는 배열로 받는다
    //  - 받은 후에 메뉴로 돌아간다
    if (userInput === 'new') {
        todo.push(prompt('추가할 todo를 입력해 주세요.'));
    }

    // 3. list를 입력하면 todo를 표시
    //  - index + todo 를 표시
    else if (userInput === 'list') {
        for (let i = 0; i < todo.length; i++ ) {
            console.log(`[${i}] : ${todo[i]}`);
        }
    }

    // 4. delete입력시 삭제
    //  - splice메서드를 사용해서 삭제
    else if (userInput === 'delete' ) {
        todo.splice(parseInt(prompt('삭제할 index를 입력해 주세요.')), 1);
    }
    
    else if (userInput === 'quit') {
        break;
    }
} 
```