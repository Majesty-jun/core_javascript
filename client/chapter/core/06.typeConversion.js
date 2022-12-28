/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> "2022"
const YEAR = 2022;

console.log(typeof String(YEAR));

// undefined -> "undefined"
// null -> "null"
console.log(typeof String(undefined));
let days = null;
console.log(typeof String(days));

// boolean -> "true" of "false"
let isKind = true;
console.log(typeof (isKind + ""));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined -> NaN
console.log(Number(undefined));

// null -> 0
let money = null;
console.log(Number(money));

// boolean -> false: 0, true: 1
// *1
// /1
// +
let isCute = true
console.log(isCute * 1);

// string
let num = '      123     ';
console.log(num*1);

// numeric string
let width = '320px';
console.log(Number(width));

// parseInt 정수만 뽑아서 숫자로 형변환 해 주는 함수 (소수점도 사라짐)
// parseFloat 실수를 뽑아서 숫자로 형변환 해 주는 함수 (소수점 포함)


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' -> false
// 위에 나열한 것 이외의 것들 -> true

// '' -> false ' ' -> true
// 0 -> false "0" -> true