
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
