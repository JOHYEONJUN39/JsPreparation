// // String.prototype.shout = function() {
// //     return `AHHHHH ${this.toUpperCase()} !!!!!!!!`;
// // }

// // Array.prototype.pop = function() {
// //     return "요소를 삭제할 수 없습니다.";
// // }

// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//         // console.log(this);
//     }
//     innerRGB() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb() {
//         return `rgb(${this.innerRGB()})`;
//     }
//     rgba(a = 1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`;
//     }
//     hex() {
//         const { r, g, b } = this;
//         return (
//             '#' +
//             ((1 << 24) + (r << 16) + (g << 8) + b)
//                 .toString(16)
//                 .slice(1)
//         );
//     }
// }

// const navColor = new Color(230, 126, 34, 'carrot');
// const logoColor = new Color(46, 126, 34, 'emerald');

// function hex(r, g, b) {
    
//     return (
//         '#' +
//         ((1 << 24) + (r << 16) + (g << 8) + b)
//             .toString(16)
//             .slice(1)
//     );
// };

// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
// };

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function() {
//         const { r, g, b } = this;
//         return (
//             '#' +
//             ((1 << 24) + (r << 16) + (g << 8) + b)
//                 .toString(16)
//                 .slice(1)
//         );
//     };
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// const secColor = makeColor(0, 0, 0);


// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };

// Color.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// const color1 = new Color(40, 255, 60);
// const color2 = new Color(0, 0, 0);


// 1. new 키워드를 사용하여 함수를 호출하면 this는 빈 객체를 가리킨다.
// 2. this에 프로퍼티를 추가한다.
// 3. this를 반환한다.
// 4. new 키워드를 사용하지 않고 함수를 호출하면 this는 전역 객체를 가리킨다.

class Color {
    // 생성자
    constructor(r, g, b, name) {
        console.log("생성자 호출");
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet() {
        return `HELLO FROM ${this.name}!`;
    }

    rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
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

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

}

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");