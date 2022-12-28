/* --------------------------------------------------------------------- */
/* Global This                                                           */
/* --------------------------------------------------------------------- */

var objectVariable = '전역 객체의 변수';
let declarativeVaribale = '전역 변수';

console.log(globalThis.objectVariable);
console.log(globalThis.declarativeVaribale);

console.log(window, self, globalThis);