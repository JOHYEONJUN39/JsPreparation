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

// class Color {
//     // 생성자
//     constructor(r, g, b, name) {
//         console.log("생성자 호출");
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//         this.calcHsl();
//     }

//     greet() {
//         return `HELLO FROM ${this.name}!`;
//     }

//     rgb() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
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

//     rgba(a = 1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`;
//     }

//     innerRGB() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`;
//     }

//     hsl() {
//         const { h, s, l } = this;
//         return `hsl(${h}, ${s}%, ${l}%)`;
//     }

//     calcHsl() {
//         let { r, g, b } = this;
//         // Make r, g, and b fractions of 1
//         r /= 255;
//         g /= 255;
//         b /= 255;

//         // Find greatest and smallest channel values
//         let cmin = Math.min(r, g, b),
//             cmax = Math.max(r, g, b),
//             delta = cmax - cmin,
//             h = 0,
//             s = 0,
//             l = 0;
//         if (delta == 0) h = 0;
//         else if (cmax == r)
//             // Red is max
//             h = ((g - b) / delta) % 6;
//         else if (cmax == g)
//             // Green is max
//             h = (b - r) / delta + 2;
//         // Blue is max
//         else h = (r - g) / delta + 4;

//         h = Math.round(h * 60);

//         // Make negative hues positive behind 360°
//         if (h < 0) h += 360;
//         // Calculate lightness
//         l = (cmax + cmin) / 2;

//         // Calculate saturation
//         s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//         // Multiply l and s by 100
//         s = +(s * 100).toFixed(1);
//         l = +(l * 100).toFixed(1);

//         return `hsl(${h}, ${s}%, ${l}%)`;
//     }

//     fullySaturated() {
//         const { h, l } = this;
//         return `hsl(${h}, 100%, ${l}%)`;
//     };

// }

// const red = new Color(255, 67, 89, "tomato");
// const white = new Color(255, 255, 255, "white");
// const carrot = new Color(230, 126, 34, "carrot");




class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Cat extends Animal{
    constructor(name, age, jumpHeight = 5) {
        super(name, age);
        this.jumpHeight = jumpHeight;
    }
    meow() {
        console.log("MEOWWWW!!");
    }

}

class Dog extends Animal{
    bark() {
        console.log("BARKKKKK!!");
    }

}