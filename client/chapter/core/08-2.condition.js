/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;

if (age >= 14 && age <= 90) {
  console.log("14세 이상 90세 이하에 속하시네요!");
} else {
  console.log("14세 미만 어린이 친구이거나 90세 초과 멋진 어르신분이시군요!");
}


let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFlasy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};

let userName = prompt("사용자 이름을 입력해 주세요.", "");
let message;

if (userName?.toLowerCase() === 'admin') {
  let password = prompt('비밀번호를 입력해 주세요.', "");
  if (password?.toLowerCase() === 'themaster') {
    console.log('환영합니다!');
  } else if (password === '' || password === null) {
    console.log('canceled');
  } else {
    console.log('Wrong Password');
  }
} else if (userName.replace(/\s*/g,'') === '' || userName === null) {
  console.log('canceled');
} else {
  console.log("i don't know you");
}
