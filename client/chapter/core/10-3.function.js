/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = (...args) => {
  let total = 0;
  args.forEach((item, index) => {
    total += item;
  })
  return total;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;


// 화살표 함수와 this
// 일반 함수의 This : 나를 호출한 대상
// 화살표 함수의 this : this를 찾지도 않음. -> 그냥 부모만 찾음
function normalFunction() {
  console.log('일반함수 : ', this);
}

const arrowFunction = () => {
  console.log('화살표 함수 : ', this); // 화살표 함수는 this를 바인딩 하지 않음.
}

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this 를 찾기 위해서는 arrowFunction 이 오히려 좋아
const user = {
  name: 'hajun',
  age: 23,
  address: '경기도 화성시 산척동',
  grades: [80, 90, 100],
  totalGrades: function() {
    
    function foo() {
      console.log(this);
    }

    const bar = () => {
      console.log(this);
    }

    foo() // user
    foo.call(user) // user object
    bar() // user object

  }
}

user.totalGrades();


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for(let i = 0; i < powerCount; i++)
    result *= numeric;
  return result;
}; 
console.log('pow :', pow(2, 3));

let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc => acc * numeric, 1);
console.log('powExpression :',powExpression(2, 3));

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for(let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};
console.log('repeat() :',repeat('hi', 3));

let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc += text, "");
console.log('repeatExpression()',repeatExpression('hi', 3));