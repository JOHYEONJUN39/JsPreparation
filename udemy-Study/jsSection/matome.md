## 배열의 등가성 配列の等価性

```js
[`h1`, `bye`] === [`h1`, `bye`]; -> false
배열을 비교할때는 메모리 주소값을 비교하기때문에 내용물은 중요하지않다.  

let nums = [1, 2, 3];
   
let numsCopy = nums;
// nums배열의 **주소를** numsCopy에게 넘겨준다.  
- 
nums.push(4); (배열 끝에  요소추가)  
  
console.log(numsCopy); // -> [1, 2, 3, 4]  
// 분명 nums에 4를 추가했는데 numsCopy에도 들어있다.. 이유는  
// 새로운 배열을 추가한 것이 아닌 numsCopy가 nums의 주소를 가지고있기 떄문이다.  
nums === numsCopy // -> true
```

## 배열과 const
```js
const PI = 3.14;
PI += 1; // 오류! const(상수)

const nums = [1, 2, 3];
nums.push(4);
nums[0] = 9;
console.log(nums); // -> [9, 2, 3, 4]
```
const는 상수인데 왜 배열은 값의 변경이 가능할까?  
바꾸는건 nums가 아닌 nums가 가르키고있는 배열의 값이기 떄문  
아무리 값을 추가, 제거, 변경해도 결국 nums는 배열의 주소를 가르키기만 하고 바뀌는건 없다.  
하지만) nums = [12, 23, 34]; 는 불가능하다 ! 왜?  
**전혀다른 배열이 생성되어 `nums`가 가르키는 배열의 주소값이 바뀌기떄문.**





