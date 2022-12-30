/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다. 
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환
// ?? → null, undefined 가 아닌 값을 반환 

const WIDTH = '10px';
let boolean = false

console.log( null || WIDTH );
console.log( null ?? WIDTH );

console.log( undefined || WIDTH );
console.log( undefined ?? WIDTH );

console.log( true || WIDTH );
console.log( false || WIDTH );

console.log( true ?? WIDTH );
console.log( false ?? WIDTH );

console.log( boolean || WIDTH ); // boolean 값이 false이기 때문에 WIDHT 값 반환.
console.log( boolean ?? WIDTH ); // boolean 값에 사용자가 false값을 직접 할당했다고 판단하기 때문에 false 반환.

console.log( '' || WIDTH );
console.log( '' ?? WIDTH );




