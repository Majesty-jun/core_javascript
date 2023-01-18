
import { refError } from '../error/refError.js';
import { typeError } from '../error/typeError.js';
import { insertLast } from '../dom/insert.js';

/* 
  readyState
  0: uninitialized // 초기화, open하지 않았을 경우
  1: loading // 로딩, 요청(send)하지 않았을 경우
  2: loaded // 로딩 완료
  3: interactive // 인터렉티브
  4: complete // 완료
 */

/* 
const xhr = new XMLHttpRequest();


// 비동기 통신 오픈 method(CRUD), URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');


xhr.addEventListener('readystatechange', () => {
  if(xhr.status >= 200 && xhr.status < 400) {
    if(xhr.readyState === 4) {
      console.log('통신 성공');
    }
  }else {
    console.log('통신 실패');
  }
})

// 서버에 요청
xhr.send();
 */

// 동일출처정책은 우리 잘못이 아니다.

export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  // Request를 보낼 때 Content-type: application/json 은 Header에 꼭 보내야 한다.
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
} = {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  // 헤더를 배열로 받아서 key, value로 구조분해 할당 후, Header의 key, value로 세팅
  /*  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  }) */

  // 객체 구조 분해 할당
  xhr.addEventListener('readystatechange', () => {
    const {status, readyState, response} = xhr;
    if(status >= 200 && status < 400) {
      if(readyState === 4) {
        console.log('통신 성공');
        onSuccess(JSON.parse(response));
      }
    }else {
      onFail('통신실패');
    }
  })
  xhr.send(JSON.stringify(body));
}

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}

// xhrData.delete(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (result) => console.log(result),
//   (err) => refError(err)
// );


/* xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
  "name": "JJUNDAE",
  "username": "hajun",
  "email": "hkwns01@naver.com",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}); */


// promise API

const defaultOptions = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: null
}

export function xhrPromise(options = {}) {
  
  const xhr = new XMLHttpRequest();
  
  const {url, method, headers, body} = Object.assign({}, defaultOptions, options); // {} 를 해줘야 새로운 객체를 생성해서 얕은 복사, 함성을 진행

  if(!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.');

  xhr.open(method, url);
  
  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', ()=>{
      const {status, readyState, response} = xhr;
      if(status >= 200 && status < 400) {
        if(readyState === 4) {
          resolve(JSON.parse(response));
        }
      }else {
        reject('error입니다.');
      }
  })
  })
}


xhrPromise.get = (url) => {
  return xhrPromise({
    url
  })
}

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST'
  })
}

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT'
  })
}

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE'
  })
}
