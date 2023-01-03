/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// let resultX = calcTotal(10000, 8900, 1360, 2100);
// let resultY = calcTotal(21500, 3200, 9800, 4700);
// let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  // arguments : 함수 내에서 사용할 수 있는 유사배열. 함수에서 받는 모든 인수들을 순서대로 담아놓는 역할.
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.

  // 유사배열은 배열이 아니다. 고로 배열의 메서드를 사용하려면 진짜 배열로 만들어야 한다.
  // 배열의 메서드 : forEach, reduce 등

  let total;


  let arr1 = Array.from(arguments); // static method
  // let arr2 = Array.prototype.slice.call(arguments); // Instance method

  // arr1.forEach(function(item, index) {
  //   total += item;
  // });

  // acc : 누적값, current : 현재값 을 통한 연산 가능
  return arr1.reduce(function(acc, current) {
    return acc + current;
  })

  /* for(let value of arguments) {
    total += value;
  }

  for(let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return moneyA + moneyB + moneyC + moneyD; */
};

console.log(calculateTotal(100, 500, 300, 150, 400, 700));


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function() {};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {}; // 함수의 이름만 정의가 된 것. 'hello를 호출하여 함수 실행은 불가.


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  if(typeof url === 'string' && url.match(/http.+www/)) {
    resolve(url)
  } else {
    reject();
  }
};

callbackFunctionExpression(
  'https://www.naver.com',
  function(url) {
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function() {
    throw new Error('url 입력 정보가 올바르지 않습니다.');
  }
)

// 함수 선언문 vs. 함수 (표현)식
function aa() {

}

const bb = function() {}

// 호이스팅, 스코프, 구문 등의 차이가 있다.

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

//  함수가 선언 됨과 동시에 실행되는 것을 말합니다.

let IIFE;

const MASTER = (function ($) {
  // parameter
  const KEY = "alcls@#@!$%";

  // 내가 내보내고 싶은 항목들만 내보낼꺼야
  // 모듈로서의 활용
  // 정보 은닉화 incapsulation : 외부의 접근을 차단
  // 일부 정보만 노출

  // console.log($(".first"));

  return {
    getKey: function () {
      return KEY;
    },
  };
})(getNode); // arguments

function getNode(node) {
  return document.querySelector(node);
}

console.log(MASTER.getKey());
