/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

const arr = [10, 100, 1000, 10000];

// Array.isArray

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "array";
}

function isNull(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "Null";
}

console.log(typeof arr) //object
console.log(Array.isArray(arr));

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

arr.forEach(function(element, index){
  this[index] = element;
}, user);

console.log(user);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
/* arr.reverse();
console.log(arr); */

// splice
arr.splice(1, 0, 23, 5);
console.log(arr);
// sort
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다
arr.sort((a, b) => a - b);
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ['밥먹기', '헬스장가기', '공부하기'];

let template = todo.map(todoList => /* html */`<li>${todoList}</li>`)

template.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
})

let newArr = arr.map((item) => item * 2);
console.log(newArr);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
console.log(arr.indexOf(100));

// lastIndexOf
// includes
console.log( arr.includes(100) );

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'하준'},
  {id:2,name:'윤혁'},
  {id:3,name:'현'},
]

// find : 조건에 해당하는 대상을 찾으면 대상을 리턴 후 메서드 종료. 1개만 찾음

const find = users.find((item, index) => item.id === 3);
console.log('find',find)

// findIndex
const findIndex = users.findIndex((item) => item.id === 3);
console.log('findIndex',findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter : find와 달리 조건에 해당하는 대상을 계속 찾고, 배열로 리턴.
let result = arr.filter((number) => number > 100)
console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

// reduce
// 친구들 나이의 총 함을 구하세요.
let totalAge = friends.reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAge);

let template2 = todo.reduce((acc, cur) => acc + `<li>${cur}</li>`, '');
console.log(template2)

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현';

// split
let nameArray = str.split(' ');
console.log(nameArray);

// join
console.log(nameArray.join(' / '));
