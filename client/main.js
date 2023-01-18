import { insertLast, xhrData, xhrPromise } from "./lib/index.js";


/* 
xhrData.get(
  'https://jsonplaceholder.typicode.com/user/1',
  res => {
    console.log(res);
    insertLast('body', (res.address.city));
  },
  err => insertLast('body', err)
)
*/



/* 
xhrPromise.get('https://jsonplaceholder.typicode.com/users/1')
.then(res => insertLast(document.body, JSON.stringify(res)))
.catch(err => console.log(err))
 */


