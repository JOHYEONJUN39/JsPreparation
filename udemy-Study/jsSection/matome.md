## 배열의 등가성 配列の等価性
`[`h1`, `bye`] === [`h1`, `bye`]`; -> false
배열을 비교할때는 메모리 주소값을 비교하기때문에 내용물은 중요하지않다.  

let nums = [1, 2, 3];  
let numsCopy = nums;  
nums배열의 **주소를** numsCopy에게 넘겨준다.  
nums.push(4); (배열 끝에  요소추가)  
console.log(numsCopy); -> [1, 2, 3, 4]  
분명 nums에 4를 추가했는데 numsCopy에도 들어있다.. 이유는  
새로운 배열을 추가한 것이 아닌 numsCopy가 nums의 주소를 가지고있기 떄문이다.  
nums === numsCopy -> true  

