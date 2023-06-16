## 프로토타입이란?
```js
[]
length: 0
[[Prototype]]: Array(0)
```
- 자바스크립트 오브젝트가 서로의 기능을 상속(계승)하는 기능
- 상속을 제공하기위해 오브젝트는 프로토타입 오브텍트를 가질 수 있다.
```js
[1,2,3].push(4) // [1,2,3,4]
```
- push라는 메소드는 어디에있을까?
  - 프로토타입오브젝트에 모든 배열 오브젝트가 들어있다.
```js
// Array의 프로토타입오브젝트에 들어있는 보든 오브젝트를 확인해보면
Array.prototype
// 아래와 같이 확인가능
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: 
ƒ toSorted()toSpliced
: ƒ toSpliced()
toString: 
ƒ toString()unshift
: ƒ unshift()
values: ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
```
*프로토타입을 가지고놀아보자*
```js
// String의 프로토타입에 새롭게 shout라는 메소드를 정의
String.prototype.shout = function() {
    // "WOW".shout(); -> AHHHHH WOW !!!!!!!!
    return `AHHHHH ${this.toUpperCase()} !!!!!!!!`;
}
// Array의 프로토타입의 기존에있던 pop메소드를 변경하는것도 가능
Array.prototype.pop = function() {
    // [1,2,3].pop() -> "요소를 삭제할 수 없습니다."
    return "요소를 삭제할 수 없습니다.";
}
```
**편집을 할때는 반드시 prototype을 수정 __proto__ 는 접근 X**
## 객체지향 프로그래밍
```js
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        // console.log(this);
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return (
            '#' +
            ((1 << 24) + (r << 16) + (g << 8) + b)
                .toString(16)
                .slice(1)
        );
    }
}

const navColor = new Color(230, 126, 34, 'carrot');
const logoColor = new Color(46, 126, 34, 'emerald');
```
자바에서 배운것처럼 클래스를 지정해 객체를 생성하는것이 가능하다!  
### 팩토리 함수
```js
function hex(r, g, b) {
    
    return (
        '#' +
        ((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16)
            .slice(1)
    );
};

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
};

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const { r, g, b } = this;
        return (
            '#' +
            ((1 << 24) + (r << 16) + (g << 8) + b)
                .toString(16)
                .slice(1)
        );
    };
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex() // '#23ff96'
```
- 팩토리함수는 객체지향개념 이전에 사용하던 함수
팩토리함수를 사용함으로써 인스턴스, 메소드를 작성하는것이 가능  
그럼 어째서 팩토리함수를 사용하지않는걸까? 콘스트럭터 함수를 배우며 알아보자
**팩토리함수의 디메리트**
- makeColor라는 함수를 호출할때마다 안에있는 rgb, hex 메소드는 전부 새로 생성된다.  
  이것은 아래와같이 증명할 수 있다.
```js
const firstColor = makeColor(35, 255, 150);
const black = makeColor(0, 0, 0);
firstColor.hex === black.hex // false
```
두 함수를 비교해보면 false가 나오게된다.
```js
"h1".slice === "bye".slice // true
```
위는 true가 나온다.
모든 스트링에대해 새로 만드는 함수가아니기 때문  
String자체에는 slice라는 메소드가 정의되어있는것이 아닌  
prototype의 String에 정의되어있는 메소드를 사용하기때문
### 콘스트럭터 함수
```js
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
};

new Color(25, 32, 11);
// 결과
Color {r: 25, g: 32, b: 11, rgb: ƒ}
b: 11
g: 32
r: 25
rgb: ƒ ()
[[Prototype]]: Object
```
*프로토타입에 넣어보자*
```js
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
};

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};
```
1. new 연산자로 새로은 객체가 생성된다.
2. 그 객체의 프로토타입에 Color라는 프로토타입이 링크된다.
3. 새로운 객체는 this가 된다.
4. 그 this에 프로퍼티가 생성된다.
5. this가 반환된다.
```js
// 새로운 객체를 찍어보자
const color1 = new Color(40, 23, 11);
// 결과
Color {r: 40, g: 23, b: 11, rgb: ƒ}
b: 11
g: 23
r: 40
[[Prototype]]: Object
    rgb: ƒ ()
```
프로토타입에 rgb메소드가있는걸 확인할 수 있다.
- 팩토리함수의 경우에는 100개 Color객체를 찍으면 메소드도 100개찍히게되는것
- 콘스트럭터를 사용하면 1개의 메소드를 정의하여 새로운 객체를 찍어 사용할 수 있는것
```js
const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);
color1.rgb() // 'rgb(40, 255, 60)'
color2.rgb() // 'rgb(0, 0, 0)'
```
위 결과값이 다른 이유는  
rgb메소드에서 가르키는 this는 .의 왼쪽 즉 color1, color2 의 각각 객체를 가르키는 것  
```js
color1.rgb === color2.rgb // true
```
이번에야말로 같은 프로토타입 메소드임을 나타낸다.
### JavaScript의 클래스
### extends와 super