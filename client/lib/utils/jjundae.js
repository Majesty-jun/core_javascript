
const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
}

export const jjundae = async (options = {}) => {

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {...(defaultOptions.headers ?? {}), ...(options.headers ?? {})}
  };

  let response = await fetch(url, restOptions)
  // console.log(response)
  // response.then((res) => console.log(res))
  if(response.ok) {
    // response.json(): 
    response.data = await response.json()
  }

  return response;
}

jjundae.get = (url, options) => {
  return jjundae({
    url,
    // 모든 추가 옵션들을 받아서 보내기 위해 전개연산자 사용
    ...options
  })
}

jjundae.post = (url, body, options) => {
  return jjundae({
    method: 'POST',
    url,
    // 통신할 때는 객체를 문자화 해서 넘겨야 하니까 body를 객체로 받아서 stringify 실행.
    body: JSON.stringify(body),
    ...options
  })
}

jjundae.put = (url, body, options) => {
  return jjundae({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

jjundae.delete = (url, options) => {
  return jjundae({
    method: 'DELETE',
    url,
    ...options
  })
}

// 나온 값은 response라는 promise 객체. 따라서 await을 통해서 한번 더 분해? 해주어야 함.
// console.log( await jjundae() );