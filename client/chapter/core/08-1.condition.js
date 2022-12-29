/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = +prompt("숫자를 입력해 주세요.");
if(number > 0) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else {
  console.log(0);
}


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';


// if 문(statement)
if (didWatchMovie === 'yes') {
  console.log("어? 나 어제 친구랑 그거 봤는데??");
} else if (goingToWatchMovie === 'yes') {
  console.log("같이 보러 갈래 베이비?");
} else {
  console.log("왜 이렇게 집착해;;");
}

let movieMessage = (didWatchMovie === 'yes') ? "어? 나 어제 친구랑 그거 봤는데??" : 
  (goingToWatchMovie ==='yes') ?  "같이 보러 갈래?" : "왜 이렇게 집착해;;" ;


// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식