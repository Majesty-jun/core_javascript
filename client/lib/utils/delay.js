
import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';






const first = getNode('.first');
const second = getNode('.second');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = '0px';
//     })
//   })
// })

/* delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  second.style.left = '100px';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
  second.style.left = '0px';
}) */

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생하였습니다.'
}

export function delayP(options = {}) {
  
  let config = {...defaultOptions};
  if(isNumber(options)) config.timeout = options;
  if(isObject(options)) config = {...config, ...options};

  const {shouldReject, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage)
    }, timeout);
  })
} 

/* 
delayP({
  timeout: 1500,
  data: '성공입니다~~~'  
}
).then(res => console.log(res));
 */
/* 
delayP()
.then(res => console.log(res))
.catch(err => console.log(err))
 */


// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오는 역할.
//         2. 코드 실행 흐름 제어

async function delayA() {
  return '완료'
}

let result = await delayA();

async function move() {
  try {
    await delayP()
    first.style.top = '-100px';
    await delayP()
    first.style.transform = 'rotate(360deg)';
    await delayP()
    first.style.top = '0px';
    await delayP()
    second.style.left = '100px';
    await delayP()
    second.style.left = '0px';
  }catch(err) {
    console.log(err);
  }
}

move();
// console.log(result);

